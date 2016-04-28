/**
 * Set up the configuration for Require.js.  Tell it where our "non-module" JS files are.
 *
 * Seth Cohen <seth.h.cohen@gmail.com
 */
require.config({
  baseUrl: 'app',
  paths: {
    'underscore': 'vendor/underscore-1.8.3'
  },
  shim: {
    'underscore': {
      exports: '_'
    }
  },
  deps: ['components/app/app.component']
});