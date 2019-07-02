import { coinActionTypes } from 'Utils/actionTypes.util';

const defaultState = {
  balance: null,
  transactions: [],
};

export default (state = defaultState, action) => {
  const { type, payload } = action;
  if (type === coinActionTypes.GET_BALANCE_FOR_ADDRESS) {
    const { balance } = payload;
    return { ...state, balance };
  }

  if (type === coinActionTypes.GET_TX_FOR_ADDRESS) {
    const { transactions } = payload;
    return { ...state, transactions };
  }
  return { ...state };
};
