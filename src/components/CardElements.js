import React from 'react'
import CardData from './CardData'
import styled from 'styled-components'

const Card = styled.div`
    background: #fff;
    box-shadow: 2px 8px 8px rgba(0,0,0, 0.3);
    width: 100%;
    border-radius: 10px;
    height: 270px;
    padding: 15px;
    text-align: center;   
    margin: 0 auto 40px;
    @media(min-width: 562px){
        height: 200px;
    }
    @media(min-width: 768px){
       height: 350px;

    }
    @media(min-width: 922px){
       height: 90%;
       display: grid;
       place-items: center;
    }


    & .img-div{
        margin: 0 auto;
        background:  hsl(255, 11%, 22%);
        width: 90px;
        height: 90px;
        display:grid;
        place-items: center;
        border-radius: 50%;
        align-self: center;
        position: relative;
        top: -60px;
    }
    h1{
        font-size: 28px;
        color: hsl(257, 27%, 26%);
        margin: -30px 0 20px;
    }
    p{
        color: hsl(257, 7%, 63%);
        line-height: 1.5;
    }
   `

const Cards = ({icon, title, text}) => {
  return (
    <Card>
        <div className='img-div'>
            <img src={icon} alt='icon' />
        </div>
        <h1>{title}</h1>
        <p>{text}</p>
    </Card>
  )
}
const CardElements = CardData.map(card=>{
    return(
      
         <Cards 
        key={card.img}
        icon={card.img}
        title={card.header}
        text={card.body}
        />
       
    )
})

export default CardElements