import React, {useState} from 'react'
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
// background: red;
height: 75%;
flex-direction: column;
justify-content: space-around;
align-items: center;
gap: 20px;
width: 90%;
margin: 60px auto 0;

@media(min-width: 768px){
  flex-direction: row;
   height: 70%;
}
`
const Background = styled.div`
background: hsl(0, 0%, 92%);
height: 90vh;
margin: 180px auto 0;
padding-bottom: 60px;

@media(min-width: 768px){
  height: 50vh;
}
@media(min-width: 1200px){
  height: 90vh;
  padding-bottom: 40px;
}
`


function App() {
const [links, setNewLink] = useState([])

function addLinks(originalLink, shortLink){
setNewLink(prevLinks =>{
  return[...prevLinks, { oldLink: originalLink, shortenedLink: shortLink, id: Math.random().toString() }]
})
}

  return (
    <div>
      <NavBar />
      <HeroSection />
      <Background>
        <GetLinks onNewLinks={addLinks} />
        <DisplayLinks onAddNewLink={links} />
        <Section />
        <CardElement>{CardElements}</CardElement>
      </Background>
      <Article />
      <Footer />
    </div>
  );
}

export default App;
