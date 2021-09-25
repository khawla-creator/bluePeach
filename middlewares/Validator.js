// install express validator 

const { body, validationResult } = require('express-validator');


exports.registerRules=[
    body('firstname',"firstname is required").notEmpty(),
    body('lastname',"lastname is required").notEmpty(),
    body('adresse',"adresse is required").notEmpty(),
    body('postalcode',"postalcode is required").notEmpty(),
    body('city',"city is required").notEmpty(),
    body('phone',"phone is required").notEmpty(),
    body('email',"valid email").isEmail(),
    body('password',"password must be at least 6 characters").isLength({min:6})
]
exports.loginRules=[
    body('email',"valid email").isEmail(),
    body('password',"password must be at least 6 characters").isLength({min:6})
]

exports.Validator=(req,res,next)=>{
    const result=validationResult(req)
    if(!result.isEmpty()){
        return res.status(400).send({errors:result.array()})
    }
    next()
}