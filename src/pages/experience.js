import React, { Component } from 'react';
import Layout from '../components/Layout.js';

class Experience extends Component {

  render() {
    return (
      <Layout>
        <div className="experienceBox">
          <h3>Developer Intern | <a href="www.cbtnuggets.com">CBT Nuggets</a> | May 2018 - Present</h3>
          <p className="description">Full-stack developer responsible for implementing a new content platform for CBT Nuggets.  Daily responsibilities included web development using ReactJS, email template optimization for all modern and highly used clients, and development of web landers used at the Society for Human Resource Management Conference</p>
          <br />
          <br />
          <h3>Computer Information Services Intern | <a href="https://www.hmc.edu/cis/">Harvey Mudd College</a> | Sept 2017-Present</h3>
          <p className="description">Responsible for creating the asset management program used by Harvey Mudd College, as well as streamlining the printer reporting functionality used by the college</p>
          <br />
          <br />
          <h3>Research Intern | University of Oregon | 2015</h3>
          <p className="description">Worked with Dr. Michael Kinsey, Ph.D. from MIT in Electrical Engineering and Computer Science, using miniature robots in order to simulate the spread of diseases.</p>
          <br />
          <br />
          <h3>Freelance Programmer | UPS | 2015</h3>
          <p className="description">Developed a program for a local UPS store that documents in-store computer time usage and generates a corresponding invoice</p>
        </div>
      </Layout>
    );
  }
}

export default Experience;