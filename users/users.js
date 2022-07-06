// users section 

const express =require('express');
const pool = require('../mysql/mysql');
const route = express.Router();
const verify = require('../pev'); // {checkvalidpassword, checkPhoneNumber}

// console.log(verify.checkemailid('premagar3303@gmail.com'))
// console.log(verify.checkvalidpassword('Prem0@123'))
// console.log(verify.checkfullname('premsagar macharla'))
// console.log(verify.checkPhoneNumber('9398138335'))
// console.log(verify.checkusername('premsagar'))

// CRUD opertions by using mysql database and node js

route.get('/', (req, res)=>{
    pool.query(`select * from dashboard.users`, (err, result)=>{
        if (err){
            res.send("Error In Getting data of users from  database...");
        }else{
            res.send(result);
        }
    });
});

route.post('/signin', (req, res)=>{

    pool.query(`SELECT Id,emailid, phoneNumber FROM dashboard.users;`, (err, result)=>{
        if(err){
            res.send("error at email verification")
        }
        else{
             
            if(result.find(c=>c.emailid === 'natra.@gmail.com')) res.send("Email already exists..");
            if(result.find(c=>c.phoneNumber === '93345694348')) res.send("phone Number already exists ..")
            res.send(result)
        }
    })
})

//exporting to main folder  

module.exports = route;