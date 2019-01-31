import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import { Education, Experience, Projects, Skills, Contact, Home } from './pages';

class App extends Component {
  render() {
    return (
      <Router>
        <link rel="stylesheet" href="/_next/static/style.css" />
        
        <Route exact path="/" component={Home} />
        <Route path="/education" component={Education} />
        <Route path="/experience" component={Experience} />
        <Route path="/projects" component={Projects} />
        <Route path="/skills" component={Skills} />
        <Route path="/contact" component={Contact} />
      </Router>
    );
  }
}

export default App;
