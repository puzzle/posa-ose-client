"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('posa/adapters/application', ['exports', 'ember-data/adapters/json-api'], function (exports, _emberDataAdaptersJsonApi) {
  exports['default'] = _emberDataAdaptersJsonApi['default'].extend({
    namespace: 'api/v1'
  });
});
define('posa/app', ['exports', 'ember', 'posa/resolver', 'ember-load-initializers', 'posa/config/environment'], function (exports, _ember, _posaResolver, _emberLoadInitializers, _posaConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;
  _ember['default'].run.backburner.DEBUG = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _posaConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _posaConfigEnvironment['default'].podModulePrefix,
    Resolver: _posaResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _posaConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('posa/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'posa/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _posaConfigEnvironment) {

  var name = _posaConfigEnvironment['default'].APP.name;
  var version = _posaConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('posa/components/gh-event', ['exports', 'ember-github-event-components/components/gh-event'], function (exports, _emberGithubEventComponentsComponentsGhEvent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberGithubEventComponentsComponentsGhEvent['default'];
    }
  });
});
define('posa/components/gh-event/create-event', ['exports', 'ember-github-event-components/components/gh-event/create-event'], function (exports, _emberGithubEventComponentsComponentsGhEventCreateEvent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberGithubEventComponentsComponentsGhEventCreateEvent['default'];
    }
  });
});
define('posa/components/gh-event/delete-event', ['exports', 'ember-github-event-components/components/gh-event/delete-event'], function (exports, _emberGithubEventComponentsComponentsGhEventDeleteEvent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberGithubEventComponentsComponentsGhEventDeleteEvent['default'];
    }
  });
});
define('posa/components/gh-event/fork-event', ['exports', 'ember-github-event-components/components/gh-event/fork-event'], function (exports, _emberGithubEventComponentsComponentsGhEventForkEvent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberGithubEventComponentsComponentsGhEventForkEvent['default'];
    }
  });
});
define('posa/components/gh-event/issue-comment-event', ['exports', 'ember-github-event-components/components/gh-event/issue-comment-event'], function (exports, _emberGithubEventComponentsComponentsGhEventIssueCommentEvent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberGithubEventComponentsComponentsGhEventIssueCommentEvent['default'];
    }
  });
});
define('posa/components/gh-event/issues-event', ['exports', 'ember-github-event-components/components/gh-event/issues-event'], function (exports, _emberGithubEventComponentsComponentsGhEventIssuesEvent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberGithubEventComponentsComponentsGhEventIssuesEvent['default'];
    }
  });
});
define('posa/components/gh-event/member-event', ['exports', 'ember-github-event-components/components/gh-event/member-event'], function (exports, _emberGithubEventComponentsComponentsGhEventMemberEvent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberGithubEventComponentsComponentsGhEventMemberEvent['default'];
    }
  });
});
define('posa/components/gh-event/not-implemented', ['exports', 'ember-github-event-components/components/gh-event/not-implemented'], function (exports, _emberGithubEventComponentsComponentsGhEventNotImplemented) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberGithubEventComponentsComponentsGhEventNotImplemented['default'];
    }
  });
});
define('posa/components/gh-event/pull-request-event', ['exports', 'ember-github-event-components/components/gh-event/pull-request-event'], function (exports, _emberGithubEventComponentsComponentsGhEventPullRequestEvent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberGithubEventComponentsComponentsGhEventPullRequestEvent['default'];
    }
  });
});
define('posa/components/gh-event/push-event', ['exports', 'ember-github-event-components/components/gh-event/push-event'], function (exports, _emberGithubEventComponentsComponentsGhEventPushEvent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberGithubEventComponentsComponentsGhEventPushEvent['default'];
    }
  });
});
define('posa/components/gh-event/watch-event', ['exports', 'ember-github-event-components/components/gh-event/watch-event'], function (exports, _emberGithubEventComponentsComponentsGhEventWatchEvent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberGithubEventComponentsComponentsGhEventWatchEvent['default'];
    }
  });
});
define('posa/components/gh-octicon', ['exports', 'ember-github-event-components/components/gh-octicon'], function (exports, _emberGithubEventComponentsComponentsGhOcticon) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberGithubEventComponentsComponentsGhOcticon['default'];
    }
  });
});
define('posa/components/md-dummy', ['exports', 'ember'], function (exports, _ember) {
  var Component = _ember['default'].Component;
  exports['default'] = Component;
});
define('posa/components/md-text', ['exports', 'ember-remarkable/components/md-text'], function (exports, _emberRemarkableComponentsMdText) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRemarkableComponentsMdText['default'];
    }
  });
});
define('posa/helpers/cancel-all', ['exports', 'ember', 'ember-concurrency/-helpers'], function (exports, _ember, _emberConcurrencyHelpers) {
  exports.cancelHelper = cancelHelper;

  function cancelHelper(args) {
    var cancelable = args[0];
    if (!cancelable || typeof cancelable.cancelAll !== 'function') {
      _ember['default'].assert('The first argument passed to the `cancel-all` helper should be a Task or TaskGroup (without quotes); you passed ' + cancelable, false);
    }

    return (0, _emberConcurrencyHelpers.taskHelperClosure)('cancelAll', args);
  }

  exports['default'] = _ember['default'].Helper.helper(cancelHelper);
});
define('posa/helpers/gravatar', ['exports', 'ember-github-event-components/helpers/gravatar'], function (exports, _emberGithubEventComponentsHelpersGravatar) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberGithubEventComponentsHelpersGravatar['default'];
    }
  });
  Object.defineProperty(exports, 'gravatar', {
    enumerable: true,
    get: function get() {
      return _emberGithubEventComponentsHelpersGravatar.gravatar;
    }
  });
});
define('posa/helpers/is-after', ['exports', 'ember', 'posa/config/environment', 'ember-moment/helpers/is-after'], function (exports, _ember, _posaConfigEnvironment, _emberMomentHelpersIsAfter) {
  exports['default'] = _emberMomentHelpersIsAfter['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_posaConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('posa/helpers/is-before', ['exports', 'ember', 'posa/config/environment', 'ember-moment/helpers/is-before'], function (exports, _ember, _posaConfigEnvironment, _emberMomentHelpersIsBefore) {
  exports['default'] = _emberMomentHelpersIsBefore['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_posaConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('posa/helpers/is-between', ['exports', 'ember', 'posa/config/environment', 'ember-moment/helpers/is-between'], function (exports, _ember, _posaConfigEnvironment, _emberMomentHelpersIsBetween) {
  exports['default'] = _emberMomentHelpersIsBetween['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_posaConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('posa/helpers/is-same-or-after', ['exports', 'ember', 'posa/config/environment', 'ember-moment/helpers/is-same-or-after'], function (exports, _ember, _posaConfigEnvironment, _emberMomentHelpersIsSameOrAfter) {
  exports['default'] = _emberMomentHelpersIsSameOrAfter['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_posaConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('posa/helpers/is-same-or-before', ['exports', 'ember', 'posa/config/environment', 'ember-moment/helpers/is-same-or-before'], function (exports, _ember, _posaConfigEnvironment, _emberMomentHelpersIsSameOrBefore) {
  exports['default'] = _emberMomentHelpersIsSameOrBefore['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_posaConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('posa/helpers/is-same', ['exports', 'ember', 'posa/config/environment', 'ember-moment/helpers/is-same'], function (exports, _ember, _posaConfigEnvironment, _emberMomentHelpersIsSame) {
  exports['default'] = _emberMomentHelpersIsSame['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_posaConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('posa/helpers/moment-add', ['exports', 'ember', 'posa/config/environment', 'ember-moment/helpers/moment-add'], function (exports, _ember, _posaConfigEnvironment, _emberMomentHelpersMomentAdd) {
  exports['default'] = _emberMomentHelpersMomentAdd['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_posaConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('posa/helpers/moment-calendar', ['exports', 'ember', 'posa/config/environment', 'ember-moment/helpers/moment-calendar'], function (exports, _ember, _posaConfigEnvironment, _emberMomentHelpersMomentCalendar) {
  exports['default'] = _emberMomentHelpersMomentCalendar['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_posaConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('posa/helpers/moment-duration', ['exports', 'ember-moment/helpers/moment-duration'], function (exports, _emberMomentHelpersMomentDuration) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersMomentDuration['default'];
    }
  });
});
define('posa/helpers/moment-format', ['exports', 'ember', 'posa/config/environment', 'ember-moment/helpers/moment-format'], function (exports, _ember, _posaConfigEnvironment, _emberMomentHelpersMomentFormat) {
  exports['default'] = _emberMomentHelpersMomentFormat['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_posaConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('posa/helpers/moment-from-now', ['exports', 'ember', 'posa/config/environment', 'ember-moment/helpers/moment-from-now'], function (exports, _ember, _posaConfigEnvironment, _emberMomentHelpersMomentFromNow) {
  exports['default'] = _emberMomentHelpersMomentFromNow['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_posaConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('posa/helpers/moment-from', ['exports', 'ember', 'posa/config/environment', 'ember-moment/helpers/moment-from'], function (exports, _ember, _posaConfigEnvironment, _emberMomentHelpersMomentFrom) {
  exports['default'] = _emberMomentHelpersMomentFrom['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_posaConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('posa/helpers/moment-subtract', ['exports', 'ember', 'posa/config/environment', 'ember-moment/helpers/moment-subtract'], function (exports, _ember, _posaConfigEnvironment, _emberMomentHelpersMomentSubtract) {
  exports['default'] = _emberMomentHelpersMomentSubtract['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_posaConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('posa/helpers/moment-to-date', ['exports', 'ember', 'posa/config/environment', 'ember-moment/helpers/moment-to-date'], function (exports, _ember, _posaConfigEnvironment, _emberMomentHelpersMomentToDate) {
  exports['default'] = _emberMomentHelpersMomentToDate['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_posaConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('posa/helpers/moment-to-now', ['exports', 'ember', 'posa/config/environment', 'ember-moment/helpers/moment-to-now'], function (exports, _ember, _posaConfigEnvironment, _emberMomentHelpersMomentToNow) {
  exports['default'] = _emberMomentHelpersMomentToNow['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_posaConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('posa/helpers/moment-to', ['exports', 'ember', 'posa/config/environment', 'ember-moment/helpers/moment-to'], function (exports, _ember, _posaConfigEnvironment, _emberMomentHelpersMomentTo) {
  exports['default'] = _emberMomentHelpersMomentTo['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_posaConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('posa/helpers/moment-unix', ['exports', 'ember-moment/helpers/unix'], function (exports, _emberMomentHelpersUnix) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersUnix['default'];
    }
  });
  Object.defineProperty(exports, 'unix', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersUnix.unix;
    }
  });
});
define('posa/helpers/moment', ['exports', 'ember-moment/helpers/moment'], function (exports, _emberMomentHelpersMoment) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersMoment['default'];
    }
  });
});
define('posa/helpers/now', ['exports', 'ember-moment/helpers/now'], function (exports, _emberMomentHelpersNow) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersNow['default'];
    }
  });
});
define('posa/helpers/perform', ['exports', 'ember', 'ember-concurrency/-helpers'], function (exports, _ember, _emberConcurrencyHelpers) {
  exports.performHelper = performHelper;

  function performHelper(args, hash) {
    return (0, _emberConcurrencyHelpers.taskHelperClosure)('perform', args, hash);
  }

  exports['default'] = _ember['default'].Helper.helper(performHelper);
});
define('posa/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('posa/helpers/ref-to-branch', ['exports', 'ember-github-event-components/helpers/ref-to-branch'], function (exports, _emberGithubEventComponentsHelpersRefToBranch) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberGithubEventComponentsHelpersRefToBranch['default'];
    }
  });
  Object.defineProperty(exports, 'refToBranch', {
    enumerable: true,
    get: function get() {
      return _emberGithubEventComponentsHelpersRefToBranch.refToBranch;
    }
  });
});
define('posa/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('posa/helpers/task', ['exports', 'ember'], function (exports, _ember) {
  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

  function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

  function taskHelper(_ref) {
    var _ref2 = _toArray(_ref);

    var task = _ref2[0];

    var args = _ref2.slice(1);

    return task._curry.apply(task, _toConsumableArray(args));
  }

  exports['default'] = _ember['default'].Helper.helper(taskHelper);
});
define('posa/helpers/unix', ['exports', 'ember-moment/helpers/unix'], function (exports, _emberMomentHelpersUnix) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersUnix['default'];
    }
  });
  Object.defineProperty(exports, 'unix', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersUnix.unix;
    }
  });
});
define('posa/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'posa/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _posaConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_posaConfigEnvironment['default'].APP.name, _posaConfigEnvironment['default'].APP.version)
  };
});
define('posa/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('posa/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('posa/initializers/ember-concurrency', ['exports', 'ember-concurrency'], function (exports, _emberConcurrency) {
  exports['default'] = {
    name: 'ember-concurrency',
    initialize: function initialize() {}
  };
});
// This initializer exists only to make sure that the following
// imports happen before the app boots.
define('posa/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('posa/initializers/export-application-global', ['exports', 'ember', 'posa/config/environment'], function (exports, _ember, _posaConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_posaConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _posaConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_posaConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('posa/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('posa/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('posa/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("posa/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('posa/models/commit-comment-event', ['exports', 'posa/models/event'], function (exports, _posaModelsEvent) {
  // import attr from 'ember-data/attr';
  // import { belongsTo, hasMany } from 'ember-data/relationships';

  exports['default'] = _posaModelsEvent['default'].extend({});
});
define('posa/models/create-event', ['exports', 'posa/models/event'], function (exports, _posaModelsEvent) {
  // import attr from 'ember-data/attr';
  // import { belongsTo, hasMany } from 'ember-data/relationships';

  exports['default'] = _posaModelsEvent['default'].extend({});
});
define('posa/models/delete-event', ['exports', 'posa/models/event'], function (exports, _posaModelsEvent) {
  // import attr from 'ember-data/attr';
  // import { belongsTo, hasMany } from 'ember-data/relationships';

  exports['default'] = _posaModelsEvent['default'].extend({});
});
define('posa/models/deployment-event', ['exports', 'posa/models/event'], function (exports, _posaModelsEvent) {
  // import attr from 'ember-data/attr';
  // import { belongsTo, hasMany } from 'ember-data/relationships';

  exports['default'] = _posaModelsEvent['default'].extend({});
});
define('posa/models/deployment-status-event', ['exports', 'posa/models/event'], function (exports, _posaModelsEvent) {
  // import attr from 'ember-data/attr';
  // import { belongsTo, hasMany } from 'ember-data/relationships';

  exports['default'] = _posaModelsEvent['default'].extend({});
});
define('posa/models/download-event', ['exports', 'posa/models/event'], function (exports, _posaModelsEvent) {
  // import attr from 'ember-data/attr';
  // import { belongsTo, hasMany } from 'ember-data/relationships';

  exports['default'] = _posaModelsEvent['default'].extend({});
});
define('posa/models/event', ['exports', 'ember-data/model', 'ember-data/attr', 'ember-data/relationships', 'ember-computed'], function (exports, _emberDataModel, _emberDataAttr, _emberDataRelationships, _emberComputed) {
  exports['default'] = _emberDataModel['default'].extend({
    actor: (0, _emberDataRelationships.belongsTo)('user'),

    githubId: (0, _emberDataAttr['default'])('string'),
    type: (0, _emberDataAttr['default'])('string'),
    repo: (0, _emberDataAttr['default'])(),
    payload: (0, _emberDataAttr['default'])(),
    'public': (0, _emberDataAttr['default'])('boolean'),
    createdAt: (0, _emberDataAttr['default'])('date'),
    importedAt: (0, _emberDataAttr['default'])('date'),
    updatedAt: (0, _emberDataAttr['default'])('date'),

    created_at: (0, _emberComputed.alias)('createdAt')
  });
});
define('posa/models/follow-event', ['exports', 'posa/models/event'], function (exports, _posaModelsEvent) {
  // import attr from 'ember-data/attr';
  // import { belongsTo, hasMany } from 'ember-data/relationships';

  exports['default'] = _posaModelsEvent['default'].extend({});
});
define('posa/models/fork-apply-event', ['exports', 'posa/models/event'], function (exports, _posaModelsEvent) {
  // import attr from 'ember-data/attr';
  // import { belongsTo, hasMany } from 'ember-data/relationships';

  exports['default'] = _posaModelsEvent['default'].extend({});
});
define('posa/models/fork-event', ['exports', 'posa/models/event'], function (exports, _posaModelsEvent) {
  // import attr from 'ember-data/attr';
  // import { belongsTo, hasMany } from 'ember-data/relationships';

  exports['default'] = _posaModelsEvent['default'].extend({});
});
define('posa/models/gist-event', ['exports', 'posa/models/event'], function (exports, _posaModelsEvent) {
  // import attr from 'ember-data/attr';
  // import { belongsTo, hasMany } from 'ember-data/relationships';

  exports['default'] = _posaModelsEvent['default'].extend({});
});
define('posa/models/gollum-event', ['exports', 'posa/models/event'], function (exports, _posaModelsEvent) {
  // import attr from 'ember-data/attr';
  // import { belongsTo, hasMany } from 'ember-data/relationships';

  exports['default'] = _posaModelsEvent['default'].extend({});
});
define('posa/models/issue-comment-event', ['exports', 'posa/models/event'], function (exports, _posaModelsEvent) {
  // import attr from 'ember-data/attr';
  // import { belongsTo, hasMany } from 'ember-data/relationships';

  exports['default'] = _posaModelsEvent['default'].extend({});
});
define('posa/models/issues-event', ['exports', 'posa/models/event'], function (exports, _posaModelsEvent) {
  // import attr from 'ember-data/attr';
  // import { belongsTo, hasMany } from 'ember-data/relationships';

  exports['default'] = _posaModelsEvent['default'].extend({});
});
define('posa/models/member-event', ['exports', 'posa/models/event'], function (exports, _posaModelsEvent) {
  // import attr from 'ember-data/attr';
  // import { belongsTo, hasMany } from 'ember-data/relationships';

  exports['default'] = _posaModelsEvent['default'].extend({});
});
define('posa/models/membership-event', ['exports', 'posa/models/event'], function (exports, _posaModelsEvent) {
  // import attr from 'ember-data/attr';
  // import { belongsTo, hasMany } from 'ember-data/relationships';

  exports['default'] = _posaModelsEvent['default'].extend({});
});
define('posa/models/organization', ['exports', 'ember-data/model', 'ember-data/attr', 'ember-data/relationships'], function (exports, _emberDataModel, _emberDataAttr, _emberDataRelationships) {
  exports['default'] = _emberDataModel['default'].extend({
    events: (0, _emberDataRelationships.hasMany)('event'),
    members: (0, _emberDataRelationships.hasMany)('user'),

    login: (0, _emberDataAttr['default'])('string'),
    name: (0, _emberDataAttr['default'])('string')
  });
});
define('posa/models/page-build-event', ['exports', 'posa/models/event'], function (exports, _posaModelsEvent) {
  // import attr from 'ember-data/attr';
  // import { belongsTo, hasMany } from 'ember-data/relationships';

  exports['default'] = _posaModelsEvent['default'].extend({});
});
define('posa/models/public-event', ['exports', 'posa/models/event'], function (exports, _posaModelsEvent) {
  // import attr from 'ember-data/attr';
  // import { belongsTo, hasMany } from 'ember-data/relationships';

  exports['default'] = _posaModelsEvent['default'].extend({});
});
define('posa/models/pull-request-event', ['exports', 'posa/models/event'], function (exports, _posaModelsEvent) {
  // import attr from 'ember-data/attr';
  // import { belongsTo, hasMany } from 'ember-data/relationships';

  exports['default'] = _posaModelsEvent['default'].extend({});
});
define('posa/models/pull-request-review-comment-event', ['exports', 'posa/models/event'], function (exports, _posaModelsEvent) {
  // import attr from 'ember-data/attr';
  // import { belongsTo, hasMany } from 'ember-data/relationships';

  exports['default'] = _posaModelsEvent['default'].extend({});
});
define('posa/models/push-event', ['exports', 'posa/models/event'], function (exports, _posaModelsEvent) {
  // import attr from 'ember-data/attr';
  // import { belongsTo, hasMany } from 'ember-data/relationships';

  exports['default'] = _posaModelsEvent['default'].extend({});
});
define('posa/models/release-event', ['exports', 'posa/models/event'], function (exports, _posaModelsEvent) {
  // import attr from 'ember-data/attr';
  // import { belongsTo, hasMany } from 'ember-data/relationships';

  exports['default'] = _posaModelsEvent['default'].extend({});
});
define('posa/models/repository-event', ['exports', 'posa/models/event'], function (exports, _posaModelsEvent) {
  // import attr from 'ember-data/attr';
  // import { belongsTo, hasMany } from 'ember-data/relationships';

  exports['default'] = _posaModelsEvent['default'].extend({});
});
define('posa/models/status-event', ['exports', 'posa/models/event'], function (exports, _posaModelsEvent) {
  // import attr from 'ember-data/attr';
  // import { belongsTo, hasMany } from 'ember-data/relationships';

  exports['default'] = _posaModelsEvent['default'].extend({});
});
define('posa/models/team-add-event', ['exports', 'posa/models/event'], function (exports, _posaModelsEvent) {
  // import attr from 'ember-data/attr';
  // import { belongsTo, hasMany } from 'ember-data/relationships';

  exports['default'] = _posaModelsEvent['default'].extend({});
});
define('posa/models/user', ['exports', 'ember-data/model', 'ember-data/attr', 'ember-data/relationships'], function (exports, _emberDataModel, _emberDataAttr, _emberDataRelationships) {
  exports['default'] = _emberDataModel['default'].extend({
    events: (0, _emberDataRelationships.hasMany)('event'),
    organizations: (0, _emberDataRelationships.hasMany)('organizations'),

    login: (0, _emberDataAttr['default'])('string'),
    avatarUrl: (0, _emberDataAttr['default'])('string'),
    avatar_url: Ember.computed.alias('avatarUrl')
  });
});
define('posa/models/watch-event', ['exports', 'posa/models/event'], function (exports, _posaModelsEvent) {
  // import attr from 'ember-data/attr';
  // import { belongsTo, hasMany } from 'ember-data/relationships';

  exports['default'] = _posaModelsEvent['default'].extend({});
});
define('posa/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('posa/router', ['exports', 'ember', 'posa/config/environment'], function (exports, _ember, _posaConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _posaConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('organization', { path: '/:orgId' }, function () {
      this.route('activity');
    });
  });

  exports['default'] = Router;
});
define('posa/routes/application', ['exports', 'ember-route'], function (exports, _emberRoute) {
  exports['default'] = _emberRoute['default'].extend({
    afterModel: function afterModel() {
      this.transitionTo('organization.activity', 'puzzle');
    }
  });
});
define('posa/routes/organization', ['exports', 'ember-route'], function (exports, _emberRoute) {
  exports['default'] = _emberRoute['default'].extend({
    model: function model(_ref) {
      var orgId = _ref.orgId;

      return this.store.findRecord('organization', orgId);
    }
  });
});
define('posa/routes/organization/activity', ['exports', 'ember-route', 'ember-service/inject', 'ember-concurrency'], function (exports, _emberRoute, _emberServiceInject, _emberConcurrency) {

  var FIVE_MINUTES = 1000 * 60 * 5;

  exports['default'] = _emberRoute['default'].extend({
    github: (0, _emberServiceInject['default'])(),
    pageSize: 50,

    refreshTask: (0, _emberConcurrency.task)(regeneratorRuntime.mark(function callee$0$0() {
      return regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
          case 0:
            if (!true) {
              context$1$0.next = 6;
              break;
            }

            context$1$0.next = 3;
            return (0, _emberConcurrency.timeout)(FIVE_MINUTES);

          case 3:
            this.refresh();
            context$1$0.next = 0;
            break;

          case 6:
          case 'end':
            return context$1$0.stop();
        }
      }, callee$0$0, this);
    })).on('activate'),

    model: function model() {
      var organization = this.modelFor('organization');

      return this.store.query('event', {
        'organization-id': organization.id,
        page: { 'page-size': this.get('pageSize') }
      });
    }
  });
});
define('posa/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('posa/services/github', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  exports['default'] = _emberAjaxServicesAjax['default'].extend({
    host: 'https://api.github.com'
  });
});
define('posa/services/moment', ['exports', 'ember', 'posa/config/environment', 'ember-moment/services/moment'], function (exports, _ember, _posaConfigEnvironment, _emberMomentServicesMoment) {
  exports['default'] = _emberMomentServicesMoment['default'].extend({
    defaultFormat: _ember['default'].get(_posaConfigEnvironment['default'], 'moment.outputFormat')
  });
});
define("posa/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 0
          }
        },
        "moduleName": "posa/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("header");
        dom.setAttribute(el1, "class", "page-header");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        var el3 = dom.createTextNode("\n    POSA\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("small");
        var el4 = dom.createTextNode("\n      Puzzle Open Source Activity\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("main");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2]), 0, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [10, 6], [10, 16]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("posa/templates/components/md-text", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type"]
          },
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "posa/templates/components/md-text.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "md-dummy", [], ["layout", ["subexpr", "@mut", [["get", "precompiledTemplate", ["loc", [null, [2, 20], [2, 39]]]]], [], []]], ["loc", [null, [2, 2], [2, 41]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "posa/templates/components/md-text.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["content", "parsedMarkdown", ["loc", [null, [4, 2], [4, 20]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 7
          }
        },
        "moduleName": "posa/templates/components/md-text.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "dynamic", ["loc", [null, [1, 6], [1, 13]]]]], [], 0, 1, ["loc", [null, [1, 0], [5, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("posa/templates/organization", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "posa/templates/organization.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("posa/templates/organization/activity", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 4,
              "column": 2
            }
          },
          "moduleName": "posa/templates/organization/activity.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "gh-event", [], ["event", ["subexpr", "@mut", [["get", "event", ["loc", [null, [3, 21], [3, 26]]]]], [], []]], ["loc", [null, [3, 4], [3, 28]]]]],
        locals: ["event"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "posa/templates/organization/activity.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("gh-activity-stream");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        return morphs;
      },
      statements: [["block", "each", [["get", "model", ["loc", [null, [2, 10], [2, 15]]]]], [], 0, null, ["loc", [null, [2, 2], [4, 11]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('posa/config/environment', ['ember'], function(Ember) {
  var prefix = 'posa';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("posa/app")["default"].create({"name":"posa","version":"0.0.0+3f80aa36"});
}

/* jshint ignore:end */
//# sourceMappingURL=posa.map
