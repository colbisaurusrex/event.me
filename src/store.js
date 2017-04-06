import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const initialState = {
  render: {
    signForm: 'in',
  },
};
export default createStore(rootReducer, initialState, applyMiddleware(thunk, createLogger()));

