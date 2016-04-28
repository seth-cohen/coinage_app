/**
 * Our simple static file server
 *
 * Seth Cohen <seth.h.cohen@gmail.com>
 */
var express = require('express');
var path    = require('path');
var app     = express();

/**
 * Serve our static js files - as requested by RequireJS
 */
app.use('/', express.static(__dirname));
app.use('/libs', express.static(path.join(__dirname, 'node_modules')));
app.use('/app', express.static(path.join(__dirname, 'public/app')));

app.listen(3000, function () {
  console.log('Coinage app listening on port 3000!');
});

