// const mongoose = require('mongoose');

// let UserSchema = new mongoose.Schema({
//    firstName : {type : String , required : true},
//    lastName : {type : String , required : true},
//    email : {type : String , required : true , unique : true},
//    fatherName : {type : String, required : true},
//    motherName : {type  : String, required : true},
//    image : {type : String , required : true},
//    created : {type : Date , default : Date.now()}
// });

// let User = mongoose.model('user' , UserSchema);
// module.exports = User;

const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    email : {type : String, required : true, unique : true},
    password : {type : String, required : true},
    isAdmin : {type : Boolean},
    image : { type : String, required : true},
    firstName : {type : String , required : true},
    lastName : {type : String , required : true},
    fatherName : {type : String , required : true},
    motherName : {type : String , required : true},

    created : {type : Date, default : Date.now()},
});

let User = mongoose.model('user', UserSchema);
module.exports = User;