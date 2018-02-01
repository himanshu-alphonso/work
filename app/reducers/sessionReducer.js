import { fromJS } from 'immutable';
import * as actions from 'components/LinkedInOAuth/actions';


// Check to see whether user data is already stored in localStorage
// and set values of initial state keys to the stored values if present
const initialState = fromJS({
  firstName: (localStorage.firstName) ? localStorage.firstName : '',
  lastName: (localStorage.lastName) ? localStorage.lastName : '',
  email: (localStorage.emailAddress) ? localStorage.emailAddress : '',
  loggedIn: !!localStorage.oauth_token,
  error: null,
});

const loggedOutState = fromJS({
  firstName: '',
  lastName: '',
  email: '',
  loggedIn: false,
});

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGGED_IN:
      return state.merge({
        email: action.data.emailAddress,
        firstName: action.data.firstName,
        lastName: action.data.lastName,
        loggedIn: true,
        error: null,
       });

    case actions.LOGGED_OUT:
      return state.merge({},
        loggedOutState
      );

    default:
      return state;
  }
};

export default sessionReducer;

//
// const initialState = fromJS({
//   loggedIn: !!localStorage.token,
//   user: (localStorage.user) ? JSON.parse(localStorage.getItem('user')) : null,
//   token: (localStorage.token) ? JSON.parse(localStorage.getItem('token')) : null,
//   error: null,
// });
//
// const sessionReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case actions.LOGIN_USER_SUCCESS:
//       return state.merge({
//          loggedIn: true,
//          user: action.data.profileObj,
//          token: action.data.tokenObj,
//          error: null,
//        });
//
//     case actions.LOGIN_USER_ERROR:
//       return state.merge({
//         error: action.error,
//       });
//
//     case actions.LOGOUT_USER_SUCCESS:
//       return state.merge({
//          loggedIn: false,
//          user: null,
//          token: null,
//          error: null,
//        });
//
//     case actions.LOGOUT_USER_ERROR:
//       return state.merge({
//         error: action.error,
//       });
//
//     default:
//       return state;
//   }
// };
//
// export default sessionReducer;
