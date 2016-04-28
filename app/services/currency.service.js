/**
 * The currency service - used to validate currency strings and convert string to value
 *
 * Seth Cohen <seth.h.cohen@gmail.com>
 */
define([
  'underscore'
], function() {
  'use strict';

  var CurrencyService = ng.core.Class({
    constructor: function() {},

    /**
     * Checks to see if a string is a valid representation of a pence string
     *
     * Uses RegEx pattern for:
     *  - optional '£' at beginning of string
     *  - 1 or more digits
     *  - 0 or 1 literal '.' after at least 1 digit
     *  - 0 or more digits after the '.'
     *  - optional 'p' at the end of the string
     *
     * @param {string} penceString The string to check if valid pence string
     *
     * @return {boolean}
     */
    isValidPenceString: function(penceString) {
      return /^£?[\d]+[\.]?[\d]*p?$/.test(penceString);
    },

    /**
     * Converts the input string into the correct value of pennies
     *
     * @param {string} penceString Input string to convert to pennies
     * @returns {number}
     */
    getPenceValueFromString: function(penceString) {
      // If the string has either of these characters then it is a pound representation
      // we must multiply by 100 to get pence
      var poundsIndicators = ['£', '.'];
      var isPounds = false;
      var value = 0;

      if (this.isValidPenceString(penceString)) {
        isPounds = _.any(poundsIndicators, function(indicator) {
          return (penceString.indexOf(indicator) > -1);
        });
        var filteredString = penceString.replace(/[£|p]/g, '');
        if (isPounds) {
          value = Math.round(filteredString * 100);
        } else {
          value = parseInt(filteredString, 10);
        }
      }

      return value;
    }
  });

  return CurrencyService;
});