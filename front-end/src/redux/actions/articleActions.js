import axios from 'axios'
import {GET_ARTICLES,GET_ARTICLE} from '../constants/articlesTypes'


export const getArticles = ()=> async(dispatch)=>{
                    try {
                                        const res = await axios.get('/api/articles')
                                        dispatch({type:GET_ARTICLES, payload:res.data.articles})
                    } catch (error) {
                                        console.log(error)
                    }
}


export const addArticle=(newArticle)=>async(dispatch)=>{
                    try {
                    await  axios.post('/api/articles',newArticle)
                    dispatch(getArticles())
                    } catch (error) {
                                        console.log(error)
                    }
}
        

export const deleteArticle = (id)=>async(dispatch)=>{
                    try {
                                        await axios.delete(`/api/articles/${id}`)
                                        dispatch(getArticles())
                    } catch (error) {
                                        console.log(error)
                    }
}

export const getArticle =(id)=>async(disptach)=>{
                    try{
                    const res = await axios.get(`/api/articles/${id}`)
                    console.log(res.data)
                    disptach({type:GET_ARTICLE,payload:res.data.article})
                    }catch(error){
                                        console.log(error)
                    }
}


export const updateArticle=(id,newValue)=>async(dispatch)=>{
                    try{ 
                                        await axios.put(`/api/articles/${id}`,newValue)
                                        dispatch(getArticles())
                    } catch (error){
                    console.log(error)
                    }
}


