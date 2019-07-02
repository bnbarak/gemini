import { getAddressInfo } from 'Api/user.api';
import { userActionTypes } from 'Utils/actionTypes.util';
import history from 'Utils/history.util';
import { getBalance, getTransactions } from 'Actions/coin.actions';

export const loginSuccess = address => ({
  type: userActionTypes.LOGIN_USER_SUCCESS,
  payload: { address },
});

export const loginFail = () => ({ type: userActionTypes.LOGIN_USER_ERROR });

export const saveAddressInLocalStorage = address => localStorage.setItem('address', address);

export const setAppReady = () => ({ type: userActionTypes.APP_READY });

export const getAddressInformation = address => (dispatch) => {
  getAddressInfo(address)
    .then((response) => {
      const { data } = response;
      const { balance, transactions } = data;
      saveAddressInLocalStorage(address);
      dispatch(loginSuccess(address));
      dispatch(setAppReady());
      dispatch(getBalance(balance));
      dispatch(getTransactions(transactions));
      history.push('/dashboard');
    })
    .catch(() => {
      dispatch(loginFail());
      dispatch(setAppReady());
    });
};

export const bootstrapApp = () => (dispatch) => {
  const address = localStorage.getItem('address');
  if (address) {
    return dispatch(getAddressInformation(address));
  }
  return dispatch(setAppReady());
};

export const logoutAction = () => {};
