import React from 'react'
import CardArticle from './CardArticle';
import {Title,DIV} from '../Users/AdminUsers'
import { useSelector } from 'react-redux';



function AdminArticles(){
                    const articles = useSelector(state =>state.articleReducer.articles)
                    return (
                                                            
                                        <div >
                                        <Title > ARTICLES LIST </Title>
                                        <DIV>
                                        {
                                                            articles.map(article=><CardArticle
                                                                                article={article}
                                                                                key={article._id}
                                                            />)
                                        }
                                        </DIV>  
                                        </div>
                                        
                    )
}
export default AdminArticles;