import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Card from './Card';
import myPhoto from '../assets/assetsCardStaff/myPhoto.svg';
import faceTow from '../assets/assetsCardStaff/faceTow.svg';
import faceThree from '../assets/assetsCardStaff/faceThree.svg';
import faceFour from '../assets/assetsCardStaff/faceFour.svg';
import faceFive from '../assets/assetsCardStaff/faceFive.svg';


const SecondeCarousal= styled.div `
width: 50vw;
display:flex;
justify-content:center;
flex-direction:column;
padding-top:40px;
font-family: 'Heebo', sans-serif;

.slick-next:before, .slick-prev:before {
                    font-size:26px;
                    color:#101024;
}
.slick-slider .slick-dots button:before {
                    font-size:10px;
                    color:#101024;
                    
}
`
const Title = styled.h1 `
padding:15px 0 20px 0;
color: #05053D;
font-family: 'Open Sans', sans-serif;

`;





function CardStaf() {
                    const settings = {
                                        dots: true,
                                        infinite: true,
                                        speed: 1000,
                                        slidesToShow: 1,
                                        slidesToScroll: 1,
                                        centerPadding: "60px", 
                                        className: "center",
                                        centerMode: true,
                                        };

                    return (
                                        <SecondeCarousal>
                                        <Title> A Few Good Words About Our Community </Title>
                                                            <Slider {...settings}>
                                                            <Card
                                                                                image={myPhoto}
                                                                                name="Khawla Guesmi "
                                                                                text={`Junior full stack devlopper java script and passionate about design.
                                                                                My Blue Peach website is the result of 5 months of training in GOMYCODE 
                                                                                I did it after a lot of training.`}
                                                            />
                                                            <Card
                                                                                image={faceTow}
                                                                                name="Danyl Bernard"
                                                                                text="orem ipsum dolor sit amet, consectetuer adipiscing elit, 
                                                                                sed diam nonummy nibh euismod tincidunt ut laoreet dolor"
                                                            />
                                                            <Card     
                                                                                image={faceThree}
                                                                                name="Juliane Morisse"
                                                                                text="orem ipsum dolor sit amet, consectetuer adipiscing elit, 
                                                                                sed diam nonummy nibh euismod tincidunt ut laoreet dolor  consectetuer adipiscing elit"
                                                            />
                                                            <Card
                                                                                image={faceFour}
                                                                                name="Emma Richard"
                                                                                text="orem ipsum dolor sit amet, consectetuer adipiscing elit, 
                                                                                sed diam nonummy nibh euismod tincidunt ut laoreet dolor"
                                                            />
                                                            <Card
                                                                                image={faceFive}
                                                                                name="Jad Martin"
                                                                                text="orem ipsum dolor sit amet, consectetuer adipiscing elit, 
                                                                                sed diam nonummy nibh euismod tincidunt ut laoreet dolor"
                                                            />
                                                            </Slider>
                                        </SecondeCarousal>
                    )
}

export default CardStaf
