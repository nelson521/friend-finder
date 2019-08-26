let path = require('path')
let router = require('express').Router()


module.exports = function(app) {
  app.get('/survey', function(req, res){
    res.sendFile(path.join(__dirname + '/../public/survey.html'))
  });
  app.use(function(req, res){
    res.sendFile(path.join(__dirname + '/../public/home.html'))
  })
}