import keymirror from 'keymirror';

export const userActionTypes = keymirror({
  // Login was successful
  LOGIN_USER_SUCCESS: null,
  // Fail to login
  LOGIN_USER_ERROR: null,
  // Change the app ready state to true
  APP_READY: null,
});

export const coinActionTypes = keymirror({
  // Get the jobcoin balance
  GET_BALANCE_FOR_ADDRESS: null,
  // Get transactinos for address
  GET_TX_FOR_ADDRESS: null,
});
