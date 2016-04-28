/**
 * Class encapsulating an individual Sterling coin
 *
 * Seth Cohen <seth.h.cohen@gmail.com>
 */
define(function() {
  var CoinModel = ng.core.Class({
    constructor: function(data) {
      this.set(data);
    },

    /**
     * Sets properties from data object
     *
     * @param {object} data The data to populate the address from
     * @returns {boolean}
     */
    set: function(data) {
      if (typeof data !== 'object') {
        return false;
      }

      this.symbol = data.symbol || '';
      this.value = data.value || 0;
      this.count = data.count || 0;

      return true;
    },

    /**
     * Whether or not we have any of this coin type
     *
     * @returns {boolean}
     */
    hasCount: function() {
      return this.count > 0;
    }
  });

  return CoinModel;
});