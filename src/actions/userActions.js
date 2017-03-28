import axios from 'axios';

export function signin(credentials) {
  return dispatch => axios.post('api/', credentials)
    .then((response) => {
      dispatch({ type: 'USER SIGNIN SUCCESSFUL', payload: response.data });
    })
    .catch((err) => {
      dispatch({ type: 'EVENT FETCH UNSUCCESSFUL', payload: '' });
    });
}
