import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

import top_left_image from '@/assets/projectsCard/top_left.svg'
import bottm_left_image from '@/assets/projectsCard/bottom_left.svg'
import right_hackslash_image from '@/assets/projectsCard/right_hackslash.svg'


export default function Card(props){
  return (
    <>
    <CardBody>
      <CardTitle>
        <CardTText>{props.name}</CardTText>
        <CardDate>{props.date[1] + " " + props.date[0] + " " + props.date[2]}</CardDate></CardTitle>
      <CardAuthor>{"By " + props.team + " Team"}</CardAuthor>
      <CardDescription>
       {props.description || `An awesome project created by ${props.team} team under Hackslash`}
      </CardDescription>
      <CardButton><Link href={props.url}>Read More</Link></CardButton>

      {/*  */}
      <CardTopLeft> <Image src={top_left_image}/> </CardTopLeft>
      <CardBottomLeft> <Image src={bottm_left_image}/> </CardBottomLeft>
      
      <CardRight> <Image src={right_hackslash_image}/> </CardRight>
    </CardBody>

    </>
  )
}

//For Card
var CardBody = styled.div`
position: relative;
width:85%;
min-height: 50vh;
padding: 50px 10px;
padding-left: 10%;
margin: 30px auto;
background-color: #2D2828;
font-size: 1.4rem;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.3);
transition: 0.3s;
@media (max-width: 768px){
  font-size: 1rem;
  }
`

var CardTitle = styled.div`
margin:auto;
text-align:center;
display: flex;
justify-content: space-around;
overflow-wrap: break-word;
`
var CardTText = styled.p`
color:#FFFFFF;
max-width: 50%;
`
var CardDate = styled.p`
color: #C2D4F8;
max-width: 50%;
@media (max-width: 768px){
  font-size: 0.8rem;
  }
`

var CardAuthor = styled.p`
background: linear-gradient(90deg, #49DDAC 5.88%, #5DB5DC 89.82%);
background-clip: text;
-webkit-text-fill-color: transparent;
`
var CardDescription = styled.p`
  font-size: 0.8rem;
  color: #FFFFFF;
  padding-right:35%;
`
var CardButton = styled.button`
   font-size:1.2rem;
   padding:8px;
   margin-top: 3rem;
   margin-left: 2.5rem;
   color: white;
   background: linear-gradient(90deg, #49DDAC 5.88%, #5DB5DC 89.82%);
   border-radius:25px;
`

var CardTopLeft = styled.div`
  position: absolute;
  width: 30%;
  top: -0.5em;
  left: -0.5em;
  `

var CardBottomLeft = styled.div`
  width: 30%;
  position: absolute;
  bottom: -1.5em;
  left: -0.5em;
  `

var CardRight = styled.div`
  width: 40%;
  position: absolute;
  margin: auto;
  right: -10%;
  top: 50%; 
  transform: translateY(-50%);
`