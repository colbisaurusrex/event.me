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
    props.dispatch(signout())
    .then(() => {
      hashHistory.push('/');
    })
    .catch(err => console.log(err));
  };
  return (
    <div>
      {props.isFetching ? <img src={fetching} className="Loading App" alt="loading" /> :
      <div className="eventcontainer">
        <div onClick={navigateToProfile}>Your Profile</div>
        <div onClick={signUserOut}>Sign Out</div>
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
