import React from 'react';
import { Line } from 'react-progressbar.js';
import { connect } from 'react-redux';
import { renderUpdate } from '../actions/renderActions';


import Update from './Update.jsx';

const EventDetail = (props) => {
  const options = {
    color: '#DE5745',
    trailWidth: 1,
    strokeWidth: 10,
  };
  const containerStyle = {
    width: '100px',
    height: '20px',
  };

  return (
    <div className=" bottom  hidden" >
      <p>Attendance</p>
      <div className="progressbar">
        <Line progress={(props.attending / props.capacity)} containerStyle={containerStyle} initialAnimate options={options} containerClassName={'.progressbar'} />
        <span>{props.attending}</span><span>/</span><span> {props.capacity}</span>
      </div>
      <ul className="attendee-list">{props.attendeeHelperFunction(props.attendeeList)}</ul>
      <p>Description:</p>
      {props.description === '___' ? <p>The owner did not provide a description. So mysterious</p> : <p>{props.description}</p>}
      {window.localStorage.getItem('userid') === props.owner_id ?
        <div>
          <Update
            event_title={props.title}
            event_description={props.description}
            event_capacity={props.capacity}
            event_id={props.event_id}
          />
        </div>
        : null}
    </div>
  );
};

export default connect(state => ({
  events: state.event.events,
  componentID: state.render.componentID,
}))(EventDetail);
