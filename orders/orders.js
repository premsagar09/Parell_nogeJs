// orders api section 

const express =require('express');
const pool = require('../mysql/mysql');
const route = express.Router();

// CRUD opertions by using mysql database and node js 

route.get('/', (req, res)=>{
    pool.query(`select * from dashboard.orders`, (err, result)=>{
        if (err){
            res.send("Error In Getting data of orders from  database...");
        }else{
            res.send(result);
        }
    });
});

//exporting to main folder 

module.exports = route;