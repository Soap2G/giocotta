import React from "react";
import { Icon } from '@iconify/react';
import './Footer.css'
 
const Footer = () => {
    return (
        <div className="box">
                <div className="footer-div">
                    Fatto da noi con il <Icon icon="solar:heart-bold" style={{ color: '#e63f34' }}/> e con <Icon style={{ borderRadius: "50%" }} icon="skill-icons:react-dark" />
                </div>
                <div className="footer-case">
                    Fatti un giro sul nostro <a style={{ color: 'var(--color-text)' }} href="https://github.com/Soap2G/giocotta" target="_blank" rel="noopener noreferrer"><Icon style={{ verticalAlign: 'middle' }} icon="mdi:github" /></a>
                </div>
        </div>
    );
};
export default Footer;