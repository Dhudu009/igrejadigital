import React from 'react';
// import VideoMp4 from '../assets/images/banner/hero-video.mp4'

// import { Container } from './styles';

function BGVideo() {
    return <React.Fragment>
        {/* Vídeo servido localmente */}
        {/* <video className = "hero-video" loop autoPlay muted>
            <source src={VideoMp4} type="video/mp4" />twp-video twp-video-background 
        </video> */}
        
        {/* Vídeo servido pelo youtube */}
        <div className="hero-video">
                <iframe className="hero-video" src="https://www.youtube.com/embed/zjsWjWWhNRQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=zjsWjWWhNRQ&iv_load_policy=3&playsinline=1" 
                title="YouTube video player" frameBorder="0" allow="autoplay" allowFullScreen></iframe>
        </div>
    </React.Fragment>;
}

export default BGVideo;