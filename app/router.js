import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('organization', { path: '/:orgId' }, function() {
    this.route('activity');
  });
});

export default Router;
