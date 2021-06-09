import React from 'react';
import Logofull from '../../assets/logos/logoFull.png';
import Junglelargetop from '../../assets/logos/jungleLargeTop.png';
import Rjungletop from '../Rjungletop/rjungletop';
import '../../assets/fontcolors.css';
import './topjungle.css';

const Topjungle = (props) => {

    return (
        <div id="topJungle" style={{backgroundImage: `url(${Junglelargetop})`}}>
            <div id="leftJungleTop">
                <img id="logoTop" src={Logofull}  alt="Logotipo Crosstraining Valencia" title="Crosstraining Valencia"/>
            </div>
            <Rjungletop/>
        </div>
    )
}

export default Topjungle;