import { userActionTypes } from 'Utils/actionTypes';

const defaultState = {
  isLogin: false,
  address: null,
};

export default (state = defaultState, action) => {
  const { type, payload } = action;
  if (type === userActionTypes.LOGIN_USER_SUCCESS) {
    const { address } = payload;
    return { ...state, isLogin: true, address };
  }
  return { ...state };
};
