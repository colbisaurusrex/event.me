import axios from 'axios';

export function fetchEvents() {
  console.log('fetchEvents fired');
  return dispatch => axios.get('api/events')
    .then((response) => {
      dispatch({ type: 'EVENT FETCH SUCCESSFUL', payload: response.data });
    })
    .catch((err) => {
      dispatch({ type: 'EVENT FETCH UNSUCCESSFUL', payload: 'Could not get events' });
    });
}

export function attendEvent(eventid) {
  const headers = {
    token: window.localStorage.getItem('token'),
  };
  return dispatch => axios.post(`api/events?event_id=${eventid}`, {}, { headers })
  .then((response) => {
    dispatch({ type: 'ATTEND EVENT SUCCESSFUL', payload: response.data });
  })
  .catch((err) => {
    dispatch({ type: 'ATTEND EVENT UNSUCCESSFUL', payload: 'Could not attend event' });
  });
}

export function flakeEvent(eventid) {
  const data = {
    token: window.localStorage.getItem('token'),
  };
  console.log(data);
  console.log(eventid);
  return dispatch => axios.delete(`api/events?event_id=${eventid}`, { data })
  .then((response) => {
    dispatch({ type: 'FLAKE EVENT SUCCESSFUL', payload: response.data });
  })
  .catch((err) => {
    dispatch({ type: 'FLAKE EVENT UNSUCCESSFUL', payload: 'Could not attend event' });
  });
}

export function updateEvent(eventid) {
  const data = {
    token: window.localStorage.getItem('token'),
  };
  return dispatch => axios.patch(`api/events?event_id=${eventid}`, { data })
  .then((response) => {
    dispatch({ type: 'UPDATE EVENT SUCCESSFUL', payload: response.data });
  })
  .catch((err) => {
    dispatch({ type: 'UPDATE EVENT UNSUCCESSFUL', payload: 'Could not update event' });
  });
}
