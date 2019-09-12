import React, { Component } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout.js';

class Home extends Component {

  render() {
    return (
      <Layout>
        <Container>
          <h2>Hi, I'm Beau Taylor-Ladd</h2>
          <p>I climb mountains and write code</p>
        </Container>
      </Layout>
    );
  }
};

export default Home;

const Container = styled.section`
  @keyframes fadein-immediate {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes fadein-delay {
    0% { opacity:0; }
    33% { opacity:0; }
    100% { opacity:1; }
  }

  align-self: center;
  justify-self: center;
  text-align: center;

  h2 {
    animation-fill-mode: both;
    animation: fadein-immediate 2s;
  }

  p {
    animation-fill-mode: both;
    animation: fadein-delay 4s;
  }
`;