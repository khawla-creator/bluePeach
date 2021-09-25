const express = require ('express');
const router = express.Router();
const {addMessage,getAllMessages,deleteMessage} = require('../controllers/contactUs')


router.post('/',addMessage)

router.get('/',getAllMessages)

router.delete('/:ID',deleteMessage)


module.exports=router