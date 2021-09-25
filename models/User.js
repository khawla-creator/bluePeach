const mongoose=require('mongoose')
const schema=mongoose.Schema

const userSchema = new schema({     

                                role:{type:Number,default:0},
                                firstname:{type:String,required:true},
                                lastname:{type:String,required:true}, 
                                age:{type:Number,required:true}, 
                                gender:{type:String,required:true},
                                adresse:{type:String,required:true},
                                postalcode:{type:Number,required:true},
                                city:{type:String,required:true},
                                phone:{type:Number,required:true},
                                email:{type:String,required:true,unique:true},
                                password:{type:String,required:true},
                                
})
module.exports=mongoose.model('User',userSchema)


//dateofbirth:{type:Date, required:true},