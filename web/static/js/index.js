import React from 'react';
import { render } from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App';
import todoApp from './components/Todo/reducers';
import {configureChannel} from './channel';

const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware, // lets us dispatch() functions
  loggerMiddleware
)(createStore);

const store = createStoreWithMiddleware(todoApp);
configureChannel(store);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);