const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();

const port = 4200;

require('./src/route')(app, {});

app.listen(port, ()=>{
    console.log("we are smoking at " + port);
});