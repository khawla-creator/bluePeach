const Article = require('../models/Article')

exports.addArticle= async(req,res)=>{
                    const {category, imageUri,name, rate, color, price,size, description, Characteristics, pathologies}=req.body
                    try { 
                    const newArticle = new Article({category,imageUri, name, rate, color, price,size, description,Characteristics, pathologies })
                    await newArticle.save()
                    res.status(200).send({msg:"article added", newArticle})
                    } catch (error) {
                                        res.status(500).send({msg:"impossible to add a new article", error})
                    }
}


exports.getAllArticles = async(req,res)=>{
                    try {
                                        const articles = await Article.find()
                                        res.status(200).send({msg:"all articles",articles})
                    } catch (error) {
                                        res.status(500).send({msg:"impossible to get articles", error})
                    }
}


exports.deleteArticle= async(req,res)=>{
                    const {ID} = req.params
                    try {
                                        const article = await Article.findByIdAndDelete(ID)
                                        res.status(200).send({msg:"article deleted"})
                    } catch (error) {
                                        res.status(500).send({msg:"impossible to delete article", error})
                    }
}

exports.updateArticle = async(req,res)=>{
                    const {ID}= req.params
                    try {
                                        await Article.findByIdAndUpdate(ID,{$set:{...req.body}})
                                        res.status(200).send({msg:"article update"})

                    } catch (error) {
                                        res.status(500).send({msg:"impossible to update article", error})
                    }
}

exports.getArticle= async(req,res)=>{
                    const {ID} = req.params
                    try {
                                        const article = await Article.findById(ID)
                                        res.status(200).send({msg:"article",article})

                    } catch (error) {
                                        res.status(500).send({msg:"impossible to get article", error})
                    }
}

