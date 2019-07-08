import instance from 'Utils/axios.util';

// TODO: Disable eslint-disable-next-line
// eslint-disable-next-line import/prefer-default-export
export const sendCoinApi = payload => instance.post('transactions', payload);
