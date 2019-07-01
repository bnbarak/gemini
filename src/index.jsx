import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Root from './components/Root';
import reducers from './reducers';

const store = createStore(reducers);

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root'),
);
