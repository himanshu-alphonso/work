export const LOGIN_USER = 'app/containers/LoginPage/LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'app/containers/LoginPage/LOGIN_USER_SUCCESS';
export const LOGIN_USER_ERROR = 'app/containers/LoginPage/LOGIN_USER_ERROR';

export const LOGOUT_USER = 'app/containers/LoginPage/LOGOUT_USER';
export const LOGOUT_USER_SUCCESS = 'app/containers/LoginPage/LOGOUT_USER_SUCCESS';
export const LOGOUT_USER_ERROR = 'app/containers/LoginPage/LOGOUT_USER_ERROR';


// -- Login User -- //
export const loginUser = (data) => ({
  type: LOGIN_USER,
  data,
});

export const receiveUser = (data) => ({
  type: LOGIN_USER_SUCCESS,
  data,
});

export const receiveUserError = (error) => ({
  type: LOGIN_USER_ERROR,
  error,
});
// -- End Login user -- //


// -- Logout User -- //
export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const logoutUserSuccess = () => ({
  type: LOGOUT_USER_SUCCESS,
});

export const logoutUserError = (error) => ({
  type: LOGOUT_USER_ERROR,
  error,
});
// -- End Logout User -- //
