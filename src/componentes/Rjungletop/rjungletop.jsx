import React from 'react';

import Logosjungletop from '../Logosjungletop/logosjungletop';

import '../../assets/fontcolors.css';
import './rjungletop.css';

const Rjungletop = (props) => {

    return (
        <div id="rightJungleTop">
            <div id="textoBoxHome">
                <div className="textoJungleTop txtWhite norwester">{props.title}</div>
            </div>
            <Logosjungletop id={props.id} />
        </div>
    )
}

export default Rjungletop;



