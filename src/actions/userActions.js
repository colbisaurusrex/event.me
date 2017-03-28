import axios from 'axios';

export function signin(credentials) {
  return dispatch => axios.post('api/', credentials)
    .then((response) => {
      dispatch('USER SIGNIN SUCCESSFUL');
    })
    .catch((err) => {
      dispatch('USER SIGNIN UNSUCCESSFUL');
    });
}
