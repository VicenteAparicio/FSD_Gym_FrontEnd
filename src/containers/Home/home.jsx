import React from 'react';
// import {useHistory} from 'react-router-dom';

import Topjungle from '../../componentes/Topjungle/topjungle';
import Titlesection from '../../componentes/Titlesection/titlesection';
import Midbanner from '../../componentes/Midbanner/midbanner';
import Bookingtitle from '../../componentes/Bookingtitle/bookingtitle';
import Gallery from '../../componentes/Gallery/gallery';
import Mapshome from '../../componentes/Mapshome/mapshome';
import Instagram from '../../componentes/Instagram/instagram';


import '../../assets/fontcolors.css';
import './home.css';

const Home = () => {
    return (
        <section id="home" className="sections">
            <Topjungle title="PONTE EN FORMA CON NOSOTROS"/>
            <Titlesection title="CONSIGUE TU MEJOR VERSIÓN"/>
            <Gallery/>
            <Mapshome/>
            <Midbanner/>
            <Instagram/>
            <Bookingtitle/>
        </section>
    )
}

export default Home;