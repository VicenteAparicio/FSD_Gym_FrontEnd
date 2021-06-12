import React from 'react';

import Link from '../Link/link';
import menu from '../../assets/logos/menu.png';

import '../../assets/fontcolors.css';
import './navigatebar.css';

const Navbar = () => {
    return (
        <div id="navbar">
            <div id="desplegable" >
                <img id="menu" src={menu} alt="Menu container" onClick=""/>
                <ul id="navLinkBox" className="linksContainer norwester txtWhite" >
                    <li><Link to="/" name="INICIO"/></li>
                    <li><Link to="/who" name="¿QUIÉNES SOMOS?"/></li>
                    <li><Link to="/forme" name="¿ES CROSSTRAINING PARA MÍ?"/></li> 
                    <li><Link to="/agenda" name="HORARIOS Y CLASES"/></li>
                    <li><Link to="/prices" name="TARIFAS"/></li>
                    <li><Link to="/contact" name="CONTACTO"/></li>
                    <li><Link to="/login" name="LOGIN"/></li>
                    <li><Link to="/register" name="REGISTER"/></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;