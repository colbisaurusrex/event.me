import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

import './styles/App.css';
import Landing from './components/Landing.jsx';
import About from './components/About.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Landing} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}


export default connect(null)(App);

