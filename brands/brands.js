// brands apis section 

const express =require('express');
const pool = require('../mysql/mysql');
const route = express.Router();

// CRUD opertions by using mysql database and node js

route.get('/', (req, res)=>{
    pool.query(`UPDATE dashboard.brands
    SET status_brand = "${req.body.status}",
    updated_date = CURRENT_TIMESTAMP()
    WHERE Id=1;`, (err, result)=>{
        if (err){
            res.send("Error In Getting data of brands from  database...");
        }else{
            res.send(result);
        }
    });
});



//exporting to main folder  

module.exports = route;