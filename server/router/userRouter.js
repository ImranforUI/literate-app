const express = require('express');
const router = express.Router();
const {check , validationResult} = require('express-validator');
const User = require('../models/User');


/*
    Usage : Register a User
    URL  : http://127.0.0.1:5000/users/register
    Method : POST
    Fields : name , email , password
    Access : Public
 */

router.post('/register' , [
    check('firstName').notEmpty().withMessage('First Name is Required'),
    check('lastName').notEmpty().withMessage('Last Name is Required'),
    check('email').isEmail().withMessage('Enter a Proper Email'),
    check('fatherName').notEmpty().withMessage('Father Name is Required'),
    check('motherName').notEmpty().withMessage('Mother Name is Required'),
    check('image').notEmpty().withMessage('Image Name is Required'),

], async (request , response) => {
    //register Logic
    let errors = validationResult(request);
    if(!errors.isEmpty()){
        return response.status(400).json({errors : errors.array()});
    }
    try {
        let {firstName , lastName, email , fatherName  , motherName , image} = request.body;
        // check if already exists or not
        let user = await User.findOne({email});
        if(user){
            return response.status(400).json({errors : [{msg : 'User is Already Exits'}]});
        }
        //store the data to database
        user = new User({firstName , lastName, email , fatherName  , motherName , image});
        user = await user.save();
    }
    catch (error) {
        console.error(error);
        response.status(500).json({errors : [{msg : 'Server Error'}]});
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
    Usage : Login a User
    URL  : http://127.0.0.1:5000/users/login
    Method : POST
    Fields : Id , password
    Access : Public
 */

    router.post('/login' ,[
        check('id').notEmpty().withMessage('ID is Required!'),
        check('password').isLength({min : 6}).withMessage('Password is Required!')
    ], async (request , response) => {
        let errors = validationResult(request);
        if(!errors.isEmpty()){
            return response.status(400).json({errors : errors.array()});
        }
        try{
            let {id , password} = request.body;
    
            // let check id is exist or not 
            let admin = await User.find({id , password});
            if(id === 'admin' && password === 'masarrati123'){
                return response.status(200).json({
                    result : 'Success',
                    admin : admin
                });
            }
            else{
                return response.status(401).json({errors : [{mesg : 'Invalid Credentials'}]})
            }
        }
       

        catch (error){
            console.error(error);
            response.status(500).json({errors : [{msg : 'Server Error'}]});
        }
    });

module.exports = router;