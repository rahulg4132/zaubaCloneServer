var express = require('express');
var callRouter = express.Router();
var request = require('request');
const cors = require('./cors');

//----------------------------------
callRouter.route('/:src')
.options(cors.cors, (req, res)=>{
    res.sendStatus(200);
})
.get(cors.cors, (req, res, next)=>{    

    const options = {
        url: 'https://www.zaubacorp.com/custom-search',
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8',
            'User-Agent': 'my-reddit-client',
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        form: {
            'search': req.params.src,
            'filter': 'company'
        }
    };  
    request(options, function(err, resp, body) {        
        res.statusCode = 200;
        //res.setHeader('Content-Type','text/html');
        res.send(body);
    });
    
})
.put(cors.cors, (req,res,next)=>{
    res.statusCode = 403;
    res.end('PUT operation not supported on /call');
})
.post(cors.cors, (req,res,next)=>{
    res.statusCode = 403;
    res.end('POST operation not supported on /call');
})
.delete(cors.cors, (req,res,next)=>{
    res.statusCode = 403;
    res.end('DELETE operation not supported on /call');
});

module.exports = callRouter;