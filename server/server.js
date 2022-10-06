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
    const sqlInsert = "Insert into User(user_type, user_fname, user_lname, user_mname, user_email, "+
    "user_pass, user_gender, user_contact, user_stat, user_registration_date, user_expiration_date) values(?,?,?,?,?,?,?,?,?,?,?)";

    bcrypt.hash(req.body.pass, saltRounds, (err, hash) => {

        if(err){
            console.log(err);
        }

        db.query(sqlInsert,[req.body.type, req.body.fname, req.body.lname, req.body.mname, req.body.email, hash, req.body.gender
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
                    req.session.user =  {email: result[0]['user_email'], role: result[0]['user_type'],id: result[0]['user_id']};
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
    file.mv('../main-library-system/src/assets/uploads/'+filename,(err)=>{
        if(err){
            console.log(err)
        }
    })
})

app.post('/addNewRecord', async (req,res)=>{
  
    const unique_id = uuid();
    const small_id = unique_id.slice(0,8);
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


    if(filterData.length > 0 && req.body.copies > 0 && req.body.bookCover){

        sqlInsert = 'Insert into Book (book_id,book_quantity,book_image,user_id) values(?,?,?,?)';

        try{

           await db.query(sqlInsert,[small_id,req.body.copies,req.body.bookCover,req.session.user.id],(err, result)=>{

                if(err){
                    return res.send({errors: [err]});
                }
                if(result){
                
                    filterData?.map((item)=>{
                      
                        item.map((fitem, index)=>{

                            const field_id = small_id.concat(index);

                            let indOne = null;
                            let indTwo = null;

                            if(fitem?.indicators){
                                indOne = fitem.indicators[0]
                                indTwo = fitem.indicators[1];
                            }

                            sqlInsert = 'Insert into Field (field_id,book_id,field_name,field_code,field_indicator_one,field_indicator_two) values(?,?,?,?,?,?)';

                            db.query(sqlInsert,[field_id,small_id,fitem.name,fitem.code,indOne,indTwo],(err, result)=>{
                                if(err){
                                    console.log(err);
                                }
                                if(result){

                                    fitem.subFields.map((sitem,index)=>{

                                        sqlInsert = 'Insert into Subfield (sub_name,sub_code,sub_value,field_id) value(?,?,?,?)';

                                        db.query(sqlInsert,[sitem.name,sitem.code,sitem.value,field_id],(err,result)=>{
                                            if(err){
                                                console.log(err);
                                            }
                                            
                                        })
                                    })
                                }
                            })
                            
                        })
                    })
                    return res.send({message:"Book added successfully"})
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


app.get('/logout', (req,res)=>{
    if(req.session.user){
        req.session.destroy();
        res.send({isLoggedOut: true});
    }
})


//Register test!!
// app.get('/test', (req,res) => {
//     const sqlInsert = "Insert into User(user_type, user_fname, user_lname, user_mname, user_email, "+
//     "user_pass, user_gender, user_contact, user_stat) values(?,?,?,?,?,?,?,?,?)";

//     bcrypt.hash('1234567', saltRounds, (err, hash) => {

//         if(err){
//             console.log(err);
//         }

//         db.query(sqlInsert,['admin','Natalie', 'Sagnoy', 'Invento','natalie@gmail.com', hash, 'female'
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