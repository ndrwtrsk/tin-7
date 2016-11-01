var express = require('express'),
  router = express.Router(),
  Article = require('../models/article'),
  bodyParser = require('body-parser');
module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  var articles = Article.all();
  var data = {
    articles: articles
  };
  res.render('index', data);
});


router.get('/article/:id', function(req, res){
  var article = Article.findById(req.params.id);
  res.render('details', {article: article});
});

router.post('/article/create', bodyParser.urlencoded({extended: false}), function(req, res){
  console.log(req.body);
  Article.create(req.body.title, req.body.subtitle, req.body.body);
  res.redirect('/');
});

router.post('/article/delete/:id', bodyParser.urlencoded({extended: false}), function(req,res){
  var wasSuccessful = Article.delete(req.params.id);
  if(wasSuccessful){
    res.redirect('/');
  } else{
    res.send(404);
  }
});

router.post('/article/edit/:id', bodyParser.urlencoded({extended: false}), function(req, res){
  var wasSuccessful = Article.update(req.params.id, req.body.title, req.body.subtitle, req.body.body);
  if(wasSuccessful){
    res.redirect('/article/'+req.params.id);
  } else{
    res.send(404);
  }
});
