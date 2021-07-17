import React from 'react';
// import { Container } from './styles';

function Contact() {
    return <div>
        <section id="contato" className="contact-us section-bg shadow-lg">
            <div className="container">
                <div className="row">

                    {/* section title */}
                    <div className="title text-center wow fadeIn" data-wow-duration="500ms">
                        <h2>Entre Em <span className="color">Contato</span></h2>
                        <div className="border"></div>
                    </div>
                    {/* /section title */}

                    {/* Contact Details */}
                    <div className="contact-info col-md-6 wow fadeInUp" data-wow-duration="500ms">
                        <h3>Contato</h3>
                        <div className="contact-details">

                            <div className="con-info clearfix">
                                <i className="tf-ion-ios-telephone-outline"></i>
                                <span> <b> Telefone/WhatsApp:</b> <br />+55 62 3099-1259 / 62 99333-8461</span>
                            </div>

                            <div className="con-info clearfix">
                                <i className="tf-map-pin"></i>
                                <span><b> Endereço: </b> <br />
                                    Av. 24 de Agosto<br />
                                    Qd. 24 Lt. 12<br />
                                    Vila Jaiara<br />75060-470<br />
                                    Anápolis GO</span>
                            </div>

                            <div className="con-info clearfix">
                                <i className="tf-map-pin"></i>
                                <span><b> E-mail: </b> <br /></span>
                                ..................
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>;
}

export default Contact