import React, {Component} from 'react';
import Img1 from '../assets/images/banner/culto-online.jpg'
import Img2 from '../assets/images/banner/cultos-anteriores.jpg'
import {Link} from 'react-router-dom'

const card1 = { title: "Culto Online", href: "home/culto-online", img: Img1 }
const card2 = { title: "Culto Anteriores", href: "https://www.youtube.com/channel/UCb6GR-irIyMpSfsdrhPC7CQ", img: Img2 }
//const json = '[{"title":"Culto Online","href":"home/culto-online","img":"/static/media/culto-online.834feb41.jpg"},{"title":"Culto Anteriores","href":"https://www.youtube.com/channel/UCb6GR-irIyMpSfsdrhPC7CQ","img":"/static/media/cultos-anteriores.72c916ae.jpg"}]'

function Button(props){
    if (props.href.includes('http')){
        return (
            <a href={props.href} target="_blank" rel="noreferrer" className="btn btn-outline-light">Assistir</a>
            )
    }else{
        return (
            <Link to={props.href} className="btn btn-outline-light">Assistir</Link>
        )
    }
}
export default class Cards extends Component {
    render(){
        let cards = [card1, card2]
        cards = cards.map((nome,index) => <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 wow fadeInUp p-5 mh-50">
        <div className="shadow-lg card border-0" data-wow-duration="500ms" data-wow-delay="400ms">
            <img src={nome.img} className="card-img-top" alt="..." />
            <div className="card-body bg-dark shadow">
                <h1 className="card-title text-white fs-1">{nome.title}</h1>
                <Button href={nome.href}/>
            </div>
        </div>
    </div>)
        return (
            <React.Fragment>
                {cards}
            </React.Fragment>
        )
    }
}