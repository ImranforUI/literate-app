// const express = require('express');
// const router = express.Router();
// const {check , validationResult} = require('express-validator');
// const Admin = require('../models/Admin');



// /*
//     Usage : Login a User
//     URL  : http://127.0.0.1:5000/admin/login
//     Method : POST
//     Fields : Id , password
//     Access : Public
//  */

//     router.post('/login' ,[
//         check('id').notEmpty().withMessage('ID is Required!'),
//         check('password').isLength({min : 6}).withMessage('Password is Required!')
//     ], async (request , response) => {
//         let errors = validationResult(request);
//         if(!errors.isEmpty()){
//             return response.status(400).json({errors : errors.array()});
//         }
//         try{
//             let {id , password} = request.body;
    
//             // let check id is exist or not 
//             let admin = await Admin.find({id , password});
//             if(id === 'admin' && password === 'masarrati123'){
//                 return response.status(200).json({
//                     result : 'Success'
//                 });
//             }
//             else{
//                 return response.status(401).json({errors : [{mesg : 'Invalid Credentials'}]})
//             }
//         }
       

//         catch (error){
//             console.error(error);
//             response.status(500).json({errors : [{msg : 'Server Error'}]});
//         }
//     });

//     module.exports = router;