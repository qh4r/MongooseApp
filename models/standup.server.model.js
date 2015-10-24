var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var standupSchema = new Schema({
    memberName: String,
    project: String,
    workYesterday: String,
    workToday: String,
    impediment: String,
    createdOn: {type: Date, default: Date.now}
});

////schema without id
//
//var noIdSchema = new Schema({
//    name: String
//}, {
//    _id: false
//});
//
////schema using add
//
//var emptySchema = new Shema();
//
//emptySchema.add({
//    name: String,
//    age: Number
//});

module.exports = mongoose.model('Standup', standupSchema);