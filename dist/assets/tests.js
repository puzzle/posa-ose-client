define('posa/tests/adapters/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | adapters/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass jshint.');
  });
});
define('posa/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('posa/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('posa/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('posa/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'posa/tests/helpers/start-app', 'posa/tests/helpers/destroy-app'], function (exports, _qunit, _posaTestsHelpersStartApp, _posaTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _posaTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }

        (0, _posaTestsHelpersDestroyApp['default'])(this.application);
      }
    });
  };
});
define('posa/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('posa/tests/helpers/resolver', ['exports', 'posa/resolver', 'posa/config/environment'], function (exports, _posaResolver, _posaConfigEnvironment) {

  var resolver = _posaResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _posaConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _posaConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('posa/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('posa/tests/helpers/start-app', ['exports', 'ember', 'posa/app', 'posa/config/environment'], function (exports, _ember, _posaApp, _posaConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _posaConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _posaApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('posa/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('posa/tests/models/commit-comment-event.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/commit-comment-event.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/commit-comment-event.js should pass jshint.');
  });
});
define('posa/tests/models/create-event.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/create-event.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/create-event.js should pass jshint.');
  });
});
define('posa/tests/models/delete-event.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/delete-event.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/delete-event.js should pass jshint.');
  });
});
define('posa/tests/models/deployment-event.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/deployment-event.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/deployment-event.js should pass jshint.');
  });
});
define('posa/tests/models/deployment-status-event.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/deployment-status-event.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/deployment-status-event.js should pass jshint.');
  });
});
define('posa/tests/models/download-event.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/download-event.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/download-event.js should pass jshint.');
  });
});
define('posa/tests/models/event.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/event.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/event.js should pass jshint.');
  });
});
define('posa/tests/models/follow-event.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/follow-event.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/follow-event.js should pass jshint.');
  });
});
define('posa/tests/models/fork-apply-event.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/fork-apply-event.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/fork-apply-event.js should pass jshint.');
  });
});
define('posa/tests/models/fork-event.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/fork-event.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/fork-event.js should pass jshint.');
  });
});
define('posa/tests/models/gist-event.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/gist-event.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/gist-event.js should pass jshint.');
  });
});
define('posa/tests/models/gollum-event.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/gollum-event.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/gollum-event.js should pass jshint.');
  });
});
define('posa/tests/models/issue-comment-event.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/issue-comment-event.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/issue-comment-event.js should pass jshint.');
  });
});
define('posa/tests/models/issues-event.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/issues-event.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/issues-event.js should pass jshint.');
  });
});
define('posa/tests/models/member-event.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/member-event.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/member-event.js should pass jshint.');
  });
});
define('posa/tests/models/membership-event.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/membership-event.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/membership-event.js should pass jshint.');
  });
});
define('posa/tests/models/organization.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/organization.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/organization.js should pass jshint.');
  });
});
define('posa/tests/models/page-build-event.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/page-build-event.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/page-build-event.js should pass jshint.');
  });
});
define('posa/tests/models/public-event.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/public-event.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/public-event.js should pass jshint.');
  });
});
define('posa/tests/models/pull-request-event.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/pull-request-event.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/pull-request-event.js should pass jshint.');
  });
});
define('posa/tests/models/pull-request-review-comment-event.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/pull-request-review-comment-event.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/pull-request-review-comment-event.js should pass jshint.');
  });
});
define('posa/tests/models/push-event.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/push-event.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/push-event.js should pass jshint.');
  });
});
define('posa/tests/models/release-event.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/release-event.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/release-event.js should pass jshint.');
  });
});
define('posa/tests/models/repository-event.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/repository-event.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/repository-event.js should pass jshint.');
  });
});
define('posa/tests/models/status-event.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/status-event.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/status-event.js should pass jshint.');
  });
});
define('posa/tests/models/team-add-event.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/team-add-event.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/team-add-event.js should pass jshint.');
  });
});
define('posa/tests/models/user.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/user.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/user.js should pass jshint.\nmodels/user.js: line 11, col 15, \'Ember\' is not defined.\n\n1 error');
  });
});
define('posa/tests/models/watch-event.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/watch-event.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/watch-event.js should pass jshint.');
  });
});
define('posa/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('posa/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('posa/tests/routes/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass jshint.');
  });
});
define('posa/tests/routes/organization.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/organization.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/organization.js should pass jshint.');
  });
});
define('posa/tests/routes/organization/activity.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/organization/activity.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/organization/activity.js should pass jshint.');
  });
});
define('posa/tests/services/github.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | services/github.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/github.js should pass jshint.');
  });
});
define('posa/tests/test-helper', ['exports', 'posa/tests/helpers/resolver', 'ember-qunit'], function (exports, _posaTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_posaTestsHelpersResolver['default']);
});
define('posa/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('posa/tests/unit/adapters/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('posa/tests/unit/adapters/application-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/adapters/application-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass jshint.');
  });
});
define('posa/tests/unit/models/commit-comment-event-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('commit-comment-event', 'Unit | Model | commit comment event', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('posa/tests/unit/models/commit-comment-event-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/commit-comment-event-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/commit-comment-event-test.js should pass jshint.');
  });
});
define('posa/tests/unit/models/create-event-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('create-event', 'Unit | Model | create event', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('posa/tests/unit/models/create-event-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/create-event-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/create-event-test.js should pass jshint.');
  });
});
define('posa/tests/unit/models/delete-event-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('delete-event', 'Unit | Model | delete event', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('posa/tests/unit/models/delete-event-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/delete-event-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/delete-event-test.js should pass jshint.');
  });
});
define('posa/tests/unit/models/deployment-event-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('deployment-event', 'Unit | Model | deployment event', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('posa/tests/unit/models/deployment-event-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/deployment-event-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/deployment-event-test.js should pass jshint.');
  });
});
define('posa/tests/unit/models/deployment-status-event-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('deployment-status-event', 'Unit | Model | deployment status event', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('posa/tests/unit/models/deployment-status-event-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/deployment-status-event-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/deployment-status-event-test.js should pass jshint.');
  });
});
define('posa/tests/unit/models/download-event-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('download-event', 'Unit | Model | download event', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('posa/tests/unit/models/download-event-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/download-event-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/download-event-test.js should pass jshint.');
  });
});
define('posa/tests/unit/models/event-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('event', 'Unit | Model | event', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('posa/tests/unit/models/event-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/event-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/event-test.js should pass jshint.');
  });
});
define('posa/tests/unit/models/follow-event-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('follow-event', 'Unit | Model | follow event', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('posa/tests/unit/models/follow-event-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/follow-event-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/follow-event-test.js should pass jshint.');
  });
});
define('posa/tests/unit/models/fork-apply-event-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('fork-apply-event', 'Unit | Model | fork apply event', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('posa/tests/unit/models/fork-apply-event-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/fork-apply-event-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/fork-apply-event-test.js should pass jshint.');
  });
});
define('posa/tests/unit/models/fork-event-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('fork-event', 'Unit | Model | fork event', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('posa/tests/unit/models/fork-event-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/fork-event-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/fork-event-test.js should pass jshint.');
  });
});
define('posa/tests/unit/models/gist-event-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('gist-event', 'Unit | Model | gist event', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('posa/tests/unit/models/gist-event-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/gist-event-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/gist-event-test.js should pass jshint.');
  });
});
define('posa/tests/unit/models/gollum-event-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('gollum-event', 'Unit | Model | gollum event', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('posa/tests/unit/models/gollum-event-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/gollum-event-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/gollum-event-test.js should pass jshint.');
  });
});
define('posa/tests/unit/models/issue-comment-event-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('issue-comment-event', 'Unit | Model | issue comment event', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('posa/tests/unit/models/issue-comment-event-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/issue-comment-event-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/issue-comment-event-test.js should pass jshint.');
  });
});
define('posa/tests/unit/models/issues-event-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('issues-event', 'Unit | Model | issues event', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('posa/tests/unit/models/issues-event-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/issues-event-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/issues-event-test.js should pass jshint.');
  });
});
define('posa/tests/unit/models/member-event-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('member-event', 'Unit | Model | member event', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('posa/tests/unit/models/member-event-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/member-event-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/member-event-test.js should pass jshint.');
  });
});
define('posa/tests/unit/models/membership-event-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('membership-event', 'Unit | Model | membership event', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('posa/tests/unit/models/membership-event-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/membership-event-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/membership-event-test.js should pass jshint.');
  });
});
define('posa/tests/unit/models/organization-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('organization', 'Unit | Model | organization', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('posa/tests/unit/models/organization-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/organization-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/organization-test.js should pass jshint.');
  });
});
define('posa/tests/unit/models/page-build-event-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('page-build-event', 'Unit | Model | page build event', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('posa/tests/unit/models/page-build-event-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/page-build-event-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/page-build-event-test.js should pass jshint.');
  });
});
define('posa/tests/unit/models/public-event-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('public-event', 'Unit | Model | public event', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('posa/tests/unit/models/public-event-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/public-event-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/public-event-test.js should pass jshint.');
  });
});
define('posa/tests/unit/models/pull-request-event-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('pull-request-event', 'Unit | Model | pull request event', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('posa/tests/unit/models/pull-request-event-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/pull-request-event-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/pull-request-event-test.js should pass jshint.');
  });
});
define('posa/tests/unit/models/pull-request-review-comment-event-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('pull-request-review-comment-event', 'Unit | Model | pull request review comment event', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('posa/tests/unit/models/pull-request-review-comment-event-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/pull-request-review-comment-event-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/pull-request-review-comment-event-test.js should pass jshint.');
  });
});
define('posa/tests/unit/models/push-event-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('push-event', 'Unit | Model | push event', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('posa/tests/unit/models/push-event-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/push-event-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/push-event-test.js should pass jshint.');
  });
});
define('posa/tests/unit/models/release-event-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('release-event', 'Unit | Model | release event', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('posa/tests/unit/models/release-event-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/release-event-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/release-event-test.js should pass jshint.');
  });
});
define('posa/tests/unit/models/repository-event-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('repository-event', 'Unit | Model | repository event', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('posa/tests/unit/models/repository-event-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/repository-event-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/repository-event-test.js should pass jshint.');
  });
});
define('posa/tests/unit/models/status-event-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('status-event', 'Unit | Model | status event', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('posa/tests/unit/models/status-event-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/status-event-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/status-event-test.js should pass jshint.');
  });
});
define('posa/tests/unit/models/team-add-event-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('team-add-event', 'Unit | Model | team add event', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('posa/tests/unit/models/team-add-event-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/team-add-event-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/team-add-event-test.js should pass jshint.');
  });
});
define('posa/tests/unit/models/user-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('user', 'Unit | Model | user', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('posa/tests/unit/models/user-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/user-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/user-test.js should pass jshint.');
  });
});
define('posa/tests/unit/models/watch-event-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('watch-event', 'Unit | Model | watch event', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('posa/tests/unit/models/watch-event-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/watch-event-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/watch-event-test.js should pass jshint.');
  });
});
define('posa/tests/unit/routes/organization-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:organization', 'Unit | Route | organization', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('posa/tests/unit/routes/organization-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/organization-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/organization-test.js should pass jshint.');
  });
});
define('posa/tests/unit/routes/organization/activity-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:organization/activity', 'Unit | Route | organization/activity', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('posa/tests/unit/routes/organization/activity-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/organization/activity-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/organization/activity-test.js should pass jshint.');
  });
});
define('posa/tests/unit/services/github-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:github', 'Unit | Service | github', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('posa/tests/unit/services/github-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/services/github-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/github-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('posa/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
