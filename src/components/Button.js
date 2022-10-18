import styled from "styled-components";

const Button = styled.button`
background-color: var(--Cyan);
width: 60%;
text-align: center;
padding: 10px;
border-radius: 20px;
border: none;
color: #fff;
font-size: 1rem;
font-weight: 600;
cursor: pointer;
transition: all .5s ease-in-out;
&:hover{
    opacity: 0.8;
}

@media(min-width: 768px){
    width: auto;
    padding: 10px 35px;
}
`

export default Button;