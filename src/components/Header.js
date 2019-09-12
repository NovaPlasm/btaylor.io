import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => (
    <div className="headerGrid">
        <span></span>
        <Link to="/" className="buttonStyle">
          Home
        </Link>
        <Link to="/projects" className="buttonStyle">
          Projects
        </Link>
        <Link to="/resume" className="buttonStyle">
          Resume
        </Link>
        <Link to="/contact" className="buttonStyle">
          Contact Me
        </Link>
        <span></span>
    </div>
);

export default Header;