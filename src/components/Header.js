import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => (
    <HeaderGrid>
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
    </HeaderGrid>
);

export default Header;

const HeaderGrid = styled.nav`
  display: grid;
  grid-template-columns: 1fr auto auto auto auto 1fr;
  
  .buttonStyle {
    border: .2rem solid #fff;
    border-radius: 16px;
    padding: .7rem 1rem .7rem 1rem;
    text-decoration: none;
    color: #fff;
    margin: 0 .8rem 0 .8rem;
    min-width: 11.8rem;
    text-align: center;
  }
`;