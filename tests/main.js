/**
 * Set the configuration for RequireJS for unit test application
 *
 * Seth Cohen <seth.h.cohen@gmail.com
 */
require.config({
  baseUrl: '/app',
  paths: {
    'jasmine': '../node_modules/jasmine-core/lib/jasmine-core/jasmine',
    'jasmine-html': '../node_modules/jasmine-core/lib/jasmine-core/jasmine-html',
    'jasmine-boot': '../node_modules/jasmine-core/lib/jasmine-core/boot',
    'underscore': 'vendor/underscore-1.8.3'
  },
  shim: {
    'jasmine-html': {
      deps : ['jasmine']
    },
    'jasmine-boot': {
      deps : ['jasmine', 'jasmine-html']
    },
    'underscore': {
      exports: '_'
    }
  }
});

/**
 * Require all the tests that we want to run
 */
require(['jasmine-boot'], function () {
  require([
    '../tests/currency.service.spec',
    '../tests/app.component.spec'
  ], function(){
    //trigger Jasmine
    window.onload();
  });
});
