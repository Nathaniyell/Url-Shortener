import React from 'react'
import styled from 'styled-components'

const Body = styled.div`
width: 90%;
margin: 30px auto;
text-align: center;
h1{
    font-size: 28px;
    color: hsl(257, 27%, 26%);
    line-height: 2;
}
p{
    color: hsl(257, 7%, 63%);
    line-height: 1.5;
}
`
const Section = () => {
  return (
    <Body>
        <h1>Advanced Statistics</h1>
        <p>Track how your links are performing across the web with our 
  advanced statistics dashboard.</p>
    </Body>
  )
}

export default Section