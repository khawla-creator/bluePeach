import React ,{useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import DefaultProfile from '../../components/assets/assetsProfile/profile.png'
import {Button, Label, Select, Input, FormTow, Option} from '../SignUp/SignUp'
import Banniere from './../Home/Banniere';
import {FiShoppingCart}  from 'react-icons/fi'
import { useSelector, useDispatch } from 'react-redux';
import { addApointment } from '../../redux/actions/appointmentActions';



const Main = styled.div`
display:flex;
justify-content:center;
margin-top:60px;
`

const H = styled.h1`
margin-top:40px;
font-family: 'Open Sans', sans-serif;
text-align:center;
color: #020236;
`

const Header = styled.div`
font-family: 'Open Sans', sans-serif;
flex-direction:column;
display:flex;
margin-right:40px;
text-align:left;
padding:10px 10px 20px 60px;
background-color:rgba(225, 230, 232, 0.3);
border-radius:7px;
width:20%;
`

const IMG = styled.img `
padding:20px 70px;
margin-bottom:20px;
width:80px;
height:auto;
border-bottom:1px solid;
`

const Order = styled.div `
display:flex;
justify-content:space-between;
align-items:center;
p{
                    padding-left:20px;
}
`;

const DivOrder=styled.div `
background-color:rgba(129, 134, 160,0.3);
border-radius: 7px;
padding:0 20px;
margin-bottom:20px;
`


const Span = styled.h1`
font-size: 1.2rem;
font-weight:bold;
color: #020236;
`
const SPAN = styled.span`
font-size: 1rem;
font-weight:600;
color: #020236;
`
const DIV = styled.div`
font-family: 'Open Sans', sans-serif;
width:450px;
display:flex;
flex-direction: column;

h2{
                    font-weight:bold;
                    color: #020236;
                    margin-bottom:5px;
}
button{
                    margin-top:30px;
}
p {
                    font-size: 1rem;
                    font-weight:600;
                    color: #020236;
}

`
const Appoinment= styled.div `
align-items:center;
background-color: rgba(244, 244, 230,0.4);
border-radius:7px;
padding:10px 30px 20px 30px;
`


function Profile() {
                    const user = useSelector(state => state.userReducer.user)
                    const [appointment,setAppointment]=useState({service:"",date:"",name:user,phone:user});

                    const handleChange=(e)=> {
                                        setAppointment({...appointment,[e.target.name]:e.target.value})
                    }
                    const dispatch=useDispatch()
                    

                    return (
                                        <div>
                                        <Banniere/>
                                        <H> Welcome To Your Customer Account </H>
                                        <Main>
                                        <Header>
                                        <IMG  src = {DefaultProfile} alt ='default pictur' />

                                                            
                                                            <Span>First Name : <SPAN> {user && user.firstname} </SPAN> </Span> 
                                                            <Span>Last Name : <SPAN> {user && user.lastname} </SPAN> </Span> 
                                                            <Span>Age : <SPAN> {user && user.age}</SPAN> </Span> 
                                                            
                                                            <Span>Gender : <SPAN> {user && user.gender} </SPAN> </Span> 
                                                            <Span>Adresse : <SPAN> {user && user.adresse} </SPAN> </Span> 
                                                            <Span> Postal Code : <SPAN> {user && user.postalcode} </SPAN> </Span> 

                                                            <Span> City : <SPAN> {user && user.city}</SPAN> </Span> 
                                                            <Span>Phone :  <SPAN> {user && user.phone}</SPAN> </Span> 
                                                            
                                        </Header>
                                        
                                        <DIV>
                                        <DivOrder>
                                                            <h2> Follow-up your orders ? </h2>
                                                            <Order>
                                                            <Link to = '/pannier'> <FiShoppingCart style= {{width:"40px",height:"60px", color:"#ffff", paddingRight:"20px", borderRight :"1px solid black"}}/> </Link>
                                                            <p> dolor sit amet, consectetuer adipiscing elit, 
                                                            sed diam nonummy nibh euismod tincidunt ut laoreet dolo</p>
                                                            </Order>
                                        </DivOrder>
                                        <Appoinment>
                                        <h2> You Want To Book An Appointment ? </h2>
                                        <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna 
                                        aliquam erat volutpat </p>
                                        
                                        <FormTow type="submit" >
                                        
                                        
                                        <Label htmlFor='name' > Your Name  </Label> 
                                                            <Input type='String' name='name' id = 'name'  onChange={handleChange} defaultValue={user && user.firstname + " " + user.lastname}/>
                                                            <Label htmlFor='phone' > Your Phone  </Label>
                                                            <Input type='String' name='phone'  onChange={handleChange} defaultValue={user && user.phone}/>

                                                            <Label htmlFor='service' >  Choose The Service </Label> 
                                                            <Select name= 'service' id='service' onChange={handleChange} >
                                                                                <Option > ---- </Option>
                                                                                <Option value="foot care"> foot care </Option>
                                                                                <Option value='orthopaedic insoles'> orthopedic insoles</Option>
                                                            </Select>

                                                            <Label htmlFor='date' > Book Your Appointment   </Label>
                                                            <Input type='date'  name='date' id = 'rdv'  onChange={handleChange} defaultValue={appointment.date}/>

                                        <Button style = {{width:'120px',padding:'10px',fontSize:'1.1rem',borderRadius:'7px'}}  type="submit" onClick={()=>{dispatch(addApointment(appointment)); alert("your appointment is recorded we will contact you later ✔☎📆")}}> Submit </Button>
                                        </FormTow>
                                        </Appoinment> 
                                        </DIV>
                                        </Main>
                                        </div>
                    )
}

export default Profile;
