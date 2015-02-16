'use strict';

describe('math', function() {
  var plus = require('../lib/plus');
  describe('The plus function', function() {
    it('adds two numbers', function() {
      var result = plus(3, 4);
      expect(result).toBe(7);
    });
  });
});
