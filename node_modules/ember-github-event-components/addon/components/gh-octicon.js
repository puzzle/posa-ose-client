import Component from 'ember-component'
import computed  from 'ember-computed'

const Octicon = Component.extend({
  tagName: 'span',

  classNames: [ 'octicon' ],
  classNameBindings: [ 'iconClass' ],

  iconClass: computed('icon', function() {
    return `octicon-${this.get('icon')}`
  })
})

Octicon.reopenClass({
  positionalParams: [ 'icon' ]
})

export default Octicon
