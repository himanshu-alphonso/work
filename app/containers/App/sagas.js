// ***** IMPORTANT ***** //
// This file acts similarly to the rootSaga file used in the insights repo.
// Place all sagas that are relevant to all pages here.
// Ex: Any sagas that deal with session stuff.
import { takeLatest, all, call, put, select } from 'redux-saga/effects';
import request from 'utils/request';
import { browserHistory } from 'react-router';
import { push } from 'react-router-redux';

import * as actions from './actions';


// -- Login User -- //
function* loginUser(action) {
  try {
    // Store user data in browser's localStorage
    localStorage.setItem('token', JSON.stringify(action.data.tokenObj));
    localStorage.setItem('user', JSON.stringify(action.data.profileObj));
    // Place user information into the session slice of state
    yield put(actions.receiveUser(action.data));
    // Redirect browser to a new page following login
    yield put(push('/'));
  } catch (error) {
    yield put(actions.receiveUserError(error));
  }
}
function* watchLoginUser() {
  yield takeLatest(actions.LOGIN_USER, loginUser);
}
// -- End Login User -- //


// -- Logout User -- //
export function* logoutUser(action) {
  try {
    // Remove token and user data from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    // Alter session state to denote logged out state
    yield put(actions.logoutUserSuccess());
    // Redirect browser to login page following logout
    yield put(push('/login'));
  } catch (error) {
    yield put(actions.logoutUserError());
  }
}
export function* watchLogoutUser() {
  yield takeLatest(actions.LOGOUT_USER, logoutUser);
}
// -- End Logout User -- //


function* rootSaga() {
  yield all([
    watchLoginUser(),
    watchLogoutUser(),
  ]);
}

export default rootSaga;
