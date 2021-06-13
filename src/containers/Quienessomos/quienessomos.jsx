import React from 'react';

import Topjungle from '../../componentes/Topjungle/topjungle';
import Titlesection from '../../componentes/Titlesection/titlesection';
import Bookingtitle from '../../componentes/Bookingtitle/bookingtitle';

import Coachpic01 from '../../assets/imgs/team/josejuan.png';
import Coachpic02 from '../../assets/imgs/team/jesusart.png';
import Coachpic03 from '../../assets/imgs/team/diegomarc.png';
import Coachpic04 from '../../assets/imgs/team/mariaseg.png';
import igLogo from '../../assets/logos/igLogo2.png';

import '../../assets/fontcolors.css';
import './quienessomos.css';

const Quienessomos = () => {

    return (
        <section id="whoWeAre" class="sections">
            <Topjungle id="hide" title="¿QUIÉNES SOMOS?"/>
            <Titlesection title="NUESTRO EQUIPO"/> 
            <div id="whoWeAreContainer">

                <div id="profilesContainer">
                    <div class="profiles">
                        <div class="profilePicBox">
                            <img class="profilePic" src={Coachpic01} alt="Jose Juan Albert" title="Jose Juan Albert"/>
                        </div>
                        <div class="profileInfo">
                            <div class="profileName txtGreen norwester">JOSE JUAN ALBERT - JJ</div>
                            <div class="profileData dinC">CF COACH LEVEL 1</div>
                            <div class="profileData dinC">ENTRENADOR DE HALTEROFILIA - FEH</div>
                            <div class="profileData dinC">HEAD COACH</div>
                            <div class="profileData dinC">DISEÑADOR GRÁFICO</div>
                            <div class="containerIG">
                                <img class="igLogo" src={igLogo}/>
                                <div class="profileIG norwester">@JOSEJUANALB</div>
                            </div>
                        </div>
                    </div>

                    <div class="profiles">
                        <div class="profilePicBox">
                            <img class="profilePic" src={Coachpic02} alt="Jesús Arteaga" title="Jesús Arteaga"/>
                        </div>
                        <div class="profileInfo">
                            <div class="profileName txtGreen norwester">JESÚS ARTEAGA</div>
                            <div class="profileData dinC">CF COACH LEVEL 1</div>
                            <div class="profileData dinC">HEAD COACH</div>
                            <div class="profileData dinC">ENCARGADO</div>
                            <div class="containerIG">
                                <img class="igLogo" src={igLogo}/>
                                <div class="profileIG norwester">@LITTLE_ONCE_CF</div>
                            </div>
                        </div>
                    </div>

                    <div class="profiles">
                        <div class="profilePicBox">
                            <img class="profilePic" src={Coachpic03} alt="Diego Marcone" title="Diego Marcone"/>
                        </div>
                        <div class="profileInfo">
                            <div class="profileName txtGreen norwester">DIEGO MARCONE</div>
                            <div class="profileData dinC">CF COACH LEVEL 1</div>
                            <div class="profileData dinC">HEAD COACH</div>
                            <div class="profileData dinC">SOCIAL MEDIA</div>
                            <div class="containerIG">
                                <img class="igLogo" src={igLogo}/>
                                <div class="profileIG norwester">@DMARBONE1111</div>
                            </div>
                        </div>
                    </div>

                    <div class="profiles">
                        <div class="profilePicBox">
                            <img class="profilePic" src={Coachpic04} alt="María Segarra" title="María Segarra"/>
                        </div>
                        <div class="profileInfo">
                            <div class="profileName txtGreen norwester">MARÍA SEGARRA</div>
                            <div class="profileData dinC">CF COACH LEVEL 1</div>
                            <div class="profileData dinC">HEAD COACH</div>
                            <div class="containerIG">
                                <img class="igLogo" src={igLogo}/>
                                <div class="profileIG norwester">@MARÍASEGARRA3</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
            <Bookingtitle/>
        </section>
    )
}

export default Quienessomos;