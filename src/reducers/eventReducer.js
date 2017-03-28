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
  }
  return newState;
}
