import React, { Component } from 'react';
import Layout from '../components/Layout.js'

class Resume extends Component {

  render() {
    return (
      <Layout>
        <p className="hello">Hi, I'm Beau Taylor-Ladd</p>
        <p className="desc">I climb mountains and write code</p>
      </Layout>
    );
  }
}

export default Resume;