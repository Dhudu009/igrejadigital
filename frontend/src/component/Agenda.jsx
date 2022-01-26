import React, { useState } from 'react';
import './Agenda.css'

// import { Container } from './styles';


function Agenda(props) {

    const week = [
        {
            title: 'Domingo',
            eventos: [
                { name: 'Culto da manhã', time: '10:00' },
                { name: 'Culto de Celebração', time: '18:00' },
                { name: '*Especial - Kids(03 a 10 anos)' },
                { name: 'Free Generation (a partir de 11 anos)' },
            ]

        },
        {
            title: 'Segunda',
            eventos: [
                { name: 'Tarde da benção', time: '14:00' },
            ]
        },
        {
            title: 'Terça',
            eventos: [
                { name: 'Culto de Ensino', time: '19:30' },
            ]
        },
        {
            title: 'Quarta',
            eventos: [
                { name: 'Consagração pelas Famílias', time: '8:00' },
                { name: 'Discipulado', time: '20:00' },
            ]
        },
        {
            title: 'Quinta',
            eventos: [
                { name: 'Culto de Oração', time: '19:30' },
            ]
        },
        {
            title: 'Sexta',
            eventos: [
                { name: 'Culto de Adolescentes', time: '20:00' },
            ]
        },
        {
            title: 'Sábado', eventos: [
                { name: 'Culto de Jovens', time: '20:00' },
            ]
        }
    ]

    const [day = 0, setDay] = useState(0)

    function increment() {
        setDay((current) => {
            if (current === 6) {
                return 0
            }
            return current + 1
        })
    }
    function decrement() {
        setDay((current) => {
            if (current === 0) {
                return 6
            }
            return current - 1
        })
    }

    return (
        <div>
            <section id="agenda" className='section-sm bg-gr shadow-lg wow fadeInUp ' >
                <div className="row ">
                    {/* section title */}
                        <div className="title text-center">
                            <h2 className="text-white">Programação <span className="color">Semanal</span></h2>
                            <div className="border"></div>
                        </div>
                    {/* /section title */}
                    <div className='d-flex justify-content-center wow fadeInUp'>
                        <button className='button' onClick={decrement}> {'<'} </button>
                        <div className='d-grid outdoor col-9 col-sm-7 col-md-6 col-lg-4 col-xxl-3 text-center p-5'>
                            <ul>
                                <div className='fs-2'>{week[day].title}</div>
                                {week[day].eventos.map(element => (
                                    <div>{element.name} <b>{element.time?'- '+element.time:''}</b> </div>
                                ))}
                            </ul>
                        </div>
                        <button className='button' onClick={increment}> {'>'} </button>
                    </div>



                    {/*                 
                <div className="col-6 col-md-3 px-5  order-0 order-md-0">
                <div className="">
                <h3 className="text-white">Segunda</h3>
                <h5 className="media-heading"> -Tarde da Benção - <b>14: 30</b>
                </h5>
                </div>
                </div>
                <div className="col-6 col-md-3 px-5  order-2 order-md-0">
                <div className="">
                <h3 className="text-white">Quarta</h3>
                <h5 className="media-heading"> -Consagração pelas Famílias - <b>8: 00</b>
                </h5>
                <h5 className="media-heading"> -Discipulado - <b>20: 00</b>
                </h5>
                </div>
                </div>
                <div className="col-6 col-md-3 px-5  order-7 order-md-0">
                <div className="">
                <h3 className="text-white">Sexta</h3>
                <h5 className="media-heading"> -Culto de Adolescentes - <b>20: 00</b>
                </h5>
                </div>
                </div>
                <div className="col-6 col-md-3 px-5  order-3 order-md-0">
                <div className="">
                <h3 className="text-white">Domingo</h3>
                <h5 className="media-heading"> -Culto da Manhã - <b>10: 00</b>
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
                <h5 className="media-heading"> -Culto de Ensino - <b>19: 30</b>
                </h5>
                </div>
                </div>
                <div className="col-6 col-md-3 px-5  order-4 order-md-0">
                <div className="">
                <h3 className="text-white">Quinta</h3>
                <h5 className="media-heading"> -Culto de Oração - <b>19: 30</b>
                </h5>
                </div>
                </div>
                <div className="col-6 col-md-3 px-5  order-1 order-md-0">
                <div className="">
                <h3 className="text-white">Sábado</h3>
                <h5 className="media-heading"> -Culto de Jovens - <b>20: 00</b>
                </h5>
                </div>
                </div>
                <div className="col-6 col-md-3 px-5  order-5 order-md-0">
                <div className=""><br />
                <h5 className="media-heading"> -Culto de Celebração - <b>18: 00</b>
                </h5>
                <h5 className="media-heading "> -*Especial - Kids(03 a 10 anos)
                </h5>
                <h5 className="media-heading"> -Free Generation(a partir de 11 anos)
                </h5>
                </div>
            </div> */}
                </div>
            </section>
        </div >
    )
}

export default Agenda;

