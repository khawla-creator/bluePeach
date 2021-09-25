import React from 'react'
import { Card,Main,Button } from './../Users/CardUser';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux';
import {deleteArticle,getArticle} from '../../../redux/actions/articleActions';

export const IMG = styled.img `
padding:10px;
margin-bottom:10px;
width:auto;
hieght:148px;  
`
export const P = styled.span `
font-weight:lighter;
font-size:0.8em;
`

const Div = styled.div `
display:flex;
justify-content:center;
margin-left:3px;
button{
                    margin-right:5px;
                    
}
`

function CardArticle({article}) {
                    const dispatch = useDispatch();
                    return (
                                        <Card style= {{width:"250px"}}>
                                                            <Main  >
                                                            <IMG src = {article.imageUri} alt= 'article' />
                                                            <span>Category : <P>{article.category}</P> </span>
                                                            <span>Name : <P>{article.name}</P></span>
                                                            <span>Rate : <P> {article.rate}</P> </span>
                                                            <span>Color : <P>{article.color} </P></span>
                                                            <span>Price: <P>{article.price} </P></span>
                                                            <span style = {{display:'flex', alignItems:'center'}}> Size : <P> {article.size.map(el=><span key={article._id}> {` ${el} -`} </span>)} </P></span>
                                                            </Main>
                                                            <Div>
                                                            <Button onClick={()=>dispatch(deleteArticle(article._id))}> Delete </Button>
                                                            <Link to = '/updateArticle' onClick={()=>dispatch(getArticle(article._id))}><Button > Update </Button></Link> 
                                                            </Div>
                                        </Card>
                    )
}

export default CardArticle
