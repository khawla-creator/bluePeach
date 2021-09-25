import React from 'react';
import styled from 'styled-components';
import BANNIERE from '../assets/assetsHome/banniere.svg';

const BanniereFix=styled.img`
background-size : 100% 100%;
height:auto;
max-width:100%;
`;

function Banniere() {
                    return (
                                        <div>
                                                            <BanniereFix src={BANNIERE} alt='banniere'/>
                                        </div>
                    )
}

export default Banniere
