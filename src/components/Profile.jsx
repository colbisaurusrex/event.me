import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { renderEvents, produceAttendeeList } from '../helpers/eventHelpers';
import { signout } from '../actions/userActions';

import CreateEvent from './CreateEvent.jsx';

const Profile = (props) => {
  const signUserOut = (e) => {
    e.preventDefault();
    props.dispatch(signout());
    hashHistory.push('/');
  };
  return (
    <div>
      <div>
        <div onClick={signUserOut}>Sign Out</div>
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
