import React , {useState} from 'react';
import styled from 'styled-components'
import Banniere from '../../Home/Banniere';
import search from '../../assets/assetesCategories/loupe.svg'
import Card from '../CardCatgorie/Card';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



export const Search =styled.div `
align-items:center;
display:flex;
justify-content:space-around;
margin: 50px  280px 0;

`;

 export const ButtonSearch =styled.button `
padding:10px; 
width:130px;
border-radius: 7px;
border: none;
background-color: #020236;
color: #FFFFFF;
font-weight: bold;   
font-size: 15px;
cursor:pointer;
box-shadow: inset 2px 19px 21px rgba(0, 0, 0, 0.25);
`;

export const Input = styled.input`
padding:11px; 
width:40vw ;
border-radius: 7px;
border: none;
background-color:#dddaea;
color:#020236;
font-weight:bold;
z-index:0;

&:focus{
                    outline:none;
                    background-color: #b4b1bf;
}
`;

export const IconeSearch= styled.img`
width:30px;
z-index:0;
`;

export const Main = styled.div`
display:flex;
justify-content:space-between;
`;

export const SectionLeft = styled.div `
width:20%;
padding:10px 20px;
margin : 27px 30px 0;
border-right:2px solid #020236;
font-family: 'Open Sans', sans-serif;
line-height: 200%;
`;

export const SectionRight= styled.div `
width:100%;
text-align:center;
`;

export const Title = styled.h1`
font-family: 'Open Sans', sans-serif;
text-align:center;
padding: 0 35px;
color :  #020236; 
`
export const Paragraphe = styled.p`
font-family: 'Open Sans', sans-serif;
margin: 20px 35px 30px;
font-weight: 550;
font-size: 0.9rem;
line-height: 200%;
text-align: justify;

`;

export const SectionCard = styled.div `
display:flex;
flex-wrap:wrap;
justify-content: space-around;
padding:20px 20px;
`;
export const Button=styled.button`
padding:10px 15px; 
border-radius: 11px;
border: none;
background-color: #020236;
color: #FFFFFF;
font-weight: bold;
font-size: 1em;
cursor:pointer;
margin-top:40px;
`

export const Footer = styled.div`
margin-top:40px;
`;

export const Span = styled.h3`
font-family: 'Open Sans', sans-serif;
color :  #020236; 
text-align: justify;
margin-bottom:30px;
margin: 50px  35px 0 35px;
font-size: 1.1em;
`


function Man() { 
                    const [searchArticle, setSearchArticle] = useState("");
                    const articles = useSelector(state =>state.articleReducer.articles)
                    return ( 
                                        <div>
                                                            <Search >
                                                                                <ButtonSearch type="submit"> Search </ButtonSearch>
                                                                                <Input type= 'text' onChange= { e => setSearchArticle(e.target.value)}/>
                                                                                <IconeSearch src= {search} alt = 'search' />
                                                            </Search>
                                                            <Banniere/>
                                                            <Main>
                                                            <SectionLeft>
                                                            <h3> GENDER </h3>
                                                            <p>
                                                            Men <br/>
                                                            Woman <br/>
                                                            Insolas </p>
                                                            <hr/>
                                                            <h3> COLORS </h3>
                                                            ⬛⬜🟦🟫  🟥<hr/>
                                                            <h3> PATHOLOGIY </h3>
                                                            <p>
                                                            Problem Feet <br/>
                                                            Wide Width <br/>
                                                            Bunino <br/>
                                                            Wide Toe Box <br/>
                                                            Swollen Feet <br/>
                                                            POST-OP <br/>
                                                            </p>
                                                            Diabetic<hr/>
                                                            <h3> FOOT WIDTH </h3>
                                                            <p>
                                                            Standard <br/>
                                                            Wide <br/>
                                                            Extra-Wide
                                                            </p>
                                                            <hr/> 
                                                            </SectionLeft>
                                                            <SectionRight>
                                                            
                                                            <Title style = {{padding: '40px 0 20px 0'}} > COMFORTABLE SHOES FOR MEN : OUR SELECTION </Title>
                                                            <Paragraphe style ={{ padding:'12px 0'}}>
                                                            All our comfortable shoes for men with sensitive feet are gathered here. We have selected these models because we know that it is difficult to find the ideal comfort shoe for your foot type. The basis of a comfortable shoe is to provide enough room for your forefoot and toes. 
                                                            Here you can find comfortable dress shoes for men or our collection of comfortable sneakers for men.
                                                            Most of our comfort shoes also have removable insoles that can be easily replaced with your own orthopaedic insoles.
                                                            </Paragraphe> <hr/>
                                                            
                                                            <SectionCard>
                                                            {
                                                                                articles.filter(article=>article.category ==="man" && article.name.toLowerCase().includes(searchArticle.toLowerCase())).map(article=>
                                                                                <Card
                                                                                                    article={article}
                                                                                                    key={article._id}
                                                                                />)
                                                            }
                                                            
                                                            </SectionCard>
                                                            
                                                            <Link to = '/Categories/Women'> <Button> {'1/ - - >'} </Button> </Link>
                                                            <Footer>
                                                            <Span>WIDE FEET, HALLUX VALGUS, DIABETIC FOOT OR TOE CLAWS, A WIDE CHOICE OF COMFORT SHOES FOR YOU ! </Span>
                                                            <Paragraphe>
                                                            You will be able to find the best <strong>of comfort shoes </strong> in different categories classified by genre 
                                                            or type of shoes. You will thus find our collection of comfort shoes for women or men as well as 
                                                            our range of orthopedic shoes, slippers or safety shoes adapted to each type of pathology.
                                                            We have selected for you sandals , boots and boots but also pumps and ballerinas . All in different colors,
                                                            materials (leather, synthetic, nubuck or microfiber) and in sizes that are difficult to find on the market.
                                                            These models are classified by shoe style, but also by type of pathology or podiatry problem for which they 
                                                            were designed. Each category has been designed to guide you in your choice: shoes for diabetic feet, hallux valgus
                                                            shoes for women, or shoes for wide feet.
                                                            </Paragraphe>
                                                            </Footer>
                                                            </SectionRight>
                                                            </Main>
                                        </div>
                    )
}

export default Man
