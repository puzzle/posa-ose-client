import Model from 'ember-data/model'
import attr from 'ember-data/attr'
import { belongsTo } from 'ember-data/relationships'
import { alias } from 'ember-computed'

export default Model.extend({
  actor: belongsTo('user'),

  githubId: attr('string'),
  type: attr('string'),
  repo: attr(),
  payload: attr(),
  public: attr('boolean'),
  createdAt: attr('date'),
  importedAt: attr('date'),
  updatedAt: attr('date'),

  created_at: alias('createdAt')
})
