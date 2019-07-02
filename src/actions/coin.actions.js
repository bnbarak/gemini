import { coinActionTypes } from 'Utils/actionTypes.util';

export const getBalance = balance => ({
  type: coinActionTypes.GET_BALANCE_FOR_ADDRESS,
  payload: { balance },
});

export const getTransactions = transactions => ({
  type: coinActionTypes.GET_TX_FOR_ADDRESS,
  payload: { transactions },
});
