import React from 'react';
import '../../assets/fontcolors.css';
import './navigatebar.css';

const Navbar = () => {
    return (
        <div id="navbar">
            <div id="desplegable" >
                <i id="menu" class="fas fa-bars" onclick=""></i>
                <ul id="navLinkBox" class="linksContainer norwester txtWhite" >
                    <li><a className="navLinkText norwester" target="_self" onclick="changeSection('home')">INICIO</a></li>
                    <li><a className="navLinkText norwester" target="_self" onclick="changeSection('whoWeAre'), changeTitleBar('whoTitleBar', 2)">¿QUIÉNES SOMOS?</a></li>
                    <li><a className="navLinkText norwester" target="_self" onclick="changeSection('forMe'), fillMiddle('forme')" >¿ES CROSSTRAINING PARA MÍ?</a></li> 
                    <li><a className="navLinkText norwester" target="_self" onclick="changeSection('horarios'), changeTitleBar('titleBarHorarios' , 0)">HORARIOS Y CLASES</a></li>
                    <li><a className="navLinkText norwester" target="_self" onclick="changeSection('tarifasBonos'), changeTitleBar('titleBarTarifas' , 1)">TARIFAS</a></li>
                    <li><a className="navLinkText norwester" target="_self" onclick="changeSection('contacto')">CONTACTO</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;