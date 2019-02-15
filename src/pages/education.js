import React, { Component } from 'react';
import Layout from '../components/Layout.js';

class Education extends Component {

  render() {
    return (
      <Layout>
        <div className="informationBox">
          <h3>Harvey Mudd College | Bachelor | 2021</h3>
          <p className="subtext"><em>Computer Science, Minor: Economics</em></p>
          <p className="description">Courses (In Progress):</p>
          <ul className="courseList">
            <li>Computability and Logic</li>
            <li>Computer Graphics</li>
            <li>Programming Practicum</li>
            <li>Principles of Economic Analysis</li>
          </ul>
          <p className="description">Completed:</p>
          <ul className="courseList">
            <li>Principles & Practice: Computer Science</li>
            <li>Engineering of Autonomous Vehicles</li>
            <li>Programming Practicum</li>
            <li>Data Structures & Program Development</li>
            <li>Discrete Math</li>
            <li>Financial Economics</li>
          </ul>
        </div>
      </Layout>
    );
  }
}

export default Education;