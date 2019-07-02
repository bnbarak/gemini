import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import AppRouter from 'Components/AppRouter';
import { Notifs } from 'redux-notifications';
import 'redux-notifications/lib/styles.css';

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <AppRouter />
      <Notifs store={store} />
    </div>
  </Provider>
);
Root.propTypes = {
  store: PropTypes.object.isRequired, /* eslint react/forbid-prop-types: 0 */
};

export default Root;
