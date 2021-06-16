import React from 'react';
// import {useHistory} from 'react-router-dom';

import Topjungle from '../../components/Topjungle/topjungle';
import Bookingtitle from '../../components/Bookingtitle/bookingtitle';
import Midbanner from '../../components/Midbanner/midbanner';

import Leftbanner from '../../assets/banners/crosstraining23.jpg';
import Centerbanner from '../../assets/banners/crosstraining22.jpg';
import Rightbanner from '../../assets/banners/crosstraining25.jpg';
import logoWhite from '../../assets/logos/logoWhite.png';

import '../../assets/fontcolors.css';
import './esparami.css';

const Esparami = () => {
    return (
        <section id="forMe" className="sections">
            <Topjungle id="hide" title="¿ES CROSSTRAINING PARA MÍ?"/> 
            <div id="forMeContainer">
                <Midbanner/>
            </div>
            <div id="textForMeContainer" className="txtBlack">
                <div id="titleForMe" className="title02 norwester">¿ES PARA MÍ?</div>
                <p class="textForMe dinC">Uno de los errores más graves en este deporte es realizar entrenamientos al azar o seguir programaciones diseñadas para atletas avanzados. Con ello se corre el peligro de caer en el estancamiento o, lo que es peor, llegar a una lesión.{"\n"}{"\n"}En nuestro centro tenemos muy en cuenta vuestro nivel. Por ello se llevará a cabo un análisis, por parte de nuestros entrenadores, de vuestros parámetros; movilidad, técnica y capacidad de aprendizaje. Con estos parámetros determinamos el punto de partida de cada persona.{"\n"}{"\n"}En base a un crucial feedback con el cliente adaptamos la programación y el entrenamiento para garantizar una mejora consistente. Creemos en una programación y un entrenamiento que evoluciona y escala sea cual sea tu nivel.</p>
            </div>

            <Bookingtitle/>

            <div id="bottomBanner">
                <div className="leftBanner" style={{backgroundImage: `url(${Leftbanner})`}}></div>
                <div className="centerBanner" style={{backgroundImage: `url(${Centerbanner})`}}>
                    <div id="bannerLogotype" class="logoArea">
                        <div classname="containerLogoNav">
                            <img id="logoBanner" src= {logoWhite} alt="Logotipo Crosstraining Valencia" title="Crosstraining Valencia"/>
                        </div>
                        <div id="boxTextLogo"class="txtWhite">
                            <div id="topTextBanner" className="ironman">CROSSTRAINING</div>
                            <div id="botTextBanner" className="norwester">VALENCIA</div>
                        </div>
                    </div>
                </div>
                <div className="rightBanner" style={{backgroundImage: `url(${Rightbanner})`}}></div>
            </div>

        </section>
    )
}

export default Esparami;