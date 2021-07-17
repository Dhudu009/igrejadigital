import React from 'react';
import background from '../assets/images/backgrounds/bg-1.jpg'
import Agenda from './Agenda'
import Cards from './Cards';

// import { Container } from './styles';

function intro() {
    return <div>
        <section id="intro" className="about call-to-action section overly bg-1" style={{ backgroundImage: `url(${background})`,paddingTop:'15vh' }}>
            <div className="container-fluid">
                <div className="row justify-content-around">
                    <div className="col-12 text-center title wow fadeIn" data-wow-duration="1500ms">
                        <h2>Participe</h2>
                    </div>
                   <Cards />
                </div> {/* End row */}
                <Agenda />
            </div>
        </section>
    </div>;
}

export default intro;