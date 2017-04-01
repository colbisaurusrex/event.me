import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { createEvent, fetchEvents } from '../actions/eventActions';

const CreateEvent = (props) => {
  let title = null;
  let description = null;
  let capacity = null;
  let startDate = null;

  const createHandler = (e) => {
    e.preventDefault();
    const eventDetails = {
      title: title.value,
      description: description.value,
      capacity: capacity.value,
      startsAt: new Date(startDate.value).toISOString(),
    };
    props.dispatch(createEvent(eventDetails))
    .then(() => {
      props.dispatch(fetchEvents());
    })
    .catch(err => console.log(err));

    title.value = '';
    description.value = '';
    capacity.value = '';
    startDate.value = '';
  };

  return (
    <form action="" onSubmit={createHandler}>
      <input required placeholder="Name the event.." type="text" ref={(ref) => { title = ref; }} />
      <input required placeholder="..and give it a description" type="text" ref={(ref) => { description = ref; }} />
      <input required placeholder="How many folks can come?" type="number" ref={(ref) => { capacity = ref; }} />
      <input
        required
        type="datetime-local"
        ref={(ref) => { startDate = ref; }}
      />
      <button className="shake-horizontal" type="submit">Create Event</button>
    </form>
  );
};


export default connect(state => ({
  events: state.event.events,
}))(CreateEvent);
