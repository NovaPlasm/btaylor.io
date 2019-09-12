import React, { Component } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout.js';
import ContactImage from '../assets/contact2.jpg';

class Contact extends Component {

  render() {
    return (
      <Layout>
        <div className="hello">
          <ContactText>You can contact me at <a href="tel:+18057987048">805-798-7048</a> or <a href="mailto:btaylorladd@hmc.edu">btaylorladd@hmc.edu</a></ContactText>
          <Img className="contactImage" alt="contact me!" src={ContactImage} />
        </div>
      </Layout>
    );
  }
}

export default Contact;

const Img = styled.img`
  max-width: 80rem;
  border-radius: 1rem;
`;

const ContactText = styled.p`
  margin: 0 auto 1rem auto;
  a {
    text-decoration: none;
  }
`;