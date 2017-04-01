import axios from 'axios';

export function signin(credentials) {
  return dispatch => axios.post('api/sigin', credentials)
    .then((response) => {
      dispatch({ type: 'USER SIGNIN SUCCESSFUL', payload: response.data });
    })
    .catch((err) => {
      dispatch({ type: 'USER SIGNIN UNSUCCESSFUL', payload: err });
    });
}

export function signup(details) {
  return dispatch => axios.post('api/signup', details)
    .then((response) => {
      dispatch({ type: 'USER SIGNUP SUCCESSFUL', payload: response.data });
    })
    .catch((err) => {
      dispatch({ type: 'USER SIGNUP UNSUCCESSFUL', payload: err });
    });
}

export function signout(details) {
  return { type: 'USER SIGN OUT', payload: 'signout' };
}

