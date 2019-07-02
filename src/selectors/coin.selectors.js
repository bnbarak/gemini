import { createSelector } from 'reselect';
import processTransactionData from 'Utils/processTransactionData';

const getCoinData = state => state.coinData;

export const getBalance = createSelector(getCoinData, coin => coin.balance);

export const getTx = createSelector(getCoinData, coin => coin.transactions);

export const getTxGraphData = createSelector(getTx, tx => processTransactionData(tx));
