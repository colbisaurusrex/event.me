import React from 'react';
import moment from 'moment';
import Event from '../components/Event.jsx';


const renderEvents = (events, handler) => {
  const futureEvents = events.filter(event => moment(event.startsAt).isAfter(moment()));
  return futureEvents.map(event => <Event
    title={event.title}
    description={event.description}
    date={moment(event.startsAt).format('MMMM Do YYYY, h:mm a')}
    owner={event.owner.firstName}
    attendeeList={event.attendees}
    attendees={event.attendees.length}
    capacity={event.capacity}
    attendEvent={handler}
    id={event.id}
    owner_id={event.owner.id}
    attendeeHelperFunction={handler}
  />);
};

const produceAttendeeList = attendees => attendees.map(attendee => <p>{attendee.firstName} {attendee.lastname}</p>);


module.exports = {
  renderEvents,
  produceAttendeeList,
};
