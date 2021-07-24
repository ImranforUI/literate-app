const mongoose = require('mongoose');

let AdminSchema = new mongoose.Schema({
   id : {type : String, default : 'admin'},
   password : {type : String, required : false}
});

let Admin = mongoose.model('admin' , AdminSchema);
module.exports = Admin;