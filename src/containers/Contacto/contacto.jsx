import React from 'react';
// import {useHistory} from 'react-router-dom';

import Topjungle from '../../components/Topjungle/topjungle';

import ruzafaGreen from '../../assets/logos/ruzafaGreen.png';
import avPuertoGreen from '../../assets/logos/avPuertoGreen.png';


import '../../assets/fontcolors.css';
import './contacto.css';

const Contacto = () => {
    return (

        <section id="contacto" className="sections">
                <Topjungle id="hide" title="CONTACTO"/> 
            <div id="contactoContainer">
                <div id="mapBoxContact" className="dinC">
                    <div id="topMapContainer" className="mapContainers contactMapContainer">
                        <div className="gMap">
                            <iframe title="Ruzafa Google Maps" className="styleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385.0357289588217!2d-0.368475585182815!3d39.46287096001625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6048c7e674327b%3A0x73fade1664140f07!2sCrossTraining%20Valencia!5e0!3m2!1ses!2ses!4v1621851383112!5m2!1ses!2ses" allowFullscreen="" loading="lazy"/>
                        </div>
                        <div className="gMapDirection">
                            <img alt="Logo Ruzafa" id="ruzafaFooter" className="imgLocalGMap" src={ruzafaGreen}/>
                            <div className="gMapText">
                                <div className="subInfoGMap">C/ PERE III EL GRAN, 32, BAJO</div>
                                <div className="subInfoGMap">46005 - VALENCIA</div>
                            </div>
                        </div>
                    </div>
                    <div id="botMapContainer" className="mapContainers contactMapContainer">
                        <div className="gMap">
                            <iframe title="Av Puerto Google Maps" className="styleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d323.7571816715746!2d-0.3553265131759706!3d39.46673624656762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9e7c0c996be0045!2sCrossTrainig%20Valencia%20-%20Av.%20Puerto!5e0!3m2!1ses!2ses!4v1621851513571!5m2!1ses!2ses" allowFullscreen="" loading="lazy"/>
                        </div>

                        <div className="gMapDirection">
                            <img alt="Logo Av. Puerto" id="avpuertoFooter" className="imgLocalGMap" src={avPuertoGreen}/>
                            <div className="gMapText">
                                <div className="subInfoGMap">AVENIDA DEL PUERTO, 47</div>
                                <div className="subInfoGMap">46021 - VALENCIA</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="greenVerticalBar" className="bgGreen"></div>
                <div id="formContainer">
                    <div id="introForm" className="txtBlack dinC">SI QUIERES RESERVAR UNA CLASE DE PRUEBA O TIENES CUALQUIER PREGUNTA, CONTÁCTANOS</div>

                     <form action="./contact.php" method="post" id="contact-form" className="bgGreen dinC txtWhite"> {/*onSubmit={sendEmail}*/}
                        <label for="from_nombre">NOMBRE</label>
                        <input type="text" name="from_nombre" placeholder="Nombre y Apellido" required=""/>
                        <label for="asunto">ASUNTO</label>
                        <input type="text" name="asunto" placeholder="Asunto del mensaje" required=""/>
                        <label for="from_email">EMAIL</label>
                        <input type="email" name="from_email" placeholder="ejemplo@correo.com" required=""/>
                        <label for="telf">TELF</label>
                        <input type="text" name="telf" placeholder="telf" required=""/>
                        <label for="mensaje">MENSAJE</label>
                        <textarea name="mensaje" placeholder="Mensaje" required></textarea>
                        <input id="submit" type="submit" className="dinC txtGreen" name="submit" value="ENVIAR"/>			
                    </form>

                </div>
            </div>
        </section>

    )
}

export default Contacto;