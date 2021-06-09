import React from 'react';
import Footertop01 from '../../assets/logos/ruzafa.png';
import Footertop02 from '../../assets/logos/logoFull.png';
import Footertop03 from '../../assets/logos/avPuerto.png';
import footerTopBack from '../../assets/logos/jungleLarge.png';
import '../../assets/fontcolors.css';
import './footertop.css';


const Footertop = () => {
    return (
        <div id="footerJungle" style={{backgroundImage: `url(${footerTopBack})`}}>
            <img id="ruzafaFooter" className="imgLocalFooter" src={Footertop01} alt="Logo Ruzafa"/>
            <img id="logoFooter" src={Footertop02} alt="Logotipo Crosstraining Valencia" title="Crosstraining Valencia"/>
            <img id="avpuertoFooter" className="imgLocalFooter" src={Footertop03} alt="Logo Av. Puerto"/>
        </div>
    )
}

export default Footertop;


