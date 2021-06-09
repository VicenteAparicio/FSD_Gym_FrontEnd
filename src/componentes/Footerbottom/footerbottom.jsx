import React from 'react';

import Partner01 from '../../assets/logos/partner01.png';
import Partner02 from '../../assets/logos/partner02.png';
import Partner03 from '../../assets/logos/partner03.png';

import '../../assets/fontcolors.css';
import './footerbottom.css';

const Footerbottom = () => {
    return (
        <div id="footerPartnership" className="bgBlack">
            <img id="logoRogue" src={Partner01} alt="Logotipo Rogue" title="Rogue"/>
            <img id="logoNocco" src={Partner02} alt="Logotipo Nocco" title="Nocco: No carbs company"/>
            <img id="logoConcept2" src={Partner03} alt="Logotipo Concept2" title="Concept2"/>
        </div>
    )
}

export default Footerbottom;