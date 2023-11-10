import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BurgerMenu.css";
// import { useLocomotiveScroll } from 'react-locomotive-scroll'

const BurgerMenu = ({ scrollTo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleFiestaClick = () => {
    setIsOpen(!isOpen);
    scrollTo("#fiesta-head");
  };

  // ...existing code...

  return (
    <div>
      <button className="burger-button" onClick={handleClick}>
        ☰
      </button>
      {isOpen && (
        <div className="burger-menu">
          <Link onClick={handleFiestaClick} to="#">Fiesta</Link>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;