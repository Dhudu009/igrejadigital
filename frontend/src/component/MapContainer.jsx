import React from 'react';

// import { Container } from './styles';

function map() {
  return <div id="mapa" className="section-bg">
    <div className="google-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.5550450569094!2d-48.96812268509169!3d-16.294559839796296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ea151572a275d%3A0x286dc42d63a41332!2sAssembleia%20de%20Deus%20Minist%C3%A9rio%20de%20An%C3%A1polis%20-%20Jaiara!5e0!3m2!1spt-BR!2sbr!4v1609864502920!5m2!1spt-BR!2sbr"
        width="100%"
        title="AD JAIARA GOOGLE"
        height="450"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      />
    </div>
  </div>;
}

export default map;