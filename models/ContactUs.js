const mongoose=require('mongoose')
const schema=mongoose.Schema

const contactSchema = new schema({     

                                name:{type:String,required:true},
                                email:{type:String,required:true},
                                text:{type:String,required:true},
                                
})
module.exports=mongoose.model('ContactUs',contactSchema)