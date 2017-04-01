import React from 'react';
import { connect } from 'react-redux';

import SignIn from './SignIn.jsx';
import SignUp from './SignUp.jsx';
import Footer from './Footer.jsx';
import logo from '../assets/hatch_attend.svg';

const Landing = props => (
  <div className="App">
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Events.me</h2>
    </div>
    { props.signForm === 'in' ? <SignIn /> : <SignUp />}
    <Footer />
  </div>
  );

export default connect(state => ({
  signForm: state.render.signForm,
}))(Landing);
