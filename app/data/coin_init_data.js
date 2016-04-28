/**
 * Data structure to define the coins and their values that we are dealing with
 *
 * Seth Cohen <seth.h.cohen@gmail.com>
 */
define(function() {
  'use strict';

  // The initial coin data
  var data = {
    'app': {
      name: 'Coinage',
      version: 'v1.0'
    },
    'coins': [
      {symbol: '1p', value: 1, count: 0},
      {symbol: '2p', value: 2, count: 0},
      {symbol: '50p', value: 50, count: 0},
      {symbol: '£1', value: 100, count: 0},
      {symbol: '£2', value: 200, count: 0}
    ]
  };
  return data;
});