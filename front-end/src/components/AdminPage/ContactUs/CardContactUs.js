import React from 'react'
import { Card,Main,Button,DIV } from '../Users/CardUser';
import {P} from '../Articles/CardArticle';
import { useDispatch } from 'react-redux';
import {deleteMessage} from '../../../redux/actions/messagesActions'

function CardContactUs({message}) { 
                    const dispatch=useDispatch()
                    return (
                                        <Card>
                                                            <Main>
                                                            <span> name : <P>{message.name}</P> </span>
                                                            <span> email :<P>{message.email}</P>  </span>
                                                            <span>messages : <P>{message.text}</P> </span> 
                                                            </Main>
                                                            <DIV>
                                                            <Button onClick={()=>dispatch(deleteMessage(message._id))}> Delete </Button>
                                                            </DIV>
                                        </Card>
                    )
}

export default CardContactUs
