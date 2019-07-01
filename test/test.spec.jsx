import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';

const { assert } = chai;
const { isTrue } = assert;

describe('this..', () => {
  it('should pass', () => {
    const wrapper = shallow(<div>test</div>);
    const text = wrapper.text();
    isTrue(text === 'test');
  });
});
