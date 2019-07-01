import { combineReducers } from 'redux';
import coinData from './coinData.reducer';
import user from './user.reducer';

export default combineReducers({
  coinData,
  user,
});
