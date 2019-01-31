import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.scss';

const Header = () => (
    <div className="headerGrid">
        <title>Beau Taylor-Ladd's Resume</title>
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
        <span></span>
        <Link to="/" className="buttonStyle">
          Home
        </Link>
        <Link to="/skills" className="buttonStyle">
          Skills
        </Link>
        <Link to="/projects" className="buttonStyle">
          Projects
        </Link>
        <span></span>
        <span></span>
        <Link to="/education" className="buttonStyle">
          Education
        </Link>
        <Link to="/experience" className="buttonStyle">
          Experience
        </Link>
        <Link to="/contact" className="buttonStyle">
          Contact Me
        </Link>
        <span></span>
    </div>
)

export default Header