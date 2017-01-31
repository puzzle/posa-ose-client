import Model from 'ember-data/model'
import attr from 'ember-data/attr'
import { hasMany } from 'ember-data/relationships'

export default Model.extend({
  events: hasMany('event'),
  members: hasMany('user'),

  login: attr('string'),
  name: attr('string')
})
