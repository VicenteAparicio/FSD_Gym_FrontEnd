//IMPORT MOTORS
import React from 'react';
import {connect} from 'react-redux';
//IMPORT ELEMENTS
import Alllessons from '../Alllessons/alllessons';
import Allusers from '../Allusers/allusers';
import Allcoachs from '../Allcoachs/allcoachs';
import Newcoach from '../Newcoach/newcoach';

// IMPORT ACTIONS
// import { DESTINY } from '../../redux/types';
// IMPORT STYLE
import './visualization.css'


const Visualization = (props) => {


    switch(props.action){
        case "alllessons":
            return (
                <div className="vistaVisual">
                    <Alllessons/>
                </div>
            )
        case "newcoach":
            return (
                <div className="vistaVisual">
                    <Newcoach/>
                </div>
            )
        case "allusers":
            return (
                <div className="vistaVisual">
                    <Allusers/>
                </div>
            )
        case "allcoachs":
            return (
                <div className="vistaVisual">
                    <Allcoachs/>
                </div>
            )


        default:
            return (
                <div className="vistaVisual">
                    Cagando
                </div>
            )

    }

    

}

export default connect((state)=>(
    {action: state.action}
))(Visualization);