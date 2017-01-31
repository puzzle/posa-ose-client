/* eslint node: true */
'use strict'

module.exports = {
  name: 'ember-github-event-components',

  included: function(app) {
    var requiredAddons = [
      'ember-remarkable'
    ]

    this._super.included.apply(this, arguments)

    this.addons.forEach(function(addon) {
      if (requiredAddons.indexOf(addon.name) > -1) {
        addon.included.apply(addon, arguments)
      }
    })
  }
}
