import React from 'react'
import styled from 'styled-components'

const Footer = styled.div`
width: 180px;
height: 200px;
color: #fff;
text-align: center;
padding: 12px;
h1{
    font-size: 16px;
    margin-bottom: 20px;
}
ul{
    height: 130px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;

}
li{
    list-style: none;
    transition: all .5s ease-in-out;
    color: #fff;
    cursor: pointer;
    font-size: 0.9rem;
}

li:hover{
    color: hsl(180, 66%, 49%);
}
@media(min-width: 768px){
    width: 120px;
}
`


const FooterCards = ({ title, text1, text2, text3, text4 }) => {
    return (
        <Footer>
            <h1>{title}</h1>
            <ul>
                <li>{text1}</li>
                <li>{text2}</li>
                <li>{text3}</li>
                <li>{text4}</li>
            </ul>
        </Footer>
    )
}

export default FooterCards