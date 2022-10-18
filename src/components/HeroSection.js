import React from 'react'
import Button from './Button'
import hero from '../images/illustration-working.svg'
import styled from 'styled-components'

const Hero = styled.div`
width: 90%;
height: 45vh;
padding: 10px 15px;
margin: 0 auto;
text-align: center;
display: flex;
flex-direction: column;
align-items:center;
gap: 10px;
justify-content: space-around;
position: relative;
top: 60px;

.hero-div{
    margin-block: 30px;

}
img{
    width: 70%;
}

h1{
    color: hsl(257, 27%, 26%);
    font-size: 2.5rem;
}
p{
    color: hsl(257, 7%, 63%);
    line-height: 2;
    margin-block: 15px;
}
@media(min-width: 562px){
    top: 100px;
flex-direction: row-reverse;
.hero-div{
    text-align: left;

}
img{
    width: 90%;
}
}
@media(min-width: 768px){
    
    

}

 @media(min-width: 922px){
    height: 50vh;
   
h1{
        font-size: 2.8rem;
    }
 img{
    width: 70%;
 } 
}


`


const HeroSection = () => {

    return (
        <Hero>
            <div>
                <img src={hero} alt='hero-section' />
            </div>
            <div className='hero-div'>
                <h1>More than just shorter links</h1>
                <p>Build yout brands recognition and get detailed insights on how your links are performing.</p>
                <Button>Get Started</Button>
            </div>

        </Hero>
    )
}

export default HeroSection