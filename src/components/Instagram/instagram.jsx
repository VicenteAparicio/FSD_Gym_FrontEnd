import React from 'react';

import LogoIg from '../../assets/logos/logoIG.png'
import Ig01 from '../../assets/imgs/ig/crossig01.jpg';
import Ig02 from '../../assets/imgs/ig/crossig02.jpg';
import Ig03 from '../../assets/imgs/ig/crossig03.jpg';
import Ig04 from '../../assets/imgs/ig/crossig04.jpg';
import Ig05 from '../../assets/imgs/ig/crossig05.jpg';
import Ig06 from '../../assets/imgs/ig/crossig06.jpg';
import Ig07 from '../../assets/imgs/ig/crossig07.jpg';
import Ig08 from '../../assets/imgs/ig/crossig08.jpg';

import './instagram.css';

const Instagram = () => {

    return (
        <div id="bottomHome" className="homeContainer01">
            <div id="igFollowContainer">
                        <div id="containerCircleLogo">
                            <a href="https://www.instagram.com/crosstrainingvalencia/" target="_blank" rel="noreferrer"><img id="logoIG" src={LogoIg} alt="Logotipo Crosstraining Valencia" title="Crosstraining Valencia"/></a>
                        </div>
                        <div id="boxTextLogo">
                            <div id="topTextIG" className="norwester">SÍGUENOS EN INSTAGRAM</div>
                            <div id="botTextIG" className="norwester">@crosstrainingvalencia</div>
                        </div>
                    </div>

            <div id="gallery03">
                <div className="igBox">
                    <a href="https://www.instagram.com/crosstrainingvalencia/" target="_blank" rel="noreferrer"><img className="gallery03Pics" alt="Crosstraining Instagram" title="Crosstraining Instagram" src={Ig01}/></a>
                </div>

                <div className="igBox">
                    <a href="https://www.instagram.com/crosstrainingvalencia/" target="_blank" rel="noreferrer"><img className="gallery03Pics" alt="Crosstraining Instagram" title="Crosstraining Instagram" src={Ig02}/></a>
                </div>

                <div className="igBox">
                    <a href="https://www.instagram.com/crosstrainingvalencia/" target="_blank" rel="noreferrer"><img className="gallery03Pics" alt="Crosstraining Instagram" title="Crosstraining Instagram" src={Ig03}/></a>
                </div>

                <div className="igBox">
                    <a href="https://www.instagram.com/crosstrainingvalencia/" target="_blank" rel="noreferrer"><img className="gallery03Pics" alt="Crosstraining Instagram" title="Crosstraining Instagram" src={Ig04}/></a>
                </div>

                <div className="igBox">
                    <a href="https://www.instagram.com/crosstrainingvalencia/" target="_blank" rel="noreferrer"><img className="gallery03Pics" alt="Crosstraining Instagram" title="Crosstraining Instagram" src={Ig05}/></a>
                </div>

                <div className="igBox">
                    <a href="https://www.instagram.com/crosstrainingvalencia/" target="_blank" rel="noreferrer"><img className="gallery03Pics" alt="Crosstraining Instagram" title="Crosstraining Instagram" src={Ig06}/></a>
                </div>

                <div className="igBox">
                    <a href="https://www.instagram.com/crosstrainingvalencia/" target="_blank" rel="noreferrer"><img className="gallery03Pics" alt="Crosstraining Instagram" title="Crosstraining Instagram" src={Ig07}/></a>
                </div>

                <div className="igBox">
                    <a href="https://www.instagram.com/crosstrainingvalencia/" target="_blank" rel="noreferrer"><img className="gallery03Pics" alt="Crosstraining Instagram" title="Crosstraining Instagram" src={Ig08}/></a>
                </div>
            </div>
        </div>
    )
}

export default Instagram;