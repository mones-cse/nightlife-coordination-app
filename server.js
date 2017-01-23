//===========module=============//
var ejs =require('ejs');
var bodyParser = require('body-parser') 
//===========expres=============//
var express =require('express');
var app =express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(8080);
//==========yalp api call======//
var request_yelp = require('./app/yelp_api')
//========== route ========== //
require('./app/route')(app,request_yelp);
//========= mongo ============//
var mongoose =require('mongoose');
mongoose.connect(process.env.DB_URL);




