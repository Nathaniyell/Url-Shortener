import React, {useState, useEffect} from 'react'
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import GetLinks from './components/GetLinks';
import CardElements from './components/CardElements';
import Section from './components/Section';
import Article from './components/Article';
import Footer from './components/Footer';
import DisplayLinks from './components/DisplayLinks';
import styled from 'styled-components';

const CardElement = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
// background: red;
height: 100%;
gap: 20px;
width: 90%;
margin: 60px auto 0;

@media(min-width: 768px){
  flex-direction: row;
   height: 70%;
}
@media(min-width: 922px){
  height: 90%;
  }
`
const Background = styled.div`
background: hsl(0, 0%, 92%);
display: grid;
grid-template-columns: 1fr;
align-content: space-between;
margin: 180px auto 0;
padding-bottom: 60px;

`


function App() {
const [links, setNewLink] = useState(
  ()=>   JSON.parse(localStorage.getItem("link")) || []) //Lazy state initialization


function addLinks(originalLink, shortLink){
setNewLink(prevLinks =>{
  return[{ 
    oldLink: originalLink, 
    shortenedLink: shortLink, 
    copied: false,
    id: Math.random().toString() 
  }, 
  ...prevLinks]
})
}
useEffect(()=>{
  localStorage.setItem("link", JSON.stringify(links))
}, [links])


  return (
    <div>
      <NavBar />
      <HeroSection />
      <Background>
        <GetLinks onNewLinks={addLinks} />
        <DisplayLinks onAddNewLink={links} key={links.id} />
        <Section />
        <CardElement>{CardElements}</CardElement>
      </Background>
      <Article />
      <Footer />
    </div>
  );
}

export default App;
