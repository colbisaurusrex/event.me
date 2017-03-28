import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import './styles/index.css';
import Store from './store';


ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('mount'),
);
