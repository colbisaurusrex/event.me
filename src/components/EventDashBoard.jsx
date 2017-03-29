import React from 'react';
import { connect } from 'react-redux';
import { renderEvents } from '../helpers/eventHelpers';

const EventDashboard = props => (
  <div className="eventcontainer">
    {renderEvents(props.events)}
  </div>
  );

export default connect(state => ({
  events: state.event.events,
}))(EventDashboard);
