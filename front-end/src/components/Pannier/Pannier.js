import React from 'react';
import styled from 'styled-components';
import Banniere from '../Home/Banniere.js'
import CardPannier from './CardPannier.js'
import { useSelector } from 'react-redux';



                    
const GlobalDiv = styled.div`
font-family: 'Heebo', sans-serif;
text-align:center;
h1{
                    color:#05053d;
}
`



const Contenue=styled.div `   
color:#05053d;
padding: 60px 30px 30px 30px;
width:90%;
margin:auto;
margin-top:50px;
display:flex;
justify-content:center;
flex-direction:column;
font-weight:bold;
background-color:rgba(196, 196, 196, 0.24);
`;

const Entete = styled.div `
display:flex;
justify-content:space-between;
width:83.5%;
padding-right:197px;
background-color:#c4c4c4;
`;


const DIV = styled.div`
display:flex;
justify-content:flex-end;
justify-content:row;
align-items:center;
margin: 60px 40px 20px ;

button{
                    background-color:#05053d;
                    color:white;
                    font-size:1rem;
                    font-weight:bold;
                    border-radius: 5px;
                    border:none;
                    width: 100px;
                    height: 44px;
                    :active{
                    transform:scale(1.02);
}
}
`;

const P =styled.p `
width:80px;
`



function Pannier() {
                    
                    const products = useSelector(state =>state.productReducer.product)
                   
                    return (
                                        <GlobalDiv>
                                        <Banniere/>
                                        <h1> YOUR SHOPPING CART </h1>
                                        <Contenue>
                                                            <Entete>
                                                            <P>N ° </P>
                                                            <P>Article </P>
                                                            <P> Name </P>
                                                            <P> size </P>
                                                            <P> Price(Each) </P>
                                                            <P> Quantity </P>
                                                            <P> Item Total </P>
                                                            </Entete>
                                                            { products.length>0 ? products.map(product=>
                                                            <CardPannier 
                                                            key={product._id}
                                                            product={product}
                                                            
                                                            />
                                                            ):null
                                                            }
                                                            
                                                            <DIV>
                                                            <button> Confirm </button>
                                                            </DIV>
                                        </Contenue>
                                        </GlobalDiv>
                    )
}

export default Pannier
