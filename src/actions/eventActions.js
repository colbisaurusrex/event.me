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

export function attendEvent() {
  return dispatch => axios.post('api/events')
  .then((response) => {
    dispatch({ type: 'ATTEND EVENT SUCCESSFUL', payload: response.data });
  })
  .catch((err) => {
    dispatch({ type: 'ATTEND EVENT UNSUCCESSFUL', payload: 'Could not attend event' });
  });
}
