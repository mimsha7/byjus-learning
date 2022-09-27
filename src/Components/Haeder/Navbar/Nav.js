import React from 'react';
import './Nav.scss'
import logo from '../../../Resources/images/Navbar/byju_logo_header.svg'

const Nav = () => {

    return (
        
        <div className="navbar">
            <div className="navbar_icon relative">
                <img className="navbar_logo" src={logo} alt="" />
            </div>
            
            <div className="navbar_bar">
                <i className="fas fa-bars"></i>
            </div>

            <div className="navbar_menu">
                <a className="navbar_menu-link" href="/">Home</a>
                <a className="navbar_menu-link" href="/courses">Course</a>
                <a className="navbar_menu-link" href="/books">Book Store</a>
                <a className="navbar_menu-link" href="https://byjus.com/global/careers/" target="_blank" rel="noopener noreferrer">Careers</a>
                <a className="navbar_menu-link" href="https://byjus.com/global/about/" target="_blank" rel="noopener noreferrer">About us</a> 
                
                <a className="login" href="/"><i className="fa-sharp fa-solid fa-right-to-bracket"></i> Log in</a>
            </div>
            
        </div>
    );
};

export default Nav;