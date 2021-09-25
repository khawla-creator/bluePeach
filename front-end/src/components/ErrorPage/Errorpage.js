import React from 'react';
import styled from 'styled-components'
import ErrorPG from '../assets/assetsErrorPage/notFound.svg';
import Banniere from '../Home/Banniere';


const DIV = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
position:relative;
`;


const Paragraphe =styled.p`
font-family: 'Open Sans', sans-serif;
padding: 20px 100px ;
font-weight: 600;
line-height: 200%;
text-align: center;
`

const ERROR = styled.img`
text-align:center;
width:50%;
margin:auto;
padding-bottom:40px;
`;


function ErrorPage (){
                    return (
                                        <DIV>
                                                            <Banniere/>
                                                            <Paragraphe>orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                                                            magna aliquam erat volutpat.
                                                            </Paragraphe>
                                                            <ERROR src = {ErrorPG} alt = 'Error page' />
                                                            

                                        </DIV>
                    )
}
export default ErrorPage