import React from "react";
import './navbar.css';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <h2> L Programming</h2>
      </div>
      <div className="navbar__right">
        <ul>
          <li><ScrollLink  to="skills" smooth={true} duration={500}>About</ScrollLink ></li>
          <li><ScrollLink  to="course" spy={true} offset={-120} smooth={true} duration={500}>Latest</ScrollLink ></li>
          <li><Link to="/notes" smooth={true} duration={500}>Notes</Link></li>
          <li><ScrollLink  to="contact" spy={true} offset={-120} smooth={true} duration={500}>Contact</ScrollLink ></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
