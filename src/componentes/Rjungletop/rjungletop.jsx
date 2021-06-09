import React from 'react';
import Ruzafa from '../../assets/logos/ruzafa.png';
import AvPuerto from '../../assets/logos/avPuerto.png';
import '../../assets/fontcolors.css';
import './rjungletop.css';

const Rjungletop = (props) => {

    return (
        <div id="rightJungleTop">
            <div id="textoBoxHome">
                <div id="textoHome" className="textoJungleTop txtWhite norwester">PONTE EN FORMA CON NOSOTROS</div>
            </div>
            <div id="boxLocalesJungleTop">
                <div className="localBoxTop">
                    <img id="ruzafaJungleTop" alt="Logo Crosstraining Ruzafa" title="Ruzafa" className="imgLocalTop" src={Ruzafa}/>
                </div>
                <div className="localBoxTop">
                    <img id="puertoJungleTop" alt="Logo Crosstraining Av. Puerto" title="Puerto" className="imgLocalTop" src={AvPuerto}/>
                </div>
            </div>
        </div>
    )
}

export default Rjungletop;



