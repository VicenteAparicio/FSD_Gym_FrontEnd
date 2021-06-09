import React from 'react';

import Ruzafa from '../../assets/logos/ruzafa.png';
import AvPuerto from '../../assets/logos/avPuerto.png';

import '../../assets/fontcolors.css';
import './logosjungletop.css';

const Logosjungletop = () => {

    return (

        <div id="boxLocalesJungleTop">
            <div className="localBoxTop">
                <img id="ruzafaJungleTop" alt="Logo Crosstraining Ruzafa" title="Ruzafa" className="imgLocalTop" src={Ruzafa}/>
            </div>
            <div className="localBoxTop">
                <img id="puertoJungleTop" alt="Logo Crosstraining Av. Puerto" title="Puerto" className="imgLocalTop" src={AvPuerto}/>
            </div>
        </div>
        
    )
}

export default Logosjungletop;