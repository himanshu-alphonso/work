export const LOGIN_USER = 'components/LinkedInOAuth/LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'components/LinkedInOAuth/LOGIN_USER_SUCCESS';
export const LOGIN_USER_ERROR = 'components/LinkedInOAuth/LOGIN_USER_ERROR';

export const LOGOUT_USER = 'components/LinkedInOAuth/LOGOUT_USER';
export const LOGOUT_USER_SUCCESS = 'components/LinkedInOAuth/LOGOUT_USER_SUCCESS';
export const LOGOUT_USER_ERROR = 'components/LinkedInOAuth/LOGOUT_USER_ERROR';

export const CONFIRM_AUTHORIZATION = 'components/LinkedInOAuth/CONFIRM_AUTHORIZATION';


// -- Login User -- //
export const loginUser = () => ({
  type: LOGIN_USER
});

export const receiveUser = (data) => ({
  type: LOGIN_USER_SUCCESS,
  data
});

export const receiveUserError = (error) => ({
  type: LOGIN_USER_ERROR,
  error,
});
// -- End Login user -- //


// -- Logout User -- //
export const logoutUser = () => ({
  type: LOGOUT_USER
});

export const logoutUserSuccess = () => ({
  type: LOGOUT_USER_SUCCESS
});

export const logoutUserError = (error) => ({
  type: LOGOUT_USER_ERROR,
  error,
});
// -- End Logout User -- //


// -- Confirm Authorization -- //
export const confirmAuthorization = () => ({
  type: CONFIRM_AUTHORIZATION
});
// -- End Confirm Authorization -- //
