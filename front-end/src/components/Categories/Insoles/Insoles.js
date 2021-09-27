import React, {useState} from 'react';
import Banniere from '../../Home/Banniere';
import search from '../../assets/assetesCategories/loupe.svg'
import {Search,ButtonSearch,Input,IconeSearch,Main,SectionLeft,SectionRight,Title,SectionCard,Paragraphe,Footer,Button}from '../Men/Men'
import Card from '../CardCatgorie/Card';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; 

function Insoles() {
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
                                                            <Title style = {{padding: '40px 0 20px 0'}}>  ORTHOPEDIC INSOLES ADAPTED TO YOUR SHOES </Title>
                                                            <Paragraphe style ={{ padding:'12px 0'}}>
                                                            Your hallux valgus makes you suffer? We have the perfect complement to your hallux valgus orthopedic shoes.
                                                            Podexpert has selected a whole range of protection for your feet or your toes: cushioning heel pad, toe spreader or forefoot padding.
                                                            
                                                            </Paragraphe>
                                                            <SectionCard>
                                                            {articles.filter(article=>article.category ==="insoles" && article.name.toLowerCase().includes(searchArticle.toLowerCase())).map(article=>
                                                                                <Card
                                                                                                    article={article}
                                                                                                    key={article._id}
                                                                                />)}
                                                            </SectionCard>
                                                            <Link to = '/pathologies'> <Button> {'3/ - - >'} </Button> </Link>
                                                            <Footer>
                                                            <Paragraphe>
                                                            Your feet inside your shoes deserve the utmost attention. This is why we 
                                                            have selected for you a whole range of comfort socks and silicone orthoplasties which will bring you the greatest comfort.
                                                            You can also find our maintenance products for your leather shoes.
                                                            Remember to maintain your orthopedic shoes or bunion shoes so that they last longer. 
                                                            </Paragraphe>
                                                            </Footer>
                                                            </SectionRight>
                                                            </Main>
                                        </div>
                    )
}

export default Insoles
