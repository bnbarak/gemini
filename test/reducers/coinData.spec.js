import { assert } from 'chai';
import _ from 'lodash';
import { coinActionTypes } from 'Utils/actionTypes.util';
import coinDataReducer, { defaultState } from '../../src/reducers/coinData.reducer';

const { isTrue, isFalse } = assert;

let state;
describe('post reducer', () => {
  before(() => state = coinDataReducer());

  it('should return the initial state', () => isTrue(_.isEqual(state, defaultState)));
  it('should handle GET_BALANCE_FOR_ADDRESS', () => {
    const balance = 1;
    const action = {
      type: coinActionTypes.GET_BALANCE_FOR_ADDRESS,
      payload: { balance },
    };
    state = coinDataReducer(state, action);
    const { balance: newBalance, isLoading } = state;

    isTrue(newBalance === balance);
    isFalse(isLoading);
  });
});
