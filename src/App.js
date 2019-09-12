import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './pages/home';
import Projects from './pages/projects';
import Resume from './pages/resume';
import Contact from './pages/contact';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    );
  }

  componentDidMount(){
    document.title = "Beau's Resume";
  }
}

export default App;
