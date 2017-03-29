import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { fetchEvents } from '../actions/eventActions';

const Dashboard = ({ dispatch }) => {
  const navigateToEvents = (e) => {
    e.preventDefault();
    dispatch(fetchEvents())
    .then(() => hashHistory.push('/eventDashboard'))
    .catch(err => console.log(err));
  };
  return (
    <div>
      <div onClick={navigateToEvents}>Events</div>
      <div>Your Profile</div>
    </div>
  );
};

export default connect(state => ({
  events: state.event.events,
}))(Dashboard);
