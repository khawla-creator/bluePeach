import React from 'react'
import { Card,Main,Button,DIV } from '../Users/CardUser';
import {P} from '../Articles/CardArticle';
import { useDispatch } from 'react-redux';
import {deletAppointment} from '../../../redux/actions/appointmentActions'

function CardAppointment({appointment}) {
                    const dispatch=useDispatch()
                    return (
                                        <Card> 
                                                            <Main>
                                                            <span> Name: <P>{appointment.name}</P> </span>
                                                            <span> Phone : <P>{appointment.phone}</P></span>
                                                            <span> Service: <P>{appointment.service}</P> </span>
                                                            <span> Date : <P>{appointment.date}</P></span>
                                                            </Main>
                                                            <DIV>
                                                            <Button onClick={()=>dispatch(deletAppointment(appointment._id))}> Delete </Button>
                                                            </DIV>
                                        </Card>
                    )
}

export default CardAppointment;
