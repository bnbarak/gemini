/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';
import { connect } from 'react-redux';
import { Router, Redirect, Route } from 'react-router-dom';
import history from 'Utils/history.util';
import Dashboard from 'Components/pages/Dashboard';
import Login from 'Components/pages/Login';
import { getIsAppReady, getIsLogin } from 'Selectors/user.selectors';
import { bootstrapApp } from 'Actions/user.actions';

const appStyle = css`
  font-family: 'Roboto', sans-serif;
`;

class AppRouter extends React.PureComponent {
  componentDidMount() {
    const { handleBootstrap } = this.props;
    handleBootstrap();
  }

  // TODO: better router
  render() {
    const { isLogin, isAppReady } = this.props;
    if (isAppReady) {
      return (
        <div css={appStyle}>
          <Router history={history}>
            <Route
              path="/dashboard"
              render={() => (isLogin ? <Dashboard /> : <Redirect to="/" />)}
            />
            <Route
              path="/"
              render={() => (isLogin ? <Redirect to="/dashboard" /> : <Login />)}
            />
          </Router>
        </div>
      );
    }

    return <div>Loading</div>; // TODO: replace with <Loader />
  }
}

const mapStateToProps = (state) => {
  const isLogin = getIsLogin(state);
  const isAppReady = getIsAppReady(state);

  return { isLogin, isAppReady };
};

const mapDispatchToProps = dispatch => ({
  handleBootstrap: () => dispatch(bootstrapApp()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppRouter);
