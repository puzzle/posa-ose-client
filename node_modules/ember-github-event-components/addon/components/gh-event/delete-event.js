import Component from 'ember-component'
import computed  from 'ember-computed'
import layout    from '../../templates/components/gh-event/delete-event'

const ICON_MAP = {
  branch: 'git-branch',
  repo:   'repo',
  tag:    'tag'
}

export default Component.extend({
  layout,

  classNames: [ 'simple' ],

  icon: computed('event.payload.ref_type', function() {
    return ICON_MAP[this.get('event.payload.ref_type')]
  })
})
