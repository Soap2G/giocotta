import React from 'react';
// import DarkIcon from '../assets/moon.svg';
// import LightIcon from '../assets/sun.svg';
import DarkIcon from '../assets/darth-vader.png';
import LightIcon from '../assets/baby-yoda.png';

const ThemeButton = ({ onClick, flipped }) => {
    return (
        <button
            onClick={onClick}
            className="theme-switch-button"
        >
            <div className={`icon-container ${flipped ? "flipped" : ""}`}>
                <img
                    src={DarkIcon}
                    alt="Dark theme"
                    className="moon-icon"
                />
                <img
                    src={LightIcon}
                    alt="Light theme"
                    className="sun-icon"
                />
            </div>
        </button>
    )
}

export default ThemeButton;
