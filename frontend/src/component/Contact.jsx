import React from 'react';
import MapContainer from './MapContainer';
// import { Container } from './styles';

function Contact() {
    return <div >
        <section id="contato" className="section-sm shadow-lg bg-gr" >

            {/* section title */}
            <div className="title text-center wow fadeIn" data-wow-duration="500ms">
                <h2>Entre Em <span className="color">Contato</span></h2>
                <div className="border"></div>
            </div>
            {/* /section title */}
            <MapContainer />
            {/* Contact Details */}
            <div className="container contact">
                <div className="row">
                    <div className="contact-info col-9 col-sm-7 col-md-6 col-lg-4 col-xxl-3 wow fadeInUp" data-wow-duration="500ms">
                        <h3>Contato</h3>
                        <div className="contact-details">

                            <div className="con-info clearfix">
                                <i className="tf-ion-ios-telephone"></i>
                                <span> <b> Telefone/WhatsApp:</b> <br />+55 62 3099-1259 / 62 99333-8461</span>
                            </div>

                            <div className="con-info clearfix">
                                <i className="tf-ion-android-pin" ></i>
                                <span><b> Endereço: </b> <br />
                                    Av. 24 de Agosto<br />
                                    Qd. 24 Lt. 12<br />
                                    Vila Jaiara<br />75060-470<br />
                                    Anápolis GO</span>
                            </div>

                            <div className="con-info clearfix">
                                <i className="tf-ion-ios-email"></i>
                                <span><b> E-mail: </b> <br /></span>
                                ..................
                            </div>
                        </div>
                    </div>

                    <div className="col offset-sm-3 offset-md-4 offset-lg-6 offset-xxl-7" >
                        {/* Footer Social Links */}
                        <div className="social-icon">
                            <ul className="list-inline">
                                <li><a href="https://www.facebook.com/adjaiara/" target="_blank" rel="noreferrer"><i
                                    className="tf-ion-social-facebook"></i></a></li>
                                <li><a href="https://www.instagram.com/adjaiara/" target="_blank" rel="noreferrer"><i
                                    className="tf-ion-social-instagram"></i></a></li>
                                <li><a href="https://www.youtube.com/channel/UCb6GR-irIyMpSfsdrhPC7CQ" target="_blank " rel="noreferrer"><i
                                    className="tf-ion-social-youtube"></i></a></li>
                            </ul>
                        </div>
                        {/*/. End Footer Social Links */}
                    </div>
                </div>
            </div>
        </section>
    </div>;
}

export default Contact