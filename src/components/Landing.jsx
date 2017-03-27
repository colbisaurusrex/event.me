import React from 'react';
import logo from '../assets/hatch_attend.svg';

const Landing = () => {
  let emailInput = null;
  let passwordInput = null;
  return (
    <div className="App">
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Events.me</h2>
      </div>
      <h1 className="experiment">Sign In</h1>
      <form onSubmit={example}>
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
            type="text"
            ref={(ref) => { passwordInput = ref; }}
          />
        </div>
        <button />
      </form>
      <h2>No Account? Sign up</h2>
    </div>
  );
};

export default Landing;
