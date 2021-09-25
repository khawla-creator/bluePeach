const express = require ('express');
const router = express.Router();
const {addArticle, getAllArticles, deleteArticle, updateArticle, getArticle } = require('../controllers/article')


// test

router.get('/testarticle',(req,res)=>{
                    res.send('hello from blue peach')
})

//add a new article
// methode post
// req.body

router.post('/',addArticle)

// get all articles 
// methode get 

router.get('/',getAllArticles)


// delet article
// methode delete 
// req.params


router.delete('/:ID',deleteArticle)

// update article
// methode put 
// req.params.article
// req.body


router.put ('/:ID',updateArticle)


// get article
// methode get 
// req.params

router.get('/:ID',getArticle)


module.exports=router