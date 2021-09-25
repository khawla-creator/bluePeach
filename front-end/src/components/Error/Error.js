import React ,{useState} from 'react'
import {Alert} from 'react-bootstrap'
import styled from 'styled-components'
import warning from './warning.svg'

const DIV = styled.div`
position:fixed;
z-index:3;
top:20px;
left:33%;
button {
                    background-color: #edf7ed;
                    color:#01436b;
                    font-weight: bold;
                    font-size:1.2em;
                    border:2px solid #01436b;
                    border-radius: 5px;
                    padding:5px 20px;
                    margin-top:10px;
&:hover {
                    background-color: #ffff;
}
                    
}
img {
                    width: 30px;
                    padding-right:20px;
                    border-right:1px solid #01436b;
                    margin-right:10px;
}
`
const Warning = styled.div`
display:flex;


`


function Error({error}) {
                    const [show,setShow]=useState(true)
                    return (
                    <DIV >
                    <Alert show={show}  classeName="alert">
                    <Warning>
                    <img  src={warning} alt = 'warring' />
                    <span>
                    This is an error alert — <span style = {{color:"#ea2c42"}}>{error.msg} ! </span>
                    </span> 
                    </Warning> 
                    
                    <div style = {{ display:"flex", justifyContent:"flex-end"}}>
                    <button onClick={() => setShow(false)} variant="outline">
                    Close
                    </button>    
                    </div>
                    </Alert>
                    </DIV>
                                        
                    )
}

export default Error;