import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { renderEvents, produceAttendeeList } from '../helpers/eventHelpers';
import { signout } from '../actions/userActions';

import CreateEvent from './CreateEvent.jsx';

const Profile = (props) => {
  const navigateToProfile = (e) => {
    e.preventDefault();
    hashHistory.push('/profile');
  };
  const signUserOut = (e) => {
    e.preventDefault();
    props.dispatch(signout());
    hashHistory.push('/');
  };
  const navigateToDashBoard = (e) => {
    e.preventDefault();
    hashHistory.push('/eventda shboard');
  };
  return (
    <div>
      <div>
        <div className="nav">
          <span className="leftnavitem navitem" onClick={navigateToProfile}>Your Profile</span>
          <span className="navitem" onClick={signUserOut}>Sign Out</span>
          <span className="navitem" onClick={navigateToDashBoard}>Event Dashboard</span>
        </div>
        <div>Create an Event</div>
        <CreateEvent />
        <h1>Events You Own</h1>
        <div>{renderEvents(props.userOwns, produceAttendeeList)}</div>
      </div>
      <div>
        <h1>Events You Are Attending</h1>
        <div>{renderEvents(props.userAttends, produceAttendeeList)}</div>
      </div>
    </div>
  );
};


export default connect(state => ({
  userOwns: state.event.userOwns,
  userAttends: state.event.userAttends,
}))(Profile);
