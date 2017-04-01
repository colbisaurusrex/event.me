import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

import { fetchEvents, flakeEvent, attendEvent, deleteEvent } from '../actions/eventActions';
import { renderEvents } from '../helpers/eventHelpers';

import EventDetail from './EventDetail.jsx';
import check from '../assets/hatch_complete.svg';
import crossout from '../assets/hatch_multiply.svg';


const Event = (props) => {
  const attendHandler = (e) => {
    e.preventDefault();
    props.dispatch(attendEvent(props.id))
    .then(() => {
      props.dispatch(fetchEvents());
    });
  };

  const flakeHandler = (e) => {
    e.preventDefault();
    props.dispatch(flakeEvent(props.id))
    .then(() => {
      props.dispatch(fetchEvents());
    })
    .catch(err => console.log(err));
  };

  return (
    <div className="event">
      <section className="eventdescription">
        <p>{props.title}</p>
        <p>{props.date}</p>
        <p>Hosted by: {props.owner}</p>
        <p>{console.log('EVENT', renderEvents)}</p>
      </section>
      <section className="attend"><img onClick={attendHandler}className="eventgraphic" src={check} alt="" /></section>
      <section className="unattend"><img onClick={flakeHandler}className="eventgraphic" src={crossout} alt="" /></section>
      <EventDetail
        title={props.title}
        event_id={props.id}
        owner_id={props.owner_id}
        attending={props.attendees}
        capacity={props.capacity}
        description={props.description}
        attendeeList={props.attendeeList}
        attendeeHelperFunction={props.attendeeHelperFunction}
      />
    </div>
  );
};

export default connect(state => ({
  events: state.event.events,
  update: state.render.update,
  details: state.render.details,
  componentID: state.render.componentID,
}))(Event);

