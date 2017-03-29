import { hashHistory } from 'react-router';

export default function reducer(state, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case 'USER SIGNIN SUCCESSFUL': {
      window.localStorage.setItem('token', action.payload.token);
      hashHistory.push('/dashboard');
      break;
    }
    case 'USER SIGNIN UNSUCCESSFUL': {
      console.log('YOU MAY NOT PASS GO!');
    }
  }
  return newState;
}
