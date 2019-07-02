import instance from 'Utils/axios.util';

// eslint-disable-next-line import/prefer-default-export
export const sendCoinApi = payload => instance.post('transactions', payload);
