import React from 'react';
import Nav from './Navbar/Nav';
import TempBar from './TempBar/TempBar';
import './Header.scss';

const Header = () => {
    return (
        <header className="headerElem">
            <TempBar />
            <Nav />
        </header>
    );
};

export default Header;