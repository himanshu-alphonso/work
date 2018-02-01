import { call, put, takeLatest } from 'redux-saga/effects';
import { LOG_IN, LOG_OUT, ALREADY_LOGGED_IN, LOGGED_IN, LOGGED_OUT, linkedInAuthorize, linkedInLoggedOut } from 'components/LinkedInOAuth/actions';
import moment from 'moment';
import request from 'utils/request';


// -- Non Saga Functions -- //
function connect() {
  return new Promise((resolve, reject) => {
    const result = IN.User && IN.User.authorize(() => {
      IN.API && IN.API.Profile('me').fields('first-name', 'last-name', 'email-address').result(((data) => {
        const tomorrow = moment().add(1, 'day').utc();
        document.cookie = `insights_login=${IN.ENV.auth.member_id}; expires=${tomorrow}; path=/`;
        resolve(data.values[0]);
      }));
    });
  });
}


function disconnect() {
  IN.User && IN.User.setLoggedOut();
  document.cookie = 'insights_login=; path=/;';
}


function findInsightsCookie() {
  const check = 'insights_login=';
  const cookie = document.cookie;
  const start = cookie.indexOf('insights_login=');
  const cutCookie = cookie.slice(start + check.length);
  const value = cutCookie.slice(0, cutCookie.indexOf(';'));
  return value;
}
// -- End Non Saga Function -- //


// -- Sagas -- //
function* loginUser() {
  try {
    const snapshot = yield call(connect);
    if (snapshot.emailAddress && snapshot.emailAddress.length > 0) {
      const requestBody = JSON.stringify({
        email: snapshot.emailAddress,
        firstName: snapshot.firstName,
        lastName: snapshot.lastName,
      });

      yield call(request, '/session/login', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: requestBody,
      });

      // Upon logging in, add user data to localStorage for future reference
      localStorage.setItem('emailAddress', snapshot.emailAddress);
      localStorage.setItem('firstName', snapshot.firstName);
      localStorage.setItem('lastName', snapshot.lastName);
      localStorage.setItem('oauth_token', IN.ENV.auth.oauth_token);

      yield put(linkedInAuthorize(snapshot));
    }
  } catch (err) {
    console.log("Login Error") // eslint-disable-line
  }
}
export function* watchLogIn() {
  yield takeLatest(LOG_IN, loginUser);
}


function* logoutUser() {
  try {
    yield call(disconnect);

    const requestBody = JSON.stringify({
      email: localStorage.emailAddress,
      firstName: localStorage.firstName,
      lastName: localStorage.lastName,
    });

    yield call(request, '/session/logout', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: requestBody,
    });

    // Remove user data stored in localStorage
    localStorage.removeItem('emailAddress');
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('oauth_token');

    yield put(linkedInLoggedOut());
  } catch (err) {
    console.log("Logout Error") // eslint-disable-line
  }
}
export function* watchLogOut() {
  yield takeLatest(LOG_OUT, logoutUser);
}


function* checkingAuthorization() {
  const authorized = yield call(!!IN.User && IN.User.isAuthorized);
  const insightsCookie = IN.ENV.auth && IN.ENV.auth.member_id === findInsightsCookie();
  if (authorized && insightsCookie) {
    const snapshot = yield call(connect);
    if (snapshot.emailAddress && snapshot.emailAddress.length > 0) {
      // Add user data to localStorage if not already present
      localStorage.setItem('emailAddress', snapshot.emailAddress);
      localStorage.setItem('firstName', snapshot.firstName);
      localStorage.setItem('lastName', snapshot.lastName);
      localStorage.setItem('oauth_token', IN.ENV.auth.oauth_token);
      yield put(linkedInAuthorize(snapshot));
    }
  }
}
export function* checkIfLoggedIn() {
  yield takeLatest(ALREADY_LOGGED_IN, checkingAuthorization);
}
// -- End Sagas -- //
