// products apis section 

const express =require('express');
const pool = require('../mysql/mysql');
const route = express.Router();

// CRUD opertions by using mysql database and node js

route.get('/', (req, res)=>{
    pool.query(`select * from dashboard.products;`, (err, result)=>{
        if (err){
            res.send("Error In Getting data of products from  database...");
        }else{
            res.send(result);
        }
    });
});

//getting by brand id

route.get('/:id', (req, res)=>{
    const id =req.params.id
    pool.query(`select brand_name from dashboard.brands
    where id =${id};`,(err, result)=>{
        if(err){
            res.send("error in getting brands");
        }
        else{
            const brand_name = result[0].brand_name
            pool.query(`select * from dashboard.products 
                where product_name like "%${brand_name}%";`, (err, result)=>{
                if (err){
                    res.send("brands is not avaliable ..");
                }else{
                    res.send(result);
                }
            });
        }
    });
});

//exporting to main folder  

module.exports = route;