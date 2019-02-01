import React, { Component } from 'react';
import Layout from '../components/Layout.js';
import JSImage from '../assets/skills/javascript.png';
import JavaImage from '../assets/skills/java.png';
import HTMLImage from '../assets/skills/html5.png';
import SassImage from '../assets/skills/scss.svg';
import CPPImage from '../assets/skills/cpp.png';
import CSImage from '../assets/skills/cs.png';
import PythonImage from '../assets/skills/python.png';
import PHPImage from '../assets/skills/php.png';
import ReactImage from '../assets/skills/react.png';
import NodeImage from '../assets/skills/node.svg';
import MongoImage from '../assets/skills/mongodb.png';
import MavenImage from '../assets/skills/maven.svg';
import GithubImage from '../assets/skills/github.svg';
import IntellijImage from '../assets/skills/intellij.png';
import EclipseImage from '../assets/skills/eclipse.svg';
import AEMImage from '../assets/skills/aem.png';

class Skills extends Component {

  render() {
    return (
      <Layout>
        <p className="hello">Programming Langages</p>
        <div className="hello">
          <img width="142px" alt="" src={JSImage} />
          <img width="142px" alt="" src={JavaImage} />
          <img width="142px" alt="" src={HTMLImage} />
          <img width="142px" alt="" src={SassImage} />
          <img width="142px" alt="" src={CPPImage} />
          <img width="142px" alt="" src={CSImage} />
          <img width="142px" alt="" src={PythonImage} />
          <img width="142px" alt="" src={PHPImage} />
        </div>
        <p className="desc" style={{fontSize:45, alignSelf: "end", margin: 0}}>Tools</p>
        <div className="desc">
          <img width="142px" alt="" src={ReactImage}/>
          <img width="142px" alt="" src={NodeImage} />
          <img width="142px" alt="" src={MongoImage} />
          <img width="142px" alt="" src={MavenImage} />
          <img width="142px" alt="" style={{filter: "invert(100%)"}} src={GithubImage} />
          <img width="142px" alt="" src={IntellijImage} />
          <img width="142px" alt="" src={EclipseImage} />
          <img width="142px" alt="" src={AEMImage} />
        </div>
        <span></span>
      </Layout>
    );
  }
}

export default Skills;