import React from 'react';
import '../../assets/fontcolors.css';
import './logoheader.css';
import logoWhite from '../../assets/logos/logoWhite.png';

const Logoheader = () => {
    return (
        <div className="logoArea">
            <div className="containerLogoNav">
                <img id="logo" src={logoWhite} alt="Logotipo Crosstraining Valencia" title="Crosstraining Valencia"/>
            </div>
            <div id="boxTextLogo" className="txtWhite">
                <div id="topTextLogo" className="ironman">CROSSTRAINING</div>
                <div id="botTextLogo" className="norwester">VALENCIA</div>
            </div>
        </div>
    )
}

export default Logoheader;