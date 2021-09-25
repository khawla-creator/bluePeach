const mongoose=require('mongoose')
const schema=mongoose.Schema

const appointmentSchema = new schema({     

                                name:{type:String},
                                phone:{type:Number},
                                service:{type:String,required:true},
                                date:{type:Date,required:true},
                                
                                
})
module.exports=mongoose.model('Appointment',appointmentSchema)