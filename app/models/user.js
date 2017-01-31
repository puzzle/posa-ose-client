import Model from 'ember-data/model'
import attr from 'ember-data/attr'
import { hasMany } from 'ember-data/relationships'

export default Model.extend({
  events: hasMany('event'),
  organizations: hasMany('organizations'),

  login: attr('string'),
  avatarUrl: attr('string'),
  avatar_url: Ember.computed.alias('avatarUrl')
})
