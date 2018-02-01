// ***** IMPORTANT ***** //
// This file acts similarly to the rootSaga file used in the insights repo.
// Place all sagas that are relevant to all pages here.
// Ex: Any sagas that deal with session stuff.
import { takeLatest, all, call, put, select } from 'redux-saga/effects';
import request from 'utils/request';
import { browserHistory } from 'react-router';
import { push } from 'react-router-redux';
import { watchLogIn, watchLogOut, checkIfLoggedIn } from 'components/LinkedInOAuth/sagas';


function* rootSaga() {
  yield all([
    watchLogIn(),
    watchLogOut(),
    checkIfLoggedIn(),
  ]);
}

export default rootSaga;
