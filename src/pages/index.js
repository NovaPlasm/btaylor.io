import React, { Component } from 'react';
import Layout from '../components/Layout.js'

class Home extends Component {

  render() {
    return (
      <Layout>
        <p className="hello">Hi, I'm Beau</p>
        <p className="desc">I climb mountains and write code</p>
      </Layout>
    );
  }
}

export default Home;