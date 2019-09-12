import React, { Component } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout.js'

class Resume extends Component {

  render() {
    return (
      <Layout>
        <Container>
          <h2>For an updated resume, click <a href="https://www.dropbox.com/s/myh2i6acf8omsbx/01.%20Resume.pdf?dl=0">here.</a></h2>
        </Container>
      </Layout>
    );
  }
}

export default Resume;

const Container = styled.section`
  align-self: center;
  justify-self: center;
  text-align: center;
`;