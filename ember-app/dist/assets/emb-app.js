'use strict';



;define("emb-app/adapters/post", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.RESTAdapter.extend({
    host: 'https://jsonplaceholder.typicode.com'
  });

  _exports.default = _default;
});
;define("emb-app/app", ["exports", "emb-app/resolver", "ember-load-initializers", "emb-app/config/environment"], function (_exports, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
  var _default = App;
  _exports.default = _default;
});
;define("emb-app/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("emb-app/helpers/and", ["exports", "ember-truth-helpers/helpers/and"], function (_exports, _and) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  Object.defineProperty(_exports, "and", {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
});
;define("emb-app/helpers/app-version", ["exports", "emb-app/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("emb-app/helpers/eq", ["exports", "ember-truth-helpers/helpers/equal"], function (_exports, _equal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _equal.default;
    }
  });
  Object.defineProperty(_exports, "equal", {
    enumerable: true,
    get: function () {
      return _equal.equal;
    }
  });
});
;define("emb-app/helpers/gt", ["exports", "ember-truth-helpers/helpers/gt"], function (_exports, _gt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(_exports, "gt", {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
});
;define("emb-app/helpers/gte", ["exports", "ember-truth-helpers/helpers/gte"], function (_exports, _gte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(_exports, "gte", {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
});
;define("emb-app/helpers/is-array", ["exports", "ember-truth-helpers/helpers/is-array"], function (_exports, _isArray) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(_exports, "isArray", {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
});
;define("emb-app/helpers/is-empty", ["exports", "ember-truth-helpers/helpers/is-empty"], function (_exports, _isEmpty) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEmpty.default;
    }
  });
});
;define("emb-app/helpers/is-equal", ["exports", "ember-truth-helpers/helpers/is-equal"], function (_exports, _isEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(_exports, "isEqual", {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
;define("emb-app/helpers/loc", ["exports", "@ember/string/helpers/loc"], function (_exports, _loc) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _loc.default;
    }
  });
  Object.defineProperty(_exports, "loc", {
    enumerable: true,
    get: function () {
      return _loc.loc;
    }
  });
});
;define("emb-app/helpers/lt", ["exports", "ember-truth-helpers/helpers/lt"], function (_exports, _lt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(_exports, "lt", {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
});
;define("emb-app/helpers/lte", ["exports", "ember-truth-helpers/helpers/lte"], function (_exports, _lte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(_exports, "lte", {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
});
;define("emb-app/helpers/not-eq", ["exports", "ember-truth-helpers/helpers/not-equal"], function (_exports, _notEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _notEqual.default;
    }
  });
  Object.defineProperty(_exports, "notEqualHelper", {
    enumerable: true,
    get: function () {
      return _notEqual.notEqualHelper;
    }
  });
});
;define("emb-app/helpers/not", ["exports", "ember-truth-helpers/helpers/not"], function (_exports, _not) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(_exports, "not", {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
});
;define("emb-app/helpers/or", ["exports", "ember-truth-helpers/helpers/or"], function (_exports, _or) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(_exports, "or", {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
});
;define("emb-app/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("emb-app/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("emb-app/helpers/xor", ["exports", "ember-truth-helpers/helpers/xor"], function (_exports, _xor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(_exports, "xor", {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
});
;define("emb-app/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "emb-app/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("emb-app/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("emb-app/initializers/ember-data", ["exports", "ember-data/setup-container"], function (_exports, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    ```app/services/store.js
    import DS from 'ember-data';
  
    export default DS.Store.extend({
      adapter: 'custom'
    });
    ```
  
    ```app/controllers/posts.js
    import { Controller } from '@ember/controller';
  
    export default Controller.extend({
      // ...
    });
  
    When the application is initialized, `ApplicationStore` will automatically be
    instantiated, and the instance of `PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("emb-app/initializers/export-application-global", ["exports", "emb-app/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
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

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("emb-app/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("emb-app/models/post", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const {
    Model,
    attr
  } = _emberData.default;

  var _default = Model.extend({
    title: attr('string', {
      defaultValue: ''
    }),
    body: attr('string', {
      defaultValue: ''
    })
  });

  _exports.default = _default;
});
;define("emb-app/models/product", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  //import Model, { attr } from "@ember-data/model";
  const {
    Model,
    attr
  } = _emberData.default;

  var _default = Model.extend({
    name: attr('string'),
    description: attr('string'),
    price: attr('string'),
    type: attr('string')
  });

  _exports.default = _default;
});
;define("emb-app/pods/application/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    init() {
      this._super(...arguments);
    }

  });

  _exports.default = _default;
});
;define("emb-app/pods/application/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "lB/YM0yp",
    "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[1,[21,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "emb-app/pods/application/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("emb-app/pods/components/post-list/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    store: Ember.inject.service() // async init() {
    //   this._super(...arguments);
    //   // api call  GET baseurl/posts
    //   const posts =  await this.store.findAll('post');
    //   this.set('posts',posts); 
    // }

  });

  _exports.default = _default;
});
;define("emb-app/pods/components/post-list/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "I9SEioX0",
    "block": "{\"symbols\":[\"post\"],\"statements\":[[7,\"h1\"],[9],[0,\"i am postlist\"],[10],[0,\"\\n\\n\"],[4,\"each\",[[23,[\"posts\"]]],null,{\"statements\":[[7,\"p\"],[9],[1,[22,1,[\"title\"]],false],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "emb-app/pods/components/post-list/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("emb-app/pods/components/product/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({});

  _exports.default = _default;
});
;define("emb-app/pods/components/product/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "pMR/dhrP",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[14,1]],\"hasEval\":false}",
    "meta": {
      "moduleName": "emb-app/pods/components/product/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("emb-app/pods/login/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "HoBHIs4o",
    "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\\n\"],[7,\"h1\"],[9],[0,\"i am login\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "emb-app/pods/login/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("emb-app/pods/posts/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("emb-app/pods/posts/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "TSEnrYIT",
    "block": "{\"symbols\":[],\"statements\":[[7,\"h1\"],[9],[0,\"post route\"],[10],[0,\"\\n\"],[1,[21,\"post-list\"],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "emb-app/pods/posts/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("emb-app/pods/producttable/controller", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    products: [{
      id: 1,
      name: 'Sony',
      description: 'LCD 40inch',
      price: '30,000',
      type: 'Television'
    }, {
      id: 2,
      name: 'Shirt',
      description: '100% cotton',
      price: '3,000',
      type: 'Apparel'
    }, {
      id: 3,
      name: 'Samsung',
      description: 'Android 6inch',
      price: '20,000',
      type: 'Mobile'
    }, {
      id: 4,
      name: 'LG',
      description: 'Double door 6.5 ltrs',
      price: '25,000',
      type: 'Refrigerator'
    }, {
      id: 5,
      name: 'Jeans',
      description: 'Denim 36',
      price: '5,000',
      type: 'Apparel'
    }],
    store: Ember.inject.service(),
    // init() {
    //   this._super(...arguments);
    //   const storedProducts = products.map((product) => {
    //     console.log(storedProducts);
    //     return this.store.createRecord("product", product);
    //   });
    //   this.set("products", storedProducts);
    // },
    // actions: {
    //     add() {
    //         console.log('add')
    //         const name = this.get('name');
    //         const description = this.get('description');
    //         const price = this.get('price');
    //         const type = this.get('type')
    //         const productDetails = this.get('products');
    //         const details = {
    //             name: name,
    //            description: description,
    //             price: price,
    //             type: type,
    //         }
    //        
    //     },
    //     delete() {
    //         const productDetails = this.get('products');
    //         productDetails.removeAt(0)
    //         console.log(productDetails)
    //         this.set('employees', productDetails);
    //     },
    // }
    actions: {
      delete(index) {
        const productDetails = this.get('products');
        productDetails.removeAt(index);
        console.log(productDetails);
        this.set('products', productDetails);
      },

      changeColor: function (index) {
        const productDetails = this.get('products'); // productDetails.removeAt(index)

        this.toggleProperty("usered", index);
        this.set('products', productDetails);
      }
    }
  });

  _exports.default = _default;
});
;define("emb-app/pods/producttable/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("emb-app/pods/producttable/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "M4c1EUUT",
    "block": "{\"symbols\":[\"product\",\"index\"],\"statements\":[[7,\"h2\"],[9],[0,\" PRODUCTLISTTABLE \"],[10],[0,\"\\n\"],[1,[21,\"name\"],false],[0,\"\\n\\n\"],[7,\"table\"],[11,\"class\",\"table table-bordered table-hover\"],[9],[0,\"\\n  \"],[7,\"thead\"],[9],[0,\"\\n    \"],[7,\"tr\"],[11,\"class\",\"heading\"],[9],[0,\"\\n      \"],[7,\"th\"],[11,\"scope\",\"col\"],[9],[0,\"id\"],[10],[0,\"\\n      \"],[7,\"th\"],[11,\"scope\",\"col\"],[9],[0,\"select\"],[10],[0,\"\\n      \"],[7,\"th\"],[11,\"scope\",\"col\"],[9],[0,\"name\"],[10],[0,\"\\n      \"],[7,\"th\"],[11,\"scope\",\"col\"],[9],[0,\"description\"],[10],[0,\"\\n      \"],[7,\"th\"],[11,\"scope\",\"col\"],[9],[0,\"price\"],[10],[0,\"\\n      \"],[7,\"th\"],[11,\"scope\",\"col\"],[9],[0,\"type\"],[10],[0,\"\\n      \\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"tbody\"],[12,\"class\",[28,[[27,\"if\",[[23,[\"usered\"]],\"red\",\"blue\"],null]]]],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"products\"]]],null,{\"statements\":[[0,\"     \"],[7,\"tr\"],[9],[0,\"\\n     \"],[7,\"td\"],[11,\"scope\",\"row\"],[9],[1,[22,1,[\"id\"]],false],[10],[0,\"\\n      \"],[7,\"td\"],[9],[7,\"input\"],[11,\"id\",\"toggle1\"],[11,\"type\",\"checkbox\"],[9],[3,\"action\",[[22,0,[]],\"changeColor\"]],[10],[10],[0,\"\\n      \"],[7,\"td\"],[9],[1,[22,1,[\"name\"]],false],[10],[0,\"\\n      \"],[7,\"td\"],[9],[1,[22,1,[\"description\"]],false],[10],[0,\"\\n      \"],[7,\"td\"],[9],[1,[22,1,[\"price\"]],false],[10],[0,\"\\n      \"],[7,\"td\"],[9],[1,[22,1,[\"type\"]],false],[10],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[22,1,[\"type\"]],\"Apparel\"],null]],null,{\"statements\":[],\"parameters\":[]},{\"statements\":[[0,\"      \"],[7,\"td\"],[9],[7,\"button\"],[11,\"class\",\"delete btn btn-info\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"delete\",[22,2,[]]],null]],[11,\"type\",\"button\"],[9],[0,\"Delete\"],[10],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"    \"],[10],[0,\"\\n\"]],\"parameters\":[1,2]},null],[0,\"    \\n  \"],[10],[0,\"\\n \"],[10],[0,\"\\n\\n\"],[0,\"   \\n     \\n\"],[0,\"    \\n\"],[0,\" \\n\\n\\n\\n\\n\\n\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "emb-app/pods/producttable/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("emb-app/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
;define("emb-app/router", ["exports", "emb-app/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });
  Router.map(function () {
    this.route('posts');
    this.route('login');
    this.route('users');
    this.route('producttable');
  });
  var _default = Router;
  _exports.default = _default;
});
;define("emb-app/serializers/post", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.RESTSerializer.extend({
    normalizeFindAllResponse(store, primaryModelClass, payload) {
      payload = {
        posts: payload
      };
      return this._super(store, primaryModelClass, payload);
    }

  });

  _exports.default = _default;
});
;define("emb-app/services/ajax", ["exports", "ember-ajax/services/ajax"], function (_exports, _ajax) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;

;define('emb-app/config/environment', [], function() {
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

;
          if (!runningTests) {
            require("emb-app/app")["default"].create({"name":"emb-app","version":"0.0.0+4cfccbf0"});
          }
        
//# sourceMappingURL=emb-app.map
