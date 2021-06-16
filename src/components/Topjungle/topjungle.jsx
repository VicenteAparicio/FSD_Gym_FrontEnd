// IMPORT MOTORS
import React, {useState} from 'react';
import {connect} from 'react-redux';
//IMPORT COMPONENTS
import Logofull from '../../assets/logos/logoFull.png';
import Junglelargetop from '../../assets/logos/jungleLargeTop.png';
import Rjungletop from '../Rjungletop/rjungletop';
// IMPORT STYLES
import '../../assets/fontcolors.css';
import './topjungle.css';

const Topjungle = (props) => {


    return (
        <div id="topJungle" style={{backgroundImage: `url(${Junglelargetop})`}}>
            <div id="leftJungleTop">
                <img id="logoTop" src={Logofull}  alt="Logotipo Crosstraining Valencia" title="Crosstraining Valencia"/>
            </div>
            {/* <Rjungletop id={props.id} title={props.title}/> */}
            <Rjungletop id={props.destiny.show} title={props.destiny.title}/>
        </div>
    )
}

export default connect((state)=>(
    // Este "credentials:" es el que usamos arriba para cargar los datos que le hemos pasado desde redux con state.credentials.
    {destiny:state.destiny}

))(Topjungle);