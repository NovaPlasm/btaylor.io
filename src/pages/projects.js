import React, { Component } from 'react';
import Layout from '../components/Layout.js';

class Projects extends Component {

  render() {
    return (
      <Layout>
        <div className="informationBox">
          <h3>Algorithmic Trader | Programming Practicum | 2019-Present</h3>
          <p className="subtext"><em>Market Modelling & Machine Learning – Team of 3</em></p>
          <p className="description">Fully customizable web app based algorithmic stock and options trader reliant on market modelling and news-based machine learning. In development.</p>
          <ul className="techList">
            <li>Algorithms developed and tested using Quantopian</li>
            <li>Machine Learning via TensorFlow</li>
          </ul>
          <br />
          <br />
          <h3>AR Card Game | Programming Practicum | 2018</h3>
          <p className="subtext"><em>Role: Networking and Game Design Lead - Team of 4</em></p>
          <p className="description">Card- and turn-based RPG. When played, your cards become animated on your smart device.</p>
          <p className="description">As Networking and Game Design Lead, I was responsible for creating the main game engine as well as the communication between the smart devices</p>
          <ul className="techList">
            <li>Game Design using Unity and C#</li>
            <li>AR Using Vuforia</li>
            <li>Map Generation using Gaia</li>
            <li>Peer-to-peer connections over WiFi</li>
          </ul>
          <br />
          <br />
          <h3>Northstar | Muddhacks Hackathon | 2018</h3>
          <p className="subtext"><em>Project Lead & Image Recognition Engineer - Team of 8</em></p>
          <p className="description">A handheld device that when activated will dictate the names of all recognizable objects in its field of view.</p>
          <ul className="techList">
            <li>Developed using Python on a Raspberry Pi</li>
            <li>Image Recognition via Flask server running with TensorFlow</li>
          </ul>
          <br />
          <br />
          <h3>Nextdoor | Muddhacks Hackathon | 2017</h3>
          <p className="subtext"><em>Networking & Location Algorithm Designer - Team of 5</em></p>
          <p className="description">Door mounted LED display. Pairs with a phone app, automatically updating your location on the display every 5 minutes to let your location be known.</p>
          <ul className="techList">
            <li>Developed using C on an Arduino Uno</li>
            <li>App registration run on simple encrypted server so location isn’t compromised</li>
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