import * as actions from '../actions';

describe('LinkedInOAuth actions', () => {
  it('should create an action to log in', () => {
    const expectedAction = {
      type: actions.LOG_IN
    };

    expect(actions.loggingIn()).toEqual(expectedAction);
  });

  it('should create an action to log out', () => {
    const expectedAction = {
      type: actions.LOG_OUT
    };

    expect(actions.loggingOut()).toEqual(expectedAction);
  });

  it('should create an action to pass already logged in information', () => {
    const expectedAction = {
      type: actions.ALREADY_LOGGED_IN
    };

    expect(actions.alreadyLoggedIn()).toEqual(expectedAction);
  });

  it('should create an action to authorize linkedIn', () => {
    const data = {
      emailAddress: 'first.last@gmail.com',
      firstName: 'first',
      lastName: 'last'
    };

    const expectedAction = {
      type: actions.LOGGED_IN,
      data
    };

    expect(actions.linkedInAuthorize(data)).toEqual(expectedAction);
  });

  it('should create an action to pass already logged out information', () => {
    const expectedAction = {
      type: actions.LOGGED_OUT
    };

    expect(actions.linkedInLoggedOut()).toEqual(expectedAction);
  });
});
