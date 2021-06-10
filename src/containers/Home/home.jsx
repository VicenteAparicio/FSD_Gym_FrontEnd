import React from 'react';
// import {useHistory} from 'react-router-dom';

import Topjungle from '../../componentes/Topjungle/topjungle';
import Titlesection from '../../componentes/Titlesection/titlesection';
import Midbanner from '../../componentes/Midbanner/midbanner';

import '../../assets/fontcolors.css';
import './home.css';

const Home = () => {
    return (
        <section id="home" className="sections">
            <Topjungle id="hide" title="PONTE EN FORMA CON NOSOTROS"/>
            <Titlesection title="CONSIGUE TU MEJOR VERSIÓN"/>
            <Midbanner/>
        </section>
    )
}

export default Home;