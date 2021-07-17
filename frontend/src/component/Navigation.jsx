import React from 'react';
import LogoMain from '../assets/images/adjaiara-logo2.png'
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function NavigationBar() {
    return <React.Fragment>
        <nav id="navigation" className="navbar navbar-expand-lg navbar-dark bg-dark navigation shadow " >
            <div className="container-fluid justify-content-around">

                <Link className="navbar-header logo-title" to="">
                    <img src={LogoMain} width="40" height="40" className="d-inline-block align-top " alt="" />
                    <span>AD <b>JAIARA</b></span>
                </Link>
                <button className="navbar-toggler p-3" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="/home#intro">Inicio<span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/home#igreja">A igreja</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/home#agenda">Agenda</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/home#ofertas">Ofertas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/home#contato">Contato</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/home#mapa">Localização</a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    </React.Fragment>;
}

export default NavigationBar;