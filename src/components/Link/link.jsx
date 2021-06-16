import React from 'react';

import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
import { DESTINY } from '../../redux/types';
import './link.css'


const Link = (props) => {

    let history = useHistory();

    const Vamos = () => {
        if (props.llevame !== "") {
            history.push(props.to);

            let showJungle = {title: props.name, show: "hide"};

            if (props.name==="INICIO"){
                showJungle = {title: "PONTE EN FORMA CON NOSTROS", show: ""}; 
            } 
            props.dispatch({type:DESTINY,payload:showJungle});
    
            
        } else {
            history.push("/");
        }
    }

    return (
        <div className="navLinkText norwester" onClick={()=>Vamos()}>
            {props.name}
        </div>
    )

}

export default connect()(Link);