import React from 'react';
import { connect } from 'react-redux';
import check from '../assets/hatch_complete.svg';
import crossout from '../assets/hatch_multiply.svg';

const Event = props => (
  <div className="event">
    <section className="eventdescription">
      <p>{props.title}</p>
      <p>{props.description}</p>
      <p>{props.date}</p>
      <p>{props.owner}</p>
      <p>{props.attendees}</p>
      <p>{props.capacity}</p>
      <p>Attend / unattend</p>
    </section>
    <section className="attend"><img onClick={props.attendEvent}className="eventgraphic" src={check} alt="" /></section>
    <section className="unattend"><img className="eventgraphic" src={crossout} alt="" /></section>
  </div>
  );

export default connect(state => ({
  events: state.event.events,
}))(Event);

