import React from 'react';
import LogoMain from '../assets/images/adjaiara-logo2.png'
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function NavigationBar() {
    return <React.Fragment>

        <nav id="navigation" className=" navbar-expand-lg navbar-dark bg-dark navigation shadow section-xs" >
            <div className="container-fluid px-5">
                <div className="row justify-content-between">

                    <Link className="navbar-header logo-title col-7 col-sm-5 col-md-4">
                        <div>
                            <img src={LogoMain} alt="LogoADJaiara" width="40" height="40" className="d-inline-block align-top"/>AD <b>JAIARA</b>
                        </div>
                    </Link>

                    <button className="navbar-toggler col-2 align-self-center" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse col-2" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><a className="nav-link" href="/home#intro">Home</a></li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Culto Online</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link className="dropdown-item" to="/home/live">Ao Vivo</Link></li>
                                    <li><a className="dropdown-item" target={'_blank'} rel="noreferrer" href="https://www.youtube.com/channel/UCb6GR-irIyMpSfsdrhPC7CQ">Transmissões Anteriores</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/home/igreja">A igreja</Link></li>
                            <li className="nav-item">
                                <a className="nav-link" href="/home#agenda">Agenda</a></li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/home/ministerios">Ministérios</Link></li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/home/oracao">Oração</Link></li>
                            <li className="nav-item">
                                <a className="nav-link" href="/home#ofertas">Ofertas</a></li>
                            <li className="nav-item">
                                <a className="nav-link" href="/home#contato">Contato</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </nav>

    </React.Fragment>;
}

export default NavigationBar;