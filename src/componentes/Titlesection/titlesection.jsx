import React from 'react';
import '../../assets/fontcolors.css';
import './titlesection.css';

const Titlesection = (props) => {

    return (
        <div class="titleBar">
            <div class="title01 txtBlack norwester">{props.title}</div>
            <div class="greenBar bgGreen"></div>
        </div>
    )
}

export default Titlesection;