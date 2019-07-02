import { assert } from 'chai';
import isFloat from '../../src/utils/isFloat';

const { isTrue, isFalse } = assert;


describe('Test formHelpers.utils', () => {
  describe('Test hasErrors()', () => {
    it('should return float for 0', () => isTrue(isFloat('0')));
    it('should return float for 1', () => isTrue(isFloat('1.1')));
    it('should return float for 0.0', () => isTrue(isFloat('0.0')));
    it('should return float for 1.1', () => isTrue(isFloat('1.1')));
    it('should return not a float for 1.1a', () => isFalse(isFloat('1.1a')));
    it('should return not a float for a', () => isFalse(isFloat('a')));
  });
});
