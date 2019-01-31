import React, { Component } from 'react';
import Layout from '../components/Layout.js';

class Projects extends Component {

  render() {
    return (
      <Layout>
        <div className="projectBox">
          <h3>AR Card Game | 2018-Present</h3>
          <p className="subtext"><em>Role: Networking and Game Design - Team of 4</em></p>
          <p className="description">Heroes vs Demon lord card game.  When played, cards become animated and displayed on the board through your smart device</p>
          <ul className="techList">
            <li>Game Design using Unity and C#</li>
            <li>AR Using Vuforia</li>
            <li>Map Generation using Gaia</li>
            <li>Peer-to-peer connections over WiFi</li>
          </ul>
          <br />
          <br />
          <h3>Campus Chaos | 2017-Present</h3>
          <p className="subtext"><em>Role: Solo</em></p>
          <p className="description">A real-world location-based tower defense game, pitting player against player in a fight to take control of their college campus</p>
          <ul className="techList">
            <li>Game Design using Android Studio and Java</li>
            <li>Peer-to-peer connections over WiFi</li>
          </ul>
          <br />
          <br />
          <h3>DYDWork | 2017</h3>
          <p className="subtext"><em>Role: Solo</em></p>
          <p className="description">A smart virtual assistant for automatically scheduling your day.  Input projected work and time spent on each assignment, and it will produce the most time-efficient schedule</p>
          <ul className="techList">
            <li>Program made using Java</li>
          </ul>
          <br />
          <br />
          <h3>Smaller Projects</h3>
          <p className="description2">A Snake game using a custom Breadth-First Search algorithm</p>
          <ul className="techList2">
            <li>Program made using Java</li>
          </ul>
          <p className="description2">An image seam-carver which removes the least 'important' pixels from an image, effectively reducing it in size</p>
          <ul className="techList2">
            <li>Program made using Java</li>
          </ul>
          <p className="description2">Re-creation of the 'mastermind' board game</p>
          <ul className="techList2">
            <li>Program made using Python</li>
          </ul>
        </div>
      </Layout>
    );
  }
}

export default Projects;