import React from 'react';
import styled from 'styled-components';
import heart from '../../assets/assetesCategories/Heart.svg';
import {Link} from 'react-router-dom';
import ReactStars from 'react-rating-stars-component'


const CARD = styled.div`
display:flex;
flex-direction:column;
width:274px;
font-family: 'Cairo', sans-serif;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
background: #FFFFFF;
border-top: 11px solid #05053D;
position: relative;
margin:10px;
transform: scale(1);
transition: transform 500ms;

&:hover{
                    transform: scale(1.03);
                    z-index:1;
}

`;

const Header= styled.div`
margin-top:-3px;
border-top:1px solid #05053D;
display:flex;
justify-content:flex-end;
`;

const Icone = styled.img`
width:18px;
height:16px;
padding: 7px 0 ;
&:active{
                    transform:scale(1.3);
                    filter: invert(38%)
                    sepia(97%)
                    saturate(2537%) 
                    hue-rotate(318deg) 
                    brightness(96%)
                    contrast(97%);
                    
}
`;
const HeaderCard= styled.div`
display:flex;
justify-content:center;
align-items:center;
background-color:#05053D;
padding:3px 2px 4px 2px;
width:57px;
height:20px;
border-radius: 0px 0px 26px 26px;

`
const SPAN = styled.span`
display:flex;
justify-content:center;
align-items:center;
color:rgba(255, 255, 255, 0);
font-size:1.4rem;
font-weight:larger;
position:absolute;
left:100px;
top:90px;

`;

const MainCard = styled.div`
display:flex;
justify-content:flex-start;
flex-direction:column;
align-items:center;
padding-top:5px;

&:hover{
opacity:0.5;

}
`;


const DIV = styled.div`
&:hover{
span{
color:black;
z-index:1;
}
}
`;

export const IMAGE = styled.img `
width:auto;
height:10.65rem;
margin-top:5px;
`;

const Article=styled.h2 `
color: #05053D;
font-weight: bold;
font-size: 20px;
line-height: 25px;
text-align: center;
letter-spacing: -0.02em;
width:265px;
height:68px;
background: linear-gradient(180deg,
rgba(196, 196, 196, 0) 15.65%, 
rgba(0, 0, 0, 0.5) 190.76%);

`;

export const RatingPrice= styled.div`
display:flex;
justify-content:space-around;
flex-direction:column;
margin-bottom:10px;
margin-top:-10px;

`;


export const Price = styled.span`
font-family: 'Cairo', sans-serif;
margin-right:60px;
font-weight: bold;
font-size: 1.5rem;  
letter-spacing: -0.02em;
`;

const FooterCard= styled.div`
display:flex;
justify-content:space-between;
padding: 0 20px;

`;

const Button = styled.button `
width:67px;
height:45px;
border-radius: 11px;
border: none;
background-color: rgba(4, 4, 52, 0.7);
color: #FFFFFF;
font-weight: bold;
font-size: 15px;
cursor:pointer;
letter-spacing: 0.06em;
margin-top:10px;
&:hover{
background-color: #020236;
}
`;


function Card({article}) {

                    return (
                                        <CARD className = 'card'>
                                                            <Header>
                                                                                <HeaderCard>
                                                                                <Icone src = {heart} alt ='heart' />   
                                                                                </HeaderCard>
                                                            </Header>
                                                            <DIV>
                                                            <Link to = {`/descriptionArticle/${article.name}`}> <SPAN> See More? </SPAN></Link>
                                                            <MainCard>
                                                                                <IMAGE src={article.imageUri} alt= 'shoes' />
                                                                                <Article> Shoes Blue Peach - {article.name} </Article>
                                                            
                                                            </MainCard>
                                                            </DIV>
                                                            <FooterCard>
                                                                                <RatingPrice>
                                                                                                    <ReactStars
                                                                                                    count={5}    
                                                                                                    value= {article.rate} 
                                                                                                    size={25}
                                                                                                    activeColor="#f1db02"
                                                                                                    /> 
                                                                                                    
                                                                                                    <Price> {article.price} € </Price>
                                                                                </RatingPrice>
                                                            <Link to = {`/descriptionArticle/${article.name}`}><Button> Sale </Button> </Link>
                                                            </FooterCard>
                                        </CARD> 
                    )
}

export default Card
