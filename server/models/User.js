const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
   firstName : {type : String , required : true},
   lastName : {type : String , required : true},
   email : {type : String , required : true , unique : true},
   password : {type : String, required : true},
   id : {type : String, default : 'admin'},
   fatherName : {type : String, required : true},
   motherName : {type  : String, required : true},
   image : {type : String , required : true},
   created : {type : Date , default : Date.now()}
});

let User = mongoose.model('user' , UserSchema);
module.exports = User;