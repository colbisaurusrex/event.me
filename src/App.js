import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';

import './styles/index.css';
import Landing from './components/Landing.jsx';
import EventDashboard from './components/EventDashBoard.jsx';
import About from './components/About.jsx';
import Profile from './components/Profile.jsx';

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route exact path="/" component={Landing} />
        <Route path="/eventdashboard" component={EventDashboard} />
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
      </Router>
    );
  }
}


export default connect(null)(App);

