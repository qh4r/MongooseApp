var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var memberNameValidator = [
    function (value) {
        return (value.trim().length > 0 && value.toLocaleLowerCase() !== 'none')
    },
    'Member name invalid!'
];

var stringValidator = [
    function (value) {
        return value.trim().length > 0;
    },
    '{PATH} must have a value'
];

var standupSchema = new Schema({
    memberName: {
        type: String,
        required: 1,
        validate: memberNameValidator
    },
    project: {
        type: String,
        required: 1,
        validate: stringValidator
    },
    workYesterday: {
        type: String,
        required: 1,
        validate: stringValidator
    },
    workToday: {
        type: String,
        required: 1,
        validate: stringValidator
    },
    impediment: {
        type: String,
        required: 1,
        default: 'none',
        validate: stringValidator
    },
    createdOn: {
        type: Date,
        required: 1,
        default: Date.now
    }
});

//schema without id

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
//    name: {
//        type: String,
//        required: 1,
//        enum: ['Rafał', 'David', 'Krysia'], // akceptuje tylko wartości enuma
//        match: /^[A-Z][a-z]+/
//        //dopasowywuje regexa
//    },
//    age: Number
//});

module.exports = mongoose.model('Standup', standupSchema);