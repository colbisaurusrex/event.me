import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { hideUpdate } from '../actions/renderActions';
import { editEvent, fetchEvents, deleteEvent } from '../actions/eventActions';

const Update = (props) => {
  let title = null;
  let description = null;
  let capacity = null;
  let startDate = null;

  const updateEvent = (e) => {
    e.preventDefault();
    const updatedDetails = {
      title: title.value,
      description: description.value,
      capacity: capacity.value,
      startsAt: new Date(startDate.value).toISOString(),
      eventId: props.componentID,
    };
    props.dispatch(editEvent(updatedDetails))
    .then(() => {
      props.dispatch(hideUpdate(props.componentID));
      props.dispatch(fetchEvents());
    });
  };

  const deleteUserEvent = (e) => {
    e.preventDefault();
    props.dispatch(deleteEvent(props.event_id))
    .then(() => {
      props.dispatch(fetchEvents());
    })
    .catch(err => console.log(err));
  };
  return (
    <form action="">
      <input required type="text" placeholder={props.event_title} ref={(ref) => { title = ref; }} />
      <input required type="text" placeholder={props.event_description} ref={(ref) => { description = ref; }} />
      <input require type="number" placeholder={props.event_capacity} ref={(ref) => { capacity = ref; }} />
      <input className="widerinput" required placeholder={moment().utc().format('YYYY-MM-DDTHH:mm:ss')}type="datetime-local" ref={(ref) => { startDate = ref; }} />
      <button onClick={updateEvent}>Update Event</button>
      <button onClick={deleteUserEvent}>Delete Event</button>
    </form>
  );
};

export default connect(state => ({
  events: state.event.events,
  componentID: state.render.componentID,
}))(Update);
