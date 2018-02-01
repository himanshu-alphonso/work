import { fromJS } from 'immutable';
import * as actions from 'components/LinkedInOAuth/actions';


// Check to see whether user data is already stored in localStorage
// and set values of initial state keys to the stored values if present
const initialState = fromJS({
  firstName: (localStorage.firstName) ? localStorage.firstName : null,
  lastName: (localStorage.lastName) ? localStorage.lastName : null,
  email: (localStorage.emailAddress) ? localStorage.emailAddress : null,
  token: (localStorage.token) ? localStorage.token : null,
  loggedIn: !!localStorage.token,
  error: null,
});

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN_USER_SUCCESS:
      return state.merge({
        email: action.data.emailAddress,
        firstName: action.data.firstName,
        lastName: action.data.lastName,
        loggedIn: true,
        token: action.data.token,
        error: null,
      });

    case actions.LOGIN_USER_ERROR:
      return state.merge({
        error: action.error,
    });

    case actions.LOGOUT_USER_SUCCESS:
      return state.merge({
        firstName: null,
        lastName: null,
        email: null,
        token: null,
        loggedIn: false,
      });

    case actions.LOGOUT_USER_ERROR:
      return state.merge({
        error: action.error,
    });

    default:
      return state;
  }
};

export default sessionReducer;
