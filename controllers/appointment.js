const Appointment = require('../models/Appointment')



exports.addAppointment= async(req,res)=>{
                    const {service,date,name,phone}=req.body 
                    try { 
                    const newAppointment = new Appointment({service,date,name,phone})
                    await newAppointment.save()
                    res.status(200).send({msg:"appointment booked", newAppointment})
                    } catch (error) {
                                        res.status(500).send({msg:"impossible to book an appointment", error})
                    }
}

exports.getAllAppointment = async(req,res)=>{    
                    try {
                                        const appointments = await Appointment.find()
                                        res.status(200).send({msg:"all apointments",appointments})
                    } catch (error) {
                                        res.status(500).send({msg:"impossible to get appointments", error})
                    }
}

exports.deleteAppointment= async(req,res)=>{
                    const {ID} = req.params
                    try {
                                        const appointment= await Appointment.findByIdAndDelete(ID)
                                        res.status(200).send({msg:"appointment deleted"})
                    } catch (error) {
                                        res.status(500).send({msg:"impossible to remove appointment",error})
                    }
}

