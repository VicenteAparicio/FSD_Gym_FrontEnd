import React from 'react';
// import {useHistory} from 'react-router-dom';

import Titlesection from '../../components/Titlesection/titlesection';
import Bookingtitle from '../../components/Bookingtitle/bookingtitle';

import Ruzafa from '../../assets/logos/ruzafa.png';
import AvPuerto from '../../assets/logos/avPuerto.png';
import Agenda01 from '../../assets/logos/agenda01.png';
import Agenda02 from '../../assets/logos/agenda02.png';
import Background from '../../assets/logos/jungleLargeTop.png';


import '../../assets/fontcolors.css';
import './horarios.css';

const Horarios = () => {
    return (

        <section id="horarios" className="sections">
            <Titlesection title="ES HORA DE ENTRENAR"/>
            <div id="agendaContainer" className="agendaTable" style={{backgroundImage: `url(${Background})`}}>
                <div id="agendaRuzafa" className="agenda">
                    <div className="logoAgenda">
                        <img alt="Logo Ruzafa" className="imgAgenda" src={Ruzafa}/>
                    </div>
                    <img alt="Agenda Ruzafa" className="tabla" src={Agenda01}/>
                </div>
                <div id="agendaPuerto" className="agenda">
                    <div className="logoAgenda">
                        <img alt="Logo Av. Puerto" className="imgAgenda" src={AvPuerto}/>
                    </div>
                    <img alt="Agenda Av. Puerto" className="tabla" src={Agenda02}/>
                </div>
            </div>
            <div id="modelContainer">
                <div className="model">
                    <div className="modelTitle norwester">HALTEROFILIA</div>
                    <div className="modelText bgGreen txtWhite dinC">Clases enfocadas en la mejora de la técnica de movimientos olímpicos con bara como son el clean y jerk o el snatch.{"\n"}{"\n"}Recomendables para personas que se inician en Crosstraining ya que estas clases os harán avanzar y mejorar en este deporte.</div>
                </div>
                <div className="model">
                    <div className="modelTitle norwester">GIMNASTICS</div>
                    <div className="modelText bgGreen txtWhite dinC">Clases enfocadas en la mejora de la técnica de movimientos gimnásticos (con vuestro propio peso corporal) como dominadas, muscle up, flexiones de pino, subida a la cuerda, entre muchos otros.{"\n"}{"\n"}Recomendables para personas que se inician en Crosstraining ya que estas clases os harán avanzar y mejorar en este deporte.</div>
                </div>
                <div className="model">
                    <div className="modelTitle norwester">OPEN BOX</div>
                    <div className="modelText bgGreen txtWhite dinC">CLASES SIN MONITOR.{"\n"}{"\n"}En estas clases podréis entrenar libremente, habrá un monitor para resolver dudas.</div>
                </div>
            </div>
            <Bookingtitle/>
        </section>

    )
}

export default Horarios;