import Route from 'ember-route'

export default Route.extend({
  afterModel() {
    this.transitionTo('organization.activity', 'puzzle')
  }
})
