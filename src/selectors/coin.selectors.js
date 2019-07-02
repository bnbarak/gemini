import { createSelector } from 'reselect';

const getCoinData = state => state.coinData;

export const getBalance = createSelector(getCoinData, coin => coin.balance);

export const getTx = createSelector(getCoinData, coin => coin.transactions);
