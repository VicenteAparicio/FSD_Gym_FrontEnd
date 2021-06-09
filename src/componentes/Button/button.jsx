import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import './button.css'


const Button = (props) => {

    let history = useHistory();



    const Vamos = () => {
        if (props.llevame !== "") {
            history.push(props.llevame);
        } else {
            history.push("/");
        }
    }

    return (
        <div className="button" onClick={()=>Vamos()}>
            Click
        </div>
    )

}

export default Button;