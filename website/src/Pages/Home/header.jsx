import React from "react";
import './css/header.css';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  return (
    <header className="header">
      <div className="header__image-container">
        <img src="bg.avif" alt="Header Image" className="header__image" />
      </div>
      <div className="header__content">
        <h1 style={{ color: 'rgb(255, 166, 0)' }}>" Code Your Way to Success "</h1>
        <p>Crack top companies through our courses,<br /> success begins with every line of code.</p>
        <ScrollLink to="skills" smooth={true} duration={500}>
          <button>Know More</button>
        </ScrollLink>
      </div>
    </header>
  );
}

export default Header;
