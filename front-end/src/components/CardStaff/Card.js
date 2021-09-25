import React from 'react'
import styled from 'styled-components';


const CARD = styled.div `
display:flex;
justify-content: center;
flex-direction:column;
background-color:rgb(5, 5, 61);
color:white;
border-radius:35px;
padding: 55px  28px 0 30px;
width: 17rem;
height: 14rem;
margin:auto;
margin-top:80px;
margin-bottom:40px;
position:relative;
`;

const Name= styled.p`
font-size:1.4rem;
font-weight:bold;
line-height: 5%;
text-align: left;
`;
const IMAGE = styled.div`
position: absolute;
bottom:220px;
left:32%;
`

const Text = styled.p`
text-align: justify;
font-family: Heebo, sans-serif;
font-weight: 300;
${'' /* line-height: 200%; */}
text-align: justify;

`;

const Image = styled.img`
border-radius:50%;
box-shadow:0px 10px 10px rgba(16, 16, 36, 0.6);
`;




function Card({name,text,image}) {
                    return (
                                        <CARD>
                                                            <IMAGE>
                                                            <Image src={image}/>
                                                            </IMAGE>
                                                            <Name> {name} </Name>
                                                            <Text>{text}</Text>
                                        </CARD>
                    )
}

export default Card
