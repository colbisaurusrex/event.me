import axios from 'axios';

export function fetchEvents() {
  return dispatch => axios.get('api/events')
    .then((response) => {
      dispatch({ type: 'EVENT FETCH SUCCESSFUL', payload: response.data });
    })
    .catch((err) => {
      dispatch({ type: 'EVENT FETCH UNSUCCESSFUL', payload: 'Could not get events' });
    });
}
