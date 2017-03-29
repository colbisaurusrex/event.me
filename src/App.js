import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';

import './styles/App.css';
import Landing from './components/Landing.jsx';
import Dashboard from './components/Dashboard.jsx';
import EventDashboard from './components/EventDashBoard.jsx';
import About from './components/About.jsx';

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route exact path="/" component={Landing} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/eventdashboard" component={EventDashboard} />
        <Route path="/about" component={About} />
      </Router>
    );
  }
}


export default connect(null)(App);

