var express = require('express');
var router = express.Router();

const data = require('../data');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to the show'});
});

//get a dynamic user via the route parametr
router.get('/:user', function(req, res, next) {
  console.log('/user:', data[req.params.user]);
  res.render('userpage', data[req.params.user]);
});

module.exports = router;
