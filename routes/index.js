var express = require('express');
var router = express.Router();
var standupCtrl = require('../controllers/standup.server.controller');

/* GET home page. */
router.route('/')
    .get(standupCtrl.list)
    .post(standupCtrl.filterByMember);

router.route('/newnote')
    .get(standupCtrl.getNote)
    .post(standupCtrl.create);

module.exports = router;
