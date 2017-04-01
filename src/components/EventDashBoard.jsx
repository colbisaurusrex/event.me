import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { renderEvents, produceAttendeeList } from '../helpers/eventHelpers';
import { signout } from '../actions/userActions';
import CreateEvent from './CreateEvent.jsx';
import fetching from '../assets/hatch_navigate.svg';

const EventDashboard = (props) => {
  const navigateToProfile = (e) => {
    e.preventDefault();
    hashHistory.push('/profile');
  };
  const signUserOut = (e) => {
    e.preventDefault();
    props.dispatch(signout());
    hashHistory.push('/');
  };
  return (
    <div>
      {props.isFetching ? <img src={fetching} className="Loading App" alt="loading" /> :
      <div className="eventcontainer">
        <div className="nav">
          <span className="leftnavitem navitem" onClick={navigateToProfile}>Your Profile</span>
          <span className="navitem" onClick={signUserOut}>Sign Out</span>
        </div>
        <CreateEvent />
        {renderEvents(props.events, produceAttendeeList)}
      </div>
      }
    </div>
  );
};

export default connect(state => ({
  events: state.event.events,
  isFetching: state.render.isFetching,
}))(EventDashboard);
