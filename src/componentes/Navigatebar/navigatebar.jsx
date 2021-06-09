import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import '../../assets/fontcolors.css';
import './navigatebar.css';
import menu from '../../assets/logos/menu.png';

const Navbar = () => {
    return (
        <div id="navbar">
            <div id="desplegable" >
                <img id="menu" src={menu} class="fas fa-bars" onclick=""/>
                <ul id="navLinkBox" class="linksContainer norwester txtWhite" >
                    <li><div className="navLinkText norwester" target="_self" onclick="changeSection('home')">INICIO</div></li>
                    <li><div className="navLinkText norwester" target="_self" onclick="changeSection('whoWeAre'), changeTitleBar('whoTitleBar', 2)">¿QUIÉNES SOMOS?</div></li>
                    <li><div className="navLinkText norwester" target="_self" onclick="changeSection('forMe'), fillMiddle('forme')" >¿ES CROSSTRAINING PARA MÍ?</div></li> 
                    <li><div className="navLinkText norwester" target="_self" onclick="changeSection('horarios'), changeTitleBar('titleBarHorarios' , 0)">HORARIOS Y CLASES</div></li>
                    <li><div className="navLinkText norwester" target="_self" onclick="changeSection('tarifasBonos'), changeTitleBar('titleBarTarifas' , 1)">TARIFAS</div></li>
                    <li><div className="navLinkText norwester" target="_self" onclick="changeSection('contacto')">CONTACTO</div></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;