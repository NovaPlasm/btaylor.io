import React, { Component } from 'react';
import Layout from '../components/Layout.js';
import './home.scss';

class Home extends Component {

  render() {
    return (
      <Layout>
        <div>
          <h2 className="hello">Hi, I'm Beau Taylor-Ladd</h2>
          <p className="desc">I climb mountains and write code</p>
        </div>
      </Layout>
    );
  }
};

export default Home;