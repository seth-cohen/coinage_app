/**
 * Component encapsulating the main coin application
 *
 * Seth Cohen <seth.h.cohen@gmail.com>
 */
define([
  'data/coin_init_data', 'underscore', 'models/coin.model', 'services/currency.service'
], function(data, _, CoinModel, currencyService) {
  'use strict';

  var AppComponent = ng.core.Component({
    selector: 'coin-app',
    templateUrl: 'app/components/app/app.component.html',
    styleUrls: ['app/components/app/app.component.css'],
    providers: [currencyService]
  })
  .Class({
    constructor: [currencyService, function(currency) {this.coins = [];
      this.initDefaults();
      this.currencyService = currency;

      var self = this;
      if (typeof data === 'object' && typeof data.app === 'object' && data.coins) {
        this.appName    = data.app.name || '';
        this.appVersion = data.app.version || '';
        _.each(data.coins, function(coinData) {
          self.coins.push(new CoinModel(coinData));
        });
      }
    }],

    /**
     * Initialize default values for class properties
     */
    initDefaults: function() {
      this.appName         = '';
      this.appVersion      = '';
      this.coins           = [];
      this.valueToConvert  =  0;
      this.stringToConvert = '';
    },

    /**
     * The Actual conversion to be done
     */
    doConvert: function() {
      // Reset count from any previous iterations
      this.resetCoinCounts();

      // Get value (amount of pennies) from input string
      this.valueToConvert = this.currencyService.getPenceValueFromString(this.stringToConvert);

      // Fortunately, the Sterling coin system is a system in which the greedy algorithm for minimum coin set
      // can be used. If not then we would have to use brute force, recursion or dynamic programming
      var valueToConvert = this.valueToConvert;
      _.each(_.last(this.coins, this.coins.length).reverse(), function(coin) {
        while (valueToConvert >= coin.value) {
          valueToConvert -= coin.value;
          coin.count += 1;
        }
      });
    },

    /**
     * Reset coin counts back to zero
     */
    resetCoinCounts: function() {
      _.each(this.coins, function(coin) {
        coin.count = 0;
      });
    }
  });

  // Let's bootstrap the application
  ng.platform.browser.bootstrap(AppComponent);
  return AppComponent;
});