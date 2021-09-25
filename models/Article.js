const mongoose = require ('mongoose')
const schema = mongoose.Schema



const articleSchema = new schema({
                    category:{type:String,required:true},
                    imageUri:{type:String},
                    name:{type:String,required:true},
                    rate:{type:Number},
                    color:{type:String},
                    price:{type:Number},
                    size:[Number],
                    description:{type:String},
                    Characteristics:{type:String},
                    pathologies:[String],
                    
                    
})

module.exports = mongoose.model('Article',articleSchema);

