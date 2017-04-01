import axios from 'axios';

const headers = {
  token: window.localStorage.getItem('token'),
};

export function fetchEvents() {
  return dispatch => axios.get('api/events')
    .then((response) => {
      dispatch({ type: 'EVENT FETCH SUCCESSFUL', payload: response.data });
      dispatch({ type: 'IS FETCHING IS FALSE', payload: false });
    })
    .catch((err) => {
      dispatch({ type: 'EVENT FETCH UNSUCCESSFUL', payload: 'Could not get events' });
    });
}


export function attendEvent(eventid) {
  return dispatch => axios.post(`api/events?event_id=${eventid}`, {}, { headers })
  .then((response) => {
    dispatch({ type: 'ATTEND EVENT SUCCESSFUL', payload: response.data });
  })
  .catch((err) => {
    dispatch({ type: 'ATTEND EVENT UNSUCCESSFUL', payload: 'Could not attend event' });
  });
}

export function flakeEvent(eventid) {
  return dispatch => axios({ method: 'delete', url: `api/events?event_id=${eventid}`, headers })
  .then((response) => {
    dispatch({ type: 'FLAKE EVENT SUCCESSFUL', payload: response.data });
  })
  .catch((err) => {
    dispatch({ type: 'FLAKE EVENT UNSUCCESSFUL', payload: 'Could not attend event' });
  });
}

export function editEvent(details) {
  return dispatch => axios.patch(`api/events?event_id=${details.eventId}`, details, { headers })
  .then((response) => {
    console.log('response', response);
    dispatch({ type: 'UPDATE EVENT SUCCESSFUL', payload: response.data });
  })
  .catch((err) => {
    dispatch({ type: 'UPDATE EVENT UNSUCCESSFUL', payload: 'Could not update event' });
  });
}

export function deleteEvent(eventid) {
  return dispatch => axios.delete(`api/singleevent?event_id=${eventid}`, { headers })
  .then((response) => {
    dispatch({ type: 'DELETE EVENT SUCCESSFUL', payload: response.data });
  })
  .catch((err) => {
    dispatch({ type: 'DELETE EVENT UNSUCCESSFUL', payload: err });
  });
}

export function createEvent(details) {
  return dispatch => axios.post('api/createevent', details, { headers })
  .then((response) => {
    dispatch({ type: 'EVENT CREATION SUCCESSFUL', payload: response.data });
  })
  .catch((err) => {
    dispatch({ type: 'EVENT CREATION SUCCESSFUL', payload: err });
  });
}

