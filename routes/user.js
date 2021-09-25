const express = require('express');
const {  SignUp, getAllUsers ,SignIn, deleteUsser } = require('../controllers/user');
const { registerRules, Validator, loginRules} = require('../middlewares/Validator');
const {isUser} = require('../middlewares/isUser');
const router=express.Router();


router.get ('/',getAllUsers)

router.delete('/:ID',deleteUsser)

// singup 
// methode post 
// req.body 
router.post('/signup',registerRules,Validator,SignUp)

// signin
// methode post 
// req.body 
router.post('/signin',loginRules,Validator,SignIn)


// method get
// req.headers

router.get('/current',isUser,(req,res)=>res.send({user:req.user}))


module.exports=router;
