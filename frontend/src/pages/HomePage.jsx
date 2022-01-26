import React, { Component } from 'react';
import Contact from '../component/Contact'
import Oferta from '../component/Oferta'
import Intro from '../component/Intro'
import Agenda from '../component/Agenda'
// import { Container } from './styles';



export default class HomePage extends Component {



  
  render() {
    return <React.Fragment>
      <Intro />
      <Agenda />
      <Oferta />
      <Contact />
    </React.Fragment>;
  }
}

