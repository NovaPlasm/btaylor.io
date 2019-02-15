import React, { Component } from 'react';
import Layout from '../components/Layout.js';
import ContactImage from '../assets/contact_image.jpg';

class Contact extends Component {

  render() {
    return (
      <Layout>
        <div className="hello"><img className="contactImage" alt="contact me!" src={ContactImage} /></div>
        <p className="contactText">You can contact me at <a href="tel:+18057987048">805-798-7048</a> or <a href="mailto:btaylorladd@hmc.edu">btaylorladd@hmc.edu</a></p>
      </Layout>
    );
  }
}

export default Contact;