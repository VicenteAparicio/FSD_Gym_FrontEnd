import React from 'react';

import Midbackimg from '../../assets/imgs/crosstraining20-reverse.jpg';

import '../../assets/fontcolors.css';
import './midbanner.css';


const Midbanner = () => {
    return (
        <div className='middle' style={{backgroundImage: `url(${Midbackimg})`}}>
            <div id="leftMiddle" class="txtWhite">
                <div className="title02 norwester">¿QUÉ ES CROSSTRAINING?</div>
                <div className="textoMiddle dinC">CROSSTRAINING ES UN MÉTODO DE ENTRENAMIENTO BASADO EN EJERCICIOS CONSTANTEMENTE VARIADOS, CON MOVIMIENTOS FUNCIONALES, Y ES ESCALABLE PARA CUALQUIER PERSONA, NIVEL Y ESTADO FÍSICO.</div>
            </div>
            <div id="triangle"/>
        </div>
    )
}

export default Midbanner;