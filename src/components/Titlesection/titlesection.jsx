import React from 'react';
import '../../assets/fontcolors.css';
import './titlesection.css';

const Titlesection = (props) => {

    return (
        <div className="titleBar">
            <div className="title01 txtBlack norwester">{props.title}</div>
            <div className="greenBar bgGreen"></div>
        </div>
    )
}

export default Titlesection;