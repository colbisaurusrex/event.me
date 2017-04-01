import { findEventsUserOwns, findEventsUserAttends } from '../helpers/userHelpers';

export default function reducer(state, action) {
  const newState = Object.assign({}, state);
  const userId = window.localStorage.getItem('userid');
  switch (action.type) {
    case 'EVENT FETCH SUCCESSFUL': {
      newState.events = action.payload;
      newState.userOwns = findEventsUserOwns(newState.events, userId);
      newState.userAttends = findEventsUserAttends(newState.events, userId);
      break;
    }
    case 'EVENT FETCH UNSUCCESSFUL': {
      console.log('UH OH, WE GOTS NO EVENTS');
      break;
    }

    case 'ATTEND EVENT SUCCESSFUL': {
      console.log('now attending event');
      break;
    }
    case 'ATTEND EVENT UNSUCCESSFUL': {
      console.log('UH OH, COULD NOT ATTEND THE EVENT');
      break;
    }
    case 'FLAKE EVENT SUCCESSFUL': {
      console.log('You flaked!');
      break;
    }
    case 'FLAKE EVENT UNSUCCESSFUL': {
      console.log('UH OH, you cannot flake');
      break;
    }
    case 'UPDATE EVENT SUCCESSFUL': {
      console.log('update event successful, change action ');
      break;
    }
    case 'UPDATE EVENT UNSUCCESSFUL': {
      console.log('UH OH, COULD NOT UPDATE THE EVENT');
      break;
    }
    case 'DELETE EVENT SUCCESSFUL': {
      console.log('DELETE EVENT SUCCESSFUL');
      break;
    }
    case 'DELETE EVENT UNSUCCESSFUL': {
      console.log('DELETE EVENT UNSUCCESSFUL');
      break;
    }
    case 'EVENT CREATION SUCCESSFUL': {
      console.log('EVENT CREATION SUCCESSFUL');
      break;
    }
    case 'EVENT CREATION UNSUCCESSFUL': {
      console.log('EVENT CREATION UNSUCCESSFUL');
      break;
    }
      return newState;
  }
  return newState;
}
