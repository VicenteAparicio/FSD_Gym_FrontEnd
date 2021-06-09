import React from 'react';
// import {useHistory} from 'react-router-dom';

import Topjungle from '../../componentes/Topjungle/topjungle';
import Titlesection from '../../componentes/Titlesection/titlesection';

import '../../assets/fontcolors.css';
import './home.css';

const Home = () => {
    return (
        <section id="home" className="sections">
            <Topjungle/>
            <Titlesection title="CONSIGUE TU MEJOR VERSIÓN"/>
        </section>
    )
}

export default Home;