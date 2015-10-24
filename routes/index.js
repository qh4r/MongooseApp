var express = require('express');
var router = express.Router();
var standupCtrl = require('../controllers/standup.server.controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.route('/newnote')
    .get(function(req, res){
      return standupCtrl.getNote(req, res);
    })
    .post(function(req, res){
      return standupCtrl.create(req, res);
});

module.exports = router;
