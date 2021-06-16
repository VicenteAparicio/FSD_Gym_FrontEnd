import React from 'react';
// import {useHistory} from 'react-router-dom';

import Topjungle from '../../components/Topjungle/topjungle';
import Titlesection from '../../components/Titlesection/titlesection';
import Bookingtitle from '../../components/Bookingtitle/bookingtitle';

import Tarifa01 from '../../assets/imgs/gallery01/crosstraining02.jpg';
import Tarifa02 from '../../assets/imgs/gallery01/crosstraining01.jpg';
import Tarifa03 from '../../assets/imgs/gallery01/crosstraining10.jpg';
import Tarifa04 from '../../assets/imgs/gallery01/crosstraining08.jpg';
import Background from '../../assets/logos/jungleLarge.png';
import logoGrey from '../../assets/logos/logoGrey.png'

import '../../assets/fontcolors.css';
import './tarifas.css';

const Tarifas = () => {
    return (
        <section id="tarifasBonos" className="sections">

            <Topjungle id="hide" title="TARIFAS"/> 
            <Titlesection title="2 centros - 1 cuota"/>
            <div id="tarifas">
                <div id="tarifasContainer">
                    <div id="matricula" className="norwester">MATRÍCULA: 25€ (PAGO ÚNICO)</div>

                    <div className="titleType norwester">TARIFAS</div>
                    <div className="greenBarTarifas bgGreen"></div>

                    <div id="blocksContainer" className="tarifasBonosContainer">

                        <div className="blockTarifas dinC">
                            <div className="circleTarifas txtWhite" style={{backgroundImage: `url(${Tarifa01})`}}>
                                <div className="titleTarifas">RX</div>
                                <div className="subTarifas">MAÑANAS</div>
                            </div>
                            <div className="textTarifasContainer">
                                <div className="priceTarifas txtWhite bgGreen">70€</div>
                                <div className="detailsTarifas">CLASES ILIMITADAS EN HORARIO DE MAÑANAS Y MEDIO DÍA</div>
                            </div>
                        </div>

                        <div className="blockTarifas dinC">
                            <div className="circleTarifas txtWhite" style={{backgroundImage: `url(${Tarifa02})`}}>
                                <div className="titleTarifas">RX</div>
                                <div className="subTarifas">COMPLETO</div>
                            </div>
                            <div className="textTarifasContainer">
                                <div className="priceTarifas txtWhite bgGreen">80€</div>
                                <div className="detailsTarifas">CLASES ILIMITADAS EN HORARIO DE DÍA COMPLETO</div>
                            </div>
                        </div>

                        <div className="blockTarifas dinC">
                            <div className="circleTarifas txtWhite" style={{backgroundImage: `url(${Tarifa03})`}}>
                                <div className="titleTarifas">SCALED</div>
                            </div>
                            <div className="textTarifasContainer">
                                <div className="priceTarifas txtWhite bgGreen">70€</div>
                                <div className="detailsTarifas">12 SESIONES MENSUALES - 30 DÍAS HÁBILES PARA CONSUMIRLAS</div>
                            </div>
                        </div>

                        <div className="blockTarifas dinC">
                            <div className="circleTarifas txtWhite" style={{backgroundImage: `url(${Tarifa04})`}}>
                                <div className="titleTarifas">BASIC</div>
                            </div>
                            <div className="textTarifasContainer">
                                <div className="priceTarifas txtWhite bgGreen">60€</div>
                                <div className="detailsTarifas">8 SESIONES MENSUALES - 30 DÍAS HÁBILES PARA CONSUMIRLAS</div>
                            </div>
                        </div>

                    </div>
                
                    <div className="detailsTarifas dinC">*TODAS LAS TARIFAS INCLUYEN ACCESO A CLASES DE GIMNÁSTICOS Y HALTEROFILIA</div>
                
                </div>
                
                
            
                <div id="bonosContainer" >
                    <div className="titleType norwester">BONOS</div>
                    <div className="greenBarTarifas bgGreen"></div>
                    
                    <div id="blocksBonoContainer" className="tarifasBonosContainer">

                    <div className="blockTarifas dinC">
                        <div className="circleBonos txtWhite" style={{backgroundImage: `url(${Background})`}}>
                            <div className="logoBonos" style={{backgroundImage: `url(${logoGrey})`}}>
                                <div className="titleTarifas">5</div>
                                <div className="subTarifas">SESIONES</div>
                            </div>
                        </div>
                        <div className="textTarifasContainer">
                            <div className="priceTarifas txtWhite bgGreen">50€</div>
                            <div className="detailsTarifas">BONO DE 5 SESIONES CON UN PERÍODO DE CADUCIDAD DE 60 DÍAS</div>
                        </div>
                    </div>

                    <div className="blockTarifas dinC">
                        <div className="circleBonos txtWhite" style={{backgroundImage: `url(${Background})`}}>
                            <div className="logoBonos" style={{backgroundImage: `url(${logoGrey})`}}>
                                <div className="titleTarifas">10</div>
                                <div className="subTarifas">SESIONES</div>
                            </div>
                        </div>
                        <div className="textTarifasContainer">
                            <div className="priceTarifas txtWhite bgGreen">80€</div>
                            <div className="detailsTarifas">BONO DE 10 SESIONES CON UN PERÍODO DE CADUCIDAD DE 60 DÍAS</div>
                        </div>
                    </div>

                    <div className="blockTarifas dinC">
                        <div className="circleBonos txtWhite" style={{backgroundImage: `url(${Background})`}}>
                            <div className="logoBonos" style={{backgroundImage: `url(${logoGrey})`}}>
                                <div className="titleTarifas">DROP IN</div>
                            </div>
                        </div>
                        <div className="textTarifasContainer">
                            <div className="priceTarifas txtWhite bgGreen">15€</div>
                            <div className="detailsTarifas">PASE PARA UNA SESIÓN</div>
                        </div>
                    </div>

                    </div>
                </div>

                

                <div className="discountsContainer">

                    <div className="titleType norwester">DESCUENTOS</div>
                    <div className="greenBarTarifas bgGreen"></div>

                    <div className="discountsBox">
                        <div className="discounts priceTarifas txtWhite bgGreen dinC">OFERTAS:</div>
                
                        <div className="detailsDiscounts dinC">3 MESES: 5%</div>
                        <div className="detailsDiscounts dinC">6 MESES: 10%</div>
                        <div className="detailsDiscounts dinC">12 MESES: 15%</div>
                    </div>
                </div>                
            </div>
            <Bookingtitle/>

        </section>
    )
}

export default Tarifas;