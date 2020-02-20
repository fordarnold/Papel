/* eslint-disable no-undef */
import assert from 'assert';

/**
 * A very simple example test to ensure that our testing framework was configured correctly.
 */
describe('Sample test: array example', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
