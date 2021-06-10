import React from 'react';
// import {useHistory} from 'react-router-dom';

import Topjungle from '../../componentes/Topjungle/topjungle';
import Titlesection from '../../componentes/Titlesection/titlesection';


import '../../assets/fontcolors.css';
import './who.css';

const Who = () => {
    return (
        <section className="sections"> 
            <Topjungle id="hide" title="¿QUIÉNES SOMOS?"/> 
            <Titlesection title="NUESTRO EQUIPO"/>
        </section>
    )
}

export default Who;