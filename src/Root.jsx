import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import AppRouter from 'Components/AppRouter';

const Root = ({ store }) => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
Root.propTypes = {
  store: PropTypes.object.isRequired, /* eslint react/forbid-prop-types: 0 */
};

export default Root;
