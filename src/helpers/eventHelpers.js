import React from 'react';
import moment from 'moment';
import Event from '../components/Event.jsx';


const renderEvents = (events, handler) => events.map(event =>
  <Event
    title={event.title}
    description={event.description}
    date={moment(event.startsAt).format('MMMM Do YYYY, h:mm a')}
    owner={event.owner.firstName}
    attendees={event.attendees.length}
    capacity={event.capacity}
    attendEvent={handler}
    id={event.id}
  />,
);

module.exports = {
  renderEvents,
};
