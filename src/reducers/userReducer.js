export default function reducer(state, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case 'USER SIGNIN SUCCESSFUL': {
      window.localStorage.setItem('token', action.payload.token);
      window.localStorage.setItem('userid', action.payload.user_id);
      break;
    }
    case 'USER SIGNIN UNSUCCESSFUL': {
      console.log('YOU MAY NOT PASS GO!');
      break;
    }
    case 'USER SIGNUP SUCCESSFUL': {
      window.localStorage.setItem('token', action.payload.token);
      window.localStorage.setItem('userid', action.payload.user_id);
      break;
    }
    case 'USER SIGNUP UNSUCCESSFUL': {
      console.log('UH OH, SIGN UP DID NOT HAPPEN!');
      break;
    }
    case 'USER SIGN OUT': {
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('userid');
      break;
    }
  }
  return newState;
}
