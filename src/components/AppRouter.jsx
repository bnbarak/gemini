import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import history from 'Utils/history';
import Dashboard from 'Components/pages/Dashboard';
import Login from 'Components/pages/Login';
import { getIsLogin } from 'Selectors/user.selectors';

class AppRouter extends React.PureComponent {
  render() {
    const { isLogin } = this.props;

    return (
      <Router history={history}>
        <Route
          path="/dashboard"
          render={() => (
            isLogin
              ? <Dashboard />
              : <Redirect to="/login" />
          )}
        />
        <Route
          path="/login"
          render={() => (
            isLogin
              ? <Redirect to="/dashboard" />
              : <Login />
          )}
        />
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  const isLogin = getIsLogin(state);
  return { isLogin };
};
export default connect(mapStateToProps, null)(AppRouter);
