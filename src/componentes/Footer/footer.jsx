import React from 'react';

import Footertop from '../Footertop/footertop';
import Footermiddle from '../Footermiddle/footermiddle';
import Footerbottom from '../Footerbottom/footerbottom';

import './footer.css';

const Footer = () => {
    return (
        <footer>
            <Footertop/>
            <Footermiddle/>
            <Footerbottom/>
        </footer>
    )
}

export default Footer;