import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux'
import styled from 'styled-components';
import { login , videError} from '../../redux/actions/userActions';
import Banniere from '../Home/Banniere';
import { Title,Paragraphe,Input,Label,Requirment,SmallParahraphe,P,Button} from '../SignUp/SignUp';
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Error from '../Error/Error'


const Form = styled.form`
display:flex;
justify-content:center;
flex-direction:column;
width:400px;
margin:auto;
padding-bottom:10px;

div{
display:flex;
justify-content:center;
margin-top:60px;
}

`;


function SignIn(){
                    const [user, setUser] = useState({email:"",password:""})
                    const errors = useSelector(state => state.userReducer.errors)
                    const dispatch = useDispatch()
                    const history = useHistory()
                    const handleChange=(e)=>{
                                        setUser({...user,[e.target.name]:e.target.value})
                                        dispatch(videError())
                                        }

                    const handleLogin=(e)=>{
                                        e.preventDefault()
                                        dispatch(login(user,history))
                    }

                    return (
                                        
                                        <div>
                                        {
                                                            errors && errors.map(el=><Error error={el} />)
                                                            
                                        }
                                                            <Banniere/>
                                                            <Title> Already Registred </Title>
                                                            <Paragraphe>orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                                                            tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum,
                                                            consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.</Paragraphe>
                                                            <Form onSubmit={handleLogin}>
                                                            <Label htmlFor='email' > Email <Requirment> * </Requirment>: </Label>
                                                            <Input type='email' placeholder ='Your Email' name='email' id = 'email' required onChange={handleChange}/>
                                                            <Label htmlFor='passWord'> Password <Requirment> * </Requirment>: </Label>
                                                            <Input type='password' placeholder ='Your password' name='password' id = 'passWord' required onChange={handleChange}/>
                                                            <div>
                                                            <Button  onSubmit={handleLogin} > Submit</Button>
                                                            </div>
                                                            </Form>
                                                            <SmallParahraphe>
                                                            tincidunt ut laoreet aliquam erat volutpat. Ut wisi enim a Lorem ipsum dolor .wisi enim a Lorem ipsum <hr/>
                                                            <Link to = '/signup' style = {{textDecoration:"none",color:"#020236", fontWeight:"600"}} > Create an Account ? </Link>
                                                            </SmallParahraphe>
                                                            <P>  * :  is required </P>
                                        </div>
                    )
}

export default SignIn
