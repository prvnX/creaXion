import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import image from '../images/Creaxion.png'
import LanguageToggle from './toggle/LanguageToggle';
import { useRef } from 'react';

const Navbar = ({ toggleLang }) => {

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <NavLink to="#home" className="navbar-logo"><img src={image} alt='images'/></NavLink>
                <ul className="navbar-menu">
                    <li><a href="#home" className="nav-link">Home</a></li>
                    <li><a href="#about" className="nav-link">About Us</a></li>
                </ul>
                <LanguageToggle toggleLang={toggleLang} />
            </div>
        </nav>
    );
};

export default Navbar;
