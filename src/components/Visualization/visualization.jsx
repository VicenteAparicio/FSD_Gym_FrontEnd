//IMPORT MOTORS
import React from 'react';
import {connect} from 'react-redux';
//IMPORT ELEMENTS
import Alllessons from '../../containers/Alllessons/alllessons';
import Allusers from '../../components/Allusers/allusers';
import Newcoach from '../../containers/Newcoach/newcoach';

// IMPORT ACTIONS
import { DESTINY } from '../../redux/types';
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
        default:
            return (
                <div className="vistaVisual">
                    <Allusers/>
                </div>
            )

    }

    

}

export default connect((state)=>(
    {action: state.action}
))(Visualization);