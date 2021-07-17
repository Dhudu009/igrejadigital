import React from 'react';
import Image from '../assets/images/about/about-business-man.jpg'
// import { Container } from './styles';

function Sobre() {
  return <div>
    <section className="parallax-section section-bg overly" id="igreja">
      <div className="container">
        <div className="row">
          {/* section title */}
          <div className="col-xs-12 text-center title wow fadeIn title-igreja" data-wow-duration="1500ms">
            <h2>Sobre <span className="color">A Igreja</span> </h2>
            <div className="border"></div>
          </div>
          {/* /section title */}
        </div> {/* End row */}
      </div> {/* End container */}

      <div className="section about-2 p-0 bg-dark shadow">
        <div className="container-fluid  wow fadeIn">
          <div className="row">
            <div className="col-md-6 p-0 about-image">
              <img className="img-fluid" src={Image} alt="" />
            </div>
            <div className="col-md-6">
              <div className="content-block">
                <h2>A Missão de nossa Igreja é:</h2>
                <div className="row">
                  <div className="col-md-12">
                    <div className="media">
                      <div className="pull-left">
                        <i className=" tf-ion-android-star"></i>
                      </div>
                      <div className="media-body">
                        <h4 className="media-heading">Tornar conhecido o nome de Jesus</h4>
                        <p>“Portanto ide, fazei discípulos de todas as nações, batizando-os em nome do
                          Pai, e do Filho, e do Espírito Santo;” <b>Mateus 28:19</b></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="media">
                      <div className="pull-left">
                        <i className=" tf-ion-android-star"></i>
                      </div>
                      <div className="media-body">
                        <h4 className="media-heading">Glorificar a Deus</h4>
                        <p>“Porque dele e por ele, e para ele, são todas as coisas; glória, pois, a ele
                          eternamente. Amém.” <b>Romanos 11:36</b></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="media">
                      <div className="pull-left">
                        <i className=" tf-ion-android-star"></i>
                      </div>
                      <div className="media-body">
                        <h4 className="media-heading">Desenvolver uma vida cristã Frutífera e boa
                          Convivência</h4>
                        <p>“Nisto é glorificado meu Pai, que deis muito fruto; e assim sereis meus
                          discípulos.” <b>João 15:8</b></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> {/* End section */}
  </div>;
}

export default Sobre;