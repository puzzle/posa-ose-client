import Route from 'ember-route'

export default Route.extend({
  model({ orgId }) {
    return this.store.findRecord('organization', orgId)
  }
})
