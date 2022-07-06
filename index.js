// importing package 

const express = require('express');
const app = express();
const bodyparser = require('body-parser')
const mysql =require('mysql');

// importing required apis from same folder

const pool = require('./mysql/mysql');
const brands = require('./brands/brands');
const orders = require('./orders/orders');
const products = require('./products/products');
const users =require('./users/users');

// using imported apis

app.use(express.json());
app.use(bodyparser.json());
app.use('/brands', brands)
app.use('/orders', orders)
app.use('/users', users)
app.use('/products',products)

// listening on localserver 

app.listen(3000,()=>console.log('runnig on server...'))