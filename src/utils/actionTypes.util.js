import keymirror from 'keymirror';

export const userActionTypes = keymirror({
  // Login was successful
  LOGIN_USER_SUCCESS: null,
  // Fail to login
  LOGIN_USER_ERROR: null,
});

export const coinActionTypes = keymirror({});
