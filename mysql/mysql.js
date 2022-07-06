// connecting to mysql server 

const mysql =require('mysql');

const pool = mysql.createConnection({
    host : "localhost",
    user:"root",
    password:"Absyz@123",
    database:"mysql"
});

pool.connect((err)=>{
    if (err){
        throw err;
    }
    else{
        console.log('connected...');
    }
});

module.exports = pool;