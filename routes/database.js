var express = require('express');
var dbRouter = express.Router();
const bodyParser = require('body-parser');
const companies = require('../models/company');
const cors = require('./cors');

//----------------------------------
dbRouter.route('/')
.options(cors.cors, (req, res)=>{
    res.sendStatus(200);
})
.get(cors.cors, (req,res,next)=>{
    companies.find()
    .then((company)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(company);
    },(err)=>next(err))
    .catch((err)=>next(err));
})
.put(cors.cors, (req,res,next)=>{
    res.statusCode = 403;
    res.end('PUT operation not supported on /db');
})
.post(cors.cors, (req,res,next)=>{
    companies.create(req.body)
    .then((company)=>{
        console.log('Company added',company);
        res.setHeader('Content-Type','application/json');
        res.statusCode=200;
        res.json(company);
    },(err)=>next(err))
    .catch((err)=>next(err));
})
.delete(cors.cors, (req,res,next)=>{
    res.statusCode = 403;
    res.end('DELETE operation not supported on /db');
});

module.exports = dbRouter;