import { userActionTypes } from 'Utils/actionTypes.util';

const defaultState = {
  isAppReady: false,
  isLogin: false,
  address: null,
};

export default (state = defaultState, action) => {
  const { type, payload } = action;

  if (type === userActionTypes.APP_READY) {
    return { ...state, isAppReady: true };
  }

  if (type === userActionTypes.LOGIN_USER_SUCCESS) {
    const { address } = payload;
    return { ...state, isLogin: true, address };
  }
  return { ...state };
};
