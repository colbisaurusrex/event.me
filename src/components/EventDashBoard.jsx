import React from 'react';
import axios from 'axiso';
import { connect } from 'react-redux';

import attendEvent from '../actions/eventAcctions';
import { renderEvents } from '../helpers/eventHelpers';

const attendEvent = (e) => {
  e.preventDefault();
};

const EventDashboard = props => (
  <div className="eventcontainer">
    {renderEvents(props.events, attendEvent)}
  </div>
  );

export default connect(state => ({
  events: state.event.events,
}))(EventDashboard);
