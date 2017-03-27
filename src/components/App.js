import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';  

import './App.css';
import Landing from './Landing.jsx';  
import About from './About.jsx';  

class App extends Component {
  render() {
    return (
      <Router>  
        <div className="App">
          <Route exact path="/" component={Landing}/>
          <Route path="/about"  component={About}/>
        </div>
      </Router>
    );
  }
}

export default App;

