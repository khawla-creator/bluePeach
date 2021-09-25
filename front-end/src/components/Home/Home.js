import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import shoes from '../assets/assetsHome/shoes.jpg'
import logo from '../assets/assetsHome/logo.svg';
import FirstService from '../assets/assetsHome/Service-1.svg';
import SecondService from '../assets/assetsHome/Service-2-.svg';
import ThirdService from '../assets/assetsHome/Service-3.svg';
import LogoBody from '../assets/assetsHome/LogoBody.svg';
import CardStaf from '../CardStaff/CardStaf';
import Banniere from './Banniere';



const Container=styled.div`
display:flex;
flex-direction:column;
justify-content:center; 
align-items:center;

`;

const FirstCarousal=styled.div `
width: 80vw;
display:flex;
justify-content:center;
flex-direction:column;
padding-top:35px;
font-family: 'Heebo', sans-serif;
position:relative;

.slick-next:before, .slick-prev:before {
                    font-size:26px;
                    color:#c4c4c4;
}
.slick-slider .slick-dots button:before {
                    color:#FFFFFF;
                    
}
`;

const Carousal= styled.div `
display:flex;
width:98vw;
img{
    width:28vw;
    height:20vw;
}
`; 



const Description=styled.div`
    margin-left: 90px;
    width: 35rem;
    margin-top: 2rem;
    margin-right: 2rem;
`;

const Paragraphe= styled.p `
font-family: Heebo, sans-serif;
font-weight: 400;
line-height: 250%;
text-align: justify;
letter-spacing: 0.050em;
`;


const Title = styled.h2`
font-family: 'sans serif', sans-serif;
color :#020236; 
font-size:1.9rem;
font-weight: bolder;
`;

const Logo= styled.img`
position: absolute;
top:20.5rem;
right:69rem;
opacity:0.7;
width:5.6rem;
height:5.5rem;
`;

const AboutUs=styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
padding-top:30px;
width:1000px;
height:430px;
text-align:center;
`
const Services=styled.div`
display: flex;
justify-content: space-between;
align-items:center;
width:1050px;
padding-left:80px;
padding-top:20px;
`;

const TitleService = styled.h1`
font-family: 'Open Sans', sans-serif;
font-weight: 600;
font-size: 1.8rem;
color :#020236; 

`;


const DescriptionService = styled.p `
font-family: Heebo, sans-serif;
font-weight: 400;
line-height: 200%;
text-align: justify;
letter-spacing: 0.030em;
`


function Home() {

const settings = {
                    dots: true,
                    infinite: true,
                    speed: 750,
                    slidesToShow: 1,
                    slidesToScroll: 1, 
                    };
                    return (

                                        
                                        <Container>

                                                
                                            <FirstCarousal>
                                                            <Slider {...settings}>
                                                            <div>
                                                            <Carousal>
                                                            <img src={shoes} alt="shoes" />
                                                                                <Description>
                                                                                <Title> Most Popuplar Shoes - Alma Silver </Title>
                                                                                <Paragraphe>
                                                                                This sneaker for diabetic foot protects the feet from the outside elements, limits friction 
                                                                                and areas of overpressure, evacuates moisture and prevents areas of lesions.
                                                                                </Paragraphe>
                                                                                </Description>
                                                            </Carousal>
                                                            </div>

                                                            <div>
                                                            <Carousal >
                                                            <img src={shoes} alt="shoes" />
                                                                                <Description>
                                                                                <Title> Most Popuplar Shoes - Alma Silver </Title>
                                                                                <Paragraphe>
                                                                                hese comfortable shoes have a standard and comfortable footwear volume. This corresponds to a width F or G. 
                                                                                It can accommodate slim feet or standard width.
                                                                                </Paragraphe>
                                                                                </Description>
                                                            </Carousal>
                                                            </div>

                                                            <div>
                                                            <Carousal>
                                                            <img src={shoes} alt="shoes"/>
                                                                                <Description>
                                                                                <Title> Most Popuplar Shoes - Alma Silver </Title>
                                                                                <Paragraphe>
                                                                                The closure is done with a lace. The lace allows a good support of the foot in the shoe, an optimal comfort and adapts itself to any morphology of foot.
                                                                                For better stability, the counter-back supports the rear foot.
                                                                                </Paragraphe>
                                                                                </Description>
                                                            </Carousal>
                                                            </div>
                                                            </Slider>
                                                            <Logo src ={logo} alt = 'logo'/>
                                        </FirstCarousal>

                                                            <Banniere/>
                                                            
                                                            <AboutUs id = 'AboutUs'>
                                                                <Title> ABOUT US </Title>
                                                                <Paragraphe>
                                                                We have been shoe professionals for many years and are specialists in foot care and its various pathologies. 
                                                                During our daily consultations, we are well aware that it is increasingly difficult for you to find comfort shoes in the shops.
                                                                For your comfort, we have therefore selected the most suitable models available. The brands we have chosen to 
                                                                work with offer various collections ranging from mules to heeled boots.
                                                                We do not sell a whole range of medical products, but are really specialists in footwear. As pedorthists, we see patients every day in 
                                                                consultation and are therefore best placed to understand and address your footwear problems.
                                                                </Paragraphe>
                                                            </AboutUs>

                                                            <Title id = 'Services'> OUR SERVICES </Title>

                                                            <Services>
                                                                    <img src= {logo}  style ={{width:'243px',height:'188px',paddingLeft:'100px'}} alt='first service'/>
                                                                    <img src= {FirstService} alt='first service' />
                                                            </Services>
                                                            <Services style ={{paddingLeft:'10px'}}>
                                                                    <img src= {SecondService} alt='second service'/>
                                                                    <div>
                                                                    <TitleService style={{textAlign:'center'}}> A Medical Pedicure </TitleService>
                                                                    <DescriptionService>
                                                                    A medical pedicure or a “Medi Pedi” is a luxurious foot treatment performed by a Podiatrist in a safe and sterile environment. 
                                                                    Unlike traditional salon pedicures which focus on making the feet look good, they often neglect the real 
                                                                    foot problems and can sometimes make them worse! Medical pedicures are aimed not just at cleaning up the feet, but examining the nails,
                                                                    skin and foot as a whole to understand why particular issues occur.     
                                                                    </DescriptionService>
                                                                    </div>
                                                            </Services>
                                                            <Services style ={{paddingLeft:'120px'}}>
                                                                    <div style={{textAlign:'center'}}>
                                                                    <img src={LogoBody} alt='logo Body' style={{width:'80px',heigth:'80px'}} />
                                                                    <TitleService> Well-Being Of The Feet </TitleService>
                                                                    <DescriptionService style={{marginRight:'20px'}}>
                                                                    Podiatrists are very qualified to treat all complications that commonly arise from nail salons such as fungal and bacterial infections,
                                                                     ingrowns from poor cutting techniques and even warts. 
                                                                     However, we believe that prevention is key which is why a Medical Pedicure is a professional alternative to a traditional pedicure. 
                                                                    </DescriptionService>
                                                                    </div>
                                                                    <img src= {ThirdService} alt='third service' />
                                                            </Services>
                                                            
                                                            <CardStaf/>

                                        </Container>
                                        
                    )
}

export default Home;
