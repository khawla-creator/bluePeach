import React from 'react';
import styled from 'styled-components';
import Banniere from './../Home/Banniere';
import {Title} from './../Categories/Men/Men'
import socks from '../assets/assetsPathologies/socks.jpg'
import {Link}from 'react-router-dom'




const Article = styled.div`
font-family: 'Open Sans', sans-serif;
margin-left:5%;

`


const CARD = styled.div `
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:300px;
border-bottom:1px solid ;
img {
                    width:280px;   
}
`

const DivCrad = styled.div `
display:flex;
justify-content:space-around;

`

const H = styled.h3 `
color :  #020236; 
`

const P = styled.p `
font-size: 1rem;
line-height: 200%;
text-align: justify;
width: 90%;
padding : 5px 0 ; 
`

const UL = styled.ul`
font-size: 1rem;
line-height: 200%;
text-align: justify;
width: 80%; 
margin-left:5%;
`
const DIVheader= styled.div `
display:flex;
justify-content:center;
align-items:center;
background-color:rgb(211, 232, 225,0.7);
margin-top:60px;
margin-bottom:60px;
margin-right:auto;
margin-left:auto;

padding:50px;
width:700px;

h2{
                    background-color:rgba(255, 255,255,0.5 );
                    padding:40px 40px ;
                    text-align:center;
                    align-items:center;
}
`






function Pathologies(){
                    return (
                                        <div>
                                        <Banniere/>
                                        <Article>
                                                            <Title style = {{padding: '40px 0 20px 0'}}>FOOT PATHOLOGIES</Title>
                                                            <H> Table of contents </H>
                                                            <UL>
                                                                                <li> Diabetic neuropathy </li>
                                                                                <li> What are the common foot problems associated with diabetes ? </li>
                                                                                <li> Grades of foot risk </li>
                                                                                <li> Diabetic neuropathy </li>
                                                                                <li> Signs that should alert you </li>
                                                                                <li> Complications of diabetic feet </li>
                                                            </UL>
                                                            <P>If you have diabetes, prolonged high blood glucose levels can lead to serious complications. 
                                                            At the first sign of diabetes, it is very important to take care of your feet and this can be done by
                                                            wearing diabetic shoes or orthopedic shoes.</P>
                                                            <DIVheader>
                                                            <h2>DIABETIC FOOT: PREVENTION ABOVE ALL</h2>
                                                            </DIVheader>
                                                            <H> 1) DIABETIC NEUROPATHY</H>
                                                            <P>Diabetes can cause two problems: </P>
                                                            <UL>
                                                                                <li>Diabetic neuropathy. Uncontrolled diabetes can damage your nerves, and you may not feel heat, cold or pain, making an injury worse. Muscles may also not work properly because of this neurological problem, and this could cause your foot to be misaligned and create too much pressure on part of it.</li>
                                                                                <li> Peripheral vascular disease or diabetic arterial disease. Diabetes also affects blood flow. Without good circulation, it takes longer for a wound to heal. If you have an infection that does not heal because of poor circulation, you may develop ulcers or gangrene (tissue death due to lack of blood).</li>
                                                            </UL>
                                                            <P> A diabetologist, following a thorough clinical examination, will be able to give an accurate diagnosis of the neurological deficits you may be suffering from as a result of this condition.</P>
                                                            <H> 2) WHAT ARE THE COMMON FOOT PROBLEMS ASSOCIATED WITH DIABETES ?</H>
                                                            <P>Anyone can have problems like those listed below. However, for the diabetic patient, and without prevention, these common problems can lead to serious complications and even to lower limb amputation.</P>
                                                            <UL>
                                                                                <li> Athlete's foot. This is a fungus that causes itching, redness and cracking. Germs can enter through cracks in the epidermis and cause an infection.</li>
                                                                                <li>Onychomycosis. Fungus-infected nails can become discolored (yellowish brown or opaque), thick and brittle, and separate from the rest of the nail. In some cases, your nail may crumble. The dark, damp, warm environment of a shoe can encourage the growth of a fungus. This type of fungus is difficult to treat, and we advise you to consult a health professional for the right treatment.</li>
                                                                                <li>Calluses. Hyperkeratosis is caused by uneven weight distribution. It is often necessary to have this callus removed by a pedicurist.</li>
                                                                                <li>Corns. A horn is a build-up of hard skin near a bony area of a toe or between the toes. As with hyperkeratosis, we advise you to consult a pedicurist.</li>
                                                                                <li>Blisters. Blisters can form when your shoes rub the same spot on your foot if they don't fit properly or if you wear them without socks. Find out which diabetic socks are best.</li>
                                                                                <li>Hallux valgus. This occurs when your big toe becomes deformed. A bunion shoe can relieve the pain. There are also silicone bunion pads that will protect this deformity. A pair of custom-made orthopedic insoles may also be suitable.</li>
                                                                                <li>Dry skin. It can crack, which can allow germs to penetrate. Use moisturizing soaps and lotions. Do not hesitate to ask your diabetologist for advice.</li>
                                                                                <li>Diabetic ulcers. An ulcer is a deep sore or wound that can become infected. Foot ulcers can be caused by minor scrapes or cuts that heal slowly. It is important to treat them as soon as you notice them, which is why you should see a healthcare professional immediately. Up to 10% of diabetic patients will develop foot ulcers.</li>
                                                                                <li>Hammertoes. A hammertoe is a toe that is bent due to a weakened muscle. Hammer toes can cause walking problems and can lead to blisters, calluses and sores. Wearing the right footwear can reduce one of the risk factors for developing a sore.</li>
                                                                                <li>Ingrown toenails. These occur when the edges of the nail grow into the skin. Poorly cut nails are a cause of ingrown toenails. Keep your toenails properly trimmed to avoid this complication. If you have a persistent problem or if you have a nail infection, you may need the care of a pedicurist on the advice of your doctor.</li>
                                                                                <li>Plantar warts. These look like calluses on the sole of the foot or on the heel. They may appear to have small pinholes or tiny black dots in the center. Warts are usually painful and can grow singly or in clusters. If you are not sure whether you have a plantar wart or a callus, let your doctor decide.</li>
                                                            </UL>
                                                            <H> 3) GRADES OF FOOT RISK</H>
                                                            <P>Diabetic foot lesions are classified into 4 grades:</P>
                                                            <UL>
                                                                                <li> Grade 0: No sensory neuropathy</li>
                                                                                <li>Grade 1: Isolated sensory neuropathy (mild loss of sensation)</li>
                                                                                <li>Grade 2: Sensory neuropathy associated with lower limb arteriopathy and/or foot deformity (loss of sensation and blood flow problems)</li>
                                                                                <li>Grade 3: History of foot ulcers (wounds) and/or lower limb amputations</li>
                                                            </UL>
                                                            <P>This classification will determine whether your health insurance will pay for your visits to a chiropodist/podologist.</P>
                                                            <H> 4) THAT SHOULD ALERT YOU</H>
                                                            <P>If you are diabetic, contact a specialist as soon as any of these problems appear:</P>
                                                            <UL>
                                                                                <li>Change in skin color</li>
                                                                                <li>Swelling of the foot or ankle</li>
                                                                                <li>Pain in the legs</li>
                                                                                <li>Open wounds or sores on the feet that are slow to heal or leak</li>
                                                                                <li>Ingrown or fungus-infected nails</li>
                                                                                <li>Corns or calluses</li>
                                                                                <li>Dry cracks, especially around the heel</li>
                                                                                <li>Unusual foot odor or foot odor that doesn't go away</li>
                                                            </UL>
                                                            <H> 5) COMPLICATIONS OF DIABETIC FEET</H>
                                                            <UL>
                                                                                <li>Skin and bone infections. A small cut or injury can lead to infections. Nerve and blood vessel damage, as well as immune system problems, make them more likely.</li>
                                                                                <li>Abscesses. Sometimes infections eat away at bone or tissue and create a pocket of pus called an abscess.</li>
                                                                                <li>Gangrene. Diabetes affects the blood vessels that supply your fingers and toes. When blood flow is cut off, the tissue can die.</li>
                                                                                <li>Deformities. Nerve damage can weaken muscles and lead to problems such as hammertoes, claw toes or prominent metatarsal heads (ends of the bones under the toes).</li>
                                                                                <li>Charcot foot. Diabetes can weaken the bones in your foot to the point that they break. Nerve damage can reduce feeling and prevent you from noticing it. If you keep walking on broken bones, your foot will change shape.</li>
                                                                                <li>Amputations. Problems with blood flow and nerves mean that diabetic patients are more likely to injure themselves and not realize it until the infection sets in. When an infection cannot be healed, creates an abscess, or if poor circulation leads to gangrene, amputation is often necessary.</li>
                                                            </UL>
                                                            <Link to = '/Categories/Insoles' ><P> Pedorthist and diabetic foot specialist </P></Link>
                                                            <DivCrad>
                                                            <CARD>
                                                                                <img src = {socks} alt ='socks'/>
                                                                                <h4>SOCKS FOR DIABETIC FEET</h4>
                                                                                <p> The choice of socks for diabetic feet is an important element in the prevention of diabetes-related risks.</p>
                                                            </CARD>
                                                            <CARD>
                                                                                <img src = {socks} alt ='socks'/>
                                                                                <h4>SOCKS FOR DIABETIC FEET</h4>
                                                                                <p> The choice of socks for diabetic feet is an important element in the prevention of diabetes-related risks.</p>
                                                            </CARD>
                                                            <CARD>
                                                                                <img src = {socks} alt ='socks'/>
                                                                                <h4>SOCKS FOR DIABETIC FEET</h4>
                                                                                <p> The choice of socks for diabetic feet is an important element in the prevention of diabetes-related risks.</p>
                                                            </CARD>
                                                            </DivCrad>

                                        
                                        
                                        
                                        </Article>
                                        </div>
                    )
}
export default Pathologies;   