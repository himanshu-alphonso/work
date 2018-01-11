import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import { RESTART_ON_REMOUNT } from 'utils/constants';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import LoginPage from 'containers/LoginPage';

import Navbar from 'components/App/Navbar';
import { ProtectedRoute, AuthRoute } from 'components/Reusable/Authentication';

import saga from './sagas';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <ProtectedRoute exact path="/" component={ HomePage } />
          <AuthRoute exact path="/login" component={ LoginPage } />
          <Route component={ NotFoundPage } />
        </Switch>
      </div>
    );
  }
}

const withSaga = injectSaga({ key: 'app', saga, mode: RESTART_ON_REMOUNT });

export default compose(
  withSaga,
)(App);
