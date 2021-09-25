import React from 'react'
import CardUser from './CardUser';
import styled from 'styled-components'
import { useSelector } from 'react-redux';

export const DIV = styled.div `
display:flex;
justify-content:space-around;
flex-wrap:wrap;
padding:40px 25px;
width:84%;
margin-right:auto;
margin-left:auto;
background-color:rgb(211, 232, 225,0.3);
border-radius:5px;
`

export const Title = styled.h1 `
padding:20px 0;
color: #05053D;
font-size:2rem;
font-family: 'Open Sans', sans-serif;
text-align:center;

`


function AdminUsers(){
                    const users = useSelector(state =>state.userReducer.users)
                    return (
                                        <div >
                                        <Title > USERS LIST </Title>
                                        <DIV>
                                        {
                                                             users.map(user=> <CardUser
                                                                                 user={user}
                                                                                 key={user._id}
                                                             />
                                                             )
                                         }
                                        </DIV>
                                        </div>
                    )
}
export default AdminUsers;

