import { fromJS } from 'immutable';
import * as actions from 'containers/App/actions';


const initialState = fromJS({
  loggedIn: !!localStorage.token,
  user: (localStorage.user) ? JSON.parse(localStorage.getItem('user')) : null,
  token: (localStorage.token) ? JSON.parse(localStorage.getItem('token')) : null,
  error: null,
});

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN_USER_SUCCESS:
      return state.merge({
         loggedIn: true,
         user: action.data.profileObj,
         token: action.data.tokenObj,
         error: null,
       });

    case actions.LOGIN_USER_ERROR:
      return state.merge({
        error: action.error,
      });

    case actions.LOGOUT_USER_SUCCESS:
      return state.merge({
         loggedIn: false,
         user: null,
         token: null,
         error: null,
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
