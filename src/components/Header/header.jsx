import React from 'react';

import Firsttime from '../Firsttime/firsttime';
import Nav from '../Nav/nav';

import './header.css';

const Header = () => {

    return (
        <header>
            <Firsttime/>
            <Nav/>
        </header>
    )
}

export default Header;