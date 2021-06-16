import React from 'react';

import Titlesection from '../../components/Titlesection/titlesection';
import Bookingtitle from '../../components/Bookingtitle/bookingtitle';

import Coachpic01 from '../../assets/imgs/team/josejuan.png';
import Coachpic02 from '../../assets/imgs/team/jesusart.png';
import Coachpic03 from '../../assets/imgs/team/diegomarc.png';
import Coachpic04 from '../../assets/imgs/team/mariaseg.png';
import igLogo from '../../assets/logos/igLogo2.png';

import '../../assets/fontcolors.css';
import './quienessomos.css';

const Quienessomos = () => {

    return (
        <section id="whoWeAre" className="sections">
            <Titlesection title="NUESTRO EQUIPO"/> 
            <div id="whoWeAreContainer">

                <div id="profilesContainer">
                    <div className="profiles">
                        <div className="profilePicBox">
                            <img className="profilePic" src={Coachpic01} alt="Jose Juan Albert" title="Jose Juan Albert"/>
                        </div>
                        <div className="profileInfo">
                            <div className="profileName txtGreen norwester">JOSE JUAN ALBERT - JJ</div>
                            <div className="profileData dinC">CF COACH LEVEL 1</div>
                            <div className="profileData dinC">ENTRENADOR DE HALTEROFILIA - FEH</div>
                            <div className="profileData dinC">HEAD COACH</div>
                            <div className="profileData dinC">DISEÑADOR GRÁFICO</div>
                            <div className="containerIG">
                                <img alt="Logo Instagram" className="igLogo" src={igLogo}/>
                                <div className="profileIG norwester">@JOSEJUANALB</div>
                            </div>
                        </div>
                    </div>

                    <div className="profiles">
                        <div className="profilePicBox">
                            <img className="profilePic" src={Coachpic02} alt="Jesús Arteaga" title="Jesús Arteaga"/>
                        </div>
                        <div className="profileInfo">
                            <div className="profileName txtGreen norwester">JESÚS ARTEAGA</div>
                            <div className="profileData dinC">CF COACH LEVEL 1</div>
                            <div className="profileData dinC">HEAD COACH</div>
                            <div className="profileData dinC">ENCARGADO</div>
                            <div className="containerIG">
                                <img alt="Logo Instagram" className="igLogo" src={igLogo}/>
                                <div className="profileIG norwester">@LITTLE_ONCE_CF</div>
                            </div>
                        </div>
                    </div>

                    <div className="profiles">
                        <div className="profilePicBox">
                            <img className="profilePic" src={Coachpic03} alt="Diego Marcone" title="Diego Marcone"/>
                        </div>
                        <div className="profileInfo">
                            <div className="profileName txtGreen norwester">DIEGO MARCONE</div>
                            <div className="profileData dinC">CF COACH LEVEL 1</div>
                            <div className="profileData dinC">HEAD COACH</div>
                            <div className="profileData dinC">SOCIAL MEDIA</div>
                            <div className="containerIG">
                                <img alt="Logo Instagram" className="igLogo" src={igLogo}/>
                                <div className="profileIG norwester">@DMARBONE1111</div>
                            </div>
                        </div>
                    </div>

                    <div className="profiles">
                        <div className="profilePicBox">
                            <img className="profilePic" src={Coachpic04} alt="María Segarra" title="María Segarra"/>
                        </div>
                        <div className="profileInfo">
                            <div className="profileName txtGreen norwester">MARÍA SEGARRA</div>
                            <div className="profileData dinC">CF COACH LEVEL 1</div>
                            <div className="profileData dinC">HEAD COACH</div>
                            <div className="containerIG">
                                <img alt="Logo Instagram" className="igLogo" src={igLogo}/>
                                <div className="profileIG norwester">@MARÍASEGARRA3</div>
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