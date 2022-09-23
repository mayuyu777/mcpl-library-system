const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

//Pass encryption
const bcrypt = require('bcrypt');
const saltRounds = 10;


//Middleware
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
    cookie: {
        httpOnly: true,
        expires: 60 * 60 * 24,
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
                    req.session.user =  {email: result[0]['user_email'], role: result[0]['user_type'] };
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