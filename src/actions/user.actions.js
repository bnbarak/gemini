import { getAddressInfo } from 'Api/user.api';
import { userActionTypes } from 'Utils/actionTypes';
import history from 'Utils/history';

export const loginAction = address => (dispatch) => {
  getAddressInfo(address).then((response) => {
    const { data } = response;
    console.log(data);
    dispatch({ type: userActionTypes.LOGIN_USER_SUCCESS, payload: { address } });
    history.push('/dashboard');
  }).catch(() => {
    dispatch({ type: userActionTypes.LOGIN_USER_ERROR });
  });
};

export const logoutAction = () => {};
