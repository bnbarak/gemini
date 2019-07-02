import { createSelector } from 'reselect';

const getUser = state => state.user;

export const getIsAppReady = createSelector(getUser, user => user.isAppReady);

export const getIsLogin = createSelector(getUser, user => user.isLogin);

export const getUserAddress = createSelector(getUser, user => user.address);
