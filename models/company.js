var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var companySchema=new Schema({
    name: {
        type: String,
        default: ''
    },
    cin: {
        type: Number,
        default: -1
    }
});

var companies = mongoose.model('company', companySchema);
module.exports = companies;