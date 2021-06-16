import React from 'react';
// import {useHistory} from 'react-router-dom';

import Topjungle from '../../components/Topjungle/topjungle';
import Titlesection from '../../components/Titlesection/titlesection';
import Midbanner from '../../components/Midbanner/midbanner';
import Bookingtitle from '../../components/Bookingtitle/bookingtitle';
import Gallery from '../../components/Gallery/gallery';
import Mapshome from '../../components/Mapshome/mapshome';
import Instagram from '../../components/Instagram/instagram';


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