
var express = require('express');
var router = express.Router();
//var Product = require('../models/products');

module.exports = function(app){

app.get('/', function(req, res){
console.log("working")
res.render('pages/index.ejs');
});

app.get('/login', function(req, res){
  res.render('pages/login.ejs');
});

app.get('/register', function(req, res){
  res.render('pages/register.ejs');
});

app.get('/contact-us', function(req, res){
  res.render('pages/contact-us.ejs');
});

app.get('/services', function(req, res){
  res.render('pages/service.ejs');
});

app.get('/portfolio', function(req, res){
  res.render('pages/portfolio.ejs');
});

app.get('/about-us', function(req, res){
  res.render('pages/about-us.ejs');
});


};
