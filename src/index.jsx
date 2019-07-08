import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import Root from './Root';
import rootReducer from './reducers';

const middleware = [
  reduxThunk,
];

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(...middleware),
));

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root'),
);
