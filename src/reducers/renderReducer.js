export default function reducer(state, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case 'RENDER UPDATE': {
      newState.update = true;
      newState.componentID = action.payload;
      break;
    }
    case 'HIDE UPDATE': {
      newState.update = false;
      newState.componentID = action.payload;
      break;
    }
    case 'RENDER DETAILS': {
      newState.details = true;
      newState.componentID = action.payload;
      break;
    }
    case 'RENDER SIGN UP FORM': {
      newState.signForm = action.payload;
      break;
    }
    case 'RENDER SIGN IN FORM': {
      newState.signForm = action.payload;
      break;
    }
    case 'IS FETCHING IS FALSE': {
      newState.isFetching = action.payload;
      break;
    }
    case 'IS FETCHING IS TRUE': {
      newState.isFetching = action.payload;
    }
  }
  return newState;
}
