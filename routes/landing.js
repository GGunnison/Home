var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('landing.jade', { title: 'Grant Gunnison'});
});
router.get('/houseBuild', function(req, res){
  res.render('houseBuild.jade', {title: 'Mexico House Build'});
});
router.get('/djBooth', function(req, res){
  res.render('djBooth.jade', {title: 'DJ Booth'});
});
router.get('/jeepRevival', function(req, res){
  res.render('jeepRevival.jade', {title: 'Jeep Revival'})
});
router.get('/mailMan', function(req, res){
  res.render('mailMan.jade', {title: 'The Mailman'});
});
router.get('/phoneDock', function(req, res){
  res.render('phoneDock.jade', {title: 'Phone Dock'})
});
router.get('/vexRobotics', function(req, res){
  res.render('vexRobotics.jade', {title: 'Vex Robotics'})
});


module.exports = router;
