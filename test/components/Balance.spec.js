import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from 'enzyme';
import chai from 'chai';
import Balance from 'Components/Balance';

const { assert } = chai;
const { isTrue } = assert;

const mockStore = configureMockStore([thunk]);

const balance = 1;
const defaultStore = {
  coinData: {
    balance,
  },
};
describe('test Login component', () => {
  let store;
  before(() => store = mockStore(defaultStore));
  it('should have a single address field', () => {
    const wrapper = mount(<Balance store={store} />);
    const text = wrapper.text();
    isTrue(text === `Balance${balance}`);
  });
});
