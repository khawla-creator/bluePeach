import React,{useState} from 'react'
import {Card,Main,DIV,Button} from '../Users/CardUser'
import {IMG} from './CardArticle'
import styled from 'styled-components'
import {Title} from '../Users/AdminUsers'
import { useDispatch, useSelector } from 'react-redux';
import { updateArticle } from '../../../redux/actions/articleActions'
import {useHistory} from 'react-router-dom';


const UpdateCard = styled.div `
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
input{
                    padding:10px;
                    border-radius:5px;
                    border:1px solid ;
}
label{
                    padding:5px;
}

`



function UpdateArticle() {
                    const article =useSelector(state=>state.articleReducer.article);

                    // const [editarticle,setArticle]=useState({category:article.category,name:article.name,rate:article.rate,price:article.price,size:article.size});

                    // const handleChange=(e)=> {
                    //                     setArticle({...editarticle,[e.target.name]:e.target.value})
                    // }

const [name,setName]=useState(article.name)
const [category,setcategory]=useState(article.category)
const [rate,setRate]=useState(article.rate)
const [color,setColor]=useState(article.color)
const [price,setPrice]=useState(article.price)
const [size,setSize]=useState(article.size)

                    const dispatch=useDispatch()
                    const history = useHistory();

                    return (
                                        <UpdateCard>
                                        <Title> UPDATE ARTICLE  </Title>
                                                            <Card style= {{width:'400px'}}>
                                                            <Main  >
                                                            <div style= {{display:"flex",justifyContent:"center"}}>  
                                                            <IMG src = {article.imageUri} style={{width:"400px"}}  alt= 'article'/> 
                                                            </div>
                                                            <label>category : </label>
                                                            <input type='text'  name ='categry' onChange= {(e)=>setcategory(e.target.value)}  defaultValue={article && article.category}/>
                                                            <label>name :</label>
                                                            <input type='text' placeholder='name of article'  onChange= {(e)=>setName(e.target.value)} defaultValue={article && article.name} />
                                                            <label>rate : </label>
                                                            <input type='number' placeholder='rate'  onChange= {(e)=>setRate(e.target.value)} defaultValue={article && article.rate} />
                                                            <label>color : </label>
                                                            <input type='text' placeholder='color'  onChange= {(e)=>setColor(e.target.value)} defaultValue={article && article.color}/>
                                                            <label>price: </label> 
                                                            <input type='number' placeholder='price'  onChange= {(e)=>setPrice(e.target.value)} defaultValue={article && article.price}/>
                                                            <label>size : </label>
                                                            <input type='text' placeholder='size'  onChange= {(e)=>setSize(e.target.value)} defaultValue={article && article.size}/>
                                                            </Main>
                                                            <DIV>
                                                            <Button onClick={()=>{dispatch(updateArticle(article._id,{name,category,rate,color,price,size}));history.push('/adminDashboard')}} > Update </Button>
                                                            </DIV>
                                        </Card>
                                        </UpdateCard>   
                                        
                    )
}

export default UpdateArticle
