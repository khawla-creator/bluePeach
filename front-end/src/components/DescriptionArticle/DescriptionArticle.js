/* eslint-disable no-undef */
import React, {useState} from 'react';
import {RatingPrice } from '../Categories/CardCatgorie/Card';
import Banniere from '../Home/Banniere.js'
import Polygonplus from '../assets/assetsDescriptionArticle/PolygonPlus.svg';
import Polygonmoin from '../assets/assetsDescriptionArticle/PolygonMoin.svg';
import { Paragraphe, Title } from '../Categories/Men/Men';
import styled from 'styled-components';
import {useParams,Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import ReactStars from 'react-rating-stars-component'
import { getProduct } from '../../redux/actions/productActions.js';




const SectionTop = styled.div `
display:flex;
margin-top:40px;
position:relative;
`

const SectionLeft= styled.div`
width:10%;
padding:0 40px  0 20px;
border-right:2px solid #020236;
font-family: 'Open Sans', sans-serif;
`;


const AddToCart= styled.div`
display:flex;
margin-left: 30px; 
width:80%;

`;

const IMAGE = styled.img `
width:35vw;
height:auto;
border-bottom: 0.5px solid #797979;
margin-bottom:30px;
padding-bottom: 0px;
`;

const Span = styled.span`
display:flex;
align-items:center;
font-family: 'Cairo', sans-serif;
margin-right:60px;
font-weight: bold;
font-size: 1.4rem;  
letter-spacing: -0.02em;      
p{
    font-size:1.1rem;
    font-weight:600;
    padding-left:5px;
    margin:0 2px 0 2px;
}
`


const Quantity = styled.div`
display:flex;

`;

const Add=styled.div`
font-family: 'Open Sans', sans-serif;
display:flex;
align-items:center;
justify-content:space-between;
height:1vw;
padding-top:10px;

span{
                    padding:11px 20px;
                    font-size:1rem;
                    border:1px solid #797979;
                    border-radius:5px;
                    
}
`

const Article = styled.div`
display:flex;
flex-direction:column;
`; 




const Form = styled.form`

`;


const HeaderAdd = styled.div `
display:flex;
justify-content:space-around;
padding-bottom:30px;
padding-right:90px;
padding-left:10px;


`

export const Button = styled.button`
padding: 14px 20px;
border-radius:7px;
border:none;
font-family: 'Open Sans', sans-serif; */}
font-size:0.9rem;
font-weight:bold;
color:white;
background-color: #04042f;
cursor:pointer;
:active{
                    transform:scale(1.02);
}
`;

const ButtonQt = styled.button `
background-color:white;
padding: 0 20px;
border:none;
img {
                    cursor:pointer;
                    &:active{
                    transform:scale(1.2);
                    filter: invert(58%) sepia(5%) saturate(244%) hue-rotate(212deg) brightness(90%) contrast(84%);
                    }
}
`;


function DescriptionArticle() {
    const isUser = useSelector(state=>state.userReducer.isUser)
    const [counter,setCounter]=useState(1);

    const dispatch = useDispatch()
    const {name} = useParams()
    const articles = useSelector(state => state.articleReducer.articles)
    const article= articles.find(el=>el.name===name)
       // console.log(article)
    

    
            return (
                    <div>
                    <Banniere/>


                    <SectionTop>        
                                        <SectionLeft>   
                                        <h3> size </h3>
                                        <Form>
                                                            <input type = "checkbox" name = "36" id = "36" /> <label for= "36" checked> 36 </label> <br/>
                                                            <input type = "checkbox" name = "37" id = "37"/> <label for= "37"> 37 </label> <br/>
                                                            <input type = "checkbox" name = "38" id = "38"/> <label for= "38"> 38 </label> <br/>
                                                            <input type = "checkbox" name = "39" id = "39"/> <label for= "39"> 39 </label> <br/>
                                                            <input type = "checkbox" name = "40" id = "40"/> <label for= "40"> 40 </label> <br/>
                                                            <input type = "checkbox" name = "41" id = "41"/> <label for= "41"> 41 </label> <br/>
                                                            <input type = "checkbox" name = "42" id = "42"/> <label for= "42"> 42 </label> <br/>
                                                            <input type = "checkbox" name = "43" id = "43"/> <label for= "43"> 43 </label> <br/>
                                                            <input type = "checkbox" name = "44" id = "44"/> <label for= "44"> 44 </label> <br/>
                                                            <input type = "checkbox" name = "45" id = "45"/> <label for= "45"> 45 </label> <br/>
                                                            <input type = "checkbox" name = "46" id = "46"/> <label for= "46"> 46 </label>
                                        </Form> <hr/>

                                        <h3> Color  </h3>
                                        <Form>
                                                            <input type = "checkbox" name = "black" id = "black"/> <label for= "black">  ⬛ </label> <br/>
                                                            <input type = "checkbox" name = "white" id = "white"/> <label for= "white">  ⬜ </label> <br/>
                                                            <input type = "checkbox" name = "blue" id = "blue"/> <label for= "blue"> 🟦 </label> <br/>
                                                            <input type = "checkbox" name = "brown" id = "brown"/> <label for= "brown"> 🟫 </label> <br/>
                                                            <input type = "checkbox" name = "gray" id = "gray"/> <label for= "gray">  ⬛ </label> 
                                                            
                                                            
                                        </Form> <hr/>
                                        <h3> Pathology</h3>
                                        <Form>
                                                            <input type = "checkbox" name = "Foot problem" id = "Foot problem"/> <label for= "Foot problem" checked> Foot problem </label> <br/>
                                                            <input type = "checkbox" name = "Wide width " id = "Wide width "/> <label for= "Wide width "> Wide width  </label> <br/>
                                                            <input type = "checkbox" name = "Bunions" id = "Bunions"/> <label for= "Bunions"> Bunions  </label> <br/>
                                                            <input type = "checkbox" name = "Wide toe box" id = "Wide toe box"/> <label for= "Wide toe box"> Wide toe box </label> <br/>
                                                            <input type = "checkbox" name = "Diabetic" id = "Diabetic"/> <label for= "Diabetic"> Diabetic </label>
                                        </Form> <hr/>
                                        </SectionLeft>

                                        {/* ---------------------------------------------------- */}

                                        <AddToCart>
                                        
                                        <Article>
                                        <IMAGE  src = {article && article.imageUri}  alt ="article men"/>

                                        <RatingPrice style = {{borderBottom:'1px solid #797979', paddingBottom:'20px'}}   >
                                                                                <ReactStars
                                                                                count={5}    
                                                                                value= {article && article.rate} 
                                                                                size={30}
                                                                                activeColor="#f1db02"
                                                                                /> 
                                                                                
                                                                                <Span> {article && article.price} € </Span>
                                                                                <Span > Color : <p > {article && article.color} </p></Span>
                                                                                <Span> Sizes : {article && article.size.map(el=><p key={article._id}> {`  ${el} -`} </p>)} </Span>
                                        </RatingPrice>
                                        <HeaderAdd>
                                        <Span> Quantity </Span>
                                        <Span> Price </Span>
                                        </HeaderAdd>
                                        <Add>  
                                        
                                                            <Quantity> 
                                                            <ButtonQt onClick={()=>setCounter(prevCounter=>   counter > 1 && prevCounter - 1 )}> <img src = {Polygonmoin}  alt = 'plus'/> </ButtonQt>
                                                            <span > {counter || 0} </span>
                                                            <ButtonQt onClick={()=>setCounter(prevCounter=> prevCounter + 1)}> <img src = {Polygonplus} alt = 'moin'/> </ButtonQt>
                                                            </Quantity>
                                                            <span > {article && article.price * counter} €  </span>
                                        {
                                            isUser ? <Link to={`/Pannier/:${article.name}`}><Button onClick={()=>{dispatch(getProduct(article))}} > Add To Cart </Button></Link> : <Button style={{backgroundColor:"white",cursor:"none", margin: " 0 20px"}}> </Button>
                                        }
                                        
                                        </Add>
                                        </Article>

                                        {/* ---------------------------------------------------- */}

                                        <div>
                                        <Title style = {{textAlign:"left", fontSize:'1.7rem'}} > Shoes Blue Peach - {article && article.name} </Title>
                                        
                                        <Paragraphe> 
                                        <h2> Description article </h2>
                                        {article && article.description} <br/>
                                        <h2> Characteristics </h2>
                                        {article && article.Characteristics}
                                        <h2> For which pathologies ? </h2>
                                        {article && article.pathologies.map(el=><li key={article._id}> {el} </li>)}
                                        
                                        </Paragraphe> 
                                        </div>

                                        </AddToCart>
                                        
                    </SectionTop>
                    </div>   
)
}

export default DescriptionArticle
