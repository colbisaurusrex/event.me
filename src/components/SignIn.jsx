import React from 'react';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { signin } from '../actions/userActions';
import { fetchEvents } from '../actions/eventActions';
import { renderSignUpForm, isFetching } from '../actions/renderActions';

const SignIn = (props) => {
  let emailInput = null;
  let passwordInput = null;

  const signInHandler = (e) => {
    e.preventDefault();
    props.dispatch(signin({
      email: emailInput.value,
      password: passwordInput.value,
    }))
    .then(() => {
      props.dispatch(isFetching());
      props.dispatch(fetchEvents());
      hashHistory.push('/eventdashboard');
    })
    .catch(err => console.log(err));
  };

  const renderSignUp = (e) => {
    e.preventDefault();
    props.dispatch(renderSignUpForm())
    .catch(err => console.log(err));
  };

  return (
    <div>
      <h1 className="experiment">Sign In</h1>
      <form action="#" onSubmit={signInHandler}>
        <div>
          <input
            required
            placeholder="Email"
            type="email"
            ref={(ref) => { emailInput = ref; }}
          />
        </div>
        <div>
          <input
            required
            placeholder="Password"
            type="password"
            ref={(ref) => { passwordInput = ref; }}
          />
        </div>
        <button type="submit">Sign In </button>
      </form>
      <h2>No Account? <span onClick={renderSignUp}>Sign up</span></h2>
    </div>
  );
};

export default connect(state => ({
  signForm: state.render.signForm,
}))(SignIn);

