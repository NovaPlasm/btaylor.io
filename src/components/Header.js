import React from 'react';
import Link from 'react-router-dom';

const Header = () => (
    <div className="headerGrid">
        <title>Beau Taylor-Ladd's Resume</title>
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
        <span></span>
        <Link href="/" className="buttonStyle">
          Home
        </Link>
        <Link href="/skills" className="buttonStyle">
          Skills
        </Link>
        <Link href="/projects" className="buttonStyle">
          Projects
        </Link>
        <span></span>
        <span></span>
        <Link href="/education" className="buttonStyle">
          Education
        </Link>
        <Link href="/experience" className="buttonStyle">
          Experience
        </Link>
        <Link href="/contact" className="buttonStyle">
          Contact Me
        </Link>
        <span></span>
    </div>
)

export default Header