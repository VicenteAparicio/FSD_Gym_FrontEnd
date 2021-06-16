// IMPORT MOTORS
import React from 'react';
//IMPORT COMPONENTS
import Link from '../Link/link';
import menu from '../../assets/logos/menu.png';
// IMPORT STYLES
import '../../assets/fontcolors.css';
import './navigatebar.css';

const Navbar = () => {

    return (
        <div id="navbar">
            <div id="desplegable" >
                <img id="menu" src={menu} alt="Menu container" onClick=""/>
                <ul id="navLinkBox" className="linksContainer norwester txtWhite" >
                    <li><Link to="/" name="INICIO"/></li>
                    <li><Link to="/quienessomos" name="¿QUIÉNES SOMOS?" /></li>
                    <li><Link to="/esparami" name="¿ES CROSSTRAINING PARA MÍ?"/></li> 
                    <li><Link to="/horarios" name="HORARIOS Y CLASES"/></li>
                    <li><Link to="/tarifas" name="TARIFAS"/></li>
                    <li><Link to="/contacto" name="CONTACTO"/></li>
                    <li><Link to="/login" name="LOGIN"/></li>
                    <li><Link to="/register" name="REGISTRO"/></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;