export function renderDetails(data) {
  console.log('renderDetials action fired');
  return { type: 'RENDER DETAILS', payload: data };
}

export function renderUpdate(data) {
  return { type: 'RENDER UPDATE', payload: data };
}

export function hideUpdate(data) {
  return { type: 'HIDE UPDATE', payload: data };
}

export function renderSignUpForm() {
  return { type: 'RENDER SIGN UP FORM', payload: 'up' };
}

export function renderSignInForm() {
  return { type: 'RENDER SIGN IN FORM', payload: 'in' };
}

export function isFetching() {
  return { type: 'IS FETCHING IS TRUE', payload: true };
}

