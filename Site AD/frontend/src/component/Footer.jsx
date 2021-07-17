import React from 'react';
import LogoMain from '../assets/images/adjaiara-logo2.png'

export default function Footer() {
    return (
        <footer id="footer" className="bg-one">
            <div className="container">
                <div className="row wow fadeInUp" data-wow-duration="500ms">
                    <div className="col-lg-12">

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

                        {/* copyright */}
                        <div className="copyright text-center">
                            <a href="index.html">
                                <img src={LogoMain} alt="AD Jaiara" />
                            </a>
                            <span className="logo-title">AD <b>JAIARA</b></span>
                            <br />

                            <p>
                                &copy;
                                <script>
                                    document.write(new Date().getFullYear())
                                </script>. Todos os direitos reservados.
                                <a href="http://www.adjaiara.org"> Assembleia de Deus Vila Jaiara</a>.
                            </p>
                        </div>
                        {/* /copyright */}

                    </div> {/* end col lg 12 */}
                </div> {/* end row */}
            </div> {/* end container */}
        </footer>
    )
}