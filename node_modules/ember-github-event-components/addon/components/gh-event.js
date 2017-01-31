import Component from 'ember-component'
import computed  from 'ember-computed'
import layout    from '../templates/components/gh-event'

const IMPLEMENTED_TYPES = [
  'CreateEvent',
  'ForkEvent',
  'PullRequestEvent',
  'PushEvent',
  'WatchEvent',
  'IssueCommentEvent',
  'IssuesEvent',
  'DeleteEvent',
  'MemberEvent'
]

import {
  dasherize
} from 'ember-string'

export default Component.extend({
  layout,
  tagName: '',
  componentType: computed('event.type', function() {
    let type = this.get('event.type')

    if (!IMPLEMENTED_TYPES.includes(type)) {
      return 'gh-event/not-implemented'
    }

    return `gh-event/${dasherize(type)}`
  })
})
