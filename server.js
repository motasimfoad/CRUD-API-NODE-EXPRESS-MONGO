const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');

const app = express();

const port = 4200;

app.use(bodyParser.urlencoded({extended : true}));

require('./src/route')(app, {});

MongoClient.connect(db.url, (err, database) =>{
    if(err)
    return console.log(err);
    require('./src/route')(app, database);
});



app.listen(port, ()=>{
    console.log("we are smoking at " + port);
});