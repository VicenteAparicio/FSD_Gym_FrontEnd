import React from 'react';
import '../../assets/fontcolors.css';
import './footermiddle.css';

const Footermiddle = () => {
    let mail = "CROSSTRAININGVLC@GMAIL.COM";
    return (
        <div id="footerText" class="bgGreen dinC">
            <div id="leftText">
                <div clasName="titleFooter">DÓNDE ESTAMOS?</div>
                <div clasName="infoFooter">CROSSTRAINING VALENCIA - RUZAFA</div>
                <div clasName="subInfoFooter">C/ PERE III EL GRAN, 32, BAJO</div>
                <div clasName="subInfoFooter">46005 - VALENCIA</div>
                <div clasName="infoFooter">CROSSTRAINING VALENCIA - AV. PUERTO</div>
                <div clasName="subInfoFooter">AVENIDA DEL PUERTO, 47</div>
                <div clasName="subInfoFooter">46021 - VALENCIA</div>
            </div>

            <div id="rightText">
                <div className="titleFooter">HORARIO ATENCION AL CLIENTE</div>
                <div className="infoFooter">LUNES A VIERNES 9:00 - 21:00</div>
                <div className="infoFooter">SÁBADOS 10:00 - 14:00</div>
                <div className="infoFooter">+34 693 050 926</div>
                <div className="infoFooter">{mail}</div>
            </div>
        </div>
    )
}

export default Footermiddle;