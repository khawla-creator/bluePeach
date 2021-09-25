import React  from 'react';
import styled from 'styled-components';
import { deleteProduct } from '../../redux/actions/productActions.js';
import { useDispatch } from 'react-redux';


const CartArticle = styled.div `
font-family: 'Heebo', sans-serif;
color:#023e8a;
padding:25px 20px;
align-items:center;
display:flex;
justify-content:space-between;
background-color:rgba(196, 196, 196, 0.33);
height:50px;
margin-top:20px;

span{
                    background-color:#ffffff;
                    padding:5px 10px;
                    border-radius:3px;
                    
};





`;


const Button = styled.button `
background: #FE0606;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
font-size:1rem;
font-weight:bold;
border:none;
color:#ffffff;
width: 77px;
height: 44px;
`;

const P = styled.p `
width:90px;

`



function CardPannier({product}) {
                    console.log(product)
                    const dispatch = useDispatch()
                    return (
                                        
                                        
                                        
                                        <CartArticle className='element'>
                                                            <span> 1 </span>
                                                            <img  style={{width:'auto',height:'78px'}} src={product.imageUri} alt = 'shoes' />
                                                            <P> {product.name} </P>
                                                            <P className = 'P1'> 40 </P>
                                                            <P> {product.price} € </P>
                                                            <P> 1 </P>
                                                            <P> {product.price * 1} € </P>
                                                            <Button onClick={()=>{dispatch(deleteProduct(product._id))}}> Delete </Button> 
                                        </CartArticle>

                    )
};

export default CardPannier;
