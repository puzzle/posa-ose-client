/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var Funnel   = require('broccoli-funnel');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
  });

  app.import('bower_components/highlightjs/styles/solarized-dark.css')

  var fonts = new Funnel(app.bowerDirectory + '/roboto-fontface', {
    srcDir: '/fonts',
    include: [ 'Roboto-Regular.*', 'Roboto-Light.*' ],
    destDir: '/assets/fonts'
  })

  return app.toTree([ fonts ]);
};
