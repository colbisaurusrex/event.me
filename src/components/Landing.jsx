import React from 'react';
import { connect } from 'react-redux';
import { signin } from '../actions/userActions';
import { fetchEvents } from '../actions/eventActions';

import logo from '../assets/hatch_attend.svg';


const Landing = ({ dispatch }) => {
  let emailInput = null;
  let passwordInput = null;

  const signInHandler = (e) => {
    e.preventDefault();
    dispatch(signin({
      email: emailInput.value,
      password: passwordInput.value,
    }))
    .then(() => {
      dispatch(fetchEvents());
    })
    .catch(err => console.log(err));
  };

  return (
    <div className="App">
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Events.me</h2>
      </div>
      <h1 className="experiment">Sign In</h1>
      <form action="#" onSubmit={signInHandler}>
        <div>
          <input
            required
            type="email"
            ref={(ref) => { emailInput = ref; }}
          />
        </div>
        <div>
          <input
            required
            type="password"
            ref={(ref) => { passwordInput = ref; }}
          />
        </div>
        <button type="submit">Sign In </button>
      </form>
      <h2>No Account? Sign up</h2>
    </div>
  );
};

export default connect(null)(Landing);
