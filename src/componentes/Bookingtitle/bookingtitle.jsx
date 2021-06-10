import React from 'react';

import {useHistory} from 'react-router-dom';

import '../../assets/fontcolors.css';
import './bookingtitle.css';

const Bookingtitle = () => {

    let history = useHistory();
    const booking = () => {
        history.push("/contact")
    }
    return (
        <div className="greenBarTitleContainer">
            <div className="greenBarTitle txtWhite bgGreen dinC" onClick={()=>booking()}>OBTÉN TU CLASE DE PRUEBA</div>
        </div>
    )
}

export default Bookingtitle;