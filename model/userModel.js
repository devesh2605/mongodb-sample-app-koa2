var mongoose = require("mongoose");
var uri = 'mongodb path';
mongoose.connect(uri);

var mongoSchema =   mongoose.Schema;

var users  = {
    "firstName" : String,
    "lastName" : String,
    "address" :  String
};

module.exports = mongoose.model('users',users);