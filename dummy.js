// const { check,sanitizeBody } = require('express-validator');
// const word ={
//     email:'premsagar@gmail.com',
//     password:'Prem@3303',
//     fullname : 'Premsagar macharla',
//     username : 'prem',
//     confirm_password:'Prem@3303',
// }

// form=[
//   // first Name validation

//   check(word.fullname).trim().notEmpty().withMessage('First Name required')
//   .matches(/^[a-zA-Z ]*$/).withMessage('Only Characters with white space are allowed'),

//  // last Name validation
//   check(word.username).notEmpty().withMessage('Last Name required')
//   .matches(/^[a-zA-Z ]*$/).withMessage('Only Characters with white space are allowed'),

//   // email address validation
//   check(word.email).notEmpty().withMessage('Email Address required').normalizeEmail().isEmail().withMessage('must be a valid email'),
  
  
//   // password validation
//   check(word.password).trim().notEmpty().withMessage('Password required')
//   .isLength({ min: 5 }).withMessage('password must be minimum 5 length')
//   .matches(/(?=.*?[A-Z])/).withMessage('At least one Uppercase')
//   .matches(/(?=.*?[a-z])/).withMessage('At least one Lowercase')
//   .matches(/(?=.*?[0-9])/).withMessage('At least one Number')
//   .matches(/(?=.*?[#?!@$%^&*-])/).withMessage('At least one special character')
//   .not().matches(/^$|\s+/).withMessage('White space not allowed'),
//   // confirm password validation
//   check(word.confirm_password).custom((value, { req }) => {
//        if (value !== req.body.password) {
//              throw new Error('Password Confirmation does not match password');
//         }
//         return value;
//    })
// ]