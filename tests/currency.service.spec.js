/**
 * Unit test for the currency service
 *
 * Seth Cohen <seth.h.cohen@gmail.com>
 */
define([
  'underscore',
  'services/currency.service'
], function(_, CurrencyService) {
  'use strict';

  var service = new CurrencyService();

  /**
   * Object mapping of valid strings and the values that they should convert to
   *
   * @type {{}}
   */
  var posTestingMap = {
    '4': 4,
    '85': 85,
    '197p': 197,
    '2p': 2,
    '1.87': 187,
    '£1.23': 123,
    '£2': 200,
    '£10': 1000,
    '£1.87p': 187,
    '£1p': 100,
    '£1.p': 100,
    '001.41p': 141,
    '4.235p': 424,
    '£1.257422457p': 126
  };

  /**
   * Object mapping of invalid strings and the values that they should convert to
   *
   * @type {{}}
   */
  var negTestingMap = {
    '1x': 0,
    '£1x.0p': 0,
    '£p': 0
  };

  /**
   * Test proper input string validation
   */
  describe('Testing CurrencyService validating valid values', function() {
    _.each(_.keys(posTestingMap), function(testCase) {
      var inputString = testCase;
      it(inputString + ' is a valid input string', function() {
        expect(true).toEqual(service.isValidPenceString(inputString));
      });
    });
  });

  /**
   * Test proper input conversion
   */
  describe('Testing CurrencyService converting valid values', function() {
    _.each(_.pairs(posTestingMap), function(testCase) {
      var inputString = testCase[0];
      var expectedValue = testCase[1];
      it(inputString + ' as an input string is ' + expectedValue + ' pennies', function() {
        expect(expectedValue).toEqual(service.getPenceValueFromString(inputString));
      });
    });
  });


  /**
   * Test input string validation for invalid input strings
   */
  describe('Testing CurrencyService validating invalid values', function() {
    _.each(_.keys(negTestingMap), function(testCase) {
      var inputString = testCase;
      it(inputString + ' is an invalid input string', function() {
        expect(false).toEqual(service.isValidPenceString(inputString));
      });
    });
  });

  /**
   * Test input conversion for invalid input strings
   */
  describe('Testing CurrencyService converting invalid values', function() {
    _.each(_.pairs(negTestingMap), function(testCase) {
      var inputString = testCase[0];
      var expectedValue = testCase[1];
      it(inputString + ' as an input string is ' + expectedValue + ' pennies', function() {
        expect(expectedValue).toEqual(service.getPenceValueFromString(inputString));
      });
    });
  });
});