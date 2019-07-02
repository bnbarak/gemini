import { combineReducers } from 'redux';
import { reducer as notifReducer } from 'redux-notifications';
import coinData from './coinData.reducer';
import user from './user.reducer';

export default combineReducers({
  coinData,
  user,
  notifs: notifReducer,
});
