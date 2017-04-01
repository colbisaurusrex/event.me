import React from 'react';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { signup } from '../actions/userActions';
import { fetchEvents } from '../actions/eventActions';
import { renderSignInForm, isFetching } from '../actions/renderActions';

const SignUp = (props) => {
  let firstNameInput = null;
  let lastNameInput = null;
  let emailInput = null;
  let passwordInput = null;

  const signUpHandler = (e) => {
    e.preventDefault();
    props.dispatch(signup({
      firstName: firstNameInput.value,
      lastName: lastNameInput.value,
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

  const renderSignIn = (e) => {
    e.preventDefault();
    props.dispatch(renderSignInForm());
  };

  return (
    <div>
      <h1 className="experiment">Sign Up</h1>
      <form action="#" onSubmit={signUpHandler}>
        <div>
          <input
            required
            placeholder="First Name"
            type="text"
            ref={(ref) => { firstNameInput = ref; }}
          />
        </div>
        <div>
          <input
            required
            placeholder="Last Name"
            type="text"
            ref={(ref) => { lastNameInput = ref; }}
          />
        </div>
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
        <button type="submit">Sign Up </button>
      </form>
      <h2>Already have an account? <span onClick={renderSignIn}>Sign In</span></h2>
    </div>
  );
};

export default connect(state => ({
  signForm: state.render.signForm,
  isFetching: state.render.isFetching,
}))(SignUp);
