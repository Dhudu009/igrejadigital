import React from 'react';
import Contact from '../component/Contact'
import Sobre from '../component/Sobre'
import Oferta from '../component/Oferta'
import Intro from '../component/Intro'

// import { Container } from './styles';

function HomePage() {
  return <React.Fragment>
    <Intro />
    <Sobre />
    <Oferta />
    <Contact />
  </React.Fragment>;
}

export default HomePage;