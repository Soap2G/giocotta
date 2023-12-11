import React from "react";
import './Header.css'; // Make sure to create a corresponding CSS file
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header-box">
            <div className="header-nav">
                <Link
                    className="nav-link active"
                    style={{ 
                        fontFamily: "'Bellefair', serif",
                        fontWeight: "400",
                        color: 'var(--text-color)'}}
                    aria-current="page"
                    to="/"
                    >
                        home
                </Link>
                |
                <Link
                    className="nav-link active"
                    style={{ 
                        fontFamily: "'Bellefair', serif",
                        fontWeight: "400",
                        color: 'var(--text-color)'}}
                    aria-current="page"
                    to="/blog"
                    >
                        diario
                </Link>
            </div>
        </div>
    );
};

export default Header;
