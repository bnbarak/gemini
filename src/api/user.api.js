import instance from 'Utils/axios';

// eslint-disable-next-line import/prefer-default-export
export const getAddressInfo = address => instance.get(`addresses/${address}`);
