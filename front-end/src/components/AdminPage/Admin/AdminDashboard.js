import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import users from '../../assets/assetsAdmin/users.svg'
import shoe from '../../assets/assetsAdmin/shoe.svg'
import messages from '../../assets/assetsAdmin/messages.svg'
import appointment from '../../assets/assetsAdmin/appointment.svg'
import { useDispatch} from 'react-redux';
import { getArticles} from '../../../redux/actions/articleActions';
import { getUsers } from '../../../redux/actions/userActions';
import { getAppointment } from '../../../redux/actions/appointmentActions';
import { getMessages } from '../../../redux/actions/messagesActions';



const Dashbord = styled.div `
font-family: 'Heebo', sans-serif;
display:flex;
justify-content:space-around; 
background-color:rgb(211, 232, 225,0.3);
margin-top:40px;
align-items:center;
margin-right:auto;   
margin-left:auto;
color: #05053D;
width:70%;
border-radius:7px;
`
const DIV = styled.div `
display:flex;
justify-content:space-around;
flex-wrap:wrap;
width:450px;
text-align:center;
padding:25px;
h3{
                    border-top:1px solid #ffff;
                    padding-top:5px;
}
`
const IMG  = styled.img`
padding-top:25px;
width:45px;

`

const Card = styled.div`
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
background-color: #05053D;
border-radius: 10px;
color:#ffffff;
width:200px;
height:150px;
margin:7px;
a{
                    text-decoration:none;
                    color:#ffffff;
}


`

function AdminDashboard (){
                    const dispatch = useDispatch()
                    return (
                                        
                                        <Dashbord>
                                        <div>
                                        <h1> Admin Role </h1>
                                        <li> Manage articles </li>
                                        <li>Manage users </li>
                                        <li>Manage appointments
                                        & Messages </li>
                                        </div>
                                        <DIV>
                                        <Card >
                                        <IMG src = {users} alt = "users"/>
                                        <Link to = '/adminUsers'><h3 onClick={()=>dispatch(getUsers())}> Users </h3></Link>
                                        
                                        </Card>
                                        <Card >
                                        <IMG src = {shoe} alt = "articles"/>
                                        <Link to = '/adminArticles'><h3 onClick={()=>dispatch(getArticles())}> Articles  </h3></Link>
                                        </Card>
                                        <Card >
                                        <IMG src = {messages} alt = "messages"/>
                                        <Link to = '/adminContactUs'><h3 onClick={()=>dispatch(getMessages())} > Messages </h3></Link>
                                        </Card>
                                        <Card >
                                        <IMG src = {appointment} alt = "appointment"/>
                                        <Link to = '/adminAppointment'><h3 onClick={()=>dispatch(getAppointment())}> Appointments  </h3></Link>
                                        </Card>
                                        </DIV>
                                        </Dashbord>
                                        

                    )
}

export default  AdminDashboard ;

