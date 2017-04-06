import { combineReducers } from 'redux';
import user from './userReducer';
import event from './eventReducer';
import render from './renderReducer';

const appReducer = combineReducers({
  user,
  event,
  render,
});
export default appReducer;
