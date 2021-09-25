const ContactUs = require('../models/ContactUs')


exports.addMessage= async(req,res)=>{
                    const {name,email,text}=req.body
                    try { 
                    const newMessage = new ContactUs({name,email,text})
                    await newMessage.save()
                    res.status(200).send({msg:"message added", newMessage})
                    } catch (error) {
                                        res.status(500).send({msg:"impossible to add message", error})
                    }
}


exports.getAllMessages = async(req,res)=>{
                    try {
                                        const messages = await ContactUs.find()
                                        res.status(200).send({msg:"all messages",messages})
                    } catch (error) {
                                        res.status(500).send({msg:"impossible to get all messages", error})
                    }
}


exports.deleteMessage = async(req,res)=>{
                    const {ID}= req.params
                    try{
                                        const message= await ContactUs.findByIdAndDelete(ID)
                                        res.status(200).send({msg:"message deleted"})
                    } catch (error) {
                                        res.status(500).send({msg:"impossible to delete messages", error})
                    }
}
