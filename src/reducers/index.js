import { combineReducers } from 'redux';
import user from './userReducer';
import event from './eventReducer';

const appReducer = combineReducers({
  user,
  event,
});
export default appReducer;
