'use strict';

define("emb-app/tests/integration/components/postlist/component-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | postlist', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "vPsd5jpZ",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"postlist\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "ZAiO7/jW",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"postlist\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("emb-app/tests/integration/pods/components/product/component-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | product', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "EYTnxDqS",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"product\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "0QhRwC96",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"product\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("emb-app/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('adapters/post.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/post.js should pass ESLint\n\n');
  });
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('models/post.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/post.js should pass ESLint\n\n');
  });
  QUnit.test('models/product.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/product.js should pass ESLint\n\n');
  });
  QUnit.test('pods/application/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/application/route.js should pass ESLint\n\n');
  });
  QUnit.test('pods/components/post-list/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/post-list/component.js should pass ESLint\n\n');
  });
  QUnit.test('pods/components/product/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/product/component.js should pass ESLint\n\n');
  });
  QUnit.test('pods/posts/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/posts/route.js should pass ESLint\n\n');
  });
  QUnit.test('pods/producttable/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/producttable/controller.js should pass ESLint\n\n3:10 - \'computed\' is defined but never used. (no-unused-vars)\n9:5 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n57:13 - Unexpected console statement. (no-console)\n65:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });
  QUnit.test('pods/producttable/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/producttable/route.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('serializers/post.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/post.js should pass ESLint\n\n');
  });
});
define("emb-app/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('emb-app/pods/application/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'emb-app/pods/application/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('emb-app/pods/components/post-list/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'emb-app/pods/components/post-list/template.hbs should pass TemplateLint.\n\nemb-app/pods/components/post-list/template.hbs\n  4:0  error  Incorrect indentation for `<p>` beginning at L4:C0. Expected `<p>` to be at an indentation of 2 but was found at 0.  block-indentation\n');
  });
  QUnit.test('emb-app/pods/components/product/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'emb-app/pods/components/product/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('emb-app/pods/login/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'emb-app/pods/login/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('emb-app/pods/posts/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'emb-app/pods/posts/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('emb-app/pods/producttable/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'emb-app/pods/producttable/template.hbs should pass TemplateLint.\n\nemb-app/pods/producttable/template.hbs\n  35:9  error  Incorrect indentation for `table` beginning at L4:C0. Expected `</table>` ending at L35:C9 to be at an indentation of 0 but was found at 1.  block-indentation\n  17:7  error  Incorrect indentation for `{{#each}}` beginning at L17:C7. Expected `{{#each}}` to be at an indentation of 4 but was found at 7.  block-indentation\n  31:6  error  Incorrect indentation for `{{! <td><button type="button" class="btn btn-info" onclick={{action \'delete\' index}}>Delete</button>\n</td> }}` beginning at L31:C6. Expected `{{! <td><button type="button" class="btn btn-info" onclick={{action \'delete\' index}}>Delete</button>\n</td> }}` to be at an indentation of 4 but was found at 6.  block-indentation\n  30:13  error  Incorrect indentation for `each` beginning at L17:C7. Expected `{{/each}}` ending at L30:C13 to be at an indentation of 7 but was found at 4.  block-indentation\n  18:5  error  Incorrect indentation for `<tr>` beginning at L18:C5. Expected `<tr>` to be at an indentation of 9 but was found at 5.  block-indentation\n  29:9  error  Incorrect indentation for `tr` beginning at L18:C5. Expected `</tr>` ending at L29:C9 to be at an indentation of 5 but was found at 4.  block-indentation\n  19:5  error  Incorrect indentation for `<td>` beginning at L19:C5. Expected `<td>` to be at an indentation of 7 but was found at 5.  block-indentation\n  20:6  error  Incorrect indentation for `<td>` beginning at L20:C6. Expected `<td>` to be at an indentation of 7 but was found at 6.  block-indentation\n  21:6  error  Incorrect indentation for `<td>` beginning at L21:C6. Expected `<td>` to be at an indentation of 7 but was found at 6.  block-indentation\n  22:6  error  Incorrect indentation for `<td>` beginning at L22:C6. Expected `<td>` to be at an indentation of 7 but was found at 6.  block-indentation\n  23:6  error  Incorrect indentation for `<td>` beginning at L23:C6. Expected `<td>` to be at an indentation of 7 but was found at 6.  block-indentation\n  24:6  error  Incorrect indentation for `<td>` beginning at L24:C6. Expected `<td>` to be at an indentation of 7 but was found at 6.  block-indentation\n  25:6  error  Incorrect indentation for `{{#if}}` beginning at L25:C6. Expected `{{#if}}` to be at an indentation of 7 but was found at 6.  block-indentation\n  27:6  error  Incorrect indentation for `<td>` beginning at L27:C6. Expected `<td>` to be at an indentation of 8 but was found at 6.  block-indentation\n  16:15  error  Unnecessary string concatenation. Use {{if usered "red" "blue"}} instead of \'{{if usered "red" "blue"}}\'.  no-unnecessary-concat\n  16:15  error  you must use double quotes in templates  quotes\n  20:55  error  you must use double quotes in templates  quotes\n  25:30  error  you must use double quotes in templates  quotes\n  27:77  error  you must use double quotes in templates  quotes\n');
  });
});
define("emb-app/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('integration/components/postlist/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/postlist/component-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/pods/components/product/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/product/component-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/model-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/model-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/pods/producttable/controller-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/producttable/controller-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/pods/producttable/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/producttable/route-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/posts/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/posts/route-test.js should pass ESLint\n\n');
  });
});
define("emb-app/tests/test-helper", ["emb-app/app", "emb-app/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("emb-app/tests/unit/models/model-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | post', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('post', {});
      assert.ok(model);
    });
  });
});
define("emb-app/tests/unit/pods/producttable/controller-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | producttable', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:producttable');
      assert.ok(controller);
    });
  });
});
define("emb-app/tests/unit/pods/producttable/route-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | producttable', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:producttable');
      assert.ok(route);
    });
  });
});
define("emb-app/tests/unit/posts/route-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | posts', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:posts');
      assert.ok(route);
    });
  });
});
define('emb-app/config/environment', [], function() {
  var prefix = 'emb-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('emb-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
