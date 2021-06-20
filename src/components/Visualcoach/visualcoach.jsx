//IMPORT MOTORS
import React from 'react';
import {connect} from 'react-redux';
//IMPORT ELEMENTS

import Coachlessons from '../Coachlessons/coachlessons';
import Newlesson from '../Newlesson/newlesson';

// IMPORT ACTIONS
// import { DESTINY } from '../../redux/types';
// IMPORT STYLE
import './visualcoach.css'


const Visualcoach = (props) => {


    switch(props.action){

        case "coachlessons":
            return (
                <div className="vistaVisual">
                    <Coachlessons/>
                </div>
            )
        case "newlesson":
            return (
                <div className="vistaVisual">
                    <Newlesson/>
                </div>
            )


        default:
            return (
                <div className="vistaVisual">
                    
                </div>
            )

    }

    

}

export default connect((state)=>(
    {action: state.action}
))(Visualcoach);