import { coinActionTypes } from 'Utils/actionTypes.util';

const defaultState = {
  balance: null,
  transactions: [],
  isLoading: true,
};

export default (state = defaultState, action) => {
  const { type, payload } = action;
  if (type === coinActionTypes.GET_BALANCE_FOR_ADDRESS) {
    const { balance } = payload;
    return { ...state, balance, isLoading: false };
  }

  if (type === coinActionTypes.GET_TX_FOR_ADDRESS) {
    const { transactions } = payload;
    return { ...state, transactions, isLoading: false };
  }

  if (type === coinActionTypes.START_GET_COIN_DATA || type === coinActionTypes.SEND_COIN_ERROR) {
    return { ...state, isLoading: false };
  }
  return { ...state };
};
