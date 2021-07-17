import React from 'react';
import background from '../assets/images/backgrounds/bg-1.jpg'
import caixa from '../assets/images/bancos/1caixa.png'
import bb from '../assets/images/bancos/1bb.png'
import pix from '../assets/images/bancos/1pix.png'
// import { Container } from './styles';

function Oferta() {
  return <div>
      <section id="ofertas" className="call-to-action section-xl bg-1 overly" style={{ backgroundImage: `url(${background})` }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="text-center title wow fadeIn title-igreja" data-wow-duration="1500ms">
                            <h2>Dízimos E<span className="color"> Ofertas</span> </h2>
                            <div className="border"></div>
                        </div>
                        
                        <div className="col-xs-12 text-center wow fadeIn">
                            <h2>Permaneça fiel nos dízimos e ofertas!<br />
                                Eles podem ser feitos por PIX, transferência ou depósito:</h2>
                            <h2>CNPJ: 02.341.030/0001-97</h2><br /><br />
                        </div>
                    </div>
                    <div className="row d-flex justify-content-around">

                        {/* single blog post */}
                        <div className="col-6 col-sm-6 col-md-4 order-0 order-md-0 wow fadeInUp text-center"
                            data-wow-duration="500ms" data-wow-delay="400ms">
                            <div className="post">
                                <div className="figure p-1">
                                    <img src={caixa} alt="CAIXA" className="img-fluid h-50 w-50" />
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4 order-2 order-md-0 wow fadeInUp text-center"
                            data-wow-duration="500ms" data-wow-delay="400ms">
                            <div className="post">
                                <div className="figure p-1">
                                    <img src={bb} alt="BANCO DO BRASIL" className="img-fluid h-50 w-50" />
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4 order-4 order-md-0 wow fadeInUp  text-center"
                            data-wow-duration="500ms" data-wow-delay="400ms">
                            <div className="post">
                                <div className="figure p-3">
                                    <img src={pix} alt="PIX" className="img-fluid h-50 w-50" />
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4 order-1 order-md-0 wow fadeInUp" data-wow-duration="500ms"
                            data-wow-delay="400ms">
                            <div className="text-center p-4">
                                <h2>C/C 537-2<br />
                                    Cód 003 <br />
                                    Ag.3257c
                                </h2>
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4 order-3 order-md-0 wow fadeInUp" data-wow-duration="500ms"
                            data-wow-delay="400ms">
                            <div className="text-center p-4">
                                <h2>C/C 7695-3<br />Ag.3206-9</h2>
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4 order-5 order-md-0 wow fadeInUp" data-wow-duration="500ms"
                            data-wow-delay="400ms">
                            <div className="text-center p-4">
                                <h2>Chave: Celular<br />
                                    62 99333-8461</h2>
                            </div>
                        </div>
                    </div> {/* End row */}
                </div> {/* End container */}
            </section> {/* End section */}
  </div>;
}

export default Oferta;