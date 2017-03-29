export default function reducer(state, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case 'EVENT FETCH SUCCESSFUL': {
      console.log('fetch events SUCCESSFUL');
      newState.events = action.payload;
      break;
    }
    case 'EVENT FETCH UNSUCCESSFUL': {
      console.log('UH OH, WE GOTS NO EVENTS');
    }
    case 'ATTEND EVENT SUCCESSFUL': {
      console.log('now attending event');
    }
    case 'ATTEND EVENT UNSUCCESSFUL': {
      console.log('UH OH, COULD NOT ATTEND THE EVENT');
    }
    case 'FLAKE EVENT SUCCESSFUL': {
       console.log('You flaked!');
     }
    case 'FLAKE EVENT UNSUCCESSFUL': {
      console.log('UH OH, you cannot flake');
    }
    case 'UPDATE EVENT SUCCESSFUL': {
      console.log('update event successful, change action ');
    }
    case 'ATTEND EVENT UNSUCCESSFUL': {
      console.log('UH OH, COULD NOT UPDATE THE EVENT');
    }
  }
  return newState;
}
