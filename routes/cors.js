const express = require('express');
const cors = require('cors');
const app = express();

const whitelist = ['http://localhost:3000', 'http://localhost:4200', 'http://localhost:3000/call', 'http://localhost:3000/db'];
var corsOptionsDelegate = (req, callback)=>{
    var corsOptions;

    if(whitelist.indexOf(req.header('Origin')) !== -1){
        corsOptions = { origin: true };
    }
    else {
        corsOptions = {origin:true};
    }
    callback(null, corsOptions);
};

exports.cors = cors();
exports.corsWithOptions = cors(corsOptionsDelegate);