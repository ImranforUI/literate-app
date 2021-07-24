const express = require('express');
const router = express.Router();
const {check , validationResult} = require('express-validator');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authenticate = require('../middlewares/authenticate');


/*
    Usage : Register a User
    URL  : http://127.0.0register.1:5000/users/
    Method : POST
    Fields : name , email , password
    Access : Public
 */

router.post('/register' , [
    check('firstName').notEmpty().withMessage('First Name is Required'),
    check('lastName').notEmpty().withMessage('Last Name is Required'),
    check('password').notEmpty().withMessage('Password is Required'),
    check('email').isEmail().withMessage('Enter a Proper Email'),
    check('fatherName').notEmpty().withMessage('Father Name is Required'),
    check('motherName').notEmpty().withMessage('Mother Name is Required'),
    check('image').notEmpty().withMessage('Image Name is Required'),

], async (request , response) => {
    //register Logic
    let errors = validationResult(request);
    if(!errors.isEmpty()){
        return response.status(401).json({errors : errors.array()})
    }
    try {
        let {firstName , lastName, email , fatherName  , motherName , image , password} = request.body;
        // check if already exists or not
        let user = await User.findOne({email : email});
        if(user) {
            return response.status(401).json({errors : [{msg : 'User is Already Exists'}]});
        }

        // convert password to hash password
        let salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password , salt);

        //store the data to database
        user = new User({firstName , lastName, email , fatherName  , motherName , image , password});
        user = await user.save();

        response.status(200).json({
            result : 'Success',
            user : user
        });
    }
    catch (error) {
        console.log(error);
        response.status(500).json(error);
    }
});

/*
    Usage : Get All Data
    URL  : http://127.0.0.1:5000/users/
    Method : GET
    Fields : no-fields
    Access : Public
 */
//
router.get('/' , async (request , response) => {
    try {
        let userData = await User.find();
        return response.status(200).json(userData);
    }
    catch (error) {
        console.error(error);
        return response.status(500).json(error);
    }
});

/*
    2 Login User
    URl :  http://127.0.0.1:5000/users/login
    Fields : email , password
    Method : POST
    Access : Public
 */
router.post('/login' , [
    check('email').isEmail().withMessage('Enter a Proper Email'),
    check('password').isLength({min : 8}).withMessage('Enter a Proper Password')
], async (request , response) => {
   //Login Logic Here
    let errors = validationResult(request);
    if(!errors.isEmpty()){
        return response.status(401).json({errors : errors.array()});
    }
    try {
        // Read Form data
        let {email , password} = request.body;

        //check email is exist or not
        let user = await User.findOne({email : email});
        if(!user){
            return response.status(401).json({errors : [{msg : 'Invalid Credentials'}]});
        }

        //verify the password
        let isMatch = await bcrypt.compare(password , user.password);
        if(!isMatch){
            return response.status(401).json({errors : [{msg : 'Invalid Credentials'}]})
        }

        //Create a token and send to client
        let payload = {
            user : {
                id : user.id
            }
        };

        jwt.sign(payload , process.env.JWT_SECRET_KEY , (err , token) => {
            if(err) throw err;
            response.status(200).json({
                result : 'Login Success',
                token : token
            });
        });

    }
    catch (error) {
        console.error(error);
        response.status(500).json({errors : [{msg : 'Server Error'}]});
    }
});

/*
  3.Get User Info
  URL : http://127.0.0.1:5000/users/
  Fields : no-Fields
  Method : GET
  Access : Private
 */
  router.get('/' , authenticate , async (request , response) => {
    // Get user Info Logic
     try {
         let user = await User.findById(request.user.id).select('-password');
         response.status(200).json(user);
     }
     catch (error) {
         console.error(error);
         response.status(500).json({errors : [{msg : 'Server Error'}]})
     }
 });

module.exports = router;