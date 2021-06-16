import React from 'react';
import Navigatebar from '../Navigatebar/navigatebar';
import Logoheader from '../Logoheader/logoheader';
import './nav.css';

const Nav = () => {
    return (
        <nav>
            <Logoheader/>
            <Navigatebar/>
        </nav>
    )
}

export default Nav;