/**
 * Unit test for the coinage application component
 *
 * Seth Cohen <seth.h.cohen@gmail.com
 */
define([
  'underscore',
  'components/app/app.component'
], function(_, App) {
  'use strict';

  /**
   * Create a mock service to return a specific value to convert
   *
   * @param {number} valueToConvert The value for the mock to return
   * @returns {{}} The mock service
   */
  var getMockCurrencyService = function(valueToConvert) {
    return {
      getPenceValueFromString: function() {
        return valueToConvert;
      }
    };
  };

  /**
   * Test cases
   *
   * @type {{}}
   */
  var testMap = {
    100: [0, 0, 0, 1, 0],
    121: [1, 10, 0, 1, 0],
    221: [1, 10, 0, 0, 1],
    375: [1, 12, 1, 1, 1]
  };

  /**
   * Test the actual application
   */
  describe('Testing Coinage App, minimum coin calculations', function() {
    _.each(_.pairs(testMap), function(testCase) {
      var testValue = testCase[0];
      var coinArray = testCase[1];
      var numCoins = _.reduce(coinArray, function(count, init) {
        return count + init;
      }, 0);

      var app = new App(getMockCurrencyService(testValue));
      it('testing ' + testValue + ' pennies has min ' + numCoins + ' coin(s) and they are the correct pieces', function() {
        app.doConvert();
        var coins = app.coins;

        // Make sure we have the proper total number of coins
        expect(numCoins).toEqual(
          _.reduce(_.pluck(coins, 'count'), function(count, init) {return count + init;}, 0)
        );

        // Make sure we have the proper number of each coin
        expect(coinArray[0]).toEqual(coins[0].count);
        expect(coinArray[1]).toEqual(coins[1].count);
        expect(coinArray[2]).toEqual(coins[2].count);
        expect(coinArray[3]).toEqual(coins[3].count);
        expect(coinArray[4]).toEqual(coins[4].count);
      });
    });
  });
});
