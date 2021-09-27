import React , {useState} from 'react';
import Banniere from './../Home/Banniere';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import {register} from '../../redux/actions/userActions'
import {useHistory, Link} from 'react-router-dom'
import { videError } from './../../redux/actions/userActions';
import Error from '../Error/Error'


export const Title= styled.h1 `
color: #05053D;
font-size:2.5rem;
font-family: 'Open Sans', sans-serif;
text-align:center;
`;

export const Paragraphe= styled.p`
font-family: 'Open Sans', sans-serif;
padding: 10px 60px ;
font-size: 1rem;
line-height: 200%;
text-align: left;
padding-bottom:40px;
`;

export const Form = styled.form`
display:flex;
justify-content:space-around;
`;

export const Label = styled.label`
color: #05053D;
font-family: 'Open Sans', sans-serif;
font-style: normal;
font-weight: 600;
font-size: bold;
padding:15px 0;

`;

export const Input = styled.input`
padding:14px;
width:90%;
background: #FFFFFF;
border: 1px solid #635757;
border-radius: 11px;
font-family: 'Open Sans', sans-serif;
font-weight: 600;
font-size: 1rem;
&::placeholder{
                    font-family: 'Open Sans', sans-serif;
                    font-size:0.9rem;
                    color:#c4c4c4;
                    }

&:focus {
                    background-color:#f0eff2;
                    border:1px solid #05053D;
                    outline:none;

                    &::placeholder{
                    color:white;
                    }
}
`;

export const Select = styled.select`
font-family: 'Open Sans', sans-serif;
font-weight: 600;
font-size: 1rem;
padding:14px 10px;
border-radius:11px;
width:97.5%;
&:focus{
                    outline:none;
}
`;

export const Option = styled.option`
font-family: 'Open Sans', sans-serif;
font-weight: 600;

`;

export const Requirment= styled.span `
color: #ff0000;
font-size: 16px;
`;

export const FormOne = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
padding-right:80px;
width:400px;
margin-left:10%;
border-right: 0.6px solid #05053D;
`;


export const FormTow = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
width:400px;
margin-right:10%
`;

export const Button = styled.button`
padding:14px 5px; 
width:150px;
border-radius: 11px;
border: none;
background-color: #020236;
color: #FFFFFF;
font-weight: bold;
font-size: 1.2em;
cursor:pointer;
box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25),
inset 2px 19px 21px rgba(0, 0, 0, 0.25);
:active{
                    transform:scale(1.02);
}
`;

export const SmallParahraphe=styled.div `
text-align:center;
align-items:center;
padding:50px 34%;
font-family: 'Open Sans', sans-serif;
font-size: 1rem;
line-height: 200%;
`;

export const P = styled.p `
width:90px;
color:red;
font-family: 'Open Sans', sans-serif;
font-size: 0.8rem;
font-weight:bold;
padding-bottom:5px;
border-bottom:2px solid red;
position:absolute;

`


function SignUp() {
                    
                    
                    const [user, setUser] = useState({firstname:"", lastname:"", age:"", gender:"", adresse:"", postalcode:"", city:"", phone:"", email:"", password:""})
                    const errors = useSelector(state => state.userReducer.errors)
                    const dispatch = useDispatch()

                    const history = useHistory()

                    const handleChange=(e)=>{
                                        setUser({...user,[e.target.name]:e.target.value})
                                        dispatch(videError())
                                        }


                    const handleRegister=(e)=>{
                                        e.preventDefault()
                                        dispatch(register(user,history))
                    }



                    return (
                                        <div>
                                        {
                                                            errors && errors.map(el=><Error error={el} />)
                                                            
                                        }
                                                            <Banniere/>
                                                            <Title> Create An Account Now </Title>
                                                            <Paragraphe style= {{textAlign:"center"}} > 
                                                            Create an account and have access to the tracking and the history of your orders.<br/>
                                                            Create an account now and benefit from all the services offered on this site.
                                                            </Paragraphe>
                                                            <Form type= "submit" onSubmit={handleRegister}>
                                                            <FormOne>
                                                            <Label htmlFor='firstName'> First Name <Requirment> * </Requirment>: </Label>
                                                            <Input type='text' placeholder ='Your First name' name='firstname' id = 'firstName' required   onChange={handleChange} />  {/*changement */}

                                                            <Label htmlFor='LasttName' > Last Name <Requirment> * </Requirment>: </Label>
                                                            <Input type='text' placeholder ='Your Last name' name='lastname' id = 'LasttName'  required onChange={handleChange} />

                                                            <Label htmlFor='age' > Age <Requirment> * </Requirment>: </Label>
                                                            <Input type='number' placeholder ='Your age' name='age' id = 'age' required onChange={handleChange} />

                                                            <Label htmlFor='Gender' > Gender <Requirment> * </Requirment>:  </Label> 
                                                            <Select name= 'gender' id='Gender'  onChange={handleChange}>
                                                                                <Option value="mal">Mal</Option>
                                                                                <Option value='femal'>Femal</Option>
                                                            </Select>

                                                            <Label htmlFor='Adresse'> Adresse <Requirment> * </Requirment>:  </Label>
                                                            <Input type='text' placeholder ='Your Adresse' name='adresse' id = 'Adresse'  required onChange={handleChange} />

                                                            <Label htmlFor='PostalCode' > Postal Code <Requirment> * </Requirment>: </Label>
                                                            <Input type='number' placeholder ='Your postal Code' name='postalcode' id = 'PostalCode' required onChange={handleChange} />
                                                            </FormOne>
                                                            
                                                            <FormTow>
                                                            <Label htmlFor='City' > City <Requirment> * </Requirment>: </Label>
                                                            <Input type='text' placeholder ='City' name='city' id = 'City'  required onChange={handleChange}/>

                                                            <Label htmlFor='Phone' > Phone <Requirment> * </Requirment>: </Label>
                                                            <Input type='tel' placeholder ='Your Phone' name='phone' id = 'Phone' required onChange={handleChange} />

                                                            <Label htmlFor='Email' > Email <Requirment> * </Requirment>: </Label>
                                                            <Input type='email' placeholder ='Your Email' name='email' id = 'Email'  required onChange={handleChange} /> {/*changement */}

                                                            <Label htmlFor='PassWord'> Password <Requirment> * </Requirment>: </Label>
                                                            <Input type='password' placeholder ='Your password' name='password' id = 'PassWord' required  onChange={handleChange} /> 

                                                            <Label htmlFor='RepeatPassWord' > Repeat Your Password <Requirment> * </Requirment>: </Label>
                                                            <Input type='password' placeholder ='repeat your password' name='repeatpassword' id = 'RepeatPassWord' required onChange={handleChange}  />
                                                            <Label > Confirm <Requirment> * </Requirment> </Label>
                                                            <Button type="submit"  defaultValue="Submit"> Submit </Button> 
                                                            </FormTow>
                                                            </Form>
                                                            <SmallParahraphe>
                                                            <p>
                                                            If you have an account, sign in with your email address.
                                                            </p> <hr/>
                                                            <Link to = '/signin'  style = {{textDecoration:"none",color:"#020236", fontWeight:"600"}}> Already Registred ? </Link>
                                                            </SmallParahraphe>
                                                            <P>  * :  is required </P>
                                        </div>
                    )
}

export default SignUp;

