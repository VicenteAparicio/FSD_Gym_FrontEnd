import React from 'react';
// import {useHistory} from 'react-router-dom';
import '../../assets/fontcolors.css';
import './navigatebar.css';
import menu from '../../assets/logos/menu.png';

const Navbar = () => {
    return (
        <div id="navbar">
            <div id="desplegable" >
                <img id="menu" src={menu} alt="Menu container" onClick=""/>
                <ul id="navLinkBox" class="linksContainer norwester txtWhite" >
                    <li><div className="navLinkText norwester" target="_self" to="/">INICIO</div></li>
                    <li><div className="navLinkText norwester" target="_self" to="/who">¿QUIÉNES SOMOS?</div></li>
                    <li><div className="navLinkText norwester" target="_self" to="/forme" >¿ES CROSSTRAINING PARA MÍ?</div></li> 
                    <li><div className="navLinkText norwester" target="_self" to="/agenda">HORARIOS Y CLASES</div></li>
                    <li><div className="navLinkText norwester" target="_self" to="/prices">TARIFAS</div></li>
                    <li><div className="navLinkText norwester" target="_self" to="/contact">CONTACTO</div></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;