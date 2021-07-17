import React from 'react';
import LogoMain from '../assets/images/adjaiara-logo2.png'
import Video from './BackgroundVideo'
import {Link} from 'react-router-dom'
// import { Container } from './styles';

function Head() {
    return <div className="hero-area overlay">
        <Video />
        <div className="block">
            <img src={LogoMain} width="150" height="150" alt="AD JAIARA" /> 
            <h1 > AD <b>JAIARA </b></h1>
            <p>Assembleia de Deus Vila Jaiara<br />
                Ministério de Anápolis</p>
            <Link data-scroll to="home" className="btn btn-transparent shadow-lg"> ENTRAR</Link>
        </div>

    </div>;
}

export default Head;