import Component from 'ember-component'
import computed  from 'ember-computed'
import layout    from '../../templates/components/gh-event/push-event'

export default Component.extend({
  layout,
  commitLimit: 2,

  showMore: computed('event.payload.size', 'commitLimit', function() {
    return this.get('event.payload.size') > this.get('commitLimit')
  }),

  commits: computed('event.payload.commits', 'commitLimit', function() {
    return this.get('event.payload.commits').slice(0, this.get('commitLimit'))
  })
})
