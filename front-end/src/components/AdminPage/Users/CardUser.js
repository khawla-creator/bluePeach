import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import {deleteUser} from '../../../redux/actions/userActions'
import {P} from '../Articles/CardArticle';



export const Card = styled.div `
font-family: 'Heebo', sans-serif;
display:flex;
flex-direction:column;
justify-content:space-between;
width:230px;
background-color:#ffff;
padding:5px;
border-radius:5px;
border:1px solid #020236;
color: #05053D;
margin:5px 0 20px 0;
`



export const Main = styled.div`
display:flex;
flex-direction:column;
padding:15px;
text-align:left;
font-size:0.95rem;
font-weight: bold;

`
export const DIV = styled.div `
display:flex;
justify-content:center;
`
export const Button = styled.button`
padding:10px; 
width:100px;
border-radius: 5px;
border: none;
background-color: #020236;
color: #FFFFFF;
font-weight: bold;
font-size:0.9em;
cursor:pointer;
margin-bottom:10px;
box-shadow: inset 2px 19px 21px rgba(0, 0, 0, 0.25);
:active{
                    transform:scale(1.02);
}
`;

function CardUser({user}) {
                    const dispatch = useDispatch()
                    return (
                                        <Card>
                                                            <Main>
                                                            <span>first name : <P>{user.firstname}</P> </span> 
                                                            <span>last name : <P>{user.lastname}</P> </span>
                                                            <span>age : <P>{user.age}</P></span>
                                                            <span>gender : <P>{user.gender}</P></span>
                                                            <span>adresse : <P>{user.adresse}</P></span>
                                                            <span>postal code :<P>{user.postalcode}</P> </span>
                                                            <span>city : <P>{user.city}</P></span>
                                                            <span>phone :<P>{user.phone}</P> </span> 
                                                            </Main>
                                                            <DIV>
                                                            <Button onClick={()=>dispatch(deleteUser(user._id))}> Delete </Button>
                                                            </DIV>
                                        </Card>
                    )
}

export default CardUser
