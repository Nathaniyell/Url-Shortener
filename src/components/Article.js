import React from 'react'
import Button from './Button'
import bgBoost from '../images/bg-boost-mobile.svg'
import bgBoostD from '../images/bg-boost-desktop.svg'
import styled from 'styled-components'

const ArticleStyles = styled.div`
width: 100%;
background-image: url(${bgBoost});
background-color: hsl(260, 26%, 20%);
background-size: cover;
background-repeat: no-repeat;
background-position: center;
background-blend-mode: luminosity;
text-align: center;
padding: 15px;
height: 200px;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;

h1{
  font-size: 28px;
  color: #fff;
  line-height: 2;
}
@media(min-width:768px){
  background-image: url(${bgBoostD}); 
  height: 150px;
}
@media(min-width:922px){
    height: 130px;
}


`
const Article = () => {
  return (
    <ArticleStyles>
        <h1>Boost your links today</h1>
        <Button>Get Started</Button>
    </ArticleStyles>
  )
}

export default Article