import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { middleware, reducers } from './config';
import localStorage, { loadState } from './config/local-storage';
import App from './components/App';

import './index.scss';

const store = createStore(reducers, loadState(), middleware);

localStorage(store);

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));
