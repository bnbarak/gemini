import { getAddressInfo } from 'Api/user.api';
import { userActionTypes } from 'Utils/actionTypes.util';
import history from 'Utils/history.util';
import { getBalance, getTransactions } from 'Actions/coin.actions';
import { notificationError } from 'Actions/notification.actions';
import { STORAGE_KEY } from 'Utils/constants';

export const loginSuccess = address => ({
  type: userActionTypes.LOGIN_USER_SUCCESS,
  payload: { address },
});

export const loginFail = () => ({ type: userActionTypes.LOGIN_USER_ERROR });

export const saveAddressInLocalStorage = address => localStorage.setItem(STORAGE_KEY, address);

export const setAppReady = () => ({ type: userActionTypes.APP_READY });

export const getAddressInformation = address => (dispatch) => {
  getAddressInfo(address)
    .then((response) => {
      const { data } = response;
      const { balance, transactions } = data;
      saveAddressInLocalStorage(address);
      dispatch(loginSuccess(address));
      dispatch(getBalance(balance));
      dispatch(getTransactions(transactions));
      history.push('/dashboard');
    })
    .catch(() => {
      dispatch(notificationError('Fail to login - address not found'));
      dispatch(loginFail());
    })
    .then(() => dispatch(setAppReady()));
};

export const bootstrapApp = () => (dispatch) => {
  const address = localStorage.getItem(STORAGE_KEY);
  if (address) {
    return dispatch(getAddressInformation(address));
  }
  return dispatch(setAppReady());
};
