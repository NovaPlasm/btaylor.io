import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const layoutStyle = {
  paddingTop: 20,
  paddingBottom: 20,
  position: "sticky",
  top: 0
};

const Layout = (props) => (
  <Main>
    <div style={layoutStyle}>
      <Header />
    </div>
    {props.children}
  </Main>
);

export default Layout;

const Main = styled.article`
  @media (min-width: 60.625em) {
    display: grid;
    background-color: rgba(0, 0, 0, 0.6);
    grid-template-rows: 6rem;
    grid-auto-rows: auto;
    min-height: 100vh;
    color: #fff;
  }

  @media (max-width: 60.625em) and (min-width: 30.8125em) {
    display: grid;
    background-color: rgba(0, 0, 0, 0.6);
    grid-template-rows: 13rem;
    grid-auto-rows: auto;
    min-height: 100vh;
    color: #fff;
  }

  @media (max-width: 30.75em) {
    display: grid;
    background-color: rgba(0, 0, 0, 0.6);
    grid-template-rows: 6rem;
    grid-auto-rows: auto;
    min-height: 100vh;
    color: #fff;
  }
`;