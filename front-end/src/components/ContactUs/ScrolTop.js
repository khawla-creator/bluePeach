import React from 'react';
import styled  from 'styled-components'
import scrolUp from '../assets/assetesContactUS/scrollUp.svg'

const Up = styled.a`
position:fixed;
right:2rem;
bottom:4.5rem;
img{
                    width:28px;
                    heigth:30px;
                    background-color:white;
                    padding:3px;
                    border-radius:50%;

                    &:hover{
                    transform:scale(1.1);
                    filter: invert(92%) sepia(53%) saturate(27%) hue-rotate(238deg) brightness(111%) contrast(100%);
                    }
}
`;

function ScrolTop() {
                    return (
                                        <Up href='#Home'>
                                                            <img src= {scrolUp} alt='scrol Up'/>
                                        </Up>
                    )
}

export default ScrolTop;
