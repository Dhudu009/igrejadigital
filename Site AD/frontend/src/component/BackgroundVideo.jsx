import React from 'react';
import VideoMp4 from '../assets/images/banner/hero-video.mp4'

// import { Container } from './styles';

function BGVideo() {
    return <React.Fragment>
        <video className = "hero-video" loop autoPlay muted>
            <source src={VideoMp4} type="video/mp4" />
        </video>
    </React.Fragment>;
}

export default BGVideo;