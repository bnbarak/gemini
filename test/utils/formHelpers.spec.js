import { assert } from 'chai';
import { hasErrors } from '../../src/utils/formHelpers.util';

const { isTrue, isFalse } = assert;

const noError = { field: undefined };
const withError = { filed: [' '] };

describe('Test formHelpers.utils', () => {
  describe('Test hasErrors()', () => {
    it('should return no error', () => isFalse(hasErrors(noError)));
    it('should return error', () => isTrue(hasErrors(withError)));
  });
});
