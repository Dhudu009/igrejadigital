import React from 'react';

// import { Container } from './styles';

function Agenda() {
  return <div>
      <div id="agenda" className="row section-sm bg-gr shadow-lg justify-content-around d-flex wow fadeInUp">
                        {/* section title */}
                        <div className="col-12">
                            <div className="title text-center">
                                <h2 className="text-white">Programação <span className="color">Semanal</span></h2>
                                <div className="border"></div>
                            </div>
                        </div>
                        {/* /section title */}
                        <div className="col-6 col-md-3 px-5  order-0 order-md-0">
                            <div className="">
                                <h3 className="text-white">Segunda</h3>
                                <h5 className="media-heading"> -Tarde da Benção - <b>14:30</b>
                                </h5>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 px-5  order-2 order-md-0">
                            <div className="">
                                <h3 className="text-white">Quarta</h3>
                                <h5 className="media-heading"> -Consagração pelas Famílias - <b>8:00</b>
                                </h5>
                                <h5 className="media-heading"> -Discipulado - <b>20:00</b>
                                </h5>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 px-5  order-7 order-md-0">
                            <div className="">
                                <h3 className="text-white">Sexta</h3>
                                <h5 className="media-heading"> -Culto de Adolescentes - <b>20:00</b>
                                </h5>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 px-5  order-3 order-md-0">
                            <div className="">
                                <h3 className="text-white">Domingo</h3>
                                <h5 className="media-heading"> -Culto da Manhã - <b>10:00</b>
                                </h5>
                                <h5 className="media-heading"> -*Especial - Kids(03 a 10 anos)
                                </h5>
                                <h5 className="media-heading"> -Free Generation(a partir de 11 anos)
                                </h5>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 px-5  order-6 order-md-0">
                            <div className="">
                                <h3 className="text-white">Terça</h3>
                                <h5 className="media-heading"> -Culto de Ensino - <b>19:30</b>
                                </h5>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 px-5  order-4 order-md-0">
                            <div className="">
                                <h3 className="text-white">Quinta</h3>
                                <h5 className="media-heading"> -Culto de Oração - <b>19:30</b>
                                </h5>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 px-5  order-1 order-md-0">
                            <div className="">
                                <h3 className="text-white">Sábado</h3>
                                <h5 className="media-heading"> -Culto de Jovens - <b>20:00</b>
                                </h5>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 px-5  order-5 order-md-0">
                            <div className=""><br />
                                <h5 className="media-heading"> -Culto de Celebração - <b>18:00</b>
                                </h5>
                                <h5 className="media-heading "> -*Especial - Kids(03 a 10 anos)
                                </h5>
                                <h5 className="media-heading"> -Free Generation(a partir de 11 anos)
                                </h5>
                            </div>
                        </div>
                    </div>
  </div>;
}

export default Agenda;