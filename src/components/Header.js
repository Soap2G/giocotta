import React from "react";
import { Icon } from '@iconify/react';
import './Header.css'; // Make sure to create a corresponding CSS file

const Header = () => {
    return (
        <div className="header-box">
            <div className="header-nav">
                <a href="/" style={{ color: 'var(--color-text)' }}>Home</a>
                |
                <a href="/blog" style={{ color: 'var(--color-text)' }}>Blog</a>
                <a href="https://github.com/Soap2G/giocotta" target="_blank" rel="noopener noreferrer">
                    {/* <Icon icon="mdi:github" style={{ verticalAlign: 'middle' }} /> */}
                </a>
            </div>
        </div>
    );
};

export default Header;
