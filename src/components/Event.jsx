import React from 'react';
import { connect } from 'react-redux';

import { fetchEvents, flakeEvent, attendEvent } from '../actions/eventActions';

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
        <p className="event-title">{props.title}</p>
        <p className="event-date">{props.date}</p>
        <p className="hosted-by">Hosted by: <span className="owner">{props.owner}</span></p>
      </section>
      <section className="attend"><img onClick={attendHandler}className="eventgraphic" src={check} alt="" /></section>
      <section className="unattend"><img onClick={flakeHandler}className="eventgraphic slide" src={crossout} alt="" /></section>
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

