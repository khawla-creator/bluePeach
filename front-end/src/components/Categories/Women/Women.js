import React , {useState} from 'react';
import Banniere from '../../Home/Banniere';
import search from '../../assets/assetesCategories/loupe.svg'
import {Search,ButtonSearch,Input,IconeSearch,Main,SectionLeft,SectionRight,Title,SectionCard,Paragraphe,Footer,Button}from '../Men/Men'
import Card from '../CardCatgorie/Card';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';




function Woman() {
                    const [searchArticle, setSearchArticle] = useState("");
                    const articles = useSelector(state =>state.articleReducer.articles)
                    return (
                                        
                                        <div>
                                                            <Search>
                                                                                <ButtonSearch type="submit"> Search </ButtonSearch>
                                                                                <Input type= 'text' onChange= { e => setSearchArticle(e.target.value)}/>
                                                                                <IconeSearch src= {search} alt = 'search' />
                                                            </Search>
                                                            <Banniere/>
                                                            <Main>
                                                            <SectionLeft>
                                                            <h3> GENDER </h3>
                                                            Men <br/>
                                                            Women <br/>
                                                            Insolas <hr/>
                                                            <h3> COLORS </h3>
                                                            ⬛⬜🟦🟫  🟥<hr/>
                                                            <h3> PATHOLOGIY </h3>
                                                            Problem Feet <br/>
                                                            Wide Width <br/>
                                                            Bunino <br/>
                                                            Wide Toe Box <br/>
                                                            Swollen Feet <br/>
                                                            POST-OP <br/>
                                                            Diabetic<hr/>
                                                            <h3> FOOT WIDTH </h3>
                                                            Standard <br/>
                                                            Wide <br/>
                                                            Extra-Wide<hr/>
                                                            </SectionLeft>
                                                            <SectionRight>
                                                            
                                                            <Title style = {{padding: '40px 0 20px 0'}} > WOMEN'S COMFORT SHOES : OUR SELECTION </Title>
                                                            <Paragraphe style ={{ padding:'12px 0'}}>
                                                            Podexpert offers you a wide range of women's comfort shoes adapted to all foot morphologies. We offer all types
                                                            of shoes: women's comfort sandals, heeled booties, ballerinas for walking or for the city, leather moccasins, comfortable sneakers or platform pumps.
                                                            You can also discover a selection of comfortable and elegant women's shoes, ideal for your outings in town.
                                                            </Paragraphe> <hr/>
                                                            <SectionCard>
                                                            {
                                                                                articles.filter(article=>article.category ==="women" && article.name.toLowerCase().includes(searchArticle.toLowerCase())).map(article=>
                                                                                <Card
                                                                                                    article={article}
                                                                                                    key={article._id}
                                                                                />)
                                                            }
                                                            
                                                            </SectionCard>
                                                            
                                                            <Link to = '/Categories/Insoles'><Button> {'2/ - - >'} </Button>  </Link>
                                                            <Footer>
                                                            <Paragraphe>
                                                            <h3>WIDE FEET, HALLUX VALGUS, DIABETIC FOOT OR TOE CLAWS, A WIDE CHOICE OF COMFORT SHOES FOR YOU ! </h3>
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

export default Woman
