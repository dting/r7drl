import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { middleware, reducers } from './config';
import App from './containers/App';

import './index.scss';

const store = createStore(reducers, middleware);

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));
