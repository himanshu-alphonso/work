import * as actions from '../actions';

describe('LinkedInOAuth actions', () => {
  it('should create an action to log in', () => {
    const expectedAction = {
      type: actions.LOGIN_USER
    };

    expect(actions.loginUser()).toEqual(expectedAction);
  });

  it('should create an action to log out', () => {
    const expectedAction = {
      type: actions.LOGOUT_USER
    };

    expect(actions.logoutUser()).toEqual(expectedAction);
  });

  it('should create an action to pass already logged in information', () => {
    const expectedAction = {
      type: actions.CONFIRM_AUTHORIZATION
    };

    expect(actions.confirmAuthorization()).toEqual(expectedAction);
  });

  it('should create an action to authorize linkedIn', () => {
    const data = {
      emailAddress: 'first.last@gmail.com',
      firstName: 'first',
      lastName: 'last'
    };

    const expectedAction = {
      type: actions.LOGIN_USER_SUCCESS,
      data
    };

    expect(actions.receiveUser(data)).toEqual(expectedAction);
  });

  it('should create an action to pass already logged out information', () => {
    const expectedAction = {
      type: actions.LOGOUT_USER_SUCCESS
    };

    expect(actions.logoutUserSuccess()).toEqual(expectedAction);
  });
});
