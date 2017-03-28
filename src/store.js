import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

let middleware;

if (location.href.indexOf('://localhost')) {
  middleware = applyMiddleware(createLogger(), thunk);
} else {
  middleware = applyMiddleware(thunk);
}


export default createStore(rootReducer, middleware);

