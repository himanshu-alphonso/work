import { call, put, takeLatest } from 'redux-saga/effects';
import * as actions from 'components/LinkedInOAuth/actions';
import moment from 'moment';
import request from 'utils/request';


// -- Non Saga Functions -- //
function connect() {
  return new Promise((resolve, reject) => {
    const result = IN.User && IN.User.authorize(() => {
      IN.API && IN.API.Profile('me').fields('id', 'first-name', 'last-name', 'email-address', 'headline', 'pictureUrl').result(((data) => {
        const tomorrow = moment().add(1, 'day').utc();
        resolve(data.values[0]);
      }));
    });
  });
}

function disconnect() {
  IN.User && IN.User.setLoggedOut();
}
// -- End Non Saga Function -- //


// -- Sagas -- //
// -- Login User -- //
function* loginUser() {
  try {
    const data = yield call(connect);
    if (data.emailAddress && data.emailAddress.length > 0) {
      // Upon logging in, add user data to localStorage for future reference
      localStorage.setItem('emailAddress', data.emailAddress);
      localStorage.setItem('firstName', data.firstName);
      localStorage.setItem('lastName', data.lastName);
      localStorage.setItem('token', IN.ENV.auth);

      data.token = IN.ENV.auth;
      yield put(actions.receiveUser(data));
    }
  } catch (error) {
    yield put(actions.receiveUserError(error));
  }
}
export function* watchLogIn() {
  yield takeLatest(actions.LOGIN_USER, loginUser);
}
// -- End Login User -- //


// -- Logout User - //
function* logoutUser() {
  try {
    yield call(disconnect);
    // Remove user data stored in localStorage
    localStorage.removeItem('emailAddress');
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('token');

    yield put(actions.logoutUserSuccess());
  } catch (error) {
    yield put(actions.logoutUserError(error));
  }
}
export function* watchLogOut() {
  yield takeLatest(actions.LOGOUT_USER, logoutUser);
}
// -- End Logout User -- //


// -- Check Authorization -- //
function* checkingAuthorization() {
  const authorized = yield call(!!IN.User && IN.User.isAuthorized);
  if (authorized) {
    const data = yield call(connect);
    if (data.emailAddress && data.emailAddress.length > 0) {
      // Add user data to localStorage if not already present
      localStorage.setItem('emailAddress', data.emailAddress);
      localStorage.setItem('firstName', data.firstName);
      localStorage.setItem('lastName', data.lastName);
      localStorage.setItem('token', IN.ENV.auth);
      yield put(actions.receiveUser(data));
    }
  }
}
export function* checkIfLoggedIn() {
  yield takeLatest(actions.CONFIRM_AUTHORIZATION, checkingAuthorization);
}
// -- End Check Authorization -- //
// -- End Sagas -- //
