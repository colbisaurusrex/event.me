export default function reducer(state, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case 'EVENT FETCH SUCCESSFUL': {
      newState.events = action.payload;
      break;
    }
    case 'EVENT FETCH UNSUCCESSFUL': {
      console.log('UH OH, WE GOTS NO EVENTS');
    }
    case 'ATTEND EVENT SUCCESSFUL': {
      newState.events = action.payload;
    }
    case 'ATTEND EVENT UNSUCCESSFUL': {
      console.log('UH OH, COULD NOT ATTEND THE EVENT');
    }
  }
  return newState;
}
