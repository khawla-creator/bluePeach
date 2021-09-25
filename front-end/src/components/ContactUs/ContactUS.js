import React,{useState} from 'react';
import styled from 'styled-components';
import facebook from '../assets/assetesContactUS/facebook.svg';
import linkidin from '../assets/assetesContactUS/linkidin.svg';
import instagram from '../assets/assetesContactUS/instagram.svg';
import twitter from '../assets/assetesContactUS/twitter.svg';
import email from '../assets/assetesContactUS/email.svg';
import phone from '../assets/assetesContactUS/phone.svg'
import logoDark from '../assets/assetesContactUS/logo dark mood.svg';
import github from '../assets/assetesContactUS/github.svg'
import ScrolTop from './ScrolTop';
import { useSelector,useDispatch } from 'react-redux';
import { addMessage } from '../../redux/actions/messagesActions';


const Contact = styled.div ` 
width:98vw;
background-color:#04042f; 
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
margin-top: 80px;
margin-bottom: 15px;
position:relative;
`;

const HeaderContact = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
`;

const SecondaryTitle =styled.h2 `
text-align:center;
color:#FFFFFF;
border-bottom:2px  solid white;
font-family: 'Open Sans', sans-serif;
font-size:1.8em;
padding-top:1rem ;
padding-bottom:1rem;
margin-bottom:4rem;
`;
const Icons = styled.div`
display:flex;
justify-content:space-between;
width:250px;
padding-bottom:2rem;
`;

const Icon = styled.img` 
&:hover{
    filter: drop-shadow(4px 4px 4px #023e8a);
}
`;

const Form=styled.form`
display:flex;
flex-direction:column;
justify-content:center;
color:white;
input {
    margin-bottom:1rem;
    padding:0.8em;
    border:none;
    border-radius:5px;
    background-color:rgba(230, 229, 236, 0.4);
    font-family:'Heebo', sans-serif;
    color:white;
    &:active,&:focus{
                        border:none;
                        outline:none;
                        background-color:#858489;
    }
    &::placeholder{
                        color:#eff7f8;
                        opacity:0.6;
    }
    &[name='name']{
    margin-right:1rem;
    }
}
textarea{
    margin-bottom:1rem;
    padding:0.8em;
    border:none;
    border-radius:5px;
    background-color:rgba(230, 229, 236, 0.4);
    font-family:'Heebo', sans-serif;
    color:white;
    &:active,&:focus{
                        border:none;
                        outline:none;
                        background-color:#858489;
    }
    &::placeholder{
                        color:#eff7f8;
                        opacity:0.6;
    }
}
`;

const FormRow=styled.div `
`;

const Button = styled.button` 
padding:0.6rem 2rem;
width:150px;
margin-right:auto;
margin-left:auto;
background-color:white;
font-family:'Heebo', sans-serif;
font-weight: bold;
color:#020236;
border:none;
border-radius:20px;
cursor:pointer;
margin-bottom:10px;
cursor:pointer;
box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
transform: scale(1);
transition: transform 400ms;
    &:hover {
        transform: scale(1.05);
    }
`;

const Right = styled.p`
width:98vw;
font-family: 'Open Sans', sans-serif;
font-size:0.7em;
text-align:center;
color:#FFFFFF;
padding:12px 0 8px 0 ;
border-top:1px solid white;
a{
    text-decoration:none;
    color:#FFFFFF;
}
`;

const LogoDark = styled.img`
position:absolute;
left:20px;
bottom:60px;
width:90px;
`;

const Footer=styled.div`
display:flex;
justify-content:flex-end;
align-items:center;
`;

const IMG = styled.img`
width:1.2rem;
margin: 0 10px;

&:hover{
                    transform:scale(1.8);
                    filter: invert(58%) sepia(12%) saturate(99%) hue-rotate(212deg) brightness(89%) contrast(87%);
}
`


export default function ContactUS() {

                    const isUser = useSelector(state=>state.userReducer.isUser)
                    const user = useSelector(state=>state.userReducer.user)

                    const [message,setMessage]=useState({name:"",email:"",text:""});

                    const handleChange=(e)=> {
                                        setMessage({...message,[e.target.name]:e.target.value})
                    }
                    const dispatch=useDispatch()

                    return (
                    <div id = 'ContactUs'>
                                        { isUser && user.role === 1 ?
                                            <Contact>

                                                            <HeaderContact>
                                                                                <SecondaryTitle style ={{marginBottom:"0", borderBottom:"none"}} > Blue Peach Company </SecondaryTitle>
                                                            </HeaderContact>
                                                            
                                                            <Right >  2021 © Build and Desing By <a href='www.linkedin.com/in/khawla-guesmi-28442b189' target="_blank" >  Khawla Guesmi </a> </Right>

                                                            
                                        </Contact>
                                        : 
                                        <div>
                                        <Contact>
                                                            <HeaderContact>
                                                                                <SecondaryTitle> Contact Us </SecondaryTitle>
                                                                                <Icons>
                                                                                <a href='http://facebook.com'>
                                                                                <Icon src= {facebook} alt = 'facebook'/>
                                                                                </a>
                                                                                <a href='http://linkidin.com'>
                                                                                <Icon src= {linkidin} alt = 'linked In'/>
                                                                                </a>
                                                                                <a href='http://instagram.com'>
                                                                                <Icon src= {instagram} alt = 'instagram'/>
                                                                                </a>
                                                                                <a href='http://twitter.com'>
                                                                                <Icon src= {twitter} alt = 'tweeter'/>
                                                                                </a>
                                                                                </Icons>
                                                            </HeaderContact>
                                                            <Form>
                                                                                <FormRow type = "submit" >
                                                                                <input type='text' placeholder ='your name' name='name' onChange={handleChange}/>
                                                                                <input type='email' placeholder ='your Email' name='email' onChange={handleChange}/>
                                                                                </FormRow>
                                                                                <textarea name='text' placeholder='Your message' rows='2' onChange={handleChange}></textarea>
                                                                                <Button type = "submit" onClick={()=>{dispatch(addMessage(message)); alert("your message is recorded we will contact you later ☎📆📧")}}> Submit </Button>
                                                            </Form>
                                                            
                                                            <LogoDark src={logoDark} alt='logo dark mode'/>
                                                            <Right >  2021 © Build and Desing By <a href='www.linkedin.com/in/khawla-guesmi-28442b189' target="_blank" >  Khawla Guesmi </a> </Right>
                                                            
                                                            
                                        </Contact>
                                                            <Footer >
                                                            <a href='mailto:blue.peach@gmail.tn' > <IMG src = {email} alt= 'email'/> </a>
                                                            <a href='https://github.com/khawla-creator'>  <IMG src = {github} alt= 'github'/> </a>
                                                            <a href='tel:+21600000000'>  <IMG src = {phone} alt= 'phone'/></a>
                                                            </Footer>
                                                            <ScrolTop/>
                                        </div>
                                        }
                                        </div>
                    )
}
