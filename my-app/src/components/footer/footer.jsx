// Footer.js
import React from 'react';
import logo from "../../images/Creaxion.png";
import './footer.css'; // Make sure this CSS file exists for styling

const Footer = () => {
    return (
        <footer className="footer" id="about">
            <img src={logo} alt="CreaXion" />
            <p className="copyright">&copy; 2024 CreaXion. All rights reserved.</p>
            <hr />
            <div className="footer-contact">
                <div className="footer-socials">
                    <p>Made by prvnX</p>
                    <a href="https://facebook.com/praveenmadushan.kahatapitiya/" target="_blank" rel="noopener noreferrer">Facebook</a> | 
                    <a href="https://linkedin.com/in/praveen-kahatapitiya-560708171/" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
                    <a href="https://instagram.com/prvn_madu/" target="_blank" rel="noopener noreferrer">Instagram</a>|
                    <a href="https://github.com/prvnX" target="_blank" rel="noopener noreferrer">Github</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
