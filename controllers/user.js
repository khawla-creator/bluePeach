const User= require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



exports.getAllUsers= async(req,res)=>{
                    try {
                                        const users = await User.find()
                                        res.status(200).send({msg:"all users",users})
                    } catch (error) {
                                        res.status(500).send({msg:"impossible to get users", error})
                    }
}



exports.deleteUsser =async(req,res)=>{
                    const {ID} = req.params
                    try {
                                        const user = await User.findByIdAndDelete(ID)
                                        res.status(200).send({msg:"user deleted"})
                    } catch (error) {
                                        res.status(500).send({msg:"impossible to delete user", error})
                    }
}


exports.SignUp= async(req,res)=>{     
                    const {firstname, lastname, age, gender, adresse, postalcode, city, phone,email,password, role} =req.body
                    try {
                                        const findUser = await User.findOne({email})
                                        if (findUser){
                                                            return res.status(400).send({errors:[{msg:'email is already exist'}]})
                                        }
                                        const user = new User ({
                                                            firstname, lastname, age, gender, adresse, postalcode, city, phone, email, password,role
                                        })

                                        const salt = 10
                                        const hashPassword = await bcrypt.hash(password,salt)
                                        user.password = hashPassword
                                        
                                        await user.save()

                                        const payload = {
                                                            id : user._id
                                        }
                                        const token = await jwt.sign(payload, process.env.secretKey, { expiresIn: '24h' })
                                        
                                        res.status(200).send({msg:"user register with success", user, token})
                    } catch (error) {
                                        res.status(500).send({errors:[{msg:"impossible to resgister"}]})
                    }
}

exports.SignIn = async(req,res)=>{
                    const {email, password}= req.body
                    try{
                                        const user = await User.findOne({email})
                                        if(!user){
                                                            return res.status(400).send({errors : [{msg: "bad credential"}]})
                                        }
                                        const match = await bcrypt.compare(password,user.password)
                                        if(!match){
                                                            return res.status(400).send({errors: [{msg : "bad credential"}]})
                                        }
                                        const payload = {
                                                            id : user._id
                                        }  
                                        
                                        const token= jwt.sign(payload,process.env.secretKey,{ expiresIn: '24h' })
                                        res.status(200).send({msg:"user login with success", user,token})
                    } catch (error){
                                        res.status(500).send({errors:[{msg:"impossible to login"}]})
                    }

}





