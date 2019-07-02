import { coinActionTypes } from 'Utils/actionTypes.util';
import { getUserAddress } from 'Selectors/user.selectors';
import { sendCoinApi } from 'Api/coin.api';
import { getAddressInfo } from 'Api/user.api';
import { notificationError, notificationSuccess } from 'Actions/notification.actions';

export const getBalance = balance => ({
  type: coinActionTypes.GET_BALANCE_FOR_ADDRESS,
  payload: { balance },
});

export const getTransactions = transactions => ({
  type: coinActionTypes.GET_TX_FOR_ADDRESS,
  payload: { transactions },
});

export const sendCoinFail = () => (dispatch) => {
  dispatch(notificationError('Fail to send jobcoin - Insufficient Funds'));
  dispatch({ type: coinActionTypes.SEND_COIN_ERROR });
};

export const updateCoinData = address => (dispatch) => {
  getAddressInfo(address).then((response) => {
    const { data } = response;
    const { balance, transactions } = data;
    dispatch(getBalance(balance));
    dispatch(getTransactions(transactions));
  });
};

export const startGetCoinData = () => ({ type: coinActionTypes.START_GET_COIN_DATA });

export const sendCoin = (toAddress, amount) => (dispatch, getState) => {
  const state = getState();
  const fromAddress = getUserAddress(state);
  const payload = {
    fromAddress,
    toAddress,
    amount,
  };

  dispatch(startGetCoinData());
  sendCoinApi(payload).then((response) => {
    const { data } = response;
    const { status } = data;
    if (status === 'OK') {
      dispatch(updateCoinData(fromAddress));
      dispatch(notificationSuccess(`${amount} jobcoin sent to ${toAddress}`));
    } else {
      dispatch(sendCoinFail());
    }
  }).catch(() => {
    dispatch(sendCoinFail());
  });
};
