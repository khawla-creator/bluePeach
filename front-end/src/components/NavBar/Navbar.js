import React from 'react';
import styled from 'styled-components';
import logoTop from '../assets/assetsHome/logoTop.svg';
import AddUser from '../assets/assetsHome/AddUser.svg';
import SingIn from '../assets/assetsHome/SingIn.svg';
import myorder from '../assets/assetsHome/myorder.svg';
import {Link, useHistory} from 'react-router-dom';
import { getArticles} from '../../redux/actions/articleActions';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/userActions';
import userLogout from '../assets/assetsHome/logout.svg'
import userProfile from '../assets/assetsHome/profile-user.svg'




const HeaderNav= styled.div`
display:flex;
justify-content: center;
flex-direction:column;
align-items:center;
position:relative;
a{
                    text-decoration:none;
}
`;

const Header= styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-end;
`;

const TopLogo = styled.img`
margin-top:17px;
width: 180px;
height: 33px;
`;

const HeaderLogo = styled.div`
display:flex;
justify-content:center;
width: 98vw;
height: 56px;
background: #05053D;
box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25),
inset 2px 19px 21px rgba(0, 0, 0, 0.25);
z-index:1;
`;

const HeaderIcons = styled.div `
display: flex;
justify-content: center;
width: 11rem;
height: 2.3rem;
background: #05053D;
border-radius: 0px 0px 20px 80px;
box-shadow: 4px 4px 4px  rgba(0, 0, 0, 0.25);
z-index:1;
`;


const HeaderContact= styled.div `
display: flex;
justify-content: center;
width: 12rem;
height: 2.3rem;
background:  #a3a1ad;
border-radius: 0px 0px 15px 80px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
inset 2px 19px 21px rgba(0, 0, 0, 0.25);
position:absolute;
right:130px;
bottom:123px;
z-index:0;
a{
text-decoration: none;
font-family: 'Heebo', sans-serif;
font-weight: bold;
font-size: 1.2em;
color: white;
padding-top:5px;
padding-right:15px;
}

`

const Icone= styled.img `
width:28px;
height:28px;
padding:0px 10px 0 14px;
cursor:pointer;
`;

const Nav = styled.div`
display : flex;
justify-content:space-between;
width: 700px; 
padding-top:60px;
padding-bottom:30px;

a {
text-decoration: none;
font-family: 'Heebo', sans-serif;
font-weight: bold;
font-size: 1.3em;
line-height: 102%;
color: #05053D;
padding-bottom:10px;

&:hover {
                    border-bottom:3px solid #05053D;
                    padding-bottom:0;
                    
                    
}
}
`;


function Navbar() {
                    const isUser = useSelector(state=>state.userReducer.isUser)
                    const user = useSelector(state=>state.userReducer.user)
                    const history = useHistory();
                    const dispatch = useDispatch()
                    return (
                                        <HeaderNav id ='Home'>
                                        <Header>
                                                            <HeaderLogo>
                                                            <TopLogo src ={logoTop} alt='top logo'/>
                                                            </HeaderLogo>
                                                            
                                                            <HeaderIcons>       
                                                            {
                                                                                isUser && user.role === 0 ? 
                                                                                <div>
                                                                                <Link to ='/Profile' > <Icone src = {userProfile} alt= 'profile' /></Link> 
                                                                                <Link to ='/' > <Icone src= {userLogout} alt = 'logout' onClick={()=>dispatch(logout())}/> </Link>
                                                                                <Link to = '/pannier'> <Icone src={myorder} alt = 'order'/> </Link>
                                                                                </div>
                                                                                :isUser && user.role === 1 ? 
                                                                                <div>
                                                                                <Icone src= {userLogout} alt = 'logout' onClick={()=>dispatch(logout()) && history.push('/')}/> 
                                                                                <Link to ='/adminDashboard'> <Icone src= {userProfile} alt = 'profile'/> </Link>
                                                                                </div>
                                                                                :
                                                                                <div>
                                                                                <Link to='/signup'> <Icone src={AddUser}   alt = 'new user'/> </Link>
                                                                                <Link to = '/signin'><Icone src={SingIn} alt = 'sign in '/> </Link>
                                                                                </div>
                                                            }                               
                                                                                
                                                            </HeaderIcons> 
                                                            
                                        </Header> 
                                                            {
                                                                                isUser && user.role === 1 ? null :
                                                                                <HeaderContact>
                                                                                <a href='#ContactUs'> Contact Us </a>
                                                                                </HeaderContact>}
                                        
                                                            
                                                            {
                                                                                isUser && user.role === 0?
                                                                                <Nav>
                                                                                <Link to='/'> Home </Link>
                                                                                <a href='/#AboutUs'> About Us </a>
                                                                                <a href='/#Services'> Services </a>
                                                                                <Link to='/Pathologies'> Pathologies </Link>
                                                                                
                                                                                <div className="dropdown">
                                                                                <button className="dropbtn">Categories</button>
                                                                                <div className = "dropdown-content">
                                                                                <Link to ='/Categories/Men'> <span onClick={()=>dispatch(getArticles())}> Men </span></Link>
                                                                                <Link to ='/Categories/Women'> <span onClick={()=>dispatch(getArticles())}> Women </span> </Link>
                                                                                <Link to ='/Categories/Insoles'> <span onClick={()=>dispatch(getArticles())}> Insoles </span> </Link>
                                                                                </div>
                                                                                </div> 
                                                                                </Nav>
                                                                                : !isUser ? 
                                                                                <Nav>
                                                                                <Link to='/'> Home </Link>
                                                                                <a href='/#AboutUs'> About Us </a>
                                                                                <a href='/#Services'> Services </a>
                                                                                <Link to='/Pathologies'> Pathologies </Link>
                                                                                
                                                                                <div className="dropdown">
                                                                                <button className="dropbtn">Categories</button>
                                                                                <div className = "dropdown-content">
                                                                                <Link to ='/Categories/Men'> <span onClick={()=>dispatch(getArticles())}> Men </span></Link>
                                                                                <Link to ='/Categories/Women'> <span onClick={()=>dispatch(getArticles())}> Women </span> </Link>
                                                                                <Link to ='/Categories/Insoles'> <span onClick={()=>dispatch(getArticles())}> Insoles </span> </Link>
                                                                                </div>
                                                                                </div> 
                                                                                </Nav> : null
                                                            }
                                        
                                        </HeaderNav>
                    )
}

export default Navbar

