import Route from 'ember-route'
import injectService from 'ember-service/inject'

import {
  task,
  timeout
} from 'ember-concurrency'

const FIVE_MINUTES = 1000 * 60 * 5

export default Route.extend({
  github: injectService(),
  pageSize: 50,

  refreshTask: task(function* () {
    while (true) {
      yield timeout(FIVE_MINUTES)
      this.refresh()
    }
  }).on('activate'),

  model() {
    let organization = this.modelFor('organization')

    return this.store.query('event', {
      'organization-id': organization.id,
      page: { 'page-size': this.get('pageSize') }
    })
  }
})
