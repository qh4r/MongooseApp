var Standup = require('../models/standup.server.model');

exports.list = function (req, res) {
    var query = Standup.find();

    query.sort({createdOn: 'desc'})
        .limit(12)
        .exec(function (err, result) {
            if (err)return res.render('error', {error: err});
            res.render('index', {title: 'List', notes: result});
        })
};

exports.filterByMember = function (req, res) {
    var query = Standup.find();
    var filter = req.body.memberName;
    query.sort({createdOn: 'desc'});

    if (filter.length > 0) {
        query.where({memberName: filter});
    }

    query.limit(12)
        .exec(function (err, result) {
            if (err) return res.render('error', {error: err});
            res.render('index', {title: 'Filtered List', notes: result});
        });
}

exports.create = function (req, res) {
    var entry = new Standup({
        memberName: req.body.memberName,
        project: req.body.project,
        workYesterday: req.body.workYesterday,
        workToday: req.body.workToday,
        impediment: req.body.impediment
    });

    entry.save();

    res.redirect(301, '/');
};

exports.getNote = function (req, res) {
    res.render('newnote', {title: 'Standup - New Note'});
};
