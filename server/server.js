const { uuid } = require('uuidv4');
const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const path = require('path');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');


//Pass encryption
const bcrypt = require('bcrypt');
const saltRounds = 10;


const fileupload = require('express-fileupload');


//Middleware
app.use(fileupload())
app.use(express.json());
app.use(cors({
    origin:["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true

}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(session({
    key: "user",
    secret: "mcplapplication@777",
    resave: false,
    saveUninitialized: false,
    cookie:{
        httpOnly:true,
    }
}));


//DB connection
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'mcpllibrary'
})






app.post('/register', (req, res) => {
    const sqlUpdate = "Insert into User(user_type, user_fname, user_lname, user_mname, user_email, "+
    "user_pass, user_gender, user_contact, user_stat, user_registration_date, user_expiration_date) values(?,?,?,?,?,?,?,?,?,?,?)";

    bcrypt.hash(req.body.pass, saltRounds, (err, hash) => {

        if(err){
            console.log(err);
        }

        db.query(sqlUpdate,[req.body.type, req.body.fname, req.body.lname, req.body.mname, req.body.email, hash, req.body.gender
            , req.body.contact, req.body.stat, req.body.registrationDate, req.body.expirationDate, 
            (err, result) => {
                if(err){
                    console.log(err);
                }
        
                if(result.length > 0 ){
                    console.log(result);
                }
            }])
    })
})


app.get('/login', (req, res) => {
    if(req.session.user){
        res.send({isLoggedIn: true, res: req.session.user});
    }else{
        res.send({isLoggedIn: false});
    }
})

app.post('/login', (req, res) => {
    const sqlSelect = "Select * from User where user_email =?";

    db.query(sqlSelect,[req.body.email],(err, result) => {

        if(err){
            res.send({err: err});
        }

        if(result.length > 0){

            bcrypt.compare(req.body.pass, result[0]['user_pass'], (err, response) => {
                if(err){
                    console.log(err);
                }
                if(response){
                    req.session.user =  {email: result[0]['user_email'], role: result[0]['user_type'],id: result[0]['user_id'], fullname: result[0]['user_fname'].concat(' ').concat(result[0]['user_lname'])};
                    // console.log(req.session.user);
                    res.send({isLoggedIn: true, message: "Signed in!", res:req.session.user});
                }else{
                    res.send({message: "Incorrect email/password!"});
                }
            })
        }else{
            res.send({message: "User does not exist!"});
        }
        
    })
})

app.post('/uploadBookCover', (req, res) => {

   const file = req.files.imgCover;
   const filename = file.name;

   if(req.session.user){
        file.mv('../main-library-system/public/uploads/'+filename,(err)=>{
            if(err){
                console.log(err)
            }
        })
       
   }
    
})

app.post('/addNewRecord', async (req,res)=>{
  
    const unique_id = uuid();
    const book_id = unique_id.slice(0,8);
    const errors = [];
    let sqlInsert = '';
    
    const filterData =  req.body.fields.filter((item)=>{
                            return item.length > 0;
                        }).map((item)=>{
                        
                            return item.map((item)=>{
                                item.subFields =  item.subFields.filter((item)=>{
                                    return item.value!==''
                                })

                            return item;
                            })
                        
                        }).map((item)=>{
                            return item.filter((item)=>{
                                return item.subFields.length > 0
                            })
                        }).filter((item)=>{
                            return item.length > 0;
                        })

    
    if(req.session.user && filterData.length > 0 && req.body.copies > 0 && req.body.bookCover){

        sqlInsert = 'Insert into Book (book_id,book_quantity,book_image,user_id) values(?,?,?,?)';

        try{

           await db.query(sqlInsert,[book_id,req.body.copies,req.body.bookCover,req.session.user.id],(err, result)=>{

                if(err){

                    return res.send({errors: err});
                }
                if(result){
                
                    filterData?.map((item)=>{
                      
                        item.map((fitem)=>{
                            const unique_id = uuid();
                            const field_id = unique_id.slice(0,8);
 
                            let indOne = null;
                            let indTwo = null;

                            if(fitem?.indicators){
                                indOne = fitem.indicators[0]
                                indTwo = fitem.indicators[1];
                            }

                            sqlInsert = 'Insert into Field (field_id,book_id,field_name,field_code,field_indicator_one,field_indicator_two) values(?,?,?,?,?,?)';

                            db.query(sqlInsert,[field_id,book_id,fitem.name,fitem.code,indOne,indTwo],(err, result)=>{
                                if(err){
                                    console.log(err);
                                }
                                if(result){

                                    fitem.subFields.map((sitem)=>{

                                        sqlInsert = 'Insert into Subfield (sub_name,sub_code,sub_value,field_id) value(?,?,?,?)';

                                        db.query(sqlInsert,[sitem.name,sitem.code,sitem.value,field_id],(err,result)=>{
                                            if(err){
                                                console.log(err);
                                            }
                                            if(result){
                                                console.log(result)
                                            }
                                            
                                        })
                                    })
                                }
                            })
                            
                        })
                    })
                    res.send({message:"Book added successfully"})
                }
            })

        }catch(err){
            console.log(err);
        }

    }else{
        
        if(filterData.length <= 0){
            errors.push("Fields are empty");
        }
        if(req.body.copies <= 0){
            errors.push("No. of copies should be greater than zero");
        }
        if(!req.body.bookCover){
            errors.push("Please upload a book cover image");
        }
        return res.send({errors: errors});
    }

})

app.post('/getBookDet', (req,res)=>{

    let sqlSelect = 'Select * from book inner join field on book.book_id = field.book_id inner join subfield on field.field_id = subfield.field_id where  book.book_id = ?';

    if(req.session.user){
        db.query(sqlSelect,[req.body.id],(err,result)=>{
            if(err){
                console.log(err)
            }
            if(result){
                res.send({result:result})
            }
        })
    }
})


app.get('/getAllBookRec',async (req,res)=>{
   
    let sqlSelect = 'Select * from book inner join field on book.book_id = field.book_id inner join subfield on field.field_id = subfield.field_id where  field.field_code = ? or field.field_code = ? or field.field_code = ? or field.field_code = ? order by book.created_at desc';
   
    if(req.session.user){
        await db.query(sqlSelect,['245','300','260','852'] , (err, result)=>{
            if(err){
                console.log(err);
            }
            if(result){     

                res.send({result: result})
    
            }     
        })
    }
    

})



app.post('/updateRecord', async (req,res)=>{
    const unique_id = uuid();
    const field_id = unique_id.slice(0,8);
    const errors = [];
    let sqlUpdate = '';
    let sqlInsert = '';
    
    const filterData =  req.body.fields.filter((item)=>{
                            return item.length > 0;
                        }).map((item)=>{
                        
                            return item.map((item)=>{
                                item.subFields =  item.subFields.filter((item)=>{
                                    return item.value!=='';
                                })

                            return item;
                            })
                        
                        }).map((item)=>{
                            return item.filter((item)=>{
                                return item.subFields.length > 0
                            })
                        }).filter((item)=>{
                            return item.length > 0;
                        })

    if(req.session.user && filterData.length > 0 && req.body.copies > 0){

        if(req.body?.bookCover){
            sqlUpdate = 'Update Book set book_quantity = ?, book_image = ?, updated_at =? where book_id = ?';
        }else{
            sqlUpdate = 'Update Book set book_quantity = ?, updated_at =? where book_id = ?';
        }
       

        try{

            await db.query(sqlUpdate,req.body?.bookCover ? [req.body.copies,req.body.bookCover,Date.now(),req.body.bookid] : [req.body.copies,Date.now(),req.body.bookid], (err, result)=>{

                if(err){

                    console.log(err);
                }
                if(result?.affectedRows > 0){

                    filterData?.map((item)=>{
                      
                        item.map( (fitem)=>{
 
                            let indOne = null;
                            let indTwo = null;
                            let fid = fitem.id;

                            if(fitem?.indicators){
                                indOne = fitem.indicators[0]
                                indTwo = fitem.indicators[1];
                            }

                            sqlUpdate = 'Update Field  set field_indicator_one = ?, field_indicator_two =? where book_id = ? and field_code = ?';

                            db.query(sqlUpdate,[indOne,indTwo,req.body.bookid,fitem.code],(err, result)=>{
                                if(err){
                                    console.log(err);
                                }
                                if(result?.affectedRows > 0){
                                    sqlUpdate = 'Update Subfield set sub_code =?, sub_value =? where sub_id =?';

                                    fitem?.subFields.map((sitem)=>{

                                        sqlUpdate = 'Update Subfield set sub_code =?, sub_value =? where sub_id =?';

                                        db.query(sqlUpdate,[sitem.code,sitem.value, sitem.id],(err,result)=>{
                                            if(err){
                                                console.log(err);
                                            }
                                            if(result?.affectedRows === 0){
                                                sqlInsert = 'Insert into Subfield (sub_name,sub_code,sub_value,field_id) value(?,?,?,?)';
                                                db.query(sqlInsert,[sitem.name,sitem.code,sitem.value,fid],(err,result)=>{
                                                    if(err){
                                                        console.log(err);
                                                    }
                                                    if(result){
                                                        console.log(result)
                                                        
                                                    }
                                                    
                                                })
                                               
                                            }else if(result?.affectedRows > 0){
                                                console.log(result)
                                            }
                                        })
                                             
                                    })
                                
                                }else if(result?.affectedRows === 0){
                                    sqlInsert = 'Insert into Field (field_id,book_id,field_name,field_code,field_indicator_one,field_indicator_two) values(?,?,?,?,?,?)';

                                    db.query(sqlInsert,[field_id,req.body.bookid,fitem.name,fitem.code,indOne,indTwo],(err, result)=>{
                                        if(err){
                                            console.log(err);
                                        }
                                        if(result){
                                            fitem?.subFields.map((sitem)=>{
            
                                                sqlInsert = 'Insert into Subfield (sub_name,sub_code,sub_value,field_id) value(?,?,?,?)';
        
                                                db.query(sqlInsert,[sitem.name,sitem.code,sitem.value,field_id],(err,result)=>{
                                                    if(err){
                                                        console.log(err);
                                                    }
                                                    if(result){
                                                        console.log(result)
                                                        
                                                    }
                                                    
                                                })
                                            })
                                        }
                                    })
                                }
                            })

                        })

                    })
                    
                    res.send({message:"Book updated successfully"})
            
                }
            })

        }catch(err){
            console.log(err);
        }

    }else{
        
        if(filterData.length <= 0){
            errors.push("Fields are empty");
        }
        if(req.body.copies <= 0){
            errors.push("No. of copies should be greater than zero");
        }

        return res.send({errors: errors});
    }

    
    

})

app.post('/search-book',(req,res)=>{

    if(req.session.user){
        console.log(req.body)
    }
})

app.post('/delete-record',(req,res)=>{

    let sqlDelete = 'Delete from book where book_id = ?';

    if(req.session.user){
        db.query(sqlDelete,[req.body.id],(err,result)=>{
            if(err){
                console.log(err)
            }
            if(result){
                res.send({result:result})
            }
        })
    }
})


app.get('/logout', (req,res)=>{
    if(req.session.user){
        req.session.destroy();
        res.send({isLoggedOut: true});
    }
})


//Register test!!
// app.get('/test', (req,res) => {
//     const sqlUpdate = "Insert into User(user_type, user_fname, user_lname, user_mname, user_email, "+
//     "user_pass, user_gender, user_contact, user_stat) values(?,?,?,?,?,?,?,?,?)";

//     bcrypt.hash('1234567', saltRounds, (err, hash) => {

//         if(err){
//             console.log(err);
//         }

//         db.query(sqlUpdate,['admin','Natalie', 'Sagnoy', 'Invento','natalie@gmail.com', hash, 'female'
//             , '09772103342', 'online'], 
//             (err, result) => {
//                 if(err){
//                     console.log(err);
//                 }
        
//                 if(result){
//                     console.log(result);
//                 }
//             })
//     })
// })



app.listen(3030, ()=>{
    console.log("Server is running at port 3030");
})