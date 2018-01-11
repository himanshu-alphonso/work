import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


// Renders components if logged out, otherwise redirects to the root url
const Auth = ({ component: Component, path, loggedIn }) => (
  <Route
    path={path}
    render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )}
  />
);

Auth.propTypes = {
  component: PropTypes.any,
  path: PropTypes.any,
  loggedIn: PropTypes.any,
};


// Renders component if logged in, otherwise redirects to the login page
const Protected = ({ component: Component, path, loggedIn }) => (
  <Route
    path={path}
    render={(props) => (
      loggedIn ? (
        <Component {...props} />
    ) : (
      <Redirect to="/login" />
    )
  )}
  />
);

Protected.propTypes = {
  component: PropTypes.any,
  path: PropTypes.any,
  loggedIn: PropTypes.any,
};

// Access the Redux state to check if the user is logged in
const mapStateToProps = state => ({
  loggedIn: state.getIn(['session', 'loggedIn']),
});


// Connect Auth to the redux state
export const AuthRoute = withRouter(
  connect(
    mapStateToProps,
    null
  )(Auth));


// Connect Protected to the redux state
export const ProtectedRoute = withRouter(
  connect(
    mapStateToProps,
    null
  )(Protected));
