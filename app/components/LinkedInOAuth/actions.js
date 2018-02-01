export const LOG_IN = 'insights/LinkedInOAuth/LOG_IN';
export const LOG_OUT = 'insights/LinkedInOAuth/LOG_OUT';
export const ALREADY_LOGGED_IN = 'insights/LinkedInOAuth/ALREADY_LOGGED_IN';
export const LOGGED_IN = 'insights/LinkedInOAuth/LOGGED_IN';
export const LOGGED_OUT = 'insights/LinkedInOAuth/LOGGED_OUT';


export const loggingIn = () => ({
  type: LOG_IN
});

export const loggingOut = () => ({
  type: LOG_OUT
});

export const alreadyLoggedIn = () => ({
  type: ALREADY_LOGGED_IN
});

export const linkedInAuthorize = (data) => ({
  type: LOGGED_IN,
  data
});

export const linkedInLoggedOut = () => ({
  type: LOGGED_OUT
});
