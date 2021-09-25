const express = require ('express');
const router=express.Router();
const {addAppointment, getAllAppointment, deleteAppointment} = require('../controllers/appointment')


router.post('/',addAppointment)

router.get('/',getAllAppointment)

router.delete('/:ID',deleteAppointment)

module.exports=router