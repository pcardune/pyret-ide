module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactDom = __webpack_require__(70);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _react = __webpack_require__(71);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(72);

	var _PyretIDE = __webpack_require__(94);

	var _PyretIDE2 = _interopRequireDefault(_PyretIDE);

	var _createStore = __webpack_require__(205);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _actionCreators = __webpack_require__(170);

	var _firebase = __webpack_require__(172);

	var _firebase2 = _interopRequireDefault(_firebase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * pyret-ide core module
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @module pyret-ide
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	// This file exposes the api that consumers will use to interact
	// with the pyret-ide library.


	exports.default = {

	  /**
	   * Initialize the pyret-ide library
	   * @function
	   * @param {Object} config - configuration for pyret-ide
	   * @param {element} config.rootEl - root dom node to render the ide into.
	   *                           Should be a child of document.body
	   * @param {function} config.runtimeApiLoader - function returning a promise
	   *                                             that loads a runtime api
	   * @param {boolean} [config.debug=false] - Whether or not to enable debug logging
	   * @param {boolean} [config.skipCSSLoading=false] - Whether or not to skip loading
	   *                                                  of CSS used by pyret-ide
	   * @param {Object} [config.codemirrorOptions] - Config object passed to codemirror
	   */

	  init: function init(_ref) {
	    var rootEl = _ref.rootEl;
	    var runtimeApiLoader = _ref.runtimeApiLoader;
	    var debug = _ref.debug;
	    var skipCSSLoading = _ref.skipCSSLoading;
	    var codemirrorOptions = _ref.codemirrorOptions;
	    var firebaseConfig = _ref.firebaseConfig;

	    if (!skipCSSLoading) {
	      __webpack_require__(215);
	    }
	    var store = (0, _createStore2.default)({ debug: debug });
	    store.dispatch((0, _actionCreators.configureIDE)({ codemirrorOptions: codemirrorOptions, runtimeApiLoader: runtimeApiLoader }));
	    store.dispatch((0, _actionCreators.loadRuntimeApi)(runtimeApiLoader));
	    if (firebaseConfig) {
	      _firebase2.default.initializeApp(firebaseConfig);
	    } else {
	      console.warn("Configure firebase before initializing!");
	    }
	    _reactDom2.default.render(_react2.default.createElement(
	      _reactRedux.Provider,
	      { store: store },
	      _react2.default.createElement(_PyretIDE2.default, null)
	    ), rootEl);
	  },


	  /**
	   * Error subclass for errors caused by the user. For example
	   */
	  UserError: function (_Error) {
	    _inherits(UserError, _Error);

	    function UserError() {
	      _classCallCheck(this, UserError);

	      return _possibleConstructorReturn(this, Object.getPrototypeOf(UserError).apply(this, arguments));
	    }

	    return UserError;
	  }(Error)
	};

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */
/***/ function(module, exports) {

	module.exports = require("react-dom");

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.connect = exports.Provider = undefined;

	var _Provider = __webpack_require__(73);

	var _Provider2 = _interopRequireDefault(_Provider);

	var _connect = __webpack_require__(76);

	var _connect2 = _interopRequireDefault(_connect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports.Provider = _Provider2["default"];
	exports.connect = _connect2["default"];

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = undefined;

	var _react = __webpack_require__(71);

	var _storeShape = __webpack_require__(74);

	var _storeShape2 = _interopRequireDefault(_storeShape);

	var _warning = __webpack_require__(75);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var didWarnAboutReceivingStore = false;
	function warnAboutReceivingStore() {
	  if (didWarnAboutReceivingStore) {
	    return;
	  }
	  didWarnAboutReceivingStore = true;

	  (0, _warning2["default"])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	}

	var Provider = function (_Component) {
	  _inherits(Provider, _Component);

	  Provider.prototype.getChildContext = function getChildContext() {
	    return { store: this.store };
	  };

	  function Provider(props, context) {
	    _classCallCheck(this, Provider);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	    _this.store = props.store;
	    return _this;
	  }

	  Provider.prototype.render = function render() {
	    var children = this.props.children;

	    return _react.Children.only(children);
	  };

	  return Provider;
	}(_react.Component);

	exports["default"] = Provider;

	if (false) {
	  Provider.prototype.componentWillReceiveProps = function (nextProps) {
	    var store = this.store;
	    var nextStore = nextProps.store;

	    if (store !== nextStore) {
	      warnAboutReceivingStore();
	    }
	  };
	}

	Provider.propTypes = {
	  store: _storeShape2["default"].isRequired,
	  children: _react.PropTypes.element.isRequired
	};
	Provider.childContextTypes = {
	  store: _storeShape2["default"].isRequired
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(71);

	exports["default"] = _react.PropTypes.shape({
	  subscribe: _react.PropTypes.func.isRequired,
	  dispatch: _react.PropTypes.func.isRequired,
	  getState: _react.PropTypes.func.isRequired
	});

/***/ },
/* 75 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that you can use this stack
	    // to find the callsite that caused this warning to fire.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.__esModule = true;
	exports["default"] = connect;

	var _react = __webpack_require__(71);

	var _storeShape = __webpack_require__(74);

	var _storeShape2 = _interopRequireDefault(_storeShape);

	var _shallowEqual = __webpack_require__(77);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _wrapActionCreators = __webpack_require__(78);

	var _wrapActionCreators2 = _interopRequireDefault(_wrapActionCreators);

	var _warning = __webpack_require__(75);

	var _warning2 = _interopRequireDefault(_warning);

	var _isPlainObject = __webpack_require__(81);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _hoistNonReactStatics = __webpack_require__(92);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _invariant = __webpack_require__(93);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var defaultMapStateToProps = function defaultMapStateToProps(state) {
	  return {};
	}; // eslint-disable-line no-unused-vars
	var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
	  return { dispatch: dispatch };
	};
	var defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {
	  return _extends({}, parentProps, stateProps, dispatchProps);
	};

	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}

	var errorObject = { value: null };
	function tryCatch(fn, ctx) {
	  try {
	    return fn.apply(ctx);
	  } catch (e) {
	    errorObject.value = e;
	    return errorObject;
	  }
	}

	// Helps track hot reloading.
	var nextVersion = 0;

	function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
	  var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	  var shouldSubscribe = Boolean(mapStateToProps);
	  var mapState = mapStateToProps || defaultMapStateToProps;

	  var mapDispatch = undefined;
	  if (typeof mapDispatchToProps === 'function') {
	    mapDispatch = mapDispatchToProps;
	  } else if (!mapDispatchToProps) {
	    mapDispatch = defaultMapDispatchToProps;
	  } else {
	    mapDispatch = (0, _wrapActionCreators2["default"])(mapDispatchToProps);
	  }

	  var finalMergeProps = mergeProps || defaultMergeProps;
	  var _options$pure = options.pure;
	  var pure = _options$pure === undefined ? true : _options$pure;
	  var _options$withRef = options.withRef;
	  var withRef = _options$withRef === undefined ? false : _options$withRef;

	  var checkMergedEquals = pure && finalMergeProps !== defaultMergeProps;

	  // Helps track hot reloading.
	  var version = nextVersion++;

	  return function wrapWithConnect(WrappedComponent) {
	    var connectDisplayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';

	    function checkStateShape(props, methodName) {
	      if (!(0, _isPlainObject2["default"])(props)) {
	        (0, _warning2["default"])(methodName + '() in ' + connectDisplayName + ' must return a plain object. ' + ('Instead received ' + props + '.'));
	      }
	    }

	    function computeMergedProps(stateProps, dispatchProps, parentProps) {
	      var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
	      if (false) {
	        checkStateShape(mergedProps, 'mergeProps');
	      }
	      return mergedProps;
	    }

	    var Connect = function (_Component) {
	      _inherits(Connect, _Component);

	      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	        return !pure || this.haveOwnPropsChanged || this.hasStoreStateChanged;
	      };

	      function Connect(props, context) {
	        _classCallCheck(this, Connect);

	        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	        _this.version = version;
	        _this.store = props.store || context.store;

	        (0, _invariant2["default"])(_this.store, 'Could not find "store" in either the context or ' + ('props of "' + connectDisplayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "store" as a prop to "' + connectDisplayName + '".'));

	        var storeState = _this.store.getState();
	        _this.state = { storeState: storeState };
	        _this.clearCache();
	        return _this;
	      }

	      Connect.prototype.computeStateProps = function computeStateProps(store, props) {
	        if (!this.finalMapStateToProps) {
	          return this.configureFinalMapState(store, props);
	        }

	        var state = store.getState();
	        var stateProps = this.doStatePropsDependOnOwnProps ? this.finalMapStateToProps(state, props) : this.finalMapStateToProps(state);

	        if (false) {
	          checkStateShape(stateProps, 'mapStateToProps');
	        }
	        return stateProps;
	      };

	      Connect.prototype.configureFinalMapState = function configureFinalMapState(store, props) {
	        var mappedState = mapState(store.getState(), props);
	        var isFactory = typeof mappedState === 'function';

	        this.finalMapStateToProps = isFactory ? mappedState : mapState;
	        this.doStatePropsDependOnOwnProps = this.finalMapStateToProps.length !== 1;

	        if (isFactory) {
	          return this.computeStateProps(store, props);
	        }

	        if (false) {
	          checkStateShape(mappedState, 'mapStateToProps');
	        }
	        return mappedState;
	      };

	      Connect.prototype.computeDispatchProps = function computeDispatchProps(store, props) {
	        if (!this.finalMapDispatchToProps) {
	          return this.configureFinalMapDispatch(store, props);
	        }

	        var dispatch = store.dispatch;

	        var dispatchProps = this.doDispatchPropsDependOnOwnProps ? this.finalMapDispatchToProps(dispatch, props) : this.finalMapDispatchToProps(dispatch);

	        if (false) {
	          checkStateShape(dispatchProps, 'mapDispatchToProps');
	        }
	        return dispatchProps;
	      };

	      Connect.prototype.configureFinalMapDispatch = function configureFinalMapDispatch(store, props) {
	        var mappedDispatch = mapDispatch(store.dispatch, props);
	        var isFactory = typeof mappedDispatch === 'function';

	        this.finalMapDispatchToProps = isFactory ? mappedDispatch : mapDispatch;
	        this.doDispatchPropsDependOnOwnProps = this.finalMapDispatchToProps.length !== 1;

	        if (isFactory) {
	          return this.computeDispatchProps(store, props);
	        }

	        if (false) {
	          checkStateShape(mappedDispatch, 'mapDispatchToProps');
	        }
	        return mappedDispatch;
	      };

	      Connect.prototype.updateStatePropsIfNeeded = function updateStatePropsIfNeeded() {
	        var nextStateProps = this.computeStateProps(this.store, this.props);
	        if (this.stateProps && (0, _shallowEqual2["default"])(nextStateProps, this.stateProps)) {
	          return false;
	        }

	        this.stateProps = nextStateProps;
	        return true;
	      };

	      Connect.prototype.updateDispatchPropsIfNeeded = function updateDispatchPropsIfNeeded() {
	        var nextDispatchProps = this.computeDispatchProps(this.store, this.props);
	        if (this.dispatchProps && (0, _shallowEqual2["default"])(nextDispatchProps, this.dispatchProps)) {
	          return false;
	        }

	        this.dispatchProps = nextDispatchProps;
	        return true;
	      };

	      Connect.prototype.updateMergedPropsIfNeeded = function updateMergedPropsIfNeeded() {
	        var nextMergedProps = computeMergedProps(this.stateProps, this.dispatchProps, this.props);
	        if (this.mergedProps && checkMergedEquals && (0, _shallowEqual2["default"])(nextMergedProps, this.mergedProps)) {
	          return false;
	        }

	        this.mergedProps = nextMergedProps;
	        return true;
	      };

	      Connect.prototype.isSubscribed = function isSubscribed() {
	        return typeof this.unsubscribe === 'function';
	      };

	      Connect.prototype.trySubscribe = function trySubscribe() {
	        if (shouldSubscribe && !this.unsubscribe) {
	          this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
	          this.handleChange();
	        }
	      };

	      Connect.prototype.tryUnsubscribe = function tryUnsubscribe() {
	        if (this.unsubscribe) {
	          this.unsubscribe();
	          this.unsubscribe = null;
	        }
	      };

	      Connect.prototype.componentDidMount = function componentDidMount() {
	        this.trySubscribe();
	      };

	      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if (!pure || !(0, _shallowEqual2["default"])(nextProps, this.props)) {
	          this.haveOwnPropsChanged = true;
	        }
	      };

	      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
	        this.tryUnsubscribe();
	        this.clearCache();
	      };

	      Connect.prototype.clearCache = function clearCache() {
	        this.dispatchProps = null;
	        this.stateProps = null;
	        this.mergedProps = null;
	        this.haveOwnPropsChanged = true;
	        this.hasStoreStateChanged = true;
	        this.haveStatePropsBeenPrecalculated = false;
	        this.statePropsPrecalculationError = null;
	        this.renderedElement = null;
	        this.finalMapDispatchToProps = null;
	        this.finalMapStateToProps = null;
	      };

	      Connect.prototype.handleChange = function handleChange() {
	        if (!this.unsubscribe) {
	          return;
	        }

	        var storeState = this.store.getState();
	        var prevStoreState = this.state.storeState;
	        if (pure && prevStoreState === storeState) {
	          return;
	        }

	        if (pure && !this.doStatePropsDependOnOwnProps) {
	          var haveStatePropsChanged = tryCatch(this.updateStatePropsIfNeeded, this);
	          if (!haveStatePropsChanged) {
	            return;
	          }
	          if (haveStatePropsChanged === errorObject) {
	            this.statePropsPrecalculationError = errorObject.value;
	          }
	          this.haveStatePropsBeenPrecalculated = true;
	        }

	        this.hasStoreStateChanged = true;
	        this.setState({ storeState: storeState });
	      };

	      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
	        (0, _invariant2["default"])(withRef, 'To access the wrapped instance, you need to specify ' + '{ withRef: true } as the fourth argument of the connect() call.');

	        return this.refs.wrappedInstance;
	      };

	      Connect.prototype.render = function render() {
	        var haveOwnPropsChanged = this.haveOwnPropsChanged;
	        var hasStoreStateChanged = this.hasStoreStateChanged;
	        var haveStatePropsBeenPrecalculated = this.haveStatePropsBeenPrecalculated;
	        var statePropsPrecalculationError = this.statePropsPrecalculationError;
	        var renderedElement = this.renderedElement;

	        this.haveOwnPropsChanged = false;
	        this.hasStoreStateChanged = false;
	        this.haveStatePropsBeenPrecalculated = false;
	        this.statePropsPrecalculationError = null;

	        if (statePropsPrecalculationError) {
	          throw statePropsPrecalculationError;
	        }

	        var shouldUpdateStateProps = true;
	        var shouldUpdateDispatchProps = true;
	        if (pure && renderedElement) {
	          shouldUpdateStateProps = hasStoreStateChanged || haveOwnPropsChanged && this.doStatePropsDependOnOwnProps;
	          shouldUpdateDispatchProps = haveOwnPropsChanged && this.doDispatchPropsDependOnOwnProps;
	        }

	        var haveStatePropsChanged = false;
	        var haveDispatchPropsChanged = false;
	        if (haveStatePropsBeenPrecalculated) {
	          haveStatePropsChanged = true;
	        } else if (shouldUpdateStateProps) {
	          haveStatePropsChanged = this.updateStatePropsIfNeeded();
	        }
	        if (shouldUpdateDispatchProps) {
	          haveDispatchPropsChanged = this.updateDispatchPropsIfNeeded();
	        }

	        var haveMergedPropsChanged = true;
	        if (haveStatePropsChanged || haveDispatchPropsChanged || haveOwnPropsChanged) {
	          haveMergedPropsChanged = this.updateMergedPropsIfNeeded();
	        } else {
	          haveMergedPropsChanged = false;
	        }

	        if (!haveMergedPropsChanged && renderedElement) {
	          return renderedElement;
	        }

	        if (withRef) {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, _extends({}, this.mergedProps, {
	            ref: 'wrappedInstance'
	          }));
	        } else {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, this.mergedProps);
	        }

	        return this.renderedElement;
	      };

	      return Connect;
	    }(_react.Component);

	    Connect.displayName = connectDisplayName;
	    Connect.WrappedComponent = WrappedComponent;
	    Connect.contextTypes = {
	      store: _storeShape2["default"]
	    };
	    Connect.propTypes = {
	      store: _storeShape2["default"]
	    };

	    if (false) {
	      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	        if (this.version === version) {
	          return;
	        }

	        // We are hot reloading!
	        this.version = version;
	        this.trySubscribe();
	        this.clearCache();
	      };
	    }

	    return (0, _hoistNonReactStatics2["default"])(Connect, WrappedComponent);
	  };
	}

/***/ },
/* 77 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = shallowEqual;
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = wrapActionCreators;

	var _redux = __webpack_require__(79);

	function wrapActionCreators(actionCreators) {
	  return function (dispatch) {
	    return (0, _redux.bindActionCreators)(actionCreators, dispatch);
	  };
	}

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

	var _createStore = __webpack_require__(80);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _combineReducers = __webpack_require__(87);

	var _combineReducers2 = _interopRequireDefault(_combineReducers);

	var _bindActionCreators = __webpack_require__(89);

	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

	var _applyMiddleware = __webpack_require__(90);

	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

	var _compose = __webpack_require__(91);

	var _compose2 = _interopRequireDefault(_compose);

	var _warning = __webpack_require__(88);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}

	if (false) {
	  (0, _warning2["default"])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}

	exports.createStore = _createStore2["default"];
	exports.combineReducers = _combineReducers2["default"];
	exports.bindActionCreators = _bindActionCreators2["default"];
	exports.applyMiddleware = _applyMiddleware2["default"];
	exports.compose = _compose2["default"];

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports["default"] = createStore;

	var _isPlainObject = __webpack_require__(81);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _symbolObservable = __webpack_require__(85);

	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	};

	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [initialState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, initialState, enhancer) {
	  var _ref2;

	  if (typeof initialState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = initialState;
	    initialState = undefined;
	  }

	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }

	    return enhancer(createStore)(reducer, initialState);
	  }

	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }

	  var currentReducer = reducer;
	  var currentState = initialState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;

	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }

	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }

	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }

	    var isSubscribed = true;

	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);

	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }

	      isSubscribed = false;

	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }

	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2["default"])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }

	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i]();
	    }

	    return action;
	  }

	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }

	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }

	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/zenparsing/es-observable
	   */
	  function observable() {
	    var _ref;

	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */

	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }

	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }

	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2["default"]] = function () {
	      return this;
	    }, _ref;
	  }

	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });

	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2["default"]] = observable, _ref2;
	}

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(82),
	    isHostObject = __webpack_require__(83),
	    isObjectLike = __webpack_require__(84);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object,
	 *  else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) ||
	      objectToString.call(value) != objectTag || isHostObject(value)) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}

	module.exports = isPlainObject;


/***/ },
/* 82 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetPrototype = Object.getPrototypeOf;

	/**
	 * Gets the `[[Prototype]]` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {null|Object} Returns the `[[Prototype]]`.
	 */
	function getPrototype(value) {
	  return nativeGetPrototype(Object(value));
	}

	module.exports = getPrototype;


/***/ },
/* 83 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	module.exports = isHostObject;


/***/ },
/* 84 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/* global window */
	'use strict';

	module.exports = __webpack_require__(86)(global || window || this);

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 86 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function symbolObservablePonyfill(root) {
		var result;
		var Symbol = root.Symbol;

		if (typeof Symbol === 'function') {
			if (Symbol.observable) {
				result = Symbol.observable;
			} else {
				result = Symbol('observable');
				Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}

		return result;
	};


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = combineReducers;

	var _createStore = __webpack_require__(80);

	var _isPlainObject = __webpack_require__(81);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _warning = __webpack_require__(88);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
	}

	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'initialState argument passed to createStore' : 'previous state received by the reducer';

	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }

	  if (!(0, _isPlainObject2["default"])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }

	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key);
	  });

	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}

	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }

	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}

	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];
	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);

	  var sanityError;
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }

	  return function combination() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];

	    if (sanityError) {
	      throw sanityError;
	    }

	    if (false) {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action);
	      if (warningMessage) {
	        (0, _warning2["default"])(warningMessage);
	      }
	    }

	    var hasChanged = false;
	    var nextState = {};
	    for (var i = 0; i < finalReducerKeys.length; i++) {
	      var key = finalReducerKeys[i];
	      var reducer = finalReducers[key];
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}

/***/ },
/* 88 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 89 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}

	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }

	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }

	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports["default"] = applyMiddleware;

	var _compose = __webpack_require__(91);

	var _compose2 = _interopRequireDefault(_compose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  return function (createStore) {
	    return function (reducer, initialState, enhancer) {
	      var store = createStore(reducer, initialState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];

	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2["default"].apply(undefined, chain)(store.dispatch);

	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ },
/* 91 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */

	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  } else {
	    var _ret = function () {
	      var last = funcs[funcs.length - 1];
	      var rest = funcs.slice(0, -1);
	      return {
	        v: function v() {
	          return rest.reduceRight(function (composed, f) {
	            return f(composed);
	          }, last.apply(undefined, arguments));
	        }
	      };
	    }();

	    if (typeof _ret === "object") return _ret.v;
	  }
	}

/***/ },
/* 92 */
/***/ function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';

	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};

	var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);

	        /* istanbul ignore else */
	        if (isGetOwnPropertySymbolsAvailable) {
	            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	        }

	        for (var i = 0; i < keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {

	                }
	            }
	        }
	    }

	    return targetComponent;
	};


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (false) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(71);

	var _react2 = _interopRequireDefault(_react);

	var _Editor = __webpack_require__(95);

	var _Editor2 = _interopRequireDefault(_Editor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PyretIDE = function (_React$Component) {
	  _inherits(PyretIDE, _React$Component);

	  function PyretIDE() {
	    _classCallCheck(this, PyretIDE);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(PyretIDE).apply(this, arguments));
	  }

	  _createClass(PyretIDE, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_Editor2.default, null);
	    }
	  }]);

	  return PyretIDE;
	}(_react2.default.Component);

	exports.default = PyretIDE;

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(71);

	var _react2 = _interopRequireDefault(_react);

	var _radium = __webpack_require__(96);

	var _radium2 = _interopRequireDefault(_radium);

	var _reactSplitPane = __webpack_require__(156);

	var _reactSplitPane2 = _interopRequireDefault(_reactSplitPane);

	var _selectors = __webpack_require__(163);

	var selectors = _interopRequireWildcard(_selectors);

	var _reactRedux = __webpack_require__(72);

	var _Toolbar = __webpack_require__(165);

	var _Toolbar2 = _interopRequireDefault(_Toolbar);

	var _CodeWindow = __webpack_require__(185);

	var _CodeWindow2 = _interopRequireDefault(_CodeWindow);

	var _Spinner = __webpack_require__(175);

	var _Spinner2 = _interopRequireDefault(_Spinner);

	var _ErrorBox = __webpack_require__(198);

	var _ErrorBox2 = _interopRequireDefault(_ErrorBox);

	var _constants = __webpack_require__(164);

	var _REPLHistoryList = __webpack_require__(199);

	var _REPLHistoryList2 = _interopRequireDefault(_REPLHistoryList);

	var _REPLInput = __webpack_require__(204);

	var _REPLInput2 = _interopRequireDefault(_REPLInput);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var styles = {
	  editor: {
	    display: 'flex',
	    flexDirection: 'column',
	    height: '100vh',
	    alignItems: 'stretch'
	  },
	  spinner: {
	    paddingTop: 200,
	    height: 50,
	    width: "auto",
	    margin: "auto",
	    display: "flex"
	  },
	  splitPaneWrapper: {
	    flexBasis: '100%',
	    position: 'relative'
	  }
	};

	var Editor = function (_React$Component) {
	  _inherits(Editor, _React$Component);

	  function Editor() {
	    _classCallCheck(this, Editor);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Editor).apply(this, arguments));
	  }

	  _createClass(Editor, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { style: styles.editor },
	        _react2.default.createElement(_Toolbar2.default, { logo: 'https://code.pyret.org/img/pyret-logo.png' }),
	        _react2.default.createElement(
	          'div',
	          { style: [styles.splitPaneWrapper, { fontSize: this.props.fontSize }] },
	          _react2.default.createElement(
	            _reactSplitPane2.default,
	            { defaultSize: '50%', split: 'vertical' },
	            _react2.default.createElement(_CodeWindow2.default, null),
	            _react2.default.createElement(
	              'div',
	              null,
	              this.props.isLoadingRuntime && _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_Spinner2.default, { style: styles.spinner }),
	                _react2.default.createElement(
	                  'p',
	                  { style: { textAlign: "center" } },
	                  _constants.loadTexts[Math.floor(Math.random() * _constants.loadTexts.length)]
	                )
	              ),
	              _react2.default.createElement(_ErrorBox2.default, null),
	              _react2.default.createElement(_REPLHistoryList2.default, null),
	              _react2.default.createElement(_REPLInput2.default, null)
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Editor;
	}(_react2.default.Component);

	Editor.propTypes = {
	  result: _react2.default.PropTypes.any,
	  hasHistory: _react2.default.PropTypes.bool,
	  isLoadingRuntime: _react2.default.PropTypes.bool,
	  hasLoadedRuntime: _react2.default.PropTypes.bool,
	  fontSize: _react2.default.PropTypes.number
	};

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    result: selectors.getResult(state),
	    hasHistory: selectors.hasHistory(state),
	    isLoadingRuntime: selectors.isLoadingRuntime(state),
	    hasLoadedRuntime: selectors.hasLoadedRuntime(state),
	    fontSize: selectors.getFontSize(state)
	  };
	})((0, _radium2.default)(Editor));

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _enhancer = __webpack_require__(97);

	var _enhancer2 = _interopRequireDefault(_enhancer);

	var _plugins = __webpack_require__(142);

	var _plugins2 = _interopRequireDefault(_plugins);

	var _style = __webpack_require__(152);

	var _style2 = _interopRequireDefault(_style);

	var _styleRoot = __webpack_require__(153);

	var _styleRoot2 = _interopRequireDefault(_styleRoot);

	var _getState = __webpack_require__(138);

	var _getState2 = _interopRequireDefault(_getState);

	var _keyframes = __webpack_require__(155);

	var _keyframes2 = _interopRequireDefault(_keyframes);

	var _resolveStyles = __webpack_require__(99);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function Radium(ComposedComponent) {
	  return (0, _enhancer2.default)(ComposedComponent);
	}

	Radium.Plugins = _plugins2.default;
	Radium.Style = _style2.default;
	Radium.StyleRoot = _styleRoot2.default;
	Radium.getState = _getState2.default;
	Radium.keyframes = _keyframes2.default;

	if (false) {
	  Radium.TestMode = {
	    clearState: _resolveStyles.__clearStateForTests,
	    disable: _resolveStyles.__setTestMode.bind(null, false),
	    enable: _resolveStyles.__setTestMode.bind(null, true)
	  };
	}

	exports.default = Radium;
	module.exports = exports['default'];

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = enhanceWithRadium;

	var _react = __webpack_require__(71);

	var _styleKeeper = __webpack_require__(98);

	var _styleKeeper2 = _interopRequireDefault(_styleKeeper);

	var _resolveStyles = __webpack_require__(99);

	var _resolveStyles2 = _interopRequireDefault(_resolveStyles);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var KEYS_TO_IGNORE_WHEN_COPYING_PROPERTIES = ['arguments', 'callee', 'caller', 'length', 'name', 'prototype', 'type'];

	function copyProperties(source, target) {
	  Object.getOwnPropertyNames(source).forEach(function (key) {
	    if (KEYS_TO_IGNORE_WHEN_COPYING_PROPERTIES.indexOf(key) < 0 && !target.hasOwnProperty(key)) {
	      var descriptor = Object.getOwnPropertyDescriptor(source, key);
	      Object.defineProperty(target, key, descriptor);
	    }
	  });
	}

	function enhanceWithRadium(configOrComposedComponent) {
	  var _class, _temp;

	  var config = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  if (typeof configOrComposedComponent !== 'function') {
	    var _ret = function () {
	      var newConfig = _extends({}, config, configOrComposedComponent);
	      return {
	        v: function v(configOrComponent) {
	          return enhanceWithRadium(configOrComponent, newConfig);
	        }
	      };
	    }();

	    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	  }

	  var component = configOrComposedComponent;
	  var ComposedComponent = component;

	  // Handle stateless components
	  if (!ComposedComponent.render && !ComposedComponent.prototype.render) {
	    ComposedComponent = function (_Component) {
	      _inherits(ComposedComponent, _Component);

	      function ComposedComponent() {
	        _classCallCheck(this, ComposedComponent);

	        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	      }

	      ComposedComponent.prototype.render = function render() {
	        return component(this.props, this.context);
	      };

	      return ComposedComponent;
	    }(_react.Component);
	    ComposedComponent.displayName = component.displayName || component.name;
	  }

	  var RadiumEnhancer = (_temp = _class = function (_ComposedComponent) {
	    _inherits(RadiumEnhancer, _ComposedComponent);

	    function RadiumEnhancer() {
	      _classCallCheck(this, RadiumEnhancer);

	      var _this2 = _possibleConstructorReturn(this, _ComposedComponent.apply(this, arguments));

	      _this2.state = _this2.state || {};
	      _this2.state._radiumStyleState = {};
	      _this2._radiumIsMounted = true;
	      return _this2;
	    }

	    RadiumEnhancer.prototype.componentWillUnmount = function componentWillUnmount() {
	      if (_ComposedComponent.prototype.componentWillUnmount) {
	        _ComposedComponent.prototype.componentWillUnmount.call(this);
	      }

	      this._radiumIsMounted = false;

	      if (this._radiumMouseUpListener) {
	        this._radiumMouseUpListener.remove();
	      }

	      if (this._radiumMediaQueryListenersByQuery) {
	        Object.keys(this._radiumMediaQueryListenersByQuery).forEach(function (query) {
	          this._radiumMediaQueryListenersByQuery[query].remove();
	        }, this);
	      }
	    };

	    RadiumEnhancer.prototype.getChildContext = function getChildContext() {
	      var superChildContext = _ComposedComponent.prototype.getChildContext ? _ComposedComponent.prototype.getChildContext.call(this) : {};

	      if (!this.props.radiumConfig) {
	        return superChildContext;
	      }

	      var newContext = _extends({}, superChildContext);

	      if (this.props.radiumConfig) {
	        newContext._radiumConfig = this.props.radiumConfig;
	      }

	      return newContext;
	    };

	    RadiumEnhancer.prototype.render = function render() {
	      var renderedElement = _ComposedComponent.prototype.render.call(this);
	      var currentConfig = this.props.radiumConfig || this.context._radiumConfig || config;

	      if (config && currentConfig !== config) {
	        currentConfig = _extends({}, config, currentConfig);
	      }

	      return (0, _resolveStyles2.default)(this, renderedElement, currentConfig);
	    };

	    return RadiumEnhancer;
	  }(ComposedComponent), _class._isRadiumEnhanced = true, _temp);

	  // Class inheritance uses Object.create and because of __proto__ issues
	  // with IE <10 any static properties of the superclass aren't inherited and
	  // so need to be manually populated.
	  // See http://babeljs.io/docs/advanced/caveats/#classes-10-and-below-

	  copyProperties(component, RadiumEnhancer);

	  if (false) {
	    // This also fixes React Hot Loader by exposing the original components top
	    // level prototype methods on the Radium enhanced prototype as discussed in
	    // https://github.com/FormidableLabs/radium/issues/219.
	    copyProperties(ComposedComponent.prototype, RadiumEnhancer.prototype);
	  }

	  if (RadiumEnhancer.propTypes && RadiumEnhancer.propTypes.style) {
	    RadiumEnhancer.propTypes = _extends({}, RadiumEnhancer.propTypes, {
	      style: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.object])
	    });
	  }

	  RadiumEnhancer.displayName = component.displayName || component.name || 'Component';

	  RadiumEnhancer.contextTypes = _extends({}, RadiumEnhancer.contextTypes, {
	    _radiumConfig: _react.PropTypes.object,
	    _radiumStyleKeeper: _react.PropTypes.instanceOf(_styleKeeper2.default)
	  });

	  RadiumEnhancer.childContextTypes = _extends({}, RadiumEnhancer.childContextTypes, {
	    _radiumConfig: _react.PropTypes.object,
	    _radiumStyleKeeper: _react.PropTypes.instanceOf(_styleKeeper2.default)
	  });

	  return RadiumEnhancer;
	}
	module.exports = exports['default'];

/***/ },
/* 98 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var StyleKeeper = function () {
	  function StyleKeeper(userAgent) {
	    _classCallCheck(this, StyleKeeper);

	    this._userAgent = userAgent;
	    this._listeners = [];
	    this._cssSet = {};
	  }

	  StyleKeeper.prototype.subscribe = function subscribe(listener) {
	    var _this = this;

	    if (this._listeners.indexOf(listener) === -1) {
	      this._listeners.push(listener);
	    }

	    return {
	      // Must be fat arrow to capture `this`
	      remove: function remove() {
	        var listenerIndex = _this._listeners.indexOf(listener);
	        if (listenerIndex > -1) {
	          _this._listeners.splice(listenerIndex, 1);
	        }
	      }
	    };
	  };

	  StyleKeeper.prototype.addCSS = function addCSS(css) {
	    var _this2 = this;

	    if (!this._cssSet[css]) {
	      this._cssSet[css] = true;
	      this._emitChange();
	    }

	    return {
	      // Must be fat arrow to capture `this`
	      remove: function remove() {
	        delete _this2._cssSet[css];
	        _this2._emitChange();
	      }
	    };
	  };

	  StyleKeeper.prototype.getCSS = function getCSS() {
	    return Object.keys(this._cssSet).join('\n');
	  };

	  StyleKeeper.prototype._emitChange = function _emitChange() {
	    this._listeners.forEach(function (listener) {
	      return listener();
	    });
	  };

	  return StyleKeeper;
	}();

	exports.default = StyleKeeper;
	module.exports = exports['default'];

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _appendImportantToEachValue = __webpack_require__(100);

	var _appendImportantToEachValue2 = _interopRequireDefault(_appendImportantToEachValue);

	var _cssRuleSetToString = __webpack_require__(103);

	var _cssRuleSetToString2 = _interopRequireDefault(_cssRuleSetToString);

	var _getState = __webpack_require__(138);

	var _getState2 = _interopRequireDefault(_getState);

	var _getStateKey = __webpack_require__(139);

	var _getStateKey2 = _interopRequireDefault(_getStateKey);

	var _hash = __webpack_require__(140);

	var _hash2 = _interopRequireDefault(_hash);

	var _mergeStyles = __webpack_require__(141);

	var _plugins = __webpack_require__(142);

	var _plugins2 = _interopRequireDefault(_plugins);

	var _exenv = __webpack_require__(151);

	var _exenv2 = _interopRequireDefault(_exenv);

	var _react = __webpack_require__(71);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DEFAULT_CONFIG = {
	  plugins: [_plugins2.default.mergeStyleArray, _plugins2.default.checkProps, _plugins2.default.resolveMediaQueries, _plugins2.default.resolveInteractionStyles, _plugins2.default.keyframes, _plugins2.default.visited, _plugins2.default.prefix, _plugins2.default.checkProps]
	};

	// Gross
	var globalState = {};

	// Declare early for recursive helpers.
	var resolveStyles = null;

	var _shouldResolveStyles = function _shouldResolveStyles(component) {
	  return component.type && !component.type._isRadiumEnhanced;
	};

	var _resolveChildren = function _resolveChildren(_ref) {
	  var children = _ref.children;
	  var component = _ref.component;
	  var config = _ref.config;
	  var existingKeyMap = _ref.existingKeyMap;

	  if (!children) {
	    return children;
	  }

	  var childrenType = typeof children === 'undefined' ? 'undefined' : _typeof(children);

	  if (childrenType === 'string' || childrenType === 'number') {
	    // Don't do anything with a single primitive child
	    return children;
	  }

	  if (childrenType === 'function') {
	    // Wrap the function, resolving styles on the result
	    return function () {
	      var result = children.apply(this, arguments);
	      if (_react2.default.isValidElement(result)) {
	        return resolveStyles(component, result, config, existingKeyMap, true);
	      }
	      return result;
	    };
	  }

	  if (_react2.default.Children.count(children) === 1 && children.type) {
	    // If a React Element is an only child, don't wrap it in an array for
	    // React.Children.map() for React.Children.only() compatibility.
	    var onlyChild = _react2.default.Children.only(children);
	    return resolveStyles(component, onlyChild, config, existingKeyMap, true);
	  }

	  return _react2.default.Children.map(children, function (child) {
	    if (_react2.default.isValidElement(child)) {
	      return resolveStyles(component, child, config, existingKeyMap, true);
	    }

	    return child;
	  });
	};

	// Recurse over props, just like children
	var _resolveProps = function _resolveProps(_ref2) {
	  var component = _ref2.component;
	  var config = _ref2.config;
	  var existingKeyMap = _ref2.existingKeyMap;
	  var props = _ref2.props;

	  var newProps = props;

	  Object.keys(props).forEach(function (prop) {
	    // We already recurse over children above
	    if (prop === 'children') {
	      return;
	    }

	    var propValue = props[prop];
	    if (_react2.default.isValidElement(propValue)) {
	      newProps = _extends({}, newProps);
	      newProps[prop] = resolveStyles(component, propValue, config, existingKeyMap, true);
	    }
	  });

	  return newProps;
	};

	var _buildGetKey = function _buildGetKey(_ref3) {
	  var componentName = _ref3.componentName;
	  var existingKeyMap = _ref3.existingKeyMap;
	  var renderedElement = _ref3.renderedElement;

	  // We need a unique key to correlate state changes due to user interaction
	  // with the rendered element, so we know to apply the proper interactive
	  // styles.
	  var originalKey = typeof renderedElement.ref === 'string' ? renderedElement.ref : renderedElement.key;
	  var key = (0, _getStateKey2.default)(originalKey);

	  var alreadyGotKey = false;
	  var getKey = function getKey() {
	    if (alreadyGotKey) {
	      return key;
	    }

	    alreadyGotKey = true;

	    if (existingKeyMap[key]) {
	      var elementName = void 0;
	      if (typeof renderedElement.type === 'string') {
	        elementName = renderedElement.type;
	      } else if (renderedElement.type.constructor) {
	        elementName = renderedElement.type.constructor.displayName || renderedElement.type.constructor.name;
	      }

	      throw new Error('Radium requires each element with interactive styles to have a unique ' + 'key, set using either the ref or key prop. ' + (originalKey ? 'Key "' + originalKey + '" is a duplicate.' : 'Multiple elements have no key specified.') + ' ' + 'Component: "' + componentName + '". ' + (elementName ? 'Element: "' + elementName + '".' : ''));
	    }

	    existingKeyMap[key] = true;

	    return key;
	  };

	  return getKey;
	};

	var _setStyleState = function _setStyleState(component, key, stateKey, value) {
	  if (!component._radiumIsMounted) {
	    return;
	  }

	  var existing = component._lastRadiumState || component.state && component.state._radiumStyleState || {};

	  var state = { _radiumStyleState: _extends({}, existing) };
	  state._radiumStyleState[key] = _extends({}, state._radiumStyleState[key]);
	  state._radiumStyleState[key][stateKey] = value;

	  component._lastRadiumState = state._radiumStyleState;
	  component.setState(state);
	};

	var _runPlugins = function _runPlugins(_ref4) {
	  var component = _ref4.component;
	  var config = _ref4.config;
	  var existingKeyMap = _ref4.existingKeyMap;
	  var props = _ref4.props;
	  var renderedElement = _ref4.renderedElement;

	  // Don't run plugins if renderedElement is not a simple ReactDOMElement or has
	  // no style.
	  if (!_react2.default.isValidElement(renderedElement) || typeof renderedElement.type !== 'string' || !props.style) {
	    return props;
	  }

	  var newProps = props;

	  var plugins = config.plugins || DEFAULT_CONFIG.plugins;

	  var componentName = component.constructor.displayName || component.constructor.name;
	  var getKey = _buildGetKey({ renderedElement: renderedElement, existingKeyMap: existingKeyMap, componentName: componentName });
	  var getComponentField = function getComponentField(key) {
	    return component[key];
	  };
	  var getGlobalState = function getGlobalState(key) {
	    return globalState[key];
	  };
	  var componentGetState = function componentGetState(stateKey, elementKey) {
	    return (0, _getState2.default)(component.state, elementKey || getKey(), stateKey);
	  };
	  var setState = function setState(stateKey, value, elementKey) {
	    return _setStyleState(component, elementKey || getKey(), stateKey, value);
	  };

	  var addCSS = function addCSS(css) {
	    var styleKeeper = component._radiumStyleKeeper || component.context._radiumStyleKeeper;
	    if (!styleKeeper) {
	      if (__isTestModeEnabled) {
	        return {
	          remove: function remove() {}
	        };
	      }

	      throw new Error('To use plugins requiring `addCSS` (e.g. keyframes, media queries), ' + 'please wrap your application in the StyleRoot component. Component ' + 'name: `' + componentName + '`.');
	    }

	    return styleKeeper.addCSS(css);
	  };

	  var newStyle = props.style;

	  plugins.forEach(function (plugin) {
	    var result = plugin({
	      ExecutionEnvironment: _exenv2.default,
	      addCSS: addCSS,
	      appendImportantToEachValue: _appendImportantToEachValue2.default,
	      componentName: componentName,
	      config: config,
	      cssRuleSetToString: _cssRuleSetToString2.default,
	      getComponentField: getComponentField,
	      getGlobalState: getGlobalState,
	      getState: componentGetState,
	      hash: _hash2.default,
	      mergeStyles: _mergeStyles.mergeStyles,
	      props: newProps,
	      setState: setState,
	      isNestedStyle: _mergeStyles.isNestedStyle,
	      style: newStyle
	    }) || {};

	    newStyle = result.style || newStyle;

	    newProps = result.props && Object.keys(result.props).length ? _extends({}, newProps, result.props) : newProps;

	    var newComponentFields = result.componentFields || {};
	    Object.keys(newComponentFields).forEach(function (fieldName) {
	      component[fieldName] = newComponentFields[fieldName];
	    });

	    var newGlobalState = result.globalState || {};
	    Object.keys(newGlobalState).forEach(function (key) {
	      globalState[key] = newGlobalState[key];
	    });
	  });

	  if (newStyle !== props.style) {
	    newProps = _extends({}, newProps, { style: newStyle });
	  }

	  return newProps;
	};

	// Wrapper around React.cloneElement. To avoid processing the same element
	// twice, whenever we clone an element add a special prop to make sure we don't
	// process this element again.
	var _cloneElement = function _cloneElement(renderedElement, newProps, newChildren) {
	  // Only add flag if this is a normal DOM element
	  if (typeof renderedElement.type === 'string') {
	    newProps = _extends({}, newProps, { _radiumDidResolveStyles: true });
	  }

	  return _react2.default.cloneElement(renderedElement, newProps, newChildren);
	};

	//
	// The nucleus of Radium. resolveStyles is called on the rendered elements
	// before they are returned in render. It iterates over the elements and
	// children, rewriting props to add event handlers required to capture user
	// interactions (e.g. mouse over). It also replaces the style prop because it
	// adds in the various interaction styles (e.g. :hover).
	//
	resolveStyles = function resolveStyles(component, // ReactComponent, flow+eslint complaining
	renderedElement) {
	  var // ReactElement
	  config = arguments.length <= 2 || arguments[2] === undefined ? DEFAULT_CONFIG : arguments[2];
	  var existingKeyMap = arguments[3];
	  var shouldCheckBeforeResolve = arguments.length <= 4 || arguments[4] === undefined ? false : arguments[4];
	  // ReactElement
	  existingKeyMap = existingKeyMap || {};
	  if (!renderedElement ||
	  // Bail if we've already processed this element. This ensures that only the
	  // owner of an element processes that element, since the owner's render
	  // function will be called first (which will always be the case, since you
	  // can't know what else to render until you render the parent component).
	  renderedElement.props && renderedElement.props._radiumDidResolveStyles ||

	  // Bail if this element is a radium enhanced element, because if it is,
	  // then it will take care of resolving its own styles.
	  shouldCheckBeforeResolve && !_shouldResolveStyles(renderedElement)) {
	    return renderedElement;
	  }

	  var newChildren = _resolveChildren({
	    children: renderedElement.props.children,
	    component: component,
	    config: config,
	    existingKeyMap: existingKeyMap
	  });

	  var newProps = _resolveProps({
	    component: component,
	    config: config,
	    existingKeyMap: existingKeyMap,
	    props: renderedElement.props
	  });

	  newProps = _runPlugins({
	    component: component,
	    config: config,
	    existingKeyMap: existingKeyMap,
	    props: newProps,
	    renderedElement: renderedElement
	  });

	  // If nothing changed, don't bother cloning the element. Might be a bit
	  // wasteful, as we add the sentinal to stop double-processing when we clone.
	  // Assume benign double-processing is better than unneeded cloning.
	  if (newChildren === renderedElement.props.children && newProps === renderedElement.props) {
	    return renderedElement;
	  }

	  return _cloneElement(renderedElement, newProps !== renderedElement.props ? newProps : {}, newChildren);
	};

	// Only for use by tests
	var __isTestModeEnabled = false;
	if (false) {
	  resolveStyles.__clearStateForTests = function () {
	    globalState = {};
	  };
	  resolveStyles.__setTestMode = function (isEnabled) {
	    __isTestModeEnabled = isEnabled;
	  };
	}

	exports.default = resolveStyles;
	module.exports = exports['default'];

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = appendImportantToEachValue;

	var _appendPxIfNeeded = __webpack_require__(101);

	var _appendPxIfNeeded2 = _interopRequireDefault(_appendPxIfNeeded);

	var _mapObject = __webpack_require__(102);

	var _mapObject2 = _interopRequireDefault(_mapObject);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function appendImportantToEachValue(style) {
	  return (0, _mapObject2.default)(style, function (result, key) {
	    return (0, _appendPxIfNeeded2.default)(key, style[key]) + ' !important';
	  });
	}
	module.exports = exports['default'];

/***/ },
/* 101 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = appendPxIfNeeded;


	// Copied from https://github.com/facebook/react/blob/
	// 102cd291899f9942a76c40a0e78920a6fe544dc1/
	// src/renderers/dom/shared/CSSProperty.js
	var isUnitlessNumber = {
	  animationIterationCount: true,
	  boxFlex: true,
	  boxFlexGroup: true,
	  boxOrdinalGroup: true,
	  columnCount: true,
	  flex: true,
	  flexGrow: true,
	  flexPositive: true,
	  flexShrink: true,
	  flexNegative: true,
	  flexOrder: true,
	  gridRow: true,
	  gridColumn: true,
	  fontWeight: true,
	  lineClamp: true,
	  lineHeight: true,
	  opacity: true,
	  order: true,
	  orphans: true,
	  tabSize: true,
	  widows: true,
	  zIndex: true,
	  zoom: true,

	  // SVG-related properties
	  fillOpacity: true,
	  stopOpacity: true,
	  strokeDashoffset: true,
	  strokeOpacity: true,
	  strokeWidth: true
	};

	function appendPxIfNeeded(propertyName, value) {
	  var needsPxSuffix = !isUnitlessNumber[propertyName] && typeof value === 'number' && value !== 0;
	  return needsPxSuffix ? value + 'px' : value;
	}
	module.exports = exports['default'];

/***/ },
/* 102 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = mapObject;
	function mapObject(object, mapper) {
	  return Object.keys(object).reduce(function (result, key) {
	    result[key] = mapper(object[key], key);
	    return result;
	  }, {});
	}
	module.exports = exports['default'];

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = cssRuleSetToString;

	var _appendPxIfNeeded = __webpack_require__(101);

	var _appendPxIfNeeded2 = _interopRequireDefault(_appendPxIfNeeded);

	var _camelCasePropsToDashCase = __webpack_require__(104);

	var _camelCasePropsToDashCase2 = _interopRequireDefault(_camelCasePropsToDashCase);

	var _mapObject = __webpack_require__(102);

	var _mapObject2 = _interopRequireDefault(_mapObject);

	var _prefixer = __webpack_require__(105);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function createMarkupForStyles(style) {
	  return Object.keys(style).map(function (property) {
	    return property + ': ' + style[property] + ';';
	  }).join('\n');
	}

	function cssRuleSetToString(selector, rules, userAgent) {
	  if (!rules) {
	    return '';
	  }

	  var rulesWithPx = (0, _mapObject2.default)(rules, function (value, key) {
	    return (0, _appendPxIfNeeded2.default)(key, value);
	  });
	  var prefixedRules = (0, _prefixer.getPrefixedStyle)(rulesWithPx, userAgent);
	  var cssPrefixedRules = (0, _camelCasePropsToDashCase2.default)(prefixedRules);
	  var serializedRules = createMarkupForStyles(cssPrefixedRules);

	  return selector + '{' + serializedRules + '}';
	}
	module.exports = exports['default'];

/***/ },
/* 104 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});


	var _camelCaseRegex = /([a-z])?([A-Z])/g;

	var _camelCaseReplacer = function _camelCaseReplacer(match, p1, p2) {
	  return (p1 || '') + '-' + p2.toLowerCase();
	};

	var _camelCaseToDashCase = function _camelCaseToDashCase(s) {
	  return s.replace(_camelCaseRegex, _camelCaseReplacer);
	};

	var camelCasePropsToDashCase = function camelCasePropsToDashCase(prefixedStyle) {
	  // Since prefix is expected to work on inline style objects, we must
	  // translate the keys to dash case for rendering to CSS.
	  return Object.keys(prefixedStyle).reduce(function (result, key) {
	    var dashCaseKey = _camelCaseToDashCase(key);

	    // Fix IE vendor prefix
	    if (/^ms-/.test(dashCaseKey)) {
	      dashCaseKey = '-' + dashCaseKey;
	    }

	    result[dashCaseKey] = prefixedStyle[key];
	    return result;
	  }, {});
	};

	exports.default = camelCasePropsToDashCase;
	module.exports = exports['default'];

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                   * Based on https://github.com/jsstyles/css-vendor, but without having to
	                                                                                                                                                                                                                                                   * convert between different cases all the time.
	                                                                                                                                                                                                                                                   *
	                                                                                                                                                                                                                                                   * 
	                                                                                                                                                                                                                                                   */

	exports.getPrefixedKeyframes = getPrefixedKeyframes;
	exports.getPrefixedStyle = getPrefixedStyle;

	var _inlineStylePrefixer = __webpack_require__(106);

	var _inlineStylePrefixer2 = _interopRequireDefault(_inlineStylePrefixer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function transformValues(style) {
	  return Object.keys(style).reduce(function (newStyle, key) {
	    var value = style[key];
	    if (Array.isArray(value)) {
	      value = value.join(';' + key + ':');
	    } else if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && typeof value.toString === 'function') {
	      value = value.toString();
	    }

	    newStyle[key] = value;
	    return newStyle;
	  }, {});
	}

	var _hasWarnedAboutUserAgent = false;
	var _lastUserAgent = void 0;
	var _cachedPrefixer = void 0;

	function getPrefixer(userAgent) {
	  var actualUserAgent = userAgent || global && global.navigator && global.navigator.userAgent;

	  if (false) {
	    if (!actualUserAgent && !_hasWarnedAboutUserAgent) {
	      /* eslint-disable no-console */
	      console.warn('Radium: userAgent should be supplied for server-side rendering. See ' + 'https://github.com/FormidableLabs/radium/tree/master/docs/api#radium ' + 'for more information.');
	      /* eslint-enable no-console */
	      _hasWarnedAboutUserAgent = true;
	    }
	  }

	  if (!_cachedPrefixer || actualUserAgent !== _lastUserAgent) {
	    if (actualUserAgent === 'all') {
	      _cachedPrefixer = {
	        prefix: _inlineStylePrefixer2.default.prefixAll,
	        prefixedKeyframes: 'keyframes'
	      };
	    } else {
	      _cachedPrefixer = new _inlineStylePrefixer2.default({ userAgent: actualUserAgent });
	    }
	    _lastUserAgent = actualUserAgent;
	  }
	  return _cachedPrefixer;
	}

	function getPrefixedKeyframes(userAgent) {
	  return getPrefixer(userAgent).prefixedKeyframes;
	}

	// Returns a new style object with vendor prefixes added to property names
	// and values.
	function getPrefixedStyle(style, userAgent) {
	  var styleWithFallbacks = transformValues(style);
	  var prefixer = getPrefixer(userAgent);
	  var prefixedStyle = prefixer.prefix(styleWithFallbacks);
	  return prefixedStyle;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _inlineStylePrefixAll = __webpack_require__(107);

	var _inlineStylePrefixAll2 = _interopRequireDefault(_inlineStylePrefixAll);

	var _utilsGetBrowserInformation = __webpack_require__(122);

	var _utilsGetBrowserInformation2 = _interopRequireDefault(_utilsGetBrowserInformation);

	var _utilsGetPrefixedKeyframes = __webpack_require__(124);

	var _utilsGetPrefixedKeyframes2 = _interopRequireDefault(_utilsGetPrefixedKeyframes);

	var _utilsCapitalizeString = __webpack_require__(125);

	var _utilsCapitalizeString2 = _interopRequireDefault(_utilsCapitalizeString);

	var _utilsAssign = __webpack_require__(126);

	var _utilsAssign2 = _interopRequireDefault(_utilsAssign);

	var _prefixProps = __webpack_require__(127);

	var _prefixProps2 = _interopRequireDefault(_prefixProps);

	var _pluginsCalc = __webpack_require__(128);

	var _pluginsCalc2 = _interopRequireDefault(_pluginsCalc);

	var _pluginsCursor = __webpack_require__(130);

	var _pluginsCursor2 = _interopRequireDefault(_pluginsCursor);

	var _pluginsFlex = __webpack_require__(131);

	var _pluginsFlex2 = _interopRequireDefault(_pluginsFlex);

	var _pluginsSizing = __webpack_require__(132);

	var _pluginsSizing2 = _interopRequireDefault(_pluginsSizing);

	var _pluginsGradient = __webpack_require__(133);

	var _pluginsGradient2 = _interopRequireDefault(_pluginsGradient);

	var _pluginsTransition = __webpack_require__(134);

	var _pluginsTransition2 = _interopRequireDefault(_pluginsTransition);

	// special flexbox specifications

	var _pluginsFlexboxIE = __webpack_require__(136);

	var _pluginsFlexboxIE2 = _interopRequireDefault(_pluginsFlexboxIE);

	var _pluginsFlexboxOld = __webpack_require__(137);

	var _pluginsFlexboxOld2 = _interopRequireDefault(_pluginsFlexboxOld);

	var plugins = [_pluginsCalc2['default'], _pluginsCursor2['default'], _pluginsSizing2['default'], _pluginsGradient2['default'], _pluginsTransition2['default'], _pluginsFlexboxIE2['default'], _pluginsFlexboxOld2['default'],
	// this must be run AFTER the flexbox specs
	_pluginsFlex2['default']];

	var Prefixer = (function () {
	  /**
	   * Instantiante a new prefixer
	   * @param {string} userAgent - userAgent to gather prefix information according to caniuse.com
	   * @param {string} keepUnprefixed - keeps unprefixed properties and values
	   */

	  function Prefixer() {
	    var _this = this;

	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, Prefixer);

	    var defaultUserAgent = typeof navigator !== 'undefined' ? navigator.userAgent : undefined;

	    this._userAgent = options.userAgent || defaultUserAgent;
	    this._keepUnprefixed = options.keepUnprefixed || false;

	    this._browserInfo = (0, _utilsGetBrowserInformation2['default'])(this._userAgent);

	    // Checks if the userAgent was resolved correctly
	    if (this._browserInfo && this._browserInfo.prefix) {
	      // set additional prefix information
	      this.cssPrefix = this._browserInfo.prefix.css;
	      this.jsPrefix = this._browserInfo.prefix.inline;
	      this.prefixedKeyframes = (0, _utilsGetPrefixedKeyframes2['default'])(this._browserInfo);
	    } else {
	      this._usePrefixAllFallback = true;
	      return false;
	    }

	    var data = this._browserInfo.browser && _prefixProps2['default'][this._browserInfo.browser];
	    if (data) {
	      this._requiresPrefix = Object.keys(data).filter(function (key) {
	        return data[key] >= _this._browserInfo.version;
	      }).reduce(function (result, name) {
	        result[name] = true;
	        return result;
	      }, {});
	      this._hasPropsRequiringPrefix = Object.keys(this._requiresPrefix).length > 0;
	    } else {
	      this._usePrefixAllFallback = true;
	    }
	  }

	  /**
	   * Returns a prefixed version of the style object
	   * @param {Object} styles - Style object that gets prefixed properties added
	   * @returns {Object} - Style object with prefixed properties and values
	   */

	  _createClass(Prefixer, [{
	    key: 'prefix',
	    value: function prefix(styles) {
	      var _this2 = this;

	      // use prefixAll as fallback if userAgent can not be resolved
	      if (this._usePrefixAllFallback) {
	        return (0, _inlineStylePrefixAll2['default'])(styles);
	      }

	      // only add prefixes if needed
	      if (!this._hasPropsRequiringPrefix) {
	        return styles;
	      }

	      styles = (0, _utilsAssign2['default'])({}, styles);

	      Object.keys(styles).forEach(function (property) {
	        var value = styles[property];
	        if (value instanceof Object) {
	          // recurse through nested style objects
	          styles[property] = _this2.prefix(value);
	        } else {
	          // add prefixes if needed
	          if (_this2._requiresPrefix[property]) {
	            styles[_this2.jsPrefix + (0, _utilsCapitalizeString2['default'])(property)] = value;
	            if (!_this2._keepUnprefixed) {
	              delete styles[property];
	            }
	          }

	          // resolve plugins
	          plugins.forEach(function (plugin) {
	            // generates a new plugin interface with current data
	            var resolvedStyles = plugin({
	              property: property,
	              value: value,
	              styles: styles,
	              browserInfo: _this2._browserInfo,
	              prefix: {
	                js: _this2.jsPrefix,
	                css: _this2.cssPrefix,
	                keyframes: _this2.prefixedKeyframes
	              },
	              keepUnprefixed: _this2._keepUnprefixed,
	              requiresPrefix: _this2._requiresPrefix
	            });
	            (0, _utilsAssign2['default'])(styles, resolvedStyles);
	          });
	        }
	      });

	      return styles;
	    }

	    /**
	     * Returns a prefixed version of the style object using all vendor prefixes
	     * @param {Object} styles - Style object that gets prefixed properties added
	     * @returns {Object} - Style object with prefixed properties and values
	     */
	  }], [{
	    key: 'prefixAll',
	    value: function prefixAll(styles) {
	      return (0, _inlineStylePrefixAll2['default'])(styles);
	    }
	  }]);

	  return Prefixer;
	})();

	exports['default'] = Prefixer;
	module.exports = exports['default'];

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = prefixAll;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _prefixProps = __webpack_require__(108);

	var _prefixProps2 = _interopRequireDefault(_prefixProps);

	var _utilsCapitalizeString = __webpack_require__(109);

	var _utilsCapitalizeString2 = _interopRequireDefault(_utilsCapitalizeString);

	var _utilsAssign = __webpack_require__(110);

	var _utilsAssign2 = _interopRequireDefault(_utilsAssign);

	var _pluginsCalc = __webpack_require__(111);

	var _pluginsCalc2 = _interopRequireDefault(_pluginsCalc);

	var _pluginsCursor = __webpack_require__(115);

	var _pluginsCursor2 = _interopRequireDefault(_pluginsCursor);

	var _pluginsFlex = __webpack_require__(116);

	var _pluginsFlex2 = _interopRequireDefault(_pluginsFlex);

	var _pluginsSizing = __webpack_require__(117);

	var _pluginsSizing2 = _interopRequireDefault(_pluginsSizing);

	var _pluginsGradient = __webpack_require__(118);

	var _pluginsGradient2 = _interopRequireDefault(_pluginsGradient);

	var _pluginsTransition = __webpack_require__(119);

	var _pluginsTransition2 = _interopRequireDefault(_pluginsTransition);

	// special flexbox specifications

	var _pluginsFlexboxIE = __webpack_require__(120);

	var _pluginsFlexboxIE2 = _interopRequireDefault(_pluginsFlexboxIE);

	var _pluginsFlexboxOld = __webpack_require__(121);

	var _pluginsFlexboxOld2 = _interopRequireDefault(_pluginsFlexboxOld);

	var plugins = [_pluginsCalc2['default'], _pluginsCursor2['default'], _pluginsSizing2['default'], _pluginsGradient2['default'], _pluginsTransition2['default'], _pluginsFlexboxIE2['default'], _pluginsFlexboxOld2['default'], _pluginsFlex2['default']];

	/**
	 * Returns a prefixed version of the style object using all vendor prefixes
	 * @param {Object} styles - Style object that gets prefixed properties added
	 * @returns {Object} - Style object with prefixed properties and values
	 */

	function prefixAll(styles) {
	  return Object.keys(styles).reduce(function (prefixedStyles, property) {
	    var value = styles[property];
	    if (value instanceof Object && !Array.isArray(value)) {
	      // recurse through nested style objects
	      prefixedStyles[property] = prefixAll(value);
	    } else {
	      Object.keys(_prefixProps2['default']).forEach(function (prefix) {
	        var properties = _prefixProps2['default'][prefix];
	        // add prefixes if needed
	        if (properties[property]) {
	          prefixedStyles[prefix + (0, _utilsCapitalizeString2['default'])(property)] = value;
	        }
	      });

	      // resolve every special plugins
	      plugins.forEach(function (plugin) {
	        return (0, _utilsAssign2['default'])(prefixedStyles, plugin(property, value));
	      });
	    }

	    return prefixedStyles;
	  }, styles);
	}

	module.exports = exports['default'];

/***/ },
/* 108 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = { "Webkit": { "transform": true, "transformOrigin": true, "transformOriginX": true, "transformOriginY": true, "backfaceVisibility": true, "perspective": true, "perspectiveOrigin": true, "transformStyle": true, "transformOriginZ": true, "animation": true, "animationDelay": true, "animationDirection": true, "animationFillMode": true, "animationDuration": true, "animationIterationCount": true, "animationName": true, "animationPlayState": true, "animationTimingFunction": true, "appearance": true, "userSelect": true, "fontKerning": true, "textEmphasisPosition": true, "textEmphasis": true, "textEmphasisStyle": true, "textEmphasisColor": true, "boxDecorationBreak": true, "clipPath": true, "maskImage": true, "maskMode": true, "maskRepeat": true, "maskPosition": true, "maskClip": true, "maskOrigin": true, "maskSize": true, "maskComposite": true, "mask": true, "maskBorderSource": true, "maskBorderMode": true, "maskBorderSlice": true, "maskBorderWidth": true, "maskBorderOutset": true, "maskBorderRepeat": true, "maskBorder": true, "maskType": true, "textDecorationStyle": true, "textDecorationSkip": true, "textDecorationLine": true, "textDecorationColor": true, "filter": true, "fontFeatureSettings": true, "breakAfter": true, "breakBefore": true, "breakInside": true, "columnCount": true, "columnFill": true, "columnGap": true, "columnRule": true, "columnRuleColor": true, "columnRuleStyle": true, "columnRuleWidth": true, "columns": true, "columnSpan": true, "columnWidth": true, "flex": true, "flexBasis": true, "flexDirection": true, "flexGrow": true, "flexFlow": true, "flexShrink": true, "flexWrap": true, "alignContent": true, "alignItems": true, "alignSelf": true, "justifyContent": true, "order": true, "transition": true, "transitionDelay": true, "transitionDuration": true, "transitionProperty": true, "transitionTimingFunction": true, "backdropFilter": true, "scrollSnapType": true, "scrollSnapPointsX": true, "scrollSnapPointsY": true, "scrollSnapDestination": true, "scrollSnapCoordinate": true, "shapeImageThreshold": true, "shapeImageMargin": true, "shapeImageOutside": true, "hyphens": true, "flowInto": true, "flowFrom": true, "regionFragment": true, "textSizeAdjust": true, "borderImage": true, "borderImageOutset": true, "borderImageRepeat": true, "borderImageSlice": true, "borderImageSource": true, "borderImageWidth": true, "tabSize": true, "objectFit": true, "objectPosition": true }, "Moz": { "appearance": true, "userSelect": true, "boxSizing": true, "textAlignLast": true, "textDecorationStyle": true, "textDecorationSkip": true, "textDecorationLine": true, "textDecorationColor": true, "tabSize": true, "hyphens": true, "fontFeatureSettings": true, "breakAfter": true, "breakBefore": true, "breakInside": true, "columnCount": true, "columnFill": true, "columnGap": true, "columnRule": true, "columnRuleColor": true, "columnRuleStyle": true, "columnRuleWidth": true, "columns": true, "columnSpan": true, "columnWidth": true }, "ms": { "flex": true, "flexBasis": false, "flexDirection": true, "flexGrow": false, "flexFlow": true, "flexShrink": false, "flexWrap": true, "alignContent": false, "alignItems": false, "alignSelf": false, "justifyContent": false, "order": false, "transform": true, "transformOrigin": true, "transformOriginX": true, "transformOriginY": true, "userSelect": true, "wrapFlow": true, "wrapThrough": true, "wrapMargin": true, "scrollSnapType": true, "scrollSnapPointsX": true, "scrollSnapPointsY": true, "scrollSnapDestination": true, "scrollSnapCoordinate": true, "touchAction": true, "hyphens": true, "flowInto": true, "flowFrom": true, "breakBefore": true, "breakAfter": true, "breakInside": true, "regionFragment": true, "gridTemplateColumns": true, "gridTemplateRows": true, "gridTemplateAreas": true, "gridTemplate": true, "gridAutoColumns": true, "gridAutoRows": true, "gridAutoFlow": true, "grid": true, "gridRowStart": true, "gridColumnStart": true, "gridRowEnd": true, "gridRow": true, "gridColumn": true, "gridColumnEnd": true, "gridColumnGap": true, "gridRowGap": true, "gridArea": true, "gridGap": true, "textSizeAdjust": true } };
	module.exports = exports["default"];

/***/ },
/* 109 */
/***/ function(module, exports) {

	// helper to capitalize strings
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = function (str) {
	  return str.charAt(0).toUpperCase() + str.slice(1);
	};

	module.exports = exports["default"];

/***/ },
/* 110 */
/***/ function(module, exports) {

	// leight polyfill for Object.assign
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = function (base) {
	  var extend = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	  return Object.keys(extend).reduce(function (out, key) {
	    base[key] = extend[key];
	    return out;
	  }, {});
	};

	module.exports = exports["default"];

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = calc;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsJoinPrefixedRules = __webpack_require__(112);

	var _utilsJoinPrefixedRules2 = _interopRequireDefault(_utilsJoinPrefixedRules);

	var _utilsIsPrefixedValue = __webpack_require__(114);

	var _utilsIsPrefixedValue2 = _interopRequireDefault(_utilsIsPrefixedValue);

	function calc(property, value) {
	  if (typeof value === 'string' && value.indexOf('calc(') > -1) {
	    if ((0, _utilsIsPrefixedValue2['default'])(value)) return;

	    return (0, _utilsJoinPrefixedRules2['default'])(property, value, function (prefix, value) {
	      return value.replace(/calc\(/g, prefix + 'calc(');
	    });
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var _camelToDashCase = __webpack_require__(113);

	var _camelToDashCase2 = _interopRequireDefault(_camelToDashCase);

	// returns a style object with a single concated prefixed value string

	exports['default'] = function (property, value) {
	  var replacer = arguments.length <= 2 || arguments[2] === undefined ? function (prefix, value) {
	    return prefix + value;
	  } : arguments[2];
	  return (function () {
	    return _defineProperty({}, property, ['-webkit-', '-moz-', ''].map(function (prefix) {
	      return replacer(prefix, value);
	    }));
	  })();
	};

	module.exports = exports['default'];

/***/ },
/* 113 */
/***/ function(module, exports) {

	/**
	 * Converts a camel-case string to a dash-case string
	 * @param {string} str - str that gets converted to dash-case
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (str) {
	  return str.replace(/([a-z]|^)([A-Z])/g, function (match, p1, p2) {
	    return p1 + '-' + p2.toLowerCase();
	  }).replace('ms-', '-ms-');
	};

	module.exports = exports['default'];

/***/ },
/* 114 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (value) {
	  if (Array.isArray(value)) value = value.join(',');

	  return value.match(/-webkit-|-moz-|-ms-/) !== null;
	};

	module.exports = exports['default'];

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = cursor;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsJoinPrefixedRules = __webpack_require__(112);

	var _utilsJoinPrefixedRules2 = _interopRequireDefault(_utilsJoinPrefixedRules);

	var values = {
	  'zoom-in': true,
	  'zoom-out': true,
	  'grab': true,
	  'grabbing': true
	};

	function cursor(property, value) {
	  if (property === 'cursor' && values[value]) {
	    return (0, _utilsJoinPrefixedRules2['default'])(property, value);
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = flex;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsCamelToDashCase = __webpack_require__(113);

	var _utilsCamelToDashCase2 = _interopRequireDefault(_utilsCamelToDashCase);

	var values = { flex: true, 'inline-flex': true };

	function flex(property, value) {
	  if (property === 'display' && values[value]) {
	    return {
	      display: ['-webkit-box', '-moz-box', '-ms-' + value + 'box', '-webkit-' + value, value]
	    };
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = sizing;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsJoinPrefixedRules = __webpack_require__(112);

	var _utilsJoinPrefixedRules2 = _interopRequireDefault(_utilsJoinPrefixedRules);

	var properties = {
	  maxHeight: true,
	  maxWidth: true,
	  width: true,
	  height: true,
	  columnWidth: true,
	  minWidth: true,
	  minHeight: true
	};
	var values = {
	  'min-content': true,
	  'max-content': true,
	  'fill-available': true,
	  'fit-content': true,
	  'contain-floats': true
	};

	function sizing(property, value) {
	  if (properties[property] && values[value]) {
	    return (0, _utilsJoinPrefixedRules2['default'])(property, value);
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = gradient;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsJoinPrefixedRules = __webpack_require__(112);

	var _utilsJoinPrefixedRules2 = _interopRequireDefault(_utilsJoinPrefixedRules);

	var _utilsIsPrefixedValue = __webpack_require__(114);

	var _utilsIsPrefixedValue2 = _interopRequireDefault(_utilsIsPrefixedValue);

	var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

	function gradient(property, value) {
	  if (typeof value === 'string' && value.match(values) !== null) {
	    if ((0, _utilsIsPrefixedValue2['default'])(value)) return;

	    return (0, _utilsJoinPrefixedRules2['default'])(property, value);
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = transition;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var _utilsCamelToDashCase = __webpack_require__(113);

	var _utilsCamelToDashCase2 = _interopRequireDefault(_utilsCamelToDashCase);

	var _utilsCapitalizeString = __webpack_require__(109);

	var _utilsCapitalizeString2 = _interopRequireDefault(_utilsCapitalizeString);

	var _utilsIsPrefixedValue = __webpack_require__(114);

	var _utilsIsPrefixedValue2 = _interopRequireDefault(_utilsIsPrefixedValue);

	var _prefixProps = __webpack_require__(108);

	var _prefixProps2 = _interopRequireDefault(_prefixProps);

	var properties = {
	  transition: true,
	  transitionProperty: true,
	  WebkitTransition: true,
	  WebkitTransitionProperty: true
	};

	function transition(property, value) {
	  // also check for already prefixed transitions
	  if (typeof value === 'string' && properties[property]) {
	    var _ref2;

	    var outputValue = prefixValue(value);
	    var webkitOutput = outputValue.split(',').filter(function (value) {
	      return value.match(/-moz-|-ms-/) === null;
	    }).join(',');

	    // if the property is already prefixed
	    if (property.indexOf('Webkit') > -1) {
	      return _defineProperty({}, property, webkitOutput);
	    }

	    return _ref2 = {}, _defineProperty(_ref2, 'Webkit' + (0, _utilsCapitalizeString2['default'])(property), webkitOutput), _defineProperty(_ref2, property, outputValue), _ref2;
	  }
	}

	function prefixValue(value) {
	  if ((0, _utilsIsPrefixedValue2['default'])(value)) {
	    return value;
	  }

	  // only split multi values, not cubic beziers
	  var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

	  // iterate each single value and check for transitioned properties
	  // that need to be prefixed as well
	  multipleValues.forEach(function (val, index) {
	    multipleValues[index] = Object.keys(_prefixProps2['default']).reduce(function (out, prefix) {
	      var dashCasePrefix = '-' + prefix.toLowerCase() + '-';

	      Object.keys(_prefixProps2['default'][prefix]).forEach(function (prop) {
	        var dashCaseProperty = (0, _utilsCamelToDashCase2['default'])(prop);

	        if (val.indexOf(dashCaseProperty) > -1) {
	          // join all prefixes and create a new value
	          out = val.replace(dashCaseProperty, dashCasePrefix + dashCaseProperty) + ',' + out;
	        }
	      });
	      return out;
	    }, val);
	  });

	  return multipleValues.join(',');
	}
	module.exports = exports['default'];

/***/ },
/* 120 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = flexboxIE;

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var alternativeValues = {
	  'space-around': 'distribute',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end'
	};
	var alternativeProps = {
	  alignContent: 'msFlexLinePack',
	  alignSelf: 'msFlexItemAlign',
	  alignItems: 'msFlexAlign',
	  justifyContent: 'msFlexPack',
	  order: 'msFlexOrder',
	  flexGrow: 'msFlexPositive',
	  flexShrink: 'msFlexNegative',
	  flexBasis: 'msPreferredSize'
	};

	function flexboxIE(property, value) {
	  if (alternativeProps[property]) {
	    return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = flexboxOld;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var _utilsCamelToDashCase = __webpack_require__(113);

	var _utilsCamelToDashCase2 = _interopRequireDefault(_utilsCamelToDashCase);

	var alternativeValues = {
	  'space-around': 'justify',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end',
	  'wrap-reverse': 'multiple',
	  wrap: 'multiple'
	};

	var alternativeProps = {
	  alignItems: 'WebkitBoxAlign',
	  justifyContent: 'WebkitBoxPack',
	  flexWrap: 'WebkitBoxLines'
	};

	function flexboxOld(property, value) {
	  if (property === 'flexDirection') {
	    return {
	      WebkitBoxOrient: value.indexOf('column') > -1 ? 'vertical' : 'horizontal',
	      WebkitBoxDirection: value.indexOf('reverse') > -1 ? 'reverse' : 'normal'
	    };
	  }
	  if (alternativeProps[property]) {
	    return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _bowser = __webpack_require__(123);

	var _bowser2 = _interopRequireDefault(_bowser);

	var vendorPrefixes = {
	  Webkit: ['chrome', 'safari', 'ios', 'android', 'phantom', 'opera', 'webos', 'blackberry', 'bada', 'tizen'],
	  Moz: ['firefox', 'seamonkey', 'sailfish'],
	  ms: ['msie', 'msedge']
	};

	var browsers = {
	  chrome: [['chrome']],
	  safari: [['safari']],
	  firefox: [['firefox']],
	  ie: [['msie']],
	  edge: [['msedge']],
	  opera: [['opera']],
	  ios_saf: [['ios', 'mobile'], ['ios', 'tablet']],
	  ie_mob: [['windowsphone', 'mobile', 'msie'], ['windowsphone', 'tablet', 'msie'], ['windowsphone', 'mobile', 'msedge'], ['windowsphone', 'tablet', 'msedge']],
	  op_mini: [['opera', 'mobile'], ['opera', 'tablet']],
	  and_uc: [['android', 'mobile'], ['android', 'tablet']],
	  android: [['android', 'mobile'], ['android', 'tablet']]
	};

	/**
	 * Uses bowser to get default browser information such as version and name
	 * Evaluates bowser info and adds vendorPrefix information
	 * @param {string} userAgent - userAgent that gets evaluated
	 */

	exports['default'] = function (userAgent) {
	  if (!userAgent) {
	    return false;
	  }

	  var info = _bowser2['default']._detect(userAgent);

	  Object.keys(vendorPrefixes).forEach(function (prefix) {
	    vendorPrefixes[prefix].forEach(function (browser) {
	      if (info[browser]) {
	        info.prefix = {
	          inline: prefix,
	          css: '-' + prefix.toLowerCase() + '-'
	        };
	      }
	    });
	  });

	  var name = '';
	  Object.keys(browsers).forEach(function (browser) {
	    browsers[browser].forEach(function (condition) {
	      var match = 0;
	      condition.forEach(function (single) {
	        if (info[single]) {
	          match += 1;
	        }
	      });
	      if (condition.length === match) {
	        name = browser;
	      }
	    });
	  });

	  info.browser = name;
	  // For cordova IOS 8 the version is missing, set truncated osversion to prevent NaN
	  info.version = info.version ? parseFloat(info.version) : parseInt(parseFloat(info.osversion), 10);

	  // seperate native android chrome
	  // https://github.com/rofrischmann/inline-style-prefixer/issues/45
	  if (info.browser === 'android' && info.chrome && info.version > 37) {
	    info.browser = 'and_chr';
	  }
	  info.version = parseFloat(info.version);
	  info.osversion = parseFloat(info.osversion);
	  // For android < 4.4 we want to check the osversion
	  // not the chrome version, see issue #26
	  // https://github.com/rofrischmann/inline-style-prefixer/issues/26
	  if (info.browser === 'android' && info.osversion < 5) {
	    info.version = info.osversion;
	  }

	  return info;
	};

	module.exports = exports['default'];

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * Bowser - a browser detector
	 * https://github.com/ded/bowser
	 * MIT License | (c) Dustin Diaz 2015
	 */

	!function (name, definition) {
	  if (typeof module != 'undefined' && module.exports) module.exports = definition()
	  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	  else this[name] = definition()
	}('bowser', function () {
	  /**
	    * See useragents.js for examples of navigator.userAgent
	    */

	  var t = true

	  function detect(ua) {

	    function getFirstMatch(regex) {
	      var match = ua.match(regex);
	      return (match && match.length > 1 && match[1]) || '';
	    }

	    function getSecondMatch(regex) {
	      var match = ua.match(regex);
	      return (match && match.length > 1 && match[2]) || '';
	    }

	    var iosdevice = getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase()
	      , likeAndroid = /like android/i.test(ua)
	      , android = !likeAndroid && /android/i.test(ua)
	      , nexusMobile = /nexus\s*[0-6]\s*/i.test(ua)
	      , nexusTablet = !nexusMobile && /nexus\s*[0-9]+/i.test(ua)
	      , chromeos = /CrOS/.test(ua)
	      , silk = /silk/i.test(ua)
	      , sailfish = /sailfish/i.test(ua)
	      , tizen = /tizen/i.test(ua)
	      , webos = /(web|hpw)os/i.test(ua)
	      , windowsphone = /windows phone/i.test(ua)
	      , windows = !windowsphone && /windows/i.test(ua)
	      , mac = !iosdevice && !silk && /macintosh/i.test(ua)
	      , linux = !android && !sailfish && !tizen && !webos && /linux/i.test(ua)
	      , edgeVersion = getFirstMatch(/edge\/(\d+(\.\d+)?)/i)
	      , versionIdentifier = getFirstMatch(/version\/(\d+(\.\d+)?)/i)
	      , tablet = /tablet/i.test(ua)
	      , mobile = !tablet && /[^-]mobi/i.test(ua)
	      , xbox = /xbox/i.test(ua)
	      , result

	    if (/opera|opr|opios/i.test(ua)) {
	      result = {
	        name: 'Opera'
	      , opera: t
	      , version: versionIdentifier || getFirstMatch(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/coast/i.test(ua)) {
	      result = {
	        name: 'Opera Coast'
	        , coast: t
	        , version: versionIdentifier || getFirstMatch(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/yabrowser/i.test(ua)) {
	      result = {
	        name: 'Yandex Browser'
	      , yandexbrowser: t
	      , version: versionIdentifier || getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/ucbrowser/i.test(ua)) {
	      result = {
	          name: 'UC Browser'
	        , ucbrowser: t
	        , version: getFirstMatch(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
	      }
	    }
	    else if (/mxios/i.test(ua)) {
	      result = {
	        name: 'Maxthon'
	        , maxthon: t
	        , version: getFirstMatch(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
	      }
	    }
	    else if (/epiphany/i.test(ua)) {
	      result = {
	        name: 'Epiphany'
	        , epiphany: t
	        , version: getFirstMatch(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
	      }
	    }
	    else if (/puffin/i.test(ua)) {
	      result = {
	        name: 'Puffin'
	        , puffin: t
	        , version: getFirstMatch(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
	      }
	    }
	    else if (/sleipnir/i.test(ua)) {
	      result = {
	        name: 'Sleipnir'
	        , sleipnir: t
	        , version: getFirstMatch(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
	      }
	    }
	    else if (/k-meleon/i.test(ua)) {
	      result = {
	        name: 'K-Meleon'
	        , kMeleon: t
	        , version: getFirstMatch(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
	      }
	    }
	    else if (windowsphone) {
	      result = {
	        name: 'Windows Phone'
	      , windowsphone: t
	      }
	      if (edgeVersion) {
	        result.msedge = t
	        result.version = edgeVersion
	      }
	      else {
	        result.msie = t
	        result.version = getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/msie|trident/i.test(ua)) {
	      result = {
	        name: 'Internet Explorer'
	      , msie: t
	      , version: getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)
	      }
	    } else if (chromeos) {
	      result = {
	        name: 'Chrome'
	      , chromeos: t
	      , chromeBook: t
	      , chrome: t
	      , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
	      }
	    } else if (/chrome.+? edge/i.test(ua)) {
	      result = {
	        name: 'Microsoft Edge'
	      , msedge: t
	      , version: edgeVersion
	      }
	    }
	    else if (/vivaldi/i.test(ua)) {
	      result = {
	        name: 'Vivaldi'
	        , vivaldi: t
	        , version: getFirstMatch(/vivaldi\/(\d+(\.\d+)?)/i) || versionIdentifier
	      }
	    }
	    else if (sailfish) {
	      result = {
	        name: 'Sailfish'
	      , sailfish: t
	      , version: getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/seamonkey\//i.test(ua)) {
	      result = {
	        name: 'SeaMonkey'
	      , seamonkey: t
	      , version: getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/firefox|iceweasel|fxios/i.test(ua)) {
	      result = {
	        name: 'Firefox'
	      , firefox: t
	      , version: getFirstMatch(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
	      }
	      if (/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)) {
	        result.firefoxos = t
	      }
	    }
	    else if (silk) {
	      result =  {
	        name: 'Amazon Silk'
	      , silk: t
	      , version : getFirstMatch(/silk\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/phantom/i.test(ua)) {
	      result = {
	        name: 'PhantomJS'
	      , phantom: t
	      , version: getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/slimerjs/i.test(ua)) {
	      result = {
	        name: 'SlimerJS'
	        , slimer: t
	        , version: getFirstMatch(/slimerjs\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/blackberry|\bbb\d+/i.test(ua) || /rim\stablet/i.test(ua)) {
	      result = {
	        name: 'BlackBerry'
	      , blackberry: t
	      , version: versionIdentifier || getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (webos) {
	      result = {
	        name: 'WebOS'
	      , webos: t
	      , version: versionIdentifier || getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
	      };
	      /touchpad\//i.test(ua) && (result.touchpad = t)
	    }
	    else if (/bada/i.test(ua)) {
	      result = {
	        name: 'Bada'
	      , bada: t
	      , version: getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i)
	      };
	    }
	    else if (tizen) {
	      result = {
	        name: 'Tizen'
	      , tizen: t
	      , version: getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || versionIdentifier
	      };
	    }
	    else if (/qupzilla/i.test(ua)) {
	      result = {
	        name: 'QupZilla'
	        , qupzilla: t
	        , version: getFirstMatch(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || versionIdentifier
	      }
	    }
	    else if (/chromium/i.test(ua)) {
	      result = {
	        name: 'Chromium'
	        , chromium: t
	        , version: getFirstMatch(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || versionIdentifier
	      }
	    }
	    else if (/chrome|crios|crmo/i.test(ua)) {
	      result = {
	        name: 'Chrome'
	        , chrome: t
	        , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (android) {
	      result = {
	        name: 'Android'
	        , version: versionIdentifier
	      }
	    }
	    else if (/safari|applewebkit/i.test(ua)) {
	      result = {
	        name: 'Safari'
	      , safari: t
	      }
	      if (versionIdentifier) {
	        result.version = versionIdentifier
	      }
	    }
	    else if (iosdevice) {
	      result = {
	        name : iosdevice == 'iphone' ? 'iPhone' : iosdevice == 'ipad' ? 'iPad' : 'iPod'
	      }
	      // WTF: version is not part of user agent in web apps
	      if (versionIdentifier) {
	        result.version = versionIdentifier
	      }
	    }
	    else if(/googlebot/i.test(ua)) {
	      result = {
	        name: 'Googlebot'
	      , googlebot: t
	      , version: getFirstMatch(/googlebot\/(\d+(\.\d+))/i) || versionIdentifier
	      }
	    }
	    else {
	      result = {
	        name: getFirstMatch(/^(.*)\/(.*) /),
	        version: getSecondMatch(/^(.*)\/(.*) /)
	     };
	   }

	    // set webkit or gecko flag for browsers based on these engines
	    if (!result.msedge && /(apple)?webkit/i.test(ua)) {
	      if (/(apple)?webkit\/537\.36/i.test(ua)) {
	        result.name = result.name || "Blink"
	        result.blink = t
	      } else {
	        result.name = result.name || "Webkit"
	        result.webkit = t
	      }
	      if (!result.version && versionIdentifier) {
	        result.version = versionIdentifier
	      }
	    } else if (!result.opera && /gecko\//i.test(ua)) {
	      result.name = result.name || "Gecko"
	      result.gecko = t
	      result.version = result.version || getFirstMatch(/gecko\/(\d+(\.\d+)?)/i)
	    }

	    // set OS flags for platforms that have multiple browsers
	    if (!result.msedge && (android || result.silk)) {
	      result.android = t
	    } else if (iosdevice) {
	      result[iosdevice] = t
	      result.ios = t
	    } else if (mac) {
	      result.mac = t
	    } else if (xbox) {
	      result.xbox = t
	    } else if (windows) {
	      result.windows = t
	    } else if (linux) {
	      result.linux = t
	    }

	    // OS version extraction
	    var osVersion = '';
	    if (result.windowsphone) {
	      osVersion = getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);
	    } else if (iosdevice) {
	      osVersion = getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);
	      osVersion = osVersion.replace(/[_\s]/g, '.');
	    } else if (android) {
	      osVersion = getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);
	    } else if (result.webos) {
	      osVersion = getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);
	    } else if (result.blackberry) {
	      osVersion = getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);
	    } else if (result.bada) {
	      osVersion = getFirstMatch(/bada\/(\d+(\.\d+)*)/i);
	    } else if (result.tizen) {
	      osVersion = getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);
	    }
	    if (osVersion) {
	      result.osversion = osVersion;
	    }

	    // device type extraction
	    var osMajorVersion = osVersion.split('.')[0];
	    if (
	         tablet
	      || nexusTablet
	      || iosdevice == 'ipad'
	      || (android && (osMajorVersion == 3 || (osMajorVersion >= 4 && !mobile)))
	      || result.silk
	    ) {
	      result.tablet = t
	    } else if (
	         mobile
	      || iosdevice == 'iphone'
	      || iosdevice == 'ipod'
	      || android
	      || nexusMobile
	      || result.blackberry
	      || result.webos
	      || result.bada
	    ) {
	      result.mobile = t
	    }

	    // Graded Browser Support
	    // http://developer.yahoo.com/yui/articles/gbs
	    if (result.msedge ||
	        (result.msie && result.version >= 10) ||
	        (result.yandexbrowser && result.version >= 15) ||
			    (result.vivaldi && result.version >= 1.0) ||
	        (result.chrome && result.version >= 20) ||
	        (result.firefox && result.version >= 20.0) ||
	        (result.safari && result.version >= 6) ||
	        (result.opera && result.version >= 10.0) ||
	        (result.ios && result.osversion && result.osversion.split(".")[0] >= 6) ||
	        (result.blackberry && result.version >= 10.1)
	        ) {
	      result.a = t;
	    }
	    else if ((result.msie && result.version < 10) ||
	        (result.chrome && result.version < 20) ||
	        (result.firefox && result.version < 20.0) ||
	        (result.safari && result.version < 6) ||
	        (result.opera && result.version < 10.0) ||
	        (result.ios && result.osversion && result.osversion.split(".")[0] < 6)
	        ) {
	      result.c = t
	    } else result.x = t

	    return result
	  }

	  var bowser = detect(typeof navigator !== 'undefined' ? navigator.userAgent : '')

	  bowser.test = function (browserList) {
	    for (var i = 0; i < browserList.length; ++i) {
	      var browserItem = browserList[i];
	      if (typeof browserItem=== 'string') {
	        if (browserItem in bowser) {
	          return true;
	        }
	      }
	    }
	    return false;
	  }

	  /*
	   * Set our detect method to the main bowser object so we can
	   * reuse it to test other user agents.
	   * This is needed to implement future tests.
	   */
	  bowser._detect = detect;

	  return bowser
	});


/***/ },
/* 124 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (_ref) {
	  var browser = _ref.browser;
	  var version = _ref.version;
	  var prefix = _ref.prefix;

	  var prefixedKeyframes = 'keyframes';

	  if (browser === 'chrome' && version < 43 || (browser === 'safari' || browser === 'ios_saf') && version < 9 || browser === 'opera' && version < 30 || browser === 'android' && version <= 4.4 || browser === 'and_uc') {
	    prefixedKeyframes = prefix.css + prefixedKeyframes;
	  }
	  return prefixedKeyframes;
	};

	module.exports = exports['default'];

/***/ },
/* 125 */
/***/ function(module, exports) {

	// helper to capitalize strings
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = function (str) {
	  return str.charAt(0).toUpperCase() + str.slice(1);
	};

	module.exports = exports["default"];

/***/ },
/* 126 */
/***/ function(module, exports) {

	// leight polyfill for Object.assign
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports["default"] = function (base) {
	  var extend = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  Object.keys(extend).forEach(function (key) {
	    return base[key] = extend[key];
	  });
	  return base;
	};

	module.exports = exports["default"];

/***/ },
/* 127 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = { "chrome": { "transform": 35, "transformOrigin": 35, "transformOriginX": 35, "transformOriginY": 35, "backfaceVisibility": 35, "perspective": 35, "perspectiveOrigin": 35, "transformStyle": 35, "transformOriginZ": 35, "animation": 42, "animationDelay": 42, "animationDirection": 42, "animationFillMode": 42, "animationDuration": 42, "animationIterationCount": 42, "animationName": 42, "animationPlayState": 42, "animationTimingFunction": 42, "appearance": 52, "userSelect": 52, "fontKerning": 32, "textEmphasisPosition": 52, "textEmphasis": 52, "textEmphasisStyle": 52, "textEmphasisColor": 52, "boxDecorationBreak": 52, "clipPath": 52, "maskImage": 52, "maskMode": 52, "maskRepeat": 52, "maskPosition": 52, "maskClip": 52, "maskOrigin": 52, "maskSize": 52, "maskComposite": 52, "mask": 52, "maskBorderSource": 52, "maskBorderMode": 52, "maskBorderSlice": 52, "maskBorderWidth": 52, "maskBorderOutset": 52, "maskBorderRepeat": 52, "maskBorder": 52, "maskType": 52, "textDecorationStyle": 52, "textDecorationSkip": 52, "textDecorationLine": 52, "textDecorationColor": 52, "filter": 52, "fontFeatureSettings": 47, "breakAfter": 52, "breakBefore": 52, "breakInside": 52, "columnCount": 52, "columnFill": 52, "columnGap": 52, "columnRule": 52, "columnRuleColor": 52, "columnRuleStyle": 52, "columnRuleWidth": 52, "columns": 52, "columnSpan": 52, "columnWidth": 52 }, "safari": { "flex": 8, "flexBasis": 8, "flexDirection": 8, "flexGrow": 8, "flexFlow": 8, "flexShrink": 8, "flexWrap": 8, "alignContent": 8, "alignItems": 8, "alignSelf": 8, "justifyContent": 8, "order": 8, "transition": 6, "transitionDelay": 6, "transitionDuration": 6, "transitionProperty": 6, "transitionTimingFunction": 6, "transform": 8, "transformOrigin": 8, "transformOriginX": 8, "transformOriginY": 8, "backfaceVisibility": 8, "perspective": 8, "perspectiveOrigin": 8, "transformStyle": 8, "transformOriginZ": 8, "animation": 8, "animationDelay": 8, "animationDirection": 8, "animationFillMode": 8, "animationDuration": 8, "animationIterationCount": 8, "animationName": 8, "animationPlayState": 8, "animationTimingFunction": 8, "appearance": 9.1, "userSelect": 9.1, "backdropFilter": 9.1, "fontKerning": 9.1, "scrollSnapType": 9.1, "scrollSnapPointsX": 9.1, "scrollSnapPointsY": 9.1, "scrollSnapDestination": 9.1, "scrollSnapCoordinate": 9.1, "textEmphasisPosition": 7, "textEmphasis": 7, "textEmphasisStyle": 7, "textEmphasisColor": 7, "boxDecorationBreak": 9.1, "clipPath": 9.1, "maskImage": 9.1, "maskMode": 9.1, "maskRepeat": 9.1, "maskPosition": 9.1, "maskClip": 9.1, "maskOrigin": 9.1, "maskSize": 9.1, "maskComposite": 9.1, "mask": 9.1, "maskBorderSource": 9.1, "maskBorderMode": 9.1, "maskBorderSlice": 9.1, "maskBorderWidth": 9.1, "maskBorderOutset": 9.1, "maskBorderRepeat": 9.1, "maskBorder": 9.1, "maskType": 9.1, "textDecorationStyle": 9.1, "textDecorationSkip": 9.1, "textDecorationLine": 9.1, "textDecorationColor": 9.1, "shapeImageThreshold": 9.1, "shapeImageMargin": 9.1, "shapeImageOutside": 9.1, "filter": 9, "hyphens": 9.1, "flowInto": 9.1, "flowFrom": 9.1, "breakBefore": 8, "breakAfter": 8, "breakInside": 8, "regionFragment": 9.1, "columnCount": 8, "columnFill": 8, "columnGap": 8, "columnRule": 8, "columnRuleColor": 8, "columnRuleStyle": 8, "columnRuleWidth": 8, "columns": 8, "columnSpan": 8, "columnWidth": 8 }, "firefox": { "appearance": 47, "userSelect": 47, "boxSizing": 28, "textAlignLast": 47, "textDecorationStyle": 35, "textDecorationSkip": 35, "textDecorationLine": 35, "textDecorationColor": 35, "tabSize": 47, "hyphens": 42, "fontFeatureSettings": 33, "breakAfter": 47, "breakBefore": 47, "breakInside": 47, "columnCount": 47, "columnFill": 47, "columnGap": 47, "columnRule": 47, "columnRuleColor": 47, "columnRuleStyle": 47, "columnRuleWidth": 47, "columns": 47, "columnSpan": 47, "columnWidth": 47 }, "opera": { "flex": 16, "flexBasis": 16, "flexDirection": 16, "flexGrow": 16, "flexFlow": 16, "flexShrink": 16, "flexWrap": 16, "alignContent": 16, "alignItems": 16, "alignSelf": 16, "justifyContent": 16, "order": 16, "transform": 22, "transformOrigin": 22, "transformOriginX": 22, "transformOriginY": 22, "backfaceVisibility": 22, "perspective": 22, "perspectiveOrigin": 22, "transformStyle": 22, "transformOriginZ": 22, "animation": 29, "animationDelay": 29, "animationDirection": 29, "animationFillMode": 29, "animationDuration": 29, "animationIterationCount": 29, "animationName": 29, "animationPlayState": 29, "animationTimingFunction": 29, "appearance": 37, "userSelect": 37, "fontKerning": 19, "textEmphasisPosition": 37, "textEmphasis": 37, "textEmphasisStyle": 37, "textEmphasisColor": 37, "boxDecorationBreak": 37, "clipPath": 37, "maskImage": 37, "maskMode": 37, "maskRepeat": 37, "maskPosition": 37, "maskClip": 37, "maskOrigin": 37, "maskSize": 37, "maskComposite": 37, "mask": 37, "maskBorderSource": 37, "maskBorderMode": 37, "maskBorderSlice": 37, "maskBorderWidth": 37, "maskBorderOutset": 37, "maskBorderRepeat": 37, "maskBorder": 37, "maskType": 37, "filter": 37, "fontFeatureSettings": 37, "breakAfter": 37, "breakBefore": 37, "breakInside": 37, "columnCount": 37, "columnFill": 37, "columnGap": 37, "columnRule": 37, "columnRuleColor": 37, "columnRuleStyle": 37, "columnRuleWidth": 37, "columns": 37, "columnSpan": 37, "columnWidth": 37 }, "ie": { "gridTemplateRows": 11, "breakInside": 11, "transformOriginY": 9, "gridRowStart": 11, "gridColumn": 11, "regionFragment": 11, "breakBefore": 11, "userSelect": 11, "gridColumnEnd": 11, "gridRowEnd": 11, "gridTemplateColumns": 11, "gridColumnStart": 11, "gridArea": 11, "flexDirection": 10, "gridRowGap": 11, "gridTemplateAreas": 11, "gridAutoRows": 11, "gridRow": 11, "scrollSnapDestination": 11, "scrollSnapPointsY": 11, "touchAction": 10, "gridGap": 11, "gridColumnGap": 11, "wrapFlow": 11, "scrollSnapPointsX": 11, "flowFrom": 11, "transform": 9, "breakAfter": 11, "wrapMargin": 11, "scrollSnapCoordinate": 11, "flexWrap": 10, "scrollSnapType": 11, "flex": 10, "wrapThrough": 11, "gridAutoColumns": 11, "flexFlow": 10, "gridTemplate": 11, "hyphens": 11, "grid": 11, "transformOriginX": 9, "flowInto": 11, "transformOrigin": 9, "gridAutoFlow": 11, "textSizeAdjust": 11 }, "edge": { "userSelect": 14, "wrapFlow": 14, "wrapThrough": 14, "wrapMargin": 14, "scrollSnapType": 14, "scrollSnapPointsX": 14, "scrollSnapPointsY": 14, "scrollSnapDestination": 14, "scrollSnapCoordinate": 14, "hyphens": 14, "flowInto": 14, "flowFrom": 14, "breakBefore": 14, "breakAfter": 14, "breakInside": 14, "regionFragment": 14, "gridTemplateColumns": 14, "gridTemplateRows": 14, "gridTemplateAreas": 14, "gridTemplate": 14, "gridAutoColumns": 14, "gridAutoRows": 14, "gridAutoFlow": 14, "grid": 14, "gridRowStart": 14, "gridColumnStart": 14, "gridRowEnd": 14, "gridRow": 14, "gridColumn": 14, "gridColumnEnd": 14, "gridColumnGap": 14, "gridRowGap": 14, "gridArea": 14, "gridGap": 14 }, "ios_saf": { "flex": 8.1, "flexBasis": 8.1, "flexDirection": 8.1, "flexGrow": 8.1, "flexFlow": 8.1, "flexShrink": 8.1, "flexWrap": 8.1, "alignContent": 8.1, "alignItems": 8.1, "alignSelf": 8.1, "justifyContent": 8.1, "order": 8.1, "transition": 6, "transitionDelay": 6, "transitionDuration": 6, "transitionProperty": 6, "transitionTimingFunction": 6, "transform": 8.1, "transformOrigin": 8.1, "transformOriginX": 8.1, "transformOriginY": 8.1, "backfaceVisibility": 8.1, "perspective": 8.1, "perspectiveOrigin": 8.1, "transformStyle": 8.1, "transformOriginZ": 8.1, "animation": 8.1, "animationDelay": 8.1, "animationDirection": 8.1, "animationFillMode": 8.1, "animationDuration": 8.1, "animationIterationCount": 8.1, "animationName": 8.1, "animationPlayState": 8.1, "animationTimingFunction": 8.1, "appearance": 9.3, "userSelect": 9.3, "backdropFilter": 9.3, "fontKerning": 9.3, "scrollSnapType": 9.3, "scrollSnapPointsX": 9.3, "scrollSnapPointsY": 9.3, "scrollSnapDestination": 9.3, "scrollSnapCoordinate": 9.3, "boxDecorationBreak": 9.3, "clipPath": 9.3, "maskImage": 9.3, "maskMode": 9.3, "maskRepeat": 9.3, "maskPosition": 9.3, "maskClip": 9.3, "maskOrigin": 9.3, "maskSize": 9.3, "maskComposite": 9.3, "mask": 9.3, "maskBorderSource": 9.3, "maskBorderMode": 9.3, "maskBorderSlice": 9.3, "maskBorderWidth": 9.3, "maskBorderOutset": 9.3, "maskBorderRepeat": 9.3, "maskBorder": 9.3, "maskType": 9.3, "textSizeAdjust": 9.3, "textDecorationStyle": 9.3, "textDecorationSkip": 9.3, "textDecorationLine": 9.3, "textDecorationColor": 9.3, "shapeImageThreshold": 9.3, "shapeImageMargin": 9.3, "shapeImageOutside": 9.3, "filter": 9, "hyphens": 9.3, "flowInto": 9.3, "flowFrom": 9.3, "breakBefore": 8.1, "breakAfter": 8.1, "breakInside": 8.1, "regionFragment": 9.3, "columnCount": 8.1, "columnFill": 8.1, "columnGap": 8.1, "columnRule": 8.1, "columnRuleColor": 8.1, "columnRuleStyle": 8.1, "columnRuleWidth": 8.1, "columns": 8.1, "columnSpan": 8.1, "columnWidth": 8.1 }, "android": { "borderImage": 4.2, "borderImageOutset": 4.2, "borderImageRepeat": 4.2, "borderImageSlice": 4.2, "borderImageSource": 4.2, "borderImageWidth": 4.2, "flex": 4.2, "flexBasis": 4.2, "flexDirection": 4.2, "flexGrow": 4.2, "flexFlow": 4.2, "flexShrink": 4.2, "flexWrap": 4.2, "alignContent": 4.2, "alignItems": 4.2, "alignSelf": 4.2, "justifyContent": 4.2, "order": 4.2, "transition": 4.2, "transitionDelay": 4.2, "transitionDuration": 4.2, "transitionProperty": 4.2, "transitionTimingFunction": 4.2, "transform": 4.4, "transformOrigin": 4.4, "transformOriginX": 4.4, "transformOriginY": 4.4, "backfaceVisibility": 4.4, "perspective": 4.4, "perspectiveOrigin": 4.4, "transformStyle": 4.4, "transformOriginZ": 4.4, "animation": 4.4, "animationDelay": 4.4, "animationDirection": 4.4, "animationFillMode": 4.4, "animationDuration": 4.4, "animationIterationCount": 4.4, "animationName": 4.4, "animationPlayState": 4.4, "animationTimingFunction": 4.4, "appearance": 47, "userSelect": 47, "fontKerning": 4.4, "textEmphasisPosition": 47, "textEmphasis": 47, "textEmphasisStyle": 47, "textEmphasisColor": 47, "boxDecorationBreak": 47, "clipPath": 47, "maskImage": 47, "maskMode": 47, "maskRepeat": 47, "maskPosition": 47, "maskClip": 47, "maskOrigin": 47, "maskSize": 47, "maskComposite": 47, "mask": 47, "maskBorderSource": 47, "maskBorderMode": 47, "maskBorderSlice": 47, "maskBorderWidth": 47, "maskBorderOutset": 47, "maskBorderRepeat": 47, "maskBorder": 47, "maskType": 47, "filter": 47, "fontFeatureSettings": 47, "breakAfter": 47, "breakBefore": 47, "breakInside": 47, "columnCount": 47, "columnFill": 47, "columnGap": 47, "columnRule": 47, "columnRuleColor": 47, "columnRuleStyle": 47, "columnRuleWidth": 47, "columns": 47, "columnSpan": 47, "columnWidth": 47 }, "and_chr": { "appearance": 47, "userSelect": 47, "textEmphasisPosition": 47, "textEmphasis": 47, "textEmphasisStyle": 47, "textEmphasisColor": 47, "boxDecorationBreak": 47, "clipPath": 47, "maskImage": 47, "maskMode": 47, "maskRepeat": 47, "maskPosition": 47, "maskClip": 47, "maskOrigin": 47, "maskSize": 47, "maskComposite": 47, "mask": 47, "maskBorderSource": 47, "maskBorderMode": 47, "maskBorderSlice": 47, "maskBorderWidth": 47, "maskBorderOutset": 47, "maskBorderRepeat": 47, "maskBorder": 47, "maskType": 47, "textDecorationStyle": 47, "textDecorationSkip": 47, "textDecorationLine": 47, "textDecorationColor": 47, "filter": 47, "fontFeatureSettings": 47, "breakAfter": 47, "breakBefore": 47, "breakInside": 47, "columnCount": 47, "columnFill": 47, "columnGap": 47, "columnRule": 47, "columnRuleColor": 47, "columnRuleStyle": 47, "columnRuleWidth": 47, "columns": 47, "columnSpan": 47, "columnWidth": 47 }, "and_uc": { "flex": 9.9, "flexBasis": 9.9, "flexDirection": 9.9, "flexGrow": 9.9, "flexFlow": 9.9, "flexShrink": 9.9, "flexWrap": 9.9, "alignContent": 9.9, "alignItems": 9.9, "alignSelf": 9.9, "justifyContent": 9.9, "order": 9.9, "transition": 9.9, "transitionDelay": 9.9, "transitionDuration": 9.9, "transitionProperty": 9.9, "transitionTimingFunction": 9.9, "transform": 9.9, "transformOrigin": 9.9, "transformOriginX": 9.9, "transformOriginY": 9.9, "backfaceVisibility": 9.9, "perspective": 9.9, "perspectiveOrigin": 9.9, "transformStyle": 9.9, "transformOriginZ": 9.9, "animation": 9.9, "animationDelay": 9.9, "animationDirection": 9.9, "animationFillMode": 9.9, "animationDuration": 9.9, "animationIterationCount": 9.9, "animationName": 9.9, "animationPlayState": 9.9, "animationTimingFunction": 9.9, "appearance": 9.9, "userSelect": 9.9, "fontKerning": 9.9, "textEmphasisPosition": 9.9, "textEmphasis": 9.9, "textEmphasisStyle": 9.9, "textEmphasisColor": 9.9, "maskImage": 9.9, "maskMode": 9.9, "maskRepeat": 9.9, "maskPosition": 9.9, "maskClip": 9.9, "maskOrigin": 9.9, "maskSize": 9.9, "maskComposite": 9.9, "mask": 9.9, "maskBorderSource": 9.9, "maskBorderMode": 9.9, "maskBorderSlice": 9.9, "maskBorderWidth": 9.9, "maskBorderOutset": 9.9, "maskBorderRepeat": 9.9, "maskBorder": 9.9, "maskType": 9.9, "textSizeAdjust": 9.9, "filter": 9.9, "hyphens": 9.9, "flowInto": 9.9, "flowFrom": 9.9, "breakBefore": 9.9, "breakAfter": 9.9, "breakInside": 9.9, "regionFragment": 9.9, "fontFeatureSettings": 9.9, "columnCount": 9.9, "columnFill": 9.9, "columnGap": 9.9, "columnRule": 9.9, "columnRuleColor": 9.9, "columnRuleStyle": 9.9, "columnRuleWidth": 9.9, "columns": 9.9, "columnSpan": 9.9, "columnWidth": 9.9 }, "op_mini": { "borderImage": 5, "borderImageOutset": 5, "borderImageRepeat": 5, "borderImageSlice": 5, "borderImageSource": 5, "borderImageWidth": 5, "tabSize": 5, "objectFit": 5, "objectPosition": 5 } };
	module.exports = exports["default"];

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = calc;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var _utilsCamelToDashCase = __webpack_require__(129);

	var _utilsCamelToDashCase2 = _interopRequireDefault(_utilsCamelToDashCase);

	function calc(_ref2) {
	  var property = _ref2.property;
	  var value = _ref2.value;
	  var _ref2$browserInfo = _ref2.browserInfo;
	  var browser = _ref2$browserInfo.browser;
	  var version = _ref2$browserInfo.version;
	  var css = _ref2.prefix.css;
	  var keepUnprefixed = _ref2.keepUnprefixed;

	  if (typeof value === 'string' && value.indexOf('calc(') > -1 && (browser === 'firefox' && version < 15 || browser === 'chrome' && version < 25 || browser === 'safari' && version < 6.1 || browser === 'ios_saf' && version < 7)) {
	    return _defineProperty({}, property, value.replace(/calc\(/g, css + 'calc(') + (keepUnprefixed ? ';' + (0, _utilsCamelToDashCase2['default'])(property) + ':' + value : ''));
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 129 */
/***/ function(module, exports) {

	/**
	 * Converts a camel-case string to a dash-case string
	 * @param {string} str - str that gets converted to dash-case
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (str) {
	  return str.replace(/([a-z]|^)([A-Z])/g, function (match, p1, p2) {
	    return p1 + '-' + p2.toLowerCase();
	  }).replace('ms-', '-ms-');
	};

	module.exports = exports['default'];

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = cursor;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsCamelToDashCase = __webpack_require__(129);

	var _utilsCamelToDashCase2 = _interopRequireDefault(_utilsCamelToDashCase);

	var values = {
	  'zoom-in': true,
	  'zoom-out': true,
	  'grab': true,
	  'grabbing': true
	};

	function cursor(_ref) {
	  var property = _ref.property;
	  var value = _ref.value;
	  var _ref$browserInfo = _ref.browserInfo;
	  var browser = _ref$browserInfo.browser;
	  var version = _ref$browserInfo.version;
	  var css = _ref.prefix.css;
	  var keepUnprefixed = _ref.keepUnprefixed;

	  if (property === 'cursor' && values[value] && (browser === 'firefox' && version < 24 || browser === 'chrome' && version < 37 || browser === 'safari' && version < 9 || browser === 'opera' && version < 24)) {
	    return {
	      cursor: css + value + (keepUnprefixed ? ';' + (0, _utilsCamelToDashCase2['default'])(property) + ':' + value : '')
	    };
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = flex;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsCamelToDashCase = __webpack_require__(129);

	var _utilsCamelToDashCase2 = _interopRequireDefault(_utilsCamelToDashCase);

	var values = {
	  'flex': true,
	  'inline-flex': true
	};

	function flex(_ref) {
	  var property = _ref.property;
	  var value = _ref.value;
	  var _ref$browserInfo = _ref.browserInfo;
	  var browser = _ref$browserInfo.browser;
	  var version = _ref$browserInfo.version;
	  var css = _ref.prefix.css;
	  var keepUnprefixed = _ref.keepUnprefixed;

	  if (property === 'display' && values[value] && (browser === 'chrome' && version < 29 && version > 20 || (browser === 'safari' || browser === 'ios_saf') && version < 9 && version > 6 || browser === 'opera' && (version == 15 || version == 16))) {
	    return {
	      display: css + value + (keepUnprefixed ? ';' + (0, _utilsCamelToDashCase2['default'])(property) + ':' + value : '')
	    };
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = sizing;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var _utilsCamelToDashCase = __webpack_require__(129);

	var _utilsCamelToDashCase2 = _interopRequireDefault(_utilsCamelToDashCase);

	var properties = {
	  maxHeight: true,
	  maxWidth: true,
	  width: true,
	  height: true,
	  columnWidth: true,
	  minWidth: true,
	  minHeight: true
	};
	var values = {
	  'min-content': true,
	  'max-content': true,
	  'fill-available': true,
	  'fit-content': true,
	  'contain-floats': true
	};

	function sizing(_ref2) {
	  var property = _ref2.property;
	  var value = _ref2.value;
	  var css = _ref2.prefix.css;
	  var keepUnprefixed = _ref2.keepUnprefixed;

	  // This might change in the future
	  // Keep an eye on it
	  if (properties[property] && values[value]) {
	    return _defineProperty({}, property, css + value + (keepUnprefixed ? ';' + (0, _utilsCamelToDashCase2['default'])(property) + ':' + value : ''));
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = gradient;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var _utilsCamelToDashCase = __webpack_require__(129);

	var _utilsCamelToDashCase2 = _interopRequireDefault(_utilsCamelToDashCase);

	var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

	function gradient(_ref2) {
	  var property = _ref2.property;
	  var value = _ref2.value;
	  var _ref2$browserInfo = _ref2.browserInfo;
	  var browser = _ref2$browserInfo.browser;
	  var version = _ref2$browserInfo.version;
	  var css = _ref2.prefix.css;
	  var keepUnprefixed = _ref2.keepUnprefixed;

	  if (typeof value === 'string' && value.match(values) !== null && (browser === 'firefox' && version < 16 || browser === 'chrome' && version < 26 || (browser === 'safari' || browser === 'ios_saf') && version < 7 || (browser === 'opera' || browser === 'op_mini') && version < 12.1 || browser === 'android' && version < 4.4 || browser === 'and_uc')) {
	    return _defineProperty({}, property, css + value + (keepUnprefixed ? ';' + (0, _utilsCamelToDashCase2['default'])(property) + ':' + value : ''));
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = transition;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var _utilsCamelToDashCase = __webpack_require__(129);

	var _utilsCamelToDashCase2 = _interopRequireDefault(_utilsCamelToDashCase);

	var _utilsCapitalizeString = __webpack_require__(125);

	var _utilsCapitalizeString2 = _interopRequireDefault(_utilsCapitalizeString);

	var _utilsUnprefixProperty = __webpack_require__(135);

	var _utilsUnprefixProperty2 = _interopRequireDefault(_utilsUnprefixProperty);

	var properties = { transition: true, transitionProperty: true };

	function transition(_ref2) {
	  var property = _ref2.property;
	  var value = _ref2.value;
	  var css = _ref2.prefix.css;
	  var requiresPrefix = _ref2.requiresPrefix;
	  var keepUnprefixed = _ref2.keepUnprefixed;

	  // also check for already prefixed transitions
	  var unprefixedProperty = (0, _utilsUnprefixProperty2['default'])(property);
	  if (typeof value === 'string' && properties[unprefixedProperty]) {
	    var _ret = (function () {
	      var requiresPrefixDashCased = Object.keys(requiresPrefix).map(function (prop) {
	        return (0, _utilsCamelToDashCase2['default'])(prop);
	      });

	      // only split multi values, not cubic beziers
	      var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

	      requiresPrefixDashCased.forEach(function (property) {
	        multipleValues.forEach(function (val, index) {
	          if (val.indexOf(property) > -1) {
	            multipleValues[index] = val.replace(property, css + property) + (keepUnprefixed ? ',' + val : '');
	          }
	        });
	      });

	      return {
	        v: _defineProperty({}, property, multipleValues.join(','))
	      };
	    })();

	    if (typeof _ret === 'object') return _ret.v;
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 135 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (property) {
	  var unprefixed = property.replace(/^(ms|Webkit|Moz|O)/, '');
	  return unprefixed.charAt(0).toLowerCase() + unprefixed.slice(1);
	};

	module.exports = exports['default'];

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = flexboxIE;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var _utilsCamelToDashCase = __webpack_require__(129);

	var _utilsCamelToDashCase2 = _interopRequireDefault(_utilsCamelToDashCase);

	var alternativeValues = {
	  'space-around': 'distribute',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end',
	  flex: 'flexbox',
	  'inline-flex': 'inline-flexbox'
	};
	var alternativeProps = {
	  alignContent: 'msFlexLinePack',
	  alignSelf: 'msFlexItemAlign',
	  alignItems: 'msFlexAlign',
	  justifyContent: 'msFlexPack',
	  order: 'msFlexOrder',
	  flexGrow: 'msFlexPositive',
	  flexShrink: 'msFlexNegative',
	  flexBasis: 'msPreferredSize'
	};

	var properties = Object.keys(alternativeProps).reduce(function (result, prop) {
	  result[prop] = true;
	  return result;
	}, {});

	function flexboxIE(_ref2) {
	  var property = _ref2.property;
	  var value = _ref2.value;
	  var styles = _ref2.styles;
	  var _ref2$browserInfo = _ref2.browserInfo;
	  var browser = _ref2$browserInfo.browser;
	  var version = _ref2$browserInfo.version;
	  var css = _ref2.prefix.css;
	  var keepUnprefixed = _ref2.keepUnprefixed;

	  if ((properties[property] || property === 'display' && typeof value === 'string' && value.indexOf('flex') > -1) && (browser === 'ie_mob' || browser === 'ie') && version == 10) {
	    if (!keepUnprefixed) {
	      delete styles[property];
	    }
	    if (property === 'display' && alternativeValues[value]) {
	      return {
	        display: css + alternativeValues[value] + (keepUnprefixed ? ';' + (0, _utilsCamelToDashCase2['default'])(property) + ':' + value : '')
	      };
	    }
	    if (alternativeProps[property]) {
	      return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
	    }
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = flexboxOld;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var _utilsCamelToDashCase = __webpack_require__(129);

	var _utilsCamelToDashCase2 = _interopRequireDefault(_utilsCamelToDashCase);

	var alternativeValues = {
	  'space-around': 'justify',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end',
	  'wrap-reverse': 'multiple',
	  wrap: 'multiple',
	  flex: 'box',
	  'inline-flex': 'inline-box'
	};

	var alternativeProps = {
	  alignItems: 'WebkitBoxAlign',
	  justifyContent: 'WebkitBoxPack',
	  flexWrap: 'WebkitBoxLines'
	};

	var otherProps = ['alignContent', 'alignSelf', 'order', 'flexGrow', 'flexShrink', 'flexBasis', 'flexDirection'];

	var properties = Object.keys(alternativeProps).concat(otherProps).reduce(function (result, prop) {
	  result[prop] = true;
	  return result;
	}, {});

	function flexboxOld(_ref2) {
	  var property = _ref2.property;
	  var value = _ref2.value;
	  var styles = _ref2.styles;
	  var _ref2$browserInfo = _ref2.browserInfo;
	  var browser = _ref2$browserInfo.browser;
	  var version = _ref2$browserInfo.version;
	  var css = _ref2.prefix.css;
	  var keepUnprefixed = _ref2.keepUnprefixed;

	  if ((properties[property] || property === 'display' && typeof value === 'string' && value.indexOf('flex') > -1) && (browser === 'firefox' && version < 22 || browser === 'chrome' && version < 21 || (browser === 'safari' || browser === 'ios_saf') && version <= 6.1 || browser === 'android' && version < 4.4 || browser === 'and_uc')) {
	    if (!keepUnprefixed) {
	      delete styles[property];
	    }
	    if (property === 'flexDirection') {
	      return {
	        WebkitBoxOrient: value.indexOf('column') > -1 ? 'vertical' : 'horizontal',
	        WebkitBoxDirection: value.indexOf('reverse') > -1 ? 'reverse' : 'normal'
	      };
	    }
	    if (property === 'display' && alternativeValues[value]) {
	      return {
	        display: css + alternativeValues[value] + (keepUnprefixed ? ';' + (0, _utilsCamelToDashCase2['default'])(property) + ':' + value : '')
	      };
	    }
	    if (alternativeProps[property]) {
	      return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
	    }
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getStateKey = __webpack_require__(139);

	var _getStateKey2 = _interopRequireDefault(_getStateKey);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var getState = function getState(state, elementKey, value) {
	  var key = (0, _getStateKey2.default)(elementKey);

	  return !!state && !!state._radiumStyleState && !!state._radiumStyleState[key] && state._radiumStyleState[key][value];
	};

	exports.default = getState;
	module.exports = exports['default'];

/***/ },
/* 139 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});


	var getStateKey = function getStateKey(elementKey) {
	  return elementKey === null || elementKey === undefined ? 'main' : elementKey.toString();
	};

	exports.default = getStateKey;
	module.exports = exports['default'];

/***/ },
/* 140 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = hash;


	// a simple djb2 hash based on hash-string:
	// https://github.com/MatthewBarker/hash-string/blob/master/source/hash-string.js
	// returns a hex-encoded hash
	function hash(text) {
	  if (!text) {
	    return '';
	  }

	  var hashValue = 5381;
	  var index = text.length - 1;

	  while (index) {
	    hashValue = hashValue * 33 ^ text.charCodeAt(index);
	    index -= 1;
	  }

	  return (hashValue >>> 0).toString(16);
	}
	module.exports = exports['default'];

/***/ },
/* 141 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.isNestedStyle = isNestedStyle;
	exports.mergeStyles = mergeStyles;
	function isNestedStyle(value) {
	  // Don't merge objects overriding toString, since they should be converted
	  // to string values.
	  return value && value.constructor === Object && value.toString === Object.prototype.toString;
	}

	// Merge style objects. Deep merge plain object values.
	function mergeStyles(styles) {
	  var result = {};

	  styles.forEach(function (style) {
	    if (!style || (typeof style === 'undefined' ? 'undefined' : _typeof(style)) !== 'object') {
	      return;
	    }

	    if (Array.isArray(style)) {
	      style = mergeStyles(style);
	    }

	    Object.keys(style).forEach(function (key) {
	      // Simple case, nothing nested
	      if (!isNestedStyle(style[key]) || !isNestedStyle(result[key])) {
	        result[key] = style[key];
	        return;
	      }

	      // If nested media, don't merge the nested styles, append a space to the
	      // end (benign when converted to CSS). This way we don't end up merging
	      // media queries that appear later in the chain with those that appear
	      // earlier.
	      if (key.indexOf('@media') === 0) {
	        var newKey = key;
	        while (true) {
	          // eslint-disable-line no-constant-condition
	          newKey += ' ';
	          if (!result[newKey]) {
	            result[newKey] = style[key];
	            return;
	          }
	        }
	      }

	      // Merge all other nested styles recursively
	      result[key] = mergeStyles([result[key], style[key]]);
	    });
	  });

	  return result;
	}

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _checkPropsPlugin = __webpack_require__(143);

	var _checkPropsPlugin2 = _interopRequireDefault(_checkPropsPlugin);

	var _keyframesPlugin = __webpack_require__(144);

	var _keyframesPlugin2 = _interopRequireDefault(_keyframesPlugin);

	var _mergeStyleArrayPlugin = __webpack_require__(145);

	var _mergeStyleArrayPlugin2 = _interopRequireDefault(_mergeStyleArrayPlugin);

	var _prefixPlugin = __webpack_require__(146);

	var _prefixPlugin2 = _interopRequireDefault(_prefixPlugin);

	var _resolveInteractionStylesPlugin = __webpack_require__(147);

	var _resolveInteractionStylesPlugin2 = _interopRequireDefault(_resolveInteractionStylesPlugin);

	var _resolveMediaQueriesPlugin = __webpack_require__(149);

	var _resolveMediaQueriesPlugin2 = _interopRequireDefault(_resolveMediaQueriesPlugin);

	var _visitedPlugin = __webpack_require__(150);

	var _visitedPlugin2 = _interopRequireDefault(_visitedPlugin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* eslint-disable block-scoped-const */

	exports.default = {
	  checkProps: _checkPropsPlugin2.default,
	  keyframes: _keyframesPlugin2.default,
	  mergeStyleArray: _mergeStyleArrayPlugin2.default,
	  prefix: _prefixPlugin2.default,
	  resolveInteractionStyles: _resolveInteractionStylesPlugin2.default,
	  resolveMediaQueries: _resolveMediaQueriesPlugin2.default,
	  visited: _visitedPlugin2.default
	};
	module.exports = exports['default'];

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _checkProps = function checkProps() {};

	if (false) {
	  (function () {
	    // Warn if you use longhand and shorthand properties in the same style
	    // object.
	    // https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties

	    var shorthandPropertyExpansions = {
	      'background': ['backgroundAttachment', 'backgroundBlendMode', 'backgroundClip', 'backgroundColor', 'backgroundImage', 'backgroundOrigin', 'backgroundPosition', 'backgroundPositionX', 'backgroundPositionY', 'backgroundRepeat', 'backgroundRepeatX', 'backgroundRepeatY', 'backgroundSize'],
	      'border': ['borderBottom', 'borderBottomColor', 'borderBottomStyle', 'borderBottomWidth', 'borderColor', 'borderLeft', 'borderLeftColor', 'borderLeftStyle', 'borderLeftWidth', 'borderRight', 'borderRightColor', 'borderRightStyle', 'borderRightWidth', 'borderStyle', 'borderTop', 'borderTopColor', 'borderTopStyle', 'borderTopWidth', 'borderWidth'],
	      'borderImage': ['borderImageOutset', 'borderImageRepeat', 'borderImageSlice', 'borderImageSource', 'borderImageWidth'],
	      'borderRadius': ['borderBottomLeftRadius', 'borderBottomRightRadius', 'borderTopLeftRadius', 'borderTopRightRadius'],
	      'font': ['fontFamily', 'fontKerning', 'fontSize', 'fontStretch', 'fontStyle', 'fontVariant', 'fontVariantLigatures', 'fontWeight', 'lineHeight'],
	      'listStyle': ['listStyleImage', 'listStylePosition', 'listStyleType'],
	      'margin': ['marginBottom', 'marginLeft', 'marginRight', 'marginTop'],
	      'padding': ['paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop'],
	      'transition': ['transitionDelay', 'transitionDuration', 'transitionProperty', 'transitionTimingFunction']
	    };

	    _checkProps = function checkProps(config) {
	      var componentName = config.componentName;
	      var style = config.style;

	      if ((typeof style === 'undefined' ? 'undefined' : _typeof(style)) !== 'object' || !style) {
	        return;
	      }

	      var styleKeys = Object.keys(style);
	      styleKeys.forEach(function (styleKey) {
	        if (Array.isArray(shorthandPropertyExpansions[styleKey]) && shorthandPropertyExpansions[styleKey].some(function (sp) {
	          return styleKeys.indexOf(sp) !== -1;
	        })) {
	          if (process.env.NODE_ENV !== 'production') {
	            /* eslint-disable no-console */
	            console.warn('Radium: property "' + styleKey + '" in style object', style, ': do not mix longhand and ' + 'shorthand properties in the same style object. Check the render ' + 'method of ' + componentName + '.', 'See https://github.com/FormidableLabs/radium/issues/95 for more ' + 'information.');
	            /* eslint-enable no-console */
	          }
	        }
	      });

	      styleKeys.forEach(function (k) {
	        return _checkProps(_extends({}, config, { style: style[k] }));
	      });
	      return;
	    };
	  })();
	}

	exports.default = _checkProps;
	module.exports = exports['default'];

/***/ },
/* 144 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = keyframesPlugin;
	function keyframesPlugin(_ref // eslint-disable-line no-shadow
	) {
	  var addCSS = _ref.addCSS;
	  var config = _ref.config;
	  var style = _ref.style;

	  var newStyle = Object.keys(style).reduce(function (newStyleInProgress, key) {
	    var value = style[key];
	    if (key === 'animationName' && value && value.__radiumKeyframes) {
	      var keyframesValue = value;

	      var _keyframesValue$__pro = keyframesValue.__process(config.userAgent);

	      var animationName = _keyframesValue$__pro.animationName;
	      var css = _keyframesValue$__pro.css;

	      addCSS(css);
	      value = animationName;
	    }

	    newStyleInProgress[key] = value;
	    return newStyleInProgress;
	  }, {});
	  return { style: newStyle };
	}
	module.exports = exports['default'];

/***/ },
/* 145 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});


	// Convenient syntax for multiple styles: `style={[style1, style2, etc]}`
	// Ignores non-objects, so you can do `this.state.isCool && styles.cool`.
	var mergeStyleArrayPlugin = function mergeStyleArrayPlugin(_ref) {
	  var style = _ref.style;
	  var mergeStyles = _ref.mergeStyles;
	  // eslint-disable-line no-shadow
	  var newStyle = Array.isArray(style) ? mergeStyles(style) : style;
	  return { style: newStyle };
	};

	exports.default = mergeStyleArrayPlugin;
	module.exports = exports['default'];

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = prefixPlugin;

	var _prefixer = __webpack_require__(105);

	function prefixPlugin(_ref // eslint-disable-line no-shadow
	) {
	  var config = _ref.config;
	  var style = _ref.style;

	  var newStyle = (0, _prefixer.getPrefixedStyle)(style, config.userAgent);
	  return { style: newStyle };
	}
	module.exports = exports['default'];

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mouseUpListener = __webpack_require__(148);

	var _mouseUpListener2 = _interopRequireDefault(_mouseUpListener);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _isInteractiveStyleField = function _isInteractiveStyleField(styleFieldName) {
	  return styleFieldName === ':hover' || styleFieldName === ':active' || styleFieldName === ':focus';
	};

	var resolveInteractionStyles = function resolveInteractionStyles(config) {
	  var ExecutionEnvironment = config.ExecutionEnvironment;
	  var getComponentField = config.getComponentField;
	  var getState = config.getState;
	  var mergeStyles = config.mergeStyles;
	  var props = config.props;
	  var setState = config.setState;
	  var style = config.style;


	  var newComponentFields = {};
	  var newProps = {};

	  // Only add handlers if necessary
	  if (style[':hover']) {
	    (function () {
	      // Always call the existing handler if one is already defined.
	      // This code, and the very similar ones below, could be abstracted a bit
	      // more, but it hurts readability IMO.
	      var existingOnMouseEnter = props.onMouseEnter;
	      newProps.onMouseEnter = function (e) {
	        existingOnMouseEnter && existingOnMouseEnter(e);
	        setState(':hover', true);
	      };

	      var existingOnMouseLeave = props.onMouseLeave;
	      newProps.onMouseLeave = function (e) {
	        existingOnMouseLeave && existingOnMouseLeave(e);
	        setState(':hover', false);
	      };
	    })();
	  }

	  if (style[':active']) {
	    (function () {
	      var existingOnMouseDown = props.onMouseDown;
	      newProps.onMouseDown = function (e) {
	        existingOnMouseDown && existingOnMouseDown(e);
	        newComponentFields._lastMouseDown = Date.now();
	        setState(':active', 'viamousedown');
	      };

	      var existingOnKeyDown = props.onKeyDown;
	      newProps.onKeyDown = function (e) {
	        existingOnKeyDown && existingOnKeyDown(e);
	        if (e.key === ' ' || e.key === 'Enter') {
	          setState(':active', 'viakeydown');
	        }
	      };

	      var existingOnKeyUp = props.onKeyUp;
	      newProps.onKeyUp = function (e) {
	        existingOnKeyUp && existingOnKeyUp(e);
	        if (e.key === ' ' || e.key === 'Enter') {
	          setState(':active', false);
	        }
	      };
	    })();
	  }

	  if (style[':focus']) {
	    (function () {
	      var existingOnFocus = props.onFocus;
	      newProps.onFocus = function (e) {
	        existingOnFocus && existingOnFocus(e);
	        setState(':focus', true);
	      };

	      var existingOnBlur = props.onBlur;
	      newProps.onBlur = function (e) {
	        existingOnBlur && existingOnBlur(e);
	        setState(':focus', false);
	      };
	    })();
	  }

	  if (style[':active'] && !getComponentField('_radiumMouseUpListener') && ExecutionEnvironment.canUseEventListeners) {
	    newComponentFields._radiumMouseUpListener = _mouseUpListener2.default.subscribe(function () {
	      Object.keys(getComponentField('state')._radiumStyleState).forEach(function (key) {
	        if (getState(':active', key) === 'viamousedown') {
	          setState(':active', false, key);
	        }
	      });
	    });
	  }

	  // Merge the styles in the order they were defined
	  var interactionStyles = Object.keys(style).filter(function (name) {
	    return _isInteractiveStyleField(name) && getState(name);
	  }).map(function (name) {
	    return style[name];
	  });

	  var newStyle = mergeStyles([style].concat(interactionStyles));

	  // Remove interactive styles
	  newStyle = Object.keys(newStyle).reduce(function (styleWithoutInteractions, name) {
	    if (!_isInteractiveStyleField(name)) {
	      styleWithoutInteractions[name] = newStyle[name];
	    }
	    return styleWithoutInteractions;
	  }, {});

	  return {
	    componentFields: newComponentFields,
	    props: newProps,
	    style: newStyle
	  };
	};

	exports.default = resolveInteractionStyles;
	module.exports = exports['default'];

/***/ },
/* 148 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});


	var _callbacks = [];
	var _mouseUpListenerIsActive = false;

	function _handleMouseUp() {
	  _callbacks.forEach(function (callback) {
	    callback();
	  });
	}

	var subscribe = function subscribe(callback) {
	  if (_callbacks.indexOf(callback) === -1) {
	    _callbacks.push(callback);
	  }

	  if (!_mouseUpListenerIsActive) {
	    window.addEventListener('mouseup', _handleMouseUp);
	    _mouseUpListenerIsActive = true;
	  }

	  return {
	    remove: function remove() {
	      var index = _callbacks.indexOf(callback);
	      _callbacks.splice(index, 1);

	      if (_callbacks.length === 0 && _mouseUpListenerIsActive) {
	        window.removeEventListener('mouseup', _handleMouseUp);
	        _mouseUpListenerIsActive = false;
	      }
	    }
	  };
	};

	exports.default = {
	  subscribe: subscribe,
	  __triggerForTests: _handleMouseUp
	};
	module.exports = exports['default'];

/***/ },
/* 149 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = resolveMediaQueries;


	var _windowMatchMedia = void 0;
	function _getWindowMatchMedia(ExecutionEnvironment) {
	  if (_windowMatchMedia === undefined) {
	    _windowMatchMedia = !!ExecutionEnvironment.canUseDOM && !!window && !!window.matchMedia && function (mediaQueryString) {
	      return window.matchMedia(mediaQueryString);
	    } || null;
	  }
	  return _windowMatchMedia;
	}

	function _filterObject(obj, predicate) {
	  return Object.keys(obj).filter(function (key) {
	    return predicate(obj[key], key);
	  }).reduce(function (result, key) {
	    result[key] = obj[key];
	    return result;
	  }, {});
	}

	function _removeMediaQueries(style) {
	  return Object.keys(style).reduce(function (styleWithoutMedia, key) {
	    if (key.indexOf('@media') !== 0) {
	      styleWithoutMedia[key] = style[key];
	    }
	    return styleWithoutMedia;
	  }, {});
	}

	function _topLevelRulesToCSS(_ref) {
	  var addCSS = _ref.addCSS;
	  var appendImportantToEachValue = _ref.appendImportantToEachValue;
	  var cssRuleSetToString = _ref.cssRuleSetToString;
	  var hash = _ref.hash;
	  var isNestedStyle = _ref.isNestedStyle;
	  var style = _ref.style;
	  var userAgent = _ref.userAgent;

	  var className = '';
	  Object.keys(style).filter(function (name) {
	    return name.indexOf('@media') === 0;
	  }).map(function (query) {
	    var topLevelRules = appendImportantToEachValue(_filterObject(style[query], function (value) {
	      return !isNestedStyle(value);
	    }));

	    if (!Object.keys(topLevelRules).length) {
	      return;
	    }

	    var ruleCSS = cssRuleSetToString('', topLevelRules, userAgent);

	    // CSS classes cannot start with a number
	    var mediaQueryClassName = 'rmq-' + hash(query + ruleCSS);
	    var css = query + '{ .' + mediaQueryClassName + ruleCSS + '}';

	    addCSS(css);

	    className += (className ? ' ' : '') + mediaQueryClassName;
	  });
	  return className;
	}

	function _subscribeToMediaQuery(_ref2) {
	  var listener = _ref2.listener;
	  var listenersByQuery = _ref2.listenersByQuery;
	  var matchMedia = _ref2.matchMedia;
	  var mediaQueryListsByQuery = _ref2.mediaQueryListsByQuery;
	  var query = _ref2.query;

	  query = query.replace('@media ', '');

	  var mql = mediaQueryListsByQuery[query];
	  if (!mql && matchMedia) {
	    mediaQueryListsByQuery[query] = mql = matchMedia(query);
	  }

	  if (!listenersByQuery || !listenersByQuery[query]) {
	    mql.addListener(listener);

	    listenersByQuery[query] = {
	      remove: function remove() {
	        mql.removeListener(listener);
	      }
	    };
	  }
	  return mql;
	}

	function resolveMediaQueries(_ref3) {
	  var ExecutionEnvironment = _ref3.ExecutionEnvironment;
	  var addCSS = _ref3.addCSS;
	  var appendImportantToEachValue = _ref3.appendImportantToEachValue;
	  var config = _ref3.config;
	  var cssRuleSetToString = _ref3.cssRuleSetToString;
	  var getComponentField = _ref3.getComponentField;
	  var getGlobalState = _ref3.getGlobalState;
	  var hash = _ref3.hash;
	  var isNestedStyle = _ref3.isNestedStyle;
	  var mergeStyles = _ref3.mergeStyles;
	  var props = _ref3.props;
	  var setState = _ref3.setState;
	  var style = _ref3.style;
	  // eslint-disable-line no-shadow
	  var newStyle = _removeMediaQueries(style);
	  var mediaQueryClassNames = _topLevelRulesToCSS({
	    addCSS: addCSS,
	    appendImportantToEachValue: appendImportantToEachValue,
	    cssRuleSetToString: cssRuleSetToString,
	    hash: hash,
	    isNestedStyle: isNestedStyle,
	    style: style,
	    userAgent: config.userAgent
	  });

	  var newProps = mediaQueryClassNames ? {
	    className: mediaQueryClassNames + (props.className ? ' ' + props.className : '')
	  } : null;

	  var matchMedia = config.matchMedia || _getWindowMatchMedia(ExecutionEnvironment);

	  if (!matchMedia) {
	    return {
	      props: newProps,
	      style: newStyle
	    };
	  }

	  var listenersByQuery = _extends({}, getComponentField('_radiumMediaQueryListenersByQuery'));
	  var mediaQueryListsByQuery = getGlobalState('mediaQueryListsByQuery') || {};

	  Object.keys(style).filter(function (name) {
	    return name.indexOf('@media') === 0;
	  }).map(function (query) {
	    var nestedRules = _filterObject(style[query], isNestedStyle);

	    if (!Object.keys(nestedRules).length) {
	      return;
	    }

	    var mql = _subscribeToMediaQuery({
	      listener: function listener() {
	        return setState(query, mql.matches, '_all');
	      },
	      listenersByQuery: listenersByQuery,
	      matchMedia: matchMedia,
	      mediaQueryListsByQuery: mediaQueryListsByQuery,
	      query: query
	    });

	    // Apply media query states
	    if (mql.matches) {
	      newStyle = mergeStyles([newStyle, nestedRules]);
	    }
	  });

	  return {
	    componentFields: {
	      _radiumMediaQueryListenersByQuery: listenersByQuery
	    },
	    globalState: { mediaQueryListsByQuery: mediaQueryListsByQuery },
	    props: newProps,
	    style: newStyle
	  };
	}
	module.exports = exports['default'];

/***/ },
/* 150 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = visited;
	function visited(_ref) {
	  var addCSS = _ref.addCSS;
	  var appendImportantToEachValue = _ref.appendImportantToEachValue;
	  var config = _ref.config;
	  var cssRuleSetToString = _ref.cssRuleSetToString;
	  var hash = _ref.hash;
	  var props = _ref.props;
	  var style = _ref.style;
	  // eslint-disable-line no-shadow
	  var className = props.className;

	  var newStyle = Object.keys(style).reduce(function (newStyleInProgress, key) {
	    var value = style[key];
	    if (key === ':visited') {
	      value = appendImportantToEachValue(value);
	      var ruleCSS = cssRuleSetToString('', value, config.userAgent);
	      var visitedClassName = 'rad-' + hash(ruleCSS);
	      var css = '.' + visitedClassName + ':visited' + ruleCSS;

	      addCSS(css);
	      className = (className ? className + ' ' : '') + visitedClassName;
	    } else {
	      newStyleInProgress[key] = value;
	    }

	    return newStyleInProgress;
	  }, {});

	  return {
	    props: className === props.className ? null : { className: className },
	    style: newStyle
	  };
	}
	module.exports = exports['default'];

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Based on code that is Copyright 2013-2015, Facebook, Inc.
	  All rights reserved.
	*/
	/* global define */

	(function () {
		'use strict';

		var canUseDOM = !!(
			typeof window !== 'undefined' &&
			window.document &&
			window.document.createElement
		);

		var ExecutionEnvironment = {

			canUseDOM: canUseDOM,

			canUseWorkers: typeof Worker !== 'undefined',

			canUseEventListeners:
				canUseDOM && !!(window.addEventListener || window.attachEvent),

			canUseViewport: canUseDOM && !!window.screen

		};

		if (true) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return ExecutionEnvironment;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = ExecutionEnvironment;
		} else {
			window.ExecutionEnvironment = ExecutionEnvironment;
		}

	}());


/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _cssRuleSetToString = __webpack_require__(103);

	var _cssRuleSetToString2 = _interopRequireDefault(_cssRuleSetToString);

	var _react = __webpack_require__(71);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Style = _react2.default.createClass({
	  displayName: 'Style',

	  propTypes: {
	    radiumConfig: _react.PropTypes.object,
	    rules: _react.PropTypes.object,
	    scopeSelector: _react.PropTypes.string
	  },

	  contextTypes: {
	    _radiumConfig: _react.PropTypes.object
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      scopeSelector: ''
	    };
	  },
	  _buildStyles: function _buildStyles(styles) {
	    var _this = this;

	    var userAgent = this.props.radiumConfig && this.props.radiumConfig.userAgent || this.context && this.context._radiumConfig && this.context._radiumConfig.userAgent;

	    var scopeSelector = this.props.scopeSelector;

	    var rootRules = Object.keys(styles).reduce(function (accumulator, selector) {
	      if (_typeof(styles[selector]) !== 'object') {
	        accumulator[selector] = styles[selector];
	      }

	      return accumulator;
	    }, {});
	    var rootStyles = Object.keys(rootRules).length ? (0, _cssRuleSetToString2.default)(scopeSelector || '', rootRules, userAgent) : '';

	    return rootStyles + Object.keys(styles).reduce(function (accumulator, selector) {
	      var rules = styles[selector];

	      if (selector === 'mediaQueries') {
	        accumulator += _this._buildMediaQueryString(rules);
	      } else if (_typeof(styles[selector]) === 'object') {
	        var completeSelector = scopeSelector ? selector.split(',').map(function (part) {
	          return scopeSelector + ' ' + part.trim();
	        }).join(',') : selector;

	        accumulator += (0, _cssRuleSetToString2.default)(completeSelector, rules, userAgent);
	      }

	      return accumulator;
	    }, '');
	  },
	  _buildMediaQueryString: function _buildMediaQueryString(stylesByMediaQuery) {
	    var _this2 = this;

	    var mediaQueryString = '';

	    Object.keys(stylesByMediaQuery).forEach(function (query) {
	      mediaQueryString += '@media ' + query + '{' + _this2._buildStyles(stylesByMediaQuery[query]) + '}';
	    });

	    return mediaQueryString;
	  },
	  render: function render() {
	    if (!this.props.rules) {
	      return null;
	    }

	    var styles = this._buildStyles(this.props.rules);

	    return _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: styles } });
	  }
	});

	exports.default = Style;
	module.exports = exports['default'];

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(71);

	var _react2 = _interopRequireDefault(_react);

	var _enhancer = __webpack_require__(97);

	var _enhancer2 = _interopRequireDefault(_enhancer);

	var _styleKeeper = __webpack_require__(98);

	var _styleKeeper2 = _interopRequireDefault(_styleKeeper);

	var _styleSheet = __webpack_require__(154);

	var _styleSheet2 = _interopRequireDefault(_styleSheet);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _getStyleKeeper(instance) {
	  if (!instance._radiumStyleKeeper) {
	    var userAgent = instance.props.radiumConfig && instance.props.radiumConfig.userAgent || instance.context._radiumConfig && instance.context._radiumConfig.userAgent;
	    instance._radiumStyleKeeper = new _styleKeeper2.default(userAgent);
	  }

	  return instance._radiumStyleKeeper;
	}

	var StyleRoot = function (_Component) {
	  _inherits(StyleRoot, _Component);

	  function StyleRoot() {
	    _classCallCheck(this, StyleRoot);

	    var _this = _possibleConstructorReturn(this, _Component.apply(this, arguments));

	    _getStyleKeeper(_this);
	    return _this;
	  }

	  StyleRoot.prototype.getChildContext = function getChildContext() {
	    return { _radiumStyleKeeper: _getStyleKeeper(this) };
	  };

	  StyleRoot.prototype.render = function render() {
	    return _react2.default.createElement(
	      'div',
	      this.props,
	      this.props.children,
	      _react2.default.createElement(_styleSheet2.default, null)
	    );
	  };

	  return StyleRoot;
	}(_react.Component);

	StyleRoot.contextTypes = {
	  _radiumConfig: _react.PropTypes.object,
	  _radiumStyleKeeper: _react.PropTypes.instanceOf(_styleKeeper2.default)
	};

	StyleRoot.childContextTypes = {
	  _radiumStyleKeeper: _react.PropTypes.instanceOf(_styleKeeper2.default)
	};

	StyleRoot = (0, _enhancer2.default)(StyleRoot);

	exports.default = StyleRoot;
	module.exports = exports['default'];

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _class, _temp;

	var _react = __webpack_require__(71);

	var _react2 = _interopRequireDefault(_react);

	var _styleKeeper = __webpack_require__(98);

	var _styleKeeper2 = _interopRequireDefault(_styleKeeper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var StyleSheet = (_temp = _class = function (_Component) {
	  _inherits(StyleSheet, _Component);

	  function StyleSheet() {
	    _classCallCheck(this, StyleSheet);

	    var _this = _possibleConstructorReturn(this, _Component.apply(this, arguments));

	    _this.state = _this._getCSSState();

	    _this._onChange = _this._onChange.bind(_this);
	    return _this;
	  }

	  StyleSheet.prototype.componentDidMount = function componentDidMount() {
	    this._isMounted = true;
	    this._subscription = this.context._radiumStyleKeeper.subscribe(this._onChange);
	    this._onChange();
	  };

	  StyleSheet.prototype.componentWillUnmount = function componentWillUnmount() {
	    this._isMounted = false;
	    if (this._subscription) {
	      this._subscription.remove();
	    }
	  };

	  StyleSheet.prototype._getCSSState = function _getCSSState() {
	    return { css: this.context._radiumStyleKeeper.getCSS() };
	  };

	  StyleSheet.prototype._onChange = function _onChange() {
	    var _this2 = this;

	    setTimeout(function () {
	      _this2._isMounted && _this2.setState(_this2._getCSSState());
	    }, 0);
	  };

	  StyleSheet.prototype.render = function render() {
	    return _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: this.state.css } });
	  };

	  return StyleSheet;
	}(_react.Component), _class.contextTypes = {
	  _radiumStyleKeeper: _react2.default.PropTypes.instanceOf(_styleKeeper2.default)
	}, _temp);
	exports.default = StyleSheet;
	module.exports = exports['default'];

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = keyframes;

	var _cssRuleSetToString = __webpack_require__(103);

	var _cssRuleSetToString2 = _interopRequireDefault(_cssRuleSetToString);

	var _hash = __webpack_require__(140);

	var _hash2 = _interopRequireDefault(_hash);

	var _prefixer = __webpack_require__(105);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function keyframes(keyframeRules, name) {
	  return {
	    __radiumKeyframes: true,
	    __process: function __process(userAgent) {
	      var keyframesPrefixed = (0, _prefixer.getPrefixedKeyframes)(userAgent);
	      var rules = Object.keys(keyframeRules).map(function (percentage) {
	        return (0, _cssRuleSetToString2.default)(percentage, keyframeRules[percentage], userAgent);
	      }).join('\n');
	      var animationName = (name ? name + '-' : '') + 'radium-animation-' + (0, _hash2.default)(rules);
	      var css = '@' + keyframesPrefixed + ' ' + animationName + ' {\n' + rules + '\n}\n';
	      return { css: css, animationName: animationName };
	    }
	  };
	}
	module.exports = exports['default'];

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	var SplitPane = __webpack_require__(157);

	module.exports = SplitPane;

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(71);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(70);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Pane = __webpack_require__(158);

	var _Pane2 = _interopRequireDefault(_Pane);

	var _VSplit = __webpack_require__(160);

	var _VSplit2 = _interopRequireDefault(_VSplit);

	var _HSplit = __webpack_require__(161);

	var _HSplit2 = _interopRequireDefault(_HSplit);

	var _Resizer = __webpack_require__(162);

	var _Resizer2 = _interopRequireDefault(_Resizer);

	var _reactVendorPrefix = __webpack_require__(159);

	var _reactVendorPrefix2 = _interopRequireDefault(_reactVendorPrefix);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SplitPane = function (_Component) {
	    _inherits(SplitPane, _Component);

	    function SplitPane() {
	        var _Object$getPrototypeO;

	        _classCallCheck(this, SplitPane);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        var _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(SplitPane)).call.apply(_Object$getPrototypeO, [this].concat(args)));

	        _this.onMouseDown = _this.onMouseDown.bind(_this);
	        _this.onMouseMove = _this.onMouseMove.bind(_this);
	        _this.onMouseUp = _this.onMouseUp.bind(_this);

	        _this.state = {
	            active: false,
	            resized: false
	        };
	        return _this;
	    }

	    _createClass(SplitPane, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.setSize(this.props, this.state);
	            document.addEventListener('mouseup', this.onMouseUp);
	            document.addEventListener('mousemove', this.onMouseMove);
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(props) {
	            this.setSize(props, this.state);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            document.removeEventListener('mouseup', this.onMouseUp);
	            document.removeEventListener('mousemove', this.onMouseMove);
	        }
	    }, {
	        key: 'onMouseDown',
	        value: function onMouseDown(event) {
	            if (this.props.allowResize && !this.props.size) {
	                this.unFocus();
	                var position = this.props.split === 'vertical' ? event.clientX : event.clientY;
	                if (typeof this.props.onDragStarted === 'function') {
	                    this.props.onDragStarted();
	                }
	                this.setState({
	                    active: true,
	                    position: position
	                });
	            }
	        }
	    }, {
	        key: 'onMouseMove',
	        value: function onMouseMove(event) {
	            if (this.props.allowResize && !this.props.size) {
	                if (this.state.active) {
	                    this.unFocus();
	                    var isPrimaryFirst = this.props.primary === 'first';
	                    var ref = isPrimaryFirst ? this.refs.pane1 : this.refs.pane2;
	                    if (ref) {
	                        var node = _reactDom2.default.findDOMNode(ref);

	                        if (node.getBoundingClientRect) {
	                            var width = node.getBoundingClientRect().width;
	                            var height = node.getBoundingClientRect().height;
	                            var current = this.props.split === 'vertical' ? event.clientX : event.clientY;
	                            var size = this.props.split === 'vertical' ? width : height;
	                            var position = this.state.position;
	                            var newPosition = isPrimaryFirst ? position - current : current - position;

	                            var newSize = size - newPosition;

	                            if (newSize < this.props.minSize) {
	                                newSize = this.props.minSize;
	                            } else if (newSize > this.props.maxSize) {
	                                newSize = this.props.maxSize;
	                            } else {
	                                this.setState({
	                                    position: current,
	                                    resized: true
	                                });
	                            }

	                            if (this.props.onChange) {
	                                this.props.onChange(newSize);
	                            }
	                            this.setState({
	                                draggedSize: newSize
	                            });
	                            ref.setState({
	                                size: newSize
	                            });
	                        }
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'onMouseUp',
	        value: function onMouseUp() {
	            if (this.props.allowResize && !this.props.size) {
	                if (this.state.active) {
	                    if (typeof this.props.onDragFinished === 'function') {
	                        this.props.onDragFinished();
	                    }
	                    this.setState({
	                        active: false
	                    });
	                }
	            }
	        }
	    }, {
	        key: 'setSize',
	        value: function setSize(props, state) {
	            var ref = this.props.primary === 'first' ? this.refs.pane1 : this.refs.pane2;
	            var newSize = void 0;
	            if (ref) {
	                newSize = props.size || state && state.draggedSize || props.defaultSize || props.minSize;
	                ref.setState({
	                    size: newSize
	                });
	            }
	        }
	    }, {
	        key: 'unFocus',
	        value: function unFocus() {
	            if (document.selection) {
	                document.selection.empty();
	            } else {
	                window.getSelection().removeAllRanges();
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var split = _props.split;
	            var allowResize = _props.allowResize;

	            var disabledClass = allowResize ? '' : 'disabled';

	            var style = {
	                display: 'flex',
	                flex: 1,
	                position: 'relative',
	                outline: 'none',
	                overflow: 'hidden',
	                MozUserSelect: 'text',
	                WebkitUserSelect: 'text',
	                msUserSelect: 'text',
	                userSelect: 'text'
	            };

	            if (split === 'vertical') {
	                _extends(style, {
	                    flexDirection: 'row',
	                    height: '100%',
	                    position: 'absolute',
	                    left: 0,
	                    right: 0
	                });
	            } else {
	                _extends(style, {
	                    flexDirection: 'column',
	                    height: '100%',
	                    minHeight: '100%',
	                    position: 'absolute',
	                    top: 0,
	                    bottom: 0,
	                    width: '100%'
	                });
	            }

	            var resizerChildren = null;
	            if (this.props.resizerChildren) {
	                resizerChildren = this.props.resizerChildren;
	            } else if (split === 'vertical') {
	                resizerChildren = _react2.default.createElement(_VSplit2.default, null);
	            } else {
	                resizerChildren = _react2.default.createElement(_HSplit2.default, null);
	            }

	            var children = this.props.children;
	            var classes = ['SplitPane', this.props.className, split, disabledClass];
	            var prefixed = _reactVendorPrefix2.default.prefix({ styles: style });

	            return _react2.default.createElement(
	                'div',
	                { className: classes.join(' '), style: prefixed.styles, ref: 'splitPane' },
	                _react2.default.createElement(
	                    _Pane2.default,
	                    { ref: 'pane1', key: 'pane1', className: 'Pane1', split: split },
	                    children[0]
	                ),
	                _react2.default.createElement(_Resizer2.default, {
	                    ref: 'resizer',
	                    key: 'resizer',
	                    className: disabledClass,
	                    onMouseDown: this.onMouseDown,
	                    children: resizerChildren,
	                    split: split
	                }),
	                _react2.default.createElement(
	                    _Pane2.default,
	                    { ref: 'pane2', key: 'pane2', className: 'Pane2', split: split },
	                    children[1]
	                )
	            );
	        }
	    }]);

	    return SplitPane;
	}(_react.Component);

	SplitPane.propTypes = {
	    primary: _react.PropTypes.oneOf(['first', 'second']),
	    minSize: _react.PropTypes.number,
	    maxSize: _react.PropTypes.number,
	    defaultSize: _react.PropTypes.number,
	    size: _react.PropTypes.number,
	    allowResize: _react.PropTypes.bool,
	    split: _react.PropTypes.oneOf(['vertical', 'horizontal']),
	    onDragStarted: _react.PropTypes.func,
	    onDragFinished: _react.PropTypes.func,
	    onChange: _react.PropTypes.func,
	    className: _react.PropTypes.string,
	    children: _react.PropTypes.arrayOf(_react.PropTypes.node).isRequired,
	    resizerChildren: _react.PropTypes.node
	};

	SplitPane.defaultProps = {
	    split: 'vertical',
	    minSize: 50,
	    allowResize: true,
	    primary: 'first'
	};

	exports.default = SplitPane;
	module.exports = exports['default'];

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(71);

	var _react2 = _interopRequireDefault(_react);

	var _reactVendorPrefix = __webpack_require__(159);

	var _reactVendorPrefix2 = _interopRequireDefault(_reactVendorPrefix);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Pane = function (_Component) {
	    _inherits(Pane, _Component);

	    function Pane() {
	        var _Object$getPrototypeO;

	        _classCallCheck(this, Pane);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        var _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Pane)).call.apply(_Object$getPrototypeO, [this].concat(args)));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(Pane, [{
	        key: 'render',
	        value: function render() {
	            var split = this.props.split;
	            var classes = ['Pane', split, this.props.className];

	            var style = {
	                flex: 1,
	                position: 'relative',
	                outline: 'none'
	            };

	            if (this.state.size !== undefined) {
	                if (split === 'vertical') {
	                    style.width = this.state.size;
	                } else {
	                    style.height = this.state.size;
	                    style.display = 'flex';
	                }
	                style.flex = 'none';
	            }
	            var prefixed = _reactVendorPrefix2.default.prefix({ styles: style });

	            return _react2.default.createElement(
	                'div',
	                { className: classes.join(' '), style: prefixed.styles },
	                this.props.children
	            );
	        }
	    }]);

	    return Pane;
	}(_react.Component);

	Pane.propTypes = {
	    split: _react.PropTypes.oneOf(['vertical', 'horizontal']),
	    className: _react.PropTypes.string.isRequired,
	    children: _react.PropTypes.object.isRequired
	};

	exports.default = Pane;
	module.exports = exports['default'];

/***/ },
/* 159 */
/***/ function(module, exports) {

	module.exports=function(n){function t(i){if(e[i])return e[i].exports;var r=e[i]={exports:{},id:i,loaded:!1};return n[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var e={};return t.m=n,t.c=e,t.p="",t(0)}([function(n,t){"use strict";function e(n){return a.js+n[0].toUpperCase()+n.substr(1)}function i(n){return Object.keys(n).reduce(function(t,i){return-1!==s.indexOf(i)?t[e(i)]=n[i]:t[i]=n[i],t},{})}function r(n){var t=navigator.userAgent.toLowerCase();return-1!==t.indexOf("safari")&&-1===t.indexOf("chrome")?!function(){var t=function(n,t,e){n[e]=n[t],delete n[t]};"flex"===n.display&&(n.display="-webkit-flex"),["alignItems","justifyContent","flexDirection","flex","flexWrap"].forEach(function(i){t(n,i,e(i))})}():-1!==navigator.appVersion.indexOf("MSIE 10")&&"flex"===n.display&&(n.display="-ms-flexbox"),n}function o(n){return Object.keys(n).reduce(function(t,e){return t[e]=r(i(n[e])),t},{})}var a=function(){var n=window.getComputedStyle(document.documentElement,""),t=(Array.prototype.slice.call(n).join("").match(/-(moz|webkit|ms)-/)||""===n.OLink&&["","o"])[1];return{dom:"ms"===t?"MS":t,lowercase:t,css:"-"+t+"-",js:"ms"===t?t:t[0].toUpperCase()+t.substr(1)}}(),s=["animation","animationDelay","animationDirection","animationDuration","animationFillMode","animationIterationCount","animationName","animationPlayState","animationTimingFunction","appearance","backfaceVisibility","backgroundClip","borderImage","borderImageSlice","boxSizing","boxShadow","contentColumns","transform","transformOrigin","transformStyle","transition","transitionDelay","transitionDuration","transitionProperty","transitionTimingFunction","perspective","perspectiveOrigin","userSelect"];t.prefix=o}]);

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(71);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var VSplit = function (_Component) {
	  _inherits(VSplit, _Component);

	  function VSplit() {
	    var _Object$getPrototypeO;

	    _classCallCheck(this, VSplit);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    var _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(VSplit)).call.apply(_Object$getPrototypeO, [this].concat(args)));

	    _this.state = {};
	    return _this;
	  }

	  _createClass(VSplit, [{
	    key: 'render',
	    value: function render() {
	      var style = {
	        cursor: 'col-resize',
	        background: '#EEEEEE',
	        borderLeft: 'solid #E0E0E0 1px',
	        borderRight: 'solid #E0E0E0 1px',
	        height: '100%',
	        width: '3px'
	      };

	      return _react2.default.createElement('div', { style: style });
	    }
	  }]);

	  return VSplit;
	}(_react.Component);

	exports.default = VSplit;
	module.exports = exports['default'];

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(71);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HSplit = function (_Component) {
	  _inherits(HSplit, _Component);

	  function HSplit() {
	    var _Object$getPrototypeO;

	    _classCallCheck(this, HSplit);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    var _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(HSplit)).call.apply(_Object$getPrototypeO, [this].concat(args)));

	    _this.state = {};
	    return _this;
	  }

	  _createClass(HSplit, [{
	    key: 'render',
	    value: function render() {
	      var style = {
	        cursor: 'row-resize',
	        background: '#EEEEEE',
	        borderBottom: 'solid #E0E0E0 1px',
	        borderTop: 'solid #E0E0E0 1px',
	        height: '3px',
	        width: '100%'
	      };

	      return _react2.default.createElement('div', { style: style });
	    }
	  }]);

	  return HSplit;
	}(_react.Component);

	exports.default = HSplit;
	module.exports = exports['default'];

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(71);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Resizer = function (_Component) {
	    _inherits(Resizer, _Component);

	    function Resizer() {
	        var _Object$getPrototypeO;

	        _classCallCheck(this, Resizer);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        var _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Resizer)).call.apply(_Object$getPrototypeO, [this].concat(args)));

	        _this.onMouseDown = _this.onMouseDown.bind(_this);
	        return _this;
	    }

	    _createClass(Resizer, [{
	        key: 'onMouseDown',
	        value: function onMouseDown(event) {
	            this.props.onMouseDown(event);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var split = _props.split;
	            var className = _props.className;
	            var children = _props.children;

	            var classes = ['Resizer', split, className];

	            var style = {};
	            if (split === 'vertical') {
	                _extends(style, { height: '100%' });
	            } else {
	                _extends(style, { width: '100%' });
	            }

	            return _react2.default.createElement(
	                'div',
	                { style: style, className: classes.join(' '), onMouseDown: this.onMouseDown },
	                children
	            );
	        }
	    }]);

	    return Resizer;
	}(_react.Component);

	Resizer.propTypes = {
	    onMouseDown: _react.PropTypes.func.isRequired,
	    split: _react.PropTypes.oneOf(['vertical', 'horizontal']),
	    className: _react.PropTypes.string.isRequired,
	    children: _react.PropTypes.node.isRequired
	};

	exports.default = Resizer;
	module.exports = exports['default'];

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isRunning = isRunning;
	exports.isLoadingRuntime = isLoadingRuntime;
	exports.hasLoadedRuntime = hasLoadedRuntime;
	exports.isConnectingDrive = isConnectingDrive;
	exports.hasConnectedDrive = hasConnectedDrive;
	exports.isSavingDrive = isSavingDrive;
	exports.hasSavedDrive = hasSavedDrive;
	exports.isSharingDrive = isSharingDrive;
	exports.hasSharedDrive = hasSharedDrive;
	exports.getError = getError;
	exports.getResult = getResult;
	exports.getSource = getSource;
	exports.getCode = getCode;
	exports.isMoreMenuExpanded = isMoreMenuExpanded;
	exports.getFontSize = getFontSize;
	exports.hasHistory = hasHistory;
	exports.getHistory = getHistory;
	exports.getCodemirrorOptions = getCodemirrorOptions;

	var _constants = __webpack_require__(164);

	var constants = _interopRequireWildcard(_constants);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function isRunning(state) {
	  return Object.values(constants.runtimeStages).includes(state.getIn(['runCode', 'stage']));
	}

	function isLoadingRuntime(state) {
	  return state.getIn(['loadApi', 'stage']) === constants.loadApiStages.STARTED;
	}

	function hasLoadedRuntime(state) {
	  return state.getIn(['loadApi', 'stage']) === constants.loadApiStages.FINISHED;
	}

	function isConnectingDrive(state) {
	  return state.getIn(['googleDrive', 'stage']) === constants.driveStages.connect.STARTED;
	}

	function hasConnectedDrive(state) {
	  return state.getIn(['googleDrive', 'drive']) !== null;
	}

	function isSavingDrive(state) {
	  return state.getIn(['googleDrive', 'stage']) === constants.driveStages.save.STARTED;
	}

	function hasSavedDrive(state) {
	  return state.getIn(['googleDrive', 'save']) !== null;
	}

	function isSharingDrive(state) {
	  return state.getIn(['googleDrive', 'stage']) === constants.driveStages.share.STARTED;
	}

	function hasSharedDrive(state) {
	  return state.getIn(['googleDrive', 'share']) !== null;
	}

	function getError(state) {
	  return state.getIn(['loadApi', 'error']) || state.getIn(['runCode', 'error']) || state.getIn(['googleDrive', 'error']);
	}

	function getResult(state) {
	  return state.getIn(['editor', 'result']);
	}

	function getSource(state) {
	  return state.getIn(['editor', 'source']);
	}

	function getCode(state) {
	  return state.getIn(['REPL', 'code']);
	}

	function isMoreMenuExpanded(state) {
	  return state.getIn(['moreMenu', 'expanded']);
	}

	function getFontSize(state) {
	  return state.getIn(['moreMenu', 'fontSize']);
	}

	function hasHistory(state) {
	  return state.getIn(['REPL', 'history']) !== [];
	}

	function getHistory(state) {
	  return state.getIn(['REPL', 'history']);
	}

	function getCodemirrorOptions(state) {
	  return Object.assign({
	    lineNumbers: true
	  }, state.getIn(['editor', 'codemirrorOptions']));
	}

/***/ },
/* 164 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var loadApiStages = exports.loadApiStages = {
	  STARTED: 'started',
	  FINISHED: 'finished',
	  FAILED: 'failed'
	};

	var runtimeStages = exports.runtimeStages = {
	  PARSING: 'parsing',
	  COMPILING: 'compiling',
	  EXECUTING: 'executing'
	};

	var driveStages = exports.driveStages = {
	  connect: {
	    STARTED: 'startedConnect',
	    FINISHED: 'finishedConnect',
	    FAILED: 'failedConnect'
	  },
	  save: {
	    STARTED: 'startedSave',
	    FINISHED: 'finishedSave',
	    FAILED: 'failedSave'
	  },
	  share: {
	    STARTED: 'startedShare',
	    FINISHED: 'finishedShare',
	    FAILED: 'failedShare'
	  }
	};

	var loadTexts = exports.loadTexts = ["Raising the masts...", "Securing the oarlocks...", "Hoisting the anchor...", "Swabbing the decks...", "Debarnacling the keel...", "Checking the cargo manifest...", "Assembling the crew...", "Inspecting the turnbuckles...", "Furling the rollers...", "Lashing the jib-boom...", "Tying the rigging...", "Reinforcing the hull...", "Bailing the bilge...", "Feeding the parrot...", "Consulting the map...", "Calibrating the compass...", "Polishing the spyglass...", "Latching the portholes..."];

	var fontBoundary = exports.fontBoundary = {
	  max: 56,
	  min: 8
	};

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(71);

	var _react2 = _interopRequireDefault(_react);

	var _radium = __webpack_require__(96);

	var _radium2 = _interopRequireDefault(_radium);

	var _Logo = __webpack_require__(166);

	var _Logo2 = _interopRequireDefault(_Logo);

	var _Stop = __webpack_require__(168);

	var _Stop2 = _interopRequireDefault(_Stop);

	var _Connect = __webpack_require__(174);

	var _Connect2 = _interopRequireDefault(_Connect);

	var _Save = __webpack_require__(176);

	var _Save2 = _interopRequireDefault(_Save);

	var _Share = __webpack_require__(177);

	var _Share2 = _interopRequireDefault(_Share);

	var _More = __webpack_require__(178);

	var _More2 = _interopRequireDefault(_More);

	var _Run = __webpack_require__(180);

	var _Run2 = _interopRequireDefault(_Run);

	var _Name = __webpack_require__(181);

	var _Name2 = _interopRequireDefault(_Name);

	var _styles = __webpack_require__(167);

	var _MoreMenu = __webpack_require__(183);

	var _MoreMenu2 = _interopRequireDefault(_MoreMenu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Toolbar = function (_React$Component) {
	  _inherits(Toolbar, _React$Component);

	  function Toolbar() {
	    _classCallCheck(this, Toolbar);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Toolbar).apply(this, arguments));
	  }

	  _createClass(Toolbar, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { style: _styles.styles.toolbar.base },
	        _react2.default.createElement(
	          'div',
	          { style: _styles.styles.toolbar.tools },
	          _react2.default.createElement(_Logo2.default, { kind: 'toolbar' }),
	          _react2.default.createElement(_Connect2.default, null),
	          _react2.default.createElement(_Name2.default, null),
	          _react2.default.createElement(_Save2.default, null),
	          _react2.default.createElement(_Share2.default, null),
	          _react2.default.createElement(_More2.default, null),
	          _react2.default.createElement(_MoreMenu2.default, null)
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: _styles.styles.toolbar.controls },
	          _react2.default.createElement(_Run2.default, null),
	          _react2.default.createElement(_Stop2.default, null)
	        )
	      );
	    }
	  }]);

	  return Toolbar;
	}(_react2.default.Component);

	exports.default = (0, _radium2.default)(Toolbar);

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(71);

	var _react2 = _interopRequireDefault(_react);

	var _radium = __webpack_require__(96);

	var _radium2 = _interopRequireDefault(_radium);

	var _styles = __webpack_require__(167);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Logo = function (_React$Component) {
	  _inherits(Logo, _React$Component);

	  function Logo() {
	    _classCallCheck(this, Logo);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Logo).apply(this, arguments));
	  }

	  _createClass(Logo, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'a',
	        { href: 'https://code.pyret.org/' },
	        _react2.default.createElement('img', { src: 'https://code.pyret.org/img/pyret-logo.png',
	          style: [_styles.styles.logos[this.props.kind], this.props.style] })
	      );
	    }
	  }]);

	  return Logo;
	}(_react2.default.Component);

	Logo.propTypes = {
	  kind: _react2.default.PropTypes.string,
	  style: _react2.default.PropTypes.object
	};

	exports.default = (0, _radium2.default)(Logo);

/***/ },
/* 167 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var styles = exports.styles = {
	  errorBox: {
	    fontFamily: "sans-serif",
	    border: 1,
	    borderColor: "#FF3131",
	    borderStyle: "dashed",
	    padding: 3,
	    borderRadius: 3,
	    background: "#FFF2F2",
	    position: "relative",
	    top: 8,
	    left: 6
	  },
	  logos: {
	    toolbar: {
	      height: 36,
	      marginTop: 2,
	      alignSelf: "center",
	      paddingLeft: 15,
	      paddingRight: 15
	    }
	  },
	  spinners: {
	    toolbar: {
	      height: 30
	    },
	    window: {}
	  },
	  toolbar: {
	    base: {
	      display: "flex",
	      justifyContent: "space-between",
	      backgroundColor: "#C0C0C0",
	      flexBasis: 40,
	      flexShrink: 0
	    },
	    tools: {
	      display: "flex",
	      justifyContent: "flex-start"
	    },
	    controls: {
	      height: "inherit",
	      display: "flex",
	      justifyContent: "flex-end"
	    }
	  },
	  forms: {
	    width: 194
	  },
	  buttons: {
	    base: {
	      display: "flex",
	      justifyContent: "space-around",
	      alignItems: "center",
	      width: 150,
	      borderWidth: 0,
	      fontSize: "15px",
	      fontFamily: "sans-serif",
	      color: "white"
	    },
	    toolbar: {
	      width: 120,
	      backgroundColor: "gray"
	    },
	    run: {
	      waiting: {
	        backgroundColor: "#317BCF"
	      },
	      running: {
	        color: "gray"
	      }
	    },
	    stop: {
	      stopping: {
	        backgroundColor: "#FF0000",
	        color: "white"
	      },
	      waiting: {
	        color: "gray"
	      }
	    },
	    more: {
	      moreButton: {
	        height: 40,
	        width: 75,
	        position: "absolute",
	        marginLeft: 3,
	        justifyContent: "center"
	      },
	      menuContainer: {
	        display: "flex",
	        flexDirection: "column",
	        position: "absolute",
	        marginTop: 40,
	        marginLeft: 3,
	        zIndex: 1
	      },
	      menuItems: {
	        justifyContent: "space-between",
	        fontSize: 16,
	        height: 40,
	        width: 180,
	        color: "black",
	        backgroundColor: "#EFEFEF",
	        textDecoration: "none"
	      },
	      fontButtonContainer: {
	        display: "flex",
	        flexDirection: "row",
	        justifyContent: "space-between",
	        backgroundColor: "#DDDDDD",
	        height: 40,
	        fontFamily: "sans-serif",
	        borderStyle: "solid",
	        borderWidth: "1.5px",
	        borderColor: "rgba(0,0,0,0.1)",
	        borderRightWidth: 0,
	        borderLeftWidth: 0
	      },
	      fontSizeButtons: {
	        color: "black",
	        width: 36,
	        height: "inherit",
	        borderStyle: "solid",
	        borderWidth: "1.5px",
	        borderColor: "rgba(0,0,0,0.1)",
	        borderTopWidth: 0,
	        borderBottomWidth: 0
	      }
	    },
	    googleDrive: {
	      float: "left",
	      width: 194,
	      backgroundColor: "gray"
	    }
	  },
	  linkStyle: {
	    textDecoration: "none",
	    color: "black"
	  }
	};

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Stop = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactRedux = __webpack_require__(72);

	var _redux = __webpack_require__(79);

	var _react = __webpack_require__(71);

	var _react2 = _interopRequireDefault(_react);

	var _radium = __webpack_require__(96);

	var _radium2 = _interopRequireDefault(_radium);

	var _Button = __webpack_require__(169);

	var _Button2 = _interopRequireDefault(_Button);

	var _actionCreators = __webpack_require__(170);

	var _selectors = __webpack_require__(163);

	var _styles = __webpack_require__(167);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Stop = exports.Stop = function (_React$Component) {
	  _inherits(Stop, _React$Component);

	  function Stop() {
	    _classCallCheck(this, Stop);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Stop).apply(this, arguments));
	  }

	  _createClass(Stop, [{
	    key: "render",
	    value: function render() {
	      if (this.props.running) {
	        return _react2.default.createElement(
	          _Button2.default,
	          { style: _styles.styles.buttons.stop.stopping,
	            onClick: this.props.onStop },
	          "Stop"
	        );
	      } else {
	        return _react2.default.createElement(
	          _Button2.default,
	          { style: _styles.styles.buttons.stop.waiting },
	          "Stop"
	        );
	      }
	    }
	  }]);

	  return Stop;
	}(_react2.default.Component);

	Stop.propTypes = {
	  running: _react2.default.PropTypes.bool,
	  onStop: _react2.default.PropTypes.func
	};

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    running: (0, _selectors.isRunning)(state)
	  };
	}, function (dispatch) {
	  return (0, _redux.bindActionCreators)({
	    onStop: _actionCreators.stop
	  }, dispatch);
	})((0, _radium2.default)(Stop));

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Button = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(71);

	var _react2 = _interopRequireDefault(_react);

	var _radium = __webpack_require__(96);

	var _radium2 = _interopRequireDefault(_radium);

	var _styles = __webpack_require__(167);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Button = exports.Button = function (_React$Component) {
	  _inherits(Button, _React$Component);

	  function Button() {
	    _classCallCheck(this, Button);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Button).apply(this, arguments));
	  }

	  _createClass(Button, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "button",
	        _extends({}, this.props, {
	          style: [_styles.styles.buttons.base, _styles.styles.buttons[this.props.kind], this.props.style] }),
	        this.props.children
	      );
	    }
	  }]);

	  return Button;
	}(_react2.default.Component);

	Button.propTypes = {
	  kind: _react2.default.PropTypes.string,
	  children: _react2.default.PropTypes.node,
	  style: _react2.default.PropTypes.object
	};

	exports.default = (0, _radium2.default)(Button);

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.configureIDE = configureIDE;
	exports.loadRuntimeApi = loadRuntimeApi;
	exports.run = run;
	exports.changeSource = changeSource;
	exports.stop = stop;
	exports.expandMoreMenu = expandMoreMenu;
	exports.collapseMoreMenu = collapseMoreMenu;
	exports.incrementFontSize = incrementFontSize;
	exports.decrementFontSize = decrementFontSize;
	exports.clear = clear;
	exports.connectGoogleDrive = connectGoogleDrive;
	exports.saveGoogleDrive = saveGoogleDrive;
	exports.shareGoogleDrive = shareGoogleDrive;
	exports.signoutGoogleDrive = signoutGoogleDrive;
	exports.changeREPLCode = changeREPLCode;
	exports.recieveREPLResult = recieveREPLResult;

	var _actionTypes = __webpack_require__(171);

	var actType = _interopRequireWildcard(_actionTypes);

	var _selectors = __webpack_require__(163);

	var selectors = _interopRequireWildcard(_selectors);

	var _firebase = __webpack_require__(172);

	var _firebase2 = _interopRequireDefault(_firebase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function configureIDE(_ref) {
	  var codemirrorOptions = _ref.codemirrorOptions;
	  var runtimeApiLoader = _ref.runtimeApiLoader;

	  return function (dispatch) {
	    dispatch(loadRuntimeApi(runtimeApiLoader));
	    dispatch({ type: actType.CONFIGURE_CODEMIRROR, payload: codemirrorOptions });
	  };
	}

	/**
	 * @param function runtimeApiLoader - a function that asynchronously
	 *                                    loads a runtime api. It should return
	 *                                    a promise that resolves to the loaded api.
	 */
	function loadRuntimeApi(runtimeApiLoader) {
	  return function (dispatch) {
	    dispatch({ type: actType.START_LOAD_RUNTIME });
	    var promise = runtimeApiLoader();
	    promise.then(function (loadedRuntimeApi) {
	      dispatch({ type: actType.FINISH_LOAD_RUNTIME, payload: loadedRuntimeApi });
	    }).catch(function (reason) {
	      dispatch({ type: actType.FAIL_LOAD_RUNTIME, payload: reason });
	    });
	  };
	}

	function run(src) {
	  return function (dispatch, getState) {
	    dispatch({ type: actType.STORE_SOURCE, payload: src });
	    dispatch({ type: actType.START_PARSE, stage: 'parsing' });
	    var state = getState();
	    var runtimeApi = state.get('loadApi') && state.getIn(['loadApi', 'runtime']);
	    if (!runtimeApi) {
	      throw new Error("Runtime has not been loaded, you can't run anything yet!");
	    }
	    var stdout = function stdout(s) {
	      return dispatch(recieveREPLResult({ type: 'stdout', value: s }));
	    };
	    var stderr = function stderr(s) {
	      return dispatch(recieveREPLResult({ type: 'stderr', value: s }));
	    };
	    var onResult = function onResult(s) {
	      return dispatch(recieveREPLResult(s));
	    };
	    runtimeApi.get('parse')(src).then(function (ast) {
	      if (!selectors.isRunning(getState())) {
	        return;
	      }
	      dispatch({ type: actType.FINISH_PARSE, payload: ast });
	      dispatch({ type: actType.START_COMPILE, stage: 'compiling' });
	      runtimeApi.get('compile')(ast).then(function (bytecode) {
	        if (!selectors.isRunning(getState())) {
	          return;
	        }
	        dispatch({ type: actType.FINISH_COMPILE, payload: bytecode });
	        dispatch({ type: actType.START_EXECUTE, stage: 'executing' });
	        runtimeApi.get('execute')(bytecode, stdout, stderr, onResult).then(function (result) {
	          if (!selectors.isRunning(getState())) {
	            return;
	          }
	          dispatch({
	            type: actType.FINISH_EXECUTE,
	            payload: result
	          });
	          dispatch({
	            type: actType.STORE_EDITOR_RESULT,
	            payload: result
	          });
	        }).catch(function (reason) {
	          dispatch({ type: actType.FAIL_EXECUTE, payload: reason });
	        });
	      }).catch(function (reason) {
	        dispatch({ type: actType.FAIL_COMPILE, payload: reason });
	      });
	    }).catch(function (reason) {
	      dispatch({ type: actType.FAIL_PARSE, payload: reason });
	    });
	  };
	}

	function changeSource(source) {
	  return {
	    type: actType.CHANGE_SOURCE,
	    payload: source
	  };
	}

	function stop() {
	  return {
	    type: actType.STOP_RUN
	  };
	}

	function expandMoreMenu() {
	  return {
	    type: actType.EXPAND_MORE_MENU
	  };
	}

	function collapseMoreMenu() {
	  return {
	    type: actType.COLLAPSE_MORE_MENU
	  };
	}

	function incrementFontSize() {
	  return {
	    type: actType.INCREMENT_FONT_SIZE
	  };
	}

	function decrementFontSize() {
	  return {
	    type: actType.DECREMENT_FONT_SIZE
	  };
	}

	function clear() {
	  return {
	    type: actType.CLEAR_STATE
	  };
	}

	function loadGoogleApi() {
	  return new Promise(function (resolve, reject) {
	    var timeout = window.setTimeout(function () {
	      return reject(new Error("timeout while loading Google Apis"));
	    }, 30000);
	    var callbackName = "googleApiCallback" + Math.random();
	    window[callbackName] = function () {
	      delete window[callbackName];
	      window.clearTimeout(timeout);
	      resolve(gapi);
	    };
	    var scriptTag = document.createElement('script');
	    scriptTag.src = "https://apis.google.com/js/client.js?onload=" + callbackName;
	    scriptTag.type = "text/javascript";
	    document.body.appendChild(scriptTag);
	  });
	}

	function connectGoogleDrive() {
	  return function (dispatch) {
	    dispatch({ type: actType.START_CONNECT_DRIVE });
	    var provider = new _firebase2.default.auth.GoogleAuthProvider();
	    provider.addScope('https://www.googleapis.com/auth/drive.file');
	    _firebase2.default.auth().signInWithPopup(provider).then(function (result) {
	      var token = result.credential.accessToken;
	      var user = result.user;
	      loadGoogleApi().then(function () {
	        var tokenObject = {
	          access_token: result.credential.accessToken
	        };
	        gapi.client.load('drive', 'v3', function () {
	          // set the authentication token
	          gapi.auth.setToken(tokenObject);
	          dispatch({ type: actType.FINISH_CONNECT_DRIVE });
	        });
	      });
	    }).catch(function (error) {
	      var errorCode = error.code;
	      var errorMessage = error.message;
	      var email = error.email;
	      var credential = error.credential;
	      dispatch({ type: actType.FAIL_CONNECT_DRIVE,
	        payload: error });
	    });
	  };
	}

	function saveGoogleDrive(file) {
	  return function (dispatch) {
	    dispatch({ type: actType.START_SAVE_DRIVE });
	    var promise = new Promise(function (resolve, reject) {
	      window.setTimeout(function () {
	        return resolve(file);
	      }, 1000);
	      if (!file) {
	        reject(new Error("File not saved"));
	      }
	    });
	    promise.then(function (file) {
	      dispatch({ type: actType.FINISH_SAVE_DRIVE, payload: file });
	    }).catch(function (reason) {
	      dispatch({ type: actType.FAIL_SAVE_DRIVE, payload: reason });
	    });
	  };
	}

	function shareGoogleDrive() {
	  return function (dispatch) {
	    dispatch({ type: actType.START_SHARE_DRIVE });
	    var promise = new Promise(function (resolve, reject) {
	      var sharedFile = "Shared file";
	      window.setTimeout(function () {
	        return resolve(sharedFile);
	      }, 1000);
	      if (!sharedFile) {
	        reject(new Error("File not shared"));
	      }
	    });
	    promise.then(function (link) {
	      dispatch({ type: actType.FINISH_SHARE_DRIVE, payload: link });
	    }).catch(function (reason) {
	      dispatch({ type: actType.FAIL_SHARE_DRIVE, payload: reason });
	    });
	  };
	}

	function signoutGoogleDrive() {
	  return function (dispatch) {
	    dispatch({ type: actType.START_SIGNOUT_DRIVE });
	    _firebase2.default.auth().signOut().then(function () {
	      dispatch({ type: actType.FINISH_SIGNOUT_DRIVE });
	    }).catch(function (reason) {
	      dispatch({ type: actType.FAIL_SIGNOUT_DRIVE, payload: reason });
	    });
	  };
	}

	function changeREPLCode(code) {
	  return {
	    type: actType.CHANGE_REPL_CODE,
	    payload: code
	  };
	}

	function recieveREPLResult(result) {
	  return {
	    type: actType.RECEIVE_REPL_RESULT,
	    payload: result
	  };
	}

/***/ },
/* 171 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var START_LOAD_RUNTIME = exports.START_LOAD_RUNTIME = 'START_LOAD_RUNTIME';
	var FINISH_LOAD_RUNTIME = exports.FINISH_LOAD_RUNTIME = 'FINISH_LOAD_RUNTIME';
	var FAIL_LOAD_RUNTIME = exports.FAIL_LOAD_RUNTIME = 'FAIL_LOAD_RUNTIME';

	var START_PARSE = exports.START_PARSE = 'START_PARSE';
	var FINISH_PARSE = exports.FINISH_PARSE = 'FINISH_PARSE';
	var FAIL_PARSE = exports.FAIL_PARSE = 'FAIL_PARSE';

	var START_COMPILE = exports.START_COMPILE = 'START_COMPILE';
	var FINISH_COMPILE = exports.FINISH_COMPILE = 'FINISH_COMPILE';
	var FAIL_COMPILE = exports.FAIL_COMPILE = 'FAIL_COMPILE';

	var START_EXECUTE = exports.START_EXECUTE = 'START_EXECUTE';
	var FINISH_EXECUTE = exports.FINISH_EXECUTE = 'FINISH_EXECUTE';
	var FAIL_EXECUTE = exports.FAIL_EXECUTE = 'FAIL_EXECUTE';

	var STOP_RUN = exports.STOP_RUN = 'STOP_RUN';
	var PAUSE_RUN = exports.PAUSE_RUN = 'PAUSE_RUN';
	var CLEAR_STATE = exports.CLEAR_STATE = 'CLEAR_STATE';

	var CHANGE_SOURCE = exports.CHANGE_SOURCE = 'CHANGE_SOURCE';
	var STORE_SOURCE = exports.STORE_SOURCE = 'STORE_SOURCE';
	var STORE_EDITOR_RESULT = exports.STORE_EDITOR_RESULT = 'STORE_EDITOR_RESULT';

	var START_CONNECT_DRIVE = exports.START_CONNECT_DRIVE = 'START_CONNECT_DRIVE';
	var FINISH_CONNECT_DRIVE = exports.FINISH_CONNECT_DRIVE = 'FINISH_CONNECT_DRIVE';
	var FAIL_CONNECT_DRIVE = exports.FAIL_CONNECT_DRIVE = 'FAIL_CONNECT_DRIVE';

	var START_SAVE_DRIVE = exports.START_SAVE_DRIVE = 'START_SAVE_DRIVE';
	var FINISH_SAVE_DRIVE = exports.FINISH_SAVE_DRIVE = 'FINISH_SAVE_DRIVE';
	var FAIL_SAVE_DRIVE = exports.FAIL_SAVE_DRIVE = 'FAIL_SAVE_DRIVE';

	var START_SHARE_DRIVE = exports.START_SHARE_DRIVE = 'START_SHARE_DRIVE';
	var FINISH_SHARE_DRIVE = exports.FINISH_SHARE_DRIVE = 'FINISH_SHARE_DRIVE';
	var FAIL_SHARE_DRIVE = exports.FAIL_SHARE_DRIVE = 'FAIL_SHARE_DRIVE';

	var START_SIGNOUT_DRIVE = exports.START_SIGNOUT_DRIVE = 'START_SIGNOUT_DRIVE';
	var FINISH_SIGNOUT_DRIVE = exports.FINISH_SIGNOUT_DRIVE = 'FINISH_SIGNOUT_DRIVE';
	var FAIL_SIGNOUT_DRIVE = exports.FAIL_SIGNOUT_DRIVE = 'FAIL_SIGNOUT_DRIVE';

	var CHANGE_REPL_CODE = exports.CHANGE_REPL_CODE = 'CHANGE_REPL_CODE';
	var RECEIVE_REPL_RESULT = exports.RECEIVE_REPL_RESULT = 'RECEIVE_REPL_RESULT';

	var EXPAND_MORE_MENU = exports.EXPAND_MORE_MENU = 'EXPAND_MORE_MENU';
	var COLLAPSE_MORE_MENU = exports.COLLAPSE_MORE_MENU = 'COLLAPSE_MORE_MENU';

	var INCREMENT_FONT_SIZE = exports.INCREMENT_FONT_SIZE = 'INCREMENT_FONT_SIZE';
	var DECREMENT_FONT_SIZE = exports.DECREMENT_FONT_SIZE = 'DECREMENT_FONT_SIZE';

	var CONFIGURE_CODEMIRROR = exports.CONFIGURE_CODEMIRROR = 'CONFIGURE_CODEMIRROR';

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *  Firebase libraries for browser - npm package.
	 *
	 * Usage:
	 *
	 *   firebase = require('firebase');
	 */
	__webpack_require__(173);
	module.exports = firebase;


/***/ },
/* 173 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/*! @license Firebase v3.2.0
	    Build: 3.2.0-rc.2
	    Terms: https://developers.google.com/terms */
	(function() { var k="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global?global:this,l=function(){k.Symbol||(k.Symbol=aa);l=function(){}},ba=0,aa=function(a){return"jscomp_symbol_"+a+ba++},m=function(){l();k.Symbol.iterator||(k.Symbol.iterator=k.Symbol("iterator"));m=function(){}},ca=function(){var a=["next","error","complete"];m();var b=a[Symbol.iterator];if(b)return b.call(a);var c=0;return{next:function(){return c<a.length?{done:!1,value:a[c++]}:{done:!0}}}},da="function"==typeof Object.defineProperties?
	Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},p=function(a,b){if(b){var c=k;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&da(c,a,{configurable:!0,ca:!0,value:b})}};
	p("String.prototype.repeat",function(a){return a?a:function(a){var c;if(null==this)throw new TypeError("The 'this' value for String.prototype.repeat must not be null or undefined");c=this+"";if(0>a||1342177279<a)throw new RangeError("Invalid count value");a|=0;for(var d="";a;)if(a&1&&(d+=c),a>>>=1)c+=c;return d}});
	var ea=function(a,b){m();a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};return d.next()}};d[Symbol.iterator]=function(){return d};return d};p("Array.prototype.keys",function(a){return a?a:function(){return ea(this,function(a){return a})}});
	var q=this,r=function(){},t=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
	else if("function"==b&&"undefined"==typeof a.call)return"object";return b},u=function(a){return"function"==t(a)},fa=function(a,b,c){return a.call.apply(a.bind,arguments)},ga=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},v=function(a,b,c){v=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?
	fa:ga;return v.apply(null,arguments)},w=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}},x=function(a,b){function c(){}c.prototype=b.prototype;a.ba=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.aa=function(a,c,g){for(var h=Array(arguments.length-2),f=2;f<arguments.length;f++)h[f-2]=arguments[f];return b.prototype[c].apply(a,h)}};function __extends(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)}
	function __decorate(a,b,c,d){var e=arguments.length,g=3>e?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d,h;h=(window||global).Reflect;if("object"===typeof h&&"function"===typeof h.decorate)g=h.decorate(a,b,c,d);else for(var f=a.length-1;0<=f;f--)if(h=a[f])g=(3>e?h(g):3<e?h(b,c,g):h(b,c))||g;return 3<e&&g&&Object.defineProperty(b,c,g),g}function __metadata(a,b){var c=(window||global).Reflect;if("object"===typeof c&&"function"===typeof c.metadata)return c.metadata(a,b)}
	var __param=function(a,b){return function(c,d){b(c,d,a)}},__awaiter=function(a,b,c,d){return new (c||(c=Promise))(function(e,g){function h(a){try{n(d.next(a))}catch(b){g(b)}}function f(a){try{n(d.throw(a))}catch(b){g(b)}}function n(a){a.done?e(a.value):(new c(function(b){b(a.value)})).then(h,f)}n((d=d.apply(a,b)).next())})};var y=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,y);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};x(y,Error);y.prototype.name="CustomError";var ha=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")};var z=function(a,b){b.unshift(a);y.call(this,ha.apply(null,b));b.shift()};x(z,y);z.prototype.name="AssertionError";var A=function(a,b,c,d){var e="Assertion failed";if(c)var e=e+(": "+c),g=d;else a&&(e+=": "+a,g=b);throw new z(""+e,g||[]);},B=function(a,b,c){a||A("",null,b,Array.prototype.slice.call(arguments,2))},C=function(a,b,c){u(a)||A("Expected function but got %s: %s.",[t(a),a],b,Array.prototype.slice.call(arguments,2))};var D=function(a,b,c){this.S=c;this.L=a;this.U=b;this.s=0;this.o=null};D.prototype.get=function(){var a;0<this.s?(this.s--,a=this.o,this.o=a.next,a.next=null):a=this.L();return a};D.prototype.put=function(a){this.U(a);this.s<this.S&&(this.s++,a.next=this.o,this.o=a)};var E;a:{var F=q.navigator;if(F){var ia=F.userAgent;if(ia){E=ia;break a}}E=""};var ja=function(a){q.setTimeout(function(){throw a;},0)},G,ka=function(){var a=q.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==E.indexOf("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+
	"//"+b.location.host,a=v(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&-1==E.indexOf("Trident")&&-1==E.indexOf("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.F;c.F=null;a()}};return function(a){d.next={F:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in
	document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){q.setTimeout(a,0)}};var H=function(){this.v=this.f=null},la=new D(function(){return new J},function(a){a.reset()},100);H.prototype.add=function(a,b){var c=la.get();c.set(a,b);this.v?this.v.next=c:(B(!this.f),this.f=c);this.v=c};H.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.v=null),a.next=null);return a};var J=function(){this.next=this.scope=this.B=null};J.prototype.set=function(a,b){this.B=a;this.scope=b;this.next=null};
	J.prototype.reset=function(){this.next=this.scope=this.B=null};var M=function(a,b){K||ma();L||(K(),L=!0);na.add(a,b)},K,ma=function(){if(q.Promise&&q.Promise.resolve){var a=q.Promise.resolve(void 0);K=function(){a.then(oa)}}else K=function(){var a=oa,c;!(c=!u(q.setImmediate))&&(c=q.Window&&q.Window.prototype)&&(c=-1==E.indexOf("Edge")&&q.Window.prototype.setImmediate==q.setImmediate);c?(G||(G=ka()),G(a)):q.setImmediate(a)}},L=!1,na=new H,oa=function(){for(var a;a=na.remove();){try{a.B.call(a.scope)}catch(b){ja(b)}la.put(a)}L=!1};var O=function(a,b){this.b=0;this.K=void 0;this.j=this.g=this.u=null;this.m=this.A=!1;if(a!=r)try{var c=this;a.call(b,function(a){N(c,2,a)},function(a){try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(b){}N(c,3,a)})}catch(d){N(this,3,d)}},pa=function(){this.next=this.context=this.h=this.c=this.child=null;this.w=!1};pa.prototype.reset=function(){this.context=this.h=this.c=this.child=null;this.w=!1};
	var qa=new D(function(){return new pa},function(a){a.reset()},100),ra=function(a,b,c){var d=qa.get();d.c=a;d.h=b;d.context=c;return d},ta=function(a,b,c){sa(a,b,c,null)||M(w(b,a))};O.prototype.then=function(a,b,c){null!=a&&C(a,"opt_onFulfilled should be a function.");null!=b&&C(b,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");return ua(this,u(a)?a:null,u(b)?b:null,c)};O.prototype.then=O.prototype.then;O.prototype.$goog_Thenable=!0;
	O.prototype.X=function(a,b){return ua(this,null,a,b)};var wa=function(a,b){a.g||2!=a.b&&3!=a.b||va(a);B(null!=b.c);a.j?a.j.next=b:a.g=b;a.j=b},ua=function(a,b,c,d){var e=ra(null,null,null);e.child=new O(function(a,h){e.c=b?function(c){try{var e=b.call(d,c);a(e)}catch(I){h(I)}}:a;e.h=c?function(b){try{var e=c.call(d,b);a(e)}catch(I){h(I)}}:h});e.child.u=a;wa(a,e);return e.child};O.prototype.Y=function(a){B(1==this.b);this.b=0;N(this,2,a)};O.prototype.Z=function(a){B(1==this.b);this.b=0;N(this,3,a)};
	var N=function(a,b,c){0==a.b&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.b=1,sa(c,a.Y,a.Z,a)||(a.K=c,a.b=b,a.u=null,va(a),3!=b||xa(a,c)))},sa=function(a,b,c,d){if(a instanceof O)return null!=b&&C(b,"opt_onFulfilled should be a function."),null!=c&&C(c,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),wa(a,ra(b||r,c||null,d)),!0;var e;if(a)try{e=!!a.$goog_Thenable}catch(h){e=!1}else e=!1;if(e)return a.then(b,c,d),
	!0;e=typeof a;if("object"==e&&null!=a||"function"==e)try{var g=a.then;if(u(g))return ya(a,g,b,c,d),!0}catch(h){return c.call(d,h),!0}return!1},ya=function(a,b,c,d,e){var g=!1,h=function(a){g||(g=!0,c.call(e,a))},f=function(a){g||(g=!0,d.call(e,a))};try{b.call(a,h,f)}catch(n){f(n)}},va=function(a){a.A||(a.A=!0,M(a.N,a))},za=function(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.j=null);null!=b&&B(null!=b.c);return b};
	O.prototype.N=function(){for(var a;a=za(this);){var b=this.b,c=this.K;if(3==b&&a.h&&!a.w){var d;for(d=this;d&&d.m;d=d.u)d.m=!1}if(a.child)a.child.u=null,Aa(a,b,c);else try{a.w?a.c.call(a.context):Aa(a,b,c)}catch(e){Ba.call(null,e)}qa.put(a)}this.A=!1};var Aa=function(a,b,c){2==b?a.c.call(a.context,c):a.h&&a.h.call(a.context,c)},xa=function(a,b){a.m=!0;M(function(){a.m&&Ba.call(null,b)})},Ba=ja;function P(a,b){if(!(b instanceof Object))return b;switch(b.constructor){case Date:return new Date(b.getTime());case Object:void 0===a&&(a={});break;case Array:a=[];break;default:return b}for(var c in b)b.hasOwnProperty(c)&&(a[c]=P(a[c],b[c]));return a};var Ca=Error.captureStackTrace,R=function(a,b){this.code=a;this.message=b;if(Ca)Ca(this,Q.prototype.create);else{var c=Error.apply(this,arguments);this.name="FirebaseError";Object.defineProperty(this,"stack",{get:function(){return c.stack}})}};R.prototype=Object.create(Error.prototype);R.prototype.constructor=R;R.prototype.name="FirebaseError";var Q=function(a,b,c){this.V=a;this.W=b;this.M=c;this.pattern=/\{\$([^}]+)}/g};
	Q.prototype.create=function(a,b){void 0===b&&(b={});var c=this.M[a];a=this.V+"/"+a;var c=void 0===c?"Error":c.replace(this.pattern,function(a,c){return void 0!==b[c]?b[c].toString():"<"+c+"?>"}),c=this.W+": "+c+" ("+a+").",c=new R(a,c),d;for(d in b)b.hasOwnProperty(d)&&"_"!==d.slice(-1)&&(c[d]=b[d]);return c};O.all=function(a){return new O(function(b,c){var d=a.length,e=[];if(d)for(var g=function(a,c){d--;e[a]=c;0==d&&b(e)},h=function(a){c(a)},f=0,n;f<a.length;f++)n=a[f],ta(n,w(g,f),h);else b(e)})};O.resolve=function(a){if(a instanceof O)return a;var b=new O(r);N(b,2,a);return b};O.reject=function(a){return new O(function(b,c){c(a)})};O.prototype["catch"]=O.prototype.X;var S=O;"undefined"!==typeof Promise&&(S=Promise);var Da=S;function Ea(a,b){a=new T(a,b);return a.subscribe.bind(a)}var T=function(a,b){var c=this;this.a=[];this.J=0;this.task=Da.resolve();this.l=!1;this.D=b;this.task.then(function(){a(c)}).catch(function(a){c.error(a)})};T.prototype.next=function(a){U(this,function(b){b.next(a)})};T.prototype.error=function(a){U(this,function(b){b.error(a)});this.close(a)};T.prototype.complete=function(){U(this,function(a){a.complete()});this.close()};
	T.prototype.subscribe=function(a,b,c){var d=this,e;if(void 0===a&&void 0===b&&void 0===c)throw Error("Missing Observer.");e=Fa(a)?a:{next:a,error:b,complete:c};void 0===e.next&&(e.next=V);void 0===e.error&&(e.error=V);void 0===e.complete&&(e.complete=V);a=this.$.bind(this,this.a.length);this.l&&this.task.then(function(){try{d.G?e.error(d.G):e.complete()}catch(a){}});this.a.push(e);return a};
	T.prototype.$=function(a){void 0!==this.a&&void 0!==this.a[a]&&(this.a[a]=void 0,--this.J,0===this.J&&void 0!==this.D&&this.D(this))};var U=function(a,b){if(!a.l)for(var c=0;c<a.a.length;c++)Ga(a,c,b)},Ga=function(a,b,c){a.task.then(function(){if(void 0!==a.a&&void 0!==a.a[b])try{c(a.a[b])}catch(d){}})};T.prototype.close=function(a){var b=this;this.l||(this.l=!0,void 0!==a&&(this.G=a),this.task.then(function(){b.a=void 0;b.D=void 0}))};
	function Fa(a){if("object"!==typeof a||null===a)return!1;for(var b=ca(),c=b.next();!c.done;c=b.next())if(c=c.value,c in a&&"function"===typeof a[c])return!0;return!1}function V(){};var W=S,X=function(a,b,c){var d=this;this.H=c;this.I=!1;this.i={};this.P={};this.C=b;this.T=P(void 0,a);Object.keys(c.INTERNAL.factories).forEach(function(a){d[a]=d.R.bind(d,a)})};X.prototype.delete=function(){var a=this;return(new W(function(b){Y(a);b()})).then(function(){a.H.INTERNAL.removeApp(a.C);return W.all(Object.keys(a.i).map(function(b){return a.i[b].INTERNAL.delete()}))}).then(function(){a.I=!0;a.i=null;a.P=null})};
	X.prototype.R=function(a){Y(this);void 0===this.i[a]&&(this.i[a]=this.H.INTERNAL.factories[a](this,this.O.bind(this)));return this.i[a]};X.prototype.O=function(a){P(this,a)};var Y=function(a){a.I&&Z(Ha("deleted",{name:a.C}))};Object.defineProperties(X.prototype,{name:{configurable:!0,enumerable:!0,get:function(){Y(this);return this.C}},options:{configurable:!0,enumerable:!0,get:function(){Y(this);return this.T}}});X.prototype.name&&X.prototype.options||X.prototype.delete||console.log("dc");
	function Ia(){function a(a){a=a||"[DEFAULT]";var c=b[a];void 0===c&&Z("noApp",{name:a});return c}var b={},c={},d=[],e={initializeApp:function(a,c){void 0===c?c="[DEFAULT]":"string"===typeof c&&""!==c||Z("bad-app-name",{name:c+""});void 0!==b[c]&&Z("dupApp",{name:c});var f=new X(a,c,e);b[c]=f;d.forEach(function(a){return a("create",f)});void 0!=f.INTERNAL&&void 0!=f.INTERNAL.getToken||P(f,{INTERNAL:{getToken:function(){return W.resolve(null)},addAuthTokenListener:function(){},removeAuthTokenListener:function(){}}});
	return f},app:a,apps:null,Promise:W,SDK_VERSION:"0.0.0",INTERNAL:{registerService:function(b,d,f){c[b]&&Z("dupService",{name:b});c[b]=d;d=function(c){void 0===c&&(c=a());return c[b]()};void 0!==f&&P(d,f);return e[b]=d},createFirebaseNamespace:Ia,extendNamespace:function(a){P(e,a)},createSubscribe:Ea,ErrorFactory:Q,registerAppHook:function(a){d.push(a)},removeApp:function(a){d.forEach(function(c){return c("delete",b[a])});delete b[a]},factories:c,Promise:O,deepExtend:P}};Object.defineProperty(e,"apps",
	{get:function(){return Object.keys(b).map(function(a){return b[a]})}});a.App=X;return e}function Z(a,b){throw Error(Ha(a,b));}
	function Ha(a,b){b=b||{};b={noApp:"No Firebase App '"+b.name+"' has been created - call Firebase App.initializeApp().","bad-app-name":"Illegal App name: '"+b.name+"'.",dupApp:"Firebase App named '"+b.name+"' already exists.",deleted:"Firebase App named '"+b.name+"' already deleted.",dupService:"Firebase Service named '"+b.name+"' already registered."}[a];return void 0===b?"Application Error: ("+a+")":b};"undefined"!==typeof window&&(window.firebase=Ia()); })();
	firebase.SDK_VERSION = "3.2.0";
	(function(){var h,aa=aa||{},l=this,ba=function(){},ca=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&
	!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},da=function(a){return null===a},ea=function(a){return"array"==ca(a)},fa=function(a){var b=ca(a);return"array"==b||"object"==b&&"number"==typeof a.length},m=function(a){return"string"==typeof a},ga=function(a){return"number"==typeof a},n=function(a){return"function"==ca(a)},ha=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},ia=function(a,
	b,c){return a.call.apply(a.bind,arguments)},ja=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},q=function(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ia:ja;return q.apply(null,arguments)},ka=function(a,b){var c=Array.prototype.slice.call(arguments,
	1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}},la=Date.now||function(){return+new Date},r=function(a,b){function c(){}c.prototype=b.prototype;a.Fc=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.He=function(a,c,f){for(var g=Array(arguments.length-2),k=2;k<arguments.length;k++)g[k-2]=arguments[k];return b.prototype[c].apply(a,g)}};var t=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,t);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};r(t,Error);t.prototype.name="CustomError";var ma=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")},na=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},oa=/&/g,pa=/</g,qa=/>/g,ra=/"/g,sa=/'/g,ta=/\x00/g,ua=/[\x00&<>"']/,u=function(a,b){return-1!=a.indexOf(b)},va=function(a,b){return a<b?-1:a>b?1:0};var wa=function(a,b){b.unshift(a);t.call(this,ma.apply(null,b));b.shift()};r(wa,t);wa.prototype.name="AssertionError";
	var xa=function(a,b,c,d){var e="Assertion failed";if(c)var e=e+(": "+c),f=d;else a&&(e+=": "+a,f=b);throw new wa(""+e,f||[]);},v=function(a,b,c){a||xa("",null,b,Array.prototype.slice.call(arguments,2))},ya=function(a,b){throw new wa("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));},za=function(a,b,c){ga(a)||xa("Expected number but got %s: %s.",[ca(a),a],b,Array.prototype.slice.call(arguments,2));return a},Aa=function(a,b,c){m(a)||xa("Expected string but got %s: %s.",[ca(a),a],b,Array.prototype.slice.call(arguments,
	2))},Ba=function(a,b,c){n(a)||xa("Expected function but got %s: %s.",[ca(a),a],b,Array.prototype.slice.call(arguments,2))};var Ca=Array.prototype.indexOf?function(a,b,c){v(null!=a.length);return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(m(a))return m(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},w=Array.prototype.forEach?function(a,b,c){v(null!=a.length);Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=m(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Da=function(a,b){for(var c=m(a)?
	a.split(""):a,d=a.length-1;0<=d;--d)d in c&&b.call(void 0,c[d],d,a)},Ea=Array.prototype.map?function(a,b,c){v(null!=a.length);return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=m(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},Fa=Array.prototype.some?function(a,b,c){v(null!=a.length);return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=m(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1},
	Ha=function(a){var b;a:{b=Ga;for(var c=a.length,d=m(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:m(a)?a.charAt(b):a[b]},Ia=function(a,b){return 0<=Ca(a,b)},Ka=function(a,b){var c=Ca(a,b),d;(d=0<=c)&&Ja(a,c);return d},Ja=function(a,b){v(null!=a.length);return 1==Array.prototype.splice.call(a,b,1).length},La=function(a,b){var c=0;Da(a,function(d,e){b.call(void 0,d,e,a)&&Ja(a,e)&&c++})},Ma=function(a){return Array.prototype.concat.apply(Array.prototype,
	arguments)},Na=function(a){return Array.prototype.concat.apply(Array.prototype,arguments)},Oa=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]},Pa=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(fa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}};var Qa=function(a,b){for(var c in a)b.call(void 0,a[c],c,a)},Ra=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b},Sa=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b},Va=function(a){for(var b in a)return!1;return!0},Wa=function(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0},Xa=function(a){var b={},c;for(c in a)b[c]=a[c];return b},Ya="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
	Za=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ya.length;f++)c=Ya[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var $a;a:{var ab=l.navigator;if(ab){var bb=ab.userAgent;if(bb){$a=bb;break a}}$a=""}var x=function(a){return u($a,a)};var cb=x("Opera"),y=x("Trident")||x("MSIE"),db=x("Edge"),eb=db||y,fb=x("Gecko")&&!(u($a.toLowerCase(),"webkit")&&!x("Edge"))&&!(x("Trident")||x("MSIE"))&&!x("Edge"),gb=u($a.toLowerCase(),"webkit")&&!x("Edge"),hb=function(){var a=l.document;return a?a.documentMode:void 0},ib;
	a:{var jb="",kb=function(){var a=$a;if(fb)return/rv\:([^\);]+)(\)|;)/.exec(a);if(db)return/Edge\/([\d\.]+)/.exec(a);if(y)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(gb)return/WebKit\/(\S+)/.exec(a);if(cb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();kb&&(jb=kb?kb[1]:"");if(y){var lb=hb();if(null!=lb&&lb>parseFloat(jb)){ib=String(lb);break a}}ib=jb}
	var mb=ib,nb={},z=function(a){var b;if(!(b=nb[a])){b=0;for(var c=na(String(mb)).split("."),d=na(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",k=d[f]||"",p=RegExp("(\\d*)(\\D*)","g"),Y=RegExp("(\\d*)(\\D*)","g");do{var Ta=p.exec(g)||["","",""],Ua=Y.exec(k)||["","",""];if(0==Ta[0].length&&0==Ua[0].length)break;b=va(0==Ta[1].length?0:parseInt(Ta[1],10),0==Ua[1].length?0:parseInt(Ua[1],10))||va(0==Ta[2].length,0==Ua[2].length)||va(Ta[2],Ua[2])}while(0==b)}b=nb[a]=
	0<=b}return b},ob=l.document,pb=ob&&y?hb()||("CSS1Compat"==ob.compatMode?parseInt(mb,10):5):void 0;var qb=null,rb=null,tb=function(a){var b="";sb(a,function(a){b+=String.fromCharCode(a)});return b},sb=function(a,b){function c(b){for(;d<a.length;){var c=a.charAt(d++),e=rb[c];if(null!=e)return e;if(!/^[\s\xa0]*$/.test(c))throw Error("Unknown base64 encoding at char: "+c);}return b}ub();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),k=c(64);if(64===k&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=k&&b(g<<6&192|k))}},ub=function(){if(!qb){qb={};rb={};for(var a=0;65>a;a++)qb[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),
	rb[qb[a]]=a,62<=a&&(rb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)]=a)}};var wb=function(){this.Wb="";this.Dd=vb};wb.prototype.oc=!0;wb.prototype.mc=function(){return this.Wb};wb.prototype.toString=function(){return"Const{"+this.Wb+"}"};var xb=function(a){if(a instanceof wb&&a.constructor===wb&&a.Dd===vb)return a.Wb;ya("expected object of type Const, got '"+a+"'");return"type_error:Const"},vb={};var A=function(){this.da="";this.Cd=yb};A.prototype.oc=!0;A.prototype.mc=function(){return this.da};A.prototype.toString=function(){return"SafeUrl{"+this.da+"}"};
	var zb=function(a){if(a instanceof A&&a.constructor===A&&a.Cd===yb)return a.da;ya("expected object of type SafeUrl, got '"+a+"' of type "+ca(a));return"type_error:SafeUrl"},Ab=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i,Cb=function(a){if(a instanceof A)return a;a=a.oc?a.mc():String(a);Ab.test(a)||(a="about:invalid#zClosurez");return Bb(a)},yb={},Bb=function(a){var b=new A;b.da=a;return b};Bb("about:blank");var Eb=function(){this.da="";this.Bd=Db};Eb.prototype.oc=!0;Eb.prototype.mc=function(){return this.da};Eb.prototype.toString=function(){return"SafeHtml{"+this.da+"}"};var Fb=function(a){if(a instanceof Eb&&a.constructor===Eb&&a.Bd===Db)return a.da;ya("expected object of type SafeHtml, got '"+a+"' of type "+ca(a));return"type_error:SafeHtml"},Db={};Eb.prototype.ge=function(a){this.da=a;return this};var Gb=function(a,b){var c;c=b instanceof A?b:Cb(b);a.href=zb(c)};var Hb=function(a){Hb[" "](a);return a};Hb[" "]=ba;var Ib=!y||9<=Number(pb),Jb=y&&!z("9");!gb||z("528");fb&&z("1.9b")||y&&z("8")||cb&&z("9.5")||gb&&z("528");fb&&!z("8")||y&&z("9");var Kb=function(){this.ua=this.ua;this.Mb=this.Mb};Kb.prototype.ua=!1;Kb.prototype.isDisposed=function(){return this.ua};Kb.prototype.Ka=function(){if(this.Mb)for(;this.Mb.length;)this.Mb.shift()()};var Lb=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.Sa=!1;this.nd=!0};Lb.prototype.preventDefault=function(){this.defaultPrevented=!0;this.nd=!1};var Mb=function(a,b){Lb.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.Cb=this.state=null;a&&this.init(a,b)};r(Mb,Lb);
	Mb.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;if(e){if(fb){var f;a:{try{Hb(e.nodeName);f=!0;break a}catch(g){}f=!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;null===d?(this.offsetX=gb||void 0!==a.offsetX?a.offsetX:a.layerX,this.offsetY=gb||void 0!==a.offsetY?a.offsetY:a.layerY,this.clientX=void 0!==a.clientX?a.clientX:
	a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;this.Cb=a;a.defaultPrevented&&
	this.preventDefault()};Mb.prototype.preventDefault=function(){Mb.Fc.preventDefault.call(this);var a=this.Cb;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Jb)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Nb="closure_listenable_"+(1E6*Math.random()|0),Ob=0;var Pb=function(a,b,c,d,e){this.listener=a;this.Ob=null;this.src=b;this.type=c;this.yb=!!d;this.Hb=e;this.key=++Ob;this.Va=this.xb=!1},Qb=function(a){a.Va=!0;a.listener=null;a.Ob=null;a.src=null;a.Hb=null};var Rb=function(a){this.src=a;this.s={};this.wb=0};Rb.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.s[f];a||(a=this.s[f]=[],this.wb++);var g=Sb(a,b,d,e);-1<g?(b=a[g],c||(b.xb=!1)):(b=new Pb(b,this.src,f,!!d,e),b.xb=c,a.push(b));return b};Rb.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.s))return!1;var e=this.s[a];b=Sb(e,b,c,d);return-1<b?(Qb(e[b]),Ja(e,b),0==e.length&&(delete this.s[a],this.wb--),!0):!1};
	var Tb=function(a,b){var c=b.type;c in a.s&&Ka(a.s[c],b)&&(Qb(b),0==a.s[c].length&&(delete a.s[c],a.wb--))};Rb.prototype.lc=function(a,b,c,d){a=this.s[a.toString()];var e=-1;a&&(e=Sb(a,b,c,d));return-1<e?a[e]:null};var Sb=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Va&&f.listener==b&&f.yb==!!c&&f.Hb==d)return e}return-1};var Ub="closure_lm_"+(1E6*Math.random()|0),Vb={},Wb=0,Xb=function(a,b,c,d,e){if(ea(b))for(var f=0;f<b.length;f++)Xb(a,b[f],c,d,e);else c=Yb(c),a&&a[Nb]?a.listen(b,c,d,e):Zb(a,b,c,!1,d,e)},Zb=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=!!e,k=$b(a);k||(a[Ub]=k=new Rb(a));c=k.add(b,c,d,e,f);if(c.Ob)return;d=ac();c.Ob=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,g);else if(a.attachEvent)a.attachEvent(bc(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");
	Wb++},ac=function(){var a=cc,b=Ib?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b},dc=function(a,b,c,d,e){if(ea(b))for(var f=0;f<b.length;f++)dc(a,b[f],c,d,e);else c=Yb(c),a&&a[Nb]?ec(a,b,c,d,e):Zb(a,b,c,!0,d,e)},fc=function(a,b,c,d,e){if(ea(b))for(var f=0;f<b.length;f++)fc(a,b[f],c,d,e);else c=Yb(c),a&&a[Nb]?a.T.remove(String(b),c,d,e):a&&(a=$b(a))&&(b=a.lc(b,c,!!d,e))&&gc(b)},gc=function(a){if(!ga(a)&&a&&!a.Va){var b=a.src;if(b&&b[Nb])Tb(b.T,
	a);else{var c=a.type,d=a.Ob;b.removeEventListener?b.removeEventListener(c,d,a.yb):b.detachEvent&&b.detachEvent(bc(c),d);Wb--;(c=$b(b))?(Tb(c,a),0==c.wb&&(c.src=null,b[Ub]=null)):Qb(a)}}},bc=function(a){return a in Vb?Vb[a]:Vb[a]="on"+a},ic=function(a,b,c,d){var e=!0;if(a=$b(a))if(b=a.s[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.yb==c&&!f.Va&&(f=hc(f,d),e=e&&!1!==f)}return e},hc=function(a,b){var c=a.listener,d=a.Hb||a.src;a.xb&&gc(a);return c.call(d,b)},cc=function(a,b){if(a.Va)return!0;
	if(!Ib){var c;if(!(c=b))a:{c=["window","event"];for(var d=l,e;e=c.shift();)if(null!=d[e])d=d[e];else{c=null;break a}c=d}e=c;c=new Mb(e,this);d=!0;if(!(0>e.keyCode||void 0!=e.returnValue)){a:{var f=!1;if(0==e.keyCode)try{e.keyCode=-1;break a}catch(p){f=!0}if(f||void 0==e.returnValue)e.returnValue=!0}e=[];for(f=c.currentTarget;f;f=f.parentNode)e.push(f);for(var f=a.type,g=e.length-1;!c.Sa&&0<=g;g--){c.currentTarget=e[g];var k=ic(e[g],f,!0,c),d=d&&k}for(g=0;!c.Sa&&g<e.length;g++)c.currentTarget=e[g],
	k=ic(e[g],f,!1,c),d=d&&k}return d}return hc(a,new Mb(b,this))},$b=function(a){a=a[Ub];return a instanceof Rb?a:null},jc="__closure_events_fn_"+(1E9*Math.random()>>>0),Yb=function(a){v(a,"Listener can not be null.");if(n(a))return a;v(a.handleEvent,"An object listener must have handleEvent method.");a[jc]||(a[jc]=function(b){return a.handleEvent(b)});return a[jc]};var kc=/^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;var lc=function(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},oc=function(a){var b=[];mc(new nc,a,b);return b.join("")},nc=function(){this.Rb=void 0},mc=function(a,b,c){if(null==
	b)c.push("null");else{if("object"==typeof b){if(ea(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],mc(a,a.Rb?a.Rb.call(d,String(f),e):e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),pc(d,c),c.push(":"),mc(a,a.Rb?a.Rb.call(b,d,e):e,c),f=","));c.push("}");return}}switch(typeof b){case "string":pc(b,
	c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}},qc={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},rc=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,pc=function(a,b){b.push('"',a.replace(rc,function(a){var b=qc[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),
	qc[a]=b);return b}),'"')};var sc=function(){};sc.prototype.Jc=null;var tc=function(a){return a.Jc||(a.Jc=a.qc())};var uc,vc=function(){};r(vc,sc);vc.prototype.zb=function(){var a=wc(this);return a?new ActiveXObject(a):new XMLHttpRequest};vc.prototype.qc=function(){var a={};wc(this)&&(a[0]=!0,a[1]=!0);return a};
	var wc=function(a){if(!a.Yc&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.Yc=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.Yc};uc=new vc;var xc=function(){};r(xc,sc);xc.prototype.zb=function(){var a=new XMLHttpRequest;if("withCredentials"in a)return a;if("undefined"!=typeof XDomainRequest)return new yc;throw Error("Unsupported browser");};xc.prototype.qc=function(){return{}};
	var yc=function(){this.ia=new XDomainRequest;this.readyState=0;this.onreadystatechange=null;this.responseText="";this.status=-1;this.statusText=this.responseXML=null;this.ia.onload=q(this.Vd,this);this.ia.onerror=q(this.Wc,this);this.ia.onprogress=q(this.Wd,this);this.ia.ontimeout=q(this.Xd,this)};h=yc.prototype;h.open=function(a,b,c){if(null!=c&&!c)throw Error("Only async requests are supported.");this.ia.open(a,b)};
	h.send=function(a){if(a)if("string"==typeof a)this.ia.send(a);else throw Error("Only string data is supported");else this.ia.send()};h.abort=function(){this.ia.abort()};h.setRequestHeader=function(){};h.Vd=function(){this.status=200;this.responseText=this.ia.responseText;zc(this,4)};h.Wc=function(){this.status=500;this.responseText="";zc(this,4)};h.Xd=function(){this.Wc()};h.Wd=function(){this.status=200;zc(this,1)};var zc=function(a,b){a.readyState=b;if(a.onreadystatechange)a.onreadystatechange()};var B=function(a,b){this.h=[];this.g=b;for(var c=!0,d=a.length-1;0<=d;d--){var e=a[d]|0;c&&e==b||(this.h[d]=e,c=!1)}},Ac={},Bc=function(a){if(-128<=a&&128>a){var b=Ac[a];if(b)return b}b=new B([a|0],0>a?-1:0);-128<=a&&128>a&&(Ac[a]=b);return b},E=function(a){if(isNaN(a)||!isFinite(a))return C;if(0>a)return D(E(-a));for(var b=[],c=1,d=0;a>=c;d++)b[d]=a/c|0,c*=4294967296;return new B(b,0)},Cc=function(a,b){if(0==a.length)throw Error("number format error: empty string");var c=b||10;if(2>c||36<c)throw Error("radix out of range: "+
	c);if("-"==a.charAt(0))return D(Cc(a.substring(1),c));if(0<=a.indexOf("-"))throw Error('number format error: interior "-" character');for(var d=E(Math.pow(c,8)),e=C,f=0;f<a.length;f+=8){var g=Math.min(8,a.length-f),k=parseInt(a.substring(f,f+g),c);8>g?(g=E(Math.pow(c,g)),e=e.multiply(g).add(E(k))):(e=e.multiply(d),e=e.add(E(k)))}return e},C=Bc(0),Dc=Bc(1),Ec=Bc(16777216),Fc=function(a){if(-1==a.g)return-Fc(D(a));for(var b=0,c=1,d=0;d<a.h.length;d++)b+=Gc(a,d)*c,c*=4294967296;return b};
	B.prototype.toString=function(a){a=a||10;if(2>a||36<a)throw Error("radix out of range: "+a);if(F(this))return"0";if(-1==this.g)return"-"+D(this).toString(a);for(var b=E(Math.pow(a,6)),c=this,d="";;){var e=Hc(c,b),c=Ic(c,e.multiply(b)),f=((0<c.h.length?c.h[0]:c.g)>>>0).toString(a),c=e;if(F(c))return f+d;for(;6>f.length;)f="0"+f;d=""+f+d}};
	var G=function(a,b){return 0>b?0:b<a.h.length?a.h[b]:a.g},Gc=function(a,b){var c=G(a,b);return 0<=c?c:4294967296+c},F=function(a){if(0!=a.g)return!1;for(var b=0;b<a.h.length;b++)if(0!=a.h[b])return!1;return!0};B.prototype.Bb=function(a){if(this.g!=a.g)return!1;for(var b=Math.max(this.h.length,a.h.length),c=0;c<b;c++)if(G(this,c)!=G(a,c))return!1;return!0};B.prototype.compare=function(a){a=Ic(this,a);return-1==a.g?-1:F(a)?0:1};
	var D=function(a){for(var b=a.h.length,c=[],d=0;d<b;d++)c[d]=~a.h[d];return(new B(c,~a.g)).add(Dc)};B.prototype.add=function(a){for(var b=Math.max(this.h.length,a.h.length),c=[],d=0,e=0;e<=b;e++){var f=d+(G(this,e)&65535)+(G(a,e)&65535),g=(f>>>16)+(G(this,e)>>>16)+(G(a,e)>>>16),d=g>>>16,f=f&65535,g=g&65535;c[e]=g<<16|f}return new B(c,c[c.length-1]&-2147483648?-1:0)};var Ic=function(a,b){return a.add(D(b))};
	B.prototype.multiply=function(a){if(F(this)||F(a))return C;if(-1==this.g)return-1==a.g?D(this).multiply(D(a)):D(D(this).multiply(a));if(-1==a.g)return D(this.multiply(D(a)));if(0>this.compare(Ec)&&0>a.compare(Ec))return E(Fc(this)*Fc(a));for(var b=this.h.length+a.h.length,c=[],d=0;d<2*b;d++)c[d]=0;for(d=0;d<this.h.length;d++)for(var e=0;e<a.h.length;e++){var f=G(this,d)>>>16,g=G(this,d)&65535,k=G(a,e)>>>16,p=G(a,e)&65535;c[2*d+2*e]+=g*p;Jc(c,2*d+2*e);c[2*d+2*e+1]+=f*p;Jc(c,2*d+2*e+1);c[2*d+2*e+1]+=
	g*k;Jc(c,2*d+2*e+1);c[2*d+2*e+2]+=f*k;Jc(c,2*d+2*e+2)}for(d=0;d<b;d++)c[d]=c[2*d+1]<<16|c[2*d];for(d=b;d<2*b;d++)c[d]=0;return new B(c,0)};
	var Jc=function(a,b){for(;(a[b]&65535)!=a[b];)a[b+1]+=a[b]>>>16,a[b]&=65535},Hc=function(a,b){if(F(b))throw Error("division by zero");if(F(a))return C;if(-1==a.g)return-1==b.g?Hc(D(a),D(b)):D(Hc(D(a),b));if(-1==b.g)return D(Hc(a,D(b)));if(30<a.h.length){if(-1==a.g||-1==b.g)throw Error("slowDivide_ only works with positive integers.");for(var c=Dc,d=b;0>=d.compare(a);)c=c.shiftLeft(1),d=d.shiftLeft(1);for(var e=Kc(c,1),f=Kc(d,1),g,d=Kc(d,2),c=Kc(c,2);!F(d);)g=f.add(d),0>=g.compare(a)&&(e=e.add(c),
	f=g),d=Kc(d,1),c=Kc(c,1);return e}c=C;for(d=a;0<=d.compare(b);){e=Math.max(1,Math.floor(Fc(d)/Fc(b)));f=Math.ceil(Math.log(e)/Math.LN2);f=48>=f?1:Math.pow(2,f-48);g=E(e);for(var k=g.multiply(b);-1==k.g||0<k.compare(d);)e-=f,g=E(e),k=g.multiply(b);F(g)&&(g=Dc);c=c.add(g);d=Ic(d,k)}return c},Lc=function(a,b){for(var c=Math.max(a.h.length,b.h.length),d=[],e=0;e<c;e++)d[e]=G(a,e)|G(b,e);return new B(d,a.g|b.g)};
	B.prototype.shiftLeft=function(a){var b=a>>5;a%=32;for(var c=this.h.length+b+(0<a?1:0),d=[],e=0;e<c;e++)d[e]=0<a?G(this,e-b)<<a|G(this,e-b-1)>>>32-a:G(this,e-b);return new B(d,this.g)};var Kc=function(a,b){for(var c=b>>5,d=b%32,e=a.h.length-c,f=[],g=0;g<e;g++)f[g]=0<d?G(a,g+c)>>>d|G(a,g+c+1)<<32-d:G(a,g+c);return new B(f,a.g)};var Mc=function(a,b){this.ib=a;this.ha=b};Mc.prototype.Bb=function(a){return this.ha==a.ha&&this.ib.Bb(Xa(a.ib))};
	var Pc=function(a){try{var b;if(b=0==a.lastIndexOf("[",0)){var c=a.length-1;b=0<=c&&a.indexOf("]",c)==c}return b?new Nc(a.substring(1,a.length-1)):new Oc(a)}catch(d){return null}},Oc=function(a){var b=C;if(a instanceof B){if(0!=a.g||0>a.compare(C)||0<a.compare(Qc))throw Error("The address does not look like an IPv4.");b=Xa(a)}else{if(!Rc.test(a))throw Error(a+" does not look like an IPv4 address.");var c=a.split(".");if(4!=c.length)throw Error(a+" does not look like an IPv4 address.");for(var d=0;d<
	c.length;d++){var e;e=c[d];var f=Number(e);e=0==f&&/^[\s\xa0]*$/.test(e)?NaN:f;if(isNaN(e)||0>e||255<e||1!=c[d].length&&0==c[d].lastIndexOf("0",0))throw Error("In "+a+", octet "+d+" is not valid");e=E(e);b=Lc(b.shiftLeft(8),e)}}Mc.call(this,b,4)};r(Oc,Mc);var Rc=/^[0-9.]*$/,Qc=Ic(Dc.shiftLeft(32),Dc);Oc.prototype.toString=function(){if(this.ya)return this.ya;for(var a=Gc(this.ib,0),b=[],c=3;0<=c;c--)b[c]=String(a&255),a>>>=8;return this.ya=b.join(".")};
	var Nc=function(a){var b=C;if(a instanceof B){if(0!=a.g||0>a.compare(C)||0<a.compare(Sc))throw Error("The address does not look like a valid IPv6.");b=Xa(a)}else{if(!Tc.test(a))throw Error(a+" is not a valid IPv6 address.");var c=a.split(":");if(-1!=c[c.length-1].indexOf(".")){a=Gc(Xa((new Oc(c[c.length-1])).ib),0);var d=[];d.push((a>>>16&65535).toString(16));d.push((a&65535).toString(16));Ja(c,c.length-1);Pa(c,d);a=c.join(":")}d=a.split("::");if(2<d.length||1==d.length&&8!=c.length)throw Error(a+
	" is not a valid IPv6 address.");if(1<d.length){c=d[0].split(":");d=d[1].split(":");1==c.length&&""==c[0]&&(c=[]);1==d.length&&""==d[0]&&(d=[]);var e=8-(c.length+d.length);if(1>e)c=[];else{for(var f=[],g=0;g<e;g++)f[g]="0";c=Na(c,f,d)}}if(8!=c.length)throw Error(a+" is not a valid IPv6 address");for(d=0;d<c.length;d++){e=Cc(c[d],16);if(0>e.compare(C)||0<e.compare(Uc))throw Error(c[d]+" in "+a+" is not a valid hextet.");b=Lc(b.shiftLeft(16),e)}}Mc.call(this,b,6)};r(Nc,Mc);
	var Tc=/^([a-fA-F0-9]*:){2}[a-fA-F0-9:.]*$/,Uc=Bc(65535),Sc=Ic(Dc.shiftLeft(128),Dc);Nc.prototype.toString=function(){if(this.ya)return this.ya;for(var a=[],b=3;0<=b;b--){var c=Gc(this.ib,b),d=c&65535;a.push((c>>>16).toString(16));a.push(d.toString(16))}for(var c=b=-1,e=d=0,f=0;f<a.length;f++)"0"==a[f]?(e++,-1==c&&(c=f),e>d&&(d=e,b=c)):(c=-1,e=0);0<d&&(b+d==a.length&&a.push(""),a.splice(b,d,""),0==b&&(a=[""].concat(a)));return this.ya=a.join(":")};!fb&&!y||y&&9<=Number(pb)||fb&&z("1.9.1");y&&z("9");var Wc=function(a,b){Qa(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Vc.hasOwnProperty(d)?a.setAttribute(Vc[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})},Vc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};var Xc=function(a,b,c){this.ie=c;this.Kd=a;this.se=b;this.Lb=0;this.Ib=null};Xc.prototype.get=function(){var a;0<this.Lb?(this.Lb--,a=this.Ib,this.Ib=a.next,a.next=null):a=this.Kd();return a};Xc.prototype.put=function(a){this.se(a);this.Lb<this.ie&&(this.Lb++,a.next=this.Ib,this.Ib=a)};var Yc=function(a){l.setTimeout(function(){throw a;},0)},Zc,$c=function(){var a=l.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!x("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,
	a=q(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!x("Trident")&&!x("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.Nc;c.Nc=null;a()}};return function(a){d.next={Nc:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?
	function(a){var b=document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){l.setTimeout(a,0)}};var ad=function(){this.$b=this.Ga=null},cd=new Xc(function(){return new bd},function(a){a.reset()},100);ad.prototype.add=function(a,b){var c=cd.get();c.set(a,b);this.$b?this.$b.next=c:(v(!this.Ga),this.Ga=c);this.$b=c};ad.prototype.remove=function(){var a=null;this.Ga&&(a=this.Ga,this.Ga=this.Ga.next,this.Ga||(this.$b=null),a.next=null);return a};var bd=function(){this.next=this.scope=this.kc=null};bd.prototype.set=function(a,b){this.kc=a;this.scope=b;this.next=null};
	bd.prototype.reset=function(){this.next=this.scope=this.kc=null};var hd=function(a,b){dd||ed();fd||(dd(),fd=!0);gd.add(a,b)},dd,ed=function(){if(l.Promise&&l.Promise.resolve){var a=l.Promise.resolve(void 0);dd=function(){a.then(id)}}else dd=function(){var a=id;!n(l.setImmediate)||l.Window&&l.Window.prototype&&!x("Edge")&&l.Window.prototype.setImmediate==l.setImmediate?(Zc||(Zc=$c()),Zc(a)):l.setImmediate(a)}},fd=!1,gd=new ad,id=function(){for(var a;a=gd.remove();){try{a.kc.call(a.scope)}catch(b){Yc(b)}cd.put(a)}fd=!1};var jd=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0},kd=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};var H=function(a,b){this.A=0;this.fa=void 0;this.Ja=this.aa=this.l=null;this.Gb=this.jc=!1;if(a!=ba)try{var c=this;a.call(b,function(a){ld(c,2,a)},function(a){if(!(a instanceof md))try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(b){}ld(c,3,a)})}catch(d){ld(this,3,d)}},nd=function(){this.next=this.context=this.Pa=this.za=this.child=null;this.ab=!1};nd.prototype.reset=function(){this.context=this.Pa=this.za=this.child=null;this.ab=!1};
	var od=new Xc(function(){return new nd},function(a){a.reset()},100),pd=function(a,b,c){var d=od.get();d.za=a;d.Pa=b;d.context=c;return d},I=function(a){if(a instanceof H)return a;var b=new H(ba);ld(b,2,a);return b},J=function(a){return new H(function(b,c){c(a)})},rd=function(a,b,c){qd(a,b,c,null)||hd(ka(b,a))},sd=function(a){return new H(function(b){var c=a.length,d=[];if(c)for(var e=function(a,e,f){c--;d[a]=e?{Td:!0,value:f}:{Td:!1,reason:f};0==c&&b(d)},f=0,g;f<a.length;f++)g=a[f],rd(g,ka(e,f,!0),
	ka(e,f,!1));else b(d)})};H.prototype.then=function(a,b,c){null!=a&&Ba(a,"opt_onFulfilled should be a function.");null!=b&&Ba(b,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");return td(this,n(a)?a:null,n(b)?b:null,c)};jd(H);var vd=function(a,b){var c=pd(b,b,void 0);c.ab=!0;ud(a,c);return a};H.prototype.N=function(a,b){return td(this,null,a,b)};H.prototype.cancel=function(a){0==this.A&&hd(function(){var b=new md(a);wd(this,b)},this)};
	var wd=function(a,b){if(0==a.A)if(a.l){var c=a.l;if(c.aa){for(var d=0,e=null,f=null,g=c.aa;g&&(g.ab||(d++,g.child==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.A&&1==d?wd(c,b):(f?(d=f,v(c.aa),v(null!=d),d.next==c.Ja&&(c.Ja=d),d.next=d.next.next):xd(c),yd(c,e,3,b)))}a.l=null}else ld(a,3,b)},ud=function(a,b){a.aa||2!=a.A&&3!=a.A||zd(a);v(null!=b.za);a.Ja?a.Ja.next=b:a.aa=b;a.Ja=b},td=function(a,b,c,d){var e=pd(null,null,null);e.child=new H(function(a,g){e.za=b?function(c){try{var e=b.call(d,c);a(e)}catch(Y){g(Y)}}:
	a;e.Pa=c?function(b){try{var e=c.call(d,b);void 0===e&&b instanceof md?g(b):a(e)}catch(Y){g(Y)}}:g});e.child.l=a;ud(a,e);return e.child};H.prototype.Be=function(a){v(1==this.A);this.A=0;ld(this,2,a)};H.prototype.Ce=function(a){v(1==this.A);this.A=0;ld(this,3,a)};
	var ld=function(a,b,c){0==a.A&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.A=1,qd(c,a.Be,a.Ce,a)||(a.fa=c,a.A=b,a.l=null,zd(a),3!=b||c instanceof md||Ad(a,c)))},qd=function(a,b,c,d){if(a instanceof H)return null!=b&&Ba(b,"opt_onFulfilled should be a function."),null!=c&&Ba(c,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),ud(a,pd(b||ba,c||null,d)),!0;if(kd(a))return a.then(b,c,d),!0;if(ha(a))try{var e=a.then;if(n(e))return Bd(a,
	e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1},Bd=function(a,b,c,d,e){var f=!1,g=function(a){f||(f=!0,c.call(e,a))},k=function(a){f||(f=!0,d.call(e,a))};try{b.call(a,g,k)}catch(p){k(p)}},zd=function(a){a.jc||(a.jc=!0,hd(a.Od,a))},xd=function(a){var b=null;a.aa&&(b=a.aa,a.aa=b.next,b.next=null);a.aa||(a.Ja=null);null!=b&&v(null!=b.za);return b};H.prototype.Od=function(){for(var a;a=xd(this);)yd(this,a,this.A,this.fa);this.jc=!1};
	var yd=function(a,b,c,d){if(3==c&&b.Pa&&!b.ab)for(;a&&a.Gb;a=a.l)a.Gb=!1;if(b.child)b.child.l=null,Cd(b,c,d);else try{b.ab?b.za.call(b.context):Cd(b,c,d)}catch(e){Dd.call(null,e)}od.put(b)},Cd=function(a,b,c){2==b?a.za.call(a.context,c):a.Pa&&a.Pa.call(a.context,c)},Ad=function(a,b){a.Gb=!0;hd(function(){a.Gb&&Dd.call(null,b)})},Dd=Yc,md=function(a){t.call(this,a)};r(md,t);md.prototype.name="cancel";/*
	 Portions of this code are from MochiKit, received by
	 The Closure Authors under the MIT license. All other code is Copyright
	 2005-2009 The Closure Authors. All Rights Reserved.
	*/
	var Ed=function(a,b){this.Sb=[];this.gd=a;this.Pc=b||null;this.fb=this.Ma=!1;this.fa=void 0;this.Dc=this.Ic=this.dc=!1;this.Yb=0;this.l=null;this.ec=0};Ed.prototype.cancel=function(a){if(this.Ma)this.fa instanceof Ed&&this.fa.cancel();else{if(this.l){var b=this.l;delete this.l;a?b.cancel(a):(b.ec--,0>=b.ec&&b.cancel())}this.gd?this.gd.call(this.Pc,this):this.Dc=!0;this.Ma||Fd(this,new Gd)}};Ed.prototype.Oc=function(a,b){this.dc=!1;Hd(this,a,b)};
	var Hd=function(a,b,c){a.Ma=!0;a.fa=c;a.fb=!b;Id(a)},Kd=function(a){if(a.Ma){if(!a.Dc)throw new Jd;a.Dc=!1}};Ed.prototype.callback=function(a){Kd(this);Ld(a);Hd(this,!0,a)};var Fd=function(a,b){Kd(a);Ld(b);Hd(a,!1,b)},Ld=function(a){v(!(a instanceof Ed),"An execution sequence may not be initiated with a blocking Deferred.")},Nd=function(a,b){Md(a,null,b,void 0)},Md=function(a,b,c,d){v(!a.Ic,"Blocking Deferreds can not be re-used");a.Sb.push([b,c,d]);a.Ma&&Id(a)};
	Ed.prototype.then=function(a,b,c){var d,e,f=new H(function(a,b){d=a;e=b});Md(this,d,function(a){a instanceof Gd?f.cancel():e(a)});return f.then(a,b,c)};jd(Ed);
	var Od=function(a){return Fa(a.Sb,function(a){return n(a[1])})},Id=function(a){if(a.Yb&&a.Ma&&Od(a)){var b=a.Yb,c=Pd[b];c&&(l.clearTimeout(c.gb),delete Pd[b]);a.Yb=0}a.l&&(a.l.ec--,delete a.l);for(var b=a.fa,d=c=!1;a.Sb.length&&!a.dc;){var e=a.Sb.shift(),f=e[0],g=e[1],e=e[2];if(f=a.fb?g:f)try{var k=f.call(e||a.Pc,b);void 0!==k&&(a.fb=a.fb&&(k==b||k instanceof Error),a.fa=b=k);if(kd(b)||"function"===typeof l.Promise&&b instanceof l.Promise)d=!0,a.dc=!0}catch(p){b=p,a.fb=!0,Od(a)||(c=!0)}}a.fa=b;d&&
	(k=q(a.Oc,a,!0),d=q(a.Oc,a,!1),b instanceof Ed?(Md(b,k,d),b.Ic=!0):b.then(k,d));c&&(b=new Qd(b),Pd[b.gb]=b,a.Yb=b.gb)},Jd=function(){t.call(this)};r(Jd,t);Jd.prototype.message="Deferred has already fired";Jd.prototype.name="AlreadyCalledError";var Gd=function(){t.call(this)};r(Gd,t);Gd.prototype.message="Deferred was canceled";Gd.prototype.name="CanceledError";var Qd=function(a){this.gb=l.setTimeout(q(this.Ae,this),0);this.G=a};
	Qd.prototype.Ae=function(){v(Pd[this.gb],"Cannot throw an error that is not scheduled.");delete Pd[this.gb];throw this.G;};var Pd={};var Vd=function(a){var b={},c=b.document||document,d=document.createElement("SCRIPT"),e={od:d,vb:void 0},f=new Ed(Rd,e),g=null,k=null!=b.timeout?b.timeout:5E3;0<k&&(g=window.setTimeout(function(){Sd(d,!0);Fd(f,new Td(1,"Timeout reached for loading script "+a))},k),e.vb=g);d.onload=d.onreadystatechange=function(){d.readyState&&"loaded"!=d.readyState&&"complete"!=d.readyState||(Sd(d,b.Ie||!1,g),f.callback(null))};d.onerror=function(){Sd(d,!0,g);Fd(f,new Td(0,"Error while loading script "+a))};e=b.attributes||
	{};Za(e,{type:"text/javascript",charset:"UTF-8",src:a});Wc(d,e);Ud(c).appendChild(d);return f},Ud=function(a){var b=a.getElementsByTagName("HEAD");return b&&0!=b.length?b[0]:a.documentElement},Rd=function(){if(this&&this.od){var a=this.od;a&&"SCRIPT"==a.tagName&&Sd(a,!0,this.vb)}},Sd=function(a,b,c){null!=c&&l.clearTimeout(c);a.onload=ba;a.onerror=ba;a.onreadystatechange=ba;b&&window.setTimeout(function(){a&&a.parentNode&&a.parentNode.removeChild(a)},0)},Td=function(a,b){var c="Jsloader error (code #"+
	a+")";b&&(c+=": "+b);t.call(this,c);this.code=a};r(Td,t);var Wd=function(){Kb.call(this);this.T=new Rb(this);this.Gd=this;this.tc=null};r(Wd,Kb);Wd.prototype[Nb]=!0;h=Wd.prototype;h.addEventListener=function(a,b,c,d){Xb(this,a,b,c,d)};h.removeEventListener=function(a,b,c,d){fc(this,a,b,c,d)};
	h.dispatchEvent=function(a){Xd(this);var b,c=this.tc;if(c){b=[];for(var d=1;c;c=c.tc)b.push(c),v(1E3>++d,"infinite loop")}c=this.Gd;d=a.type||a;if(m(a))a=new Lb(a,c);else if(a instanceof Lb)a.target=a.target||c;else{var e=a;a=new Lb(d,c);Za(a,e)}var e=!0,f;if(b)for(var g=b.length-1;!a.Sa&&0<=g;g--)f=a.currentTarget=b[g],e=Yd(f,d,!0,a)&&e;a.Sa||(f=a.currentTarget=c,e=Yd(f,d,!0,a)&&e,a.Sa||(e=Yd(f,d,!1,a)&&e));if(b)for(g=0;!a.Sa&&g<b.length;g++)f=a.currentTarget=b[g],e=Yd(f,d,!1,a)&&e;return e};
	h.Ka=function(){Wd.Fc.Ka.call(this);if(this.T){var a=this.T,b=0,c;for(c in a.s){for(var d=a.s[c],e=0;e<d.length;e++)++b,Qb(d[e]);delete a.s[c];a.wb--}}this.tc=null};h.listen=function(a,b,c,d){Xd(this);return this.T.add(String(a),b,!1,c,d)};
	var ec=function(a,b,c,d,e){a.T.add(String(b),c,!0,d,e)},Yd=function(a,b,c,d){b=a.T.s[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Va&&g.yb==c){var k=g.listener,p=g.Hb||g.src;g.xb&&Tb(a.T,g);e=!1!==k.call(p,d)&&e}}return e&&0!=d.nd};Wd.prototype.lc=function(a,b,c,d){return this.T.lc(String(a),b,c,d)};var Xd=function(a){v(a.T,"Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")};var Zd="StopIteration"in l?l.StopIteration:{message:"StopIteration",stack:""},$d=function(){};$d.prototype.next=function(){throw Zd;};$d.prototype.Fd=function(){return this};var ae=function(a,b){this.U={};this.m=[];this.ha=this.i=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.addAll(a)};h=ae.prototype;h.Uc=function(){return this.i};h.O=function(){be(this);for(var a=[],b=0;b<this.m.length;b++)a.push(this.U[this.m[b]]);return a};h.ba=function(){be(this);return this.m.concat()};h.cb=function(a){return ce(this.U,a)};
	h.Bb=function(a,b){if(this===a)return!0;if(this.i!=a.Uc())return!1;var c=b||de;be(this);for(var d,e=0;d=this.m[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};var de=function(a,b){return a===b};ae.prototype.remove=function(a){return ce(this.U,a)?(delete this.U[a],this.i--,this.ha++,this.m.length>2*this.i&&be(this),!0):!1};
	var be=function(a){if(a.i!=a.m.length){for(var b=0,c=0;b<a.m.length;){var d=a.m[b];ce(a.U,d)&&(a.m[c++]=d);b++}a.m.length=c}if(a.i!=a.m.length){for(var e={},c=b=0;b<a.m.length;)d=a.m[b],ce(e,d)||(a.m[c++]=d,e[d]=1),b++;a.m.length=c}};h=ae.prototype;h.get=function(a,b){return ce(this.U,a)?this.U[a]:b};h.set=function(a,b){ce(this.U,a)||(this.i++,this.m.push(a),this.ha++);this.U[a]=b};
	h.addAll=function(a){var b;a instanceof ae?(b=a.ba(),a=a.O()):(b=Sa(a),a=Ra(a));for(var c=0;c<b.length;c++)this.set(b[c],a[c])};h.forEach=function(a,b){for(var c=this.ba(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};h.clone=function(){return new ae(this)};h.Fd=function(a){be(this);var b=0,c=this.ha,d=this,e=new $d;e.next=function(){if(c!=d.ha)throw Error("The map has changed since the iterator was created");if(b>=d.m.length)throw Zd;var e=d.m[b++];return a?e:d.U[e]};return e};
	var ce=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var ee=function(a){if(a.O&&"function"==typeof a.O)return a.O();if(m(a))return a.split("");if(fa(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return Ra(a)},fe=function(a){if(a.ba&&"function"==typeof a.ba)return a.ba();if(!a.O||"function"!=typeof a.O){if(fa(a)||m(a)){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}return Sa(a)}},ge=function(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(fa(a)||m(a))w(a,b,void 0);else for(var c=fe(a),d=ee(a),e=
	d.length,f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)};var he=function(a,b,c,d,e){this.reset(a,b,c,d,e)};he.prototype.Rc=null;var ie=0;he.prototype.reset=function(a,b,c,d,e){"number"==typeof e||ie++;d||la();this.lb=a;this.ke=b;delete this.Rc};he.prototype.rd=function(a){this.lb=a};var je=function(a){this.le=a;this.Xc=this.fc=this.lb=this.l=null},ke=function(a,b){this.name=a;this.value=b};ke.prototype.toString=function(){return this.name};var le=new ke("SEVERE",1E3),me=new ke("CONFIG",700),ne=new ke("FINE",500);je.prototype.getParent=function(){return this.l};je.prototype.rd=function(a){this.lb=a};var oe=function(a){if(a.lb)return a.lb;if(a.l)return oe(a.l);ya("Root logger has no level set.");return null};
	je.prototype.log=function(a,b,c){if(a.value>=oe(this).value)for(n(b)&&(b=b()),a=new he(a,String(b),this.le),c&&(a.Rc=c),c="log:"+a.ke,l.console&&(l.console.timeStamp?l.console.timeStamp(c):l.console.markTimeline&&l.console.markTimeline(c)),l.msWriteProfilerMark&&l.msWriteProfilerMark(c),c=this;c;){b=c;var d=a;if(b.Xc)for(var e=0,f;f=b.Xc[e];e++)f(d);c=c.getParent()}};
	var pe={},qe=null,re=function(a){qe||(qe=new je(""),pe[""]=qe,qe.rd(me));var b;if(!(b=pe[a])){b=new je(a);var c=a.lastIndexOf("."),d=a.substr(c+1),c=re(a.substr(0,c));c.fc||(c.fc={});c.fc[d]=b;b.l=c;pe[a]=b}return b};var K=function(a,b){a&&a.log(ne,b,void 0)};var se=function(a,b,c){if(n(a))c&&(a=q(a,c));else if(a&&"function"==typeof a.handleEvent)a=q(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:l.setTimeout(a,b||0)},te=function(a){var b=null;return(new H(function(c,d){b=se(function(){c(void 0)},a);-1==b&&d(Error("Failed to schedule timer."))})).N(function(a){l.clearTimeout(b);throw a;})};var ue=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/,ve=function(a,b){if(a)for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].indexOf("="),f,g=null;0<=e?(f=c[d].substring(0,e),g=c[d].substring(e+1)):f=c[d];b(f,g?decodeURIComponent(g.replace(/\+/g," ")):"")}};var L=function(a){Wd.call(this);this.headers=new ae;this.bc=a||null;this.ja=!1;this.ac=this.a=null;this.kb=this.cd=this.Kb="";this.xa=this.pc=this.Jb=this.ic=!1;this.Ya=0;this.Xb=null;this.md="";this.Zb=this.re=this.xd=!1};r(L,Wd);var we=L.prototype,xe=re("goog.net.XhrIo");we.L=xe;var ye=/^https?$/i,ze=["POST","PUT"];
	L.prototype.send=function(a,b,c,d){if(this.a)throw Error("[goog.net.XhrIo] Object is active with another request="+this.Kb+"; newUri="+a);b=b?b.toUpperCase():"GET";this.Kb=a;this.kb="";this.cd=b;this.ic=!1;this.ja=!0;this.a=this.bc?this.bc.zb():uc.zb();this.ac=this.bc?tc(this.bc):tc(uc);this.a.onreadystatechange=q(this.jd,this);this.re&&"onprogress"in this.a&&(this.a.onprogress=q(function(a){this.hd(a,!0)},this),this.a.upload&&(this.a.upload.onprogress=q(this.hd,this)));try{K(this.L,Ae(this,"Opening Xhr")),
	this.pc=!0,this.a.open(b,String(a),!0),this.pc=!1}catch(f){K(this.L,Ae(this,"Error opening Xhr: "+f.message));this.G(5,f);return}a=c||"";var e=this.headers.clone();d&&ge(d,function(a,b){e.set(b,a)});d=Ha(e.ba());c=l.FormData&&a instanceof l.FormData;!Ia(ze,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(a,b){this.a.setRequestHeader(b,a)},this);this.md&&(this.a.responseType=this.md);"withCredentials"in this.a&&this.a.withCredentials!==this.xd&&(this.a.withCredentials=
	this.xd);try{Be(this),0<this.Ya&&(this.Zb=Ce(this.a),K(this.L,Ae(this,"Will abort after "+this.Ya+"ms if incomplete, xhr2 "+this.Zb)),this.Zb?(this.a.timeout=this.Ya,this.a.ontimeout=q(this.vb,this)):this.Xb=se(this.vb,this.Ya,this)),K(this.L,Ae(this,"Sending request")),this.Jb=!0,this.a.send(a),this.Jb=!1}catch(f){K(this.L,Ae(this,"Send error: "+f.message)),this.G(5,f)}};var Ce=function(a){return y&&z(9)&&ga(a.timeout)&&void 0!==a.ontimeout},Ga=function(a){return"content-type"==a.toLowerCase()};
	L.prototype.vb=function(){"undefined"!=typeof aa&&this.a&&(this.kb="Timed out after "+this.Ya+"ms, aborting",K(this.L,Ae(this,this.kb)),this.dispatchEvent("timeout"),this.abort(8))};L.prototype.G=function(a,b){this.ja=!1;this.a&&(this.xa=!0,this.a.abort(),this.xa=!1);this.kb=b;De(this);Ee(this)};var De=function(a){a.ic||(a.ic=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))};
	L.prototype.abort=function(){this.a&&this.ja&&(K(this.L,Ae(this,"Aborting")),this.ja=!1,this.xa=!0,this.a.abort(),this.xa=!1,this.dispatchEvent("complete"),this.dispatchEvent("abort"),Ee(this))};L.prototype.Ka=function(){this.a&&(this.ja&&(this.ja=!1,this.xa=!0,this.a.abort(),this.xa=!1),Ee(this,!0));L.Fc.Ka.call(this)};L.prototype.jd=function(){this.isDisposed()||(this.pc||this.Jb||this.xa?Fe(this):this.pe())};L.prototype.pe=function(){Fe(this)};
	var Fe=function(a){if(a.ja&&"undefined"!=typeof aa)if(a.ac[1]&&4==Ge(a)&&2==He(a))K(a.L,Ae(a,"Local request error detected and ignored"));else if(a.Jb&&4==Ge(a))se(a.jd,0,a);else if(a.dispatchEvent("readystatechange"),4==Ge(a)){K(a.L,Ae(a,"Request complete"));a.ja=!1;try{var b=He(a),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.Kb).match(ue)[1]||null;if(!f&&l.self&&l.self.location)var g=l.self.location.protocol,
	f=g.substr(0,g.length-1);e=!ye.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");else{var k;try{k=2<Ge(a)?a.a.statusText:""}catch(p){K(a.L,"Can not get status: "+p.message),k=""}a.kb=k+" ["+He(a)+"]";De(a)}}finally{Ee(a)}}};L.prototype.hd=function(a,b){v("progress"===a.type,"goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");this.dispatchEvent(Ie(a,"progress"));this.dispatchEvent(Ie(a,b?"downloadprogress":"uploadprogress"))};
	var Ie=function(a,b){return{type:b,lengthComputable:a.lengthComputable,loaded:a.loaded,total:a.total}},Ee=function(a,b){if(a.a){Be(a);var c=a.a,d=a.ac[0]?ba:null;a.a=null;a.ac=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){(c=a.L)&&c.log(le,"Problem encountered resetting onreadystatechange: "+e.message,void 0)}}},Be=function(a){a.a&&a.Zb&&(a.a.ontimeout=null);ga(a.Xb)&&(l.clearTimeout(a.Xb),a.Xb=null)},Ge=function(a){return a.a?a.a.readyState:0},He=function(a){try{return 2<Ge(a)?
	a.a.status:-1}catch(b){return-1}},Je=function(a){try{return a.a?a.a.responseText:""}catch(b){return K(a.L,"Can not get responseText: "+b.message),""}},Ae=function(a,b){return b+" ["+a.cd+" "+a.Kb+" "+He(a)+"]"};var Ke=function(a,b){this.la=this.Fa=this.qa="";this.Ra=null;this.wa=this.na="";this.I=this.he=!1;var c;if(a instanceof Ke)this.I=void 0!==b?b:a.I,Le(this,a.qa),c=a.Fa,M(this),this.Fa=c,Me(this,a.la),Ne(this,a.Ra),Oe(this,a.na),Pe(this,a.W.clone()),c=a.wa,M(this),this.wa=c;else if(a&&(c=String(a).match(ue))){this.I=!!b;Le(this,c[1]||"",!0);var d=c[2]||"";M(this);this.Fa=Qe(d);Me(this,c[3]||"",!0);Ne(this,c[4]);Oe(this,c[5]||"",!0);Pe(this,c[6]||"",!0);c=c[7]||"";M(this);this.wa=Qe(c)}else this.I=
	!!b,this.W=new N(null,0,this.I)};Ke.prototype.toString=function(){var a=[],b=this.qa;b&&a.push(Re(b,Se,!0),":");var c=this.la;if(c||"file"==b)a.push("//"),(b=this.Fa)&&a.push(Re(b,Se,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.Ra,null!=c&&a.push(":",String(c));if(c=this.na)this.la&&"/"!=c.charAt(0)&&a.push("/"),a.push(Re(c,"/"==c.charAt(0)?Te:Ue,!0));(c=this.W.toString())&&a.push("?",c);(c=this.wa)&&a.push("#",Re(c,Ve));return a.join("")};
	Ke.prototype.resolve=function(a){var b=this.clone(),c=!!a.qa;c?Le(b,a.qa):c=!!a.Fa;if(c){var d=a.Fa;M(b);b.Fa=d}else c=!!a.la;c?Me(b,a.la):c=null!=a.Ra;d=a.na;if(c)Ne(b,a.Ra);else if(c=!!a.na){if("/"!=d.charAt(0))if(this.la&&!this.na)d="/"+d;else{var e=b.na.lastIndexOf("/");-1!=e&&(d=b.na.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(u(e,"./")||u(e,"/.")){for(var d=0==e.lastIndexOf("/",0),e=e.split("/"),f=[],g=0;g<e.length;){var k=e[g++];"."==k?d&&g==e.length&&f.push(""):".."==k?((1<f.length||
	1==f.length&&""!=f[0])&&f.pop(),d&&g==e.length&&f.push("")):(f.push(k),d=!0)}d=f.join("/")}else d=e}c?Oe(b,d):c=""!==a.W.toString();c?Pe(b,Qe(a.W.toString())):c=!!a.wa;c&&(a=a.wa,M(b),b.wa=a);return b};Ke.prototype.clone=function(){return new Ke(this)};
	var Le=function(a,b,c){M(a);a.qa=c?Qe(b,!0):b;a.qa&&(a.qa=a.qa.replace(/:$/,""))},Me=function(a,b,c){M(a);a.la=c?Qe(b,!0):b},Ne=function(a,b){M(a);if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.Ra=b}else a.Ra=null},Oe=function(a,b,c){M(a);a.na=c?Qe(b,!0):b},Pe=function(a,b,c){M(a);b instanceof N?(a.W=b,a.W.Cc(a.I)):(c||(b=Re(b,We)),a.W=new N(b,0,a.I))},O=function(a,b,c){M(a);a.W.set(b,c)},M=function(a){if(a.he)throw Error("Tried to modify a read-only Uri");};
	Ke.prototype.Cc=function(a){this.I=a;this.W&&this.W.Cc(a);return this};
	var Xe=function(a,b){var c=new Ke(null,void 0);Le(c,"https");a&&Me(c,a);b&&Oe(c,b);return c},Qe=function(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""},Re=function(a,b,c){return m(a)?(a=encodeURI(a).replace(b,Ye),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null},Ye=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)},Se=/[#\/\?@]/g,Ue=/[\#\?:]/g,Te=/[\#\?]/g,We=/[\#\?@]/g,Ve=/#/g,N=function(a,b,c){this.i=this.j=null;this.F=a||null;
	this.I=!!c},Ze=function(a){a.j||(a.j=new ae,a.i=0,a.F&&ve(a.F,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)}))},af=function(a){var b=fe(a);if("undefined"==typeof b)throw Error("Keys are undefined");var c=new N(null,0,void 0);a=ee(a);for(var d=0;d<b.length;d++){var e=b[d],f=a[d];ea(f)?$e(c,e,f):c.add(e,f)}return c};h=N.prototype;h.Uc=function(){Ze(this);return this.i};
	h.add=function(a,b){Ze(this);this.F=null;a=this.H(a);var c=this.j.get(a);c||this.j.set(a,c=[]);c.push(b);this.i=za(this.i)+1;return this};h.remove=function(a){Ze(this);a=this.H(a);return this.j.cb(a)?(this.F=null,this.i=za(this.i)-this.j.get(a).length,this.j.remove(a)):!1};h.cb=function(a){Ze(this);a=this.H(a);return this.j.cb(a)};h.ba=function(){Ze(this);for(var a=this.j.O(),b=this.j.ba(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
	h.O=function(a){Ze(this);var b=[];if(m(a))this.cb(a)&&(b=Ma(b,this.j.get(this.H(a))));else{a=this.j.O();for(var c=0;c<a.length;c++)b=Ma(b,a[c])}return b};h.set=function(a,b){Ze(this);this.F=null;a=this.H(a);this.cb(a)&&(this.i=za(this.i)-this.j.get(a).length);this.j.set(a,[b]);this.i=za(this.i)+1;return this};h.get=function(a,b){var c=a?this.O(a):[];return 0<c.length?String(c[0]):b};var $e=function(a,b,c){a.remove(b);0<c.length&&(a.F=null,a.j.set(a.H(b),Oa(c)),a.i=za(a.i)+c.length)};
	N.prototype.toString=function(){if(this.F)return this.F;if(!this.j)return"";for(var a=[],b=this.j.ba(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.O(d),f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+encodeURIComponent(String(d[f])));a.push(g)}return this.F=a.join("&")};N.prototype.clone=function(){var a=new N;a.F=this.F;this.j&&(a.j=this.j.clone(),a.i=this.i);return a};N.prototype.H=function(a){a=String(a);this.I&&(a=a.toLowerCase());return a};
	N.prototype.Cc=function(a){a&&!this.I&&(Ze(this),this.F=null,this.j.forEach(function(a,c){var d=c.toLowerCase();c!=d&&(this.remove(c),$e(this,d,a))},this));this.I=a};var bf=function(){return l.window&&l.window.location.href||""},cf=function(a,b){var c=[],d;for(d in a)d in b?typeof a[d]!=typeof b[d]?c.push(d):ea(a[d])?Wa(a[d],b[d])||c.push(d):"object"==typeof a[d]&&null!=a[d]&&null!=b[d]?0<cf(a[d],b[d]).length&&c.push(d):a[d]!==b[d]&&c.push(d):c.push(d);for(d in b)d in a||c.push(d);return c},ff=function(){var a;a=df();a="Chrome"!=ef(a)?null:(a=a.match(/\sChrome\/(\d+)/i))&&2==a.length?parseInt(a[1],10):null;return a&&30>a?!1:!y||!pb||9<pb},gf=function(a){(a||l.window).close()},
	hf=function(a,b,c){var d=Math.floor(1E9*Math.random()).toString();b=b||500;c=c||600;var e=(window.screen.availHeight-c)/2,f=(window.screen.availWidth-b)/2;b={width:b,height:c,top:0<e?e:0,left:0<f?f:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1};d&&(b.target=d);"Firefox"==ef(df())&&(a=a||"http://localhost",b.scrollbars=!0);var g;c=a||"about:blank";(d=b)||(d={});a=window;b=c instanceof A?c:Cb("undefined"!=typeof c.href?c.href:String(c));c=d.target||c.target;e=[];for(g in d)switch(g){case "width":case "height":case "top":case "left":e.push(g+
	"="+d[g]);break;case "target":case "noreferrer":break;default:e.push(g+"="+(d[g]?1:0))}g=e.join(",");(x("iPhone")&&!x("iPod")&&!x("iPad")||x("iPad")||x("iPod"))&&a.navigator&&a.navigator.standalone&&c&&"_self"!=c?(g=a.document.createElement("A"),b=b instanceof A?b:Cb(b),g.href=zb(b),g.setAttribute("target",c),d.noreferrer&&g.setAttribute("rel","noreferrer"),d=document.createEvent("MouseEvent"),d.initMouseEvent("click",!0,!0,a,1),g.dispatchEvent(d),g={}):d.noreferrer?(g=a.open("",c,g),d=zb(b),g&&(eb&&
	u(d,";")&&(d="'"+d.replace(/'/g,"%27")+"'"),g.opener=null,a=new wb,a.Wb="b/12014412, meta tag with sanitized URL",ua.test(d)&&(-1!=d.indexOf("&")&&(d=d.replace(oa,"&amp;")),-1!=d.indexOf("<")&&(d=d.replace(pa,"&lt;")),-1!=d.indexOf(">")&&(d=d.replace(qa,"&gt;")),-1!=d.indexOf('"')&&(d=d.replace(ra,"&quot;")),-1!=d.indexOf("'")&&(d=d.replace(sa,"&#39;")),-1!=d.indexOf("\x00")&&(d=d.replace(ta,"&#0;"))),d='<META HTTP-EQUIV="refresh" content="0; url='+d+'">',Aa(xb(a),"must provide justification"),v(!/^[\s\xa0]*$/.test(xb(a)),
	"must provide non-empty justification"),g.document.write(Fb((new Eb).ge(d))),g.document.close())):g=a.open(zb(b),c,g);if(g)try{g.focus()}catch(k){}return g},jf=function(a){return new H(function(b){var c=function(){te(2E3).then(function(){if(!a||a.closed)b();else return c()})};return c()})},kf=function(){var a=null;return(new H(function(b){"complete"==l.document.readyState?b():(a=function(){b()},dc(window,"load",a))})).N(function(b){fc(window,"load",a);throw b;})},lf=function(a){switch(a||l.navigator&&
	l.navigator.product||""){case "ReactNative":return"ReactNative";default:return"undefined"!==typeof l.process?"Node":"Browser"}},mf=function(){var a=lf();return"ReactNative"===a||"Node"===a},ef=function(a){var b=a.toLowerCase();if(u(b,"opera/")||u(b,"opr/")||u(b,"opios/"))return"Opera";if(u(b,"msie")||u(b,"trident/"))return"IE";if(u(b,"edge/"))return"Edge";if(u(b,"firefox/"))return"Firefox";if(u(b,"silk/"))return"Silk";if(u(b,"safari/")&&!u(b,"chrome/"))return"Safari";if(!u(b,"chrome/")&&!u(b,"crios/")||
	u(b,"edge/")){if((a=a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/))&&2==a.length)return a[1]}else return"Chrome";return"Other"},nf=function(a){var b=lf(void 0);return("Browser"===b?ef(df()):b)+"/JsCore/"+a},df=function(){return l.navigator&&l.navigator.userAgent||""},of=function(a){a=a.split(".");for(var b=l,c=0;c<a.length&&"object"==typeof b&&null!=b;c++)b=b[a[c]];c!=a.length&&(b=void 0);return b},pf=function(){return!(!l.location||!l.location.protocol||"http:"!=l.location.protocol&&"https:"!=l.location.protocol||
	mf())},qf=function(){var a=df(),b=a.match(/(ipad)|(iphone)|(ipod)/i),c=a.match(/\sOS\s(\d+)_/i);if(b&&b.length&&c&&2==c.length){if(8>parseInt(c[1],10))return!1}else if("Firefox"==ef(a))return!1;return!0},rf=function(a){return"undefined"===typeof a?null:oc(a)},sf=function(a){if(null!==a){var b;try{b=lc(a)}catch(c){try{b=JSON.parse(a)}catch(d){throw c;}}return b}};var tf;try{var uf={};Object.defineProperty(uf,"abcd",{configurable:!0,enumerable:!0,value:1});Object.defineProperty(uf,"abcd",{configurable:!0,enumerable:!0,value:2});tf=2==uf.abcd}catch(a){tf=!1}
	var P=function(a,b,c){tf?Object.defineProperty(a,b,{configurable:!0,enumerable:!0,value:c}):a[b]=c},vf=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&P(a,c,b[c])},wf=function(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b},xf=function(a,b){if(!b||!b.length)return!0;if(!a)return!1;for(var c=0;c<b.length;c++){var d=a[b[c]];if(void 0===d||null===d||""===d)return!1}return!0};var yf={yd:{qb:985,pb:735,providerId:"facebook.com"},zd:{qb:500,pb:620,providerId:"github.com"},Ad:{qb:515,pb:680,providerId:"google.com"},Ed:{qb:485,pb:705,providerId:"twitter.com"}},zf=function(a){for(var b in yf)if(yf[b].providerId==a)return yf[b];return null};var Q=function(a,b){this.code="auth/"+a;this.message=b||Af[a]||""};r(Q,Error);Q.prototype.C=function(){return{name:this.code,code:this.code,message:this.message}};
	var Af={"argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
	"email-already-in-use":"The email address is already in use by another account.","expired-action-code":"The action code has expired. ","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal error has occurred.","invalid-user-token":"The user's credential is no longer valid. The user must sign in again.","invalid-auth-event":"An internal error has occurred.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.",
	"invalid-email":"The email address is badly formatted.","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
	"invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","missing-iframe-start":"An internal error has occurred.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","app-deleted":"This instance of FirebaseApp has been deleted.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
	"network-request-failed":"A network error (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal error has occurred.","no-such-provider":"User was not linked to an account with the given provider.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http or https.',
	"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.",
	"user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported."};var Bf=function(a,b,c,d,e){this.sa=a;this.va=b||null;this.$a=c||null;this.Tb=d||null;this.G=e||null;if(this.$a||this.G){if(this.$a&&this.G)throw new Q("invalid-auth-event");if(this.$a&&!this.Tb)throw new Q("invalid-auth-event");}else throw new Q("invalid-auth-event");};Bf.prototype.getError=function(){return this.G};Bf.prototype.C=function(){return{type:this.sa,eventId:this.va,urlResponse:this.$a,sessionId:this.Tb,error:this.G&&this.G.C()}};var Cf=function(a){this.je=a.sub;la();this.Ab=a.email||null};var Df=function(a,b,c,d){var e={};ha(c)?e=c:b&&m(c)&&m(d)?e={oauthToken:c,oauthTokenSecret:d}:!b&&m(c)&&(e={accessToken:c});if(b||!e.idToken&&!e.accessToken)if(b&&e.oauthToken&&e.oauthTokenSecret)P(this,"accessToken",e.oauthToken),P(this,"secret",e.oauthTokenSecret);else{if(b)throw new Q("argument-error","credential failed: expected 2 arguments (the OAuth access token and secret).");throw new Q("argument-error","credential failed: expected 1 argument (the OAuth access token).");}else e.idToken&&P(this,
	"idToken",e.idToken),e.accessToken&&P(this,"accessToken",e.accessToken);P(this,"provider",a)};Df.prototype.Eb=function(a){return Ef(a,Ff(this))};Df.prototype.dd=function(a,b){var c=Ff(this);c.idToken=b;return R(a,Gf,c)};var Ff=function(a){var b={};a.idToken&&(b.id_token=a.idToken);a.accessToken&&(b.access_token=a.accessToken);a.secret&&(b.oauth_token_secret=a.secret);b.providerId=a.provider;return{postBody:af(b).toString(),requestUri:pf()?bf():"http://localhost"}};
	Df.prototype.C=function(){var a={provider:this.provider};this.idToken&&(a.oauthIdToken=this.idToken);this.accessToken&&(a.oauthAccessToken=this.accessToken);this.secret&&(a.oauthTokenSecret=this.secret);return a};
	var Hf=function(a,b){var c=!!b,d=function(){vf(this,{providerId:a,isOAuthProvider:!0});this.Bc=[];"google.com"==a&&this.addScope("profile")};c||(d.prototype.addScope=function(a){Ia(this.Bc,a)||this.Bc.push(a)});d.prototype.Fb=function(){return Oa(this.Bc)};d.credential=function(b,d){return new Df(a,c,b,d)};vf(d,{PROVIDER_ID:a});return d},If=Hf("facebook.com");If.prototype.addScope=If.prototype.addScope||void 0;var Jf=Hf("github.com");Jf.prototype.addScope=Jf.prototype.addScope||void 0;var Kf=Hf("google.com");
	Kf.prototype.addScope=Kf.prototype.addScope||void 0;Kf.credential=function(a,b){if(!a&&!b)throw new Q("argument-error","credential failed: must provide the ID token and/or the access token.");return new Df("google.com",!1,ha(a)?a:{idToken:a||null,accessToken:b||null})};var Lf=Hf("twitter.com",!0),Mf=function(a,b){this.Ab=a;this.uc=b;P(this,"provider","password")};Mf.prototype.Eb=function(a){return R(a,Nf,{email:this.Ab,password:this.uc})};
	Mf.prototype.dd=function(a,b){return R(a,Of,{idToken:b,email:this.Ab,password:this.uc})};Mf.prototype.C=function(){return{email:this.Ab,password:this.uc}};var Pf=function(){vf(this,{providerId:"password",isOAuthProvider:!1})};vf(Pf,{PROVIDER_ID:"password"});
	var Qf={Ge:Pf,yd:If,Ad:Kf,zd:Jf,Ed:Lf},Rf=function(a){var b=a&&a.providerId;if(!b)return null;var c=a&&a.oauthAccessToken,d=a&&a.oauthTokenSecret;a=a&&a.oauthIdToken;for(var e in Qf)if(Qf[e].PROVIDER_ID==b)try{return Qf[e].credential({accessToken:c,idToken:a,oauthToken:c,oauthTokenSecret:d})}catch(f){break}return null};var Sf=function(a,b,c){Q.call(this,"account-exists-with-different-credential",c);P(this,"email",a);P(this,"credential",b)};r(Sf,Q);Sf.prototype.C=function(){var a={code:this.code,message:this.message,email:this.email},b=this.credential&&this.credential.C();b&&(Za(a,b),a.providerId=b.provider,delete a.provider);return a};var Tf=function(a){this.Fe=a};r(Tf,sc);Tf.prototype.zb=function(){return new this.Fe};Tf.prototype.qc=function(){return{}};
	var S=function(a,b,c){var d;d="Node"==lf();d=l.XMLHttpRequest||d&&firebase.INTERNAL.node&&firebase.INTERNAL.node.XMLHttpRequest;if(!d)throw new Q("internal-error","The XMLHttpRequest compatibility library was not found.");this.u=a;a=b||{};this.ue=a.secureTokenEndpoint||"https://securetoken.googleapis.com/v1/token";this.ve=a.secureTokenTimeout||1E4;this.pd=Xa(a.secureTokenHeaders||Uf);this.Rd=a.firebaseEndpoint||"https://www.googleapis.com/identitytoolkit/v3/relyingparty/";this.Sd=a.firebaseTimeout||
	1E4;this.Tc=Xa(a.firebaseHeaders||Vf);c&&(this.Tc["X-Client-Version"]=c,this.pd["X-Client-Version"]=c);this.Jd=new xc;this.Ee=new Tf(d)},Wf,Uf={"Content-Type":"application/x-www-form-urlencoded"},Vf={"Content-Type":"application/json"},Yf=function(a,b,c,d,e,f,g){ff()?a=q(a.xe,a):(Wf||(Wf=new H(function(a,b){Xf(a,b)})),a=q(a.we,a));a(b,c,d,e,f,g)};
	S.prototype.xe=function(a,b,c,d,e,f){var g="Node"==lf(),k=mf()?g?new L(this.Ee):new L:new L(this.Jd),p;f&&(k.Ya=Math.max(0,f),p=setTimeout(function(){k.dispatchEvent("timeout")},f));k.listen("complete",function(){p&&clearTimeout(p);var a=null;try{var c;c=this.a?lc(this.a.responseText):void 0;a=c||null}catch(d){try{a=JSON.parse(Je(this))||null}catch(e){a=null}}b&&b(a)});ec(k,"ready",function(){p&&clearTimeout(p);this.ua||(this.ua=!0,this.Ka())});ec(k,"timeout",function(){p&&clearTimeout(p);this.ua||
	(this.ua=!0,this.Ka());b&&b(null)});k.send(a,c,d,e)};var Zf="__fcb"+Math.floor(1E6*Math.random()).toString(),Xf=function(a,b){((window.gapi||{}).client||{}).request?a():(l[Zf]=function(){((window.gapi||{}).client||{}).request?a():b(Error("CORS_UNSUPPORTED"))},Nd(Vd("https://apis.google.com/js/client.js?onload="+Zf),function(){b(Error("CORS_UNSUPPORTED"))}))};
	S.prototype.we=function(a,b,c,d,e){var f=this;Wf.then(function(){window.gapi.client.setApiKey(f.u);var g=window.gapi.auth.getToken();window.gapi.auth.setToken(null);window.gapi.client.request({path:a,method:c,body:d,headers:e,authType:"none",callback:function(a){window.gapi.auth.setToken(g);b&&b(a)}})}).N(function(a){b&&b({error:{message:a&&a.message||"CORS_UNSUPPORTED"}})})};
	var ag=function(a,b){return new H(function(c,d){"refresh_token"==b.grant_type&&b.refresh_token||"authorization_code"==b.grant_type&&b.code?Yf(a,a.ue+"?key="+encodeURIComponent(a.u),function(a){a?a.error?d($f(a)):a.access_token&&a.refresh_token?c(a):d(new Q("internal-error")):d(new Q("network-request-failed"))},"POST",af(b).toString(),a.pd,a.ve):d(new Q("internal-error"))})},bg=function(a){var b={},c;for(c in a)null!==a[c]&&void 0!==a[c]&&(b[c]=a[c]);return oc(b)},cg=function(a,b,c,d,e){var f=a.Rd+
	b+"?key="+encodeURIComponent(a.u);e&&(f+="&cb="+la().toString());return new H(function(b,e){Yf(a,f,function(a){a?a.error?e($f(a)):b(a):e(new Q("network-request-failed"))},c,bg(d),a.Tc,a.Sd)})},dg=function(a){if(!kc.test(a.email))throw new Q("invalid-email");},eg=function(a){"email"in a&&dg(a)},gg=function(a,b){return R(a,fg,{identifier:b,continueUri:pf()?bf():"http://localhost"}).then(function(a){return a.allProviders||[]})},ig=function(a){return R(a,hg,{}).then(function(a){return a.authorizedDomains||
	[]})},jg=function(a){if(!a.idToken)throw new Q("internal-error");};S.prototype.signInAnonymously=function(){return R(this,kg,{})};S.prototype.updateEmail=function(a,b){return R(this,lg,{idToken:a,email:b})};S.prototype.updatePassword=function(a,b){return R(this,Of,{idToken:a,password:b})};var mg={displayName:"DISPLAY_NAME",photoUrl:"PHOTO_URL"};
	S.prototype.updateProfile=function(a,b){var c={idToken:a},d=[];Qa(mg,function(a,f){var g=b[f];null===g?d.push(a):f in b&&(c[f]=g)});d.length&&(c.deleteAttribute=d);return R(this,lg,c)};S.prototype.sendPasswordResetEmail=function(a){return R(this,ng,{requestType:"PASSWORD_RESET",email:a})};S.prototype.sendEmailVerification=function(a){return R(this,og,{requestType:"VERIFY_EMAIL",idToken:a})};
	var qg=function(a,b,c){return R(a,pg,{idToken:b,deleteProvider:c})},rg=function(a){if(!a.requestUri||!a.sessionId&&!a.postBody)throw new Q("internal-error");},sg=function(a){if(a.needConfirmation)throw(a&&a.email?new Sf(a.email,Rf(a),a.message):null)||new Q("account-exists-with-different-credential");if(!a.idToken)throw new Q("internal-error");},Ef=function(a,b){return R(a,tg,b)},ug=function(a){if(!a.oobCode)throw new Q("invalid-action-code");};
	S.prototype.confirmPasswordReset=function(a,b){return R(this,vg,{oobCode:a,newPassword:b})};S.prototype.checkActionCode=function(a){return R(this,wg,{oobCode:a})};S.prototype.applyActionCode=function(a){return R(this,xg,{oobCode:a})};
	var xg={endpoint:"setAccountInfo",w:ug,Xa:"email"},wg={endpoint:"resetPassword",w:ug,oa:function(a){if(!kc.test(a.email))throw new Q("internal-error");}},yg={endpoint:"signupNewUser",w:function(a){dg(a);if(!a.password)throw new Q("weak-password");},oa:jg,pa:!0},fg={endpoint:"createAuthUri"},zg={endpoint:"deleteAccount",Wa:["idToken"]},pg={endpoint:"setAccountInfo",Wa:["idToken","deleteProvider"],w:function(a){if(!ea(a.deleteProvider))throw new Q("internal-error");}},Ag={endpoint:"getAccountInfo"},
	og={endpoint:"getOobConfirmationCode",Wa:["idToken","requestType"],w:function(a){if("VERIFY_EMAIL"!=a.requestType)throw new Q("internal-error");},Xa:"email"},ng={endpoint:"getOobConfirmationCode",Wa:["requestType"],w:function(a){if("PASSWORD_RESET"!=a.requestType)throw new Q("internal-error");dg(a)},Xa:"email"},hg={Id:!0,endpoint:"getProjectConfig",$d:"GET"},vg={endpoint:"resetPassword",w:ug,Xa:"email"},lg={endpoint:"setAccountInfo",Wa:["idToken"],w:eg,pa:!0},Of={endpoint:"setAccountInfo",Wa:["idToken"],
	w:function(a){eg(a);if(!a.password)throw new Q("weak-password");},oa:jg,pa:!0},kg={endpoint:"signupNewUser",oa:jg,pa:!0},tg={endpoint:"verifyAssertion",w:rg,oa:sg,pa:!0},Gf={endpoint:"verifyAssertion",w:function(a){rg(a);if(!a.idToken)throw new Q("internal-error");},oa:sg,pa:!0},Bg={endpoint:"verifyCustomToken",w:function(a){if(!a.token)throw new Q("invalid-custom-token");},oa:jg,pa:!0},Nf={endpoint:"verifyPassword",w:function(a){dg(a);if(!a.password)throw new Q("wrong-password");},oa:jg,pa:!0},R=
	function(a,b,c){if(!xf(c,b.Wa))return J(new Q("internal-error"));var d=b.$d||"POST",e;return I(c).then(b.w).then(function(){b.pa&&(c.returnSecureToken=!0);return cg(a,b.endpoint,d,c,b.Id||!1)}).then(function(a){return e=a}).then(b.oa).then(function(){if(!b.Xa)return e;if(!(b.Xa in e))throw new Q("internal-error");return e[b.Xa]})},$f=function(a){var b,c;c=(a.error&&a.error.errors&&a.error.errors[0]||{}).reason||"";b={keyInvalid:"invalid-api-key",ipRefererBlocked:"app-not-authorized"};if(c=b[c]?new Q(b[c]):
	null)return c;a=a.error&&a.error.message||"";c={INVALID_CUSTOM_TOKEN:"invalid-custom-token",CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_EMAIL:"invalid-email",INVALID_PASSWORD:"wrong-password",USER_DISABLED:"user-disabled",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",
	FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",EMAIL_NOT_FOUND:"user-not-found",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",CORS_UNSUPPORTED:"cors-unsupported",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",WEAK_PASSWORD:"weak-password",OPERATION_NOT_ALLOWED:"operation-not-allowed"};
	b=(b=a.match(/:\s*(.*)$/))&&1<b.length?b[1]:void 0;for(var d in c)if(0===a.indexOf(d))return new Q(c[d],b);return new Q("internal-error",b)};var Cg=function(a){this.M=a};Cg.prototype.value=function(){return this.M};Cg.prototype.sd=function(a){this.M.style=a;return this};var Dg=function(a){this.M=a||{}};Dg.prototype.value=function(){return this.M};Dg.prototype.sd=function(a){this.M.style=a;return this};var Fg=function(a){this.De=a;this.nc=null;this.oe=Eg(this)},Gg,Hg=function(a){var b=new Dg;b.M.where=document.body;b.M.url=a.De;b.M.messageHandlersFilter=of("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER");b.M.attributes=b.M.attributes||{};(new Cg(b.M.attributes)).sd({position:"absolute",top:"-100px",width:"1px",height:"1px"});b.M.dontclear=!0;return b},Eg=function(a){return Ig().then(function(){return new H(function(b){of("gapi.iframes.getContext")().open(Hg(a).value(),function(c){a.nc=c;a.nc.restyle({setHideOnLeave:!1});
	b()})})})},Jg=function(a,b){a.oe.then(function(){a.nc.register("authEvent",b,of("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})},Kg="__iframefcb"+Math.floor(1E6*Math.random()).toString(),Ig=function(){return Gg?Gg:Gg=new H(function(a,b){var c=function(){of("gapi.load")("gapi.iframes",function(){a()})};of("gapi.iframes.Iframe")?a():of("gapi.load")?c():(l[Kg]=function(){of("gapi.load")?c():b()},Nd(Vd("https://apis.google.com/js/api.js?onload="+Kg),function(){b()}))})};var Mg=function(a,b,c,d){this.S=a;this.u=b;this.ka=c;d=this.ta=d||null;a=Xe(a,"/__/auth/iframe");O(a,"apiKey",b);O(a,"appName",c);d&&O(a,"v",d);this.be=a.toString();this.ce=new Fg(this.be);this.cc=[];Lg(this)},Ng=function(a,b,c,d,e,f,g,k,p){a=Xe(a,"/__/auth/handler");O(a,"apiKey",b);O(a,"appName",c);O(a,"authType",d);O(a,"providerId",e);f&&f.length&&O(a,"scopes",f.join(","));g&&O(a,"redirectUrl",g);k&&O(a,"eventId",k);p&&O(a,"v",p);return a.toString()},Lg=function(a){Jg(a.ce,function(b){var c={};
	if(b&&b.authEvent){var d=!1;b=b.authEvent||{};if(b.type){if(c=b.error)var e=(c=b.error)&&(c.name||c.code),c=e?new Q(e.substring(5),c.message):null;b=new Bf(b.type,b.eventId,b.urlResponse,b.sessionId,c)}else b=null;for(c=0;c<a.cc.length;c++)d=a.cc[c](b)||d;c={};c.status=d?"ACK":"ERROR";return I(c)}c.status="ERROR";return I(c)})};var Og=function(a){this.B=a||firebase.INTERNAL.reactNative&&firebase.INTERNAL.reactNative.AsyncStorage;if(!this.B)throw new Q("internal-error","The React Native compatibility library was not found.");};h=Og.prototype;h.get=function(a){return I(this.B.getItem(a)).then(function(a){return a&&sf(a)})};h.set=function(a,b){return I(this.B.setItem(a,rf(b)))};h.remove=function(a){return I(this.B.removeItem(a))};h.Ia=function(){};h.Ua=function(){};var Qg=function(){if(!Pg()){if("Node"==lf())throw new Q("internal-error","The LocalStorage compatibility library was not found.");throw new Q("web-storage-unsupported");}this.B=l.localStorage||firebase.INTERNAL.node.localStorage},Pg=function(){var a="Node"==lf(),a=l.localStorage||a&&firebase.INTERNAL.node&&firebase.INTERNAL.node.localStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}};h=Qg.prototype;
	h.get=function(a){var b=this;return I().then(function(){var c=b.B.getItem(a);return sf(c)})};h.set=function(a,b){var c=this;return I().then(function(){var d=rf(b);null===d?c.remove(a):c.B.setItem(a,d)})};h.remove=function(a){var b=this;return I().then(function(){b.B.removeItem(a)})};h.Ia=function(a){l.window&&Xb(l.window,"storage",a)};h.Ua=function(a){l.window&&fc(l.window,"storage",a)};var Rg=function(){this.B={}};h=Rg.prototype;h.get=function(){return I(null)};h.set=function(){return I()};h.remove=function(){return I()};h.Ia=function(){};h.Ua=function(){};var Tg=function(){if(!Sg()){if("Node"==lf())throw new Q("internal-error","The SessionStorage compatibility library was not found.");throw new Q("web-storage-unsupported");}this.B=l.sessionStorage||firebase.INTERNAL.node.sessionStorage},Sg=function(){var a="Node"==lf(),a=l.sessionStorage||a&&firebase.INTERNAL.node&&firebase.INTERNAL.node.sessionStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}};h=Tg.prototype;
	h.get=function(a){var b=this;return I().then(function(){var c=b.B.getItem(a);return sf(c)})};h.set=function(a,b){var c=this;return I().then(function(){var d=rf(b);null===d?c.remove(a):c.B.setItem(a,d)})};h.remove=function(a){var b=this;return I().then(function(){b.B.removeItem(a)})};h.Ia=function(){};h.Ua=function(){};var Xg=function(){this.Qc={Browser:Ug,Node:Vg,ReactNative:Wg}[lf()]},Yg,Ug={v:Qg,Gc:Tg},Vg={v:Qg,Gc:Tg},Wg={v:Og,Gc:Rg};var Zg="First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" "),T=function(a,b){return{name:a||"",Y:"a valid string",optional:!!b,Z:m}},$g=function(a){return{name:a||"",Y:"a valid object",optional:!1,Z:ha}},ah=function(a,b){return{name:a||"",Y:"a function",optional:!!b,Z:n}},bh=function(){return{name:"",Y:"null",optional:!1,Z:da}},ch=function(){return{name:"credential",Y:"a valid credential",optional:!1,Z:function(a){return!(!a||!a.Eb)}}},dh=function(){return{name:"authProvider",Y:"a valid Auth provider",
	optional:!1,Z:function(a){return!!(a&&a.providerId&&a.hasOwnProperty&&a.hasOwnProperty("isOAuthProvider"))}}},eh=function(a,b,c,d){return{name:c||"",Y:a.Y+" or "+b.Y,optional:!!d,Z:function(c){return a.Z(c)||b.Z(c)}}};var gh=function(a,b){for(var c in b){var d=b[c].name;a[d]=fh(d,a[c],b[c].b)}},U=function(a,b,c,d){a[b]=fh(b,c,d)},fh=function(a,b,c){if(!c)return b;var d=hh(a);a=function(){var a=Array.prototype.slice.call(arguments),e;a:{e=Array.prototype.slice.call(a);var k;k=0;for(var p=!1,Y=0;Y<c.length;Y++)if(c[Y].optional)p=!0;else{if(p)throw new Q("internal-error","Argument validator encountered a required argument after an optional argument.");k++}p=c.length;if(e.length<k||p<e.length)e="Expected "+(k==p?1==
	k?"1 argument":k+" arguments":k+"-"+p+" arguments")+" but got "+e.length+".";else{for(k=0;k<e.length;k++)if(p=c[k].optional&&void 0===e[k],!c[k].Z(e[k])&&!p){e=c[k];if(0>k||k>=Zg.length)throw new Q("internal-error","Argument validator received an unsupported number of arguments.");e=Zg[k]+" argument "+(e.name?'"'+e.name+'" ':"")+"must be "+e.Y+".";break a}e=null}}if(e)throw new Q("argument-error",d+" failed: "+e);return b.apply(this,a)};for(var e in b)a[e]=b[e];for(e in b.prototype)a.prototype[e]=
	b.prototype[e];return a},hh=function(a){a=a.split(".");return a[a.length-1]};var kh=function(a,b,c){var d=(this.ta=firebase.SDK_VERSION||null)?nf(this.ta):null;this.c=new S(b,null,d);this.Qa=null;this.S=a;this.u=b;this.ka=c;this.ub=[];this.ad=!1;this.Hd=q(this.Ud,this);this.rb=new ih(this);this.kd=new jh(this);this.Za={};this.Za.unknown=this.rb;this.Za.signInViaRedirect=this.rb;this.Za.linkViaRedirect=this.rb;this.Za.signInViaPopup=this.kd;this.Za.linkViaPopup=this.kd},lh=function(a){var b=bf();return ig(a).then(function(a){a:{for(var d=(b instanceof Ke?b.clone():new Ke(b,
	void 0)).la,e=0;e<a.length;e++){var f;var g=a[e];f=d;var k=Pc(g);k?f=(f=Pc(f))?k.Bb(f):!1:(k=g.split(".").join("\\."),f=(new RegExp("^(.+."+k+"|"+k+")$","i")).test(f));if(f){a=!0;break a}}a=!1}if(!a)throw new Q("unauthorized-domain");})},mh=function(a){a.ad=!0;kf().then(function(){a.ae=new Mg(a.S,a.u,a.ka,a.ta);a.ae.cc.push(a.Hd)})};kh.prototype.subscribe=function(a){Ia(this.ub,a)||this.ub.push(a);this.ad||mh(this)};kh.prototype.unsubscribe=function(a){La(this.ub,function(b){return b==a})};
	kh.prototype.Ud=function(a){if(!a)throw new Q("invalid-auth-event");for(var b=!1,c=0;c<this.ub.length;c++){var d=this.ub[c];if(d.Mc(a.sa,a.va)){(b=this.Za[a.sa])&&b.ld(a,d);b=!0;break}}a=this.rb;a.yc||(a.yc=!0,nh(a,!1,null,null));return b};kh.prototype.getRedirectResult=function(){return this.rb.getRedirectResult()};
	var ph=function(a,b,c,d,e){if(!b)return J(new Q("popup-blocked"));a.Qa||(a.Qa=lh(a.c));return a.Qa.then(function(){oh(d);var f=Ng(a.S,a.u,a.ka,c,d.providerId,d.Fb(),null,e,a.ta);Gb((b||l.window).location,f);return b})},qh=function(a,b,c,d){a.Qa||(a.Qa=lh(a.c));return a.Qa.then(function(){oh(c);var e=Ng(a.S,a.u,a.ka,b,c.providerId,c.Fb(),bf(),d,a.ta);Gb(l.window.location,e)})},rh=function(a,b,c,d){var e=new Q("popup-closed-by-user");return jf(c).then(function(){return te(3E4).then(function(){a.Ea(b,
	null,e,d)})})},oh=function(a){if(!a.isOAuthProvider)throw new Q("invalid-oauth-provider");},sh={},th=function(a,b,c){var d=b+":"+c;sh[d]||(sh[d]=new kh(a,b,c));return sh[d]},ih=function(a){this.P=a;this.zc=this.Qb=this.Ta=this.X=null;this.yc=!1};ih.prototype.ld=function(a,b){if(!a)return J(new Q("invalid-auth-event"));this.yc=!0;var c=a.sa,d=a.va;"unknown"==c?(this.X||nh(this,!1,null,null),c=I()):c=a.G?this.wc(a,b):b.eb(c,d)?this.xc(a,b):J(new Q("invalid-auth-event"));return c};
	ih.prototype.wc=function(a){this.X||nh(this,!0,null,a.getError());return I()};ih.prototype.xc=function(a,b){var c=this,d=a.sa,e=b.eb(d,a.va),f="signInViaRedirect"==d||"linkViaRedirect"==d;return e(a.$a,a.Tb).then(function(a){c.X||nh(c,f,a,null)}).N(function(a){c.X||nh(c,f,null,a)})};var nh=function(a,b,c,d){b?d?(a.X=function(){return J(d)},a.Qb&&a.Qb(d)):(a.X=function(){return I(c)},a.Ta&&a.Ta(c)):(a.X=function(){return I({user:null})},a.Ta&&a.Ta({user:null}));a.Ta=null;a.Qb=null};
	ih.prototype.getRedirectResult=function(){var a=this;this.Kc||(this.Kc=new H(function(b,c){a.X?a.X().then(b,c):(a.Ta=b,a.Qb=c,uh(a))}));return this.Kc};var uh=function(a){var b=new Q("timeout");a.zc&&a.zc.cancel();a.zc=te(3E4).then(function(){a.X||nh(a,!0,null,b)})},jh=function(a){this.P=a};jh.prototype.ld=function(a,b){if(!a)return J(new Q("invalid-auth-event"));var c=a.sa,d=a.va;return a.G?this.wc(a,b):b.eb(c,d)?this.xc(a,b):J(new Q("invalid-auth-event"))};
	jh.prototype.wc=function(a,b){b.Ea(a.sa,null,a.getError(),a.va);return I()};jh.prototype.xc=function(a,b){var c=a.va,d=a.sa;return b.eb(d,c)(a.$a,a.Tb).then(function(a){b.Ea(d,a,null,c)}).N(function(a){b.Ea(d,null,a,c)})};var vh=function(a){this.c=a;this.Ha=this.ea=null;this.La=0};vh.prototype.C=function(){return{apiKey:this.c.u,refreshToken:this.ea,accessToken:this.Ha,expirationTime:this.La}};var xh=function(a,b){var c=b.idToken,d=b.refreshToken,e=wh(b.expiresIn);a.Ha=c;a.La=e;a.ea=d},wh=function(a){return la()+1E3*parseInt(a,10)},yh=function(a,b){return ag(a.c,b).then(function(b){a.Ha=b.access_token;a.La=wh(b.expires_in);a.ea=b.refresh_token;return{accessToken:a.Ha,expirationTime:a.La,refreshToken:a.ea}})};
	vh.prototype.getToken=function(a){return a||!this.Ha||la()>this.La-3E4?this.ea?yh(this,{grant_type:"refresh_token",refresh_token:this.ea}):I(null):I({accessToken:this.Ha,expirationTime:this.La,refreshToken:this.ea})};var zh=function(a,b,c,d,e){vf(this,{uid:a,displayName:d||null,photoURL:e||null,email:c||null,providerId:b})},Ah=function(a,b){Lb.call(this,a);for(var c in b)this[c]=b[c]};r(Ah,Lb);
	var V=function(a,b,c){this.R=[];this.u=a.apiKey;this.ka=a.appName;this.S=a.authDomain||null;a=firebase.SDK_VERSION?nf(firebase.SDK_VERSION):null;this.c=new S(this.u,null,a);this.ra=new vh(this.c);Bh(this,b.idToken);xh(this.ra,b);P(this,"refreshToken",this.ra.ea);Ch(this,c||{});Wd.call(this);this.Nb=!1;this.S&&pf()&&(this.o=th(this.S,this.u,this.ka));this.Ub=[]};r(V,Wd);
	var Bh=function(a,b){a.bd=b;P(a,"_lat",b)},Dh=function(a,b){La(a.Ub,function(a){return a==b})},Eh=function(a){for(var b=[],c=0;c<a.Ub.length;c++)b.push(a.Ub[c](a));return sd(b).then(function(){return a})},Fh=function(a){a.o&&!a.Nb&&(a.Nb=!0,a.o.subscribe(a))},Ch=function(a,b){vf(a,{uid:b.uid,displayName:b.displayName||null,photoURL:b.photoURL||null,email:b.email||null,emailVerified:b.emailVerified||!1,isAnonymous:b.isAnonymous||!1,providerData:[]})};P(V.prototype,"providerId","firebase");
	var Gh=function(){},Hh=function(a){return I().then(function(){if(a.Md)throw new Q("app-deleted");})},Ih=function(a){return Ea(a.providerData,function(a){return a.providerId})},Kh=function(a,b){b&&(Jh(a,b.providerId),a.providerData.push(b))},Jh=function(a,b){La(a.providerData,function(a){return a.providerId==b})},Lh=function(a,b,c){("uid"!=b||c)&&a.hasOwnProperty(b)&&P(a,b,c)};
	V.prototype.copy=function(a){var b=this;b!=a&&(vf(this,{uid:a.uid,displayName:a.displayName,photoURL:a.photoURL,email:a.email,emailVerified:a.emailVerified,isAnonymous:a.isAnonymous,providerData:[]}),w(a.providerData,function(a){Kh(b,a)}),this.ra=a.ra,P(this,"refreshToken",this.ra.ea))};V.prototype.reload=function(){var a=this;return Hh(this).then(function(){return Mh(a).then(function(){return Eh(a)}).then(Gh)})};
	var Mh=function(a){return a.getToken().then(function(b){var c=a.isAnonymous;return Nh(a,b).then(function(){c||Lh(a,"isAnonymous",!1);return b}).N(function(b){"auth/user-token-expired"==b.code&&(a.dispatchEvent(new Ah("userDeleted")),Oh(a));throw b;})})};V.prototype.getToken=function(a){var b=this;return Hh(this).then(function(){return b.ra.getToken(a)}).then(function(a){if(!a)throw new Q("internal-error");a.accessToken!=b.bd&&(Bh(b,a.accessToken),b.ma());Lh(b,"refreshToken",a.refreshToken);return a.accessToken})};
	var Ph=function(a,b){b.idToken&&a.bd!=b.idToken&&(xh(a.ra,b),a.ma(),Bh(a,b.idToken))};V.prototype.ma=function(){this.dispatchEvent(new Ah("tokenChanged"))};var Nh=function(a,b){return R(a.c,Ag,{idToken:b}).then(q(a.qe,a))};
	V.prototype.qe=function(a){a=a.users;if(!a||!a.length)throw new Q("internal-error");a=a[0];Ch(this,{uid:a.localId,displayName:a.displayName,photoURL:a.photoUrl,email:a.email,emailVerified:!!a.emailVerified});for(var b=Qh(a),c=0;c<b.length;c++)Kh(this,b[c]);Lh(this,"isAnonymous",!(this.email&&a.passwordHash)&&!(this.providerData&&this.providerData.length))};
	var Qh=function(a){return(a=a.providerUserInfo)&&a.length?Ea(a,function(a){return new zh(a.rawId,a.providerId,a.email,a.displayName,a.photoUrl)}):[]};V.prototype.reauthenticate=function(a){var b=this;return this.f(a.Eb(this.c).then(function(a){var d;a:{var e=a.idToken.split(".");if(3==e.length){for(var e=e[1],f=(4-e.length%4)%4,g=0;g<f;g++)e+=".";try{var k=lc(tb(e));if(k.sub&&k.iss&&k.aud&&k.exp){d=new Cf(k);break a}}catch(p){}}d=null}if(!d||b.uid!=d.je)throw new Q("user-mismatch");Ph(b,a);return b.reload()}))};
	var Rh=function(a,b){return Mh(a).then(function(){if(Ia(Ih(a),b))return Eh(a).then(function(){throw new Q("provider-already-linked");})})};h=V.prototype;h.link=function(a){var b=this;return this.f(Rh(this,a.provider).then(function(){return b.getToken()}).then(function(c){return a.dd(b.c,c)}).then(q(this.Sc,this)))};h.Sc=function(a){Ph(this,a);var b=this;return this.reload().then(function(){return b})};
	h.updateEmail=function(a){var b=this;return this.f(this.getToken().then(function(c){return b.c.updateEmail(c,a)}).then(function(a){Ph(b,a);return b.reload()}))};h.updatePassword=function(a){var b=this;return this.f(this.getToken().then(function(c){return b.c.updatePassword(c,a)}).then(function(a){Ph(b,a);return b.reload()}))};
	h.updateProfile=function(a){if(void 0===a.displayName&&void 0===a.photoURL)return Hh(this);var b=this;return this.f(this.getToken().then(function(c){return b.c.updateProfile(c,{displayName:a.displayName,photoUrl:a.photoURL})}).then(function(a){Ph(b,a);Lh(b,"displayName",a.displayName||null);Lh(b,"photoURL",a.photoUrl||null);return Eh(b)}).then(Gh))};
	h.unlink=function(a){var b=this;return this.f(Mh(this).then(function(c){return Ia(Ih(b),a)?qg(b.c,c,[a]).then(function(a){var c={};w(a.providerUserInfo||[],function(a){c[a.providerId]=!0});w(Ih(b),function(a){c[a]||Jh(b,a)});return Eh(b)}):Eh(b).then(function(){throw new Q("no-such-provider");})}))};h["delete"]=function(){var a=this;return this.f(this.getToken().then(function(b){return R(a.c,zg,{idToken:b})}).then(function(){a.dispatchEvent(new Ah("userDeleted"))})).then(function(){Oh(a)})};
	h.Mc=function(a,b){return"linkViaPopup"==a&&(this.ca||null)==b&&this.V||"linkViaRedirect"==a&&(this.Pb||null)==b?!0:!1};h.Ea=function(a,b,c,d){"linkViaPopup"==a&&d==(this.ca||null)&&(c&&this.Aa?this.Aa(c):b&&!c&&this.V&&this.V(b),this.Ba&&(this.Ba.cancel(),this.Ba=null),delete this.V,delete this.Aa)};h.eb=function(a,b){return"linkViaPopup"==a&&b==(this.ca||null)||"linkViaRedirect"==a&&(this.Pb||null)==b?q(this.Pd,this):null};h.Db=function(){return this.uid+":::"+Math.floor(1E9*Math.random()).toString()};
	h.linkWithPopup=function(a){if(!pf())return J(new Q("operation-not-supported-in-this-environment"));var b=this,c=zf(a.providerId),d=this.Db(),e=null;!qf()&&this.S&&a.isOAuthProvider&&(e=Ng(this.S,this.u,this.ka,"linkViaPopup",a.providerId,a.Fb(),null,d,firebase.SDK_VERSION||null));var f=hf(e,c&&c.qb,c&&c.pb),c=Rh(this,a.providerId).then(function(){return Eh(b)}).then(function(){b.Na();return b.getToken()}).then(function(){if(!e)return ph(b.o,f,"linkViaPopup",a,d)}).then(function(){return new H(function(a,
	c){b.Ea("linkViaPopup",null,new Q("cancelled-popup-request"),b.ca||null);b.V=a;b.Aa=c;b.ca=d;b.Ba=rh(b,"linkViaPopup",f,d)})}).then(function(a){f&&gf(f);return a}).N(function(a){f&&gf(f);throw a;});return this.f(c)};
	h.linkWithRedirect=function(a){if(!pf())return J(new Q("operation-not-supported-in-this-environment"));var b=this,c=null,d=this.Db(),e=Rh(this,a.providerId).then(function(){b.Na();return b.getToken()}).then(function(){b.Pb=d;return Eh(b)}).then(function(a){b.Ca&&(a=b.Ca,a=a.P.set(Sh,b.C(),a.$));return a}).then(function(){return qh(b.o,"linkViaRedirect",a,d)}).N(function(a){c=a;if(b.Ca)return Th(b.Ca);throw c;}).then(function(){if(c)throw c;});return this.f(e)};
	h.Na=function(){if(this.o&&this.Nb)return this.o;if(this.o&&!this.Nb)throw new Q("internal-error");throw new Q("auth-domain-config-required");};h.Pd=function(a,b){var c=this,d=null,e=this.getToken().then(function(d){return R(c.c,Gf,{requestUri:a,sessionId:b,idToken:d})}).then(function(a){d=Rf(a);return c.Sc(a)}).then(function(a){return{user:a,credential:d}});return this.f(e)};
	h.sendEmailVerification=function(){var a=this;return this.f(this.getToken().then(function(b){return a.c.sendEmailVerification(b)}).then(function(b){if(a.email!=b)return a.reload()}).then(function(){}))};var Oh=function(a){for(var b=0;b<a.R.length;b++)a.R[b].cancel("app-deleted");a.R=[];a.Md=!0;P(a,"refreshToken",null);a.o&&a.o.unsubscribe(a)};V.prototype.f=function(a){var b=this;this.R.push(a);vd(a,function(){Ka(b.R,a)});return a};V.prototype.toJSON=function(){return this.C()};
	V.prototype.C=function(){var a={uid:this.uid,displayName:this.displayName,photoURL:this.photoURL,email:this.email,emailVerified:this.emailVerified,isAnonymous:this.isAnonymous,providerData:[],apiKey:this.u,appName:this.ka,authDomain:this.S,stsTokenManager:this.ra.C(),redirectEventId:this.Pb||null};w(this.providerData,function(b){a.providerData.push(wf(b))});return a};
	var Uh=function(a){if(!a.apiKey)return null;var b={apiKey:a.apiKey,authDomain:a.authDomain,appName:a.appName},c={};if(a.stsTokenManager&&a.stsTokenManager.accessToken&&a.stsTokenManager.refreshToken&&a.stsTokenManager.expirationTime)c.idToken=a.stsTokenManager.accessToken,c.refreshToken=a.stsTokenManager.refreshToken,c.expiresIn=(a.stsTokenManager.expirationTime-la())/1E3;else return null;var d=new V(b,c,a);a.providerData&&w(a.providerData,function(a){if(a){var b={};vf(b,a);Kh(d,b)}});a.redirectEventId&&
	(d.Pb=a.redirectEventId);return d},Vh=function(a,b,c){var d=new V(a,b);c&&(d.Ca=c);return d.reload().then(function(){return d})};var Wh,Xh=function(a,b,c,d,e,f){this.Ld=a;this.sc=b;this.gc=c;this.wd=d;this.ha=e;this.K={};this.tb=[];this.nb=0;this.de=f||l.indexedDB},Yh=function(a){return new H(function(b,c){var d=a.de.open(a.Ld,a.ha);d.onerror=function(a){c(Error(a.target.errorCode))};d.onupgradeneeded=function(b){b=b.target.result;try{b.createObjectStore(a.sc,{keyPath:a.gc})}catch(d){c(d)}};d.onsuccess=function(a){b(a.target.result)}})},Zh=function(a){a.$c||(a.$c=Yh(a));return a.$c},$h=function(a,b){return b.objectStore(a.sc)},
	ai=function(a,b,c){return b.transaction([a.sc],c?"readwrite":"readonly")},bi=function(a){return new H(function(b,c){a.onsuccess=function(a){a&&a.target?b(a.target.result):b()};a.onerror=function(a){c(Error(a.target.errorCode))}})};h=Xh.prototype;
	h.set=function(a,b){var c=!1,d,e=this;return vd(Zh(this).then(function(b){d=b;b=$h(e,ai(e,d,!0));return bi(b.get(a))}).then(function(f){var g=$h(e,ai(e,d,!0));if(f)return f.value=b,bi(g.put(f));e.nb++;c=!0;f={};f[e.gc]=a;f[e.wd]=b;return bi(g.add(f))}).then(function(){e.K[a]=b}),function(){c&&e.nb--})};h.get=function(a){var b=this;return Zh(this).then(function(c){return bi($h(b,ai(b,c,!1)).get(a))})};
	h.remove=function(a){var b=!1,c=this;return vd(Zh(this).then(function(d){b=!0;c.nb++;return bi($h(c,ai(c,d,!0))["delete"](a))}).then(function(){delete c.K[a]}),function(){b&&c.nb--})};
	h.ze=function(){var a=this;return Zh(this).then(function(b){var c=$h(a,ai(a,b,!1));return c.getAll?bi(c.getAll()):new H(function(a,b){var f=[],g=c.openCursor();g.onsuccess=function(b){(b=b.target.result)?(f.push(b.value),b["continue"]()):a(f)};g.onerror=function(a){b(Error(a.target.errorCode))}})}).then(function(b){var c={},d=[];if(0==a.nb){for(d=0;d<b.length;d++)c[b[d][a.gc]]=b[d][a.wd];d=cf(a.K,c);a.K=c}return d})};h.Ia=function(a){0==this.tb.length&&this.Ec();this.tb.push(a)};
	h.Ua=function(a){La(this.tb,function(b){return b==a});0==this.tb.length&&this.Vb()};h.Ec=function(){var a=this;this.Vb();var b=function(){a.vc=te(1E3).then(q(a.ze,a)).then(function(b){0<b.length&&w(a.tb,function(a){a(b)})}).then(b).N(function(a){"STOP_EVENT"!=a.message&&b()});return a.vc};b()};h.Vb=function(){this.vc&&this.vc.cancel("STOP_EVENT")};var ci=function(a,b,c,d,e,f){this.me=a;this.qd=b;this.mb=d;this.te=e;this.sb=f;this.J={};Yg||(Yg=new Xg);a=Yg;this.ob=new a.Qc.v;this.Hc=new a.Qc.Gc;this.hb=c;this.ed=q(this.fd,this);this.Zc=q(this.ee,this);this.K={}},di,ei=function(){di||(Wh||(Wh=new Xh("firebaseLocalStorageDb","firebaseLocalStorage","fbase_key","value",1)),di=new ci("firebase",":",Wh,y&&!!pb&&11==pb||/Edge\/\d+/.test($a),"Safari"==ef(df())&&l.window&&l.window!=l.window.top?!0:!1,qf()));return di};h=ci.prototype;
	h.H=function(a,b){return this.me+this.qd+a.name+(b?this.qd+b:"")};h.get=function(a,b){var c=this.H(a,b);return this.mb&&a.v?this.hb.get(c).then(function(a){return a&&a.value}):(a.v?this.ob:this.Hc).get(c)};h.remove=function(a,b){var c=this.H(a,b);if(this.mb&&a.v)return this.hb.remove(c);a.v&&!this.sb&&(this.K[c]=null);return(a.v?this.ob:this.Hc).remove(c)};
	h.set=function(a,b,c){var d=this.H(a,c);if(this.mb&&a.v)return this.hb.set(d,b);var e=this,f=a.v?this.ob:this.Hc;return f.set(d,b).then(function(){return f.get(d)}).then(function(b){a.v&&!this.sb&&(e.K[d]=b)})};h.addListener=function(a,b,c){a=this.H(a,b);this.sb||(this.K[a]=l.localStorage.getItem(a));Va(this.J)&&this.Ec();this.J[a]||(this.J[a]=[]);this.J[a].push(c)};
	h.removeListener=function(a,b,c){a=this.H(a,b);this.J[a]&&(La(this.J[a],function(a){return a==c}),0==this.J[a].length&&delete this.J[a]);Va(this.J)&&this.Vb()};h.Ec=function(){this.mb?this.hb.Ia(this.Zc):(this.ob.Ia(this.ed),this.sb||fi(this))};
	var fi=function(a){gi(a);a.rc=setInterval(function(){for(var b in a.J){var c=l.localStorage.getItem(b);c!=a.K[b]&&(a.K[b]=c,c=new Mb({type:"storage",key:b,target:window,oldValue:a.K[b],newValue:c}),a.fd(c))}},2E3)},gi=function(a){a.rc&&(clearInterval(a.rc),a.rc=null)};ci.prototype.Vb=function(){this.mb?this.hb.Ua(this.Zc):(this.ob.Ua(this.ed),this.sb||gi(this))};
	ci.prototype.fd=function(a){var b=a.Cb.key;if(this.te){var c=l.localStorage.getItem(b);a=a.Cb.newValue;a!=c&&(a?l.localStorage.setItem(b,a):a||l.localStorage.removeItem(b))}this.K[b]=l.localStorage.getItem(b);this.Lc(b)};ci.prototype.ee=function(a){w(a,q(this.Lc,this))};ci.prototype.Lc=function(a){this.J[a]&&w(this.J[a],function(a){a()})};var hi=function(a){this.$=a;this.P=ei()},Sh={name:"redirectUser",v:!1},Th=function(a){return a.P.remove(Sh,a.$)},ii=function(a,b){return a.P.get(Sh,a.$).then(function(a){a&&b&&(a.authDomain=b);return Uh(a||{})})};var ji=function(a){this.$=a;this.P=ei()},ki={name:"authUser",v:!0},li=function(a){return a.P.remove(ki,a.$)},mi=function(a,b){return a.P.get(ki,a.$).then(function(a){a&&b&&(a.authDomain=b);return Uh(a||{})})};var X=function(a){this.hc=!1;P(this,"app",a);if(W(this).options&&W(this).options.apiKey)a=firebase.SDK_VERSION?nf(firebase.SDK_VERSION):null,this.c=new S(W(this).options&&W(this).options.apiKey,null,a);else throw new Q("invalid-api-key");this.R=[];this.bb=[];this.ne=firebase.INTERNAL.createSubscribe(q(this.fe,this));ni(this,null);this.Da=this.ga=null;try{this.ga=new ji(W(this).options.apiKey+":"+W(this).name),this.Da=new hi(W(this).options.apiKey+":"+W(this).name),this.D=this.f(oi(this))}catch(b){this.D=
	J(b)}this.jb=!1;this.Vc=q(this.ye,this);this.ud=q(this.Oa,this);this.vd=q(this.Zd,this);this.td=q(this.Yd,this);pi(this);this.INTERNAL={};this.INTERNAL["delete"]=q(this["delete"],this)};X.prototype.toJSON=function(){return{apiKey:W(this).options.apiKey,authDomain:W(this).options.authDomain,appName:W(this).name,currentUser:Z(this)&&Z(this).C()}};X.prototype.Na=function(){return this.Nd||J(new Q("auth-domain-config-required"))};
	var pi=function(a){var b=W(a).options.authDomain,c=W(a).options.apiKey;b&&pf()&&(a.Nd=a.D.then(function(){a.o=th(b,c,W(a).name);a.o.subscribe(a);Z(a)&&Fh(Z(a));a.Ac&&(Fh(a.Ac),a.Ac=null);return a.o}))};h=X.prototype;h.Mc=function(a,b){switch(a){case "unknown":case "signInViaRedirect":return!0;case "signInViaPopup":return this.ca==b&&!!this.V;default:return!1}};
	h.Ea=function(a,b,c,d){"signInViaPopup"==a&&this.ca==d&&(c&&this.Aa?this.Aa(c):b&&!c&&this.V&&this.V(b),this.Ba&&(this.Ba.cancel(),this.Ba=null),delete this.V,delete this.Aa)};h.eb=function(a,b){return"signInViaRedirect"==a||"signInViaPopup"==a&&this.ca==b&&this.V?q(this.Qd,this):null};
	h.Qd=function(a,b){var c=this,d=null,e=Ef(c.c,{requestUri:a,sessionId:b}).then(function(a){d=Rf(a);return a}),f=c.D.then(function(){return e}).then(function(a){return qi(c,a)}).then(function(){return{user:Z(c),credential:d}});return this.f(f)};h.Db=function(){return Math.floor(1E9*Math.random()).toString()};
	h.signInWithPopup=function(a){if(!pf())return J(new Q("operation-not-supported-in-this-environment"));var b=this,c=zf(a.providerId),d=this.Db(),e=null;!qf()&&W(this).options.authDomain&&a.isOAuthProvider&&(e=Ng(W(this).options.authDomain,W(this).options.apiKey,W(this).name,"signInViaPopup",a.providerId,a.Fb(),null,d,firebase.SDK_VERSION||null));var f=hf(e,c&&c.qb,c&&c.pb),c=this.Na().then(function(b){if(!e)return ph(b,f,"signInViaPopup",a,d)}).then(function(){return new H(function(a,c){b.Ea("signInViaPopup",
	null,new Q("cancelled-popup-request"),b.ca);b.V=a;b.Aa=c;b.ca=d;b.Ba=rh(b,"signInViaPopup",f,d)})}).then(function(a){f&&gf(f);return a}).N(function(a){f&&gf(f);throw a;});return this.f(c)};h.signInWithRedirect=function(a){if(!pf())return J(new Q("operation-not-supported-in-this-environment"));var b=this,c=this.Na().then(function(){return qh(b.o,"signInViaRedirect",a)});return this.f(c)};
	h.getRedirectResult=function(){if(!pf())return J(new Q("operation-not-supported-in-this-environment"));var a=this,b=this.Na().then(function(){return a.o.getRedirectResult()});return this.f(b)};
	var qi=function(a,b){var c={};c.apiKey=W(a).options.apiKey;c.authDomain=W(a).options.authDomain;c.appName=W(a).name;return a.D.then(function(){return Vh(c,b,a.Da)}).then(function(b){if(Z(a)&&b.uid==Z(a).uid)return Z(a).copy(b),a.Oa(b);ni(a,b);Fh(b);return a.Oa(b)}).then(function(){a.ma()})},ni=function(a,b){Z(a)&&(Dh(Z(a),a.ud),fc(Z(a),"tokenChanged",a.vd),fc(Z(a),"userDeleted",a.td));b&&(b.Ub.push(a.ud),Xb(b,"tokenChanged",a.vd),Xb(b,"userDeleted",a.td));P(a,"currentUser",b)};
	X.prototype.signOut=function(){var a=this,b=this.D.then(function(){if(!Z(a))return I();ni(a,null);return li(a.ga).then(function(){a.ma()})});return this.f(b)};
	var ri=function(a){var b=ii(a.Da,W(a).options.authDomain).then(function(b){if(a.Ac=b)b.Ca=a.Da;return Th(a.Da)});return a.f(b)},oi=function(a){var b=W(a).options.authDomain,c=vd(ri(a).then(function(){return mi(a.ga,b)}).then(function(b){return b?(b.Ca=a.Da,b.reload().then(function(){return b}).N(function(c){return"auth/network-request-failed"==c.code?b:li(a.ga)})):null}).then(function(b){ni(a,b||null);a.jb=!0;a.ma()}),function(){if(!a.hc){a.jb=!0;var b=a.ga;b.P.addListener(ki,b.$,a.Vc)}});return a.f(c)};
	X.prototype.ye=function(){var a=this;return mi(this.ga,W(this).options.authDomain).then(function(b){if(!a.hc){var c;if(c=Z(a)&&b){c=Z(a).uid;var d=b.uid;c=void 0===c||null===c||""===c||void 0===d||null===d||""===d?!1:c==d}if(c)return Z(a).copy(b),Z(a).getToken();ni(a,b);b&&(Fh(b),b.Ca=a.Da);a.o.subscribe(a);a.ma()}})};X.prototype.Oa=function(a){var b=this.ga;return b.P.set(ki,a.C(),b.$)};X.prototype.Zd=function(){this.jb=!0;this.ma();this.Oa(Z(this))};X.prototype.Yd=function(){this.signOut()};
	var si=function(a,b){return a.f(b.then(function(b){return qi(a,b)}).then(function(){return Z(a)}))};h=X.prototype;h.fe=function(a){var b=this;this.addAuthTokenListener(function(){a.next(Z(b))})};h.onAuthStateChanged=function(a,b,c){var d=this;this.jb&&firebase.Promise.resolve().then(function(){n(a)?a(Z(d)):n(a.next)&&a.next(Z(d))});return this.ne(a,b,c)};h.getToken=function(a){var b=this,c=this.D.then(function(){return Z(b)?Z(b).getToken(a).then(function(a){return{accessToken:a}}):null});return this.f(c)};
	h.signInWithCustomToken=function(a){var b=this;return this.D.then(function(){return si(b,R(b.c,Bg,{token:a}))}).then(function(a){Lh(a,"isAnonymous",!1);return b.Oa(a)}).then(function(){return Z(b)})};h.signInWithEmailAndPassword=function(a,b){var c=this;return this.D.then(function(){return si(c,R(c.c,Nf,{email:a,password:b}))})};h.createUserWithEmailAndPassword=function(a,b){var c=this;return this.D.then(function(){return si(c,R(c.c,yg,{email:a,password:b}))})};
	h.signInWithCredential=function(a){var b=this;return this.D.then(function(){return si(b,a.Eb(b.c))})};h.signInAnonymously=function(){var a=Z(this),b=this;return a&&a.isAnonymous?I(a):this.D.then(function(){return si(b,b.c.signInAnonymously())}).then(function(a){Lh(a,"isAnonymous",!0);return b.Oa(a)}).then(function(){return Z(b)})};var W=function(a){return a.app},Z=function(a){return a.currentUser};h=X.prototype;
	h.ma=function(){for(var a=0;a<this.bb.length;a++)if(this.bb[a])this.bb[a](Z(this)&&Z(this)._lat||null)};h.addAuthTokenListener=function(a){this.bb.push(a);var b=this;this.jb&&this.D.then(function(){a(Z(b)&&Z(b)._lat||null)})};h.removeAuthTokenListener=function(a){La(this.bb,function(b){return b==a})};h["delete"]=function(){this.hc=!0;for(var a=0;a<this.R.length;a++)this.R[a].cancel("app-deleted");this.R=[];this.ga&&(a=this.ga,a.P.removeListener(ki,a.$,this.Vc));this.o&&this.o.unsubscribe(this)};
	h.f=function(a){var b=this;this.R.push(a);vd(a,function(){Ka(b.R,a)});return a};h.fetchProvidersForEmail=function(a){return this.f(gg(this.c,a))};h.verifyPasswordResetCode=function(a){return this.checkActionCode(a).then(function(a){return a.data.email})};h.confirmPasswordReset=function(a,b){return this.f(this.c.confirmPasswordReset(a,b).then(function(){}))};h.checkActionCode=function(a){return this.f(this.c.checkActionCode(a).then(function(a){return{data:{email:a.email}}}))};h.applyActionCode=function(a){return this.f(this.c.applyActionCode(a).then(function(){}))};
	h.sendPasswordResetEmail=function(a){return this.f(this.c.sendPasswordResetEmail(a).then(function(){}))};gh(X.prototype,{applyActionCode:{name:"applyActionCode",b:[T("code")]},checkActionCode:{name:"checkActionCode",b:[T("code")]},confirmPasswordReset:{name:"confirmPasswordReset",b:[T("code"),T("newPassword")]},createUserWithEmailAndPassword:{name:"createUserWithEmailAndPassword",b:[T("email"),T("password")]},fetchProvidersForEmail:{name:"fetchProvidersForEmail",b:[T("email")]},getRedirectResult:{name:"getRedirectResult",b:[]},onAuthStateChanged:{name:"onAuthStateChanged",b:[eh($g(),ah(),"nextOrObserver"),
	ah("opt_error",!0),ah("opt_completed",!0)]},sendPasswordResetEmail:{name:"sendPasswordResetEmail",b:[T("email")]},signInAnonymously:{name:"signInAnonymously",b:[]},signInWithCredential:{name:"signInWithCredential",b:[ch()]},signInWithCustomToken:{name:"signInWithCustomToken",b:[T("token")]},signInWithEmailAndPassword:{name:"signInWithEmailAndPassword",b:[T("email"),T("password")]},signInWithPopup:{name:"signInWithPopup",b:[dh()]},signInWithRedirect:{name:"signInWithRedirect",b:[dh()]},signOut:{name:"signOut",
	b:[]},toJSON:{name:"toJSON",b:[T(null,!0)]},verifyPasswordResetCode:{name:"verifyPasswordResetCode",b:[T("code")]}});
	gh(V.prototype,{"delete":{name:"delete",b:[]},getToken:{name:"getToken",b:[{name:"opt_forceRefresh",Y:"a boolean",optional:!0,Z:function(a){return"boolean"==typeof a}}]},link:{name:"link",b:[ch()]},linkWithPopup:{name:"linkWithPopup",b:[dh()]},linkWithRedirect:{name:"linkWithRedirect",b:[dh()]},reauthenticate:{name:"reauthenticate",b:[ch()]},reload:{name:"reload",b:[]},sendEmailVerification:{name:"sendEmailVerification",b:[]},toJSON:{name:"toJSON",b:[T(null,!0)]},unlink:{name:"unlink",b:[T("provider")]},
	updateEmail:{name:"updateEmail",b:[T("email")]},updatePassword:{name:"updatePassword",b:[T("password")]},updateProfile:{name:"updateProfile",b:[$g("profile")]}});gh(H.prototype,{N:{name:"catch"},then:{name:"then"}});U(Pf,"credential",function(a,b){return new Mf(a,b)},[T("email"),T("password")]);gh(If.prototype,{addScope:{name:"addScope",b:[T("scope")]}});U(If,"credential",If.credential,[eh(T(),$g(),"token")]);gh(Jf.prototype,{addScope:{name:"addScope",b:[T("scope")]}});
	U(Jf,"credential",Jf.credential,[eh(T(),$g(),"token")]);gh(Kf.prototype,{addScope:{name:"addScope",b:[T("scope")]}});U(Kf,"credential",Kf.credential,[eh(T(),eh($g(),bh()),"idToken"),eh(T(),bh(),"accessToken",!0)]);U(Lf,"credential",Lf.credential,[eh(T(),$g(),"token"),T("secret",!0)]);
	(function(){if("undefined"!==typeof firebase&&firebase.INTERNAL&&firebase.INTERNAL.registerService){var a={Auth:X,Error:Q};U(a,"EmailAuthProvider",Pf,[]);U(a,"FacebookAuthProvider",If,[]);U(a,"GithubAuthProvider",Jf,[]);U(a,"GoogleAuthProvider",Kf,[]);U(a,"TwitterAuthProvider",Lf,[]);firebase.INTERNAL.registerService("auth",function(a,c){var d=new X(a);c({INTERNAL:{getToken:q(d.getToken,d),addAuthTokenListener:q(d.addAuthTokenListener,d),removeAuthTokenListener:q(d.removeAuthTokenListener,d)}});return d},
	a);firebase.INTERNAL.registerAppHook(function(a,c){"create"===a&&c.auth()});firebase.INTERNAL.extendNamespace({User:V})}else throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");})();})();
	(function() {var g,n=this;function p(a){return void 0!==a}function aa(){}function ba(a){a.Wb=function(){return a.af?a.af:a.af=new a}}
	function ca(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
	else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function da(a){return"array"==ca(a)}function ea(a){var b=ca(a);return"array"==b||"object"==b&&"number"==typeof a.length}function q(a){return"string"==typeof a}function fa(a){return"number"==typeof a}function ga(a){return"function"==ca(a)}function ha(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ia(a,b,c){return a.call.apply(a.bind,arguments)}
	function ja(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function r(a,b,c){r=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ia:ja;return r.apply(null,arguments)}
	function ka(a,b){function c(){}c.prototype=b.prototype;a.Fg=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Cg=function(a,c,f){for(var h=Array(arguments.length-2),k=2;k<arguments.length;k++)h[k-2]=arguments[k];return b.prototype[c].apply(a,h)}};function t(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function la(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c}function ma(a,b){for(var c in a)if(!b.call(void 0,a[c],c,a))return!1;return!0}function na(a){var b=0,c;for(c in a)b++;return b}function oa(a){for(var b in a)return b}function pa(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function qa(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}function ra(a,b){for(var c in a)if(a[c]==b)return!0;return!1}
	function sa(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d}function ta(a,b){var c=sa(a,b,void 0);return c&&a[c]}function ua(a){for(var b in a)return!1;return!0}function va(a){var b={},c;for(c in a)b[c]=a[c];return b};function wa(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}function xa(){this.Fd=void 0}
	function ya(a,b,c){switch(typeof b){case "string":za(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(da(b)){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),e=b[f],ya(a,a.Fd?a.Fd.call(b,String(f),e):e,c),e=",";c.push("]");break}c.push("{");d="";for(f in b)Object.prototype.hasOwnProperty.call(b,f)&&(e=b[f],"function"!=typeof e&&(c.push(d),za(f,c),
	c.push(":"),ya(a,a.Fd?a.Fd.call(b,f,e):e,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}}var Aa={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Ba=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;
	function za(a,b){b.push('"',a.replace(Ba,function(a){if(a in Aa)return Aa[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return Aa[a]=e+b.toString(16)}),'"')};var v;a:{var Ca=n.navigator;if(Ca){var Da=Ca.userAgent;if(Da){v=Da;break a}}v=""};function Ea(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ea);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}ka(Ea,Error);Ea.prototype.name="CustomError";var w=Array.prototype,Fa=w.indexOf?function(a,b,c){return w.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(q(a))return q(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Ga=w.forEach?function(a,b,c){w.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ha=w.filter?function(a,b,c){return w.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,h=q(a)?
	a.split(""):a,k=0;k<d;k++)if(k in h){var m=h[k];b.call(c,m,k,a)&&(e[f++]=m)}return e},Ia=w.map?function(a,b,c){return w.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=q(a)?a.split(""):a,h=0;h<d;h++)h in f&&(e[h]=b.call(c,f[h],h,a));return e},Ja=w.reduce?function(a,b,c,d){for(var e=[],f=1,h=arguments.length;f<h;f++)e.push(arguments[f]);d&&(e[0]=r(b,d));return w.reduce.apply(a,e)}:function(a,b,c,d){var e=c;Ga(a,function(c,h){e=b.call(d,e,c,h,a)});return e},Ka=w.every?function(a,b,
	c){return w.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;return!0};function La(a,b){var c=Ma(a,b,void 0);return 0>c?null:q(a)?a.charAt(c):a[c]}function Ma(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}function Na(a,b){var c=Fa(a,b);0<=c&&w.splice.call(a,c,1)}function Oa(a,b,c){return 2>=arguments.length?w.slice.call(a,b):w.slice.call(a,b,c)}
	function Pa(a,b){a.sort(b||Qa)}function Qa(a,b){return a>b?1:a<b?-1:0};var Ra=-1!=v.indexOf("Opera")||-1!=v.indexOf("OPR"),Sa=-1!=v.indexOf("Trident")||-1!=v.indexOf("MSIE"),Ta=-1!=v.indexOf("Gecko")&&-1==v.toLowerCase().indexOf("webkit")&&!(-1!=v.indexOf("Trident")||-1!=v.indexOf("MSIE")),Ua=-1!=v.toLowerCase().indexOf("webkit");
	(function(){var a="",b;if(Ra&&n.opera)return a=n.opera.version,ga(a)?a():a;Ta?b=/rv\:([^\);]+)(\)|;)/:Sa?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:Ua&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(v))?a[1]:"");return Sa&&(b=(b=n.document)?b.documentMode:void 0,b>parseFloat(a))?String(b):a})();function Va(a){n.setTimeout(function(){throw a;},0)}var Wa;
	function Xa(){var a=n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==v.indexOf("Presto")&&(a=function(){var a=document.createElement("iframe");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=r(function(a){if(("*"==d||a.origin==
	d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&-1==v.indexOf("Trident")&&-1==v.indexOf("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(p(c.next)){c=c.next;var a=c.Le;c.Le=null;a()}};return function(a){d.next={Le:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("script")?function(a){var b=
	document.createElement("script");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){n.setTimeout(a,0)}};function Ya(a,b){Za||$a();ab||(Za(),ab=!0);bb.push(new cb(a,b))}var Za;function $a(){if(n.Promise&&n.Promise.resolve){var a=n.Promise.resolve();Za=function(){a.then(db)}}else Za=function(){var a=db;!ga(n.setImmediate)||n.Window&&n.Window.prototype&&n.Window.prototype.setImmediate==n.setImmediate?(Wa||(Wa=Xa()),Wa(a)):n.setImmediate(a)}}var ab=!1,bb=[];[].push(function(){ab=!1;bb=[]});
	function db(){for(;bb.length;){var a=bb;bb=[];for(var b=0;b<a.length;b++){var c=a[b];try{c.Vf.call(c.scope)}catch(d){Va(d)}}}ab=!1}function cb(a,b){this.Vf=a;this.scope=b};function eb(a,b){this.L=fb;this.tf=void 0;this.Ca=this.Ha=null;this.jd=this.be=!1;if(a==gb)hb(this,ib,b);else try{var c=this;a.call(b,function(a){hb(c,ib,a)},function(a){if(!(a instanceof jb))try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(b){}hb(c,kb,a)})}catch(d){hb(this,kb,d)}}var fb=0,ib=2,kb=3;function gb(){}eb.prototype.then=function(a,b,c){return lb(this,ga(a)?a:null,ga(b)?b:null,c)};eb.prototype.then=eb.prototype.then;eb.prototype.$goog_Thenable=!0;g=eb.prototype;
	g.yg=function(a,b){return lb(this,null,a,b)};g.cancel=function(a){this.L==fb&&Ya(function(){var b=new jb(a);mb(this,b)},this)};function mb(a,b){if(a.L==fb)if(a.Ha){var c=a.Ha;if(c.Ca){for(var d=0,e=-1,f=0,h;h=c.Ca[f];f++)if(h=h.m)if(d++,h==a&&(e=f),0<=e&&1<d)break;0<=e&&(c.L==fb&&1==d?mb(c,b):(d=c.Ca.splice(e,1)[0],nb(c,d,kb,b)))}a.Ha=null}else hb(a,kb,b)}function ob(a,b){a.Ca&&a.Ca.length||a.L!=ib&&a.L!=kb||pb(a);a.Ca||(a.Ca=[]);a.Ca.push(b)}
	function lb(a,b,c,d){var e={m:null,gf:null,jf:null};e.m=new eb(function(a,h){e.gf=b?function(c){try{var e=b.call(d,c);a(e)}catch(l){h(l)}}:a;e.jf=c?function(b){try{var e=c.call(d,b);!p(e)&&b instanceof jb?h(b):a(e)}catch(l){h(l)}}:h});e.m.Ha=a;ob(a,e);return e.m}g.Bf=function(a){this.L=fb;hb(this,ib,a)};g.Cf=function(a){this.L=fb;hb(this,kb,a)};
	function hb(a,b,c){if(a.L==fb){if(a==c)b=kb,c=new TypeError("Promise cannot resolve to itself");else{var d;if(c)try{d=!!c.$goog_Thenable}catch(e){d=!1}else d=!1;if(d){a.L=1;c.then(a.Bf,a.Cf,a);return}if(ha(c))try{var f=c.then;if(ga(f)){qb(a,c,f);return}}catch(h){b=kb,c=h}}a.tf=c;a.L=b;a.Ha=null;pb(a);b!=kb||c instanceof jb||rb(a,c)}}function qb(a,b,c){function d(b){f||(f=!0,a.Cf(b))}function e(b){f||(f=!0,a.Bf(b))}a.L=1;var f=!1;try{c.call(b,e,d)}catch(h){d(h)}}
	function pb(a){a.be||(a.be=!0,Ya(a.Tf,a))}g.Tf=function(){for(;this.Ca&&this.Ca.length;){var a=this.Ca;this.Ca=null;for(var b=0;b<a.length;b++)nb(this,a[b],this.L,this.tf)}this.be=!1};function nb(a,b,c,d){if(c==ib)b.gf(d);else{if(b.m)for(;a&&a.jd;a=a.Ha)a.jd=!1;b.jf(d)}}function rb(a,b){a.jd=!0;Ya(function(){a.jd&&sb.call(null,b)})}var sb=Va;function jb(a){Ea.call(this,a)}ka(jb,Ea);jb.prototype.name="cancel";var tb=null,ub=null,vb=null;function wb(a,b){if(!ea(a))throw Error("encodeByteArray takes an array as a parameter");xb();for(var c=b?ub:tb,d=[],e=0;e<a.length;e+=3){var f=a[e],h=e+1<a.length,k=h?a[e+1]:0,m=e+2<a.length,l=m?a[e+2]:0,u=f>>2,f=(f&3)<<4|k>>4,k=(k&15)<<2|l>>6,l=l&63;m||(l=64,h||(k=64));d.push(c[u],c[f],c[k],c[l])}return d.join("")}
	function xb(){if(!tb){tb={};ub={};vb={};for(var a=0;65>a;a++)tb[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),ub[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a),vb[ub[a]]=a,62<=a&&(vb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a)]=a)}};function yb(){this.Ya=-1};function zb(){this.Ya=-1;this.Ya=64;this.N=[];this.Wd=[];this.If=[];this.zd=[];this.zd[0]=128;for(var a=1;a<this.Ya;++a)this.zd[a]=0;this.Pd=this.ac=0;this.reset()}ka(zb,yb);zb.prototype.reset=function(){this.N[0]=1732584193;this.N[1]=4023233417;this.N[2]=2562383102;this.N[3]=271733878;this.N[4]=3285377520;this.Pd=this.ac=0};
	function Ab(a,b,c){c||(c=0);var d=a.If;if(q(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.N[0];c=a.N[1];for(var h=a.N[2],k=a.N[3],m=a.N[4],l,e=0;80>e;e++)40>e?20>e?(f=k^c&(h^k),l=1518500249):(f=c^h^k,l=1859775393):60>e?(f=c&h|k&(c|h),l=2400959708):(f=c^h^k,l=3395469782),f=(b<<
	5|b>>>27)+f+m+l+d[e]&4294967295,m=k,k=h,h=(c<<30|c>>>2)&4294967295,c=b,b=f;a.N[0]=a.N[0]+b&4294967295;a.N[1]=a.N[1]+c&4294967295;a.N[2]=a.N[2]+h&4294967295;a.N[3]=a.N[3]+k&4294967295;a.N[4]=a.N[4]+m&4294967295}
	zb.prototype.update=function(a,b){if(null!=a){p(b)||(b=a.length);for(var c=b-this.Ya,d=0,e=this.Wd,f=this.ac;d<b;){if(0==f)for(;d<=c;)Ab(this,a,d),d+=this.Ya;if(q(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.Ya){Ab(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.Ya){Ab(this,e);f=0;break}}this.ac=f;this.Pd+=b}};function x(a,b,c,d){var e;d<b?e="at least "+b:d>c&&(e=0===c?"none":"no more than "+c);if(e)throw Error(a+" failed: Was called with "+d+(1===d?" argument.":" arguments.")+" Expects "+e+".");}function Bb(a,b,c){var d="";switch(b){case 1:d=c?"first":"First";break;case 2:d=c?"second":"Second";break;case 3:d=c?"third":"Third";break;case 4:d=c?"fourth":"Fourth";break;default:throw Error("errorPrefix called with argumentNumber > 4.  Need to update it?");}return a=a+" failed: "+(d+" argument ")}
	function y(a,b,c,d){if((!d||p(c))&&!ga(c))throw Error(Bb(a,b,d)+"must be a valid function.");}function Cb(a,b,c){if(p(c)&&(!ha(c)||null===c))throw Error(Bb(a,b,!0)+"must be a valid context object.");};var Db=n.Promise||eb;eb.prototype["catch"]=eb.prototype.yg;function Eb(){var a=this;this.reject=this.resolve=null;this.ra=new Db(function(b,c){a.resolve=b;a.reject=c})}function Fb(a,b){return function(c,d){c?a.reject(c):a.resolve(d);ga(b)&&(Gb(a.ra),1===b.length?b(c):b(c,d))}}function Gb(a){a.then(void 0,aa)};function Hb(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function A(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]}function Ib(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])};function Jb(a){var b=[];Ib(a,function(a,d){da(d)?Ga(d,function(d){b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))}):b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))});return b.length?"&"+b.join("&"):""};function Kb(a){return"undefined"!==typeof JSON&&p(JSON.parse)?JSON.parse(a):wa(a)}function B(a){if("undefined"!==typeof JSON&&p(JSON.stringify))a=JSON.stringify(a);else{var b=[];ya(new xa,a,b);a=b.join("")}return a};function Lb(a,b){if(!a)throw Mb(b);}function Mb(a){return Error("Firebase Database ("+firebase.SDK_VERSION+") INTERNAL ASSERT FAILED: "+a)};function Nb(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);55296<=e&&56319>=e&&(e-=55296,d++,Lb(d<a.length,"Surrogate pair missing trail surrogate."),e=65536+(e<<10)+(a.charCodeAt(d)-56320));128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(65536>e?b[c++]=e>>12|224:(b[c++]=e>>18|240,b[c++]=e>>12&63|128),b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}function Ob(a){for(var b=0,c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b++:2048>d?b+=2:55296<=d&&56319>=d?(b+=4,c++):b+=3}return b};function Pb(){return"undefined"!==typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test("undefined"!==typeof navigator&&"string"===typeof navigator.userAgent?navigator.userAgent:"")};function Qb(a){this.te=a;this.Bd=[];this.Rb=0;this.Yd=-1;this.Gb=null}function Rb(a,b,c){a.Yd=b;a.Gb=c;a.Yd<a.Rb&&(a.Gb(),a.Gb=null)}function Sb(a,b,c){for(a.Bd[b]=c;a.Bd[a.Rb];){var d=a.Bd[a.Rb];delete a.Bd[a.Rb];for(var e=0;e<d.length;++e)if(d[e]){var f=a;Tb(function(){f.te(d[e])})}if(a.Rb===a.Yd){a.Gb&&(clearTimeout(a.Gb),a.Gb(),a.Gb=null);break}a.Rb++}};function Ub(){this.qc={}}Ub.prototype.set=function(a,b){null==b?delete this.qc[a]:this.qc[a]=b};Ub.prototype.get=function(a){return Hb(this.qc,a)?this.qc[a]:null};Ub.prototype.remove=function(a){delete this.qc[a]};Ub.prototype.bf=!0;function Vb(a){this.vc=a;this.Cd="firebase:"}g=Vb.prototype;g.set=function(a,b){null==b?this.vc.removeItem(this.Cd+a):this.vc.setItem(this.Cd+a,B(b))};g.get=function(a){a=this.vc.getItem(this.Cd+a);return null==a?null:Kb(a)};g.remove=function(a){this.vc.removeItem(this.Cd+a)};g.bf=!1;g.toString=function(){return this.vc.toString()};function Wb(a){try{if("undefined"!==typeof window&&"undefined"!==typeof window[a]){var b=window[a];b.setItem("firebase:sentinel","cache");b.removeItem("firebase:sentinel");return new Vb(b)}}catch(c){}return new Ub}var Xb=Wb("localStorage"),Yb=Wb("sessionStorage");function Zb(a,b){this.type=$b;this.source=a;this.path=b}Zb.prototype.Nc=function(){return this.path.e()?new Zb(this.source,C):new Zb(this.source,D(this.path))};Zb.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" listen_complete)"};function ac(a,b,c){this.type=bc;this.source=a;this.path=b;this.Ja=c}ac.prototype.Nc=function(a){return this.path.e()?new ac(this.source,C,this.Ja.R(a)):new ac(this.source,D(this.path),this.Ja)};ac.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" overwrite: "+this.Ja.toString()+")"};function cc(a,b,c,d,e){this.host=a.toLowerCase();this.domain=this.host.substr(this.host.indexOf(".")+1);this.Sc=b;this.pe=c;this.Ag=d;this.mf=e||"";this.bb=Xb.get("host:"+a)||this.host}function dc(a,b){b!==a.bb&&(a.bb=b,"s-"===a.bb.substr(0,2)&&Xb.set("host:"+a.host,a.bb))}
	function ec(a,b,c){E("string"===typeof b,"typeof type must == string");E("object"===typeof c,"typeof params must == object");if("websocket"===b)b=(a.Sc?"wss://":"ws://")+a.bb+"/.ws?";else if("long_polling"===b)b=(a.Sc?"https://":"http://")+a.bb+"/.lp?";else throw Error("Unknown connection type: "+b);a.host!==a.bb&&(c.ns=a.pe);var d=[];t(c,function(a,b){d.push(b+"="+a)});return b+d.join("&")}
	cc.prototype.toString=function(){var a=(this.Sc?"https://":"http://")+this.host;this.mf&&(a+="<"+this.mf+">");return a};function fc(){this.Jd=F}fc.prototype.j=function(a){return this.Jd.Q(a)};fc.prototype.toString=function(){return this.Jd.toString()};function H(a,b,c,d){this.type=a;this.Ma=b;this.Za=c;this.qe=d;this.Dd=void 0}function gc(a){return new H(hc,a)}var hc="value";function ic(a,b,c,d){this.ae=b;this.Md=c;this.Dd=d;this.gd=a}ic.prototype.Zb=function(){var a=this.Md.xb();return"value"===this.gd?a.path:a.getParent().path};ic.prototype.ge=function(){return this.gd};ic.prototype.Ub=function(){return this.ae.Ub(this)};ic.prototype.toString=function(){return this.Zb().toString()+":"+this.gd+":"+B(this.Md.Te())};function jc(a,b,c){this.ae=a;this.error=b;this.path=c}jc.prototype.Zb=function(){return this.path};jc.prototype.ge=function(){return"cancel"};
	jc.prototype.Ub=function(){return this.ae.Ub(this)};jc.prototype.toString=function(){return this.path.toString()+":cancel"};function kc(){}kc.prototype.We=function(){return null};kc.prototype.fe=function(){return null};var lc=new kc;function mc(a,b,c){this.Ff=a;this.Na=b;this.yd=c}mc.prototype.We=function(a){var b=this.Na.O;if(nc(b,a))return b.j().R(a);b=null!=this.yd?new oc(this.yd,!0,!1):this.Na.u();return this.Ff.rc(a,b)};mc.prototype.fe=function(a,b,c){var d=null!=this.yd?this.yd:pc(this.Na);a=this.Ff.Xd(d,b,1,c,a);return 0===a.length?null:a[0]};function qc(){this.wb=[]}function rc(a,b){for(var c=null,d=0;d<b.length;d++){var e=b[d],f=e.Zb();null===c||f.ca(c.Zb())||(a.wb.push(c),c=null);null===c&&(c=new sc(f));c.add(e)}c&&a.wb.push(c)}function tc(a,b,c){rc(a,c);uc(a,function(a){return a.ca(b)})}function vc(a,b,c){rc(a,c);uc(a,function(a){return a.contains(b)||b.contains(a)})}
	function uc(a,b){for(var c=!0,d=0;d<a.wb.length;d++){var e=a.wb[d];if(e)if(e=e.Zb(),b(e)){for(var e=a.wb[d],f=0;f<e.hd.length;f++){var h=e.hd[f];if(null!==h){e.hd[f]=null;var k=h.Ub();wc&&I("event: "+h.toString());Tb(k)}}a.wb[d]=null}else c=!1}c&&(a.wb=[])}function sc(a){this.qa=a;this.hd=[]}sc.prototype.add=function(a){this.hd.push(a)};sc.prototype.Zb=function(){return this.qa};function oc(a,b,c){this.A=a;this.ea=b;this.Tb=c}function xc(a){return a.ea}function yc(a){return a.Tb}function zc(a,b){return b.e()?a.ea&&!a.Tb:nc(a,J(b))}function nc(a,b){return a.ea&&!a.Tb||a.A.Fa(b)}oc.prototype.j=function(){return this.A};function Ac(a,b){this.Oa=a;this.ba=b?b:Bc}g=Ac.prototype;g.Ra=function(a,b){return new Ac(this.Oa,this.ba.Ra(a,b,this.Oa).Y(null,null,!1,null,null))};g.remove=function(a){return new Ac(this.Oa,this.ba.remove(a,this.Oa).Y(null,null,!1,null,null))};g.get=function(a){for(var b,c=this.ba;!c.e();){b=this.Oa(a,c.key);if(0===b)return c.value;0>b?c=c.left:0<b&&(c=c.right)}return null};
	function Cc(a,b){for(var c,d=a.ba,e=null;!d.e();){c=a.Oa(b,d.key);if(0===c){if(d.left.e())return e?e.key:null;for(d=d.left;!d.right.e();)d=d.right;return d.key}0>c?d=d.left:0<c&&(e=d,d=d.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?");}g.e=function(){return this.ba.e()};g.count=function(){return this.ba.count()};g.Hc=function(){return this.ba.Hc()};g.fc=function(){return this.ba.fc()};g.ia=function(a){return this.ba.ia(a)};
	g.Xb=function(a){return new Dc(this.ba,null,this.Oa,!1,a)};g.Yb=function(a,b){return new Dc(this.ba,a,this.Oa,!1,b)};g.$b=function(a,b){return new Dc(this.ba,a,this.Oa,!0,b)};g.Ze=function(a){return new Dc(this.ba,null,this.Oa,!0,a)};function Dc(a,b,c,d,e){this.Hd=e||null;this.le=d;this.Sa=[];for(e=1;!a.e();)if(e=b?c(a.key,b):1,d&&(e*=-1),0>e)a=this.le?a.left:a.right;else if(0===e){this.Sa.push(a);break}else this.Sa.push(a),a=this.le?a.right:a.left}
	function K(a){if(0===a.Sa.length)return null;var b=a.Sa.pop(),c;c=a.Hd?a.Hd(b.key,b.value):{key:b.key,value:b.value};if(a.le)for(b=b.left;!b.e();)a.Sa.push(b),b=b.right;else for(b=b.right;!b.e();)a.Sa.push(b),b=b.left;return c}function Ec(a){if(0===a.Sa.length)return null;var b;b=a.Sa;b=b[b.length-1];return a.Hd?a.Hd(b.key,b.value):{key:b.key,value:b.value}}function Fc(a,b,c,d,e){this.key=a;this.value=b;this.color=null!=c?c:!0;this.left=null!=d?d:Bc;this.right=null!=e?e:Bc}g=Fc.prototype;
	g.Y=function(a,b,c,d,e){return new Fc(null!=a?a:this.key,null!=b?b:this.value,null!=c?c:this.color,null!=d?d:this.left,null!=e?e:this.right)};g.count=function(){return this.left.count()+1+this.right.count()};g.e=function(){return!1};g.ia=function(a){return this.left.ia(a)||a(this.key,this.value)||this.right.ia(a)};function Gc(a){return a.left.e()?a:Gc(a.left)}g.Hc=function(){return Gc(this).key};g.fc=function(){return this.right.e()?this.key:this.right.fc()};
	g.Ra=function(a,b,c){var d,e;e=this;d=c(a,e.key);e=0>d?e.Y(null,null,null,e.left.Ra(a,b,c),null):0===d?e.Y(null,b,null,null,null):e.Y(null,null,null,null,e.right.Ra(a,b,c));return Hc(e)};function Ic(a){if(a.left.e())return Bc;a.left.fa()||a.left.left.fa()||(a=Jc(a));a=a.Y(null,null,null,Ic(a.left),null);return Hc(a)}
	g.remove=function(a,b){var c,d;c=this;if(0>b(a,c.key))c.left.e()||c.left.fa()||c.left.left.fa()||(c=Jc(c)),c=c.Y(null,null,null,c.left.remove(a,b),null);else{c.left.fa()&&(c=Kc(c));c.right.e()||c.right.fa()||c.right.left.fa()||(c=Lc(c),c.left.left.fa()&&(c=Kc(c),c=Lc(c)));if(0===b(a,c.key)){if(c.right.e())return Bc;d=Gc(c.right);c=c.Y(d.key,d.value,null,null,Ic(c.right))}c=c.Y(null,null,null,null,c.right.remove(a,b))}return Hc(c)};g.fa=function(){return this.color};
	function Hc(a){a.right.fa()&&!a.left.fa()&&(a=Mc(a));a.left.fa()&&a.left.left.fa()&&(a=Kc(a));a.left.fa()&&a.right.fa()&&(a=Lc(a));return a}function Jc(a){a=Lc(a);a.right.left.fa()&&(a=a.Y(null,null,null,null,Kc(a.right)),a=Mc(a),a=Lc(a));return a}function Mc(a){return a.right.Y(null,null,a.color,a.Y(null,null,!0,null,a.right.left),null)}function Kc(a){return a.left.Y(null,null,a.color,null,a.Y(null,null,!0,a.left.right,null))}
	function Lc(a){return a.Y(null,null,!a.color,a.left.Y(null,null,!a.left.color,null,null),a.right.Y(null,null,!a.right.color,null,null))}function Nc(){}g=Nc.prototype;g.Y=function(){return this};g.Ra=function(a,b){return new Fc(a,b,null)};g.remove=function(){return this};g.count=function(){return 0};g.e=function(){return!0};g.ia=function(){return!1};g.Hc=function(){return null};g.fc=function(){return null};g.fa=function(){return!1};var Bc=new Nc;var Oc=function(){var a=1;return function(){return a++}}(),E=Lb,Pc=Mb;
	function Qc(a){try{var b;if("undefined"!==typeof atob)b=atob(a);else{xb();for(var c=vb,d=[],e=0;e<a.length;){var f=c[a.charAt(e++)],h=e<a.length?c[a.charAt(e)]:0;++e;var k=e<a.length?c[a.charAt(e)]:64;++e;var m=e<a.length?c[a.charAt(e)]:64;++e;if(null==f||null==h||null==k||null==m)throw Error();d.push(f<<2|h>>4);64!=k&&(d.push(h<<4&240|k>>2),64!=m&&d.push(k<<6&192|m))}if(8192>d.length)b=String.fromCharCode.apply(null,d);else{a="";for(c=0;c<d.length;c+=8192)a+=String.fromCharCode.apply(null,Oa(d,c,
	c+8192));b=a}}return b}catch(l){I("base64Decode failed: ",l)}return null}function Rc(a){var b=Nb(a);a=new zb;a.update(b);var b=[],c=8*a.Pd;56>a.ac?a.update(a.zd,56-a.ac):a.update(a.zd,a.Ya-(a.ac-56));for(var d=a.Ya-1;56<=d;d--)a.Wd[d]=c&255,c/=256;Ab(a,a.Wd);for(d=c=0;5>d;d++)for(var e=24;0<=e;e-=8)b[c]=a.N[d]>>e&255,++c;return wb(b)}
	function Sc(a){for(var b="",c=0;c<arguments.length;c++)b=ea(arguments[c])?b+Sc.apply(null,arguments[c]):"object"===typeof arguments[c]?b+B(arguments[c]):b+arguments[c],b+=" ";return b}var wc=null,Tc=!0;
	function Uc(a,b){Lb(!b||!0===a||!1===a,"Can't turn on custom loggers persistently.");!0===a?("undefined"!==typeof console&&("function"===typeof console.log?wc=r(console.log,console):"object"===typeof console.log&&(wc=function(a){console.log(a)})),b&&Yb.set("logging_enabled",!0)):ga(a)?wc=a:(wc=null,Yb.remove("logging_enabled"))}function I(a){!0===Tc&&(Tc=!1,null===wc&&!0===Yb.get("logging_enabled")&&Uc(!0));if(wc){var b=Sc.apply(null,arguments);wc(b)}}
	function Vc(a){return function(){I(a,arguments)}}function Wc(a){if("undefined"!==typeof console){var b="FIREBASE INTERNAL ERROR: "+Sc.apply(null,arguments);"undefined"!==typeof console.error?console.error(b):console.log(b)}}function Xc(a){var b=Sc.apply(null,arguments);throw Error("FIREBASE FATAL ERROR: "+b);}function L(a){if("undefined"!==typeof console){var b="FIREBASE WARNING: "+Sc.apply(null,arguments);"undefined"!==typeof console.warn?console.warn(b):console.log(b)}}
	function Yc(a){var b,c,d,e,f,h=a;f=c=a=b="";d=!0;e="https";if(q(h)){var k=h.indexOf("//");0<=k&&(e=h.substring(0,k-1),h=h.substring(k+2));k=h.indexOf("/");-1===k&&(k=h.length);b=h.substring(0,k);f="";h=h.substring(k).split("/");for(k=0;k<h.length;k++)if(0<h[k].length){var m=h[k];try{m=decodeURIComponent(m.replace(/\+/g," "))}catch(l){}f+="/"+m}h=b.split(".");3===h.length?(a=h[1],c=h[0].toLowerCase()):2===h.length&&(a=h[0]);k=b.indexOf(":");0<=k&&(d="https"===e||"wss"===e)}"firebase"===a&&Xc(b+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead");
	c&&"undefined"!=c||Xc("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com");d||"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&L("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");return{kc:new cc(b,d,c,"ws"===e||"wss"===e),path:new M(f)}}function Zc(a){return fa(a)&&(a!=a||a==Number.POSITIVE_INFINITY||a==Number.NEGATIVE_INFINITY)}
	function $c(a){if("complete"===document.readyState)a();else{var b=!1,c=function(){document.body?b||(b=!0,a()):setTimeout(c,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",c,!1),window.addEventListener("load",c,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&c()}),window.attachEvent("onload",c))}}
	function ad(a,b){if(a===b)return 0;if("[MIN_NAME]"===a||"[MAX_NAME]"===b)return-1;if("[MIN_NAME]"===b||"[MAX_NAME]"===a)return 1;var c=bd(a),d=bd(b);return null!==c?null!==d?0==c-d?a.length-b.length:c-d:-1:null!==d?1:a<b?-1:1}function cd(a,b){if(b&&a in b)return b[a];throw Error("Missing required key ("+a+") in object: "+B(b));}
	function dd(a){if("object"!==typeof a||null===a)return B(a);var b=[],c;for(c in a)b.push(c);b.sort();c="{";for(var d=0;d<b.length;d++)0!==d&&(c+=","),c+=B(b[d]),c+=":",c+=dd(a[b[d]]);return c+"}"}function ed(a,b){if(a.length<=b)return[a];for(var c=[],d=0;d<a.length;d+=b)d+b>a?c.push(a.substring(d,a.length)):c.push(a.substring(d,d+b));return c}function fd(a,b){if(da(a))for(var c=0;c<a.length;++c)b(c,a[c]);else t(a,b)}
	function gd(a){E(!Zc(a),"Invalid JSON number");var b,c,d,e;0===a?(d=c=0,b=-Infinity===1/a?1:0):(b=0>a,a=Math.abs(a),a>=Math.pow(2,-1022)?(d=Math.min(Math.floor(Math.log(a)/Math.LN2),1023),c=d+1023,d=Math.round(a*Math.pow(2,52-d)-Math.pow(2,52))):(c=0,d=Math.round(a/Math.pow(2,-1074))));e=[];for(a=52;a;--a)e.push(d%2?1:0),d=Math.floor(d/2);for(a=11;a;--a)e.push(c%2?1:0),c=Math.floor(c/2);e.push(b?1:0);e.reverse();b=e.join("");c="";for(a=0;64>a;a+=8)d=parseInt(b.substr(a,8),2).toString(16),1===d.length&&
	(d="0"+d),c+=d;return c.toLowerCase()}var hd=/^-?\d{1,10}$/;function bd(a){return hd.test(a)&&(a=Number(a),-2147483648<=a&&2147483647>=a)?a:null}function Tb(a){try{a()}catch(b){setTimeout(function(){L("Exception was thrown by user callback.",b.stack||"");throw b;},Math.floor(0))}}function id(a,b,c){Object.defineProperty(a,b,{get:c})};function jd(a){var b={};try{var c=a.split(".");Kb(Qc(c[0])||"");b=Kb(Qc(c[1])||"");delete b.d}catch(d){}a=b;return"object"===typeof a&&!0===A(a,"admin")};function kd(a,b,c){this.type=ld;this.source=a;this.path=b;this.children=c}kd.prototype.Nc=function(a){if(this.path.e())return a=this.children.subtree(new M(a)),a.e()?null:a.value?new ac(this.source,C,a.value):new kd(this.source,C,a);E(J(this.path)===a,"Can't get a merge for a child not on the path of the operation");return new kd(this.source,D(this.path),this.children)};kd.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"};function md(a){this.g=a}g=md.prototype;g.F=function(a,b,c,d,e,f){E(a.zc(this.g),"A node must be indexed if only a child is updated");e=a.R(b);if(e.Q(d).ca(c.Q(d))&&e.e()==c.e())return a;null!=f&&(c.e()?a.Fa(b)?nd(f,new H("child_removed",e,b)):E(a.J(),"A child remove without an old child only makes sense on a leaf node"):e.e()?nd(f,new H("child_added",c,b)):nd(f,new H("child_changed",c,b,e)));return a.J()&&c.e()?a:a.U(b,c).ob(this.g)};
	g.za=function(a,b,c){null!=c&&(a.J()||a.P(N,function(a,e){b.Fa(a)||nd(c,new H("child_removed",e,a))}),b.J()||b.P(N,function(b,e){if(a.Fa(b)){var f=a.R(b);f.ca(e)||nd(c,new H("child_changed",e,b,f))}else nd(c,new H("child_added",e,b))}));return b.ob(this.g)};g.ga=function(a,b){return a.e()?F:a.ga(b)};g.Qa=function(){return!1};g.Vb=function(){return this};function od(a){this.he=new md(a.g);this.g=a.g;var b;a.ka?(b=pd(a),b=a.g.Fc(qd(a),b)):b=a.g.Ic();this.Uc=b;a.na?(b=rd(a),a=a.g.Fc(sd(a),b)):a=a.g.Gc();this.wc=a}g=od.prototype;g.matches=function(a){return 0>=this.g.compare(this.Uc,a)&&0>=this.g.compare(a,this.wc)};g.F=function(a,b,c,d,e,f){this.matches(new O(b,c))||(c=F);return this.he.F(a,b,c,d,e,f)};
	g.za=function(a,b,c){b.J()&&(b=F);var d=b.ob(this.g),d=d.ga(F),e=this;b.P(N,function(a,b){e.matches(new O(a,b))||(d=d.U(a,F))});return this.he.za(a,d,c)};g.ga=function(a){return a};g.Qa=function(){return!0};g.Vb=function(){return this.he};function td(){this.hb={}}
	function nd(a,b){var c=b.type,d=b.Za;E("child_added"==c||"child_changed"==c||"child_removed"==c,"Only child changes supported for tracking");E(".priority"!==d,"Only non-priority child changes can be tracked.");var e=A(a.hb,d);if(e){var f=e.type;if("child_added"==c&&"child_removed"==f)a.hb[d]=new H("child_changed",b.Ma,d,e.Ma);else if("child_removed"==c&&"child_added"==f)delete a.hb[d];else if("child_removed"==c&&"child_changed"==f)a.hb[d]=new H("child_removed",e.qe,d);else if("child_changed"==c&&
	"child_added"==f)a.hb[d]=new H("child_added",b.Ma,d);else if("child_changed"==c&&"child_changed"==f)a.hb[d]=new H("child_changed",b.Ma,d,e.qe);else throw Pc("Illegal combination of changes: "+b+" occurred after "+e);}else a.hb[d]=b};function ud(a,b){this.Sd=a;this.Lf=b}function vd(a){this.V=a}
	vd.prototype.gb=function(a,b,c,d){var e=new td,f;if(b.type===bc)b.source.ee?c=wd(this,a,b.path,b.Ja,c,d,e):(E(b.source.Ve,"Unknown source."),f=b.source.Ee||yc(a.u())&&!b.path.e(),c=xd(this,a,b.path,b.Ja,c,d,f,e));else if(b.type===ld)b.source.ee?c=yd(this,a,b.path,b.children,c,d,e):(E(b.source.Ve,"Unknown source."),f=b.source.Ee||yc(a.u()),c=zd(this,a,b.path,b.children,c,d,f,e));else if(b.type===Ad)if(b.Id)if(b=b.path,null!=c.mc(b))c=a;else{f=new mc(c,a,d);d=a.O.j();if(b.e()||".priority"===J(b))xc(a.u())?
	b=c.Ba(pc(a)):(b=a.u().j(),E(b instanceof P,"serverChildren would be complete if leaf node"),b=c.sc(b)),b=this.V.za(d,b,e);else{var h=J(b),k=c.rc(h,a.u());null==k&&nc(a.u(),h)&&(k=d.R(h));b=null!=k?this.V.F(d,h,k,D(b),f,e):a.O.j().Fa(h)?this.V.F(d,h,F,D(b),f,e):d;b.e()&&xc(a.u())&&(d=c.Ba(pc(a)),d.J()&&(b=this.V.za(b,d,e)))}d=xc(a.u())||null!=c.mc(C);c=Cd(a,b,d,this.V.Qa())}else c=Dd(this,a,b.path,b.Pb,c,d,e);else if(b.type===$b)d=b.path,b=a.u(),f=b.j(),h=b.ea||d.e(),c=Ed(this,new Fd(a.O,new oc(f,
	h,b.Tb)),d,c,lc,e);else throw Pc("Unknown operation type: "+b.type);e=pa(e.hb);d=c;b=d.O;b.ea&&(f=b.j().J()||b.j().e(),h=Gd(a),(0<e.length||!a.O.ea||f&&!b.j().ca(h)||!b.j().C().ca(h.C()))&&e.push(gc(Gd(d))));return new ud(c,e)};
	function Ed(a,b,c,d,e,f){var h=b.O;if(null!=d.mc(c))return b;var k;if(c.e())E(xc(b.u()),"If change path is empty, we must have complete server data"),yc(b.u())?(e=pc(b),d=d.sc(e instanceof P?e:F)):d=d.Ba(pc(b)),f=a.V.za(b.O.j(),d,f);else{var m=J(c);if(".priority"==m)E(1==Hd(c),"Can't have a priority with additional path components"),f=h.j(),k=b.u().j(),d=d.$c(c,f,k),f=null!=d?a.V.ga(f,d):h.j();else{var l=D(c);nc(h,m)?(k=b.u().j(),d=d.$c(c,h.j(),k),d=null!=d?h.j().R(m).F(l,d):h.j().R(m)):d=d.rc(m,
	b.u());f=null!=d?a.V.F(h.j(),m,d,l,e,f):h.j()}}return Cd(b,f,h.ea||c.e(),a.V.Qa())}function xd(a,b,c,d,e,f,h,k){var m=b.u();h=h?a.V:a.V.Vb();if(c.e())d=h.za(m.j(),d,null);else if(h.Qa()&&!m.Tb)d=m.j().F(c,d),d=h.za(m.j(),d,null);else{var l=J(c);if(!zc(m,c)&&1<Hd(c))return b;var u=D(c);d=m.j().R(l).F(u,d);d=".priority"==l?h.ga(m.j(),d):h.F(m.j(),l,d,u,lc,null)}m=m.ea||c.e();b=new Fd(b.O,new oc(d,m,h.Qa()));return Ed(a,b,c,e,new mc(e,b,f),k)}
	function wd(a,b,c,d,e,f,h){var k=b.O;e=new mc(e,b,f);if(c.e())h=a.V.za(b.O.j(),d,h),a=Cd(b,h,!0,a.V.Qa());else if(f=J(c),".priority"===f)h=a.V.ga(b.O.j(),d),a=Cd(b,h,k.ea,k.Tb);else{c=D(c);var m=k.j().R(f);if(!c.e()){var l=e.We(f);d=null!=l?".priority"===Id(c)&&l.Q(c.parent()).e()?l:l.F(c,d):F}m.ca(d)?a=b:(h=a.V.F(k.j(),f,d,c,e,h),a=Cd(b,h,k.ea,a.V.Qa()))}return a}
	function yd(a,b,c,d,e,f,h){var k=b;Jd(d,function(d,l){var u=c.m(d);nc(b.O,J(u))&&(k=wd(a,k,u,l,e,f,h))});Jd(d,function(d,l){var u=c.m(d);nc(b.O,J(u))||(k=wd(a,k,u,l,e,f,h))});return k}function Kd(a,b){Jd(b,function(b,d){a=a.F(b,d)});return a}
	function zd(a,b,c,d,e,f,h,k){if(b.u().j().e()&&!xc(b.u()))return b;var m=b;c=c.e()?d:Ld(Q,c,d);var l=b.u().j();c.children.ia(function(c,d){if(l.Fa(c)){var G=b.u().j().R(c),G=Kd(G,d);m=xd(a,m,new M(c),G,e,f,h,k)}});c.children.ia(function(c,d){var G=!nc(b.u(),c)&&null==d.value;l.Fa(c)||G||(G=b.u().j().R(c),G=Kd(G,d),m=xd(a,m,new M(c),G,e,f,h,k))});return m}
	function Dd(a,b,c,d,e,f,h){if(null!=e.mc(c))return b;var k=yc(b.u()),m=b.u();if(null!=d.value){if(c.e()&&m.ea||zc(m,c))return xd(a,b,c,m.j().Q(c),e,f,k,h);if(c.e()){var l=Q;m.j().P(Md,function(a,b){l=l.set(new M(a),b)});return zd(a,b,c,l,e,f,k,h)}return b}l=Q;Jd(d,function(a){var b=c.m(a);zc(m,b)&&(l=l.set(a,m.j().Q(b)))});return zd(a,b,c,l,e,f,k,h)};var Nd=function(){var a=0,b=[];return function(c){var d=c===a;a=c;for(var e=Array(8),f=7;0<=f;f--)e[f]="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(c%64),c=Math.floor(c/64);E(0===c,"Cannot push at time == 0");c=e.join("");if(d){for(f=11;0<=f&&63===b[f];f--)b[f]=0;b[f]++}else for(f=0;12>f;f++)b[f]=Math.floor(64*Math.random());for(f=0;12>f;f++)c+="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(b[f]);E(20===c.length,"nextPushId: Length should be 20.");
	return c}}();function M(a,b){if(1==arguments.length){this.o=a.split("/");for(var c=0,d=0;d<this.o.length;d++)0<this.o[d].length&&(this.o[c]=this.o[d],c++);this.o.length=c;this.Z=0}else this.o=a,this.Z=b}function R(a,b){var c=J(a);if(null===c)return b;if(c===J(b))return R(D(a),D(b));throw Error("INTERNAL ERROR: innerPath ("+b+") is not within outerPath ("+a+")");}
	function Od(a,b){for(var c=a.slice(),d=b.slice(),e=0;e<c.length&&e<d.length;e++){var f=ad(c[e],d[e]);if(0!==f)return f}return c.length===d.length?0:c.length<d.length?-1:1}function J(a){return a.Z>=a.o.length?null:a.o[a.Z]}function Hd(a){return a.o.length-a.Z}function D(a){var b=a.Z;b<a.o.length&&b++;return new M(a.o,b)}function Id(a){return a.Z<a.o.length?a.o[a.o.length-1]:null}g=M.prototype;
	g.toString=function(){for(var a="",b=this.Z;b<this.o.length;b++)""!==this.o[b]&&(a+="/"+this.o[b]);return a||"/"};g.slice=function(a){return this.o.slice(this.Z+(a||0))};g.parent=function(){if(this.Z>=this.o.length)return null;for(var a=[],b=this.Z;b<this.o.length-1;b++)a.push(this.o[b]);return new M(a,0)};
	g.m=function(a){for(var b=[],c=this.Z;c<this.o.length;c++)b.push(this.o[c]);if(a instanceof M)for(c=a.Z;c<a.o.length;c++)b.push(a.o[c]);else for(a=a.split("/"),c=0;c<a.length;c++)0<a[c].length&&b.push(a[c]);return new M(b,0)};g.e=function(){return this.Z>=this.o.length};g.ca=function(a){if(Hd(this)!==Hd(a))return!1;for(var b=this.Z,c=a.Z;b<=this.o.length;b++,c++)if(this.o[b]!==a.o[c])return!1;return!0};
	g.contains=function(a){var b=this.Z,c=a.Z;if(Hd(this)>Hd(a))return!1;for(;b<this.o.length;){if(this.o[b]!==a.o[c])return!1;++b;++c}return!0};var C=new M("");function Pd(a,b){this.Ta=a.slice();this.Ka=Math.max(1,this.Ta.length);this.Se=b;for(var c=0;c<this.Ta.length;c++)this.Ka+=Ob(this.Ta[c]);Qd(this)}Pd.prototype.push=function(a){0<this.Ta.length&&(this.Ka+=1);this.Ta.push(a);this.Ka+=Ob(a);Qd(this)};Pd.prototype.pop=function(){var a=this.Ta.pop();this.Ka-=Ob(a);0<this.Ta.length&&--this.Ka};
	function Qd(a){if(768<a.Ka)throw Error(a.Se+"has a key path longer than 768 bytes ("+a.Ka+").");if(32<a.Ta.length)throw Error(a.Se+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+Rd(a));}function Rd(a){return 0==a.Ta.length?"":"in property '"+a.Ta.join(".")+"'"};var Sd=/[\[\].#$\/\u0000-\u001F\u007F]/,Td=/[\[\].#$\u0000-\u001F\u007F]/;function Ud(a){return q(a)&&0!==a.length&&!Sd.test(a)}function Vd(a){return null===a||q(a)||fa(a)&&!Zc(a)||ha(a)&&Hb(a,".sv")}function Wd(a,b,c,d){d&&!p(b)||Xd(Bb(a,1,d),b,c)}
	function Xd(a,b,c){c instanceof M&&(c=new Pd(c,a));if(!p(b))throw Error(a+"contains undefined "+Rd(c));if(ga(b))throw Error(a+"contains a function "+Rd(c)+" with contents: "+b.toString());if(Zc(b))throw Error(a+"contains "+b.toString()+" "+Rd(c));if(q(b)&&b.length>10485760/3&&10485760<Ob(b))throw Error(a+"contains a string greater than 10485760 utf8 bytes "+Rd(c)+" ('"+b.substring(0,50)+"...')");if(ha(b)){var d=!1,e=!1;Ib(b,function(b,h){if(".value"===b)d=!0;else if(".priority"!==b&&".sv"!==b&&(e=
	!0,!Ud(b)))throw Error(a+" contains an invalid key ("+b+") "+Rd(c)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');c.push(b);Xd(a,h,c);c.pop()});if(d&&e)throw Error(a+' contains ".value" child '+Rd(c)+" in addition to actual children.");}}
	function Yd(a,b){var c,d;for(c=0;c<b.length;c++){d=b[c];for(var e=d.slice(),f=0;f<e.length;f++)if((".priority"!==e[f]||f!==e.length-1)&&!Ud(e[f]))throw Error(a+"contains an invalid key ("+e[f]+") in path "+d.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');}b.sort(Od);e=null;for(c=0;c<b.length;c++){d=b[c];if(null!==e&&e.contains(d))throw Error(a+"contains a path "+e.toString()+" that is ancestor of another path "+d.toString());e=d}}
	function Zd(a,b,c){var d=Bb(a,1,!1);if(!ha(b)||da(b))throw Error(d+" must be an object containing the children to replace.");var e=[];Ib(b,function(a,b){var k=new M(a);Xd(d,b,c.m(k));if(".priority"===Id(k)&&!Vd(b))throw Error(d+"contains an invalid value for '"+k.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");e.push(k)});Yd(d,e)}
	function $d(a,b,c){if(Zc(c))throw Error(Bb(a,b,!1)+"is "+c.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Vd(c))throw Error(Bb(a,b,!1)+"must be a valid Firebase priority (a string, finite number, server value, or null).");}
	function ae(a,b,c){if(!c||p(b))switch(b){case "value":case "child_added":case "child_removed":case "child_changed":case "child_moved":break;default:throw Error(Bb(a,1,c)+'must be a valid event type: "value", "child_added", "child_removed", "child_changed", or "child_moved".');}}function be(a,b){if(p(b)&&!Ud(b))throw Error(Bb(a,2,!0)+'was an invalid key: "'+b+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").');}
	function ce(a,b){if(!q(b)||0===b.length||Td.test(b))throw Error(Bb(a,1,!1)+'was an invalid path: "'+b+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"');}function de(a,b){if(".info"===J(b))throw Error(a+" failed: Can't modify data under /.info/");}
	function ee(a,b){var c=b.path.toString(),d;!(d=!q(b.kc.host)||0===b.kc.host.length||!Ud(b.kc.pe))&&(d=0!==c.length)&&(c&&(c=c.replace(/^\/*\.info(\/|$)/,"/")),d=!(q(c)&&0!==c.length&&!Td.test(c)));if(d)throw Error(Bb(a,1,!1)+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".');};function fe(){this.children={};this.ad=0;this.value=null}function ge(a,b,c){this.ud=a?a:"";this.Ha=b?b:null;this.A=c?c:new fe}function he(a,b){for(var c=b instanceof M?b:new M(b),d=a,e;null!==(e=J(c));)d=new ge(e,d,A(d.A.children,e)||new fe),c=D(c);return d}g=ge.prototype;g.Ea=function(){return this.A.value};function ie(a,b){E("undefined"!==typeof b,"Cannot set value to undefined");a.A.value=b;je(a)}g.clear=function(){this.A.value=null;this.A.children={};this.A.ad=0;je(this)};
	g.kd=function(){return 0<this.A.ad};g.e=function(){return null===this.Ea()&&!this.kd()};g.P=function(a){var b=this;t(this.A.children,function(c,d){a(new ge(d,b,c))})};function ke(a,b,c,d){c&&!d&&b(a);a.P(function(a){ke(a,b,!0,d)});c&&d&&b(a)}function le(a,b){for(var c=a.parent();null!==c&&!b(c);)c=c.parent()}g.path=function(){return new M(null===this.Ha?this.ud:this.Ha.path()+"/"+this.ud)};g.name=function(){return this.ud};g.parent=function(){return this.Ha};
	function je(a){if(null!==a.Ha){var b=a.Ha,c=a.ud,d=a.e(),e=Hb(b.A.children,c);d&&e?(delete b.A.children[c],b.A.ad--,je(b)):d||e||(b.A.children[c]=a.A,b.A.ad++,je(b))}};function me(a){E(da(a)&&0<a.length,"Requires a non-empty array");this.Jf=a;this.Ec={}}me.prototype.Ge=function(a,b){var c;c=this.Ec[a]||[];var d=c.length;if(0<d){for(var e=Array(d),f=0;f<d;f++)e[f]=c[f];c=e}else c=[];for(d=0;d<c.length;d++)c[d].Ke.apply(c[d].Pa,Array.prototype.slice.call(arguments,1))};me.prototype.hc=function(a,b,c){ne(this,a);this.Ec[a]=this.Ec[a]||[];this.Ec[a].push({Ke:b,Pa:c});(a=this.Xe(a))&&b.apply(c,a)};
	me.prototype.Jc=function(a,b,c){ne(this,a);a=this.Ec[a]||[];for(var d=0;d<a.length;d++)if(a[d].Ke===b&&(!c||c===a[d].Pa)){a.splice(d,1);break}};function ne(a,b){E(La(a.Jf,function(a){return a===b}),"Unknown event: "+b)};function oe(a,b){this.value=a;this.children=b||pe}var pe=new Ac(function(a,b){return a===b?0:a<b?-1:1});function qe(a){var b=Q;t(a,function(a,d){b=b.set(new M(d),a)});return b}g=oe.prototype;g.e=function(){return null===this.value&&this.children.e()};function re(a,b,c){if(null!=a.value&&c(a.value))return{path:C,value:a.value};if(b.e())return null;var d=J(b);a=a.children.get(d);return null!==a?(b=re(a,D(b),c),null!=b?{path:(new M(d)).m(b.path),value:b.value}:null):null}
	function se(a,b){return re(a,b,function(){return!0})}g.subtree=function(a){if(a.e())return this;var b=this.children.get(J(a));return null!==b?b.subtree(D(a)):Q};g.set=function(a,b){if(a.e())return new oe(b,this.children);var c=J(a),d=(this.children.get(c)||Q).set(D(a),b),c=this.children.Ra(c,d);return new oe(this.value,c)};
	g.remove=function(a){if(a.e())return this.children.e()?Q:new oe(null,this.children);var b=J(a),c=this.children.get(b);return c?(a=c.remove(D(a)),b=a.e()?this.children.remove(b):this.children.Ra(b,a),null===this.value&&b.e()?Q:new oe(this.value,b)):this};g.get=function(a){if(a.e())return this.value;var b=this.children.get(J(a));return b?b.get(D(a)):null};
	function Ld(a,b,c){if(b.e())return c;var d=J(b);b=Ld(a.children.get(d)||Q,D(b),c);d=b.e()?a.children.remove(d):a.children.Ra(d,b);return new oe(a.value,d)}function te(a,b){return ue(a,C,b)}function ue(a,b,c){var d={};a.children.ia(function(a,f){d[a]=ue(f,b.m(a),c)});return c(b,a.value,d)}function ve(a,b,c){return we(a,b,C,c)}function we(a,b,c,d){var e=a.value?d(c,a.value):!1;if(e)return e;if(b.e())return null;e=J(b);return(a=a.children.get(e))?we(a,D(b),c.m(e),d):null}
	function xe(a,b,c){ye(a,b,C,c)}function ye(a,b,c,d){if(b.e())return a;a.value&&d(c,a.value);var e=J(b);return(a=a.children.get(e))?ye(a,D(b),c.m(e),d):Q}function Jd(a,b){ze(a,C,b)}function ze(a,b,c){a.children.ia(function(a,e){ze(e,b.m(a),c)});a.value&&c(b,a.value)}function Ae(a,b){a.children.ia(function(a,d){d.value&&b(a,d.value)})}var Q=new oe(null);oe.prototype.toString=function(){var a={};Jd(this,function(b,c){a[b.toString()]=c.toString()});return B(a)};function Be(a,b,c){this.type=Ad;this.source=Ce;this.path=a;this.Pb=b;this.Id=c}Be.prototype.Nc=function(a){if(this.path.e()){if(null!=this.Pb.value)return E(this.Pb.children.e(),"affectedTree should not have overlapping affected paths."),this;a=this.Pb.subtree(new M(a));return new Be(C,a,this.Id)}E(J(this.path)===a,"operationForChild called for unrelated child.");return new Be(D(this.path),this.Pb,this.Id)};
	Be.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" ack write revert="+this.Id+" affectedTree="+this.Pb+")"};var bc=0,ld=1,Ad=2,$b=3;function De(a,b,c,d){this.ee=a;this.Ve=b;this.Ib=c;this.Ee=d;E(!d||b,"Tagged queries must be from server.")}var Ce=new De(!0,!1,null,!1),Ee=new De(!1,!0,null,!1);De.prototype.toString=function(){return this.ee?"user":this.Ee?"server(queryID="+this.Ib+")":"server"};function Fe(){me.call(this,["visible"]);var a,b;"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document.hidden?(b="visibilitychange",a="hidden"):"undefined"!==typeof document.mozHidden?(b="mozvisibilitychange",a="mozHidden"):"undefined"!==typeof document.msHidden?(b="msvisibilitychange",a="msHidden"):"undefined"!==typeof document.webkitHidden&&(b="webkitvisibilitychange",a="webkitHidden"));this.Nb=!0;if(b){var c=this;document.addEventListener(b,
	function(){var b=!document[a];b!==c.Nb&&(c.Nb=b,c.Ge("visible",b))},!1)}}ka(Fe,me);Fe.prototype.Xe=function(a){E("visible"===a,"Unknown event type: "+a);return[this.Nb]};ba(Fe);function Ge(){this.set={}}g=Ge.prototype;g.add=function(a,b){this.set[a]=null!==b?b:!0};g.contains=function(a){return Hb(this.set,a)};g.get=function(a){return this.contains(a)?this.set[a]:void 0};g.remove=function(a){delete this.set[a]};g.clear=function(){this.set={}};g.e=function(){return ua(this.set)};g.count=function(){return na(this.set)};function He(a,b){t(a.set,function(a,d){b(d,a)})}g.keys=function(){var a=[];t(this.set,function(b,c){a.push(c)});return a};function Ie(a,b){return a&&"object"===typeof a?(E(".sv"in a,"Unexpected leaf node or priority contents"),b[a[".sv"]]):a}function Je(a,b){var c=new Ke;Le(a,new M(""),function(a,e){Me(c,a,Ne(e,b))});return c}function Ne(a,b){var c=a.C().H(),c=Ie(c,b),d;if(a.J()){var e=Ie(a.Ea(),b);return e!==a.Ea()||c!==a.C().H()?new Oe(e,S(c)):a}d=a;c!==a.C().H()&&(d=d.ga(new Oe(c)));a.P(N,function(a,c){var e=Ne(c,b);e!==c&&(d=d.U(a,e))});return d};function Pe(){me.call(this,["online"]);this.ic=!0;if("undefined"!==typeof window&&"undefined"!==typeof window.addEventListener&&!Pb()){var a=this;window.addEventListener("online",function(){a.ic||(a.ic=!0,a.Ge("online",!0))},!1);window.addEventListener("offline",function(){a.ic&&(a.ic=!1,a.Ge("online",!1))},!1)}}ka(Pe,me);Pe.prototype.Xe=function(a){E("online"===a,"Unknown event type: "+a);return[this.ic]};ba(Pe);function Qe(){}var Re={};function Se(a){return r(a.compare,a)}Qe.prototype.nd=function(a,b){return 0!==this.compare(new O("[MIN_NAME]",a),new O("[MIN_NAME]",b))};Qe.prototype.Ic=function(){return Te};function Ue(a){E(!a.e()&&".priority"!==J(a),"Can't create PathIndex with empty path or .priority key");this.cc=a}ka(Ue,Qe);g=Ue.prototype;g.yc=function(a){return!a.Q(this.cc).e()};g.compare=function(a,b){var c=a.S.Q(this.cc),d=b.S.Q(this.cc),c=c.tc(d);return 0===c?ad(a.name,b.name):c};
	g.Fc=function(a,b){var c=S(a),c=F.F(this.cc,c);return new O(b,c)};g.Gc=function(){var a=F.F(this.cc,Ve);return new O("[MAX_NAME]",a)};g.toString=function(){return this.cc.slice().join("/")};function We(){}ka(We,Qe);g=We.prototype;g.compare=function(a,b){var c=a.S.C(),d=b.S.C(),c=c.tc(d);return 0===c?ad(a.name,b.name):c};g.yc=function(a){return!a.C().e()};g.nd=function(a,b){return!a.C().ca(b.C())};g.Ic=function(){return Te};g.Gc=function(){return new O("[MAX_NAME]",new Oe("[PRIORITY-POST]",Ve))};
	g.Fc=function(a,b){var c=S(a);return new O(b,new Oe("[PRIORITY-POST]",c))};g.toString=function(){return".priority"};var N=new We;function Xe(){}ka(Xe,Qe);g=Xe.prototype;g.compare=function(a,b){return ad(a.name,b.name)};g.yc=function(){throw Pc("KeyIndex.isDefinedOn not expected to be called.");};g.nd=function(){return!1};g.Ic=function(){return Te};g.Gc=function(){return new O("[MAX_NAME]",F)};g.Fc=function(a){E(q(a),"KeyIndex indexValue must always be a string.");return new O(a,F)};g.toString=function(){return".key"};
	var Md=new Xe;function Ye(){}ka(Ye,Qe);g=Ye.prototype;g.compare=function(a,b){var c=a.S.tc(b.S);return 0===c?ad(a.name,b.name):c};g.yc=function(){return!0};g.nd=function(a,b){return!a.ca(b)};g.Ic=function(){return Te};g.Gc=function(){return Ze};g.Fc=function(a,b){var c=S(a);return new O(b,c)};g.toString=function(){return".value"};var $e=new Ye;function af(a,b){return ad(a.name,b.name)}function bf(a,b){return ad(a,b)};function cf(a,b){this.od=a;this.dc=b}cf.prototype.get=function(a){var b=A(this.od,a);if(!b)throw Error("No index defined for "+a);return b===Re?null:b};function df(a,b,c){var d=la(a.od,function(d,f){var h=A(a.dc,f);E(h,"Missing index implementation for "+f);if(d===Re){if(h.yc(b.S)){for(var k=[],m=c.Xb(ef),l=K(m);l;)l.name!=b.name&&k.push(l),l=K(m);k.push(b);return ff(k,Se(h))}return Re}h=c.get(b.name);k=d;h&&(k=k.remove(new O(b.name,h)));return k.Ra(b,b.S)});return new cf(d,a.dc)}
	function gf(a,b,c){var d=la(a.od,function(a){if(a===Re)return a;var d=c.get(b.name);return d?a.remove(new O(b.name,d)):a});return new cf(d,a.dc)}var hf=new cf({".priority":Re},{".priority":N});function O(a,b){this.name=a;this.S=b}function ef(a,b){return new O(a,b)};function jf(a){this.sa=new od(a);this.g=a.g;E(a.xa,"Only valid if limit has been set");this.oa=a.oa;this.Jb=!kf(a)}g=jf.prototype;g.F=function(a,b,c,d,e,f){this.sa.matches(new O(b,c))||(c=F);return a.R(b).ca(c)?a:a.Fb()<this.oa?this.sa.Vb().F(a,b,c,d,e,f):lf(this,a,b,c,e,f)};
	g.za=function(a,b,c){var d;if(b.J()||b.e())d=F.ob(this.g);else if(2*this.oa<b.Fb()&&b.zc(this.g)){d=F.ob(this.g);b=this.Jb?b.$b(this.sa.wc,this.g):b.Yb(this.sa.Uc,this.g);for(var e=0;0<b.Sa.length&&e<this.oa;){var f=K(b),h;if(h=this.Jb?0>=this.g.compare(this.sa.Uc,f):0>=this.g.compare(f,this.sa.wc))d=d.U(f.name,f.S),e++;else break}}else{d=b.ob(this.g);d=d.ga(F);var k,m,l;if(this.Jb){b=d.Ze(this.g);k=this.sa.wc;m=this.sa.Uc;var u=Se(this.g);l=function(a,b){return u(b,a)}}else b=d.Xb(this.g),k=this.sa.Uc,
	m=this.sa.wc,l=Se(this.g);for(var e=0,z=!1;0<b.Sa.length;)f=K(b),!z&&0>=l(k,f)&&(z=!0),(h=z&&e<this.oa&&0>=l(f,m))?e++:d=d.U(f.name,F)}return this.sa.Vb().za(a,d,c)};g.ga=function(a){return a};g.Qa=function(){return!0};g.Vb=function(){return this.sa.Vb()};
	function lf(a,b,c,d,e,f){var h;if(a.Jb){var k=Se(a.g);h=function(a,b){return k(b,a)}}else h=Se(a.g);E(b.Fb()==a.oa,"");var m=new O(c,d),l=a.Jb?mf(b,a.g):nf(b,a.g),u=a.sa.matches(m);if(b.Fa(c)){for(var z=b.R(c),l=e.fe(a.g,l,a.Jb);null!=l&&(l.name==c||b.Fa(l.name));)l=e.fe(a.g,l,a.Jb);e=null==l?1:h(l,m);if(u&&!d.e()&&0<=e)return null!=f&&nd(f,new H("child_changed",d,c,z)),b.U(c,d);null!=f&&nd(f,new H("child_removed",z,c));b=b.U(c,F);return null!=l&&a.sa.matches(l)?(null!=f&&nd(f,new H("child_added",
	l.S,l.name)),b.U(l.name,l.S)):b}return d.e()?b:u&&0<=h(l,m)?(null!=f&&(nd(f,new H("child_removed",l.S,l.name)),nd(f,new H("child_added",d,c))),b.U(c,d).U(l.name,F)):b};function of(a){this.W=a;this.g=a.n.g}function pf(a,b,c,d){var e=[],f=[];Ga(b,function(b){"child_changed"===b.type&&a.g.nd(b.qe,b.Ma)&&f.push(new H("child_moved",b.Ma,b.Za))});qf(a,e,"child_removed",b,d,c);qf(a,e,"child_added",b,d,c);qf(a,e,"child_moved",f,d,c);qf(a,e,"child_changed",b,d,c);qf(a,e,hc,b,d,c);return e}function qf(a,b,c,d,e,f){d=Ha(d,function(a){return a.type===c});Pa(d,r(a.Nf,a));Ga(d,function(c){var d=rf(a,c,f);Ga(e,function(e){e.sf(c.type)&&b.push(e.createEvent(d,a.W))})})}
	function rf(a,b,c){"value"!==b.type&&"child_removed"!==b.type&&(b.Dd=c.Ye(b.Za,b.Ma,a.g));return b}of.prototype.Nf=function(a,b){if(null==a.Za||null==b.Za)throw Pc("Should only compare child_ events.");return this.g.compare(new O(a.Za,a.Ma),new O(b.Za,b.Ma))};function sf(){this.Sb=this.na=this.Lb=this.ka=this.xa=!1;this.oa=0;this.oc="";this.ec=null;this.Ab="";this.bc=null;this.yb="";this.g=N}var tf=new sf;function kf(a){return""===a.oc?a.ka:"l"===a.oc}function qd(a){E(a.ka,"Only valid if start has been set");return a.ec}function pd(a){E(a.ka,"Only valid if start has been set");return a.Lb?a.Ab:"[MIN_NAME]"}function sd(a){E(a.na,"Only valid if end has been set");return a.bc}
	function rd(a){E(a.na,"Only valid if end has been set");return a.Sb?a.yb:"[MAX_NAME]"}function uf(a){var b=new sf;b.xa=a.xa;b.oa=a.oa;b.ka=a.ka;b.ec=a.ec;b.Lb=a.Lb;b.Ab=a.Ab;b.na=a.na;b.bc=a.bc;b.Sb=a.Sb;b.yb=a.yb;b.g=a.g;return b}g=sf.prototype;g.ne=function(a){var b=uf(this);b.xa=!0;b.oa=a;b.oc="l";return b};g.oe=function(a){var b=uf(this);b.xa=!0;b.oa=a;b.oc="r";return b};g.Nd=function(a,b){var c=uf(this);c.ka=!0;p(a)||(a=null);c.ec=a;null!=b?(c.Lb=!0,c.Ab=b):(c.Lb=!1,c.Ab="");return c};
	g.fd=function(a,b){var c=uf(this);c.na=!0;p(a)||(a=null);c.bc=a;p(b)?(c.Sb=!0,c.yb=b):(c.Eg=!1,c.yb="");return c};function vf(a,b){var c=uf(a);c.g=b;return c}function wf(a){var b={};a.ka&&(b.sp=a.ec,a.Lb&&(b.sn=a.Ab));a.na&&(b.ep=a.bc,a.Sb&&(b.en=a.yb));if(a.xa){b.l=a.oa;var c=a.oc;""===c&&(c=kf(a)?"l":"r");b.vf=c}a.g!==N&&(b.i=a.g.toString());return b}function T(a){return!(a.ka||a.na||a.xa)}function xf(a){return T(a)&&a.g==N}
	function yf(a){var b={};if(xf(a))return b;var c;a.g===N?c="$priority":a.g===$e?c="$value":a.g===Md?c="$key":(E(a.g instanceof Ue,"Unrecognized index type!"),c=a.g.toString());b.orderBy=B(c);a.ka&&(b.startAt=B(a.ec),a.Lb&&(b.startAt+=","+B(a.Ab)));a.na&&(b.endAt=B(a.bc),a.Sb&&(b.endAt+=","+B(a.yb)));a.xa&&(kf(a)?b.limitToFirst=a.oa:b.limitToLast=a.oa);return b}g.toString=function(){return B(wf(this))};function Oe(a,b){this.B=a;E(p(this.B)&&null!==this.B,"LeafNode shouldn't be created with null/undefined value.");this.aa=b||F;zf(this.aa);this.Eb=null}var Af=["object","boolean","number","string"];g=Oe.prototype;g.J=function(){return!0};g.C=function(){return this.aa};g.ga=function(a){return new Oe(this.B,a)};g.R=function(a){return".priority"===a?this.aa:F};g.Q=function(a){return a.e()?this:".priority"===J(a)?this.aa:F};g.Fa=function(){return!1};g.Ye=function(){return null};
	g.U=function(a,b){return".priority"===a?this.ga(b):b.e()&&".priority"!==a?this:F.U(a,b).ga(this.aa)};g.F=function(a,b){var c=J(a);if(null===c)return b;if(b.e()&&".priority"!==c)return this;E(".priority"!==c||1===Hd(a),".priority must be the last token in a path");return this.U(c,F.F(D(a),b))};g.e=function(){return!1};g.Fb=function(){return 0};g.P=function(){return!1};g.H=function(a){return a&&!this.C().e()?{".value":this.Ea(),".priority":this.C().H()}:this.Ea()};
	g.hash=function(){if(null===this.Eb){var a="";this.aa.e()||(a+="priority:"+Bf(this.aa.H())+":");var b=typeof this.B,a=a+(b+":"),a="number"===b?a+gd(this.B):a+this.B;this.Eb=Rc(a)}return this.Eb};g.Ea=function(){return this.B};g.tc=function(a){if(a===F)return 1;if(a instanceof P)return-1;E(a.J(),"Unknown node type");var b=typeof a.B,c=typeof this.B,d=Fa(Af,b),e=Fa(Af,c);E(0<=d,"Unknown leaf type: "+b);E(0<=e,"Unknown leaf type: "+c);return d===e?"object"===c?0:this.B<a.B?-1:this.B===a.B?0:1:e-d};
	g.ob=function(){return this};g.zc=function(){return!0};g.ca=function(a){return a===this?!0:a.J()?this.B===a.B&&this.aa.ca(a.aa):!1};g.toString=function(){return B(this.H(!0))};function P(a,b,c){this.k=a;(this.aa=b)&&zf(this.aa);a.e()&&E(!this.aa||this.aa.e(),"An empty node cannot have a priority");this.zb=c;this.Eb=null}g=P.prototype;g.J=function(){return!1};g.C=function(){return this.aa||F};g.ga=function(a){return this.k.e()?this:new P(this.k,a,this.zb)};g.R=function(a){if(".priority"===a)return this.C();a=this.k.get(a);return null===a?F:a};g.Q=function(a){var b=J(a);return null===b?this:this.R(b).Q(D(a))};g.Fa=function(a){return null!==this.k.get(a)};
	g.U=function(a,b){E(b,"We should always be passing snapshot nodes");if(".priority"===a)return this.ga(b);var c=new O(a,b),d,e;b.e()?(d=this.k.remove(a),c=gf(this.zb,c,this.k)):(d=this.k.Ra(a,b),c=df(this.zb,c,this.k));e=d.e()?F:this.aa;return new P(d,e,c)};g.F=function(a,b){var c=J(a);if(null===c)return b;E(".priority"!==J(a)||1===Hd(a),".priority must be the last token in a path");var d=this.R(c).F(D(a),b);return this.U(c,d)};g.e=function(){return this.k.e()};g.Fb=function(){return this.k.count()};
	var Cf=/^(0|[1-9]\d*)$/;g=P.prototype;g.H=function(a){if(this.e())return null;var b={},c=0,d=0,e=!0;this.P(N,function(f,h){b[f]=h.H(a);c++;e&&Cf.test(f)?d=Math.max(d,Number(f)):e=!1});if(!a&&e&&d<2*c){var f=[],h;for(h in b)f[h]=b[h];return f}a&&!this.C().e()&&(b[".priority"]=this.C().H());return b};g.hash=function(){if(null===this.Eb){var a="";this.C().e()||(a+="priority:"+Bf(this.C().H())+":");this.P(N,function(b,c){var d=c.hash();""!==d&&(a+=":"+b+":"+d)});this.Eb=""===a?"":Rc(a)}return this.Eb};
	g.Ye=function(a,b,c){return(c=Df(this,c))?(a=Cc(c,new O(a,b)))?a.name:null:Cc(this.k,a)};function mf(a,b){var c;c=(c=Df(a,b))?(c=c.Hc())&&c.name:a.k.Hc();return c?new O(c,a.k.get(c)):null}function nf(a,b){var c;c=(c=Df(a,b))?(c=c.fc())&&c.name:a.k.fc();return c?new O(c,a.k.get(c)):null}g.P=function(a,b){var c=Df(this,a);return c?c.ia(function(a){return b(a.name,a.S)}):this.k.ia(b)};g.Xb=function(a){return this.Yb(a.Ic(),a)};
	g.Yb=function(a,b){var c=Df(this,b);if(c)return c.Yb(a,function(a){return a});for(var c=this.k.Yb(a.name,ef),d=Ec(c);null!=d&&0>b.compare(d,a);)K(c),d=Ec(c);return c};g.Ze=function(a){return this.$b(a.Gc(),a)};g.$b=function(a,b){var c=Df(this,b);if(c)return c.$b(a,function(a){return a});for(var c=this.k.$b(a.name,ef),d=Ec(c);null!=d&&0<b.compare(d,a);)K(c),d=Ec(c);return c};g.tc=function(a){return this.e()?a.e()?0:-1:a.J()||a.e()?1:a===Ve?-1:0};
	g.ob=function(a){if(a===Md||ra(this.zb.dc,a.toString()))return this;var b=this.zb,c=this.k;E(a!==Md,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var d=[],e=!1,c=c.Xb(ef),f=K(c);f;)e=e||a.yc(f.S),d.push(f),f=K(c);d=e?ff(d,Se(a)):Re;e=a.toString();c=va(b.dc);c[e]=a;a=va(b.od);a[e]=d;return new P(this.k,this.aa,new cf(a,c))};g.zc=function(a){return a===Md||ra(this.zb.dc,a.toString())};
	g.ca=function(a){if(a===this)return!0;if(a.J())return!1;if(this.C().ca(a.C())&&this.k.count()===a.k.count()){var b=this.Xb(N);a=a.Xb(N);for(var c=K(b),d=K(a);c&&d;){if(c.name!==d.name||!c.S.ca(d.S))return!1;c=K(b);d=K(a)}return null===c&&null===d}return!1};function Df(a,b){return b===Md?null:a.zb.get(b.toString())}g.toString=function(){return B(this.H(!0))};function S(a,b){if(null===a)return F;var c=null;"object"===typeof a&&".priority"in a?c=a[".priority"]:"undefined"!==typeof b&&(c=b);E(null===c||"string"===typeof c||"number"===typeof c||"object"===typeof c&&".sv"in c,"Invalid priority type found: "+typeof c);"object"===typeof a&&".value"in a&&null!==a[".value"]&&(a=a[".value"]);if("object"!==typeof a||".sv"in a)return new Oe(a,S(c));if(a instanceof Array){var d=F,e=a;t(e,function(a,b){if(Hb(e,b)&&"."!==b.substring(0,1)){var c=S(a);if(c.J()||!c.e())d=
	d.U(b,c)}});return d.ga(S(c))}var f=[],h=!1,k=a;Ib(k,function(a){if("string"!==typeof a||"."!==a.substring(0,1)){var b=S(k[a]);b.e()||(h=h||!b.C().e(),f.push(new O(a,b)))}});if(0==f.length)return F;var m=ff(f,af,function(a){return a.name},bf);if(h){var l=ff(f,Se(N));return new P(m,S(c),new cf({".priority":l},{".priority":N}))}return new P(m,S(c),hf)}var Ef=Math.log(2);
	function Ff(a){this.count=parseInt(Math.log(a+1)/Ef,10);this.Qe=this.count-1;this.Kf=a+1&parseInt(Array(this.count+1).join("1"),2)}function Gf(a){var b=!(a.Kf&1<<a.Qe);a.Qe--;return b}
	function ff(a,b,c,d){function e(b,d){var f=d-b;if(0==f)return null;if(1==f){var l=a[b],u=c?c(l):l;return new Fc(u,l.S,!1,null,null)}var l=parseInt(f/2,10)+b,f=e(b,l),z=e(l+1,d),l=a[l],u=c?c(l):l;return new Fc(u,l.S,!1,f,z)}a.sort(b);var f=function(b){function d(b,h){var k=u-b,z=u;u-=b;var z=e(k+1,z),k=a[k],G=c?c(k):k,z=new Fc(G,k.S,h,null,z);f?f.left=z:l=z;f=z}for(var f=null,l=null,u=a.length,z=0;z<b.count;++z){var G=Gf(b),Bd=Math.pow(2,b.count-(z+1));G?d(Bd,!1):(d(Bd,!1),d(Bd,!0))}return l}(new Ff(a.length));
	return null!==f?new Ac(d||b,f):new Ac(d||b)}function Bf(a){return"number"===typeof a?"number:"+gd(a):"string:"+a}function zf(a){if(a.J()){var b=a.H();E("string"===typeof b||"number"===typeof b||"object"===typeof b&&Hb(b,".sv"),"Priority must be a string or number.")}else E(a===Ve||a.e(),"priority of unexpected type.");E(a===Ve||a.C().e(),"Priority nodes can't have a priority of their own.")}var F=new P(new Ac(bf),null,hf);function Hf(){P.call(this,new Ac(bf),F,hf)}ka(Hf,P);g=Hf.prototype;
	g.tc=function(a){return a===this?0:1};g.ca=function(a){return a===this};g.C=function(){return this};g.R=function(){return F};g.e=function(){return!1};var Ve=new Hf,Te=new O("[MIN_NAME]",F),Ze=new O("[MAX_NAME]",Ve);function Fd(a,b){this.O=a;this.Ld=b}function Cd(a,b,c,d){return new Fd(new oc(b,c,d),a.Ld)}function Gd(a){return a.O.ea?a.O.j():null}Fd.prototype.u=function(){return this.Ld};function pc(a){return a.Ld.ea?a.Ld.j():null};function If(a,b){this.W=a;var c=a.n,d=new md(c.g),c=T(c)?new md(c.g):c.xa?new jf(c):new od(c);this.nf=new vd(c);var e=b.u(),f=b.O,h=d.za(F,e.j(),null),k=c.za(F,f.j(),null);this.Na=new Fd(new oc(k,f.ea,c.Qa()),new oc(h,e.ea,d.Qa()));this.ab=[];this.Rf=new of(a)}function Jf(a){return a.W}g=If.prototype;g.u=function(){return this.Na.u().j()};g.jb=function(a){var b=pc(this.Na);return b&&(T(this.W.n)||!a.e()&&!b.R(J(a)).e())?b.Q(a):null};g.e=function(){return 0===this.ab.length};g.Ob=function(a){this.ab.push(a)};
	g.mb=function(a,b){var c=[];if(b){E(null==a,"A cancel should cancel all event registrations.");var d=this.W.path;Ga(this.ab,function(a){(a=a.Oe(b,d))&&c.push(a)})}if(a){for(var e=[],f=0;f<this.ab.length;++f){var h=this.ab[f];if(!h.matches(a))e.push(h);else if(a.$e()){e=e.concat(this.ab.slice(f+1));break}}this.ab=e}else this.ab=[];return c};
	g.gb=function(a,b,c){a.type===ld&&null!==a.source.Ib&&(E(pc(this.Na),"We should always have a full cache before handling merges"),E(Gd(this.Na),"Missing event cache, even though we have a server cache"));var d=this.Na;a=this.nf.gb(d,a,b,c);b=this.nf;c=a.Sd;E(c.O.j().zc(b.V.g),"Event snap not indexed");E(c.u().j().zc(b.V.g),"Server snap not indexed");E(xc(a.Sd.u())||!xc(d.u()),"Once a server snap is complete, it should never go back");this.Na=a.Sd;return Kf(this,a.Lf,a.Sd.O.j(),null)};
	function Lf(a,b){var c=a.Na.O,d=[];c.j().J()||c.j().P(N,function(a,b){d.push(new H("child_added",b,a))});c.ea&&d.push(gc(c.j()));return Kf(a,d,c.j(),b)}function Kf(a,b,c,d){return pf(a.Rf,b,c,d?[d]:a.ab)};function Mf(a,b,c){this.f=Vc("p:rest:");this.M=a;this.Hb=b;this.Vd=c;this.$={}}function Nf(a,b){if(p(b))return"tag$"+b;E(xf(a.n),"should have a tag if it's not a default query.");return a.path.toString()}g=Mf.prototype;
	g.cf=function(a,b,c,d){var e=a.path.toString();this.f("Listen called for "+e+" "+a.ya());var f=Nf(a,c),h={};this.$[f]=h;a=yf(a.n);var k=this;Of(this,e+".json",a,function(a,b){var u=b;404===a&&(a=u=null);null===a&&k.Hb(e,u,!1,c);A(k.$,f)===h&&d(a?401==a?"permission_denied":"rest_error:"+a:"ok",null)})};g.Df=function(a,b){var c=Nf(a,b);delete this.$[c]};g.pf=function(){};g.re=function(){};g.ff=function(){};g.xd=function(){};g.put=function(){};g.df=function(){};g.ye=function(){};
	function Of(a,b,c,d){c=c||{};c.format="export";a.Vd.getToken(!1).then(function(e){(e=e&&e.accessToken)&&(c.auth=e);var f=(a.M.Sc?"https://":"http://")+a.M.host+b+"?"+Jb(c);a.f("Sending REST request for "+f);var h=new XMLHttpRequest;h.onreadystatechange=function(){if(d&&4===h.readyState){a.f("REST Response for "+f+" received. status:",h.status,"response:",h.responseText);var b=null;if(200<=h.status&&300>h.status){try{b=Kb(h.responseText)}catch(c){L("Failed to parse JSON response for "+f+": "+h.responseText)}d(null,
	b)}else 401!==h.status&&404!==h.status&&L("Got unsuccessful REST response for "+f+" Status: "+h.status),d(h.status);d=null}};h.open("GET",f,!0);h.send()})};function Pf(a){this.He=a}Pf.prototype.getToken=function(a){return this.He.INTERNAL.getToken(a).then(null,function(a){return a&&"auth/token-not-initialized"===a.code?(I("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(a)})};function Qf(a,b){a.He.INTERNAL.addAuthTokenListener(b)};function Rf(a){this.Mf=a;this.rd=null}Rf.prototype.get=function(){var a=this.Mf.get(),b=va(a);if(this.rd)for(var c in this.rd)b[c]-=this.rd[c];this.rd=a;return b};function Sf(){this.uc={}}function Tf(a,b,c){p(c)||(c=1);Hb(a.uc,b)||(a.uc[b]=0);a.uc[b]+=c}Sf.prototype.get=function(){return va(this.uc)};function Uf(a,b){this.yf={};this.Vc=new Rf(a);this.va=b;var c=1E4+2E4*Math.random();setTimeout(r(this.qf,this),Math.floor(c))}Uf.prototype.qf=function(){var a=this.Vc.get(),b={},c=!1,d;for(d in a)0<a[d]&&Hb(this.yf,d)&&(b[d]=a[d],c=!0);c&&this.va.ye(b);setTimeout(r(this.qf,this),Math.floor(6E5*Math.random()))};var Vf={},Wf={};function Xf(a){a=a.toString();Vf[a]||(Vf[a]=new Sf);return Vf[a]}function Yf(a,b){var c=a.toString();Wf[c]||(Wf[c]=b());return Wf[c]};var Zf=null;"undefined"!==typeof MozWebSocket?Zf=MozWebSocket:"undefined"!==typeof WebSocket&&(Zf=WebSocket);function $f(a,b,c,d){this.Zd=a;this.f=Vc(this.Zd);this.frames=this.Ac=null;this.qb=this.rb=this.Fe=0;this.Xa=Xf(b);a={v:"5"};"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(a.r="f");c&&(a.s=c);d&&(a.ls=d);this.Me=ec(b,"websocket",a)}var ag;
	$f.prototype.open=function(a,b){this.kb=b;this.gg=a;this.f("Websocket connecting to "+this.Me);this.xc=!1;Xb.set("previous_websocket_failure",!0);try{this.La=new Zf(this.Me)}catch(c){this.f("Error instantiating WebSocket.");var d=c.message||c.data;d&&this.f(d);this.fb();return}var e=this;this.La.onopen=function(){e.f("Websocket connected.");e.xc=!0};this.La.onclose=function(){e.f("Websocket connection was disconnected.");e.La=null;e.fb()};this.La.onmessage=function(a){if(null!==e.La)if(a=a.data,e.qb+=
	a.length,Tf(e.Xa,"bytes_received",a.length),bg(e),null!==e.frames)cg(e,a);else{a:{E(null===e.frames,"We already have a frame buffer");if(6>=a.length){var b=Number(a);if(!isNaN(b)){e.Fe=b;e.frames=[];a=null;break a}}e.Fe=1;e.frames=[]}null!==a&&cg(e,a)}};this.La.onerror=function(a){e.f("WebSocket error.  Closing connection.");(a=a.message||a.data)&&e.f(a);e.fb()}};$f.prototype.start=function(){};
	$f.isAvailable=function(){var a=!1;if("undefined"!==typeof navigator&&navigator.userAgent){var b=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);b&&1<b.length&&4.4>parseFloat(b[1])&&(a=!0)}return!a&&null!==Zf&&!ag};$f.responsesRequiredToBeHealthy=2;$f.healthyTimeout=3E4;g=$f.prototype;g.sd=function(){Xb.remove("previous_websocket_failure")};function cg(a,b){a.frames.push(b);if(a.frames.length==a.Fe){var c=a.frames.join("");a.frames=null;c=Kb(c);a.gg(c)}}
	g.send=function(a){bg(this);a=B(a);this.rb+=a.length;Tf(this.Xa,"bytes_sent",a.length);a=ed(a,16384);1<a.length&&dg(this,String(a.length));for(var b=0;b<a.length;b++)dg(this,a[b])};g.Tc=function(){this.Bb=!0;this.Ac&&(clearInterval(this.Ac),this.Ac=null);this.La&&(this.La.close(),this.La=null)};g.fb=function(){this.Bb||(this.f("WebSocket is closing itself"),this.Tc(),this.kb&&(this.kb(this.xc),this.kb=null))};g.close=function(){this.Bb||(this.f("WebSocket is being closed"),this.Tc())};
	function bg(a){clearInterval(a.Ac);a.Ac=setInterval(function(){a.La&&dg(a,"0");bg(a)},Math.floor(45E3))}function dg(a,b){try{a.La.send(b)}catch(c){a.f("Exception thrown from WebSocket.send():",c.message||c.data,"Closing connection."),setTimeout(r(a.fb,a),0)}};function eg(a,b,c,d){this.Zd=a;this.f=Vc(a);this.kc=b;this.qb=this.rb=0;this.Xa=Xf(b);this.Af=c;this.xc=!1;this.Db=d;this.Yc=function(a){return ec(b,"long_polling",a)}}var fg,gg;
	eg.prototype.open=function(a,b){this.Pe=0;this.ja=b;this.ef=new Qb(a);this.Bb=!1;var c=this;this.tb=setTimeout(function(){c.f("Timed out trying to connect.");c.fb();c.tb=null},Math.floor(3E4));$c(function(){if(!c.Bb){c.Wa=new hg(function(a,b,d,k,m){ig(c,arguments);if(c.Wa)if(c.tb&&(clearTimeout(c.tb),c.tb=null),c.xc=!0,"start"==a)c.id=b,c.lf=d;else if("close"===a)b?(c.Wa.Kd=!1,Rb(c.ef,b,function(){c.fb()})):c.fb();else throw Error("Unrecognized command received: "+a);},function(a,b){ig(c,arguments);
	Sb(c.ef,a,b)},function(){c.fb()},c.Yc);var a={start:"t"};a.ser=Math.floor(1E8*Math.random());c.Wa.Qd&&(a.cb=c.Wa.Qd);a.v="5";c.Af&&(a.s=c.Af);c.Db&&(a.ls=c.Db);"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(a.r="f");a=c.Yc(a);c.f("Connecting via long-poll to "+a);jg(c.Wa,a,function(){})}})};
	eg.prototype.start=function(){var a=this.Wa,b=this.lf;a.eg=this.id;a.fg=b;for(a.Ud=!0;kg(a););a=this.id;b=this.lf;this.gc=document.createElement("iframe");var c={dframe:"t"};c.id=a;c.pw=b;this.gc.src=this.Yc(c);this.gc.style.display="none";document.body.appendChild(this.gc)};
	eg.isAvailable=function(){return fg||!gg&&"undefined"!==typeof document&&null!=document.createElement&&!("object"===typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"===typeof Windows&&"object"===typeof Windows.Bg)&&!0};g=eg.prototype;g.sd=function(){};g.Tc=function(){this.Bb=!0;this.Wa&&(this.Wa.close(),this.Wa=null);this.gc&&(document.body.removeChild(this.gc),this.gc=null);this.tb&&(clearTimeout(this.tb),this.tb=null)};
	g.fb=function(){this.Bb||(this.f("Longpoll is closing itself"),this.Tc(),this.ja&&(this.ja(this.xc),this.ja=null))};g.close=function(){this.Bb||(this.f("Longpoll is being closed."),this.Tc())};g.send=function(a){a=B(a);this.rb+=a.length;Tf(this.Xa,"bytes_sent",a.length);a=Nb(a);a=wb(a,!0);a=ed(a,1840);for(var b=0;b<a.length;b++){var c=this.Wa;c.Qc.push({tg:this.Pe,zg:a.length,Re:a[b]});c.Ud&&kg(c);this.Pe++}};function ig(a,b){var c=B(b).length;a.qb+=c;Tf(a.Xa,"bytes_received",c)}
	function hg(a,b,c,d){this.Yc=d;this.kb=c;this.ve=new Ge;this.Qc=[];this.$d=Math.floor(1E8*Math.random());this.Kd=!0;this.Qd=Oc();window["pLPCommand"+this.Qd]=a;window["pRTLPCB"+this.Qd]=b;a=document.createElement("iframe");a.style.display="none";if(document.body){document.body.appendChild(a);try{a.contentWindow.document||I("No IE domain setting required")}catch(e){a.src="javascript:void((function(){document.open();document.domain='"+document.domain+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
	a.contentDocument?a.ib=a.contentDocument:a.contentWindow?a.ib=a.contentWindow.document:a.document&&(a.ib=a.document);this.Ga=a;a="";this.Ga.src&&"javascript:"===this.Ga.src.substr(0,11)&&(a='<script>document.domain="'+document.domain+'";\x3c/script>');a="<html><body>"+a+"</body></html>";try{this.Ga.ib.open(),this.Ga.ib.write(a),this.Ga.ib.close()}catch(f){I("frame writing exception"),f.stack&&I(f.stack),I(f)}}
	hg.prototype.close=function(){this.Ud=!1;if(this.Ga){this.Ga.ib.body.innerHTML="";var a=this;setTimeout(function(){null!==a.Ga&&(document.body.removeChild(a.Ga),a.Ga=null)},Math.floor(0))}var b=this.kb;b&&(this.kb=null,b())};
	function kg(a){if(a.Ud&&a.Kd&&a.ve.count()<(0<a.Qc.length?2:1)){a.$d++;var b={};b.id=a.eg;b.pw=a.fg;b.ser=a.$d;for(var b=a.Yc(b),c="",d=0;0<a.Qc.length;)if(1870>=a.Qc[0].Re.length+30+c.length){var e=a.Qc.shift(),c=c+"&seg"+d+"="+e.tg+"&ts"+d+"="+e.zg+"&d"+d+"="+e.Re;d++}else break;lg(a,b+c,a.$d);return!0}return!1}function lg(a,b,c){function d(){a.ve.remove(c);kg(a)}a.ve.add(c,1);var e=setTimeout(d,Math.floor(25E3));jg(a,b,function(){clearTimeout(e);d()})}
	function jg(a,b,c){setTimeout(function(){try{if(a.Kd){var d=a.Ga.ib.createElement("script");d.type="text/javascript";d.async=!0;d.src=b;d.onload=d.onreadystatechange=function(){var a=d.readyState;a&&"loaded"!==a&&"complete"!==a||(d.onload=d.onreadystatechange=null,d.parentNode&&d.parentNode.removeChild(d),c())};d.onerror=function(){I("Long-poll script failed to load: "+b);a.Kd=!1;a.close()};a.Ga.ib.body.appendChild(d)}}catch(e){}},Math.floor(1))};function mg(a){ng(this,a)}var og=[eg,$f];function ng(a,b){var c=$f&&$f.isAvailable(),d=c&&!(Xb.bf||!0===Xb.get("previous_websocket_failure"));b.Ag&&(c||L("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),d=!0);if(d)a.Wc=[$f];else{var e=a.Wc=[];fd(og,function(a,b){b&&b.isAvailable()&&e.push(b)})}}function pg(a){if(0<a.Wc.length)return a.Wc[0];throw Error("No transports available");};function qg(a,b,c,d,e,f,h){this.id=a;this.f=Vc("c:"+this.id+":");this.te=c;this.Mc=d;this.ja=e;this.se=f;this.M=b;this.Ad=[];this.Ne=0;this.zf=new mg(b);this.L=0;this.Db=h;this.f("Connection created");rg(this)}
	function rg(a){var b=pg(a.zf);a.I=new b("c:"+a.id+":"+a.Ne++,a.M,void 0,a.Db);a.xe=b.responsesRequiredToBeHealthy||0;var c=sg(a,a.I),d=tg(a,a.I);a.Xc=a.I;a.Rc=a.I;a.D=null;a.Cb=!1;setTimeout(function(){a.I&&a.I.open(c,d)},Math.floor(0));b=b.healthyTimeout||0;0<b&&(a.md=setTimeout(function(){a.md=null;a.Cb||(a.I&&102400<a.I.qb?(a.f("Connection exceeded healthy timeout but has received "+a.I.qb+" bytes.  Marking connection healthy."),a.Cb=!0,a.I.sd()):a.I&&10240<a.I.rb?a.f("Connection exceeded healthy timeout but has sent "+
	a.I.rb+" bytes.  Leaving connection alive."):(a.f("Closing unhealthy connection after timeout."),a.close()))},Math.floor(b)))}function tg(a,b){return function(c){b===a.I?(a.I=null,c||0!==a.L?1===a.L&&a.f("Realtime connection lost."):(a.f("Realtime connection failed."),"s-"===a.M.bb.substr(0,2)&&(Xb.remove("host:"+a.M.host),a.M.bb=a.M.host)),a.close()):b===a.D?(a.f("Secondary connection lost."),c=a.D,a.D=null,a.Xc!==c&&a.Rc!==c||a.close()):a.f("closing an old connection")}}
	function sg(a,b){return function(c){if(2!=a.L)if(b===a.Rc){var d=cd("t",c);c=cd("d",c);if("c"==d){if(d=cd("t",c),"d"in c)if(c=c.d,"h"===d){var d=c.ts,e=c.v,f=c.h;a.xf=c.s;dc(a.M,f);0==a.L&&(a.I.start(),ug(a,a.I,d),"5"!==e&&L("Protocol version mismatch detected"),c=a.zf,(c=1<c.Wc.length?c.Wc[1]:null)&&vg(a,c))}else if("n"===d){a.f("recvd end transmission on primary");a.Rc=a.D;for(c=0;c<a.Ad.length;++c)a.wd(a.Ad[c]);a.Ad=[];wg(a)}else"s"===d?(a.f("Connection shutdown command received. Shutting down..."),
	a.se&&(a.se(c),a.se=null),a.ja=null,a.close()):"r"===d?(a.f("Reset packet received.  New host: "+c),dc(a.M,c),1===a.L?a.close():(xg(a),rg(a))):"e"===d?Wc("Server Error: "+c):"o"===d?(a.f("got pong on primary."),yg(a),zg(a)):Wc("Unknown control packet command: "+d)}else"d"==d&&a.wd(c)}else if(b===a.D)if(d=cd("t",c),c=cd("d",c),"c"==d)"t"in c&&(c=c.t,"a"===c?Ag(a):"r"===c?(a.f("Got a reset on secondary, closing it"),a.D.close(),a.Xc!==a.D&&a.Rc!==a.D||a.close()):"o"===c&&(a.f("got pong on secondary."),
	a.wf--,Ag(a)));else if("d"==d)a.Ad.push(c);else throw Error("Unknown protocol layer: "+d);else a.f("message on old connection")}}qg.prototype.ua=function(a){Bg(this,{t:"d",d:a})};function wg(a){a.Xc===a.D&&a.Rc===a.D&&(a.f("cleaning up and promoting a connection: "+a.D.Zd),a.I=a.D,a.D=null)}
	function Ag(a){0>=a.wf?(a.f("Secondary connection is healthy."),a.Cb=!0,a.D.sd(),a.D.start(),a.f("sending client ack on secondary"),a.D.send({t:"c",d:{t:"a",d:{}}}),a.f("Ending transmission on primary"),a.I.send({t:"c",d:{t:"n",d:{}}}),a.Xc=a.D,wg(a)):(a.f("sending ping on secondary."),a.D.send({t:"c",d:{t:"p",d:{}}}))}qg.prototype.wd=function(a){yg(this);this.te(a)};function yg(a){a.Cb||(a.xe--,0>=a.xe&&(a.f("Primary connection is healthy."),a.Cb=!0,a.I.sd()))}
	function vg(a,b){a.D=new b("c:"+a.id+":"+a.Ne++,a.M,a.xf);a.wf=b.responsesRequiredToBeHealthy||0;a.D.open(sg(a,a.D),tg(a,a.D));setTimeout(function(){a.D&&(a.f("Timed out trying to upgrade."),a.D.close())},Math.floor(6E4))}function ug(a,b,c){a.f("Realtime connection established.");a.I=b;a.L=1;a.Mc&&(a.Mc(c,a.xf),a.Mc=null);0===a.xe?(a.f("Primary connection is healthy."),a.Cb=!0):setTimeout(function(){zg(a)},Math.floor(5E3))}
	function zg(a){a.Cb||1!==a.L||(a.f("sending ping on primary."),Bg(a,{t:"c",d:{t:"p",d:{}}}))}function Bg(a,b){if(1!==a.L)throw"Connection is not connected";a.Xc.send(b)}qg.prototype.close=function(){2!==this.L&&(this.f("Closing realtime connection."),this.L=2,xg(this),this.ja&&(this.ja(),this.ja=null))};function xg(a){a.f("Shutting down all connections");a.I&&(a.I.close(),a.I=null);a.D&&(a.D.close(),a.D=null);a.md&&(clearTimeout(a.md),a.md=null)};function Cg(a,b,c,d,e,f){this.id=Dg++;this.f=Vc("p:"+this.id+":");this.qd={};this.$={};this.pa=[];this.Pc=0;this.Lc=[];this.ma=!1;this.Va=1E3;this.td=3E5;this.Hb=b;this.Kc=c;this.ue=d;this.M=a;this.pb=this.Ia=this.Db=this.ze=null;this.Vd=e;this.de=!1;this.ke=0;if(f)throw Error("Auth override specified in options, but not supported on non Node.js platforms");this.Je=f||null;this.vb=null;this.Nb=!1;this.Gd={};this.sg=0;this.Ue=!0;this.Bc=this.me=null;Eg(this,0);Fe.Wb().hc("visible",this.ig,this);-1===
	a.host.indexOf("fblocal")&&Pe.Wb().hc("online",this.hg,this)}var Dg=0,Fg=0;g=Cg.prototype;g.ua=function(a,b,c){var d=++this.sg;a={r:d,a:a,b:b};this.f(B(a));E(this.ma,"sendRequest call when we're not connected not allowed.");this.Ia.ua(a);c&&(this.Gd[d]=c)};
	g.cf=function(a,b,c,d){var e=a.ya(),f=a.path.toString();this.f("Listen called for "+f+" "+e);this.$[f]=this.$[f]||{};E(xf(a.n)||!T(a.n),"listen() called for non-default but complete query");E(!this.$[f][e],"listen() called twice for same path/queryId.");a={G:d,ld:b,og:a,tag:c};this.$[f][e]=a;this.ma&&Gg(this,a)};
	function Gg(a,b){var c=b.og,d=c.path.toString(),e=c.ya();a.f("Listen on "+d+" for "+e);var f={p:d};b.tag&&(f.q=wf(c.n),f.t=b.tag);f.h=b.ld();a.ua("q",f,function(f){var k=f.d,m=f.s;if(k&&"object"===typeof k&&Hb(k,"w")){var l=A(k,"w");da(l)&&0<=Fa(l,"no_index")&&L("Using an unspecified index. Consider adding "+('".indexOn": "'+c.n.g.toString()+'"')+" at "+c.path.toString()+" to your security rules for better performance")}(a.$[d]&&a.$[d][e])===b&&(a.f("listen response",f),"ok"!==m&&Hg(a,d,e),b.G&&b.G(m,
	k))})}g.pf=function(a){this.pb=a;this.f("Auth token refreshed");this.pb?Ig(this):this.ma&&this.ua("unauth",{},function(){});if(a&&40===a.length||jd(a))this.f("Admin auth credential detected.  Reducing max reconnect time."),this.td=3E4};function Ig(a){if(a.ma&&a.pb){var b=a.pb,c={cred:b};a.Je&&(c.authvar=a.Je);a.ua("auth",c,function(c){var e=c.s;c=c.d||"error";a.pb===b&&("ok"===e?this.ke=0:Jg(a,e,c))})}}
	g.Df=function(a,b){var c=a.path.toString(),d=a.ya();this.f("Unlisten called for "+c+" "+d);E(xf(a.n)||!T(a.n),"unlisten() called for non-default but complete query");if(Hg(this,c,d)&&this.ma){var e=wf(a.n);this.f("Unlisten on "+c+" for "+d);c={p:c};b&&(c.q=e,c.t=b);this.ua("n",c)}};g.re=function(a,b,c){this.ma?Kg(this,"o",a,b,c):this.Lc.push({we:a,action:"o",data:b,G:c})};g.ff=function(a,b,c){this.ma?Kg(this,"om",a,b,c):this.Lc.push({we:a,action:"om",data:b,G:c})};
	g.xd=function(a,b){this.ma?Kg(this,"oc",a,null,b):this.Lc.push({we:a,action:"oc",data:null,G:b})};function Kg(a,b,c,d,e){c={p:c,d:d};a.f("onDisconnect "+b,c);a.ua(b,c,function(a){e&&setTimeout(function(){e(a.s,a.d)},Math.floor(0))})}g.put=function(a,b,c,d){Lg(this,"p",a,b,c,d)};g.df=function(a,b,c,d){Lg(this,"m",a,b,c,d)};function Lg(a,b,c,d,e,f){d={p:c,d:d};p(f)&&(d.h=f);a.pa.push({action:b,rf:d,G:e});a.Pc++;b=a.pa.length-1;a.ma?Mg(a,b):a.f("Buffering put: "+c)}
	function Mg(a,b){var c=a.pa[b].action,d=a.pa[b].rf,e=a.pa[b].G;a.pa[b].pg=a.ma;a.ua(c,d,function(d){a.f(c+" response",d);delete a.pa[b];a.Pc--;0===a.Pc&&(a.pa=[]);e&&e(d.s,d.d)})}g.ye=function(a){this.ma&&(a={c:a},this.f("reportStats",a),this.ua("s",a,function(a){"ok"!==a.s&&this.f("reportStats","Error sending stats: "+a.d)}))};
	g.wd=function(a){if("r"in a){this.f("from server: "+B(a));var b=a.r,c=this.Gd[b];c&&(delete this.Gd[b],c(a.b))}else{if("error"in a)throw"A server-side error has occurred: "+a.error;"a"in a&&(b=a.a,a=a.b,this.f("handleServerMessage",b,a),"d"===b?this.Hb(a.p,a.d,!1,a.t):"m"===b?this.Hb(a.p,a.d,!0,a.t):"c"===b?Ng(this,a.p,a.q):"ac"===b?Jg(this,a.s,a.d):"sd"===b?this.ze?this.ze(a):"msg"in a&&"undefined"!==typeof console&&console.log("FIREBASE: "+a.msg.replace("\n","\nFIREBASE: ")):Wc("Unrecognized action received from server: "+
	B(b)+"\nAre you using the latest client?"))}};g.Mc=function(a,b){this.f("connection ready");this.ma=!0;this.Bc=(new Date).getTime();this.ue({serverTimeOffset:a-(new Date).getTime()});this.Db=b;if(this.Ue){var c={};c["sdk.js."+firebase.SDK_VERSION.replace(/\./g,"-")]=1;Pb()?c["framework.cordova"]=1:"object"===typeof navigator&&"ReactNative"===navigator.product&&(c["framework.reactnative"]=1);this.ye(c)}Og(this);this.Ue=!1;this.Kc(!0)};
	function Eg(a,b){E(!a.Ia,"Scheduling a connect when we're already connected/ing?");a.vb&&clearTimeout(a.vb);a.vb=setTimeout(function(){a.vb=null;Pg(a)},Math.floor(b))}g.ig=function(a){a&&!this.Nb&&this.Va===this.td&&(this.f("Window became visible.  Reducing delay."),this.Va=1E3,this.Ia||Eg(this,0));this.Nb=a};g.hg=function(a){a?(this.f("Browser went online."),this.Va=1E3,this.Ia||Eg(this,0)):(this.f("Browser went offline.  Killing connection."),this.Ia&&this.Ia.close())};
	g.hf=function(){this.f("data client disconnected");this.ma=!1;this.Ia=null;for(var a=0;a<this.pa.length;a++){var b=this.pa[a];b&&"h"in b.rf&&b.pg&&(b.G&&b.G("disconnect"),delete this.pa[a],this.Pc--)}0===this.Pc&&(this.pa=[]);this.Gd={};Qg(this)&&(this.Nb?this.Bc&&(3E4<(new Date).getTime()-this.Bc&&(this.Va=1E3),this.Bc=null):(this.f("Window isn't visible.  Delaying reconnect."),this.Va=this.td,this.me=(new Date).getTime()),a=Math.max(0,this.Va-((new Date).getTime()-this.me)),a*=Math.random(),this.f("Trying to reconnect in "+
	a+"ms"),Eg(this,a),this.Va=Math.min(this.td,1.3*this.Va));this.Kc(!1)};
	function Pg(a){if(Qg(a)){a.f("Making a connection attempt");a.me=(new Date).getTime();a.Bc=null;var b=r(a.wd,a),c=r(a.Mc,a),d=r(a.hf,a),e=a.id+":"+Fg++,f=a.Db,h=!1,k=null,m=function(){k?k.close():(h=!0,d())};a.Ia={close:m,ua:function(a){E(k,"sendRequest call when we're not connected not allowed.");k.ua(a)}};var l=a.de;a.de=!1;a.Vd.getToken(l).then(function(l){h?I("getToken() completed but was canceled"):(I("getToken() completed. Creating connection."),a.pb=l&&l.accessToken,k=new qg(e,a.M,b,c,d,function(b){L(b+
	" ("+a.M.toString()+")");a.eb("server_kill")},f))}).then(null,function(b){a.f("Failed to get token: "+b);h||m()})}}g.eb=function(a){I("Interrupting connection for reason: "+a);this.qd[a]=!0;this.Ia?this.Ia.close():(this.vb&&(clearTimeout(this.vb),this.vb=null),this.ma&&this.hf())};g.lc=function(a){I("Resuming connection for reason: "+a);delete this.qd[a];ua(this.qd)&&(this.Va=1E3,this.Ia||Eg(this,0))};
	function Ng(a,b,c){c=c?Ia(c,function(a){return dd(a)}).join("$"):"default";(a=Hg(a,b,c))&&a.G&&a.G("permission_denied")}function Hg(a,b,c){b=(new M(b)).toString();var d;p(a.$[b])?(d=a.$[b][c],delete a.$[b][c],0===na(a.$[b])&&delete a.$[b]):d=void 0;return d}
	function Jg(a,b,c){I("Auth token revoked: "+b+"/"+c);a.pb=null;a.de=!0;a.Ia.close();"invalid_token"===b&&(a.ke++,3<=a.ke&&(a.Va=3E4,L("Provided authentication credentials are invalid. This usually indicates your FirebaseApp instance was not initialized correctly. Make sure your apiKey and databaseURL match the values provided for your app at https://console.firebase.google.com/, or if you're using a service account, make sure it's authorized to access the specified databaseURL and is from the correct project.")))}
	function Og(a){Ig(a);t(a.$,function(b){t(b,function(b){Gg(a,b)})});for(var b=0;b<a.pa.length;b++)a.pa[b]&&Mg(a,b);for(;a.Lc.length;)b=a.Lc.shift(),Kg(a,b.action,b.we,b.data,b.G)}function Qg(a){var b;b=Pe.Wb().ic;return ua(a.qd)&&b};function Rg(a){this.X=a}var Sg=new Rg(new oe(null));function Tg(a,b,c){if(b.e())return new Rg(new oe(c));var d=se(a.X,b);if(null!=d){var e=d.path,d=d.value;b=R(e,b);d=d.F(b,c);return new Rg(a.X.set(e,d))}a=Ld(a.X,b,new oe(c));return new Rg(a)}function Ug(a,b,c){var d=a;Ib(c,function(a,c){d=Tg(d,b.m(a),c)});return d}Rg.prototype.Ed=function(a){if(a.e())return Sg;a=Ld(this.X,a,Q);return new Rg(a)};function Vg(a,b){var c=se(a.X,b);return null!=c?a.X.get(c.path).Q(R(c.path,b)):null}
	function Wg(a){var b=[],c=a.X.value;null!=c?c.J()||c.P(N,function(a,c){b.push(new O(a,c))}):a.X.children.ia(function(a,c){null!=c.value&&b.push(new O(a,c.value))});return b}function Xg(a,b){if(b.e())return a;var c=Vg(a,b);return null!=c?new Rg(new oe(c)):new Rg(a.X.subtree(b))}Rg.prototype.e=function(){return this.X.e()};Rg.prototype.apply=function(a){return Yg(C,this.X,a)};
	function Yg(a,b,c){if(null!=b.value)return c.F(a,b.value);var d=null;b.children.ia(function(b,f){".priority"===b?(E(null!==f.value,"Priority writes must always be leaf nodes"),d=f.value):c=Yg(a.m(b),f,c)});c.Q(a).e()||null===d||(c=c.F(a.m(".priority"),d));return c};function Zg(){this.T=Sg;this.la=[];this.Cc=-1}function $g(a,b){for(var c=0;c<a.la.length;c++){var d=a.la[c];if(d.Zc===b)return d}return null}g=Zg.prototype;
	g.Ed=function(a){var b=Ma(this.la,function(b){return b.Zc===a});E(0<=b,"removeWrite called with nonexistent writeId.");var c=this.la[b];this.la.splice(b,1);for(var d=c.visible,e=!1,f=this.la.length-1;d&&0<=f;){var h=this.la[f];h.visible&&(f>=b&&ah(h,c.path)?d=!1:c.path.contains(h.path)&&(e=!0));f--}if(d){if(e)this.T=bh(this.la,ch,C),this.Cc=0<this.la.length?this.la[this.la.length-1].Zc:-1;else if(c.Ja)this.T=this.T.Ed(c.path);else{var k=this;t(c.children,function(a,b){k.T=k.T.Ed(c.path.m(b))})}return!0}return!1};
	g.Ba=function(a,b,c,d){if(c||d){var e=Xg(this.T,a);return!d&&e.e()?b:d||null!=b||null!=Vg(e,C)?(e=bh(this.la,function(b){return(b.visible||d)&&(!c||!(0<=Fa(c,b.Zc)))&&(b.path.contains(a)||a.contains(b.path))},a),b=b||F,e.apply(b)):null}e=Vg(this.T,a);if(null!=e)return e;e=Xg(this.T,a);return e.e()?b:null!=b||null!=Vg(e,C)?(b=b||F,e.apply(b)):null};
	g.sc=function(a,b){var c=F,d=Vg(this.T,a);if(d)d.J()||d.P(N,function(a,b){c=c.U(a,b)});else if(b){var e=Xg(this.T,a);b.P(N,function(a,b){var d=Xg(e,new M(a)).apply(b);c=c.U(a,d)});Ga(Wg(e),function(a){c=c.U(a.name,a.S)})}else e=Xg(this.T,a),Ga(Wg(e),function(a){c=c.U(a.name,a.S)});return c};g.$c=function(a,b,c,d){E(c||d,"Either existingEventSnap or existingServerSnap must exist");a=a.m(b);if(null!=Vg(this.T,a))return null;a=Xg(this.T,a);return a.e()?d.Q(b):a.apply(d.Q(b))};
	g.rc=function(a,b,c){a=a.m(b);var d=Vg(this.T,a);return null!=d?d:nc(c,b)?Xg(this.T,a).apply(c.j().R(b)):null};g.mc=function(a){return Vg(this.T,a)};g.Xd=function(a,b,c,d,e,f){var h;a=Xg(this.T,a);h=Vg(a,C);if(null==h)if(null!=b)h=a.apply(b);else return[];h=h.ob(f);if(h.e()||h.J())return[];b=[];a=Se(f);e=e?h.$b(c,f):h.Yb(c,f);for(f=K(e);f&&b.length<d;)0!==a(f,c)&&b.push(f),f=K(e);return b};
	function ah(a,b){return a.Ja?a.path.contains(b):!!sa(a.children,function(c,d){return a.path.m(d).contains(b)})}function ch(a){return a.visible}
	function bh(a,b,c){for(var d=Sg,e=0;e<a.length;++e){var f=a[e];if(b(f)){var h=f.path;if(f.Ja)c.contains(h)?(h=R(c,h),d=Tg(d,h,f.Ja)):h.contains(c)&&(h=R(h,c),d=Tg(d,C,f.Ja.Q(h)));else if(f.children)if(c.contains(h))h=R(c,h),d=Ug(d,h,f.children);else{if(h.contains(c))if(h=R(h,c),h.e())d=Ug(d,C,f.children);else if(f=A(f.children,J(h)))f=f.Q(D(h)),d=Tg(d,C,f)}else throw Pc("WriteRecord should have .snap or .children");}}return d}function dh(a,b){this.Mb=a;this.X=b}g=dh.prototype;
	g.Ba=function(a,b,c){return this.X.Ba(this.Mb,a,b,c)};g.sc=function(a){return this.X.sc(this.Mb,a)};g.$c=function(a,b,c){return this.X.$c(this.Mb,a,b,c)};g.mc=function(a){return this.X.mc(this.Mb.m(a))};g.Xd=function(a,b,c,d,e){return this.X.Xd(this.Mb,a,b,c,d,e)};g.rc=function(a,b){return this.X.rc(this.Mb,a,b)};g.m=function(a){return new dh(this.Mb.m(a),this.X)};function Ke(){this.k=this.B=null}Ke.prototype.find=function(a){if(null!=this.B)return this.B.Q(a);if(a.e()||null==this.k)return null;var b=J(a);a=D(a);return this.k.contains(b)?this.k.get(b).find(a):null};function Me(a,b,c){if(b.e())a.B=c,a.k=null;else if(null!==a.B)a.B=a.B.F(b,c);else{null==a.k&&(a.k=new Ge);var d=J(b);a.k.contains(d)||a.k.add(d,new Ke);a=a.k.get(d);b=D(b);Me(a,b,c)}}
	function eh(a,b){if(b.e())return a.B=null,a.k=null,!0;if(null!==a.B){if(a.B.J())return!1;var c=a.B;a.B=null;c.P(N,function(b,c){Me(a,new M(b),c)});return eh(a,b)}return null!==a.k?(c=J(b),b=D(b),a.k.contains(c)&&eh(a.k.get(c),b)&&a.k.remove(c),a.k.e()?(a.k=null,!0):!1):!0}function Le(a,b,c){null!==a.B?c(b,a.B):a.P(function(a,e){var f=new M(b.toString()+"/"+a);Le(e,f,c)})}Ke.prototype.P=function(a){null!==this.k&&He(this.k,function(b,c){a(b,c)})};function U(a,b){this.ta=a;this.qa=b}U.prototype.cancel=function(a){x("Firebase.onDisconnect().cancel",0,1,arguments.length);y("Firebase.onDisconnect().cancel",1,a,!0);var b=new Eb;this.ta.xd(this.qa,Fb(b,a));return b.ra};U.prototype.cancel=U.prototype.cancel;U.prototype.remove=function(a){x("Firebase.onDisconnect().remove",0,1,arguments.length);de("Firebase.onDisconnect().remove",this.qa);y("Firebase.onDisconnect().remove",1,a,!0);var b=new Eb;fh(this.ta,this.qa,null,Fb(b,a));return b.ra};
	U.prototype.remove=U.prototype.remove;U.prototype.set=function(a,b){x("Firebase.onDisconnect().set",1,2,arguments.length);de("Firebase.onDisconnect().set",this.qa);Wd("Firebase.onDisconnect().set",a,this.qa,!1);y("Firebase.onDisconnect().set",2,b,!0);var c=new Eb;fh(this.ta,this.qa,a,Fb(c,b));return c.ra};U.prototype.set=U.prototype.set;
	U.prototype.Kb=function(a,b,c){x("Firebase.onDisconnect().setWithPriority",2,3,arguments.length);de("Firebase.onDisconnect().setWithPriority",this.qa);Wd("Firebase.onDisconnect().setWithPriority",a,this.qa,!1);$d("Firebase.onDisconnect().setWithPriority",2,b);y("Firebase.onDisconnect().setWithPriority",3,c,!0);var d=new Eb;gh(this.ta,this.qa,a,b,Fb(d,c));return d.ra};U.prototype.setWithPriority=U.prototype.Kb;
	U.prototype.update=function(a,b){x("Firebase.onDisconnect().update",1,2,arguments.length);de("Firebase.onDisconnect().update",this.qa);if(da(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;L("Passing an Array to Firebase.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Zd("Firebase.onDisconnect().update",a,this.qa);y("Firebase.onDisconnect().update",2,b,!0);
	c=new Eb;hh(this.ta,this.qa,a,Fb(c,b));return c.ra};U.prototype.update=U.prototype.update;function V(a,b,c){this.A=a;this.W=b;this.g=c}V.prototype.H=function(){x("Firebase.DataSnapshot.val",0,0,arguments.length);return this.A.H()};V.prototype.val=V.prototype.H;V.prototype.Te=function(){x("Firebase.DataSnapshot.exportVal",0,0,arguments.length);return this.A.H(!0)};V.prototype.exportVal=V.prototype.Te;V.prototype.Uf=function(){x("Firebase.DataSnapshot.exists",0,0,arguments.length);return!this.A.e()};V.prototype.exists=V.prototype.Uf;
	V.prototype.m=function(a){x("Firebase.DataSnapshot.child",0,1,arguments.length);fa(a)&&(a=String(a));ce("Firebase.DataSnapshot.child",a);var b=new M(a),c=this.W.m(b);return new V(this.A.Q(b),c,N)};V.prototype.child=V.prototype.m;V.prototype.Fa=function(a){x("Firebase.DataSnapshot.hasChild",1,1,arguments.length);ce("Firebase.DataSnapshot.hasChild",a);var b=new M(a);return!this.A.Q(b).e()};V.prototype.hasChild=V.prototype.Fa;
	V.prototype.C=function(){x("Firebase.DataSnapshot.getPriority",0,0,arguments.length);return this.A.C().H()};V.prototype.getPriority=V.prototype.C;V.prototype.forEach=function(a){x("Firebase.DataSnapshot.forEach",1,1,arguments.length);y("Firebase.DataSnapshot.forEach",1,a,!1);if(this.A.J())return!1;var b=this;return!!this.A.P(this.g,function(c,d){return a(new V(d,b.W.m(c),N))})};V.prototype.forEach=V.prototype.forEach;
	V.prototype.kd=function(){x("Firebase.DataSnapshot.hasChildren",0,0,arguments.length);return this.A.J()?!1:!this.A.e()};V.prototype.hasChildren=V.prototype.kd;V.prototype.getKey=function(){x("Firebase.DataSnapshot.key",0,0,arguments.length);return this.W.getKey()};id(V.prototype,"key",V.prototype.getKey);V.prototype.Fb=function(){x("Firebase.DataSnapshot.numChildren",0,0,arguments.length);return this.A.Fb()};V.prototype.numChildren=V.prototype.Fb;
	V.prototype.xb=function(){x("Firebase.DataSnapshot.ref",0,0,arguments.length);return this.W};id(V.prototype,"ref",V.prototype.xb);function ih(a,b,c){this.Qb=a;this.sb=b;this.ub=c||null}g=ih.prototype;g.sf=function(a){return"value"===a};g.createEvent=function(a,b){var c=b.n.g;return new ic("value",this,new V(a.Ma,b.xb(),c))};g.Ub=function(a){var b=this.ub;if("cancel"===a.ge()){E(this.sb,"Raising a cancel event on a listener with no cancel callback");var c=this.sb;return function(){c.call(b,a.error)}}var d=this.Qb;return function(){d.call(b,a.Md)}};g.Oe=function(a,b){return this.sb?new jc(this,a,b):null};
	g.matches=function(a){return a instanceof ih?a.Qb&&this.Qb?a.Qb===this.Qb&&a.ub===this.ub:!0:!1};g.$e=function(){return null!==this.Qb};function jh(a,b,c){this.ha=a;this.sb=b;this.ub=c}g=jh.prototype;g.sf=function(a){a="children_added"===a?"child_added":a;return("children_removed"===a?"child_removed":a)in this.ha};g.Oe=function(a,b){return this.sb?new jc(this,a,b):null};
	g.createEvent=function(a,b){E(null!=a.Za,"Child events should have a childName.");var c=b.xb().m(a.Za);return new ic(a.type,this,new V(a.Ma,c,b.n.g),a.Dd)};g.Ub=function(a){var b=this.ub;if("cancel"===a.ge()){E(this.sb,"Raising a cancel event on a listener with no cancel callback");var c=this.sb;return function(){c.call(b,a.error)}}var d=this.ha[a.gd];return function(){d.call(b,a.Md,a.Dd)}};
	g.matches=function(a){if(a instanceof jh){if(!this.ha||!a.ha)return!0;if(this.ub===a.ub){var b=na(a.ha);if(b===na(this.ha)){if(1===b){var b=oa(a.ha),c=oa(this.ha);return c===b&&(!a.ha[b]||!this.ha[c]||a.ha[b]===this.ha[c])}return ma(this.ha,function(b,c){return a.ha[c]===b})}}}return!1};g.$e=function(){return null!==this.ha};function kh(){this.Aa={}}g=kh.prototype;g.e=function(){return ua(this.Aa)};g.gb=function(a,b,c){var d=a.source.Ib;if(null!==d)return d=A(this.Aa,d),E(null!=d,"SyncTree gave us an op for an invalid query."),d.gb(a,b,c);var e=[];t(this.Aa,function(d){e=e.concat(d.gb(a,b,c))});return e};g.Ob=function(a,b,c,d,e){var f=a.ya(),h=A(this.Aa,f);if(!h){var h=c.Ba(e?d:null),k=!1;h?k=!0:(h=d instanceof P?c.sc(d):F,k=!1);h=new If(a,new Fd(new oc(h,k,!1),new oc(d,e,!1)));this.Aa[f]=h}h.Ob(b);return Lf(h,b)};
	g.mb=function(a,b,c){var d=a.ya(),e=[],f=[],h=null!=lh(this);if("default"===d){var k=this;t(this.Aa,function(a,d){f=f.concat(a.mb(b,c));a.e()&&(delete k.Aa[d],T(a.W.n)||e.push(a.W))})}else{var m=A(this.Aa,d);m&&(f=f.concat(m.mb(b,c)),m.e()&&(delete this.Aa[d],T(m.W.n)||e.push(m.W)))}h&&null==lh(this)&&e.push(new W(a.w,a.path));return{rg:e,Sf:f}};function mh(a){return Ha(pa(a.Aa),function(a){return!T(a.W.n)})}g.jb=function(a){var b=null;t(this.Aa,function(c){b=b||c.jb(a)});return b};
	function nh(a,b){if(T(b.n))return lh(a);var c=b.ya();return A(a.Aa,c)}function lh(a){return ta(a.Aa,function(a){return T(a.W.n)})||null};function oh(a){this.wa=Q;this.lb=new Zg;this.De={};this.jc={};this.Dc=a}function ph(a,b,c,d,e){var f=a.lb,h=e;E(d>f.Cc,"Stacking an older write on top of newer ones");p(h)||(h=!0);f.la.push({path:b,Ja:c,Zc:d,visible:h});h&&(f.T=Tg(f.T,b,c));f.Cc=d;return e?qh(a,new ac(Ce,b,c)):[]}function rh(a,b,c,d){var e=a.lb;E(d>e.Cc,"Stacking an older merge on top of newer ones");e.la.push({path:b,children:c,Zc:d,visible:!0});e.T=Ug(e.T,b,c);e.Cc=d;c=qe(c);return qh(a,new kd(Ce,b,c))}
	function sh(a,b,c){c=c||!1;var d=$g(a.lb,b);if(a.lb.Ed(b)){var e=Q;null!=d.Ja?e=e.set(C,!0):Ib(d.children,function(a,b){e=e.set(new M(a),b)});return qh(a,new Be(d.path,e,c))}return[]}function th(a,b,c){c=qe(c);return qh(a,new kd(Ee,b,c))}function uh(a,b,c,d){d=vh(a,d);if(null!=d){var e=wh(d);d=e.path;e=e.Ib;b=R(d,b);c=new ac(new De(!1,!0,e,!0),b,c);return xh(a,d,c)}return[]}
	function yh(a,b,c,d){if(d=vh(a,d)){var e=wh(d);d=e.path;e=e.Ib;b=R(d,b);c=qe(c);c=new kd(new De(!1,!0,e,!0),b,c);return xh(a,d,c)}return[]}
	oh.prototype.Ob=function(a,b){var c=a.path,d=null,e=!1;xe(this.wa,c,function(a,b){var f=R(a,c);d=d||b.jb(f);e=e||null!=lh(b)});var f=this.wa.get(c);f?(e=e||null!=lh(f),d=d||f.jb(C)):(f=new kh,this.wa=this.wa.set(c,f));var h;null!=d?h=!0:(h=!1,d=F,Ae(this.wa.subtree(c),function(a,b){var c=b.jb(C);c&&(d=d.U(a,c))}));var k=null!=nh(f,a);if(!k&&!T(a.n)){var m=zh(a);E(!(m in this.jc),"View does not exist, but we have a tag");var l=Ah++;this.jc[m]=l;this.De["_"+l]=m}h=f.Ob(a,b,new dh(c,this.lb),d,h);k||
	e||(f=nh(f,a),h=h.concat(Bh(this,a,f)));return h};
	oh.prototype.mb=function(a,b,c){var d=a.path,e=this.wa.get(d),f=[];if(e&&("default"===a.ya()||null!=nh(e,a))){f=e.mb(a,b,c);e.e()&&(this.wa=this.wa.remove(d));e=f.rg;f=f.Sf;b=-1!==Ma(e,function(a){return T(a.n)});var h=ve(this.wa,d,function(a,b){return null!=lh(b)});if(b&&!h&&(d=this.wa.subtree(d),!d.e()))for(var d=Ch(d),k=0;k<d.length;++k){var m=d[k],l=m.W,m=Dh(this,m);this.Dc.Ae(Eh(l),Fh(this,l),m.ld,m.G)}if(!h&&0<e.length&&!c)if(b)this.Dc.Od(Eh(a),null);else{var u=this;Ga(e,function(a){a.ya();
	var b=u.jc[zh(a)];u.Dc.Od(Eh(a),b)})}Gh(this,e)}return f};oh.prototype.Ba=function(a,b){var c=this.lb,d=ve(this.wa,a,function(b,c){var d=R(b,a);if(d=c.jb(d))return d});return c.Ba(a,d,b,!0)};function Ch(a){return te(a,function(a,c,d){if(c&&null!=lh(c))return[lh(c)];var e=[];c&&(e=mh(c));t(d,function(a){e=e.concat(a)});return e})}function Gh(a,b){for(var c=0;c<b.length;++c){var d=b[c];if(!T(d.n)){var d=zh(d),e=a.jc[d];delete a.jc[d];delete a.De["_"+e]}}}
	function Eh(a){return T(a.n)&&!xf(a.n)?a.xb():a}function Bh(a,b,c){var d=b.path,e=Fh(a,b);c=Dh(a,c);b=a.Dc.Ae(Eh(b),e,c.ld,c.G);d=a.wa.subtree(d);if(e)E(null==lh(d.value),"If we're adding a query, it shouldn't be shadowed");else for(e=te(d,function(a,b,c){if(!a.e()&&b&&null!=lh(b))return[Jf(lh(b))];var d=[];b&&(d=d.concat(Ia(mh(b),function(a){return a.W})));t(c,function(a){d=d.concat(a)});return d}),d=0;d<e.length;++d)c=e[d],a.Dc.Od(Eh(c),Fh(a,c));return b}
	function Dh(a,b){var c=b.W,d=Fh(a,c);return{ld:function(){return(b.u()||F).hash()},G:function(b){if("ok"===b){if(d){var f=c.path;if(b=vh(a,d)){var h=wh(b);b=h.path;h=h.Ib;f=R(b,f);f=new Zb(new De(!1,!0,h,!0),f);b=xh(a,b,f)}else b=[]}else b=qh(a,new Zb(Ee,c.path));return b}f="Unknown Error";"too_big"===b?f="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"==b?f="Client doesn't have permission to access the desired data.":"unavailable"==b&&
	(f="The service is unavailable");f=Error(b+" at "+c.path.toString()+": "+f);f.code=b.toUpperCase();return a.mb(c,null,f)}}}function zh(a){return a.path.toString()+"$"+a.ya()}function wh(a){var b=a.indexOf("$");E(-1!==b&&b<a.length-1,"Bad queryKey.");return{Ib:a.substr(b+1),path:new M(a.substr(0,b))}}function vh(a,b){var c=a.De,d="_"+b;return d in c?c[d]:void 0}function Fh(a,b){var c=zh(b);return A(a.jc,c)}var Ah=1;
	function xh(a,b,c){var d=a.wa.get(b);E(d,"Missing sync point for query tag that we're tracking");return d.gb(c,new dh(b,a.lb),null)}function qh(a,b){return Hh(a,b,a.wa,null,new dh(C,a.lb))}function Hh(a,b,c,d,e){if(b.path.e())return Ih(a,b,c,d,e);var f=c.get(C);null==d&&null!=f&&(d=f.jb(C));var h=[],k=J(b.path),m=b.Nc(k);if((c=c.children.get(k))&&m)var l=d?d.R(k):null,k=e.m(k),h=h.concat(Hh(a,m,c,l,k));f&&(h=h.concat(f.gb(b,e,d)));return h}
	function Ih(a,b,c,d,e){var f=c.get(C);null==d&&null!=f&&(d=f.jb(C));var h=[];c.children.ia(function(c,f){var l=d?d.R(c):null,u=e.m(c),z=b.Nc(c);z&&(h=h.concat(Ih(a,z,f,l,u)))});f&&(h=h.concat(f.gb(b,e,d)));return h};function X(a,b,c,d){this.w=a;this.path=b;this.n=c;this.Oc=d}
	function Jh(a){var b=null,c=null;a.ka&&(b=qd(a));a.na&&(c=sd(a));if(a.g===Md){if(a.ka){if("[MIN_NAME]"!=pd(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==typeof b)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}if(a.na){if("[MAX_NAME]"!=rd(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==
	typeof c)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}}else if(a.g===N){if(null!=b&&!Vd(b)||null!=c&&!Vd(c))throw Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).");}else if(E(a.g instanceof Ue||a.g===$e,"unknown index type."),null!=b&&"object"===typeof b||null!=c&&"object"===typeof c)throw Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.");
	}function Kh(a){if(a.ka&&a.na&&a.xa&&(!a.xa||""===a.oc))throw Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.");}function Lh(a,b){if(!0===a.Oc)throw Error(b+": You can't combine multiple orderBy calls.");}g=X.prototype;g.xb=function(){x("Query.ref",0,0,arguments.length);return new W(this.w,this.path)};
	g.hc=function(a,b,c,d){x("Query.on",2,4,arguments.length);ae("Query.on",a,!1);y("Query.on",2,b,!1);var e=Mh("Query.on",c,d);if("value"===a)Nh(this.w,this,new ih(b,e.cancel||null,e.Pa||null));else{var f={};f[a]=b;Nh(this.w,this,new jh(f,e.cancel,e.Pa))}return b};
	g.Jc=function(a,b,c){x("Query.off",0,3,arguments.length);ae("Query.off",a,!0);y("Query.off",2,b,!0);Cb("Query.off",3,c);var d=null,e=null;"value"===a?d=new ih(b||null,null,c||null):a&&(b&&(e={},e[a]=b),d=new jh(e,null,c||null));e=this.w;d=".info"===J(this.path)?e.pd.mb(this,d):e.K.mb(this,d);tc(e.da,this.path,d)};
	g.jg=function(a,b){function c(k){f&&(f=!1,e.Jc(a,c),b&&b.call(d.Pa,k),h.resolve(k))}x("Query.once",1,4,arguments.length);ae("Query.once",a,!1);y("Query.once",2,b,!0);var d=Mh("Query.once",arguments[2],arguments[3]),e=this,f=!0,h=new Eb;Gb(h.ra);this.hc(a,c,function(b){e.Jc(a,c);d.cancel&&d.cancel.call(d.Pa,b);h.reject(b)});return h.ra};
	g.ne=function(a){x("Query.limitToFirst",1,1,arguments.length);if(!fa(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToFirst: First argument must be a positive integer.");if(this.n.xa)throw Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new X(this.w,this.path,this.n.ne(a),this.Oc)};
	g.oe=function(a){x("Query.limitToLast",1,1,arguments.length);if(!fa(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToLast: First argument must be a positive integer.");if(this.n.xa)throw Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new X(this.w,this.path,this.n.oe(a),this.Oc)};
	g.kg=function(a){x("Query.orderByChild",1,1,arguments.length);if("$key"===a)throw Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');if("$priority"===a)throw Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');if("$value"===a)throw Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');ce("Query.orderByChild",a);Lh(this,"Query.orderByChild");var b=new M(a);if(b.e())throw Error("Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.");
	b=new Ue(b);b=vf(this.n,b);Jh(b);return new X(this.w,this.path,b,!0)};g.lg=function(){x("Query.orderByKey",0,0,arguments.length);Lh(this,"Query.orderByKey");var a=vf(this.n,Md);Jh(a);return new X(this.w,this.path,a,!0)};g.mg=function(){x("Query.orderByPriority",0,0,arguments.length);Lh(this,"Query.orderByPriority");var a=vf(this.n,N);Jh(a);return new X(this.w,this.path,a,!0)};
	g.ng=function(){x("Query.orderByValue",0,0,arguments.length);Lh(this,"Query.orderByValue");var a=vf(this.n,$e);Jh(a);return new X(this.w,this.path,a,!0)};g.Nd=function(a,b){x("Query.startAt",0,2,arguments.length);Wd("Query.startAt",a,this.path,!0);be("Query.startAt",b);var c=this.n.Nd(a,b);Kh(c);Jh(c);if(this.n.ka)throw Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");p(a)||(b=a=null);return new X(this.w,this.path,c,this.Oc)};
	g.fd=function(a,b){x("Query.endAt",0,2,arguments.length);Wd("Query.endAt",a,this.path,!0);be("Query.endAt",b);var c=this.n.fd(a,b);Kh(c);Jh(c);if(this.n.na)throw Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");return new X(this.w,this.path,c,this.Oc)};
	g.Qf=function(a,b){x("Query.equalTo",1,2,arguments.length);Wd("Query.equalTo",a,this.path,!1);be("Query.equalTo",b);if(this.n.ka)throw Error("Query.equalTo: Starting point was already set (by another call to endAt or equalTo).");if(this.n.na)throw Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");return this.Nd(a,b).fd(a,b)};
	g.toString=function(){x("Query.toString",0,0,arguments.length);for(var a=this.path,b="",c=a.Z;c<a.o.length;c++)""!==a.o[c]&&(b+="/"+encodeURIComponent(String(a.o[c])));return this.w.toString()+(b||"/")};g.ya=function(){var a=dd(wf(this.n));return"{}"===a?"default":a};
	function Mh(a,b,c){var d={cancel:null,Pa:null};if(b&&c)d.cancel=b,y(a,3,d.cancel,!0),d.Pa=c,Cb(a,4,d.Pa);else if(b)if("object"===typeof b&&null!==b)d.Pa=b;else if("function"===typeof b)d.cancel=b;else throw Error(Bb(a,3,!0)+" must either be a cancel callback or a context object.");return d}X.prototype.on=X.prototype.hc;X.prototype.off=X.prototype.Jc;X.prototype.once=X.prototype.jg;X.prototype.limitToFirst=X.prototype.ne;X.prototype.limitToLast=X.prototype.oe;X.prototype.orderByChild=X.prototype.kg;
	X.prototype.orderByKey=X.prototype.lg;X.prototype.orderByPriority=X.prototype.mg;X.prototype.orderByValue=X.prototype.ng;X.prototype.startAt=X.prototype.Nd;X.prototype.endAt=X.prototype.fd;X.prototype.equalTo=X.prototype.Qf;X.prototype.toString=X.prototype.toString;id(X.prototype,"ref",X.prototype.xb);function Oh(a){a instanceof Ph||Xc("Don't call new Database() directly - please use firebase.database().");this.ta=a;this.ba=new W(a,C);this.INTERNAL=new Qh(this)}var Rh={TIMESTAMP:{".sv":"timestamp"}};g=Oh.prototype;g.app=null;g.of=function(a){Sh(this,"ref");x("database.ref",0,1,arguments.length);return p(a)?this.ba.m(a):this.ba};
	g.qg=function(a){Sh(this,"database.refFromURL");x("database.refFromURL",1,1,arguments.length);var b=Yc(a);ee("database.refFromURL",b);var c=b.kc;c.host!==this.ta.M.host&&Xc("database.refFromURL: Host name does not match the current database: (found "+c.host+" but expected "+this.ta.M.host+")");return this.of(b.path.toString())};function Sh(a,b){null===a.ta&&Xc("Cannot call "+b+" on a deleted database.")}g.Zf=function(){x("database.goOffline",0,0,arguments.length);Sh(this,"goOffline");this.ta.eb()};
	g.$f=function(){x("database.goOnline",0,0,arguments.length);Sh(this,"goOnline");this.ta.lc()};Object.defineProperty(Oh.prototype,"app",{get:function(){return this.ta.app}});function Qh(a){this.$a=a}Qh.prototype.delete=function(){Sh(this.$a,"delete");var a=Th.Wb(),b=this.$a.ta;A(a.nb,b.app.name)!==b&&Xc("Database "+b.app.name+" has already been deleted.");b.eb();delete a.nb[b.app.name];this.$a.ta=null;this.$a.ba=null;this.$a=this.$a.INTERNAL=null;return Promise.resolve()};Oh.prototype.ref=Oh.prototype.of;
	Oh.prototype.refFromURL=Oh.prototype.qg;Oh.prototype.goOnline=Oh.prototype.$f;Oh.prototype.goOffline=Oh.prototype.Zf;Qh.prototype["delete"]=Qh.prototype.delete;function Ph(a,b,c){this.app=c;var d=new Pf(c);this.M=a;this.Xa=Xf(a);this.Vc=null;this.da=new qc;this.vd=1;this.Ua=null;if(b||0<=("object"===typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i))this.va=new Mf(this.M,r(this.Hb,this),d),setTimeout(r(this.Kc,this,!0),0);else{b=c.options.databaseAuthVariableOverride||null;if(null!==b){if("object"!==ca(b))throw Error("Only objects are supported for option databaseAuthVariableOverride");
	try{B(b)}catch(e){throw Error("Invalid authOverride provided: "+e);}}this.va=this.Ua=new Cg(this.M,r(this.Hb,this),r(this.Kc,this),r(this.ue,this),d,b)}var f=this;Qf(d,function(a){f.va.pf(a)});this.xg=Yf(a,r(function(){return new Uf(this.Xa,this.va)},this));this.nc=new ge;this.ie=new fc;this.pd=new oh({Ae:function(a,b,c,d){b=[];c=f.ie.j(a.path);c.e()||(b=qh(f.pd,new ac(Ee,a.path,c)),setTimeout(function(){d("ok")},0));return b},Od:aa});Uh(this,"connected",!1);this.ja=new Ke;this.$a=new Oh(this);this.ed=
	0;this.je=null;this.K=new oh({Ae:function(a,b,c,d){f.va.cf(a,c,b,function(b,c){var e=d(b,c);vc(f.da,a.path,e)});return[]},Od:function(a,b){f.va.Df(a,b)}})}g=Ph.prototype;g.toString=function(){return(this.M.Sc?"https://":"http://")+this.M.host};g.name=function(){return this.M.pe};function Vh(a){a=a.ie.j(new M(".info/serverTimeOffset")).H()||0;return(new Date).getTime()+a}function Wh(a){a=a={timestamp:Vh(a)};a.timestamp=a.timestamp||(new Date).getTime();return a}
	g.Hb=function(a,b,c,d){this.ed++;var e=new M(a);b=this.je?this.je(a,b):b;a=[];d?c?(b=la(b,function(a){return S(a)}),a=yh(this.K,e,b,d)):(b=S(b),a=uh(this.K,e,b,d)):c?(d=la(b,function(a){return S(a)}),a=th(this.K,e,d)):(d=S(b),a=qh(this.K,new ac(Ee,e,d)));d=e;0<a.length&&(d=Xh(this,e));vc(this.da,d,a)};g.Kc=function(a){Uh(this,"connected",a);!1===a&&Yh(this)};g.ue=function(a){var b=this;fd(a,function(a,d){Uh(b,d,a)})};
	function Uh(a,b,c){b=new M("/.info/"+b);c=S(c);var d=a.ie;d.Jd=d.Jd.F(b,c);c=qh(a.pd,new ac(Ee,b,c));vc(a.da,b,c)}g.Kb=function(a,b,c,d){this.f("set",{path:a.toString(),value:b,Dg:c});var e=Wh(this);b=S(b,c);var e=Ne(b,e),f=this.vd++,e=ph(this.K,a,e,f,!0);rc(this.da,e);var h=this;this.va.put(a.toString(),b.H(!0),function(b,c){var e="ok"===b;e||L("set at "+a+" failed: "+b);e=sh(h.K,f,!e);vc(h.da,a,e);Zh(d,b,c)});e=$h(this,a);Xh(this,e);vc(this.da,e,[])};
	g.update=function(a,b,c){this.f("update",{path:a.toString(),value:b});var d=!0,e=Wh(this),f={};t(b,function(a,b){d=!1;var c=S(a);f[b]=Ne(c,e)});if(d)I("update() called with empty data.  Don't do anything."),Zh(c,"ok");else{var h=this.vd++,k=rh(this.K,a,f,h);rc(this.da,k);var m=this;this.va.df(a.toString(),b,function(b,d){var e="ok"===b;e||L("update at "+a+" failed: "+b);var e=sh(m.K,h,!e),f=a;0<e.length&&(f=Xh(m,a));vc(m.da,f,e);Zh(c,b,d)});b=$h(this,a);Xh(this,b);vc(this.da,a,[])}};
	function Yh(a){a.f("onDisconnectEvents");var b=Wh(a),c=[];Le(Je(a.ja,b),C,function(b,e){c=c.concat(qh(a.K,new ac(Ee,b,e)));var f=$h(a,b);Xh(a,f)});a.ja=new Ke;vc(a.da,C,c)}g.xd=function(a,b){var c=this;this.va.xd(a.toString(),function(d,e){"ok"===d&&eh(c.ja,a);Zh(b,d,e)})};function fh(a,b,c,d){var e=S(c);a.va.re(b.toString(),e.H(!0),function(c,h){"ok"===c&&Me(a.ja,b,e);Zh(d,c,h)})}function gh(a,b,c,d,e){var f=S(c,d);a.va.re(b.toString(),f.H(!0),function(c,d){"ok"===c&&Me(a.ja,b,f);Zh(e,c,d)})}
	function hh(a,b,c,d){var e=!0,f;for(f in c)e=!1;e?(I("onDisconnect().update() called with empty data.  Don't do anything."),Zh(d,"ok")):a.va.ff(b.toString(),c,function(e,f){if("ok"===e)for(var m in c){var l=S(c[m]);Me(a.ja,b.m(m),l)}Zh(d,e,f)})}function Nh(a,b,c){c=".info"===J(b.path)?a.pd.Ob(b,c):a.K.Ob(b,c);tc(a.da,b.path,c)}g.eb=function(){this.Ua&&this.Ua.eb("repo_interrupt")};g.lc=function(){this.Ua&&this.Ua.lc("repo_interrupt")};
	g.Be=function(a){if("undefined"!==typeof console){a?(this.Vc||(this.Vc=new Rf(this.Xa)),a=this.Vc.get()):a=this.Xa.get();var b=Ja(qa(a),function(a,b){return Math.max(b.length,a)},0),c;for(c in a){for(var d=a[c],e=c.length;e<b+2;e++)c+=" ";console.log(c+d)}}};g.Ce=function(a){Tf(this.Xa,a);this.xg.yf[a]=!0};g.f=function(a){var b="";this.Ua&&(b=this.Ua.id+":");I(b,arguments)};
	function Zh(a,b,c){a&&Tb(function(){if("ok"==b)a(null);else{var d=(b||"error").toUpperCase(),e=d;c&&(e+=": "+c);e=Error(e);e.code=d;a(e)}})};function ai(a,b,c,d,e){function f(){}a.f("transaction on "+b);var h=new W(a,b);h.hc("value",f);c={path:b,update:c,G:d,status:null,kf:Oc(),Ie:e,uf:0,Rd:function(){h.Jc("value",f)},Td:null,Da:null,bd:null,cd:null,dd:null};d=a.K.Ba(b,void 0)||F;c.bd=d;d=c.update(d.H());if(p(d)){Xd("transaction failed: Data returned ",d,c.path);c.status=1;e=he(a.nc,b);var k=e.Ea()||[];k.push(c);ie(e,k);"object"===typeof d&&null!==d&&Hb(d,".priority")?(k=A(d,".priority"),E(Vd(k),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):
	k=(a.K.Ba(b)||F).C().H();e=Wh(a);d=S(d,k);e=Ne(d,e);c.cd=d;c.dd=e;c.Da=a.vd++;c=ph(a.K,b,e,c.Da,c.Ie);vc(a.da,b,c);bi(a)}else c.Rd(),c.cd=null,c.dd=null,c.G&&(a=new V(c.bd,new W(a,c.path),N),c.G(null,!1,a))}function bi(a,b){var c=b||a.nc;b||ci(a,c);if(null!==c.Ea()){var d=di(a,c);E(0<d.length,"Sending zero length transaction queue");Ka(d,function(a){return 1===a.status})&&ei(a,c.path(),d)}else c.kd()&&c.P(function(b){bi(a,b)})}
	function ei(a,b,c){for(var d=Ia(c,function(a){return a.Da}),e=a.K.Ba(b,d)||F,d=e,e=e.hash(),f=0;f<c.length;f++){var h=c[f];E(1===h.status,"tryToSendTransactionQueue_: items in queue should all be run.");h.status=2;h.uf++;var k=R(b,h.path),d=d.F(k,h.cd)}d=d.H(!0);a.va.put(b.toString(),d,function(d){a.f("transaction put response",{path:b.toString(),status:d});var e=[];if("ok"===d){d=[];for(f=0;f<c.length;f++){c[f].status=3;e=e.concat(sh(a.K,c[f].Da));if(c[f].G){var h=c[f].dd,k=new W(a,c[f].path);d.push(r(c[f].G,
	null,null,!0,new V(h,k,N)))}c[f].Rd()}ci(a,he(a.nc,b));bi(a);vc(a.da,b,e);for(f=0;f<d.length;f++)Tb(d[f])}else{if("datastale"===d)for(f=0;f<c.length;f++)c[f].status=4===c[f].status?5:1;else for(L("transaction at "+b.toString()+" failed: "+d),f=0;f<c.length;f++)c[f].status=5,c[f].Td=d;Xh(a,b)}},e)}function Xh(a,b){var c=fi(a,b),d=c.path(),c=di(a,c);gi(a,c,d);return d}
	function gi(a,b,c){if(0!==b.length){for(var d=[],e=[],f=Ia(b,function(a){return a.Da}),h=0;h<b.length;h++){var k=b[h],m=R(c,k.path),l=!1,u;E(null!==m,"rerunTransactionsUnderNode_: relativePath should not be null.");if(5===k.status)l=!0,u=k.Td,e=e.concat(sh(a.K,k.Da,!0));else if(1===k.status)if(25<=k.uf)l=!0,u="maxretry",e=e.concat(sh(a.K,k.Da,!0));else{var z=a.K.Ba(k.path,f)||F;k.bd=z;var G=b[h].update(z.H());p(G)?(Xd("transaction failed: Data returned ",G,k.path),m=S(G),"object"===typeof G&&null!=
	G&&Hb(G,".priority")||(m=m.ga(z.C())),z=k.Da,G=Wh(a),G=Ne(m,G),k.cd=m,k.dd=G,k.Da=a.vd++,Na(f,z),e=e.concat(ph(a.K,k.path,G,k.Da,k.Ie)),e=e.concat(sh(a.K,z,!0))):(l=!0,u="nodata",e=e.concat(sh(a.K,k.Da,!0)))}vc(a.da,c,e);e=[];l&&(b[h].status=3,setTimeout(b[h].Rd,Math.floor(0)),b[h].G&&("nodata"===u?(k=new W(a,b[h].path),d.push(r(b[h].G,null,null,!1,new V(b[h].bd,k,N)))):d.push(r(b[h].G,null,Error(u),!1,null))))}ci(a,a.nc);for(h=0;h<d.length;h++)Tb(d[h]);bi(a)}}
	function fi(a,b){for(var c,d=a.nc;null!==(c=J(b))&&null===d.Ea();)d=he(d,c),b=D(b);return d}function di(a,b){var c=[];hi(a,b,c);c.sort(function(a,b){return a.kf-b.kf});return c}function hi(a,b,c){var d=b.Ea();if(null!==d)for(var e=0;e<d.length;e++)c.push(d[e]);b.P(function(b){hi(a,b,c)})}function ci(a,b){var c=b.Ea();if(c){for(var d=0,e=0;e<c.length;e++)3!==c[e].status&&(c[d]=c[e],d++);c.length=d;ie(b,0<c.length?c:null)}b.P(function(b){ci(a,b)})}
	function $h(a,b){var c=fi(a,b).path(),d=he(a.nc,b);le(d,function(b){ii(a,b)});ii(a,d);ke(d,function(b){ii(a,b)});return c}
	function ii(a,b){var c=b.Ea();if(null!==c){for(var d=[],e=[],f=-1,h=0;h<c.length;h++)4!==c[h].status&&(2===c[h].status?(E(f===h-1,"All SENT items should be at beginning of queue."),f=h,c[h].status=4,c[h].Td="set"):(E(1===c[h].status,"Unexpected transaction status in abort"),c[h].Rd(),e=e.concat(sh(a.K,c[h].Da,!0)),c[h].G&&d.push(r(c[h].G,null,Error("set"),!1,null))));-1===f?ie(b,null):c.length=f+1;vc(a.da,b.path(),e);for(h=0;h<d.length;h++)Tb(d[h])}};function Th(){this.nb={};this.Ef=!1}Th.prototype.eb=function(){for(var a in this.nb)this.nb[a].eb()};Th.prototype.lc=function(){for(var a in this.nb)this.nb[a].lc()};Th.prototype.ce=function(a){this.Ef=a};ba(Th);Th.prototype.interrupt=Th.prototype.eb;Th.prototype.resume=Th.prototype.lc;var Y={};Y.pc=Cg;Y.DataConnection=Y.pc;Cg.prototype.wg=function(a,b){this.ua("q",{p:a},b)};Y.pc.prototype.simpleListen=Y.pc.prototype.wg;Cg.prototype.Pf=function(a,b){this.ua("echo",{d:a},b)};Y.pc.prototype.echo=Y.pc.prototype.Pf;Cg.prototype.interrupt=Cg.prototype.eb;Y.Hf=qg;Y.RealTimeConnection=Y.Hf;qg.prototype.sendRequest=qg.prototype.ua;qg.prototype.close=qg.prototype.close;
	Y.ag=function(a){var b=Cg.prototype.put;Cg.prototype.put=function(c,d,e,f){p(f)&&(f=a());b.call(this,c,d,e,f)};return function(){Cg.prototype.put=b}};Y.hijackHash=Y.ag;Y.Gf=cc;Y.ConnectionTarget=Y.Gf;Y.ya=function(a){return a.ya()};Y.queryIdentifier=Y.ya;Y.dg=function(a){return a.w.Ua.$};Y.listens=Y.dg;Y.ce=function(a){Th.Wb().ce(a)};Y.forceRestClient=Y.ce;Y.Context=Th;var Z={Wf:function(){fg=ag=!0}};Z.forceLongPolling=Z.Wf;Z.Xf=function(){gg=!0};Z.forceWebSockets=Z.Xf;Z.cg=function(){return $f.isAvailable()};Z.isWebSocketsAvailable=Z.cg;Z.vg=function(a,b){a.w.Ua.ze=b};Z.setSecurityDebugCallback=Z.vg;Z.Be=function(a,b){a.w.Be(b)};Z.stats=Z.Be;Z.Ce=function(a,b){a.w.Ce(b)};Z.statsIncrementCounter=Z.Ce;Z.ed=function(a){return a.w.ed};Z.dataUpdateCount=Z.ed;Z.bg=function(a,b){a.w.je=b};Z.interceptServerData=Z.bg;function ji(a,b){this.committed=a;this.snapshot=b};function W(a,b){if(!(a instanceof Ph))throw Error("new Firebase() no longer supported - use app.database().");X.call(this,a,b,tf,!1);this.then=void 0;this["catch"]=void 0}ka(W,X);g=W.prototype;g.getKey=function(){x("Firebase.key",0,0,arguments.length);return this.path.e()?null:Id(this.path)};
	g.m=function(a){x("Firebase.child",1,1,arguments.length);if(fa(a))a=String(a);else if(!(a instanceof M))if(null===J(this.path)){var b=a;b&&(b=b.replace(/^\/*\.info(\/|$)/,"/"));ce("Firebase.child",b)}else ce("Firebase.child",a);return new W(this.w,this.path.m(a))};g.getParent=function(){x("Firebase.parent",0,0,arguments.length);var a=this.path.parent();return null===a?null:new W(this.w,a)};
	g.Yf=function(){x("Firebase.ref",0,0,arguments.length);for(var a=this;null!==a.getParent();)a=a.getParent();return a};g.Of=function(){return this.w.$a};g.set=function(a,b){x("Firebase.set",1,2,arguments.length);de("Firebase.set",this.path);Wd("Firebase.set",a,this.path,!1);y("Firebase.set",2,b,!0);var c=new Eb;this.w.Kb(this.path,a,null,Fb(c,b));return c.ra};
	g.update=function(a,b){x("Firebase.update",1,2,arguments.length);de("Firebase.update",this.path);if(da(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;L("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Zd("Firebase.update",a,this.path);y("Firebase.update",2,b,!0);c=new Eb;this.w.update(this.path,a,Fb(c,b));return c.ra};
	g.Kb=function(a,b,c){x("Firebase.setWithPriority",2,3,arguments.length);de("Firebase.setWithPriority",this.path);Wd("Firebase.setWithPriority",a,this.path,!1);$d("Firebase.setWithPriority",2,b);y("Firebase.setWithPriority",3,c,!0);if(".length"===this.getKey()||".keys"===this.getKey())throw"Firebase.setWithPriority failed: "+this.getKey()+" is a read-only object.";var d=new Eb;this.w.Kb(this.path,a,b,Fb(d,c));return d.ra};
	g.remove=function(a){x("Firebase.remove",0,1,arguments.length);de("Firebase.remove",this.path);y("Firebase.remove",1,a,!0);return this.set(null,a)};
	g.transaction=function(a,b,c){x("Firebase.transaction",1,3,arguments.length);de("Firebase.transaction",this.path);y("Firebase.transaction",1,a,!1);y("Firebase.transaction",2,b,!0);if(p(c)&&"boolean"!=typeof c)throw Error(Bb("Firebase.transaction",3,!0)+"must be a boolean.");if(".length"===this.getKey()||".keys"===this.getKey())throw"Firebase.transaction failed: "+this.getKey()+" is a read-only object.";"undefined"===typeof c&&(c=!0);var d=new Eb;ga(b)&&Gb(d.ra);ai(this.w,this.path,a,function(a,c,
	h){a?d.reject(a):d.resolve(new ji(c,h));ga(b)&&b(a,c,h)},c);return d.ra};g.ug=function(a,b){x("Firebase.setPriority",1,2,arguments.length);de("Firebase.setPriority",this.path);$d("Firebase.setPriority",1,a);y("Firebase.setPriority",2,b,!0);var c=new Eb;this.w.Kb(this.path.m(".priority"),a,null,Fb(c,b));return c.ra};
	g.push=function(a,b){x("Firebase.push",0,2,arguments.length);de("Firebase.push",this.path);Wd("Firebase.push",a,this.path,!0);y("Firebase.push",2,b,!0);var c=Vh(this.w),d=Nd(c),c=this.m(d);if(null!=a){var e=this,f=c.set(a,b).then(function(){return e.m(d)});c.then=r(f.then,f);c["catch"]=r(f.then,f,void 0);ga(b)&&Gb(f)}return c};g.kb=function(){de("Firebase.onDisconnect",this.path);return new U(this.w,this.path)};W.prototype.child=W.prototype.m;W.prototype.set=W.prototype.set;W.prototype.update=W.prototype.update;
	W.prototype.setWithPriority=W.prototype.Kb;W.prototype.remove=W.prototype.remove;W.prototype.transaction=W.prototype.transaction;W.prototype.setPriority=W.prototype.ug;W.prototype.push=W.prototype.push;W.prototype.onDisconnect=W.prototype.kb;id(W.prototype,"database",W.prototype.Of);id(W.prototype,"key",W.prototype.getKey);id(W.prototype,"parent",W.prototype.getParent);id(W.prototype,"root",W.prototype.Yf);if("undefined"===typeof firebase)throw Error("Cannot install Firebase Database - be sure to load firebase-app.js first.");
	try{firebase.INTERNAL.registerService("database",function(a){var b=Th.Wb(),c=a.options.databaseURL;p(c)||Xc("Can't determine Firebase Database URL.  Be sure to include databaseURL option when calling firebase.intializeApp().");var d=Yc(c),c=d.kc;ee("Invalid Firebase Database URL",d);d.path.e()||Xc("Database URL must point to the root of a Firebase Database (not including a child path).");(d=A(b.nb,a.name))&&Xc("FIREBASE INTERNAL ERROR: Database initialized multiple times.");d=new Ph(c,b.Ef,a);b.nb[a.name]=
	d;return d.$a},{Reference:W,Query:X,Database:Oh,enableLogging:Uc,INTERNAL:Z,TEST_ACCESS:Y,ServerValue:Rh})}catch(ki){Xc("Failed to register the Firebase Database Service ("+ki+")")};})();

	(function() {var k,aa=aa||{},m=this,n=function(a){return void 0!==a},ba=function(){},p=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=
	typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ca=function(a){var b=p(a);return"array"==b||"object"==b&&"number"==typeof a.length},q=function(a){return"string"==typeof a},r=function(a){return"function"==p(a)},da=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},ea="closure_uid_"+(1E9*Math.random()>>>0),fa=0,ga=function(a,b,c){return a.call.apply(a.bind,
	arguments)},ha=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},t=function(a,b,c){t=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ga:ha;return t.apply(null,arguments)},ia=Date.now||function(){return+new Date},u=function(a,b){function c(){}
	c.prototype=b.prototype;a.J=b.prototype;a.prototype=new c;a.Ma=function(a,c,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[c].apply(a,g)}};var ja=function(a,b,c){function d(){N||(N=!0,b.apply(null,arguments))}function e(b){l=setTimeout(function(){l=null;a(f,2===x)},b)}function f(a,b){if(!N)if(a)d.apply(null,arguments);else if(2===x||B)d.apply(null,arguments);else{64>h&&(h*=2);var c;1===x?(x=2,c=0):c=1E3*(h+Math.random());e(c)}}function g(a){Ub||(Ub=!0,N||(null!==l?(a||(x=2),clearTimeout(l),e(0)):a||(x=1)))}var h=1,l=null,B=!1,x=0,N=!1,Ub=!1;e(0);setTimeout(function(){B=!0;g(!0)},c);return g};var ka="https://firebasestorage.googleapis.com";var v=function(a,b){this.code="storage/"+a;this.message="Firebase Storage: "+b;this.serverResponse=null;this.name="FirebaseError"};u(v,Error);var la=function(){return new v("unknown","An unknown error occurred, please check the error payload for server response.")},ma=function(){return new v("canceled","User canceled the upload/download.")},na=function(a,b,c){return new v("invalid-argument","Invalid argument in `"+b+"` at index "+a+": "+c)},oa=function(){return new v("app-deleted","The Firebase app was deleted.")};var pa=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},qa=function(a){var b={};pa(a,function(a,d){b[a]=d});return b};var w=function(a,b,c,d){this.l=a;this.f={};this.i=b;this.b={};this.c="";this.N=c;this.g=this.a=null;this.h=[200];this.j=d};var ra={STATE_CHANGED:"state_changed"},sa={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"},ta=function(a){switch(a){case "running":case "pausing":case "canceling":return"running";case "paused":return"paused";case "success":return"success";case "canceled":return"canceled";case "error":return"error";default:return"error"}};var y=function(a){return n(a)&&null!==a},ua=function(a){return"string"===typeof a||a instanceof String};var va=function(a,b,c){this.f=c;this.c=a;this.g=b;this.b=0;this.a=null};va.prototype.get=function(){var a;0<this.b?(this.b--,a=this.a,this.a=a.next,a.next=null):a=this.c();return a};var wa=function(a,b){a.g(b);a.b<a.f&&(a.b++,b.next=a.a,a.a=b)};var xa=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,xa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};u(xa,Error);xa.prototype.name="CustomError";var ya=function(a,b,c,d,e){this.reset(a,b,c,d,e)};ya.prototype.a=null;var za=0;ya.prototype.reset=function(a,b,c,d,e){"number"==typeof e||za++;d||ia();this.b=b;delete this.a};var Aa=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b},Ba=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b},Ca="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),Da=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ca.length;f++)c=Ca[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var Ea=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0},Fa=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};var Ga=function(a){Ga[" "](a);return a};Ga[" "]=ba;var Ha=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")},Ia=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},Ja=function(a,b){return a<b?-1:a>b?1:0};var Ka=function(a,b){this.a=a;this.b=b};Ka.prototype.clone=function(){return new Ka(this.a,this.b)};var z=function(a,b){this.bucket=a;this.path=b},La=function(a){var b=encodeURIComponent;return"/b/"+b(a.bucket)+"/o/"+b(a.path)},Ma=function(a){for(var b=null,c=[{ka:/^gs:\/\/([A-Za-z0-9.\-]+)(\/(.*))?$/i,da:{bucket:1,path:3},ja:function(a){"/"===a.path.charAt(a.path.length-1)&&(a.path=a.path.slice(0,-1))}},{ka:/^https?:\/\/firebasestorage\.googleapis\.com\/v[A-Za-z0-9_]+\/b\/([A-Za-z0-9.\-]+)\/o(\/([^?#]*).*)?$/i,da:{bucket:1,path:3},ja:function(a){a.path=decodeURIComponent(a.path)}}],d=0;d<c.length;d++){var e=
	c[d],f=e.ka.exec(a);if(f){b=f[e.da.bucket];(f=f[e.da.path])||(f="");b=new z(b,f);e.ja(b);break}}if(null==b)throw new v("invalid-url","Invalid URL '"+a+"'.");return b};var Na=function(a,b,c){r(a)||y(b)||y(c)?(this.next=a,this.error=b||null,this.a=c||null):(this.next=a.next||null,this.error=a.error||null,this.a=a.complete||null)};var Oa=function(a){var b=encodeURIComponent,c="?";pa(a,function(a,e){a=b(a)+"="+b(e);c=c+a+"&"});return c=c.slice(0,-1)};var A=function(a,b,c,d,e,f){this.b=a;this.h=b;this.f=c;this.a=d;this.g=e;this.c=f};k=A.prototype;k.qa=function(){return this.b};k.La=function(){return this.h};k.Ia=function(){return this.f};k.Da=function(){return this.a};k.sa=function(){if(y(this.a)){var a=this.a.downloadURLs;return y(a)&&y(a[0])?a[0]:null}return null};k.Ka=function(){return this.g};k.Ga=function(){return this.c};var Pa=function(a,b){b.unshift(a);xa.call(this,Ha.apply(null,b));b.shift()};u(Pa,xa);Pa.prototype.name="AssertionError";
	var Qa=function(a,b,c,d){var e="Assertion failed";if(c)var e=e+(": "+c),f=d;else a&&(e+=": "+a,f=b);throw new Pa(""+e,f||[]);},C=function(a,b,c){a||Qa("",null,b,Array.prototype.slice.call(arguments,2))},Ra=function(a,b){throw new Pa("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));},Sa=function(a,b,c){r(a)||Qa("Expected function but got %s: %s.",[p(a),a],b,Array.prototype.slice.call(arguments,2))};var D=function(){this.g=this.g;this.s=this.s};D.prototype.g=!1;D.prototype.ga=function(){this.g||(this.g=!0,this.C())};D.prototype.C=function(){if(this.s)for(;this.s.length;)this.s.shift()()};var Ta="closure_listenable_"+(1E6*Math.random()|0),Ua=0;var Wa;a:{var Xa=m.navigator;if(Xa){var Ya=Xa.userAgent;if(Ya){Wa=Ya;break a}}Wa=""}var E=function(a){return-1!=Wa.indexOf(a)};var Za=function(){};Za.prototype.a=null;var ab=function(a){var b;(b=a.a)||(b={},$a(a)&&(b[0]=!0,b[1]=!0),b=a.a=b);return b};var bb=Array.prototype.indexOf?function(a,b,c){C(null!=a.length);return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(q(a))return q(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},cb=Array.prototype.forEach?function(a,b,c){C(null!=a.length);Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},db=Array.prototype.filter?function(a,
	b,c){C(null!=a.length);return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=q(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var l=g[h];b.call(c,l,h,a)&&(e[f++]=l)}return e},eb=Array.prototype.map?function(a,b,c){C(null!=a.length);return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=q(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},fb=Array.prototype.some?function(a,b,c){C(null!=a.length);return Array.prototype.some.call(a,
	b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1},hb=function(a){var b;a:{b=gb;for(var c=a.length,d=q(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:q(a)?a.charAt(b):a[b]},ib=function(a){if("array"!=p(a))for(var b=a.length-1;0<=b;b--)delete a[b];a.length=0},jb=function(a,b){b=bb(a,b);var c;if(c=0<=b)C(null!=a.length),Array.prototype.splice.call(a,b,1);return c},kb=function(a){var b=
	a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var mb=new va(function(){return new lb},function(a){a.reset()},100),ob=function(){var a=nb,b=null;a.a&&(b=a.a,a.a=a.a.next,a.a||(a.b=null),b.next=null);return b},lb=function(){this.next=this.b=this.a=null};lb.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null};lb.prototype.reset=function(){this.next=this.b=this.a=null};var pb=function(a,b){this.type=a;this.a=this.target=b;this.la=!0};pb.prototype.b=function(){this.la=!1};var qb=function(a,b,c,d,e){this.listener=a;this.a=null;this.src=b;this.type=c;this.W=!!d;this.N=e;++Ua;this.O=this.V=!1},rb=function(a){a.O=!0;a.listener=null;a.a=null;a.src=null;a.N=null};var sb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;var tb=function(a,b){b=db(b.split("/"),function(a){return 0<a.length}).join("/");return 0===a.length?b:a+"/"+b},ub=function(a){var b=a.lastIndexOf("/",a.length-2);return-1===b?a:a.slice(b+1)};var vb=function(a){this.src=a;this.a={};this.b=0},xb=function(a,b,c,d,e,f){var g=b.toString();b=a.a[g];b||(b=a.a[g]=[],a.b++);var h=wb(b,c,e,f);-1<h?(a=b[h],d||(a.V=!1)):(a=new qb(c,a.src,g,!!e,f),a.V=d,b.push(a));return a},yb=function(a,b){var c=b.type;c in a.a&&jb(a.a[c],b)&&(rb(b),0==a.a[c].length&&(delete a.a[c],a.b--))},wb=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.O&&f.listener==b&&f.W==!!c&&f.N==d)return e}return-1};var zb,Ab=function(){};u(Ab,Za);var Bb=function(a){return(a=$a(a))?new ActiveXObject(a):new XMLHttpRequest},$a=function(a){if(!a.b&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.b=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.b};zb=new Ab;var Cb=function(a){this.a=[];if(a)a:{var b;if(a instanceof Cb){if(b=a.H(),a=a.w(),0>=this.o()){for(var c=this.a,d=0;d<b.length;d++)c.push(new Ka(b[d],a[d]));break a}}else b=Ba(a),a=Aa(a);for(d=0;d<b.length;d++)Db(this,b[d],a[d])}},Db=function(a,b,c){var d=a.a;d.push(new Ka(b,c));b=d.length-1;a=a.a;for(c=a[b];0<b;)if(d=b-1>>1,a[d].a>c.a)a[b]=a[d],b=d;else break;a[b]=c};k=Cb.prototype;k.w=function(){for(var a=this.a,b=[],c=a.length,d=0;d<c;d++)b.push(a[d].b);return b};
	k.H=function(){for(var a=this.a,b=[],c=a.length,d=0;d<c;d++)b.push(a[d].a);return b};k.clone=function(){return new Cb(this)};k.o=function(){return this.a.length};k.I=function(){return 0==this.a.length};k.clear=function(){ib(this.a)};var Eb=function(){this.b=[];this.a=[]},Fb=function(a){0==a.b.length&&(a.b=a.a,a.b.reverse(),a.a=[]);return a.b.pop()};Eb.prototype.o=function(){return this.b.length+this.a.length};Eb.prototype.I=function(){return 0==this.b.length&&0==this.a.length};Eb.prototype.clear=function(){this.b=[];this.a=[]};Eb.prototype.w=function(){for(var a=[],b=this.b.length-1;0<=b;--b)a.push(this.b[b]);for(var c=this.a.length,b=0;b<c;++b)a.push(this.a[b]);return a};var Gb=function(a){if(a.w&&"function"==typeof a.w)return a.w();if(q(a))return a.split("");if(ca(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return Aa(a)},Hb=function(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(ca(a)||q(a))cb(a,b,void 0);else{var c;if(a.H&&"function"==typeof a.H)c=a.H();else if(a.w&&"function"==typeof a.w)c=void 0;else if(ca(a)||q(a)){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=Ba(a);for(var d=Gb(a),e=d.length,f=0;f<e;f++)b.call(void 0,
	d[f],c&&c[f],a)}};var Ib=function(a){m.setTimeout(function(){throw a;},0)},Jb,Kb=function(){var a=m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!E("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,
	a=t(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!E("Trident")&&!E("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(n(c.next)){c=c.next;var a=c.fa;c.fa=null;a()}};return function(a){d.next={fa:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?
	function(a){var b=document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){m.setTimeout(a,0)}};var Lb="StopIteration"in m?m.StopIteration:{message:"StopIteration",stack:""},Mb=function(){};Mb.prototype.next=function(){throw Lb;};Mb.prototype.aa=function(){return this};var Nb=function(){Cb.call(this)};u(Nb,Cb);var Ob=E("Opera"),F=E("Trident")||E("MSIE"),Pb=E("Edge"),Qb=E("Gecko")&&!(-1!=Wa.toLowerCase().indexOf("webkit")&&!E("Edge"))&&!(E("Trident")||E("MSIE"))&&!E("Edge"),Rb=-1!=Wa.toLowerCase().indexOf("webkit")&&!E("Edge"),Sb=function(){var a=m.document;return a?a.documentMode:void 0},Tb;
	a:{var Vb="",Wb=function(){var a=Wa;if(Qb)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Pb)return/Edge\/([\d\.]+)/.exec(a);if(F)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Rb)return/WebKit\/(\S+)/.exec(a);if(Ob)return/(?:Version)[ \/]?(\S+)/.exec(a)}();Wb&&(Vb=Wb?Wb[1]:"");if(F){var Xb=Sb();if(null!=Xb&&Xb>parseFloat(Vb)){Tb=String(Xb);break a}}Tb=Vb}
	var Yb=Tb,Zb={},G=function(a){var b;if(!(b=Zb[a])){b=0;for(var c=Ia(String(Yb)).split("."),d=Ia(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"",l=/(\d*)(\D*)/g,B=/(\d*)(\D*)/g;do{var x=l.exec(g)||["","",""],N=B.exec(h)||["","",""];if(0==x[0].length&&0==N[0].length)break;b=Ja(0==x[1].length?0:parseInt(x[1],10),0==N[1].length?0:parseInt(N[1],10))||Ja(0==x[2].length,0==N[2].length)||Ja(x[2],N[2])}while(0==b)}b=Zb[a]=0<=b}return b},$b=m.document,ac=$b&&
	F?Sb()||("CSS1Compat"==$b.compatMode?parseInt(Yb,10):5):void 0;var ec=function(a,b){bc||cc();dc||(bc(),dc=!0);var c=nb,d=mb.get();d.set(a,b);c.b?c.b.next=d:(C(!c.a),c.a=d);c.b=d},bc,cc=function(){if(m.Promise&&m.Promise.resolve){var a=m.Promise.resolve(void 0);bc=function(){a.then(fc)}}else bc=function(){var a=fc;!r(m.setImmediate)||m.Window&&m.Window.prototype&&!E("Edge")&&m.Window.prototype.setImmediate==m.setImmediate?(Jb||(Jb=Kb()),Jb(a)):m.setImmediate(a)}},dc=!1,nb=new function(){this.b=this.a=null},fc=function(){for(var a;a=ob();){try{a.a.call(a.b)}catch(b){Ib(b)}wa(mb,
	a)}dc=!1};var gc;(gc=!F)||(gc=9<=Number(ac));var hc=gc,ic=F&&!G("9");!Rb||G("528");Qb&&G("1.9b")||F&&G("8")||Ob&&G("9.5")||Rb&&G("528");Qb&&!G("8")||F&&G("9");var jc=function(a,b){this.b={};this.a=[];this.f=this.c=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){a instanceof jc?(c=a.H(),d=a.w()):(c=Ba(a),d=Aa(a));for(var e=0;e<c.length;e++)this.set(c[e],d[e])}};k=jc.prototype;k.o=function(){return this.c};k.w=function(){kc(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.b[this.a[b]]);return a};k.H=function(){kc(this);return this.a.concat()};
	k.I=function(){return 0==this.c};k.clear=function(){this.b={};this.f=this.c=this.a.length=0};
	var lc=function(a,b){return Object.prototype.hasOwnProperty.call(a.b,b)?(delete a.b[b],a.c--,a.f++,a.a.length>2*a.c&&kc(a),!0):!1},kc=function(a){if(a.c!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];Object.prototype.hasOwnProperty.call(a.b,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.c!=a.a.length){for(var e={},c=b=0;b<a.a.length;)d=a.a[b],Object.prototype.hasOwnProperty.call(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}};k=jc.prototype;
	k.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.b,a)?this.b[a]:b};k.set=function(a,b){Object.prototype.hasOwnProperty.call(this.b,a)||(this.c++,this.a.push(a),this.f++);this.b[a]=b};k.forEach=function(a,b){for(var c=this.H(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};k.clone=function(){return new jc(this)};
	k.aa=function(a){kc(this);var b=0,c=this.f,d=this,e=new Mb;e.next=function(){if(c!=d.f)throw Error("The map has changed since the iterator was created");if(b>=d.a.length)throw Lb;var e=d.a[b++];return a?e:d.b[e]};return e};var mc=function(a,b){pb.call(this,a?a.type:"");this.c=this.a=this.target=null;if(a){this.type=a.type;this.target=a.target||a.srcElement;this.a=b;if((b=a.relatedTarget)&&Qb)try{Ga(b.nodeName)}catch(c){}this.c=a;a.defaultPrevented&&this.b()}};u(mc,pb);mc.prototype.b=function(){mc.J.b.call(this);var a=this.c;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,ic)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var H=function(a,b){this.a=0;this.i=void 0;this.c=this.b=this.f=null;this.g=this.h=!1;if(a!=ba)try{var c=this;a.call(b,function(a){nc(c,2,a)},function(a){try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(b){}nc(c,3,a)})}catch(d){nc(this,3,d)}},oc=function(){this.next=this.f=this.c=this.a=this.b=null;this.g=!1};oc.prototype.reset=function(){this.f=this.c=this.a=this.b=null;this.g=!1};
	var pc=new va(function(){return new oc},function(a){a.reset()},100),qc=function(a,b,c){var d=pc.get();d.a=a;d.c=b;d.f=c;return d},rc=function(a){if(a instanceof H)return a;var b=new H(ba);nc(b,2,a);return b},sc=function(a){return new H(function(b,c){c(a)})};
	H.prototype.then=function(a,b,c){null!=a&&Sa(a,"opt_onFulfilled should be a function.");null!=b&&Sa(b,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");return tc(this,r(a)?a:null,r(b)?b:null,c)};Ea(H);H.prototype.l=function(a,b){return tc(this,null,a,b)};
	var vc=function(a,b){a.b||2!=a.a&&3!=a.a||uc(a);C(null!=b.a);a.c?a.c.next=b:a.b=b;a.c=b},tc=function(a,b,c,d){var e=qc(null,null,null);e.b=new H(function(a,g){e.a=b?function(c){try{var e=b.call(d,c);a(e)}catch(B){g(B)}}:a;e.c=c?function(b){try{var e=c.call(d,b);a(e)}catch(B){g(B)}}:g});e.b.f=a;vc(a,e);return e.b};H.prototype.s=function(a){C(1==this.a);this.a=0;nc(this,2,a)};H.prototype.m=function(a){C(1==this.a);this.a=0;nc(this,3,a)};
	var nc=function(a,b,c){if(0==a.a){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.a=1;var d;a:{var e=c,f=a.s,g=a.m;if(e instanceof H)null!=f&&Sa(f,"opt_onFulfilled should be a function."),null!=g&&Sa(g,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),vc(e,qc(f||ba,g||null,a)),d=!0;else if(Fa(e))e.then(f,g,a),d=!0;else{if(da(e))try{var h=e.then;if(r(h)){wc(e,h,f,g,a);d=!0;break a}}catch(l){g.call(a,l);d=!0;break a}d=!1}}d||
	(a.i=c,a.a=b,a.f=null,uc(a),3!=b||xc(a,c))}},wc=function(a,b,c,d,e){var f=!1,g=function(a){f||(f=!0,c.call(e,a))},h=function(a){f||(f=!0,d.call(e,a))};try{b.call(a,g,h)}catch(l){h(l)}},uc=function(a){a.h||(a.h=!0,ec(a.j,a))},yc=function(a){var b=null;a.b&&(b=a.b,a.b=b.next,b.next=null);a.b||(a.c=null);null!=b&&C(null!=b.a);return b};
	H.prototype.j=function(){for(var a;a=yc(this);){var b=this.a,c=this.i;if(3==b&&a.c&&!a.g){var d;for(d=this;d&&d.g;d=d.f)d.g=!1}if(a.b)a.b.f=null,zc(a,b,c);else try{a.g?a.a.call(a.f):zc(a,b,c)}catch(e){Ac.call(null,e)}wa(pc,a)}this.h=!1};var zc=function(a,b,c){2==b?a.a.call(a.f,c):a.c&&a.c.call(a.f,c)},xc=function(a,b){a.g=!0;ec(function(){a.g&&Ac.call(null,b)})},Ac=Ib;var Cc=function(a){this.a=new jc;if(a){a=Gb(a);for(var b=a.length,c=0;c<b;c++){var d=a[c];this.a.set(Bc(d),d)}}},Bc=function(a){var b=typeof a;return"object"==b&&a||"function"==b?"o"+(a[ea]||(a[ea]=++fa)):b.substr(0,1)+a};k=Cc.prototype;k.o=function(){return this.a.o()};k.clear=function(){this.a.clear()};k.I=function(){return this.a.I()};k.w=function(){return this.a.w()};k.clone=function(){return new Cc(this)};k.aa=function(){return this.a.aa(!1)};var Dc=function(a){return function(){var b=[];Array.prototype.push.apply(b,arguments);rc(!0).then(function(){a.apply(null,b)})}};var Ec="closure_lm_"+(1E6*Math.random()|0),Fc={},Gc=0,Hc=function(a,b,c,d,e){if("array"==p(b)){for(var f=0;f<b.length;f++)Hc(a,b[f],c,d,e);return null}c=Ic(c);a&&a[Ta]?(Jc(a),a=xb(a.b,String(b),c,!1,d,e)):a=Kc(a,b,c,!1,d,e);return a},Kc=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=!!e,h=Lc(a);h||(a[Ec]=h=new vb(a));c=xb(h,b,c,d,e,f);if(c.a)return c;d=Mc();c.a=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,g);else if(a.attachEvent)a.attachEvent(Nc(b.toString()),
	d);else throw Error("addEventListener and attachEvent are unavailable.");Gc++;return c},Mc=function(){var a=Oc,b=hc?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b},Pc=function(a,b,c,d,e){if("array"==p(b))for(var f=0;f<b.length;f++)Pc(a,b[f],c,d,e);else c=Ic(c),a&&a[Ta]?xb(a.b,String(b),c,!0,d,e):Kc(a,b,c,!0,d,e)},Qc=function(a,b,c,d,e){if("array"==p(b))for(var f=0;f<b.length;f++)Qc(a,b[f],c,d,e);else(c=Ic(c),a&&a[Ta])?(a=a.b,b=String(b).toString(),
	b in a.a&&(f=a.a[b],c=wb(f,c,d,e),-1<c&&(rb(f[c]),C(null!=f.length),Array.prototype.splice.call(f,c,1),0==f.length&&(delete a.a[b],a.b--)))):a&&(a=Lc(a))&&(b=a.a[b.toString()],a=-1,b&&(a=wb(b,c,!!d,e)),(c=-1<a?b[a]:null)&&Rc(c))},Rc=function(a){if("number"!=typeof a&&a&&!a.O){var b=a.src;if(b&&b[Ta])yb(b.b,a);else{var c=a.type,d=a.a;b.removeEventListener?b.removeEventListener(c,d,a.W):b.detachEvent&&b.detachEvent(Nc(c),d);Gc--;(c=Lc(b))?(yb(c,a),0==c.b&&(c.src=null,b[Ec]=null)):rb(a)}}},Nc=function(a){return a in
	Fc?Fc[a]:Fc[a]="on"+a},Tc=function(a,b,c,d){var e=!0;if(a=Lc(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.W==c&&!f.O&&(f=Sc(f,d),e=e&&!1!==f)}return e},Sc=function(a,b){var c=a.listener,d=a.N||a.src;a.V&&Rc(a);return c.call(d,b)},Oc=function(a,b){if(a.O)return!0;if(!hc){if(!b)a:{b=["window","event"];for(var c=m,d;d=b.shift();)if(null!=c[d])c=c[d];else{b=null;break a}b=c}d=b;b=new mc(d,this);c=!0;if(!(0>d.keyCode||void 0!=d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=
	-1;break a}catch(g){e=!0}if(e||void 0==d.returnValue)d.returnValue=!0}d=[];for(e=b.a;e;e=e.parentNode)d.push(e);a=a.type;for(e=d.length-1;0<=e;e--){b.a=d[e];var f=Tc(d[e],a,!0,b),c=c&&f}for(e=0;e<d.length;e++)b.a=d[e],f=Tc(d[e],a,!1,b),c=c&&f}return c}return Sc(a,new mc(b,this))},Lc=function(a){a=a[Ec];return a instanceof vb?a:null},Uc="__closure_events_fn_"+(1E9*Math.random()>>>0),Ic=function(a){C(a,"Listener can not be null.");if(r(a))return a;C(a.handleEvent,"An object listener must have handleEvent method.");
	a[Uc]||(a[Uc]=function(b){return a.handleEvent(b)});return a[Uc]};var I=function(a,b){D.call(this);this.l=a||0;this.c=b||10;if(this.l>this.c)throw Error("[goog.structs.Pool] Min can not be greater than max");this.a=new Eb;this.b=new Cc;this.i=null;this.U()};u(I,D);I.prototype.Y=function(){var a=ia();if(!(null!=this.i&&0>a-this.i)){for(var b;0<this.a.o()&&(b=Fb(this.a),!this.j(b));)this.U();!b&&this.o()<this.c&&(b=this.h());b&&(this.i=a,this.b.a.set(Bc(b),b));return b}};var Wc=function(a){var b=Vc;lc(b.b.a,Bc(a))&&b.ba(a)};
	I.prototype.ba=function(a){lc(this.b.a,Bc(a));this.j(a)&&this.o()<this.c?this.a.a.push(a):Xc(a)};I.prototype.U=function(){for(var a=this.a;this.o()<this.l;){var b=this.h();a.a.push(b)}for(;this.o()>this.c&&0<this.a.o();)Xc(Fb(a))};I.prototype.h=function(){return{}};var Xc=function(a){if("function"==typeof a.ga)a.ga();else for(var b in a)a[b]=null};I.prototype.j=function(a){return"function"==typeof a.ra?a.ra():!0};I.prototype.o=function(){return this.a.o()+this.b.o()};
	I.prototype.I=function(){return this.a.I()&&this.b.I()};I.prototype.C=function(){I.J.C.call(this);if(0<this.b.o())throw Error("[goog.structs.Pool] Objects not released");delete this.b;for(var a=this.a;!a.I();)Xc(Fb(a));delete this.a};/*
	 Portions of this code are from MochiKit, received by
	 The Closure Authors under the MIT license. All other code is Copyright
	 2005-2009 The Closure Authors. All Rights Reserved.
	*/
	var Yc=function(a,b){this.c=[];this.m=b||null;this.a=this.h=!1;this.b=void 0;this.j=this.g=!1;this.f=0;this.i=null;this.s=0};Yc.prototype.l=function(a,b){this.g=!1;this.h=!0;this.b=b;this.a=!a;Zc(this)};var $c=function(a,b,c){C(!a.j,"Blocking Deferreds can not be re-used");a.c.push([b,c,void 0]);a.h&&Zc(a)};Yc.prototype.then=function(a,b,c){var d,e,f=new H(function(a,b){d=a;e=b});$c(this,d,function(a){e(a)});return f.then(a,b,c)};Ea(Yc);
	var ad=function(a){return fb(a.c,function(a){return r(a[1])})},Zc=function(a){if(a.f&&a.h&&ad(a)){var b=a.f,c=bd[b];c&&(m.clearTimeout(c.a),delete bd[b]);a.f=0}a.i&&(a.i.s--,delete a.i);for(var b=a.b,d=c=!1;a.c.length&&!a.g;){var e=a.c.shift(),f=e[0],g=e[1],e=e[2];if(f=a.a?g:f)try{var h=f.call(e||a.m,b);n(h)&&(a.a=a.a&&(h==b||h instanceof Error),a.b=b=h);if(Fa(b)||"function"===typeof m.Promise&&b instanceof m.Promise)d=!0,a.g=!0}catch(l){b=l,a.a=!0,ad(a)||(c=!0)}}a.b=b;d&&(h=t(a.l,a,!0),d=t(a.l,a,
	!1),b instanceof Yc?($c(b,h,d),b.j=!0):b.then(h,d));c&&(b=new cd(b),bd[b.a]=b,a.f=b.a)},cd=function(a){this.a=m.setTimeout(t(this.c,this),0);this.b=a};cd.prototype.c=function(){C(bd[this.a],"Cannot throw an error that is not scheduled.");delete bd[this.a];throw this.b;};var bd={};var dd=function(a){this.f=a;this.b=this.c=this.a=null},ed=function(a,b){this.name=a;this.value=b};ed.prototype.toString=function(){return this.name};var fd=new ed("SEVERE",1E3),gd=new ed("CONFIG",700),hd=new ed("FINE",500),id=function(a){if(a.c)return a.c;if(a.a)return id(a.a);Ra("Root logger has no level set.");return null};
	dd.prototype.log=function(a,b,c){if(a.value>=id(this).value)for(r(b)&&(b=b()),a=new ya(a,String(b),this.f),c&&(a.a=c),c="log:"+a.b,m.console&&(m.console.timeStamp?m.console.timeStamp(c):m.console.markTimeline&&m.console.markTimeline(c)),m.msWriteProfilerMark&&m.msWriteProfilerMark(c),c=this;c;)c=c.a};
	var jd={},kd=null,ld=function(a){kd||(kd=new dd(""),jd[""]=kd,kd.c=gd);var b;if(!(b=jd[a])){b=new dd(a);var c=a.lastIndexOf("."),d=a.substr(c+1),c=ld(a.substr(0,c));c.b||(c.b={});c.b[d]=b;b.a=c;jd[a]=b}return b};var J=function(){D.call(this);this.b=new vb(this);this.$=this;this.G=null};u(J,D);J.prototype[Ta]=!0;J.prototype.removeEventListener=function(a,b,c,d){Qc(this,a,b,c,d)};
	var K=function(a,b){Jc(a);var c,d=a.G;if(d){c=[];for(var e=1;d;d=d.G)c.push(d),C(1E3>++e,"infinite loop")}a=a.$;d=b.type||b;q(b)?b=new pb(b,a):b instanceof pb?b.target=b.target||a:(e=b,b=new pb(d,a),Da(b,e));var e=!0,f;if(c)for(var g=c.length-1;0<=g;g--)f=b.a=c[g],e=md(f,d,!0,b)&&e;f=b.a=a;e=md(f,d,!0,b)&&e;e=md(f,d,!1,b)&&e;if(c)for(g=0;g<c.length;g++)f=b.a=c[g],e=md(f,d,!1,b)&&e};
	J.prototype.C=function(){J.J.C.call(this);if(this.b){var a=this.b,b=0,c;for(c in a.a){for(var d=a.a[c],e=0;e<d.length;e++)++b,rb(d[e]);delete a.a[c];a.b--}}this.G=null};var md=function(a,b,c,d){b=a.b.a[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.O&&g.W==c){var h=g.listener,l=g.N||g.src;g.V&&yb(a.b,g);e=!1!==h.call(l,d)&&e}}return e&&0!=d.la},Jc=function(a){C(a.b,"Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")};var L=function(a,b){this.f=new Nb;I.call(this,a,b)};u(L,I);k=L.prototype;k.Y=function(a,b){if(!a)return L.J.Y.call(this);Db(this.f,n(b)?b:100,a);this.ca()};k.ca=function(){for(var a=this.f;0<a.o();){var b=this.Y();if(b){var c;var d=a,e=d.a,f=e.length;c=e[0];if(0>=f)c=void 0;else{if(1==f)ib(e);else{e[0]=e.pop();for(var e=0,d=d.a,f=d.length,g=d[e];e<f>>1;){var h=2*e+1,l=2*e+2,h=l<f&&d[l].a<d[h].a?l:h;if(d[h].a>g.a)break;d[e]=d[h];e=h}d[e]=g}c=c.b}c.apply(this,[b])}else break}};
	k.ba=function(a){L.J.ba.call(this,a);this.ca()};k.U=function(){L.J.U.call(this);this.ca()};k.C=function(){L.J.C.call(this);m.clearTimeout(void 0);this.f.clear();this.f=null};var M=function(a,b){a&&a.log(hd,b,void 0)};var nd=function(a,b,c){if(r(a))c&&(a=t(a,c));else if(a&&"function"==typeof a.handleEvent)a=t(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:m.setTimeout(a,b||0)};var O=function(a){J.call(this);this.L=new jc;this.B=a||null;this.c=!1;this.A=this.a=null;this.P=this.l="";this.K=0;this.h="";this.f=this.F=this.j=this.D=!1;this.i=0;this.m=null;this.T="";this.u=this.ea=this.Z=!1};u(O,J);var od=O.prototype,pd=ld("goog.net.XhrIo");od.v=pd;var qd=/^https?$/i,rd=["POST","PUT"];
	O.prototype.send=function(a,b,c,d){if(this.a)throw Error("[goog.net.XhrIo] Object is active with another request="+this.l+"; newUri="+a);b=b?b.toUpperCase():"GET";this.l=a;this.h="";this.K=0;this.P=b;this.D=!1;this.c=!0;this.a=this.B?Bb(this.B):Bb(zb);this.A=this.B?ab(this.B):ab(zb);this.a.onreadystatechange=t(this.S,this);this.ea&&"onprogress"in this.a&&(this.a.onprogress=t(function(a){this.R(a,!0)},this),this.a.upload&&(this.a.upload.onprogress=t(this.R,this)));try{M(this.v,P(this,"Opening Xhr")),
	this.F=!0,this.a.open(b,String(a),!0),this.F=!1}catch(f){M(this.v,P(this,"Error opening Xhr: "+f.message));sd(this,f);return}a=c||"";var e=this.L.clone();d&&Hb(d,function(a,b){e.set(b,a)});d=hb(e.H());c=m.FormData&&a instanceof m.FormData;!(0<=bb(rd,b))||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(a,b){this.a.setRequestHeader(b,a)},this);this.T&&(this.a.responseType=this.T);"withCredentials"in this.a&&this.a.withCredentials!==this.Z&&(this.a.withCredentials=
	this.Z);try{td(this),0<this.i&&(this.u=ud(this.a),M(this.v,P(this,"Will abort after "+this.i+"ms if incomplete, xhr2 "+this.u)),this.u?(this.a.timeout=this.i,this.a.ontimeout=t(this.M,this)):this.m=nd(this.M,this.i,this)),M(this.v,P(this,"Sending request")),this.j=!0,this.a.send(a),this.j=!1}catch(f){M(this.v,P(this,"Send error: "+f.message)),sd(this,f)}};var ud=function(a){return F&&G(9)&&"number"==typeof a.timeout&&n(a.ontimeout)},gb=function(a){return"content-type"==a.toLowerCase()};
	O.prototype.M=function(){"undefined"!=typeof aa&&this.a&&(this.h="Timed out after "+this.i+"ms, aborting",this.K=8,M(this.v,P(this,this.h)),K(this,"timeout"),vd(this,8))};var sd=function(a,b){a.c=!1;a.a&&(a.f=!0,a.a.abort(),a.f=!1);a.h=b;a.K=5;wd(a);xd(a)},wd=function(a){a.D||(a.D=!0,K(a,"complete"),K(a,"error"))},vd=function(a,b){a.a&&a.c&&(M(a.v,P(a,"Aborting")),a.c=!1,a.f=!0,a.a.abort(),a.f=!1,a.K=b||7,K(a,"complete"),K(a,"abort"),xd(a))};
	O.prototype.C=function(){this.a&&(this.c&&(this.c=!1,this.f=!0,this.a.abort(),this.f=!1),xd(this,!0));O.J.C.call(this)};O.prototype.S=function(){this.g||(this.F||this.j||this.f?yd(this):this.na())};O.prototype.na=function(){yd(this)};
	var yd=function(a){if(a.c&&"undefined"!=typeof aa)if(a.A[1]&&4==zd(a)&&2==Q(a))M(a.v,P(a,"Local request error detected and ignored"));else if(a.j&&4==zd(a))nd(a.S,0,a);else if(K(a,"readystatechange"),4==zd(a)){M(a.v,P(a,"Request complete"));a.c=!1;try{if(Bd(a))K(a,"complete"),K(a,"success");else{a.K=6;var b;try{b=2<zd(a)?a.a.statusText:""}catch(c){M(a.v,"Can not get status: "+c.message),b=""}a.h=b+" ["+Q(a)+"]";wd(a)}}finally{xd(a)}}};
	O.prototype.R=function(a,b){C("progress"===a.type,"goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");K(this,Cd(a,"progress"));K(this,Cd(a,b?"downloadprogress":"uploadprogress"))};
	var Cd=function(a,b){return{type:b,lengthComputable:a.lengthComputable,loaded:a.loaded,total:a.total}},xd=function(a,b){if(a.a){td(a);var c=a.a,d=a.A[0]?ba:null;a.a=null;a.A=null;b||K(a,"ready");try{c.onreadystatechange=d}catch(e){(a=a.v)&&a.log(fd,"Problem encountered resetting onreadystatechange: "+e.message,void 0)}}},td=function(a){a.a&&a.u&&(a.a.ontimeout=null);"number"==typeof a.m&&(m.clearTimeout(a.m),a.m=null)},Bd=function(a){var b=Q(a),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=
	!0;break a;default:c=!1}if(!c){if(b=0===b)a=String(a.l).match(sb)[1]||null,!a&&m.self&&m.self.location&&(a=m.self.location.protocol,a=a.substr(0,a.length-1)),b=!qd.test(a?a.toLowerCase():"");c=b}return c},zd=function(a){return a.a?a.a.readyState:0},Q=function(a){try{return 2<zd(a)?a.a.status:-1}catch(b){return-1}},Dd=function(a){try{return a.a?a.a.responseText:""}catch(b){return M(a.v,"Can not get responseText: "+b.message),""}},Ed=function(a,b){return a.a&&4==zd(a)?a.a.getResponseHeader(b):void 0},
	P=function(a,b){return b+" ["+a.P+" "+a.l+" "+Q(a)+"]"};var Fd=function(a,b,c,d){this.m=a;this.u=!!d;L.call(this,b,c)};u(Fd,L);Fd.prototype.h=function(){var a=new O,b=this.m;b&&b.forEach(function(b,d){a.L.set(d,b)});this.u&&(a.Z=!0);return a};Fd.prototype.j=function(a){return!a.g&&!a.a};var Vc=new Fd;var Hd=function(a,b,c,d,e,f,g,h,l,B){this.L=a;this.F=b;this.A=c;this.m=d;this.G=e.slice();this.l=this.s=this.f=this.c=null;this.h=this.i=!1;this.u=f;this.j=g;this.g=l;this.M=B;this.D=h;var x=this;this.B=new H(function(a,b){x.s=a;x.l=b;Gd(x)})},Id=function(a,b,c){this.b=a;this.c=b;this.a=!!c},Gd=function(a){function b(a,b){b?a(!1,new Id(!1,null,!0)):Vc.Y(function(b){b.Z=d.M;d.c=b;var c=null;null!==d.g&&(b.ea=!0,c=Hc(b,"uploadprogress",function(a){d.g(a.loaded,a.lengthComputable?a.total:-1)}),b.ea=
	null!==d.g);b.send(d.L,d.F,d.m,d.A);Pc(b,"complete",function(b){null!==c&&Rc(c);d.c=null;b=b.target;var f=6===b.K&&100<=Q(b),f=Bd(b)||f,g=Q(b);!f||500<=g&&600>g||429===g?(f=7===b.K,Wc(b),a(!1,new Id(!1,null,f))):(f=0<=bb(d.G,g),a(!0,new Id(f,b)))})})}function c(a,b){var c=d.s;a=d.l;var h=b.c;if(b.b)try{var l=d.u(h,Dd(h));n(l)?c(l):c()}catch(B){a(B)}else null!==h?(b=la(),l=Dd(h),b.serverResponse=l,d.j?a(d.j(h,b)):a(b)):(b=b.a?d.h?oa():ma():new v("retry-limit-exceeded","Max retry time for operation exceeded, please try again."),
	a(b));Wc(h)}var d=a;a.i?c(0,new Id(!1,null,!0)):a.f=ja(b,c,a.D)};Hd.prototype.a=function(){return this.B};Hd.prototype.b=function(a){this.i=!0;this.h=a||!1;null!==this.f&&(0,this.f)(!1);null!==this.c&&vd(this.c)};var Jd=function(a,b,c){var d=Oa(a.f),d=a.l+d,e=a.b?qa(a.b):{};null!==b&&0<b.length&&(e.Authorization="Firebase "+b);e["X-Firebase-Storage-Version"]="webjs/"+("undefined"!==typeof firebase?firebase.SDK_VERSION:"AppManager");return new Hd(d,a.i,e,a.c,a.h,a.N,a.a,a.j,a.g,c)};var Kd=function(a){var b=m.BlobBuilder||m.WebKitBlobBuilder;if(n(b)){for(var b=new b,c=0;c<arguments.length;c++)b.append(arguments[c]);return b.getBlob()}b=kb(arguments);c=m.BlobBuilder||m.WebKitBlobBuilder;if(n(c)){for(var c=new c,d=0;d<b.length;d++)c.append(b[d],void 0);b=c.getBlob(void 0)}else if(n(m.Blob))b=new Blob(b,{});else throw Error("This browser doesn't seem to support creating Blobs");return b},Ld=function(a,b,c){n(c)||(c=a.size);return a.webkitSlice?a.webkitSlice(b,c):a.mozSlice?a.mozSlice(b,
	c):a.slice?Qb&&!G("13.0")||Rb&&!G("537.1")?(0>b&&(b+=a.size),0>b&&(b=0),0>c&&(c+=a.size),c<b&&(c=b),a.slice(b,c-b)):a.slice(b,c):null};var Md=function(a){this.c=sc(a)};Md.prototype.a=function(){return this.c};Md.prototype.b=function(){};var Nd=function(){this.a={};this.b=Number.MIN_SAFE_INTEGER},Od=function(a,b){function c(){delete e.a[d]}var d=a.b;a.b++;a.a[d]=b;var e=a;b.a().then(c,c)};Nd.prototype.clear=function(){pa(this.a,function(a,b){b&&b.b(!0)});this.a={}};var Pd=function(a,b,c,d){this.a=a;this.g=null;if(null!==this.a&&(a=this.a.options,y(a))){a=a.storageBucket||null;if(null==a)a=null;else{var e=null;try{e=Ma(a)}catch(f){}if(null!==e){if(""!==e.path)throw new v("invalid-default-bucket","Invalid default bucket '"+a+"'.");a=e.bucket}}this.g=a}this.l=b;this.j=c;this.i=d;this.c=12E4;this.b=6E4;this.h=new Nd;this.f=!1},Qd=function(a){return null!==a.a&&y(a.a.INTERNAL)&&y(a.a.INTERNAL.getToken)?a.a.INTERNAL.getToken().then(function(a){return y(a)?a.accessToken:
	null},function(){return null}):rc(null)};Pd.prototype.bucket=function(){if(this.f)throw oa();return this.g};var R=function(a,b,c){if(a.f)return new Md(oa());b=a.j(b,c,null===a.a);Od(a.h,b);return b};var Rd=function(a,b){return b},S=function(a,b,c,d){this.c=a;this.b=b||a;this.f=!!c;this.a=d||Rd},Sd=null,Td=function(){if(Sd)return Sd;var a=[];a.push(new S("bucket"));a.push(new S("generation"));a.push(new S("metageneration"));a.push(new S("name","fullPath",!0));var b=new S("name");b.a=function(a,b){return!ua(b)||2>b.length?b:ub(b)};a.push(b);b=new S("size");b.a=function(a,b){return y(b)?+b:b};a.push(b);a.push(new S("timeCreated"));a.push(new S("updated"));a.push(new S("md5Hash",null,!0));a.push(new S("cacheControl",
	null,!0));a.push(new S("contentDisposition",null,!0));a.push(new S("contentEncoding",null,!0));a.push(new S("contentLanguage",null,!0));a.push(new S("contentType",null,!0));a.push(new S("metadata","customMetadata",!0));a.push(new S("downloadTokens","downloadURLs",!1,function(a,b){if(!(ua(b)&&0<b.length))return[];var e=encodeURIComponent;return eb(b.split(","),function(b){var d=a.fullPath,d="https://firebasestorage.googleapis.com/v0"+("/b/"+e(a.bucket)+"/o/"+e(d));b=Oa({alt:"media",token:b});return d+
	b})}));return Sd=a},Ud=function(a,b){Object.defineProperty(a,"ref",{get:function(){return b.l(b,new z(a.bucket,a.fullPath))}})},Vd=function(a,b){for(var c={},d=b.length,e=0;e<d;e++){var f=b[e];f.f&&(c[f.c]=a[f.b])}return JSON.stringify(c)},Wd=function(a){if(!a||"object"!==typeof a)throw"Expected Metadata object.";for(var b in a){var c=a[b];if("customMetadata"===b&&"object"!==typeof c)throw"Expected object for 'customMetadata' mapping.";}};var T=function(a,b,c){for(var d=b.length,e=b.length,f=0;f<b.length;f++)if(b[f].b){d=f;break}if(!(d<=c.length&&c.length<=e))throw d===e?(b=d,d=1===d?"argument":"arguments"):(b="between "+d+" and "+e,d="arguments"),new v("invalid-argument-count","Invalid argument count in `"+a+"`: Expected "+b+" "+d+", received "+c.length+".");for(f=0;f<c.length;f++)try{b[f].a(c[f])}catch(g){if(g instanceof Error)throw na(f,a,g.message);throw na(f,a,g);}},U=function(a,b){var c=this;this.a=function(b){c.b&&!n(b)||a(b)};
	this.b=!!b},Xd=function(a,b){return function(c){a(c);b(c)}},Yd=function(a,b){function c(a){if(!("string"===typeof a||a instanceof String))throw"Expected string.";}var d;a?d=Xd(c,a):d=c;return new U(d,b)},Zd=function(){return new U(function(a){if(!(a instanceof Blob))throw"Expected Blob or File.";})},$d=function(){return new U(function(a){if(!(("number"===typeof a||a instanceof Number)&&0<=a))throw"Expected a number 0 or greater.";})},ae=function(a,b){return new U(function(b){if(!(null===b||y(b)&&
	b instanceof Object))throw"Expected an Object.";y(a)&&a(b)},b)},be=function(){return new U(function(a){if(null!==a&&!r(a))throw"Expected a Function.";},!0)};var ce=function(a){if(!a)throw la();},de=function(a,b){return function(c,d){a:{var e;try{e=JSON.parse(d)}catch(h){c=null;break a}c=da(e)?e:null}if(null===c)c=null;else{d={type:"file"};e=b.length;for(var f=0;f<e;f++){var g=b[f];d[g.b]=g.a(d,c[g.c])}Ud(d,a);c=d}ce(null!==c);return c}},ee=function(a){return function(b,c){b=401===Q(b)?new v("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===Q(b)?new v("quota-exceeded","Quota for bucket '"+
	a.bucket+"' exceeded, please view quota on https://firebase.google.com/pricing/."):403===Q(b)?new v("unauthorized","User does not have permission to access '"+a.path+"'."):c;b.serverResponse=c.serverResponse;return b}},fe=function(a){var b=ee(a);return function(c,d){var e=b(c,d);404===Q(c)&&(e=new v("object-not-found","Object '"+a.path+"' does not exist."));e.serverResponse=d.serverResponse;return e}},ge=function(a,b,c){var d=La(b);a=new w(ka+"/v0"+d,"GET",de(a,c),a.c);a.a=fe(b);return a},he=function(a,
	b){var c=La(b);a=new w(ka+"/v0"+c,"DELETE",function(){},a.c);a.h=[200,204];a.a=fe(b);return a},ie=function(a,b,c){c=c?qa(c):{};c.fullPath=a.path;c.size=b.size;c.contentType||(c.contentType=b&&b.type||"application/octet-stream");return c},je=function(a,b,c,d,e){var f="/b/"+encodeURIComponent(b.bucket)+"/o",g={"X-Goog-Upload-Protocol":"multipart"},h;h="";for(var l=0;2>l;l++)h+=Math.random().toString().slice(2);g["Content-Type"]="multipart/related; boundary="+h;e=ie(b,d,e);l=Vd(e,c);d=Kd("--"+h+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+
	l+"\r\n--"+h+"\r\nContent-Type: "+e.contentType+"\r\n\r\n",d,"\r\n--"+h+"--");a=new w(ka+"/v0"+f,"POST",de(a,c),a.b);a.f={name:e.fullPath};a.b=g;a.c=d;a.a=ee(b);return a},ke=function(a,b,c,d){this.a=a;this.total=b;this.b=!!c;this.c=d||null},le=function(a,b){var c;try{c=Ed(a,"X-Goog-Upload-Status")}catch(d){ce(!1)}a=0<=bb(b||["active"],c);ce(a);return c},me=function(a,b,c,d,e){var f="/b/"+encodeURIComponent(b.bucket)+"/o",g=ie(b,d,e);e={name:g.fullPath};f=ka+"/v0"+f;d={"X-Goog-Upload-Protocol":"resumable",
	"X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":d.size,"X-Goog-Upload-Header-Content-Type":g.contentType,"Content-Type":"application/json; charset=utf-8"};c=Vd(g,c);a=new w(f,"POST",function(a){le(a);var b;try{b=Ed(a,"X-Goog-Upload-URL")}catch(c){ce(!1)}ce(ua(b));return b},a.b);a.f=e;a.b=d;a.c=c;a.a=ee(b);return a},ne=function(a,b,c,d){a=new w(c,"POST",function(a){var b=le(a,["active","final"]),c;try{c=Ed(a,"X-Goog-Upload-Size-Received")}catch(h){ce(!1)}a=c;isFinite(a)&&(a=String(a));
	a=q(a)?/^\s*-?0x/i.test(a)?parseInt(a,16):parseInt(a,10):NaN;ce(!isNaN(a));return new ke(a,d.size,"final"===b)},a.b);a.b={"X-Goog-Upload-Command":"query"};a.a=ee(b);return a},oe=function(a,b,c,d,e,f){var g=new ke(0,0);f?(g.a=f.a,g.total=f.total):(g.a=0,g.total=d.size);if(d.size!==g.total)throw new v("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.");var h=f=g.total-g.a,h=Math.min(h,262144),l=g.a;f={"X-Goog-Upload-Command":h===f?"upload, finalize":"upload",
	"X-Goog-Upload-Offset":g.a};l=Ld(d,l,l+h);if(null===l)throw new v("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.");c=new w(c,"POST",function(a,c){var f=le(a,["active","final"]),l=g.a+h,Ad=d.size,Va;"final"===f?Va=de(b,e)(a,c):Va=null;return new ke(l,Ad,"final"===f,Va)},b.b);c.b=f;c.c=l;c.g=null;c.a=ee(a);return c};var W=function(a,b,c,d,e,f){this.L=a;this.c=b;this.i=c;this.f=e;this.h=f||null;this.s=d;this.j=0;this.G=this.m=!1;this.B=[];this.$=262144<this.f.size;this.b="running";this.a=this.u=this.g=null;var g=this;this.X=function(a){g.a=null;"storage/canceled"===a.code?(g.m=!0,pe(g)):(g.g=a,V(g,"error"))};this.T=function(a){g.a=null;"storage/canceled"===a.code?pe(g):(g.g=a,V(g,"error"))};this.A=this.l=null;this.F=new H(function(a,b){g.l=a;g.A=b;qe(g)});this.F.then(null,function(){})},qe=function(a){"running"===
	a.b&&null===a.a&&(a.$?null===a.u?re(a):a.m?se(a):a.G?te(a):ue(a):ve(a))},we=function(a,b){Qd(a.c).then(function(c){switch(a.b){case "running":b(c);break;case "canceling":V(a,"canceled");break;case "pausing":V(a,"paused")}})},re=function(a){we(a,function(b){var c=me(a.c,a.i,a.s,a.f,a.h);a.a=R(a.c,c,b);a.a.a().then(function(b){a.a=null;a.u=b;a.m=!1;pe(a)},this.X)})},se=function(a){var b=a.u;we(a,function(c){var d=ne(a.c,a.i,b,a.f);a.a=R(a.c,d,c);a.a.a().then(function(b){a.a=null;xe(a,b.a);a.m=!1;b.b&&
	(a.G=!0);pe(a)},a.X)})},ue=function(a){var b=new ke(a.j,a.f.size),c=a.u;we(a,function(d){var e;try{e=oe(a.i,a.c,c,a.f,a.s,b)}catch(f){a.g=f;V(a,"error");return}a.a=R(a.c,e,d);a.a.a().then(function(b){a.a=null;xe(a,b.a);b.b?(a.h=b.c,V(a,"success")):pe(a)},a.X)})},te=function(a){we(a,function(b){var c=ge(a.c,a.i,a.s);a.a=R(a.c,c,b);a.a.a().then(function(b){a.a=null;a.h=b;V(a,"success")},a.T)})},ve=function(a){we(a,function(b){var c=je(a.c,a.i,a.s,a.f,a.h);a.a=R(a.c,c,b);a.a.a().then(function(b){a.a=
	null;a.h=b;xe(a,a.f.size);V(a,"success")},a.X)})},xe=function(a,b){var c=a.j;a.j=b;a.j>c&&ye(a)},V=function(a,b){if(a.b!==b)switch(b){case "canceling":a.b=b;null!==a.a&&a.a.b();break;case "pausing":a.b=b;null!==a.a&&a.a.b();break;case "running":var c="paused"===a.b;a.b=b;c&&(ye(a),qe(a));break;case "paused":a.b=b;ye(a);break;case "canceled":a.g=ma();a.b=b;ye(a);break;case "error":a.b=b;ye(a);break;case "success":a.b=b,ye(a)}},pe=function(a){switch(a.b){case "pausing":V(a,"paused");break;case "canceling":V(a,
	"canceled");break;case "running":qe(a)}};W.prototype.D=function(){return new A(this.j,this.f.size,ta(this.b),this.h,this,this.L)};
	W.prototype.P=function(a,b,c,d){function e(a){try{g(a);return}catch(b){}try{if(h(a),!(n(a.next)||n(a.error)||n(a.complete)))throw"";}catch(b){throw"Expected a function or an Object with one of `next`, `error`, `complete` properties.";}}function f(a){return function(b,c,d){null!==a&&T("on",a,arguments);var e=new Na(b,c,d);ze(l,e);return function(){jb(l.B,e)}}}var g=be().a,h=ae(null,!0).a;T("on",[Yd(function(){if("state_changed"!==a)throw"Expected one of the event types: [state_changed].";}),ae(e,!0),
	be(),be()],arguments);var l=this,B=[ae(function(a){if(null===a)throw"Expected a function or an Object with one of `next`, `error`, `complete` properties.";e(a)}),be(),be()];return n(b)||n(c)||n(d)?f(null)(b,c,d):f(B)};W.prototype.then=function(a,b){return this.F.then(a,b)};
	var ze=function(a,b){a.B.push(b);Ae(a,b)},ye=function(a){Be(a);var b=kb(a.B);cb(b,function(b){Ae(a,b)})},Be=function(a){if(null!==a.l){var b=!0;switch(ta(a.b)){case "success":Dc(a.l.bind(null,a.D()))();break;case "canceled":case "error":Dc(a.A.bind(null,a.g))();break;default:b=!1}b&&(a.l=null,a.A=null)}},Ae=function(a,b){switch(ta(a.b)){case "running":case "paused":null!==b.next&&Dc(b.next.bind(b,a.D()))();break;case "success":null!==b.a&&Dc(b.a.bind(b))();break;case "canceled":case "error":null!==
	b.error&&Dc(b.error.bind(b,a.g))();break;default:null!==b.error&&Dc(b.error.bind(b,a.g))()}};W.prototype.S=function(){T("resume",[],arguments);var a="paused"===this.b||"pausing"===this.b;a&&V(this,"running");return a};W.prototype.R=function(){T("pause",[],arguments);var a="running"===this.b;a&&V(this,"pausing");return a};W.prototype.M=function(){T("cancel",[],arguments);var a="running"===this.b||"pausing"===this.b;a&&V(this,"canceling");return a};var X=function(a,b){this.b=a;if(b)this.a=b instanceof z?b:Ma(b);else if(a=a.bucket(),null!==a)this.a=new z(a,"");else throw new v("no-default-bucket","No default bucket found. Did you set the 'storageBucket' property when initializing the app?");};X.prototype.toString=function(){T("toString",[],arguments);return"gs://"+this.a.bucket+"/"+this.a.path};var Ce=function(a,b){return new X(a,b)};k=X.prototype;
	k.ha=function(a){T("child",[Yd()],arguments);var b=tb(this.a.path,a);return Ce(this.b,new z(this.a.bucket,b))};k.Fa=function(){var a;a=this.a.path;if(0==a.length)a=null;else{var b=a.lastIndexOf("/");a=-1===b?"":a.slice(0,b)}return null===a?null:Ce(this.b,new z(this.a.bucket,a))};k.Ha=function(){return Ce(this.b,new z(this.a.bucket,""))};k.pa=function(){return this.a.bucket};k.Aa=function(){return this.a.path};k.Ea=function(){return ub(this.a.path)};k.Ja=function(){return this.b.i};
	k.ua=function(a,b){T("put",[Zd(),new U(Wd,!0)],arguments);De(this,"put");return new W(this,this.b,this.a,Td(),a,b)};k.delete=function(){T("delete",[],arguments);De(this,"delete");var a=this;return Qd(this.b).then(function(b){var c=he(a.b,a.a);return R(a.b,c,b).a()})};k.ia=function(){T("getMetadata",[],arguments);De(this,"getMetadata");var a=this;return Qd(this.b).then(function(b){var c=ge(a.b,a.a,Td());return R(a.b,c,b).a()})};
	k.va=function(a){T("updateMetadata",[new U(Wd,void 0)],arguments);De(this,"updateMetadata");var b=this;return Qd(this.b).then(function(c){var d=b.b,e=b.a,f=a,g=Td(),h=La(e),h=ka+"/v0"+h,f=Vd(f,g),d=new w(h,"PATCH",de(d,g),d.c);d.b={"Content-Type":"application/json; charset=utf-8"};d.c=f;d.a=fe(e);return R(b.b,d,c).a()})};
	k.ta=function(){T("getDownloadURL",[],arguments);De(this,"getDownloadURL");return this.ia().then(function(a){a=a.downloadURLs[0];if(y(a))return a;throw new v("no-download-url","The given file does not have any download URLs.");})};var De=function(a,b){if(""===a.a.path)throw new v("invalid-root-operation","The operation '"+b+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').");};var Y=function(a){this.a=new Pd(a,function(a,c){return new X(a,c)},Jd,this);this.b=a;this.c=new Ee(this)};k=Y.prototype;k.wa=function(a){T("ref",[Yd(function(a){if(/^[A-Za-z]+:\/\//.test(a))throw"Expected child path but got a URL, use refFromURL instead.";},!0)],arguments);var b=new X(this.a);return n(a)?b.ha(a):b};
	k.xa=function(a){T("refFromURL",[Yd(function(a){if(!/^[A-Za-z]+:\/\//.test(a))throw"Expected full URL but got a child path, use ref instead.";try{Ma(a)}catch(c){throw"Expected valid full URL but got an invalid one.";}},!1)],arguments);return new X(this.a,a)};k.Ca=function(){return this.a.b};k.za=function(a){T("setMaxUploadRetryTime",[$d()],arguments);this.a.b=a};k.Ba=function(){return this.a.c};k.ya=function(a){T("setMaxOperationRetryTime",[$d()],arguments);this.a.c=a};k.oa=function(){return this.b};
	k.ma=function(){return this.c};var Ee=function(a){this.a=a};Ee.prototype.delete=function(){var a=this.a.a;a.f=!0;a.a=null;a.h.clear()};var Z=function(a,b,c){Object.defineProperty(a,b,{get:c})};X.prototype.toString=X.prototype.toString;X.prototype.child=X.prototype.ha;X.prototype.put=X.prototype.ua;X.prototype["delete"]=X.prototype.delete;X.prototype.getMetadata=X.prototype.ia;X.prototype.updateMetadata=X.prototype.va;X.prototype.getDownloadURL=X.prototype.ta;Z(X.prototype,"parent",X.prototype.Fa);Z(X.prototype,"root",X.prototype.Ha);Z(X.prototype,"bucket",X.prototype.pa);Z(X.prototype,"fullPath",X.prototype.Aa);
	Z(X.prototype,"name",X.prototype.Ea);Z(X.prototype,"storage",X.prototype.Ja);Y.prototype.ref=Y.prototype.wa;Y.prototype.refFromURL=Y.prototype.xa;Z(Y.prototype,"maxOperationRetryTime",Y.prototype.Ba);Y.prototype.setMaxOperationRetryTime=Y.prototype.ya;Z(Y.prototype,"maxUploadRetryTime",Y.prototype.Ca);Y.prototype.setMaxUploadRetryTime=Y.prototype.za;Z(Y.prototype,"app",Y.prototype.oa);Z(Y.prototype,"INTERNAL",Y.prototype.ma);Ee.prototype["delete"]=Ee.prototype.delete;
	Y.prototype.capi_=function(a){ka=a};W.prototype.on=W.prototype.P;W.prototype.resume=W.prototype.S;W.prototype.pause=W.prototype.R;W.prototype.cancel=W.prototype.M;Z(W.prototype,"snapshot",W.prototype.D);Z(A.prototype,"bytesTransferred",A.prototype.qa);Z(A.prototype,"totalBytes",A.prototype.La);Z(A.prototype,"state",A.prototype.Ia);Z(A.prototype,"metadata",A.prototype.Da);Z(A.prototype,"downloadURL",A.prototype.sa);Z(A.prototype,"task",A.prototype.Ka);Z(A.prototype,"ref",A.prototype.Ga);
	ra.STATE_CHANGED="state_changed";sa.RUNNING="running";sa.PAUSED="paused";sa.SUCCESS="success";sa.CANCELED="canceled";sa.ERROR="error";H.prototype["catch"]=H.prototype.l;H.prototype.then=H.prototype.then;
	(function(){function a(a){return new Y(a)}var b={TaskState:sa,TaskEvent:ra,Storage:Y,Reference:X};if(window.firebase&&firebase.INTERNAL&&firebase.INTERNAL.registerService)firebase.INTERNAL.registerService("storage",a,b);else throw Error("Cannot install Firebase Storage - be sure to load firebase-app.js first.");})();})();

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Connect = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(71);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(72);

	var _actionCreators = __webpack_require__(170);

	var _redux = __webpack_require__(79);

	var _styles = __webpack_require__(167);

	var _Button = __webpack_require__(169);

	var _Button2 = _interopRequireDefault(_Button);

	var _Spinner = __webpack_require__(175);

	var _Spinner2 = _interopRequireDefault(_Spinner);

	var _selectors = __webpack_require__(163);

	var selectors = _interopRequireWildcard(_selectors);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Connect = exports.Connect = function (_React$Component) {
	  _inherits(Connect, _React$Component);

	  function Connect() {
	    _classCallCheck(this, Connect);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Connect).apply(this, arguments));
	  }

	  _createClass(Connect, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      if (this.props.hasConnectedDrive) {
	        return null;
	      }
	      if (this.props.isConnectingDrive) {
	        return _react2.default.createElement(
	          _Button2.default,
	          { kind: 'googleDrive' },
	          _react2.default.createElement(_Spinner2.default, { style: _styles.styles.spinners.toolbar }),
	          'Connecting to Google Drive...'
	        );
	      }
	      return _react2.default.createElement(
	        _Button2.default,
	        { kind: 'googleDrive',
	          onClick: function onClick() {
	            return _this2.props.connectGoogleDrive();
	          } },
	        'Connect to Google Drive'
	      );
	    }
	  }]);

	  return Connect;
	}(_react2.default.Component);

	Connect.propTypes = {
	  isConnectingDrive: _react2.default.PropTypes.bool,
	  hasConnectedDrive: _react2.default.PropTypes.bool,
	  connectGoogleDrive: _react2.default.PropTypes.func
	};

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    isConnectingDrive: selectors.isConnectingDrive(state),
	    hasConnectedDrive: selectors.hasConnectedDrive(state)
	  };
	}, function (dispatch) {
	  return (0, _redux.bindActionCreators)({
	    connectGoogleDrive: _actionCreators.connectGoogleDrive
	  }, dispatch);
	})(Connect);

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Spinner = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(71);

	var _react2 = _interopRequireDefault(_react);

	var _radium = __webpack_require__(96);

	var _radium2 = _interopRequireDefault(_radium);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Spinner = exports.Spinner = function (_React$Component) {
	  _inherits(Spinner, _React$Component);

	  function Spinner() {
	    _classCallCheck(this, Spinner);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Spinner).apply(this, arguments));
	  }

	  _createClass(Spinner, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('img', { style: this.props.style,
	        src: 'https://code.pyret.org/img/pyret-spin.gif' });
	    }
	  }]);

	  return Spinner;
	}(_react2.default.Component);

	Spinner.propTypes = {
	  style: _react2.default.PropTypes.object
	};

	exports.default = (0, _radium2.default)(Spinner);

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Save = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(71);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(72);

	var _actionCreators = __webpack_require__(170);

	var _redux = __webpack_require__(79);

	var _styles = __webpack_require__(167);

	var _Button = __webpack_require__(169);

	var _Button2 = _interopRequireDefault(_Button);

	var _Spinner = __webpack_require__(175);

	var _Spinner2 = _interopRequireDefault(_Spinner);

	var _selectors = __webpack_require__(163);

	var selectors = _interopRequireWildcard(_selectors);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	//TODO: Link argument of saveGoogleDrive() to Input Value

	var Save = exports.Save = function (_React$Component) {
	  _inherits(Save, _React$Component);

	  function Save() {
	    _classCallCheck(this, Save);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Save).apply(this, arguments));
	  }

	  _createClass(Save, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      if (!this.props.hasConnectedDrive) {
	        return null;
	      }
	      if (this.props.isSavingDrive) {
	        return _react2.default.createElement(
	          _Button2.default,
	          { kind: 'toolbar' },
	          _react2.default.createElement(_Spinner2.default, { style: _styles.styles.spinners.toolbar }),
	          'Saving...'
	        );
	      }
	      return _react2.default.createElement(
	        _Button2.default,
	        { kind: 'toolbar',
	          onClick: function onClick() {
	            return _this2.props.saveGoogleDrive("File");
	          } },
	        'Save'
	      );
	    }
	  }]);

	  return Save;
	}(_react2.default.Component);

	Save.propTypes = {
	  hasConnectedDrive: _react2.default.PropTypes.bool,
	  isSavingDrive: _react2.default.PropTypes.bool,
	  hasSavedDrive: _react2.default.PropTypes.bool,
	  saveGoogleDrive: _react2.default.PropTypes.func
	};

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    hasConnectedDrive: selectors.hasConnectedDrive(state),
	    isSavingDrive: selectors.isSavingDrive(state),
	    hasSavedDrive: selectors.hasSavedDrive(state)
	  };
	}, function (dispatch) {
	  return (0, _redux.bindActionCreators)({
	    saveGoogleDrive: _actionCreators.saveGoogleDrive
	  }, dispatch);
	})(Save);

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Share = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(71);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(72);

	var _actionCreators = __webpack_require__(170);

	var _redux = __webpack_require__(79);

	var _styles = __webpack_require__(167);

	var _Button = __webpack_require__(169);

	var _Button2 = _interopRequireDefault(_Button);

	var _Spinner = __webpack_require__(175);

	var _Spinner2 = _interopRequireDefault(_Spinner);

	var _selectors = __webpack_require__(163);

	var selectors = _interopRequireWildcard(_selectors);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Share = exports.Share = function (_React$Component) {
	  _inherits(Share, _React$Component);

	  function Share() {
	    _classCallCheck(this, Share);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Share).apply(this, arguments));
	  }

	  _createClass(Share, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      if (!this.props.hasSavedDrive) {
	        return null;
	      }
	      if (this.props.isSharingDrive) {
	        return _react2.default.createElement(
	          _Button2.default,
	          { kind: 'toolbar' },
	          _react2.default.createElement(_Spinner2.default, { style: _styles.styles.spinners.toolbar }),
	          'Sharing...'
	        );
	      }
	      return _react2.default.createElement(
	        _Button2.default,
	        { kind: 'toolbar',
	          onClick: function onClick() {
	            return _this2.props.shareGoogleDrive();
	          } },
	        'Share'
	      );
	    }
	  }]);

	  return Share;
	}(_react2.default.Component);

	Share.propTypes = {
	  hasSavedDrive: _react2.default.PropTypes.bool,
	  isSharingDrive: _react2.default.PropTypes.bool,
	  hasSharedDrive: _react2.default.PropTypes.bool,
	  shareGoogleDrive: _react2.default.PropTypes.func
	};

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    isSharingDrive: selectors.isSharingDrive(state),
	    hasSharedDrive: selectors.hasSharedDrive(state),
	    hasSavedDrive: selectors.hasSavedDrive(state)
	  };
	}, function (dispatch) {
	  return (0, _redux.bindActionCreators)({
	    shareGoogleDrive: _actionCreators.shareGoogleDrive
	  }, dispatch);
	})(Share);

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.More = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(71);

	var _react2 = _interopRequireDefault(_react);

	var _radium = __webpack_require__(96);

	var _radium2 = _interopRequireDefault(_radium);

	var _Button = __webpack_require__(169);

	var _Button2 = _interopRequireDefault(_Button);

	var _selectors = __webpack_require__(163);

	var _actionCreators = __webpack_require__(170);

	var _reactRedux = __webpack_require__(72);

	var _redux = __webpack_require__(79);

	var _styles = __webpack_require__(167);

	var _reactClickOutside = __webpack_require__(179);

	var _reactClickOutside2 = _interopRequireDefault(_reactClickOutside);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var More = exports.More = function (_React$Component) {
	  _inherits(More, _React$Component);

	  function More() {
	    _classCallCheck(this, More);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(More).apply(this, arguments));
	  }

	  _createClass(More, [{
	    key: "handleClickOutside",
	    value: function handleClickOutside() {
	      if (this.props.expanded) {
	        this.props.collapse();
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement(
	        _Button2.default,
	        { kind: "toolbar",
	          style: _styles.styles.buttons.more.moreButton,
	          onClick: function onClick() {
	            return _this2.props.expanded ? _this2.props.collapse() : _this2.props.expand();
	          } },
	        "More ▾"
	      );
	    }
	  }]);

	  return More;
	}(_react2.default.Component);

	More.propTypes = {
	  expanded: _react2.default.PropTypes.bool,
	  expand: _react2.default.PropTypes.func,
	  collapse: _react2.default.PropTypes.func
	};

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    expanded: (0, _selectors.isMoreMenuExpanded)(state)
	  };
	}, function (dispatch) {
	  return (0, _redux.bindActionCreators)({
	    expand: _actionCreators.expandMoreMenu,
	    collapse: _actionCreators.collapseMoreMenu
	  }, dispatch);
	})((0, _reactClickOutside2.default)((0, _radium2.default)(More)));

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(71);
	var ReactDOM = __webpack_require__(70);

	module.exports = function enhanceWithClickOutside(WrappedComponent) {
	  var componentName = WrappedComponent.displayName || WrappedComponent.name;

	  return React.createClass({
	    displayName: 'Wrapped' + componentName,

	    componentDidMount: function componentDidMount() {
	      this.__wrappedComponent = this.refs.wrappedComponent;
	      document.addEventListener('click', this.handleClickOutside, true);
	    },

	    componentWillUnmount: function componentWillUnmount() {
	      document.removeEventListener('click', this.handleClickOutside, true);
	    },

	    handleClickOutside: function handleClickOutside(e) {
	      var domNode = ReactDOM.findDOMNode(this);
	      if ((!domNode || !domNode.contains(e.target)) && typeof this.refs.wrappedComponent.handleClickOutside === 'function') {
	        this.refs.wrappedComponent.handleClickOutside(e);
	      }
	    },

	    render: function render() {
	      return React.createElement(WrappedComponent, _extends({}, this.props, { ref: 'wrappedComponent' }));
	    }
	  });
	};

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Run = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(71);

	var _react2 = _interopRequireDefault(_react);

	var _radium = __webpack_require__(96);

	var _radium2 = _interopRequireDefault(_radium);

	var _Button = __webpack_require__(169);

	var _Button2 = _interopRequireDefault(_Button);

	var _Spinner = __webpack_require__(175);

	var _Spinner2 = _interopRequireDefault(_Spinner);

	var _selectors = __webpack_require__(163);

	var selectors = _interopRequireWildcard(_selectors);

	var _styles = __webpack_require__(167);

	var _reactRedux = __webpack_require__(72);

	var _actionCreators = __webpack_require__(170);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Run = exports.Run = function (_React$Component) {
	  _inherits(Run, _React$Component);

	  function Run() {
	    _classCallCheck(this, Run);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Run).apply(this, arguments));
	  }

	  _createClass(Run, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      if (this.props.isRunning && this.props.hasLoadedRuntime) {
	        return _react2.default.createElement(
	          _Button2.default,
	          { style: _styles.styles.buttons.run.running },
	          _react2.default.createElement(_Spinner2.default, { style: _styles.styles.spinners.toolbar }),
	          'Running...'
	        );
	      } else {
	        return _react2.default.createElement(
	          _Button2.default,
	          { style: _styles.styles.buttons.run.waiting,
	            onClick: function onClick() {
	              return _this2.props.onRun(_this2.props.source);
	            } },
	          'Run'
	        );
	      }
	    }
	  }]);

	  return Run;
	}(_react2.default.Component);

	Run.propTypes = {
	  isRunning: _react2.default.PropTypes.bool,
	  onRun: _react2.default.PropTypes.func,
	  source: _react2.default.PropTypes.string,
	  hasLoadedRuntime: _react2.default.PropTypes.bool
	};

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    source: selectors.getSource(state),
	    isRunning: selectors.isRunning(state),
	    hasLoadedRuntime: selectors.hasLoadedRuntime(state)
	  };
	}, function (dispatch) {
	  return {
	    onRun: function onRun(src) {
	      dispatch((0, _actionCreators.clear)());
	      dispatch((0, _actionCreators.run)(src));
	    }
	  };
	})((0, _radium2.default)(Run));

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Name = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(71);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(72);

	var _Input = __webpack_require__(182);

	var _Input2 = _interopRequireDefault(_Input);

	var _selectors = __webpack_require__(163);

	var selectors = _interopRequireWildcard(_selectors);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Name = exports.Name = function (_React$Component) {
	  _inherits(Name, _React$Component);

	  function Name() {
	    _classCallCheck(this, Name);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Name).apply(this, arguments));
	  }

	  _createClass(Name, [{
	    key: 'render',
	    value: function render() {
	      if (!this.props.hasConnectedDrive) {
	        return null;
	      }
	      return _react2.default.createElement(_Input2.default, { placeholder: 'Program Name' });
	    }
	  }]);

	  return Name;
	}(_react2.default.Component);

	Name.propTypes = {
	  hasConnectedDrive: _react2.default.PropTypes.bool
	};

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    hasConnectedDrive: selectors.hasConnectedDrive(state)
	  };
	})(Name);

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Input = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(71);

	var _react2 = _interopRequireDefault(_react);

	var _radium = __webpack_require__(96);

	var _radium2 = _interopRequireDefault(_radium);

	var _styles = __webpack_require__(167);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Input = exports.Input = function (_React$Component) {
	  _inherits(Input, _React$Component);

	  function Input() {
	    _classCallCheck(this, Input);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Input).apply(this, arguments));
	  }

	  _createClass(Input, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement("input", _extends({}, this.props, {
	        type: "text",
	        style: [_styles.styles.forms.base, _styles.styles.forms[this.props.kind], this.props.style]
	      }));
	    }
	  }]);

	  return Input;
	}(_react2.default.Component);

	Input.propTypes = {
	  kind: _react2.default.PropTypes.string,
	  style: _react2.default.PropTypes.object
	};

	exports.default = (0, _radium2.default)(Input);

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MoreMenu = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(71);

	var _react2 = _interopRequireDefault(_react);

	var _radium = __webpack_require__(96);

	var _radium2 = _interopRequireDefault(_radium);

	var _selectors = __webpack_require__(163);

	var _reactRedux = __webpack_require__(72);

	var _styles = __webpack_require__(167);

	var _Button = __webpack_require__(169);

	var _Button2 = _interopRequireDefault(_Button);

	var _FontSizeButton = __webpack_require__(184);

	var _FontSizeButton2 = _interopRequireDefault(_FontSizeButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	//TODO:
	//implement google drive functionality with "Download this File" button
	//implement google drive functionality with "Log out" button

	var MoreMenu = exports.MoreMenu = function (_React$Component) {
	  _inherits(MoreMenu, _React$Component);

	  function MoreMenu() {
	    _classCallCheck(this, MoreMenu);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(MoreMenu).apply(this, arguments));
	  }

	  _createClass(MoreMenu, [{
	    key: "render",
	    value: function render() {
	      if (this.props.expanded) {
	        return _react2.default.createElement(
	          "div",
	          { style: _styles.styles.buttons.more.menuContainer },
	          _react2.default.createElement(
	            _Button2.default,
	            { style: _styles.styles.buttons.more.menuItems },
	            "Download this File"
	          ),
	          _react2.default.createElement(
	            _Button2.default,
	            { style: _styles.styles.buttons.more.menuItems },
	            _react2.default.createElement(
	              "a",
	              { href: "http://www.pyret.org/docs/latest/", style: _styles.styles.linkStyle },
	              "Documentation"
	            )
	          ),
	          _react2.default.createElement(_FontSizeButton2.default, null),
	          _react2.default.createElement(
	            _Button2.default,
	            { style: _styles.styles.buttons.more.menuItems },
	            _react2.default.createElement(
	              "a",
	              { href: "https://github.com/brownplt/pyret-lang/issues/new", style: _styles.styles.linkStyle },
	              "Report an Issue"
	            )
	          ),
	          _react2.default.createElement(
	            _Button2.default,
	            { style: _styles.styles.buttons.more.menuItems },
	            _react2.default.createElement(
	              "a",
	              { href: "https://groups.google.com/forum/#!forum/pyret-discuss", style: _styles.styles.linkStyle },
	              "Discuss Pyret"
	            )
	          ),
	          _react2.default.createElement(
	            _Button2.default,
	            { style: _styles.styles.buttons.more.menuItems },
	            "Log out"
	          )
	        );
	      }
	      return null;
	    }
	  }]);

	  return MoreMenu;
	}(_react2.default.Component);

	MoreMenu.propTypes = {
	  expanded: _react2.default.PropTypes.bool
	};

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    expanded: (0, _selectors.isMoreMenuExpanded)(state)
	  };
	})((0, _radium2.default)(MoreMenu));

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.FontSizeButton = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(71);

	var _react2 = _interopRequireDefault(_react);

	var _radium = __webpack_require__(96);

	var _radium2 = _interopRequireDefault(_radium);

	var _selectors = __webpack_require__(163);

	var _reactRedux = __webpack_require__(72);

	var _styles = __webpack_require__(167);

	var _Button = __webpack_require__(169);

	var _Button2 = _interopRequireDefault(_Button);

	var _actionCreators = __webpack_require__(170);

	var _redux = __webpack_require__(79);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FontSizeButton = exports.FontSizeButton = function (_React$Component) {
	  _inherits(FontSizeButton, _React$Component);

	  function FontSizeButton() {
	    _classCallCheck(this, FontSizeButton);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(FontSizeButton).apply(this, arguments));
	  }

	  _createClass(FontSizeButton, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { style: _styles.styles.buttons.more.fontButtonContainer },
	        _react2.default.createElement(
	          _Button2.default,
	          {
	            style: _styles.styles.buttons.more.fontSizeButtons,
	            onClick: this.props.decrementFontSize },
	          "-"
	        ),
	        _react2.default.createElement(
	          "div",
	          { style: { alignSelf: "center" } },
	          "Font (",
	          this.props.fontSize,
	          "px)"
	        ),
	        _react2.default.createElement(
	          _Button2.default,
	          {
	            style: _styles.styles.buttons.more.fontSizeButtons,
	            onClick: this.props.incrementFontSize },
	          "+"
	        )
	      );
	    }
	  }]);

	  return FontSizeButton;
	}(_react2.default.Component);

	FontSizeButton.propTypes = {
	  fontSize: _react2.default.PropTypes.number,
	  incrementFontSize: _react2.default.PropTypes.func,
	  decrementFontSize: _react2.default.PropTypes.func
	};

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    fontSize: (0, _selectors.getFontSize)(state)
	  };
	}, function (dispatch) {
	  return (0, _redux.bindActionCreators)({
	    incrementFontSize: _actionCreators.incrementFontSize,
	    decrementFontSize: _actionCreators.decrementFontSize
	  }, dispatch);
	})((0, _radium2.default)(FontSizeButton));

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(71);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(72);

	var _redux = __webpack_require__(79);

	var _reactCodemirror = __webpack_require__(186);

	var _reactCodemirror2 = _interopRequireDefault(_reactCodemirror);

	var _actionCreators = __webpack_require__(170);

	var _selectors = __webpack_require__(163);

	__webpack_require__(190);

	__webpack_require__(194);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(196);

	var CodeWindow = function (_React$Component) {
	  _inherits(CodeWindow, _React$Component);

	  function CodeWindow() {
	    _classCallCheck(this, CodeWindow);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CodeWindow).apply(this, arguments));
	  }

	  _createClass(CodeWindow, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_reactCodemirror2.default, { className: 'PyretIDE-CodeWindow',
	        value: this.props.source,
	        onChange: this.props.changeSource,
	        options: this.props.codemirrorOptions });
	    }
	  }]);

	  return CodeWindow;
	}(_react2.default.Component);

	CodeWindow.propTypes = {
	  source: _react2.default.PropTypes.string,
	  changeSource: _react2.default.PropTypes.func,
	  codemirrorOptions: _react2.default.PropTypes.object
	};

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    source: (0, _selectors.getSource)(state),
	    codemirrorOptions: (0, _selectors.getCodemirrorOptions)(state)
	  };
	}, function (dispatch) {
	  return (0, _redux.bindActionCreators)({
	    changeSource: _actionCreators.changeSource
	  }, dispatch);
	})(CodeWindow);

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(71);
	var className = __webpack_require__(187);
	var debounce = __webpack_require__(188);

	var CodeMirror = React.createClass({
		displayName: 'CodeMirror',

		propTypes: {
			onChange: React.PropTypes.func,
			onFocusChange: React.PropTypes.func,
			options: React.PropTypes.object,
			path: React.PropTypes.string,
			value: React.PropTypes.string,
			className: React.PropTypes.any,
			codeMirrorInstance: React.PropTypes.object
		},
		getCodeMirrorInstance: function getCodeMirrorInstance() {
			return this.props.codeMirrorInstance || __webpack_require__(189);
		},
		getInitialState: function getInitialState() {
			return {
				isFocused: false
			};
		},
		componentDidMount: function componentDidMount() {
			var textareaNode = this.refs.textarea;
			var codeMirrorInstance = this.getCodeMirrorInstance();
			this.codeMirror = codeMirrorInstance.fromTextArea(textareaNode, this.props.options);
			this.codeMirror.on('change', this.codemirrorValueChanged);
			this.codeMirror.on('focus', this.focusChanged.bind(this, true));
			this.codeMirror.on('blur', this.focusChanged.bind(this, false));
			this.codeMirror.setValue(this.props.defaultValue || this.props.value || '');
		},
		componentWillUnmount: function componentWillUnmount() {
			// is there a lighter-weight way to remove the cm instance?
			if (this.codeMirror) {
				this.codeMirror.toTextArea();
			}
		},
		componentWillReceiveProps: debounce(function (nextProps) {
			if (this.codeMirror && nextProps.value !== undefined && this.codeMirror.getValue() != nextProps.value) {
				this.codeMirror.setValue(nextProps.value);
			}
			if (typeof nextProps.options === 'object') {
				for (var optionName in nextProps.options) {
					if (nextProps.options.hasOwnProperty(optionName)) {
						this.codeMirror.setOption(optionName, nextProps.options[optionName]);
					}
				}
			}
		}, 0),
		getCodeMirror: function getCodeMirror() {
			return this.codeMirror;
		},
		focus: function focus() {
			if (this.codeMirror) {
				this.codeMirror.focus();
			}
		},
		focusChanged: function focusChanged(focused) {
			this.setState({
				isFocused: focused
			});
			this.props.onFocusChange && this.props.onFocusChange(focused);
		},
		codemirrorValueChanged: function codemirrorValueChanged(doc, change) {
			if (this.props.onChange && change.origin != 'setValue') {
				this.props.onChange(doc.getValue());
			}
		},
		render: function render() {
			var editorClassName = className('ReactCodeMirror', this.state.isFocused ? 'ReactCodeMirror--focused' : null, this.props.className);
			return React.createElement(
				'div',
				{ className: editorClassName },
				React.createElement('textarea', { ref: 'textarea', name: this.props.path, defaultValue: this.props.value, autoComplete: 'off' })
			);
		}
	});

	module.exports = CodeMirror;

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 188 */
/***/ function(module, exports) {

	/**
	 * lodash 4.0.6 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    symbolTag = '[object Symbol]';

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;

	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @type {Function}
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => Logs the number of milliseconds it took for the deferred function to be invoked.
	 */
	var now = Date.now;

	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide an options object to indicate whether `func` should be invoked on
	 * the leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent calls
	 * to the debounced function return the result of the last `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	 * on the trailing edge of the timeout only if the debounced function is
	 * invoked more than once during the `wait` timeout.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce(func, wait, options) {
	  var lastArgs,
	      lastThis,
	      maxWait,
	      result,
	      timerId,
	      lastCallTime = 0,
	      lastInvokeTime = 0,
	      leading = false,
	      maxing = false,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = toNumber(wait) || 0;
	  if (isObject(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }

	  function invokeFunc(time) {
	    var args = lastArgs,
	        thisArg = lastThis;

	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }

	  function leadingEdge(time) {
	    // Reset any `maxWait` timer.
	    lastInvokeTime = time;
	    // Start the timer for the trailing edge.
	    timerId = setTimeout(timerExpired, wait);
	    // Invoke the leading edge.
	    return leading ? invokeFunc(time) : result;
	  }

	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime,
	        result = wait - timeSinceLastCall;

	    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
	  }

	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime;

	    // Either this is the first call, activity has stopped and we're at the
	    // trailing edge, the system time has gone backwards and we're treating
	    // it as the trailing edge, or we've hit the `maxWait` limit.
	    return (!lastCallTime || (timeSinceLastCall >= wait) ||
	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	  }

	  function timerExpired() {
	    var time = now();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    // Restart the timer.
	    timerId = setTimeout(timerExpired, remainingWait(time));
	  }

	  function trailingEdge(time) {
	    clearTimeout(timerId);
	    timerId = undefined;

	    // Only invoke if we have `lastArgs` which means `func` has been
	    // debounced at least once.
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }

	  function cancel() {
	    if (timerId !== undefined) {
	      clearTimeout(timerId);
	    }
	    lastCallTime = lastInvokeTime = 0;
	    lastArgs = lastThis = timerId = undefined;
	  }

	  function flush() {
	    return timerId === undefined ? result : trailingEdge(now());
	  }

	  function debounced() {
	    var time = now(),
	        isInvoking = shouldInvoke(time);

	    lastArgs = arguments;
	    lastThis = this;
	    lastCallTime = time;

	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        // Handle invocations in a tight loop.
	        clearTimeout(timerId);
	        timerId = setTimeout(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = setTimeout(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array and weak map constructors,
	  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3);
	 * // => 3
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3');
	 * // => 3
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = isFunction(value.valueOf) ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	module.exports = debounce;


/***/ },
/* 189 */
/***/ function(module, exports) {

	module.exports = require("codemirror");

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(191);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(193)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./codemirror.css", function() {
				var newContent = require("!!./../../css-loader/index.js!./codemirror.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(192)();
	// imports


	// module
	exports.push([module.id, "/* BASICS */\n\n.CodeMirror {\n  /* Set height, width, borders, and global font properties here */\n  font-family: monospace;\n  height: 300px;\n  color: black;\n}\n\n/* PADDING */\n\n.CodeMirror-lines {\n  padding: 4px 0; /* Vertical padding around content */\n}\n.CodeMirror pre {\n  padding: 0 4px; /* Horizontal padding of content */\n}\n\n.CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  background-color: white; /* The little square between H and V scrollbars */\n}\n\n/* GUTTER */\n\n.CodeMirror-gutters {\n  border-right: 1px solid #ddd;\n  background-color: #f7f7f7;\n  white-space: nowrap;\n}\n.CodeMirror-linenumbers {}\n.CodeMirror-linenumber {\n  padding: 0 3px 0 5px;\n  min-width: 20px;\n  text-align: right;\n  color: #999;\n  white-space: nowrap;\n}\n\n.CodeMirror-guttermarker { color: black; }\n.CodeMirror-guttermarker-subtle { color: #999; }\n\n/* CURSOR */\n\n.CodeMirror-cursor {\n  border-left: 1px solid black;\n  border-right: none;\n  width: 0;\n}\n/* Shown when moving in bi-directional text */\n.CodeMirror div.CodeMirror-secondarycursor {\n  border-left: 1px solid silver;\n}\n.cm-fat-cursor .CodeMirror-cursor {\n  width: auto;\n  border: 0 !important;\n  background: #7e7;\n}\n.cm-fat-cursor div.CodeMirror-cursors {\n  z-index: 1;\n}\n\n.cm-animate-fat-cursor {\n  width: auto;\n  border: 0;\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  -moz-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n  background-color: #7e7;\n}\n@-moz-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@-webkit-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n\n/* Can style cursor different in overwrite (non-insert) mode */\n.CodeMirror-overwrite .CodeMirror-cursor {}\n\n.cm-tab { display: inline-block; text-decoration: inherit; }\n\n.CodeMirror-rulers {\n  position: absolute;\n  left: 0; right: 0; top: -50px; bottom: -20px;\n  overflow: hidden;\n}\n.CodeMirror-ruler {\n  border-left: 1px solid #ccc;\n  top: 0; bottom: 0;\n  position: absolute;\n}\n\n/* DEFAULT THEME */\n\n.cm-s-default .cm-header {color: blue;}\n.cm-s-default .cm-quote {color: #090;}\n.cm-negative {color: #d44;}\n.cm-positive {color: #292;}\n.cm-header, .cm-strong {font-weight: bold;}\n.cm-em {font-style: italic;}\n.cm-link {text-decoration: underline;}\n.cm-strikethrough {text-decoration: line-through;}\n\n.cm-s-default .cm-keyword {color: #708;}\n.cm-s-default .cm-atom {color: #219;}\n.cm-s-default .cm-number {color: #164;}\n.cm-s-default .cm-def {color: #00f;}\n.cm-s-default .cm-variable,\n.cm-s-default .cm-punctuation,\n.cm-s-default .cm-property,\n.cm-s-default .cm-operator {}\n.cm-s-default .cm-variable-2 {color: #05a;}\n.cm-s-default .cm-variable-3 {color: #085;}\n.cm-s-default .cm-comment {color: #a50;}\n.cm-s-default .cm-string {color: #a11;}\n.cm-s-default .cm-string-2 {color: #f50;}\n.cm-s-default .cm-meta {color: #555;}\n.cm-s-default .cm-qualifier {color: #555;}\n.cm-s-default .cm-builtin {color: #30a;}\n.cm-s-default .cm-bracket {color: #997;}\n.cm-s-default .cm-tag {color: #170;}\n.cm-s-default .cm-attribute {color: #00c;}\n.cm-s-default .cm-hr {color: #999;}\n.cm-s-default .cm-link {color: #00c;}\n\n.cm-s-default .cm-error {color: #f00;}\n.cm-invalidchar {color: #f00;}\n\n.CodeMirror-composing { border-bottom: 2px solid; }\n\n/* Default styles for common addons */\n\ndiv.CodeMirror span.CodeMirror-matchingbracket {color: #0f0;}\ndiv.CodeMirror span.CodeMirror-nonmatchingbracket {color: #f22;}\n.CodeMirror-matchingtag { background: rgba(255, 150, 0, .3); }\n.CodeMirror-activeline-background {background: #e8f2ff;}\n\n/* STOP */\n\n/* The rest of this file contains styles related to the mechanics of\n   the editor. You probably shouldn't touch them. */\n\n.CodeMirror {\n  position: relative;\n  overflow: hidden;\n  background: white;\n}\n\n.CodeMirror-scroll {\n  overflow: scroll !important; /* Things will break if this is overridden */\n  /* 30px is the magic margin used to hide the element's real scrollbars */\n  /* See overflow: hidden in .CodeMirror */\n  margin-bottom: -30px; margin-right: -30px;\n  padding-bottom: 30px;\n  height: 100%;\n  outline: none; /* Prevent dragging from highlighting the element */\n  position: relative;\n}\n.CodeMirror-sizer {\n  position: relative;\n  border-right: 30px solid transparent;\n}\n\n/* The fake, visible scrollbars. Used to force redraw during scrolling\n   before actual scrolling happens, thus preventing shaking and\n   flickering artifacts. */\n.CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  position: absolute;\n  z-index: 6;\n  display: none;\n}\n.CodeMirror-vscrollbar {\n  right: 0; top: 0;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.CodeMirror-hscrollbar {\n  bottom: 0; left: 0;\n  overflow-y: hidden;\n  overflow-x: scroll;\n}\n.CodeMirror-scrollbar-filler {\n  right: 0; bottom: 0;\n}\n.CodeMirror-gutter-filler {\n  left: 0; bottom: 0;\n}\n\n.CodeMirror-gutters {\n  position: absolute; left: 0; top: 0;\n  min-height: 100%;\n  z-index: 3;\n}\n.CodeMirror-gutter {\n  white-space: normal;\n  height: 100%;\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: -30px;\n  /* Hack to make IE7 behave */\n  *zoom:1;\n  *display:inline;\n}\n.CodeMirror-gutter-wrapper {\n  position: absolute;\n  z-index: 4;\n  background: none !important;\n  border: none !important;\n}\n.CodeMirror-gutter-background {\n  position: absolute;\n  top: 0; bottom: 0;\n  z-index: 4;\n}\n.CodeMirror-gutter-elt {\n  position: absolute;\n  cursor: default;\n  z-index: 4;\n}\n.CodeMirror-gutter-wrapper {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n\n.CodeMirror-lines {\n  cursor: text;\n  min-height: 1px; /* prevents collapsing before first draw */\n}\n.CodeMirror pre {\n  /* Reset some styles that the rest of the page might have set */\n  -moz-border-radius: 0; -webkit-border-radius: 0; border-radius: 0;\n  border-width: 0;\n  background: transparent;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  white-space: pre;\n  word-wrap: normal;\n  line-height: inherit;\n  color: inherit;\n  z-index: 2;\n  position: relative;\n  overflow: visible;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-font-variant-ligatures: none;\n  font-variant-ligatures: none;\n}\n.CodeMirror-wrap pre {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  word-break: normal;\n}\n\n.CodeMirror-linebackground {\n  position: absolute;\n  left: 0; right: 0; top: 0; bottom: 0;\n  z-index: 0;\n}\n\n.CodeMirror-linewidget {\n  position: relative;\n  z-index: 2;\n  overflow: auto;\n}\n\n.CodeMirror-widget {}\n\n.CodeMirror-code {\n  outline: none;\n}\n\n/* Force content-box sizing for the elements where we expect it */\n.CodeMirror-scroll,\n.CodeMirror-sizer,\n.CodeMirror-gutter,\n.CodeMirror-gutters,\n.CodeMirror-linenumber {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n}\n\n.CodeMirror-measure {\n  position: absolute;\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  visibility: hidden;\n}\n\n.CodeMirror-cursor {\n  position: absolute;\n  pointer-events: none;\n}\n.CodeMirror-measure pre { position: static; }\n\ndiv.CodeMirror-cursors {\n  visibility: hidden;\n  position: relative;\n  z-index: 3;\n}\ndiv.CodeMirror-dragcursors {\n  visibility: visible;\n}\n\n.CodeMirror-focused div.CodeMirror-cursors {\n  visibility: visible;\n}\n\n.CodeMirror-selected { background: #d9d9d9; }\n.CodeMirror-focused .CodeMirror-selected { background: #d7d4f0; }\n.CodeMirror-crosshair { cursor: crosshair; }\n.CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection { background: #d7d4f0; }\n.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }\n\n.cm-searching {\n  background: #ffa;\n  background: rgba(255, 255, 0, .4);\n}\n\n/* IE7 hack to prevent it from returning funny offsetTops on the spans */\n.CodeMirror span { *vertical-align: text-bottom; }\n\n/* Used to force a border model for a node */\n.cm-force-border { padding-right: .1px; }\n\n@media print {\n  /* Hide the cursor when printing */\n  .CodeMirror div.CodeMirror-cursors {\n    visibility: hidden;\n  }\n}\n\n/* See issue #2901 */\n.cm-tab-wrap-hack:after { content: ''; }\n\n/* Help users use markselection to safely style text background */\nspan.CodeMirror-selectedtext { background: none; }\n", ""]);

	// exports


/***/ },
/* 192 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(195);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(193)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./monokai.css", function() {
				var newContent = require("!!./../../css-loader/index.js!./monokai.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(192)();
	// imports


	// module
	exports.push([module.id, "/* Based on Sublime Text's Monokai theme */\n\n.cm-s-monokai.CodeMirror { background: #272822; color: #f8f8f2; }\n.cm-s-monokai div.CodeMirror-selected { background: #49483E; }\n.cm-s-monokai .CodeMirror-line::selection, .cm-s-monokai .CodeMirror-line > span::selection, .cm-s-monokai .CodeMirror-line > span > span::selection { background: rgba(73, 72, 62, .99); }\n.cm-s-monokai .CodeMirror-line::-moz-selection, .cm-s-monokai .CodeMirror-line > span::-moz-selection, .cm-s-monokai .CodeMirror-line > span > span::-moz-selection { background: rgba(73, 72, 62, .99); }\n.cm-s-monokai .CodeMirror-gutters { background: #272822; border-right: 0px; }\n.cm-s-monokai .CodeMirror-guttermarker { color: white; }\n.cm-s-monokai .CodeMirror-guttermarker-subtle { color: #d0d0d0; }\n.cm-s-monokai .CodeMirror-linenumber { color: #d0d0d0; }\n.cm-s-monokai .CodeMirror-cursor { border-left: 1px solid #f8f8f0; }\n\n.cm-s-monokai span.cm-comment { color: #75715e; }\n.cm-s-monokai span.cm-atom { color: #ae81ff; }\n.cm-s-monokai span.cm-number { color: #ae81ff; }\n\n.cm-s-monokai span.cm-property, .cm-s-monokai span.cm-attribute { color: #a6e22e; }\n.cm-s-monokai span.cm-keyword { color: #f92672; }\n.cm-s-monokai span.cm-builtin { color: #66d9ef; }\n.cm-s-monokai span.cm-string { color: #e6db74; }\n\n.cm-s-monokai span.cm-variable { color: #f8f8f2; }\n.cm-s-monokai span.cm-variable-2 { color: #9effff; }\n.cm-s-monokai span.cm-variable-3 { color: #66d9ef; }\n.cm-s-monokai span.cm-def { color: #fd971f; }\n.cm-s-monokai span.cm-bracket { color: #f8f8f2; }\n.cm-s-monokai span.cm-tag { color: #f92672; }\n.cm-s-monokai span.cm-header { color: #ae81ff; }\n.cm-s-monokai span.cm-link { color: #ae81ff; }\n.cm-s-monokai span.cm-error { background: #f92672; color: #f8f8f0; }\n\n.cm-s-monokai .CodeMirror-activeline-background { background: #373831; }\n.cm-s-monokai .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}\n", ""]);

	// exports


/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(197);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(193)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./CodeWindow.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./CodeWindow.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(192)();
	// imports


	// module
	exports.push([module.id, ".PyretIDE-CodeWindow {\n  height: 100%;\n}\n.PyretIDE-CodeWindow .CodeMirror {\n  height: 100%;\n}\n", ""]);

	// exports


/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ErrorBox = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(71);

	var _react2 = _interopRequireDefault(_react);

	var _radium = __webpack_require__(96);

	var _radium2 = _interopRequireDefault(_radium);

	var _reactRedux = __webpack_require__(72);

	var _styles = __webpack_require__(167);

	var _selectors = __webpack_require__(163);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ErrorBox = exports.ErrorBox = function (_React$Component) {
	  _inherits(ErrorBox, _React$Component);

	  function ErrorBox() {
	    _classCallCheck(this, ErrorBox);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ErrorBox).apply(this, arguments));
	  }

	  _createClass(ErrorBox, [{
	    key: 'render',
	    value: function render() {
	      if (this.props.error) {
	        return _react2.default.createElement(
	          'span',
	          { style: _styles.styles.errorBox },
	          this.props.error.message
	        );
	      }
	      return null;
	    }
	  }]);

	  return ErrorBox;
	}(_react2.default.Component);

	ErrorBox.propTypes = {
	  error: _react2.default.PropTypes.object
	};

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return { error: (0, _selectors.getError)(state) };
	})((0, _radium2.default)(ErrorBox));

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(71);

	var _react2 = _interopRequireDefault(_react);

	var _REPLHistoryItem = __webpack_require__(200);

	var _REPLHistoryItem2 = _interopRequireDefault(_REPLHistoryItem);

	var _selectors = __webpack_require__(163);

	var selectors = _interopRequireWildcard(_selectors);

	var _reactRedux = __webpack_require__(72);

	var _immutable = __webpack_require__(203);

	var _immutable2 = _interopRequireDefault(_immutable);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var REPLHistoryList = function (_React$Component) {
	  _inherits(REPLHistoryList, _React$Component);

	  function REPLHistoryList() {
	    _classCallCheck(this, REPLHistoryList);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(REPLHistoryList).apply(this, arguments));
	  }

	  _createClass(REPLHistoryList, [{
	    key: 'render',
	    value: function render() {
	      if (!this.props.hasHistory) {
	        return null;
	      }
	      return _react2.default.createElement(
	        'div',
	        null,
	        this.props.REPLHistory.map(function (item, index) {
	          return _react2.default.createElement(_REPLHistoryItem2.default, { key: index,
	            input: item.code,
	            result: item.result });
	        })
	      );
	    }
	  }]);

	  return REPLHistoryList;
	}(_react2.default.Component);

	exports.default = REPLHistoryList;


	REPLHistoryList.propTypes = {
	  REPLHistory: _react2.default.PropTypes.instanceOf(_immutable2.default.List),
	  hasHistory: _react2.default.PropTypes.bool
	};

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    hasHistory: selectors.hasHistory(state),
	    REPLHistory: selectors.getHistory(state)
	  };
	})(REPLHistoryList);

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(71);

	var _react2 = _interopRequireDefault(_react);

	var _REPLResult = __webpack_require__(201);

	var _REPLResult2 = _interopRequireDefault(_REPLResult);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var REPLHistoryItem = function (_React$Component) {
	  _inherits(REPLHistoryItem, _React$Component);

	  function REPLHistoryItem() {
	    _classCallCheck(this, REPLHistoryItem);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(REPLHistoryItem).apply(this, arguments));
	  }

	  _createClass(REPLHistoryItem, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { style: { margin: 5 } },
	        this.props.input && _react2.default.createElement(
	          'code',
	          null,
	          _react2.default.createElement(
	            'strong',
	            null,
	            '>'
	          ),
	          ' ',
	          this.props.input
	        ),
	        _react2.default.createElement(_REPLResult2.default, { result: this.props.result })
	      );
	    }
	  }]);

	  return REPLHistoryItem;
	}(_react2.default.Component);

	exports.default = REPLHistoryItem;


	REPLHistoryItem.propTypes = {
	  key: _react2.default.PropTypes.number,
	  input: _react2.default.PropTypes.string,
	  result: _react2.default.PropTypes.any
	};

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(71);

	var _react2 = _interopRequireDefault(_react);

	var _REPLValue = __webpack_require__(202);

	var _REPLValue2 = _interopRequireDefault(_REPLValue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var REPLResult = function (_React$Component) {
	  _inherits(REPLResult, _React$Component);

	  function REPLResult() {
	    _classCallCheck(this, REPLResult);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(REPLResult).apply(this, arguments));
	  }

	  _createClass(REPLResult, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_REPLValue2.default, { reprValue: this.props.result })
	      );
	    }
	  }]);

	  return REPLResult;
	}(_react2.default.Component);

	exports.default = REPLResult;


	REPLResult.propTypes = {
	  result: _react2.default.PropTypes.any
	};

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = REPLValue;

	var _react = __webpack_require__(71);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Lazy = function (_React$Component) {
	  _inherits(Lazy, _React$Component);

	  function Lazy(props) {
	    _classCallCheck(this, Lazy);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Lazy).call(this, props));

	    _this.state = {
	      reprValue: null
	    };
	    _this.expand = _this.expand.bind(_this);
	    return _this;
	  }

	  _createClass(Lazy, [{
	    key: "expand",
	    value: function expand() {
	      this.setState({ reprValue: this.props.reprValue.getValue() });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      if (this.state.reprValue === null) {
	        return _react2.default.createElement(
	          "span",
	          { onClick: this.expand },
	          "<click to expand>"
	        );
	      } else {
	        return _react2.default.createElement(REPLValue, { reprValue: this.state.reprValue });
	      }
	    }
	  }]);

	  return Lazy;
	}(_react2.default.Component);

	Lazy.propTypes = { reprValue: _react2.default.PropTypes.object };

	function Opaque() {
	  return _react2.default.createElement(
	    "span",
	    null,
	    "<opaque>"
	  );
	}

	function Cyclic() {
	  return _react2.default.createElement(
	    "span",
	    null,
	    "<cyclic>"
	  );
	}

	function Image() {
	  return _react2.default.createElement(
	    "span",
	    null,
	    "Image"
	  );
	}

	var Number = function (_React$Component2) {
	  _inherits(Number, _React$Component2);

	  function Number(props) {
	    _classCallCheck(this, Number);

	    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Number).call(this, props));

	    _this2.state = { showFraction: false };
	    _this2.toggleFraction = _this2.toggleFraction.bind(_this2);
	    return _this2;
	  }

	  _createClass(Number, [{
	    key: "toggleFraction",
	    value: function toggleFraction() {
	      this.setState({ showFraction: !this.state.showFraction });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var reprValue = this.props.reprValue;
	      if (_typeof(reprValue.value) === "object") {
	        var _reprValue$value = reprValue.value;
	        var numerator = _reprValue$value.numerator;
	        var denominator = _reprValue$value.denominator;
	        var whole = _reprValue$value.whole;
	        var fractional = _reprValue$value.fractional;
	        var repeating = _reprValue$value.repeating;

	        var text = whole + "." + fractional + repeating;
	        if (this.state.showFraction) {
	          text = numerator + "/" + denominator;
	        }
	        return _react2.default.createElement(
	          "span",
	          { onClick: this.toggleFraction },
	          text
	        );
	      }
	      return _react2.default.createElement(
	        "span",
	        null,
	        reprValue.value
	      );
	    }
	  }]);

	  return Number;
	}(_react2.default.Component);

	Number.propTypes = {
	  reprValue: _react2.default.PropTypes.shape({
	    type: _react2.default.PropTypes.string.isRequired,
	    value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.shape({
	      numerator: _react2.default.PropTypes.number,
	      denominator: _react2.default.PropTypes.number,
	      whole: _react2.default.PropTypes.number,
	      fractional: _react2.default.PropTypes.number,
	      repeating: _react2.default.PropTypes.number
	    })])
	  })
	};

	function Nothing() {
	  return _react2.default.createElement(
	    "span",
	    null,
	    "<nothing>"
	  );
	}
	Nothing.propTypes = { reprValue: _react2.default.PropTypes.object };

	function Boolean(_ref) {
	  var reprValue = _ref.reprValue;

	  return _react2.default.createElement(
	    "span",
	    null,
	    reprValue.value ? "true" : "false"
	  );
	}
	Boolean.propTypes = { reprValue: _react2.default.PropTypes.object };

	function String(_ref2) {
	  var reprValue = _ref2.reprValue;

	  return _react2.default.createElement(
	    "span",
	    null,
	    "\"",
	    reprValue.value,
	    "\""
	  );
	}
	String.propTypes = { reprValue: _react2.default.PropTypes.object };

	function Method() {
	  return _react2.default.createElement(
	    "span",
	    null,
	    "<method>"
	  );
	}

	function Func() {
	  return _react2.default.createElement(
	    "span",
	    null,
	    "<func>"
	  );
	}

	function Array(_ref3) {
	  var reprValue = _ref3.reprValue;

	  return _react2.default.createElement(
	    "span",
	    null,
	    "[",
	    reprValue.values.map(function (item, index) {
	      return _react2.default.createElement(
	        "span",
	        null,
	        _react2.default.createElement(REPLValue, { reprValue: item }),
	        index < reprValue.values.length - 1 && ", "
	      );
	    }),
	    "]"
	  );
	}
	Array.propTypes = { reprValue: _react2.default.PropTypes.object };

	function Ref() {
	  return _react2.default.createElement(
	    "span",
	    null,
	    "Ref"
	  );
	}

	function Tuple(_ref4) {
	  var reprValue = _ref4.reprValue;

	  return _react2.default.createElement(
	    "span",
	    null,
	    "(",
	    reprValue.values.map(function (item, index) {
	      return _react2.default.createElement(
	        "span",
	        null,
	        _react2.default.createElement(REPLValue, { reprValue: item }),
	        index < reprValue.values.length - 1 && ", "
	      );
	    }),
	    ")"
	  );
	}
	Tuple.propTypes = { reprValue: _react2.default.PropTypes.object };

	function Obj(_ref5) {
	  var reprValue = _ref5.reprValue;

	  console.log("got repr values keyValues", reprValue.keyValues);

	  return _react2.default.createElement(
	    "dl",
	    null,
	    reprValue.keyValues.map(function (_ref6) {
	      var key = _ref6.key;
	      var value = _ref6.value;
	      return [_react2.default.createElement(
	        "dt",
	        { key: "dt-" + key },
	        key
	      ), _react2.default.createElement(
	        "dd",
	        { key: "dd-" + key },
	        _react2.default.createElement(REPLValue, { reprValue: value })
	      )];
	    })
	  );
	}
	Obj.propTypes = { reprValue: _react2.default.PropTypes.shape({
	    type: _react2.default.PropTypes.string,
	    keyValues: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
	      key: _react2.default.PropTypes.string,
	      value: _react2.default.PropTypes.object
	    }))
	  }) };

	function Data() {
	  return _react2.default.createElement(
	    "span",
	    null,
	    "Data"
	  );
	}

	function StandardOut(_ref7) {
	  var reprValue = _ref7.reprValue;

	  return _react2.default.createElement(
	    "span",
	    null,
	    "stdout: ",
	    reprValue.value
	  );
	}
	StandardOut.propTypes = {
	  reprValue: _react2.default.PropTypes.shape({
	    value: _react2.default.PropTypes.string
	  })
	};

	function StandardError(_ref8) {
	  var reprValue = _ref8.reprValue;

	  return _react2.default.createElement(
	    "span",
	    null,
	    "stderr: ",
	    reprValue.value
	  );
	}
	StandardError.propTypes = {
	  reprValue: _react2.default.PropTypes.shape({
	    value: _react2.default.PropTypes.string
	  })
	};

	var RENDERERS = {
	  opaque: Opaque,
	  cyclic: Cyclic,
	  image: Image,
	  number: Number,
	  nothing: Nothing,
	  boolean: Boolean,
	  string: String,
	  method: Method,
	  func: Func,
	  array: Array,
	  ref: Ref,
	  tuple: Tuple,
	  object: Obj,
	  data: Data,
	  lazy: Lazy,
	  stdout: StandardOut,
	  stderr: StandardError
	};

	function REPLValue(_ref9) {
	  var reprValue = _ref9.reprValue;

	  var renderer = (typeof reprValue === "undefined" ? "undefined" : _typeof(reprValue)) === "object" && RENDERERS[reprValue.type];
	  if (!renderer) {
	    return _react2.default.createElement(
	      "span",
	      null,
	      "UNRENDERABLE: " + JSON.stringify(reprValue)
	    );
	  }
	  return _react2.default.createElement(renderer, { reprValue: reprValue });
	}
	REPLValue.propTypes = {
	  reprValue: _react2.default.PropTypes.shape({
	    type: _react2.default.PropTypes.oneOf(Object.keys(RENDERERS))
	  })
	};

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *  Copyright (c) 2014-2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  (global.Immutable = factory());
	}(this, function () { 'use strict';var SLICE$0 = Array.prototype.slice;

	  function createClass(ctor, superClass) {
	    if (superClass) {
	      ctor.prototype = Object.create(superClass.prototype);
	    }
	    ctor.prototype.constructor = ctor;
	  }

	  function Iterable(value) {
	      return isIterable(value) ? value : Seq(value);
	    }


	  createClass(KeyedIterable, Iterable);
	    function KeyedIterable(value) {
	      return isKeyed(value) ? value : KeyedSeq(value);
	    }


	  createClass(IndexedIterable, Iterable);
	    function IndexedIterable(value) {
	      return isIndexed(value) ? value : IndexedSeq(value);
	    }


	  createClass(SetIterable, Iterable);
	    function SetIterable(value) {
	      return isIterable(value) && !isAssociative(value) ? value : SetSeq(value);
	    }



	  function isIterable(maybeIterable) {
	    return !!(maybeIterable && maybeIterable[IS_ITERABLE_SENTINEL]);
	  }

	  function isKeyed(maybeKeyed) {
	    return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL]);
	  }

	  function isIndexed(maybeIndexed) {
	    return !!(maybeIndexed && maybeIndexed[IS_INDEXED_SENTINEL]);
	  }

	  function isAssociative(maybeAssociative) {
	    return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
	  }

	  function isOrdered(maybeOrdered) {
	    return !!(maybeOrdered && maybeOrdered[IS_ORDERED_SENTINEL]);
	  }

	  Iterable.isIterable = isIterable;
	  Iterable.isKeyed = isKeyed;
	  Iterable.isIndexed = isIndexed;
	  Iterable.isAssociative = isAssociative;
	  Iterable.isOrdered = isOrdered;

	  Iterable.Keyed = KeyedIterable;
	  Iterable.Indexed = IndexedIterable;
	  Iterable.Set = SetIterable;


	  var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
	  var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
	  var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
	  var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

	  // Used for setting prototype methods that IE8 chokes on.
	  var DELETE = 'delete';

	  // Constants describing the size of trie nodes.
	  var SHIFT = 5; // Resulted in best performance after ______?
	  var SIZE = 1 << SHIFT;
	  var MASK = SIZE - 1;

	  // A consistent shared value representing "not set" which equals nothing other
	  // than itself, and nothing that could be provided externally.
	  var NOT_SET = {};

	  // Boolean references, Rough equivalent of `bool &`.
	  var CHANGE_LENGTH = { value: false };
	  var DID_ALTER = { value: false };

	  function MakeRef(ref) {
	    ref.value = false;
	    return ref;
	  }

	  function SetRef(ref) {
	    ref && (ref.value = true);
	  }

	  // A function which returns a value representing an "owner" for transient writes
	  // to tries. The return value will only ever equal itself, and will not equal
	  // the return of any subsequent call of this function.
	  function OwnerID() {}

	  // http://jsperf.com/copy-array-inline
	  function arrCopy(arr, offset) {
	    offset = offset || 0;
	    var len = Math.max(0, arr.length - offset);
	    var newArr = new Array(len);
	    for (var ii = 0; ii < len; ii++) {
	      newArr[ii] = arr[ii + offset];
	    }
	    return newArr;
	  }

	  function ensureSize(iter) {
	    if (iter.size === undefined) {
	      iter.size = iter.__iterate(returnTrue);
	    }
	    return iter.size;
	  }

	  function wrapIndex(iter, index) {
	    // This implements "is array index" which the ECMAString spec defines as:
	    //
	    //     A String property name P is an array index if and only if
	    //     ToString(ToUint32(P)) is equal to P and ToUint32(P) is not equal
	    //     to 2^32−1.
	    //
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-array-exotic-objects
	    if (typeof index !== 'number') {
	      var uint32Index = index >>> 0; // N >>> 0 is shorthand for ToUint32
	      if ('' + uint32Index !== index || uint32Index === 4294967295) {
	        return NaN;
	      }
	      index = uint32Index;
	    }
	    return index < 0 ? ensureSize(iter) + index : index;
	  }

	  function returnTrue() {
	    return true;
	  }

	  function wholeSlice(begin, end, size) {
	    return (begin === 0 || (size !== undefined && begin <= -size)) &&
	      (end === undefined || (size !== undefined && end >= size));
	  }

	  function resolveBegin(begin, size) {
	    return resolveIndex(begin, size, 0);
	  }

	  function resolveEnd(end, size) {
	    return resolveIndex(end, size, size);
	  }

	  function resolveIndex(index, size, defaultIndex) {
	    return index === undefined ?
	      defaultIndex :
	      index < 0 ?
	        Math.max(0, size + index) :
	        size === undefined ?
	          index :
	          Math.min(size, index);
	  }

	  /* global Symbol */

	  var ITERATE_KEYS = 0;
	  var ITERATE_VALUES = 1;
	  var ITERATE_ENTRIES = 2;

	  var REAL_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator';

	  var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;


	  function Iterator(next) {
	      this.next = next;
	    }

	    Iterator.prototype.toString = function() {
	      return '[Iterator]';
	    };


	  Iterator.KEYS = ITERATE_KEYS;
	  Iterator.VALUES = ITERATE_VALUES;
	  Iterator.ENTRIES = ITERATE_ENTRIES;

	  Iterator.prototype.inspect =
	  Iterator.prototype.toSource = function () { return this.toString(); }
	  Iterator.prototype[ITERATOR_SYMBOL] = function () {
	    return this;
	  };


	  function iteratorValue(type, k, v, iteratorResult) {
	    var value = type === 0 ? k : type === 1 ? v : [k, v];
	    iteratorResult ? (iteratorResult.value = value) : (iteratorResult = {
	      value: value, done: false
	    });
	    return iteratorResult;
	  }

	  function iteratorDone() {
	    return { value: undefined, done: true };
	  }

	  function hasIterator(maybeIterable) {
	    return !!getIteratorFn(maybeIterable);
	  }

	  function isIterator(maybeIterator) {
	    return maybeIterator && typeof maybeIterator.next === 'function';
	  }

	  function getIterator(iterable) {
	    var iteratorFn = getIteratorFn(iterable);
	    return iteratorFn && iteratorFn.call(iterable);
	  }

	  function getIteratorFn(iterable) {
	    var iteratorFn = iterable && (
	      (REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL]) ||
	      iterable[FAUX_ITERATOR_SYMBOL]
	    );
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  function isArrayLike(value) {
	    return value && typeof value.length === 'number';
	  }

	  createClass(Seq, Iterable);
	    function Seq(value) {
	      return value === null || value === undefined ? emptySequence() :
	        isIterable(value) ? value.toSeq() : seqFromValue(value);
	    }

	    Seq.of = function(/*...values*/) {
	      return Seq(arguments);
	    };

	    Seq.prototype.toSeq = function() {
	      return this;
	    };

	    Seq.prototype.toString = function() {
	      return this.__toString('Seq {', '}');
	    };

	    Seq.prototype.cacheResult = function() {
	      if (!this._cache && this.__iterateUncached) {
	        this._cache = this.entrySeq().toArray();
	        this.size = this._cache.length;
	      }
	      return this;
	    };

	    // abstract __iterateUncached(fn, reverse)

	    Seq.prototype.__iterate = function(fn, reverse) {
	      return seqIterate(this, fn, reverse, true);
	    };

	    // abstract __iteratorUncached(type, reverse)

	    Seq.prototype.__iterator = function(type, reverse) {
	      return seqIterator(this, type, reverse, true);
	    };



	  createClass(KeyedSeq, Seq);
	    function KeyedSeq(value) {
	      return value === null || value === undefined ?
	        emptySequence().toKeyedSeq() :
	        isIterable(value) ?
	          (isKeyed(value) ? value.toSeq() : value.fromEntrySeq()) :
	          keyedSeqFromValue(value);
	    }

	    KeyedSeq.prototype.toKeyedSeq = function() {
	      return this;
	    };



	  createClass(IndexedSeq, Seq);
	    function IndexedSeq(value) {
	      return value === null || value === undefined ? emptySequence() :
	        !isIterable(value) ? indexedSeqFromValue(value) :
	        isKeyed(value) ? value.entrySeq() : value.toIndexedSeq();
	    }

	    IndexedSeq.of = function(/*...values*/) {
	      return IndexedSeq(arguments);
	    };

	    IndexedSeq.prototype.toIndexedSeq = function() {
	      return this;
	    };

	    IndexedSeq.prototype.toString = function() {
	      return this.__toString('Seq [', ']');
	    };

	    IndexedSeq.prototype.__iterate = function(fn, reverse) {
	      return seqIterate(this, fn, reverse, false);
	    };

	    IndexedSeq.prototype.__iterator = function(type, reverse) {
	      return seqIterator(this, type, reverse, false);
	    };



	  createClass(SetSeq, Seq);
	    function SetSeq(value) {
	      return (
	        value === null || value === undefined ? emptySequence() :
	        !isIterable(value) ? indexedSeqFromValue(value) :
	        isKeyed(value) ? value.entrySeq() : value
	      ).toSetSeq();
	    }

	    SetSeq.of = function(/*...values*/) {
	      return SetSeq(arguments);
	    };

	    SetSeq.prototype.toSetSeq = function() {
	      return this;
	    };



	  Seq.isSeq = isSeq;
	  Seq.Keyed = KeyedSeq;
	  Seq.Set = SetSeq;
	  Seq.Indexed = IndexedSeq;

	  var IS_SEQ_SENTINEL = '@@__IMMUTABLE_SEQ__@@';

	  Seq.prototype[IS_SEQ_SENTINEL] = true;



	  createClass(ArraySeq, IndexedSeq);
	    function ArraySeq(array) {
	      this._array = array;
	      this.size = array.length;
	    }

	    ArraySeq.prototype.get = function(index, notSetValue) {
	      return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
	    };

	    ArraySeq.prototype.__iterate = function(fn, reverse) {
	      var array = this._array;
	      var maxIndex = array.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        if (fn(array[reverse ? maxIndex - ii : ii], ii, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };

	    ArraySeq.prototype.__iterator = function(type, reverse) {
	      var array = this._array;
	      var maxIndex = array.length - 1;
	      var ii = 0;
	      return new Iterator(function() 
	        {return ii > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, ii, array[reverse ? maxIndex - ii++ : ii++])}
	      );
	    };



	  createClass(ObjectSeq, KeyedSeq);
	    function ObjectSeq(object) {
	      var keys = Object.keys(object);
	      this._object = object;
	      this._keys = keys;
	      this.size = keys.length;
	    }

	    ObjectSeq.prototype.get = function(key, notSetValue) {
	      if (notSetValue !== undefined && !this.has(key)) {
	        return notSetValue;
	      }
	      return this._object[key];
	    };

	    ObjectSeq.prototype.has = function(key) {
	      return this._object.hasOwnProperty(key);
	    };

	    ObjectSeq.prototype.__iterate = function(fn, reverse) {
	      var object = this._object;
	      var keys = this._keys;
	      var maxIndex = keys.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        var key = keys[reverse ? maxIndex - ii : ii];
	        if (fn(object[key], key, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };

	    ObjectSeq.prototype.__iterator = function(type, reverse) {
	      var object = this._object;
	      var keys = this._keys;
	      var maxIndex = keys.length - 1;
	      var ii = 0;
	      return new Iterator(function()  {
	        var key = keys[reverse ? maxIndex - ii : ii];
	        return ii++ > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, key, object[key]);
	      });
	    };

	  ObjectSeq.prototype[IS_ORDERED_SENTINEL] = true;


	  createClass(IterableSeq, IndexedSeq);
	    function IterableSeq(iterable) {
	      this._iterable = iterable;
	      this.size = iterable.length || iterable.size;
	    }

	    IterableSeq.prototype.__iterateUncached = function(fn, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterable = this._iterable;
	      var iterator = getIterator(iterable);
	      var iterations = 0;
	      if (isIterator(iterator)) {
	        var step;
	        while (!(step = iterator.next()).done) {
	          if (fn(step.value, iterations++, this) === false) {
	            break;
	          }
	        }
	      }
	      return iterations;
	    };

	    IterableSeq.prototype.__iteratorUncached = function(type, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterable = this._iterable;
	      var iterator = getIterator(iterable);
	      if (!isIterator(iterator)) {
	        return new Iterator(iteratorDone);
	      }
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step : iteratorValue(type, iterations++, step.value);
	      });
	    };



	  createClass(IteratorSeq, IndexedSeq);
	    function IteratorSeq(iterator) {
	      this._iterator = iterator;
	      this._iteratorCache = [];
	    }

	    IteratorSeq.prototype.__iterateUncached = function(fn, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterator = this._iterator;
	      var cache = this._iteratorCache;
	      var iterations = 0;
	      while (iterations < cache.length) {
	        if (fn(cache[iterations], iterations++, this) === false) {
	          return iterations;
	        }
	      }
	      var step;
	      while (!(step = iterator.next()).done) {
	        var val = step.value;
	        cache[iterations] = val;
	        if (fn(val, iterations++, this) === false) {
	          break;
	        }
	      }
	      return iterations;
	    };

	    IteratorSeq.prototype.__iteratorUncached = function(type, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = this._iterator;
	      var cache = this._iteratorCache;
	      var iterations = 0;
	      return new Iterator(function()  {
	        if (iterations >= cache.length) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          cache[iterations] = step.value;
	        }
	        return iteratorValue(type, iterations, cache[iterations++]);
	      });
	    };




	  // # pragma Helper functions

	  function isSeq(maybeSeq) {
	    return !!(maybeSeq && maybeSeq[IS_SEQ_SENTINEL]);
	  }

	  var EMPTY_SEQ;

	  function emptySequence() {
	    return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
	  }

	  function keyedSeqFromValue(value) {
	    var seq =
	      Array.isArray(value) ? new ArraySeq(value).fromEntrySeq() :
	      isIterator(value) ? new IteratorSeq(value).fromEntrySeq() :
	      hasIterator(value) ? new IterableSeq(value).fromEntrySeq() :
	      typeof value === 'object' ? new ObjectSeq(value) :
	      undefined;
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of [k, v] entries, '+
	        'or keyed object: ' + value
	      );
	    }
	    return seq;
	  }

	  function indexedSeqFromValue(value) {
	    var seq = maybeIndexedSeqFromValue(value);
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of values: ' + value
	      );
	    }
	    return seq;
	  }

	  function seqFromValue(value) {
	    var seq = maybeIndexedSeqFromValue(value) ||
	      (typeof value === 'object' && new ObjectSeq(value));
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of values, or keyed object: ' + value
	      );
	    }
	    return seq;
	  }

	  function maybeIndexedSeqFromValue(value) {
	    return (
	      isArrayLike(value) ? new ArraySeq(value) :
	      isIterator(value) ? new IteratorSeq(value) :
	      hasIterator(value) ? new IterableSeq(value) :
	      undefined
	    );
	  }

	  function seqIterate(seq, fn, reverse, useKeys) {
	    var cache = seq._cache;
	    if (cache) {
	      var maxIndex = cache.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        var entry = cache[reverse ? maxIndex - ii : ii];
	        if (fn(entry[1], useKeys ? entry[0] : ii, seq) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    }
	    return seq.__iterateUncached(fn, reverse);
	  }

	  function seqIterator(seq, type, reverse, useKeys) {
	    var cache = seq._cache;
	    if (cache) {
	      var maxIndex = cache.length - 1;
	      var ii = 0;
	      return new Iterator(function()  {
	        var entry = cache[reverse ? maxIndex - ii : ii];
	        return ii++ > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, useKeys ? entry[0] : ii - 1, entry[1]);
	      });
	    }
	    return seq.__iteratorUncached(type, reverse);
	  }

	  function fromJS(json, converter) {
	    return converter ?
	      fromJSWith(converter, json, '', {'': json}) :
	      fromJSDefault(json);
	  }

	  function fromJSWith(converter, json, key, parentJSON) {
	    if (Array.isArray(json)) {
	      return converter.call(parentJSON, key, IndexedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
	    }
	    if (isPlainObj(json)) {
	      return converter.call(parentJSON, key, KeyedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
	    }
	    return json;
	  }

	  function fromJSDefault(json) {
	    if (Array.isArray(json)) {
	      return IndexedSeq(json).map(fromJSDefault).toList();
	    }
	    if (isPlainObj(json)) {
	      return KeyedSeq(json).map(fromJSDefault).toMap();
	    }
	    return json;
	  }

	  function isPlainObj(value) {
	    return value && (value.constructor === Object || value.constructor === undefined);
	  }

	  /**
	   * An extension of the "same-value" algorithm as [described for use by ES6 Map
	   * and Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Key_equality)
	   *
	   * NaN is considered the same as NaN, however -0 and 0 are considered the same
	   * value, which is different from the algorithm described by
	   * [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is).
	   *
	   * This is extended further to allow Objects to describe the values they
	   * represent, by way of `valueOf` or `equals` (and `hashCode`).
	   *
	   * Note: because of this extension, the key equality of Immutable.Map and the
	   * value equality of Immutable.Set will differ from ES6 Map and Set.
	   *
	   * ### Defining custom values
	   *
	   * The easiest way to describe the value an object represents is by implementing
	   * `valueOf`. For example, `Date` represents a value by returning a unix
	   * timestamp for `valueOf`:
	   *
	   *     var date1 = new Date(1234567890000); // Fri Feb 13 2009 ...
	   *     var date2 = new Date(1234567890000);
	   *     date1.valueOf(); // 1234567890000
	   *     assert( date1 !== date2 );
	   *     assert( Immutable.is( date1, date2 ) );
	   *
	   * Note: overriding `valueOf` may have other implications if you use this object
	   * where JavaScript expects a primitive, such as implicit string coercion.
	   *
	   * For more complex types, especially collections, implementing `valueOf` may
	   * not be performant. An alternative is to implement `equals` and `hashCode`.
	   *
	   * `equals` takes another object, presumably of similar type, and returns true
	   * if the it is equal. Equality is symmetrical, so the same result should be
	   * returned if this and the argument are flipped.
	   *
	   *     assert( a.equals(b) === b.equals(a) );
	   *
	   * `hashCode` returns a 32bit integer number representing the object which will
	   * be used to determine how to store the value object in a Map or Set. You must
	   * provide both or neither methods, one must not exist without the other.
	   *
	   * Also, an important relationship between these methods must be upheld: if two
	   * values are equal, they *must* return the same hashCode. If the values are not
	   * equal, they might have the same hashCode; this is called a hash collision,
	   * and while undesirable for performance reasons, it is acceptable.
	   *
	   *     if (a.equals(b)) {
	   *       assert( a.hashCode() === b.hashCode() );
	   *     }
	   *
	   * All Immutable collections implement `equals` and `hashCode`.
	   *
	   */
	  function is(valueA, valueB) {
	    if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
	      return true;
	    }
	    if (!valueA || !valueB) {
	      return false;
	    }
	    if (typeof valueA.valueOf === 'function' &&
	        typeof valueB.valueOf === 'function') {
	      valueA = valueA.valueOf();
	      valueB = valueB.valueOf();
	      if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
	        return true;
	      }
	      if (!valueA || !valueB) {
	        return false;
	      }
	    }
	    if (typeof valueA.equals === 'function' &&
	        typeof valueB.equals === 'function' &&
	        valueA.equals(valueB)) {
	      return true;
	    }
	    return false;
	  }

	  function deepEqual(a, b) {
	    if (a === b) {
	      return true;
	    }

	    if (
	      !isIterable(b) ||
	      a.size !== undefined && b.size !== undefined && a.size !== b.size ||
	      a.__hash !== undefined && b.__hash !== undefined && a.__hash !== b.__hash ||
	      isKeyed(a) !== isKeyed(b) ||
	      isIndexed(a) !== isIndexed(b) ||
	      isOrdered(a) !== isOrdered(b)
	    ) {
	      return false;
	    }

	    if (a.size === 0 && b.size === 0) {
	      return true;
	    }

	    var notAssociative = !isAssociative(a);

	    if (isOrdered(a)) {
	      var entries = a.entries();
	      return b.every(function(v, k)  {
	        var entry = entries.next().value;
	        return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
	      }) && entries.next().done;
	    }

	    var flipped = false;

	    if (a.size === undefined) {
	      if (b.size === undefined) {
	        if (typeof a.cacheResult === 'function') {
	          a.cacheResult();
	        }
	      } else {
	        flipped = true;
	        var _ = a;
	        a = b;
	        b = _;
	      }
	    }

	    var allEqual = true;
	    var bSize = b.__iterate(function(v, k)  {
	      if (notAssociative ? !a.has(v) :
	          flipped ? !is(v, a.get(k, NOT_SET)) : !is(a.get(k, NOT_SET), v)) {
	        allEqual = false;
	        return false;
	      }
	    });

	    return allEqual && a.size === bSize;
	  }

	  createClass(Repeat, IndexedSeq);

	    function Repeat(value, times) {
	      if (!(this instanceof Repeat)) {
	        return new Repeat(value, times);
	      }
	      this._value = value;
	      this.size = times === undefined ? Infinity : Math.max(0, times);
	      if (this.size === 0) {
	        if (EMPTY_REPEAT) {
	          return EMPTY_REPEAT;
	        }
	        EMPTY_REPEAT = this;
	      }
	    }

	    Repeat.prototype.toString = function() {
	      if (this.size === 0) {
	        return 'Repeat []';
	      }
	      return 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
	    };

	    Repeat.prototype.get = function(index, notSetValue) {
	      return this.has(index) ? this._value : notSetValue;
	    };

	    Repeat.prototype.includes = function(searchValue) {
	      return is(this._value, searchValue);
	    };

	    Repeat.prototype.slice = function(begin, end) {
	      var size = this.size;
	      return wholeSlice(begin, end, size) ? this :
	        new Repeat(this._value, resolveEnd(end, size) - resolveBegin(begin, size));
	    };

	    Repeat.prototype.reverse = function() {
	      return this;
	    };

	    Repeat.prototype.indexOf = function(searchValue) {
	      if (is(this._value, searchValue)) {
	        return 0;
	      }
	      return -1;
	    };

	    Repeat.prototype.lastIndexOf = function(searchValue) {
	      if (is(this._value, searchValue)) {
	        return this.size;
	      }
	      return -1;
	    };

	    Repeat.prototype.__iterate = function(fn, reverse) {
	      for (var ii = 0; ii < this.size; ii++) {
	        if (fn(this._value, ii, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };

	    Repeat.prototype.__iterator = function(type, reverse) {var this$0 = this;
	      var ii = 0;
	      return new Iterator(function() 
	        {return ii < this$0.size ? iteratorValue(type, ii++, this$0._value) : iteratorDone()}
	      );
	    };

	    Repeat.prototype.equals = function(other) {
	      return other instanceof Repeat ?
	        is(this._value, other._value) :
	        deepEqual(other);
	    };


	  var EMPTY_REPEAT;

	  function invariant(condition, error) {
	    if (!condition) throw new Error(error);
	  }

	  createClass(Range, IndexedSeq);

	    function Range(start, end, step) {
	      if (!(this instanceof Range)) {
	        return new Range(start, end, step);
	      }
	      invariant(step !== 0, 'Cannot step a Range by 0');
	      start = start || 0;
	      if (end === undefined) {
	        end = Infinity;
	      }
	      step = step === undefined ? 1 : Math.abs(step);
	      if (end < start) {
	        step = -step;
	      }
	      this._start = start;
	      this._end = end;
	      this._step = step;
	      this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
	      if (this.size === 0) {
	        if (EMPTY_RANGE) {
	          return EMPTY_RANGE;
	        }
	        EMPTY_RANGE = this;
	      }
	    }

	    Range.prototype.toString = function() {
	      if (this.size === 0) {
	        return 'Range []';
	      }
	      return 'Range [ ' +
	        this._start + '...' + this._end +
	        (this._step !== 1 ? ' by ' + this._step : '') +
	      ' ]';
	    };

	    Range.prototype.get = function(index, notSetValue) {
	      return this.has(index) ?
	        this._start + wrapIndex(this, index) * this._step :
	        notSetValue;
	    };

	    Range.prototype.includes = function(searchValue) {
	      var possibleIndex = (searchValue - this._start) / this._step;
	      return possibleIndex >= 0 &&
	        possibleIndex < this.size &&
	        possibleIndex === Math.floor(possibleIndex);
	    };

	    Range.prototype.slice = function(begin, end) {
	      if (wholeSlice(begin, end, this.size)) {
	        return this;
	      }
	      begin = resolveBegin(begin, this.size);
	      end = resolveEnd(end, this.size);
	      if (end <= begin) {
	        return new Range(0, 0);
	      }
	      return new Range(this.get(begin, this._end), this.get(end, this._end), this._step);
	    };

	    Range.prototype.indexOf = function(searchValue) {
	      var offsetValue = searchValue - this._start;
	      if (offsetValue % this._step === 0) {
	        var index = offsetValue / this._step;
	        if (index >= 0 && index < this.size) {
	          return index
	        }
	      }
	      return -1;
	    };

	    Range.prototype.lastIndexOf = function(searchValue) {
	      return this.indexOf(searchValue);
	    };

	    Range.prototype.__iterate = function(fn, reverse) {
	      var maxIndex = this.size - 1;
	      var step = this._step;
	      var value = reverse ? this._start + maxIndex * step : this._start;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        if (fn(value, ii, this) === false) {
	          return ii + 1;
	        }
	        value += reverse ? -step : step;
	      }
	      return ii;
	    };

	    Range.prototype.__iterator = function(type, reverse) {
	      var maxIndex = this.size - 1;
	      var step = this._step;
	      var value = reverse ? this._start + maxIndex * step : this._start;
	      var ii = 0;
	      return new Iterator(function()  {
	        var v = value;
	        value += reverse ? -step : step;
	        return ii > maxIndex ? iteratorDone() : iteratorValue(type, ii++, v);
	      });
	    };

	    Range.prototype.equals = function(other) {
	      return other instanceof Range ?
	        this._start === other._start &&
	        this._end === other._end &&
	        this._step === other._step :
	        deepEqual(this, other);
	    };


	  var EMPTY_RANGE;

	  createClass(Collection, Iterable);
	    function Collection() {
	      throw TypeError('Abstract');
	    }


	  createClass(KeyedCollection, Collection);function KeyedCollection() {}

	  createClass(IndexedCollection, Collection);function IndexedCollection() {}

	  createClass(SetCollection, Collection);function SetCollection() {}


	  Collection.Keyed = KeyedCollection;
	  Collection.Indexed = IndexedCollection;
	  Collection.Set = SetCollection;

	  var imul =
	    typeof Math.imul === 'function' && Math.imul(0xffffffff, 2) === -2 ?
	    Math.imul :
	    function imul(a, b) {
	      a = a | 0; // int
	      b = b | 0; // int
	      var c = a & 0xffff;
	      var d = b & 0xffff;
	      // Shift by 0 fixes the sign on the high part.
	      return (c * d) + ((((a >>> 16) * d + c * (b >>> 16)) << 16) >>> 0) | 0; // int
	    };

	  // v8 has an optimization for storing 31-bit signed numbers.
	  // Values which have either 00 or 11 as the high order bits qualify.
	  // This function drops the highest order bit in a signed number, maintaining
	  // the sign bit.
	  function smi(i32) {
	    return ((i32 >>> 1) & 0x40000000) | (i32 & 0xBFFFFFFF);
	  }

	  function hash(o) {
	    if (o === false || o === null || o === undefined) {
	      return 0;
	    }
	    if (typeof o.valueOf === 'function') {
	      o = o.valueOf();
	      if (o === false || o === null || o === undefined) {
	        return 0;
	      }
	    }
	    if (o === true) {
	      return 1;
	    }
	    var type = typeof o;
	    if (type === 'number') {
	      if (o !== o || o === Infinity) {
	        return 0;
	      }
	      var h = o | 0;
	      if (h !== o) {
	        h ^= o * 0xFFFFFFFF;
	      }
	      while (o > 0xFFFFFFFF) {
	        o /= 0xFFFFFFFF;
	        h ^= o;
	      }
	      return smi(h);
	    }
	    if (type === 'string') {
	      return o.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(o) : hashString(o);
	    }
	    if (typeof o.hashCode === 'function') {
	      return o.hashCode();
	    }
	    if (type === 'object') {
	      return hashJSObj(o);
	    }
	    if (typeof o.toString === 'function') {
	      return hashString(o.toString());
	    }
	    throw new Error('Value type ' + type + ' cannot be hashed.');
	  }

	  function cachedHashString(string) {
	    var hash = stringHashCache[string];
	    if (hash === undefined) {
	      hash = hashString(string);
	      if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
	        STRING_HASH_CACHE_SIZE = 0;
	        stringHashCache = {};
	      }
	      STRING_HASH_CACHE_SIZE++;
	      stringHashCache[string] = hash;
	    }
	    return hash;
	  }

	  // http://jsperf.com/hashing-strings
	  function hashString(string) {
	    // This is the hash from JVM
	    // The hash code for a string is computed as
	    // s[0] * 31 ^ (n - 1) + s[1] * 31 ^ (n - 2) + ... + s[n - 1],
	    // where s[i] is the ith character of the string and n is the length of
	    // the string. We "mod" the result to make it between 0 (inclusive) and 2^31
	    // (exclusive) by dropping high bits.
	    var hash = 0;
	    for (var ii = 0; ii < string.length; ii++) {
	      hash = 31 * hash + string.charCodeAt(ii) | 0;
	    }
	    return smi(hash);
	  }

	  function hashJSObj(obj) {
	    var hash;
	    if (usingWeakMap) {
	      hash = weakMap.get(obj);
	      if (hash !== undefined) {
	        return hash;
	      }
	    }

	    hash = obj[UID_HASH_KEY];
	    if (hash !== undefined) {
	      return hash;
	    }

	    if (!canDefineProperty) {
	      hash = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
	      if (hash !== undefined) {
	        return hash;
	      }

	      hash = getIENodeHash(obj);
	      if (hash !== undefined) {
	        return hash;
	      }
	    }

	    hash = ++objHashUID;
	    if (objHashUID & 0x40000000) {
	      objHashUID = 0;
	    }

	    if (usingWeakMap) {
	      weakMap.set(obj, hash);
	    } else if (isExtensible !== undefined && isExtensible(obj) === false) {
	      throw new Error('Non-extensible objects are not allowed as keys.');
	    } else if (canDefineProperty) {
	      Object.defineProperty(obj, UID_HASH_KEY, {
	        'enumerable': false,
	        'configurable': false,
	        'writable': false,
	        'value': hash
	      });
	    } else if (obj.propertyIsEnumerable !== undefined &&
	               obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
	      // Since we can't define a non-enumerable property on the object
	      // we'll hijack one of the less-used non-enumerable properties to
	      // save our hash on it. Since this is a function it will not show up in
	      // `JSON.stringify` which is what we want.
	      obj.propertyIsEnumerable = function() {
	        return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
	      };
	      obj.propertyIsEnumerable[UID_HASH_KEY] = hash;
	    } else if (obj.nodeType !== undefined) {
	      // At this point we couldn't get the IE `uniqueID` to use as a hash
	      // and we couldn't use a non-enumerable property to exploit the
	      // dontEnum bug so we simply add the `UID_HASH_KEY` on the node
	      // itself.
	      obj[UID_HASH_KEY] = hash;
	    } else {
	      throw new Error('Unable to set a non-enumerable property on object.');
	    }

	    return hash;
	  }

	  // Get references to ES5 object methods.
	  var isExtensible = Object.isExtensible;

	  // True if Object.defineProperty works as expected. IE8 fails this test.
	  var canDefineProperty = (function() {
	    try {
	      Object.defineProperty({}, '@', {});
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }());

	  // IE has a `uniqueID` property on DOM nodes. We can construct the hash from it
	  // and avoid memory leaks from the IE cloneNode bug.
	  function getIENodeHash(node) {
	    if (node && node.nodeType > 0) {
	      switch (node.nodeType) {
	        case 1: // Element
	          return node.uniqueID;
	        case 9: // Document
	          return node.documentElement && node.documentElement.uniqueID;
	      }
	    }
	  }

	  // If possible, use a WeakMap.
	  var usingWeakMap = typeof WeakMap === 'function';
	  var weakMap;
	  if (usingWeakMap) {
	    weakMap = new WeakMap();
	  }

	  var objHashUID = 0;

	  var UID_HASH_KEY = '__immutablehash__';
	  if (typeof Symbol === 'function') {
	    UID_HASH_KEY = Symbol(UID_HASH_KEY);
	  }

	  var STRING_HASH_CACHE_MIN_STRLEN = 16;
	  var STRING_HASH_CACHE_MAX_SIZE = 255;
	  var STRING_HASH_CACHE_SIZE = 0;
	  var stringHashCache = {};

	  function assertNotInfinite(size) {
	    invariant(
	      size !== Infinity,
	      'Cannot perform this action with an infinite size.'
	    );
	  }

	  createClass(Map, KeyedCollection);

	    // @pragma Construction

	    function Map(value) {
	      return value === null || value === undefined ? emptyMap() :
	        isMap(value) && !isOrdered(value) ? value :
	        emptyMap().withMutations(function(map ) {
	          var iter = KeyedIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v, k)  {return map.set(k, v)});
	        });
	    }

	    Map.of = function() {var keyValues = SLICE$0.call(arguments, 0);
	      return emptyMap().withMutations(function(map ) {
	        for (var i = 0; i < keyValues.length; i += 2) {
	          if (i + 1 >= keyValues.length) {
	            throw new Error('Missing value for key: ' + keyValues[i]);
	          }
	          map.set(keyValues[i], keyValues[i + 1]);
	        }
	      });
	    };

	    Map.prototype.toString = function() {
	      return this.__toString('Map {', '}');
	    };

	    // @pragma Access

	    Map.prototype.get = function(k, notSetValue) {
	      return this._root ?
	        this._root.get(0, undefined, k, notSetValue) :
	        notSetValue;
	    };

	    // @pragma Modification

	    Map.prototype.set = function(k, v) {
	      return updateMap(this, k, v);
	    };

	    Map.prototype.setIn = function(keyPath, v) {
	      return this.updateIn(keyPath, NOT_SET, function()  {return v});
	    };

	    Map.prototype.remove = function(k) {
	      return updateMap(this, k, NOT_SET);
	    };

	    Map.prototype.deleteIn = function(keyPath) {
	      return this.updateIn(keyPath, function()  {return NOT_SET});
	    };

	    Map.prototype.update = function(k, notSetValue, updater) {
	      return arguments.length === 1 ?
	        k(this) :
	        this.updateIn([k], notSetValue, updater);
	    };

	    Map.prototype.updateIn = function(keyPath, notSetValue, updater) {
	      if (!updater) {
	        updater = notSetValue;
	        notSetValue = undefined;
	      }
	      var updatedValue = updateInDeepMap(
	        this,
	        forceIterator(keyPath),
	        notSetValue,
	        updater
	      );
	      return updatedValue === NOT_SET ? undefined : updatedValue;
	    };

	    Map.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._root = null;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyMap();
	    };

	    // @pragma Composition

	    Map.prototype.merge = function(/*...iters*/) {
	      return mergeIntoMapWith(this, undefined, arguments);
	    };

	    Map.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoMapWith(this, merger, iters);
	    };

	    Map.prototype.mergeIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
	      return this.updateIn(
	        keyPath,
	        emptyMap(),
	        function(m ) {return typeof m.merge === 'function' ?
	          m.merge.apply(m, iters) :
	          iters[iters.length - 1]}
	      );
	    };

	    Map.prototype.mergeDeep = function(/*...iters*/) {
	      return mergeIntoMapWith(this, deepMerger, arguments);
	    };

	    Map.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoMapWith(this, deepMergerWith(merger), iters);
	    };

	    Map.prototype.mergeDeepIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
	      return this.updateIn(
	        keyPath,
	        emptyMap(),
	        function(m ) {return typeof m.mergeDeep === 'function' ?
	          m.mergeDeep.apply(m, iters) :
	          iters[iters.length - 1]}
	      );
	    };

	    Map.prototype.sort = function(comparator) {
	      // Late binding
	      return OrderedMap(sortFactory(this, comparator));
	    };

	    Map.prototype.sortBy = function(mapper, comparator) {
	      // Late binding
	      return OrderedMap(sortFactory(this, comparator, mapper));
	    };

	    // @pragma Mutability

	    Map.prototype.withMutations = function(fn) {
	      var mutable = this.asMutable();
	      fn(mutable);
	      return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
	    };

	    Map.prototype.asMutable = function() {
	      return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
	    };

	    Map.prototype.asImmutable = function() {
	      return this.__ensureOwner();
	    };

	    Map.prototype.wasAltered = function() {
	      return this.__altered;
	    };

	    Map.prototype.__iterator = function(type, reverse) {
	      return new MapIterator(this, type, reverse);
	    };

	    Map.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      this._root && this._root.iterate(function(entry ) {
	        iterations++;
	        return fn(entry[1], entry[0], this$0);
	      }, reverse);
	      return iterations;
	    };

	    Map.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this.__altered = false;
	        return this;
	      }
	      return makeMap(this.size, this._root, ownerID, this.__hash);
	    };


	  function isMap(maybeMap) {
	    return !!(maybeMap && maybeMap[IS_MAP_SENTINEL]);
	  }

	  Map.isMap = isMap;

	  var IS_MAP_SENTINEL = '@@__IMMUTABLE_MAP__@@';

	  var MapPrototype = Map.prototype;
	  MapPrototype[IS_MAP_SENTINEL] = true;
	  MapPrototype[DELETE] = MapPrototype.remove;
	  MapPrototype.removeIn = MapPrototype.deleteIn;


	  // #pragma Trie Nodes



	    function ArrayMapNode(ownerID, entries) {
	      this.ownerID = ownerID;
	      this.entries = entries;
	    }

	    ArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      var entries = this.entries;
	      for (var ii = 0, len = entries.length; ii < len; ii++) {
	        if (is(key, entries[ii][0])) {
	          return entries[ii][1];
	        }
	      }
	      return notSetValue;
	    };

	    ArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      var removed = value === NOT_SET;

	      var entries = this.entries;
	      var idx = 0;
	      for (var len = entries.length; idx < len; idx++) {
	        if (is(key, entries[idx][0])) {
	          break;
	        }
	      }
	      var exists = idx < len;

	      if (exists ? entries[idx][1] === value : removed) {
	        return this;
	      }

	      SetRef(didAlter);
	      (removed || !exists) && SetRef(didChangeSize);

	      if (removed && entries.length === 1) {
	        return; // undefined
	      }

	      if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) {
	        return createNodes(ownerID, entries, key, value);
	      }

	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newEntries = isEditable ? entries : arrCopy(entries);

	      if (exists) {
	        if (removed) {
	          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
	        } else {
	          newEntries[idx] = [key, value];
	        }
	      } else {
	        newEntries.push([key, value]);
	      }

	      if (isEditable) {
	        this.entries = newEntries;
	        return this;
	      }

	      return new ArrayMapNode(ownerID, newEntries);
	    };




	    function BitmapIndexedNode(ownerID, bitmap, nodes) {
	      this.ownerID = ownerID;
	      this.bitmap = bitmap;
	      this.nodes = nodes;
	    }

	    BitmapIndexedNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var bit = (1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK));
	      var bitmap = this.bitmap;
	      return (bitmap & bit) === 0 ? notSetValue :
	        this.nodes[popCount(bitmap & (bit - 1))].get(shift + SHIFT, keyHash, key, notSetValue);
	    };

	    BitmapIndexedNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var bit = 1 << keyHashFrag;
	      var bitmap = this.bitmap;
	      var exists = (bitmap & bit) !== 0;

	      if (!exists && value === NOT_SET) {
	        return this;
	      }

	      var idx = popCount(bitmap & (bit - 1));
	      var nodes = this.nodes;
	      var node = exists ? nodes[idx] : undefined;
	      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);

	      if (newNode === node) {
	        return this;
	      }

	      if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
	        return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
	      }

	      if (exists && !newNode && nodes.length === 2 && isLeafNode(nodes[idx ^ 1])) {
	        return nodes[idx ^ 1];
	      }

	      if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
	        return newNode;
	      }

	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
	      var newNodes = exists ? newNode ?
	        setIn(nodes, idx, newNode, isEditable) :
	        spliceOut(nodes, idx, isEditable) :
	        spliceIn(nodes, idx, newNode, isEditable);

	      if (isEditable) {
	        this.bitmap = newBitmap;
	        this.nodes = newNodes;
	        return this;
	      }

	      return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
	    };




	    function HashArrayMapNode(ownerID, count, nodes) {
	      this.ownerID = ownerID;
	      this.count = count;
	      this.nodes = nodes;
	    }

	    HashArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var node = this.nodes[idx];
	      return node ? node.get(shift + SHIFT, keyHash, key, notSetValue) : notSetValue;
	    };

	    HashArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var removed = value === NOT_SET;
	      var nodes = this.nodes;
	      var node = nodes[idx];

	      if (removed && !node) {
	        return this;
	      }

	      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
	      if (newNode === node) {
	        return this;
	      }

	      var newCount = this.count;
	      if (!node) {
	        newCount++;
	      } else if (!newNode) {
	        newCount--;
	        if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
	          return packNodes(ownerID, nodes, newCount, idx);
	        }
	      }

	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newNodes = setIn(nodes, idx, newNode, isEditable);

	      if (isEditable) {
	        this.count = newCount;
	        this.nodes = newNodes;
	        return this;
	      }

	      return new HashArrayMapNode(ownerID, newCount, newNodes);
	    };




	    function HashCollisionNode(ownerID, keyHash, entries) {
	      this.ownerID = ownerID;
	      this.keyHash = keyHash;
	      this.entries = entries;
	    }

	    HashCollisionNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      var entries = this.entries;
	      for (var ii = 0, len = entries.length; ii < len; ii++) {
	        if (is(key, entries[ii][0])) {
	          return entries[ii][1];
	        }
	      }
	      return notSetValue;
	    };

	    HashCollisionNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }

	      var removed = value === NOT_SET;

	      if (keyHash !== this.keyHash) {
	        if (removed) {
	          return this;
	        }
	        SetRef(didAlter);
	        SetRef(didChangeSize);
	        return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
	      }

	      var entries = this.entries;
	      var idx = 0;
	      for (var len = entries.length; idx < len; idx++) {
	        if (is(key, entries[idx][0])) {
	          break;
	        }
	      }
	      var exists = idx < len;

	      if (exists ? entries[idx][1] === value : removed) {
	        return this;
	      }

	      SetRef(didAlter);
	      (removed || !exists) && SetRef(didChangeSize);

	      if (removed && len === 2) {
	        return new ValueNode(ownerID, this.keyHash, entries[idx ^ 1]);
	      }

	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newEntries = isEditable ? entries : arrCopy(entries);

	      if (exists) {
	        if (removed) {
	          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
	        } else {
	          newEntries[idx] = [key, value];
	        }
	      } else {
	        newEntries.push([key, value]);
	      }

	      if (isEditable) {
	        this.entries = newEntries;
	        return this;
	      }

	      return new HashCollisionNode(ownerID, this.keyHash, newEntries);
	    };




	    function ValueNode(ownerID, keyHash, entry) {
	      this.ownerID = ownerID;
	      this.keyHash = keyHash;
	      this.entry = entry;
	    }

	    ValueNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
	    };

	    ValueNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      var removed = value === NOT_SET;
	      var keyMatch = is(key, this.entry[0]);
	      if (keyMatch ? value === this.entry[1] : removed) {
	        return this;
	      }

	      SetRef(didAlter);

	      if (removed) {
	        SetRef(didChangeSize);
	        return; // undefined
	      }

	      if (keyMatch) {
	        if (ownerID && ownerID === this.ownerID) {
	          this.entry[1] = value;
	          return this;
	        }
	        return new ValueNode(ownerID, this.keyHash, [key, value]);
	      }

	      SetRef(didChangeSize);
	      return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
	    };



	  // #pragma Iterators

	  ArrayMapNode.prototype.iterate =
	  HashCollisionNode.prototype.iterate = function (fn, reverse) {
	    var entries = this.entries;
	    for (var ii = 0, maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
	      if (fn(entries[reverse ? maxIndex - ii : ii]) === false) {
	        return false;
	      }
	    }
	  }

	  BitmapIndexedNode.prototype.iterate =
	  HashArrayMapNode.prototype.iterate = function (fn, reverse) {
	    var nodes = this.nodes;
	    for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
	      var node = nodes[reverse ? maxIndex - ii : ii];
	      if (node && node.iterate(fn, reverse) === false) {
	        return false;
	      }
	    }
	  }

	  ValueNode.prototype.iterate = function (fn, reverse) {
	    return fn(this.entry);
	  }

	  createClass(MapIterator, Iterator);

	    function MapIterator(map, type, reverse) {
	      this._type = type;
	      this._reverse = reverse;
	      this._stack = map._root && mapIteratorFrame(map._root);
	    }

	    MapIterator.prototype.next = function() {
	      var type = this._type;
	      var stack = this._stack;
	      while (stack) {
	        var node = stack.node;
	        var index = stack.index++;
	        var maxIndex;
	        if (node.entry) {
	          if (index === 0) {
	            return mapIteratorValue(type, node.entry);
	          }
	        } else if (node.entries) {
	          maxIndex = node.entries.length - 1;
	          if (index <= maxIndex) {
	            return mapIteratorValue(type, node.entries[this._reverse ? maxIndex - index : index]);
	          }
	        } else {
	          maxIndex = node.nodes.length - 1;
	          if (index <= maxIndex) {
	            var subNode = node.nodes[this._reverse ? maxIndex - index : index];
	            if (subNode) {
	              if (subNode.entry) {
	                return mapIteratorValue(type, subNode.entry);
	              }
	              stack = this._stack = mapIteratorFrame(subNode, stack);
	            }
	            continue;
	          }
	        }
	        stack = this._stack = this._stack.__prev;
	      }
	      return iteratorDone();
	    };


	  function mapIteratorValue(type, entry) {
	    return iteratorValue(type, entry[0], entry[1]);
	  }

	  function mapIteratorFrame(node, prev) {
	    return {
	      node: node,
	      index: 0,
	      __prev: prev
	    };
	  }

	  function makeMap(size, root, ownerID, hash) {
	    var map = Object.create(MapPrototype);
	    map.size = size;
	    map._root = root;
	    map.__ownerID = ownerID;
	    map.__hash = hash;
	    map.__altered = false;
	    return map;
	  }

	  var EMPTY_MAP;
	  function emptyMap() {
	    return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
	  }

	  function updateMap(map, k, v) {
	    var newRoot;
	    var newSize;
	    if (!map._root) {
	      if (v === NOT_SET) {
	        return map;
	      }
	      newSize = 1;
	      newRoot = new ArrayMapNode(map.__ownerID, [[k, v]]);
	    } else {
	      var didChangeSize = MakeRef(CHANGE_LENGTH);
	      var didAlter = MakeRef(DID_ALTER);
	      newRoot = updateNode(map._root, map.__ownerID, 0, undefined, k, v, didChangeSize, didAlter);
	      if (!didAlter.value) {
	        return map;
	      }
	      newSize = map.size + (didChangeSize.value ? v === NOT_SET ? -1 : 1 : 0);
	    }
	    if (map.__ownerID) {
	      map.size = newSize;
	      map._root = newRoot;
	      map.__hash = undefined;
	      map.__altered = true;
	      return map;
	    }
	    return newRoot ? makeMap(newSize, newRoot) : emptyMap();
	  }

	  function updateNode(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	    if (!node) {
	      if (value === NOT_SET) {
	        return node;
	      }
	      SetRef(didAlter);
	      SetRef(didChangeSize);
	      return new ValueNode(ownerID, keyHash, [key, value]);
	    }
	    return node.update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter);
	  }

	  function isLeafNode(node) {
	    return node.constructor === ValueNode || node.constructor === HashCollisionNode;
	  }

	  function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
	    if (node.keyHash === keyHash) {
	      return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
	    }

	    var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
	    var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;

	    var newNode;
	    var nodes = idx1 === idx2 ?
	      [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)] :
	      ((newNode = new ValueNode(ownerID, keyHash, entry)), idx1 < idx2 ? [node, newNode] : [newNode, node]);

	    return new BitmapIndexedNode(ownerID, (1 << idx1) | (1 << idx2), nodes);
	  }

	  function createNodes(ownerID, entries, key, value) {
	    if (!ownerID) {
	      ownerID = new OwnerID();
	    }
	    var node = new ValueNode(ownerID, hash(key), [key, value]);
	    for (var ii = 0; ii < entries.length; ii++) {
	      var entry = entries[ii];
	      node = node.update(ownerID, 0, undefined, entry[0], entry[1]);
	    }
	    return node;
	  }

	  function packNodes(ownerID, nodes, count, excluding) {
	    var bitmap = 0;
	    var packedII = 0;
	    var packedNodes = new Array(count);
	    for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
	      var node = nodes[ii];
	      if (node !== undefined && ii !== excluding) {
	        bitmap |= bit;
	        packedNodes[packedII++] = node;
	      }
	    }
	    return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
	  }

	  function expandNodes(ownerID, nodes, bitmap, including, node) {
	    var count = 0;
	    var expandedNodes = new Array(SIZE);
	    for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
	      expandedNodes[ii] = bitmap & 1 ? nodes[count++] : undefined;
	    }
	    expandedNodes[including] = node;
	    return new HashArrayMapNode(ownerID, count + 1, expandedNodes);
	  }

	  function mergeIntoMapWith(map, merger, iterables) {
	    var iters = [];
	    for (var ii = 0; ii < iterables.length; ii++) {
	      var value = iterables[ii];
	      var iter = KeyedIterable(value);
	      if (!isIterable(value)) {
	        iter = iter.map(function(v ) {return fromJS(v)});
	      }
	      iters.push(iter);
	    }
	    return mergeIntoCollectionWith(map, merger, iters);
	  }

	  function deepMerger(existing, value, key) {
	    return existing && existing.mergeDeep && isIterable(value) ?
	      existing.mergeDeep(value) :
	      is(existing, value) ? existing : value;
	  }

	  function deepMergerWith(merger) {
	    return function(existing, value, key)  {
	      if (existing && existing.mergeDeepWith && isIterable(value)) {
	        return existing.mergeDeepWith(merger, value);
	      }
	      var nextValue = merger(existing, value, key);
	      return is(existing, nextValue) ? existing : nextValue;
	    };
	  }

	  function mergeIntoCollectionWith(collection, merger, iters) {
	    iters = iters.filter(function(x ) {return x.size !== 0});
	    if (iters.length === 0) {
	      return collection;
	    }
	    if (collection.size === 0 && !collection.__ownerID && iters.length === 1) {
	      return collection.constructor(iters[0]);
	    }
	    return collection.withMutations(function(collection ) {
	      var mergeIntoMap = merger ?
	        function(value, key)  {
	          collection.update(key, NOT_SET, function(existing )
	            {return existing === NOT_SET ? value : merger(existing, value, key)}
	          );
	        } :
	        function(value, key)  {
	          collection.set(key, value);
	        }
	      for (var ii = 0; ii < iters.length; ii++) {
	        iters[ii].forEach(mergeIntoMap);
	      }
	    });
	  }

	  function updateInDeepMap(existing, keyPathIter, notSetValue, updater) {
	    var isNotSet = existing === NOT_SET;
	    var step = keyPathIter.next();
	    if (step.done) {
	      var existingValue = isNotSet ? notSetValue : existing;
	      var newValue = updater(existingValue);
	      return newValue === existingValue ? existing : newValue;
	    }
	    invariant(
	      isNotSet || (existing && existing.set),
	      'invalid keyPath'
	    );
	    var key = step.value;
	    var nextExisting = isNotSet ? NOT_SET : existing.get(key, NOT_SET);
	    var nextUpdated = updateInDeepMap(
	      nextExisting,
	      keyPathIter,
	      notSetValue,
	      updater
	    );
	    return nextUpdated === nextExisting ? existing :
	      nextUpdated === NOT_SET ? existing.remove(key) :
	      (isNotSet ? emptyMap() : existing).set(key, nextUpdated);
	  }

	  function popCount(x) {
	    x = x - ((x >> 1) & 0x55555555);
	    x = (x & 0x33333333) + ((x >> 2) & 0x33333333);
	    x = (x + (x >> 4)) & 0x0f0f0f0f;
	    x = x + (x >> 8);
	    x = x + (x >> 16);
	    return x & 0x7f;
	  }

	  function setIn(array, idx, val, canEdit) {
	    var newArray = canEdit ? array : arrCopy(array);
	    newArray[idx] = val;
	    return newArray;
	  }

	  function spliceIn(array, idx, val, canEdit) {
	    var newLen = array.length + 1;
	    if (canEdit && idx + 1 === newLen) {
	      array[idx] = val;
	      return array;
	    }
	    var newArray = new Array(newLen);
	    var after = 0;
	    for (var ii = 0; ii < newLen; ii++) {
	      if (ii === idx) {
	        newArray[ii] = val;
	        after = -1;
	      } else {
	        newArray[ii] = array[ii + after];
	      }
	    }
	    return newArray;
	  }

	  function spliceOut(array, idx, canEdit) {
	    var newLen = array.length - 1;
	    if (canEdit && idx === newLen) {
	      array.pop();
	      return array;
	    }
	    var newArray = new Array(newLen);
	    var after = 0;
	    for (var ii = 0; ii < newLen; ii++) {
	      if (ii === idx) {
	        after = 1;
	      }
	      newArray[ii] = array[ii + after];
	    }
	    return newArray;
	  }

	  var MAX_ARRAY_MAP_SIZE = SIZE / 4;
	  var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
	  var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;

	  createClass(List, IndexedCollection);

	    // @pragma Construction

	    function List(value) {
	      var empty = emptyList();
	      if (value === null || value === undefined) {
	        return empty;
	      }
	      if (isList(value)) {
	        return value;
	      }
	      var iter = IndexedIterable(value);
	      var size = iter.size;
	      if (size === 0) {
	        return empty;
	      }
	      assertNotInfinite(size);
	      if (size > 0 && size < SIZE) {
	        return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
	      }
	      return empty.withMutations(function(list ) {
	        list.setSize(size);
	        iter.forEach(function(v, i)  {return list.set(i, v)});
	      });
	    }

	    List.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    List.prototype.toString = function() {
	      return this.__toString('List [', ']');
	    };

	    // @pragma Access

	    List.prototype.get = function(index, notSetValue) {
	      index = wrapIndex(this, index);
	      if (index >= 0 && index < this.size) {
	        index += this._origin;
	        var node = listNodeFor(this, index);
	        return node && node.array[index & MASK];
	      }
	      return notSetValue;
	    };

	    // @pragma Modification

	    List.prototype.set = function(index, value) {
	      return updateList(this, index, value);
	    };

	    List.prototype.remove = function(index) {
	      return !this.has(index) ? this :
	        index === 0 ? this.shift() :
	        index === this.size - 1 ? this.pop() :
	        this.splice(index, 1);
	    };

	    List.prototype.insert = function(index, value) {
	      return this.splice(index, 0, value);
	    };

	    List.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = this._origin = this._capacity = 0;
	        this._level = SHIFT;
	        this._root = this._tail = null;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyList();
	    };

	    List.prototype.push = function(/*...values*/) {
	      var values = arguments;
	      var oldSize = this.size;
	      return this.withMutations(function(list ) {
	        setListBounds(list, 0, oldSize + values.length);
	        for (var ii = 0; ii < values.length; ii++) {
	          list.set(oldSize + ii, values[ii]);
	        }
	      });
	    };

	    List.prototype.pop = function() {
	      return setListBounds(this, 0, -1);
	    };

	    List.prototype.unshift = function(/*...values*/) {
	      var values = arguments;
	      return this.withMutations(function(list ) {
	        setListBounds(list, -values.length);
	        for (var ii = 0; ii < values.length; ii++) {
	          list.set(ii, values[ii]);
	        }
	      });
	    };

	    List.prototype.shift = function() {
	      return setListBounds(this, 1);
	    };

	    // @pragma Composition

	    List.prototype.merge = function(/*...iters*/) {
	      return mergeIntoListWith(this, undefined, arguments);
	    };

	    List.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoListWith(this, merger, iters);
	    };

	    List.prototype.mergeDeep = function(/*...iters*/) {
	      return mergeIntoListWith(this, deepMerger, arguments);
	    };

	    List.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoListWith(this, deepMergerWith(merger), iters);
	    };

	    List.prototype.setSize = function(size) {
	      return setListBounds(this, 0, size);
	    };

	    // @pragma Iteration

	    List.prototype.slice = function(begin, end) {
	      var size = this.size;
	      if (wholeSlice(begin, end, size)) {
	        return this;
	      }
	      return setListBounds(
	        this,
	        resolveBegin(begin, size),
	        resolveEnd(end, size)
	      );
	    };

	    List.prototype.__iterator = function(type, reverse) {
	      var index = 0;
	      var values = iterateList(this, reverse);
	      return new Iterator(function()  {
	        var value = values();
	        return value === DONE ?
	          iteratorDone() :
	          iteratorValue(type, index++, value);
	      });
	    };

	    List.prototype.__iterate = function(fn, reverse) {
	      var index = 0;
	      var values = iterateList(this, reverse);
	      var value;
	      while ((value = values()) !== DONE) {
	        if (fn(value, index++, this) === false) {
	          break;
	        }
	      }
	      return index;
	    };

	    List.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        return this;
	      }
	      return makeList(this._origin, this._capacity, this._level, this._root, this._tail, ownerID, this.__hash);
	    };


	  function isList(maybeList) {
	    return !!(maybeList && maybeList[IS_LIST_SENTINEL]);
	  }

	  List.isList = isList;

	  var IS_LIST_SENTINEL = '@@__IMMUTABLE_LIST__@@';

	  var ListPrototype = List.prototype;
	  ListPrototype[IS_LIST_SENTINEL] = true;
	  ListPrototype[DELETE] = ListPrototype.remove;
	  ListPrototype.setIn = MapPrototype.setIn;
	  ListPrototype.deleteIn =
	  ListPrototype.removeIn = MapPrototype.removeIn;
	  ListPrototype.update = MapPrototype.update;
	  ListPrototype.updateIn = MapPrototype.updateIn;
	  ListPrototype.mergeIn = MapPrototype.mergeIn;
	  ListPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
	  ListPrototype.withMutations = MapPrototype.withMutations;
	  ListPrototype.asMutable = MapPrototype.asMutable;
	  ListPrototype.asImmutable = MapPrototype.asImmutable;
	  ListPrototype.wasAltered = MapPrototype.wasAltered;



	    function VNode(array, ownerID) {
	      this.array = array;
	      this.ownerID = ownerID;
	    }

	    // TODO: seems like these methods are very similar

	    VNode.prototype.removeBefore = function(ownerID, level, index) {
	      if (index === level ? 1 << level : 0 || this.array.length === 0) {
	        return this;
	      }
	      var originIndex = (index >>> level) & MASK;
	      if (originIndex >= this.array.length) {
	        return new VNode([], ownerID);
	      }
	      var removingFirst = originIndex === 0;
	      var newChild;
	      if (level > 0) {
	        var oldChild = this.array[originIndex];
	        newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
	        if (newChild === oldChild && removingFirst) {
	          return this;
	        }
	      }
	      if (removingFirst && !newChild) {
	        return this;
	      }
	      var editable = editableVNode(this, ownerID);
	      if (!removingFirst) {
	        for (var ii = 0; ii < originIndex; ii++) {
	          editable.array[ii] = undefined;
	        }
	      }
	      if (newChild) {
	        editable.array[originIndex] = newChild;
	      }
	      return editable;
	    };

	    VNode.prototype.removeAfter = function(ownerID, level, index) {
	      if (index === (level ? 1 << level : 0) || this.array.length === 0) {
	        return this;
	      }
	      var sizeIndex = ((index - 1) >>> level) & MASK;
	      if (sizeIndex >= this.array.length) {
	        return this;
	      }

	      var newChild;
	      if (level > 0) {
	        var oldChild = this.array[sizeIndex];
	        newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
	        if (newChild === oldChild && sizeIndex === this.array.length - 1) {
	          return this;
	        }
	      }

	      var editable = editableVNode(this, ownerID);
	      editable.array.splice(sizeIndex + 1);
	      if (newChild) {
	        editable.array[sizeIndex] = newChild;
	      }
	      return editable;
	    };



	  var DONE = {};

	  function iterateList(list, reverse) {
	    var left = list._origin;
	    var right = list._capacity;
	    var tailPos = getTailOffset(right);
	    var tail = list._tail;

	    return iterateNodeOrLeaf(list._root, list._level, 0);

	    function iterateNodeOrLeaf(node, level, offset) {
	      return level === 0 ?
	        iterateLeaf(node, offset) :
	        iterateNode(node, level, offset);
	    }

	    function iterateLeaf(node, offset) {
	      var array = offset === tailPos ? tail && tail.array : node && node.array;
	      var from = offset > left ? 0 : left - offset;
	      var to = right - offset;
	      if (to > SIZE) {
	        to = SIZE;
	      }
	      return function()  {
	        if (from === to) {
	          return DONE;
	        }
	        var idx = reverse ? --to : from++;
	        return array && array[idx];
	      };
	    }

	    function iterateNode(node, level, offset) {
	      var values;
	      var array = node && node.array;
	      var from = offset > left ? 0 : (left - offset) >> level;
	      var to = ((right - offset) >> level) + 1;
	      if (to > SIZE) {
	        to = SIZE;
	      }
	      return function()  {
	        do {
	          if (values) {
	            var value = values();
	            if (value !== DONE) {
	              return value;
	            }
	            values = null;
	          }
	          if (from === to) {
	            return DONE;
	          }
	          var idx = reverse ? --to : from++;
	          values = iterateNodeOrLeaf(
	            array && array[idx], level - SHIFT, offset + (idx << level)
	          );
	        } while (true);
	      };
	    }
	  }

	  function makeList(origin, capacity, level, root, tail, ownerID, hash) {
	    var list = Object.create(ListPrototype);
	    list.size = capacity - origin;
	    list._origin = origin;
	    list._capacity = capacity;
	    list._level = level;
	    list._root = root;
	    list._tail = tail;
	    list.__ownerID = ownerID;
	    list.__hash = hash;
	    list.__altered = false;
	    return list;
	  }

	  var EMPTY_LIST;
	  function emptyList() {
	    return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
	  }

	  function updateList(list, index, value) {
	    index = wrapIndex(list, index);

	    if (index !== index) {
	      return list;
	    }

	    if (index >= list.size || index < 0) {
	      return list.withMutations(function(list ) {
	        index < 0 ?
	          setListBounds(list, index).set(0, value) :
	          setListBounds(list, 0, index + 1).set(index, value)
	      });
	    }

	    index += list._origin;

	    var newTail = list._tail;
	    var newRoot = list._root;
	    var didAlter = MakeRef(DID_ALTER);
	    if (index >= getTailOffset(list._capacity)) {
	      newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
	    } else {
	      newRoot = updateVNode(newRoot, list.__ownerID, list._level, index, value, didAlter);
	    }

	    if (!didAlter.value) {
	      return list;
	    }

	    if (list.__ownerID) {
	      list._root = newRoot;
	      list._tail = newTail;
	      list.__hash = undefined;
	      list.__altered = true;
	      return list;
	    }
	    return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
	  }

	  function updateVNode(node, ownerID, level, index, value, didAlter) {
	    var idx = (index >>> level) & MASK;
	    var nodeHas = node && idx < node.array.length;
	    if (!nodeHas && value === undefined) {
	      return node;
	    }

	    var newNode;

	    if (level > 0) {
	      var lowerNode = node && node.array[idx];
	      var newLowerNode = updateVNode(lowerNode, ownerID, level - SHIFT, index, value, didAlter);
	      if (newLowerNode === lowerNode) {
	        return node;
	      }
	      newNode = editableVNode(node, ownerID);
	      newNode.array[idx] = newLowerNode;
	      return newNode;
	    }

	    if (nodeHas && node.array[idx] === value) {
	      return node;
	    }

	    SetRef(didAlter);

	    newNode = editableVNode(node, ownerID);
	    if (value === undefined && idx === newNode.array.length - 1) {
	      newNode.array.pop();
	    } else {
	      newNode.array[idx] = value;
	    }
	    return newNode;
	  }

	  function editableVNode(node, ownerID) {
	    if (ownerID && node && ownerID === node.ownerID) {
	      return node;
	    }
	    return new VNode(node ? node.array.slice() : [], ownerID);
	  }

	  function listNodeFor(list, rawIndex) {
	    if (rawIndex >= getTailOffset(list._capacity)) {
	      return list._tail;
	    }
	    if (rawIndex < 1 << (list._level + SHIFT)) {
	      var node = list._root;
	      var level = list._level;
	      while (node && level > 0) {
	        node = node.array[(rawIndex >>> level) & MASK];
	        level -= SHIFT;
	      }
	      return node;
	    }
	  }

	  function setListBounds(list, begin, end) {
	    // Sanitize begin & end using this shorthand for ToInt32(argument)
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
	    if (begin !== undefined) {
	      begin = begin | 0;
	    }
	    if (end !== undefined) {
	      end = end | 0;
	    }
	    var owner = list.__ownerID || new OwnerID();
	    var oldOrigin = list._origin;
	    var oldCapacity = list._capacity;
	    var newOrigin = oldOrigin + begin;
	    var newCapacity = end === undefined ? oldCapacity : end < 0 ? oldCapacity + end : oldOrigin + end;
	    if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
	      return list;
	    }

	    // If it's going to end after it starts, it's empty.
	    if (newOrigin >= newCapacity) {
	      return list.clear();
	    }

	    var newLevel = list._level;
	    var newRoot = list._root;

	    // New origin might need creating a higher root.
	    var offsetShift = 0;
	    while (newOrigin + offsetShift < 0) {
	      newRoot = new VNode(newRoot && newRoot.array.length ? [undefined, newRoot] : [], owner);
	      newLevel += SHIFT;
	      offsetShift += 1 << newLevel;
	    }
	    if (offsetShift) {
	      newOrigin += offsetShift;
	      oldOrigin += offsetShift;
	      newCapacity += offsetShift;
	      oldCapacity += offsetShift;
	    }

	    var oldTailOffset = getTailOffset(oldCapacity);
	    var newTailOffset = getTailOffset(newCapacity);

	    // New size might need creating a higher root.
	    while (newTailOffset >= 1 << (newLevel + SHIFT)) {
	      newRoot = new VNode(newRoot && newRoot.array.length ? [newRoot] : [], owner);
	      newLevel += SHIFT;
	    }

	    // Locate or create the new tail.
	    var oldTail = list._tail;
	    var newTail = newTailOffset < oldTailOffset ?
	      listNodeFor(list, newCapacity - 1) :
	      newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail;

	    // Merge Tail into tree.
	    if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
	      newRoot = editableVNode(newRoot, owner);
	      var node = newRoot;
	      for (var level = newLevel; level > SHIFT; level -= SHIFT) {
	        var idx = (oldTailOffset >>> level) & MASK;
	        node = node.array[idx] = editableVNode(node.array[idx], owner);
	      }
	      node.array[(oldTailOffset >>> SHIFT) & MASK] = oldTail;
	    }

	    // If the size has been reduced, there's a chance the tail needs to be trimmed.
	    if (newCapacity < oldCapacity) {
	      newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
	    }

	    // If the new origin is within the tail, then we do not need a root.
	    if (newOrigin >= newTailOffset) {
	      newOrigin -= newTailOffset;
	      newCapacity -= newTailOffset;
	      newLevel = SHIFT;
	      newRoot = null;
	      newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);

	    // Otherwise, if the root has been trimmed, garbage collect.
	    } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
	      offsetShift = 0;

	      // Identify the new top root node of the subtree of the old root.
	      while (newRoot) {
	        var beginIndex = (newOrigin >>> newLevel) & MASK;
	        if (beginIndex !== (newTailOffset >>> newLevel) & MASK) {
	          break;
	        }
	        if (beginIndex) {
	          offsetShift += (1 << newLevel) * beginIndex;
	        }
	        newLevel -= SHIFT;
	        newRoot = newRoot.array[beginIndex];
	      }

	      // Trim the new sides of the new root.
	      if (newRoot && newOrigin > oldOrigin) {
	        newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
	      }
	      if (newRoot && newTailOffset < oldTailOffset) {
	        newRoot = newRoot.removeAfter(owner, newLevel, newTailOffset - offsetShift);
	      }
	      if (offsetShift) {
	        newOrigin -= offsetShift;
	        newCapacity -= offsetShift;
	      }
	    }

	    if (list.__ownerID) {
	      list.size = newCapacity - newOrigin;
	      list._origin = newOrigin;
	      list._capacity = newCapacity;
	      list._level = newLevel;
	      list._root = newRoot;
	      list._tail = newTail;
	      list.__hash = undefined;
	      list.__altered = true;
	      return list;
	    }
	    return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
	  }

	  function mergeIntoListWith(list, merger, iterables) {
	    var iters = [];
	    var maxSize = 0;
	    for (var ii = 0; ii < iterables.length; ii++) {
	      var value = iterables[ii];
	      var iter = IndexedIterable(value);
	      if (iter.size > maxSize) {
	        maxSize = iter.size;
	      }
	      if (!isIterable(value)) {
	        iter = iter.map(function(v ) {return fromJS(v)});
	      }
	      iters.push(iter);
	    }
	    if (maxSize > list.size) {
	      list = list.setSize(maxSize);
	    }
	    return mergeIntoCollectionWith(list, merger, iters);
	  }

	  function getTailOffset(size) {
	    return size < SIZE ? 0 : (((size - 1) >>> SHIFT) << SHIFT);
	  }

	  createClass(OrderedMap, Map);

	    // @pragma Construction

	    function OrderedMap(value) {
	      return value === null || value === undefined ? emptyOrderedMap() :
	        isOrderedMap(value) ? value :
	        emptyOrderedMap().withMutations(function(map ) {
	          var iter = KeyedIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v, k)  {return map.set(k, v)});
	        });
	    }

	    OrderedMap.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    OrderedMap.prototype.toString = function() {
	      return this.__toString('OrderedMap {', '}');
	    };

	    // @pragma Access

	    OrderedMap.prototype.get = function(k, notSetValue) {
	      var index = this._map.get(k);
	      return index !== undefined ? this._list.get(index)[1] : notSetValue;
	    };

	    // @pragma Modification

	    OrderedMap.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._map.clear();
	        this._list.clear();
	        return this;
	      }
	      return emptyOrderedMap();
	    };

	    OrderedMap.prototype.set = function(k, v) {
	      return updateOrderedMap(this, k, v);
	    };

	    OrderedMap.prototype.remove = function(k) {
	      return updateOrderedMap(this, k, NOT_SET);
	    };

	    OrderedMap.prototype.wasAltered = function() {
	      return this._map.wasAltered() || this._list.wasAltered();
	    };

	    OrderedMap.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._list.__iterate(
	        function(entry ) {return entry && fn(entry[1], entry[0], this$0)},
	        reverse
	      );
	    };

	    OrderedMap.prototype.__iterator = function(type, reverse) {
	      return this._list.fromEntrySeq().__iterator(type, reverse);
	    };

	    OrderedMap.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map.__ensureOwner(ownerID);
	      var newList = this._list.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        this._list = newList;
	        return this;
	      }
	      return makeOrderedMap(newMap, newList, ownerID, this.__hash);
	    };


	  function isOrderedMap(maybeOrderedMap) {
	    return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
	  }

	  OrderedMap.isOrderedMap = isOrderedMap;

	  OrderedMap.prototype[IS_ORDERED_SENTINEL] = true;
	  OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;



	  function makeOrderedMap(map, list, ownerID, hash) {
	    var omap = Object.create(OrderedMap.prototype);
	    omap.size = map ? map.size : 0;
	    omap._map = map;
	    omap._list = list;
	    omap.__ownerID = ownerID;
	    omap.__hash = hash;
	    return omap;
	  }

	  var EMPTY_ORDERED_MAP;
	  function emptyOrderedMap() {
	    return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()));
	  }

	  function updateOrderedMap(omap, k, v) {
	    var map = omap._map;
	    var list = omap._list;
	    var i = map.get(k);
	    var has = i !== undefined;
	    var newMap;
	    var newList;
	    if (v === NOT_SET) { // removed
	      if (!has) {
	        return omap;
	      }
	      if (list.size >= SIZE && list.size >= map.size * 2) {
	        newList = list.filter(function(entry, idx)  {return entry !== undefined && i !== idx});
	        newMap = newList.toKeyedSeq().map(function(entry ) {return entry[0]}).flip().toMap();
	        if (omap.__ownerID) {
	          newMap.__ownerID = newList.__ownerID = omap.__ownerID;
	        }
	      } else {
	        newMap = map.remove(k);
	        newList = i === list.size - 1 ? list.pop() : list.set(i, undefined);
	      }
	    } else {
	      if (has) {
	        if (v === list.get(i)[1]) {
	          return omap;
	        }
	        newMap = map;
	        newList = list.set(i, [k, v]);
	      } else {
	        newMap = map.set(k, list.size);
	        newList = list.set(list.size, [k, v]);
	      }
	    }
	    if (omap.__ownerID) {
	      omap.size = newMap.size;
	      omap._map = newMap;
	      omap._list = newList;
	      omap.__hash = undefined;
	      return omap;
	    }
	    return makeOrderedMap(newMap, newList);
	  }

	  createClass(ToKeyedSequence, KeyedSeq);
	    function ToKeyedSequence(indexed, useKeys) {
	      this._iter = indexed;
	      this._useKeys = useKeys;
	      this.size = indexed.size;
	    }

	    ToKeyedSequence.prototype.get = function(key, notSetValue) {
	      return this._iter.get(key, notSetValue);
	    };

	    ToKeyedSequence.prototype.has = function(key) {
	      return this._iter.has(key);
	    };

	    ToKeyedSequence.prototype.valueSeq = function() {
	      return this._iter.valueSeq();
	    };

	    ToKeyedSequence.prototype.reverse = function() {var this$0 = this;
	      var reversedSequence = reverseFactory(this, true);
	      if (!this._useKeys) {
	        reversedSequence.valueSeq = function()  {return this$0._iter.toSeq().reverse()};
	      }
	      return reversedSequence;
	    };

	    ToKeyedSequence.prototype.map = function(mapper, context) {var this$0 = this;
	      var mappedSequence = mapFactory(this, mapper, context);
	      if (!this._useKeys) {
	        mappedSequence.valueSeq = function()  {return this$0._iter.toSeq().map(mapper, context)};
	      }
	      return mappedSequence;
	    };

	    ToKeyedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var ii;
	      return this._iter.__iterate(
	        this._useKeys ?
	          function(v, k)  {return fn(v, k, this$0)} :
	          ((ii = reverse ? resolveSize(this) : 0),
	            function(v ) {return fn(v, reverse ? --ii : ii++, this$0)}),
	        reverse
	      );
	    };

	    ToKeyedSequence.prototype.__iterator = function(type, reverse) {
	      if (this._useKeys) {
	        return this._iter.__iterator(type, reverse);
	      }
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      var ii = reverse ? resolveSize(this) : 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, reverse ? --ii : ii++, step.value, step);
	      });
	    };

	  ToKeyedSequence.prototype[IS_ORDERED_SENTINEL] = true;


	  createClass(ToIndexedSequence, IndexedSeq);
	    function ToIndexedSequence(iter) {
	      this._iter = iter;
	      this.size = iter.size;
	    }

	    ToIndexedSequence.prototype.includes = function(value) {
	      return this._iter.includes(value);
	    };

	    ToIndexedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      return this._iter.__iterate(function(v ) {return fn(v, iterations++, this$0)}, reverse);
	    };

	    ToIndexedSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, iterations++, step.value, step)
	      });
	    };



	  createClass(ToSetSequence, SetSeq);
	    function ToSetSequence(iter) {
	      this._iter = iter;
	      this.size = iter.size;
	    }

	    ToSetSequence.prototype.has = function(key) {
	      return this._iter.includes(key);
	    };

	    ToSetSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._iter.__iterate(function(v ) {return fn(v, v, this$0)}, reverse);
	    };

	    ToSetSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, step.value, step.value, step);
	      });
	    };



	  createClass(FromEntriesSequence, KeyedSeq);
	    function FromEntriesSequence(entries) {
	      this._iter = entries;
	      this.size = entries.size;
	    }

	    FromEntriesSequence.prototype.entrySeq = function() {
	      return this._iter.toSeq();
	    };

	    FromEntriesSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._iter.__iterate(function(entry ) {
	        // Check if entry exists first so array access doesn't throw for holes
	        // in the parent iteration.
	        if (entry) {
	          validateEntry(entry);
	          var indexedIterable = isIterable(entry);
	          return fn(
	            indexedIterable ? entry.get(1) : entry[1],
	            indexedIterable ? entry.get(0) : entry[0],
	            this$0
	          );
	        }
	      }, reverse);
	    };

	    FromEntriesSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      return new Iterator(function()  {
	        while (true) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          var entry = step.value;
	          // Check if entry exists first so array access doesn't throw for holes
	          // in the parent iteration.
	          if (entry) {
	            validateEntry(entry);
	            var indexedIterable = isIterable(entry);
	            return iteratorValue(
	              type,
	              indexedIterable ? entry.get(0) : entry[0],
	              indexedIterable ? entry.get(1) : entry[1],
	              step
	            );
	          }
	        }
	      });
	    };


	  ToIndexedSequence.prototype.cacheResult =
	  ToKeyedSequence.prototype.cacheResult =
	  ToSetSequence.prototype.cacheResult =
	  FromEntriesSequence.prototype.cacheResult =
	    cacheResultThrough;


	  function flipFactory(iterable) {
	    var flipSequence = makeSequence(iterable);
	    flipSequence._iter = iterable;
	    flipSequence.size = iterable.size;
	    flipSequence.flip = function()  {return iterable};
	    flipSequence.reverse = function () {
	      var reversedSequence = iterable.reverse.apply(this); // super.reverse()
	      reversedSequence.flip = function()  {return iterable.reverse()};
	      return reversedSequence;
	    };
	    flipSequence.has = function(key ) {return iterable.includes(key)};
	    flipSequence.includes = function(key ) {return iterable.has(key)};
	    flipSequence.cacheResult = cacheResultThrough;
	    flipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(function(v, k)  {return fn(k, v, this$0) !== false}, reverse);
	    }
	    flipSequence.__iteratorUncached = function(type, reverse) {
	      if (type === ITERATE_ENTRIES) {
	        var iterator = iterable.__iterator(type, reverse);
	        return new Iterator(function()  {
	          var step = iterator.next();
	          if (!step.done) {
	            var k = step.value[0];
	            step.value[0] = step.value[1];
	            step.value[1] = k;
	          }
	          return step;
	        });
	      }
	      return iterable.__iterator(
	        type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES,
	        reverse
	      );
	    }
	    return flipSequence;
	  }


	  function mapFactory(iterable, mapper, context) {
	    var mappedSequence = makeSequence(iterable);
	    mappedSequence.size = iterable.size;
	    mappedSequence.has = function(key ) {return iterable.has(key)};
	    mappedSequence.get = function(key, notSetValue)  {
	      var v = iterable.get(key, NOT_SET);
	      return v === NOT_SET ?
	        notSetValue :
	        mapper.call(context, v, key, iterable);
	    };
	    mappedSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(
	        function(v, k, c)  {return fn(mapper.call(context, v, k, c), k, this$0) !== false},
	        reverse
	      );
	    }
	    mappedSequence.__iteratorUncached = function (type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      return new Iterator(function()  {
	        var step = iterator.next();
	        if (step.done) {
	          return step;
	        }
	        var entry = step.value;
	        var key = entry[0];
	        return iteratorValue(
	          type,
	          key,
	          mapper.call(context, entry[1], key, iterable),
	          step
	        );
	      });
	    }
	    return mappedSequence;
	  }


	  function reverseFactory(iterable, useKeys) {
	    var reversedSequence = makeSequence(iterable);
	    reversedSequence._iter = iterable;
	    reversedSequence.size = iterable.size;
	    reversedSequence.reverse = function()  {return iterable};
	    if (iterable.flip) {
	      reversedSequence.flip = function () {
	        var flipSequence = flipFactory(iterable);
	        flipSequence.reverse = function()  {return iterable.flip()};
	        return flipSequence;
	      };
	    }
	    reversedSequence.get = function(key, notSetValue) 
	      {return iterable.get(useKeys ? key : -1 - key, notSetValue)};
	    reversedSequence.has = function(key )
	      {return iterable.has(useKeys ? key : -1 - key)};
	    reversedSequence.includes = function(value ) {return iterable.includes(value)};
	    reversedSequence.cacheResult = cacheResultThrough;
	    reversedSequence.__iterate = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(function(v, k)  {return fn(v, k, this$0)}, !reverse);
	    };
	    reversedSequence.__iterator =
	      function(type, reverse)  {return iterable.__iterator(type, !reverse)};
	    return reversedSequence;
	  }


	  function filterFactory(iterable, predicate, context, useKeys) {
	    var filterSequence = makeSequence(iterable);
	    if (useKeys) {
	      filterSequence.has = function(key ) {
	        var v = iterable.get(key, NOT_SET);
	        return v !== NOT_SET && !!predicate.call(context, v, key, iterable);
	      };
	      filterSequence.get = function(key, notSetValue)  {
	        var v = iterable.get(key, NOT_SET);
	        return v !== NOT_SET && predicate.call(context, v, key, iterable) ?
	          v : notSetValue;
	      };
	    }
	    filterSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c)  {
	        if (predicate.call(context, v, k, c)) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0);
	        }
	      }, reverse);
	      return iterations;
	    };
	    filterSequence.__iteratorUncached = function (type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (true) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          var entry = step.value;
	          var key = entry[0];
	          var value = entry[1];
	          if (predicate.call(context, value, key, iterable)) {
	            return iteratorValue(type, useKeys ? key : iterations++, value, step);
	          }
	        }
	      });
	    }
	    return filterSequence;
	  }


	  function countByFactory(iterable, grouper, context) {
	    var groups = Map().asMutable();
	    iterable.__iterate(function(v, k)  {
	      groups.update(
	        grouper.call(context, v, k, iterable),
	        0,
	        function(a ) {return a + 1}
	      );
	    });
	    return groups.asImmutable();
	  }


	  function groupByFactory(iterable, grouper, context) {
	    var isKeyedIter = isKeyed(iterable);
	    var groups = (isOrdered(iterable) ? OrderedMap() : Map()).asMutable();
	    iterable.__iterate(function(v, k)  {
	      groups.update(
	        grouper.call(context, v, k, iterable),
	        function(a ) {return (a = a || [], a.push(isKeyedIter ? [k, v] : v), a)}
	      );
	    });
	    var coerce = iterableClass(iterable);
	    return groups.map(function(arr ) {return reify(iterable, coerce(arr))});
	  }


	  function sliceFactory(iterable, begin, end, useKeys) {
	    var originalSize = iterable.size;

	    // Sanitize begin & end using this shorthand for ToInt32(argument)
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
	    if (begin !== undefined) {
	      begin = begin | 0;
	    }
	    if (end !== undefined) {
	      if (end === Infinity) {
	        end = originalSize;
	      } else {
	        end = end | 0;
	      }
	    }

	    if (wholeSlice(begin, end, originalSize)) {
	      return iterable;
	    }

	    var resolvedBegin = resolveBegin(begin, originalSize);
	    var resolvedEnd = resolveEnd(end, originalSize);

	    // begin or end will be NaN if they were provided as negative numbers and
	    // this iterable's size is unknown. In that case, cache first so there is
	    // a known size and these do not resolve to NaN.
	    if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
	      return sliceFactory(iterable.toSeq().cacheResult(), begin, end, useKeys);
	    }

	    // Note: resolvedEnd is undefined when the original sequence's length is
	    // unknown and this slice did not supply an end and should contain all
	    // elements after resolvedBegin.
	    // In that case, resolvedSize will be NaN and sliceSize will remain undefined.
	    var resolvedSize = resolvedEnd - resolvedBegin;
	    var sliceSize;
	    if (resolvedSize === resolvedSize) {
	      sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
	    }

	    var sliceSeq = makeSequence(iterable);

	    // If iterable.size is undefined, the size of the realized sliceSeq is
	    // unknown at this point unless the number of items to slice is 0
	    sliceSeq.size = sliceSize === 0 ? sliceSize : iterable.size && sliceSize || undefined;

	    if (!useKeys && isSeq(iterable) && sliceSize >= 0) {
	      sliceSeq.get = function (index, notSetValue) {
	        index = wrapIndex(this, index);
	        return index >= 0 && index < sliceSize ?
	          iterable.get(index + resolvedBegin, notSetValue) :
	          notSetValue;
	      }
	    }

	    sliceSeq.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      if (sliceSize === 0) {
	        return 0;
	      }
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var skipped = 0;
	      var isSkipping = true;
	      var iterations = 0;
	      iterable.__iterate(function(v, k)  {
	        if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0) !== false &&
	                 iterations !== sliceSize;
	        }
	      });
	      return iterations;
	    };

	    sliceSeq.__iteratorUncached = function(type, reverse) {
	      if (sliceSize !== 0 && reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      // Don't bother instantiating parent iterator if taking 0.
	      var iterator = sliceSize !== 0 && iterable.__iterator(type, reverse);
	      var skipped = 0;
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (skipped++ < resolvedBegin) {
	          iterator.next();
	        }
	        if (++iterations > sliceSize) {
	          return iteratorDone();
	        }
	        var step = iterator.next();
	        if (useKeys || type === ITERATE_VALUES) {
	          return step;
	        } else if (type === ITERATE_KEYS) {
	          return iteratorValue(type, iterations - 1, undefined, step);
	        } else {
	          return iteratorValue(type, iterations - 1, step.value[1], step);
	        }
	      });
	    }

	    return sliceSeq;
	  }


	  function takeWhileFactory(iterable, predicate, context) {
	    var takeSequence = makeSequence(iterable);
	    takeSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c) 
	        {return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$0)}
	      );
	      return iterations;
	    };
	    takeSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var iterating = true;
	      return new Iterator(function()  {
	        if (!iterating) {
	          return iteratorDone();
	        }
	        var step = iterator.next();
	        if (step.done) {
	          return step;
	        }
	        var entry = step.value;
	        var k = entry[0];
	        var v = entry[1];
	        if (!predicate.call(context, v, k, this$0)) {
	          iterating = false;
	          return iteratorDone();
	        }
	        return type === ITERATE_ENTRIES ? step :
	          iteratorValue(type, k, v, step);
	      });
	    };
	    return takeSequence;
	  }


	  function skipWhileFactory(iterable, predicate, context, useKeys) {
	    var skipSequence = makeSequence(iterable);
	    skipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var isSkipping = true;
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c)  {
	        if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0);
	        }
	      });
	      return iterations;
	    };
	    skipSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var skipping = true;
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step, k, v;
	        do {
	          step = iterator.next();
	          if (step.done) {
	            if (useKeys || type === ITERATE_VALUES) {
	              return step;
	            } else if (type === ITERATE_KEYS) {
	              return iteratorValue(type, iterations++, undefined, step);
	            } else {
	              return iteratorValue(type, iterations++, step.value[1], step);
	            }
	          }
	          var entry = step.value;
	          k = entry[0];
	          v = entry[1];
	          skipping && (skipping = predicate.call(context, v, k, this$0));
	        } while (skipping);
	        return type === ITERATE_ENTRIES ? step :
	          iteratorValue(type, k, v, step);
	      });
	    };
	    return skipSequence;
	  }


	  function concatFactory(iterable, values) {
	    var isKeyedIterable = isKeyed(iterable);
	    var iters = [iterable].concat(values).map(function(v ) {
	      if (!isIterable(v)) {
	        v = isKeyedIterable ?
	          keyedSeqFromValue(v) :
	          indexedSeqFromValue(Array.isArray(v) ? v : [v]);
	      } else if (isKeyedIterable) {
	        v = KeyedIterable(v);
	      }
	      return v;
	    }).filter(function(v ) {return v.size !== 0});

	    if (iters.length === 0) {
	      return iterable;
	    }

	    if (iters.length === 1) {
	      var singleton = iters[0];
	      if (singleton === iterable ||
	          isKeyedIterable && isKeyed(singleton) ||
	          isIndexed(iterable) && isIndexed(singleton)) {
	        return singleton;
	      }
	    }

	    var concatSeq = new ArraySeq(iters);
	    if (isKeyedIterable) {
	      concatSeq = concatSeq.toKeyedSeq();
	    } else if (!isIndexed(iterable)) {
	      concatSeq = concatSeq.toSetSeq();
	    }
	    concatSeq = concatSeq.flatten(true);
	    concatSeq.size = iters.reduce(
	      function(sum, seq)  {
	        if (sum !== undefined) {
	          var size = seq.size;
	          if (size !== undefined) {
	            return sum + size;
	          }
	        }
	      },
	      0
	    );
	    return concatSeq;
	  }


	  function flattenFactory(iterable, depth, useKeys) {
	    var flatSequence = makeSequence(iterable);
	    flatSequence.__iterateUncached = function(fn, reverse) {
	      var iterations = 0;
	      var stopped = false;
	      function flatDeep(iter, currentDepth) {var this$0 = this;
	        iter.__iterate(function(v, k)  {
	          if ((!depth || currentDepth < depth) && isIterable(v)) {
	            flatDeep(v, currentDepth + 1);
	          } else if (fn(v, useKeys ? k : iterations++, this$0) === false) {
	            stopped = true;
	          }
	          return !stopped;
	        }, reverse);
	      }
	      flatDeep(iterable, 0);
	      return iterations;
	    }
	    flatSequence.__iteratorUncached = function(type, reverse) {
	      var iterator = iterable.__iterator(type, reverse);
	      var stack = [];
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (iterator) {
	          var step = iterator.next();
	          if (step.done !== false) {
	            iterator = stack.pop();
	            continue;
	          }
	          var v = step.value;
	          if (type === ITERATE_ENTRIES) {
	            v = v[1];
	          }
	          if ((!depth || stack.length < depth) && isIterable(v)) {
	            stack.push(iterator);
	            iterator = v.__iterator(type, reverse);
	          } else {
	            return useKeys ? step : iteratorValue(type, iterations++, v, step);
	          }
	        }
	        return iteratorDone();
	      });
	    }
	    return flatSequence;
	  }


	  function flatMapFactory(iterable, mapper, context) {
	    var coerce = iterableClass(iterable);
	    return iterable.toSeq().map(
	      function(v, k)  {return coerce(mapper.call(context, v, k, iterable))}
	    ).flatten(true);
	  }


	  function interposeFactory(iterable, separator) {
	    var interposedSequence = makeSequence(iterable);
	    interposedSequence.size = iterable.size && iterable.size * 2 -1;
	    interposedSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      iterable.__iterate(function(v, k) 
	        {return (!iterations || fn(separator, iterations++, this$0) !== false) &&
	        fn(v, iterations++, this$0) !== false},
	        reverse
	      );
	      return iterations;
	    };
	    interposedSequence.__iteratorUncached = function(type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_VALUES, reverse);
	      var iterations = 0;
	      var step;
	      return new Iterator(function()  {
	        if (!step || iterations % 2) {
	          step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	        }
	        return iterations % 2 ?
	          iteratorValue(type, iterations++, separator) :
	          iteratorValue(type, iterations++, step.value, step);
	      });
	    };
	    return interposedSequence;
	  }


	  function sortFactory(iterable, comparator, mapper) {
	    if (!comparator) {
	      comparator = defaultComparator;
	    }
	    var isKeyedIterable = isKeyed(iterable);
	    var index = 0;
	    var entries = iterable.toSeq().map(
	      function(v, k)  {return [k, v, index++, mapper ? mapper(v, k, iterable) : v]}
	    ).toArray();
	    entries.sort(function(a, b)  {return comparator(a[3], b[3]) || a[2] - b[2]}).forEach(
	      isKeyedIterable ?
	      function(v, i)  { entries[i].length = 2; } :
	      function(v, i)  { entries[i] = v[1]; }
	    );
	    return isKeyedIterable ? KeyedSeq(entries) :
	      isIndexed(iterable) ? IndexedSeq(entries) :
	      SetSeq(entries);
	  }


	  function maxFactory(iterable, comparator, mapper) {
	    if (!comparator) {
	      comparator = defaultComparator;
	    }
	    if (mapper) {
	      var entry = iterable.toSeq()
	        .map(function(v, k)  {return [v, mapper(v, k, iterable)]})
	        .reduce(function(a, b)  {return maxCompare(comparator, a[1], b[1]) ? b : a});
	      return entry && entry[0];
	    } else {
	      return iterable.reduce(function(a, b)  {return maxCompare(comparator, a, b) ? b : a});
	    }
	  }

	  function maxCompare(comparator, a, b) {
	    var comp = comparator(b, a);
	    // b is considered the new max if the comparator declares them equal, but
	    // they are not equal and b is in fact a nullish value.
	    return (comp === 0 && b !== a && (b === undefined || b === null || b !== b)) || comp > 0;
	  }


	  function zipWithFactory(keyIter, zipper, iters) {
	    var zipSequence = makeSequence(keyIter);
	    zipSequence.size = new ArraySeq(iters).map(function(i ) {return i.size}).min();
	    // Note: this a generic base implementation of __iterate in terms of
	    // __iterator which may be more generically useful in the future.
	    zipSequence.__iterate = function(fn, reverse) {
	      /* generic:
	      var iterator = this.__iterator(ITERATE_ENTRIES, reverse);
	      var step;
	      var iterations = 0;
	      while (!(step = iterator.next()).done) {
	        iterations++;
	        if (fn(step.value[1], step.value[0], this) === false) {
	          break;
	        }
	      }
	      return iterations;
	      */
	      // indexed:
	      var iterator = this.__iterator(ITERATE_VALUES, reverse);
	      var step;
	      var iterations = 0;
	      while (!(step = iterator.next()).done) {
	        if (fn(step.value, iterations++, this) === false) {
	          break;
	        }
	      }
	      return iterations;
	    };
	    zipSequence.__iteratorUncached = function(type, reverse) {
	      var iterators = iters.map(function(i )
	        {return (i = Iterable(i), getIterator(reverse ? i.reverse() : i))}
	      );
	      var iterations = 0;
	      var isDone = false;
	      return new Iterator(function()  {
	        var steps;
	        if (!isDone) {
	          steps = iterators.map(function(i ) {return i.next()});
	          isDone = steps.some(function(s ) {return s.done});
	        }
	        if (isDone) {
	          return iteratorDone();
	        }
	        return iteratorValue(
	          type,
	          iterations++,
	          zipper.apply(null, steps.map(function(s ) {return s.value}))
	        );
	      });
	    };
	    return zipSequence
	  }


	  // #pragma Helper Functions

	  function reify(iter, seq) {
	    return isSeq(iter) ? seq : iter.constructor(seq);
	  }

	  function validateEntry(entry) {
	    if (entry !== Object(entry)) {
	      throw new TypeError('Expected [K, V] tuple: ' + entry);
	    }
	  }

	  function resolveSize(iter) {
	    assertNotInfinite(iter.size);
	    return ensureSize(iter);
	  }

	  function iterableClass(iterable) {
	    return isKeyed(iterable) ? KeyedIterable :
	      isIndexed(iterable) ? IndexedIterable :
	      SetIterable;
	  }

	  function makeSequence(iterable) {
	    return Object.create(
	      (
	        isKeyed(iterable) ? KeyedSeq :
	        isIndexed(iterable) ? IndexedSeq :
	        SetSeq
	      ).prototype
	    );
	  }

	  function cacheResultThrough() {
	    if (this._iter.cacheResult) {
	      this._iter.cacheResult();
	      this.size = this._iter.size;
	      return this;
	    } else {
	      return Seq.prototype.cacheResult.call(this);
	    }
	  }

	  function defaultComparator(a, b) {
	    return a > b ? 1 : a < b ? -1 : 0;
	  }

	  function forceIterator(keyPath) {
	    var iter = getIterator(keyPath);
	    if (!iter) {
	      // Array might not be iterable in this environment, so we need a fallback
	      // to our wrapped type.
	      if (!isArrayLike(keyPath)) {
	        throw new TypeError('Expected iterable or array-like: ' + keyPath);
	      }
	      iter = getIterator(Iterable(keyPath));
	    }
	    return iter;
	  }

	  createClass(Record, KeyedCollection);

	    function Record(defaultValues, name) {
	      var hasInitialized;

	      var RecordType = function Record(values) {
	        if (values instanceof RecordType) {
	          return values;
	        }
	        if (!(this instanceof RecordType)) {
	          return new RecordType(values);
	        }
	        if (!hasInitialized) {
	          hasInitialized = true;
	          var keys = Object.keys(defaultValues);
	          setProps(RecordTypePrototype, keys);
	          RecordTypePrototype.size = keys.length;
	          RecordTypePrototype._name = name;
	          RecordTypePrototype._keys = keys;
	          RecordTypePrototype._defaultValues = defaultValues;
	        }
	        this._map = Map(values);
	      };

	      var RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
	      RecordTypePrototype.constructor = RecordType;

	      return RecordType;
	    }

	    Record.prototype.toString = function() {
	      return this.__toString(recordName(this) + ' {', '}');
	    };

	    // @pragma Access

	    Record.prototype.has = function(k) {
	      return this._defaultValues.hasOwnProperty(k);
	    };

	    Record.prototype.get = function(k, notSetValue) {
	      if (!this.has(k)) {
	        return notSetValue;
	      }
	      var defaultVal = this._defaultValues[k];
	      return this._map ? this._map.get(k, defaultVal) : defaultVal;
	    };

	    // @pragma Modification

	    Record.prototype.clear = function() {
	      if (this.__ownerID) {
	        this._map && this._map.clear();
	        return this;
	      }
	      var RecordType = this.constructor;
	      return RecordType._empty || (RecordType._empty = makeRecord(this, emptyMap()));
	    };

	    Record.prototype.set = function(k, v) {
	      if (!this.has(k)) {
	        throw new Error('Cannot set unknown key "' + k + '" on ' + recordName(this));
	      }
	      if (this._map && !this._map.has(k)) {
	        var defaultVal = this._defaultValues[k];
	        if (v === defaultVal) {
	          return this;
	        }
	      }
	      var newMap = this._map && this._map.set(k, v);
	      if (this.__ownerID || newMap === this._map) {
	        return this;
	      }
	      return makeRecord(this, newMap);
	    };

	    Record.prototype.remove = function(k) {
	      if (!this.has(k)) {
	        return this;
	      }
	      var newMap = this._map && this._map.remove(k);
	      if (this.__ownerID || newMap === this._map) {
	        return this;
	      }
	      return makeRecord(this, newMap);
	    };

	    Record.prototype.wasAltered = function() {
	      return this._map.wasAltered();
	    };

	    Record.prototype.__iterator = function(type, reverse) {var this$0 = this;
	      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterator(type, reverse);
	    };

	    Record.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterate(fn, reverse);
	    };

	    Record.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map && this._map.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        return this;
	      }
	      return makeRecord(this, newMap, ownerID);
	    };


	  var RecordPrototype = Record.prototype;
	  RecordPrototype[DELETE] = RecordPrototype.remove;
	  RecordPrototype.deleteIn =
	  RecordPrototype.removeIn = MapPrototype.removeIn;
	  RecordPrototype.merge = MapPrototype.merge;
	  RecordPrototype.mergeWith = MapPrototype.mergeWith;
	  RecordPrototype.mergeIn = MapPrototype.mergeIn;
	  RecordPrototype.mergeDeep = MapPrototype.mergeDeep;
	  RecordPrototype.mergeDeepWith = MapPrototype.mergeDeepWith;
	  RecordPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
	  RecordPrototype.setIn = MapPrototype.setIn;
	  RecordPrototype.update = MapPrototype.update;
	  RecordPrototype.updateIn = MapPrototype.updateIn;
	  RecordPrototype.withMutations = MapPrototype.withMutations;
	  RecordPrototype.asMutable = MapPrototype.asMutable;
	  RecordPrototype.asImmutable = MapPrototype.asImmutable;


	  function makeRecord(likeRecord, map, ownerID) {
	    var record = Object.create(Object.getPrototypeOf(likeRecord));
	    record._map = map;
	    record.__ownerID = ownerID;
	    return record;
	  }

	  function recordName(record) {
	    return record._name || record.constructor.name || 'Record';
	  }

	  function setProps(prototype, names) {
	    try {
	      names.forEach(setProp.bind(undefined, prototype));
	    } catch (error) {
	      // Object.defineProperty failed. Probably IE8.
	    }
	  }

	  function setProp(prototype, name) {
	    Object.defineProperty(prototype, name, {
	      get: function() {
	        return this.get(name);
	      },
	      set: function(value) {
	        invariant(this.__ownerID, 'Cannot set on an immutable record.');
	        this.set(name, value);
	      }
	    });
	  }

	  createClass(Set, SetCollection);

	    // @pragma Construction

	    function Set(value) {
	      return value === null || value === undefined ? emptySet() :
	        isSet(value) && !isOrdered(value) ? value :
	        emptySet().withMutations(function(set ) {
	          var iter = SetIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v ) {return set.add(v)});
	        });
	    }

	    Set.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    Set.fromKeys = function(value) {
	      return this(KeyedIterable(value).keySeq());
	    };

	    Set.prototype.toString = function() {
	      return this.__toString('Set {', '}');
	    };

	    // @pragma Access

	    Set.prototype.has = function(value) {
	      return this._map.has(value);
	    };

	    // @pragma Modification

	    Set.prototype.add = function(value) {
	      return updateSet(this, this._map.set(value, true));
	    };

	    Set.prototype.remove = function(value) {
	      return updateSet(this, this._map.remove(value));
	    };

	    Set.prototype.clear = function() {
	      return updateSet(this, this._map.clear());
	    };

	    // @pragma Composition

	    Set.prototype.union = function() {var iters = SLICE$0.call(arguments, 0);
	      iters = iters.filter(function(x ) {return x.size !== 0});
	      if (iters.length === 0) {
	        return this;
	      }
	      if (this.size === 0 && !this.__ownerID && iters.length === 1) {
	        return this.constructor(iters[0]);
	      }
	      return this.withMutations(function(set ) {
	        for (var ii = 0; ii < iters.length; ii++) {
	          SetIterable(iters[ii]).forEach(function(value ) {return set.add(value)});
	        }
	      });
	    };

	    Set.prototype.intersect = function() {var iters = SLICE$0.call(arguments, 0);
	      if (iters.length === 0) {
	        return this;
	      }
	      iters = iters.map(function(iter ) {return SetIterable(iter)});
	      var originalSet = this;
	      return this.withMutations(function(set ) {
	        originalSet.forEach(function(value ) {
	          if (!iters.every(function(iter ) {return iter.includes(value)})) {
	            set.remove(value);
	          }
	        });
	      });
	    };

	    Set.prototype.subtract = function() {var iters = SLICE$0.call(arguments, 0);
	      if (iters.length === 0) {
	        return this;
	      }
	      iters = iters.map(function(iter ) {return SetIterable(iter)});
	      var originalSet = this;
	      return this.withMutations(function(set ) {
	        originalSet.forEach(function(value ) {
	          if (iters.some(function(iter ) {return iter.includes(value)})) {
	            set.remove(value);
	          }
	        });
	      });
	    };

	    Set.prototype.merge = function() {
	      return this.union.apply(this, arguments);
	    };

	    Set.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return this.union.apply(this, iters);
	    };

	    Set.prototype.sort = function(comparator) {
	      // Late binding
	      return OrderedSet(sortFactory(this, comparator));
	    };

	    Set.prototype.sortBy = function(mapper, comparator) {
	      // Late binding
	      return OrderedSet(sortFactory(this, comparator, mapper));
	    };

	    Set.prototype.wasAltered = function() {
	      return this._map.wasAltered();
	    };

	    Set.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._map.__iterate(function(_, k)  {return fn(k, k, this$0)}, reverse);
	    };

	    Set.prototype.__iterator = function(type, reverse) {
	      return this._map.map(function(_, k)  {return k}).__iterator(type, reverse);
	    };

	    Set.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        return this;
	      }
	      return this.__make(newMap, ownerID);
	    };


	  function isSet(maybeSet) {
	    return !!(maybeSet && maybeSet[IS_SET_SENTINEL]);
	  }

	  Set.isSet = isSet;

	  var IS_SET_SENTINEL = '@@__IMMUTABLE_SET__@@';

	  var SetPrototype = Set.prototype;
	  SetPrototype[IS_SET_SENTINEL] = true;
	  SetPrototype[DELETE] = SetPrototype.remove;
	  SetPrototype.mergeDeep = SetPrototype.merge;
	  SetPrototype.mergeDeepWith = SetPrototype.mergeWith;
	  SetPrototype.withMutations = MapPrototype.withMutations;
	  SetPrototype.asMutable = MapPrototype.asMutable;
	  SetPrototype.asImmutable = MapPrototype.asImmutable;

	  SetPrototype.__empty = emptySet;
	  SetPrototype.__make = makeSet;

	  function updateSet(set, newMap) {
	    if (set.__ownerID) {
	      set.size = newMap.size;
	      set._map = newMap;
	      return set;
	    }
	    return newMap === set._map ? set :
	      newMap.size === 0 ? set.__empty() :
	      set.__make(newMap);
	  }

	  function makeSet(map, ownerID) {
	    var set = Object.create(SetPrototype);
	    set.size = map ? map.size : 0;
	    set._map = map;
	    set.__ownerID = ownerID;
	    return set;
	  }

	  var EMPTY_SET;
	  function emptySet() {
	    return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
	  }

	  createClass(OrderedSet, Set);

	    // @pragma Construction

	    function OrderedSet(value) {
	      return value === null || value === undefined ? emptyOrderedSet() :
	        isOrderedSet(value) ? value :
	        emptyOrderedSet().withMutations(function(set ) {
	          var iter = SetIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v ) {return set.add(v)});
	        });
	    }

	    OrderedSet.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    OrderedSet.fromKeys = function(value) {
	      return this(KeyedIterable(value).keySeq());
	    };

	    OrderedSet.prototype.toString = function() {
	      return this.__toString('OrderedSet {', '}');
	    };


	  function isOrderedSet(maybeOrderedSet) {
	    return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
	  }

	  OrderedSet.isOrderedSet = isOrderedSet;

	  var OrderedSetPrototype = OrderedSet.prototype;
	  OrderedSetPrototype[IS_ORDERED_SENTINEL] = true;

	  OrderedSetPrototype.__empty = emptyOrderedSet;
	  OrderedSetPrototype.__make = makeOrderedSet;

	  function makeOrderedSet(map, ownerID) {
	    var set = Object.create(OrderedSetPrototype);
	    set.size = map ? map.size : 0;
	    set._map = map;
	    set.__ownerID = ownerID;
	    return set;
	  }

	  var EMPTY_ORDERED_SET;
	  function emptyOrderedSet() {
	    return EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()));
	  }

	  createClass(Stack, IndexedCollection);

	    // @pragma Construction

	    function Stack(value) {
	      return value === null || value === undefined ? emptyStack() :
	        isStack(value) ? value :
	        emptyStack().unshiftAll(value);
	    }

	    Stack.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    Stack.prototype.toString = function() {
	      return this.__toString('Stack [', ']');
	    };

	    // @pragma Access

	    Stack.prototype.get = function(index, notSetValue) {
	      var head = this._head;
	      index = wrapIndex(this, index);
	      while (head && index--) {
	        head = head.next;
	      }
	      return head ? head.value : notSetValue;
	    };

	    Stack.prototype.peek = function() {
	      return this._head && this._head.value;
	    };

	    // @pragma Modification

	    Stack.prototype.push = function(/*...values*/) {
	      if (arguments.length === 0) {
	        return this;
	      }
	      var newSize = this.size + arguments.length;
	      var head = this._head;
	      for (var ii = arguments.length - 1; ii >= 0; ii--) {
	        head = {
	          value: arguments[ii],
	          next: head
	        };
	      }
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };

	    Stack.prototype.pushAll = function(iter) {
	      iter = IndexedIterable(iter);
	      if (iter.size === 0) {
	        return this;
	      }
	      assertNotInfinite(iter.size);
	      var newSize = this.size;
	      var head = this._head;
	      iter.reverse().forEach(function(value ) {
	        newSize++;
	        head = {
	          value: value,
	          next: head
	        };
	      });
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };

	    Stack.prototype.pop = function() {
	      return this.slice(1);
	    };

	    Stack.prototype.unshift = function(/*...values*/) {
	      return this.push.apply(this, arguments);
	    };

	    Stack.prototype.unshiftAll = function(iter) {
	      return this.pushAll(iter);
	    };

	    Stack.prototype.shift = function() {
	      return this.pop.apply(this, arguments);
	    };

	    Stack.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._head = undefined;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyStack();
	    };

	    Stack.prototype.slice = function(begin, end) {
	      if (wholeSlice(begin, end, this.size)) {
	        return this;
	      }
	      var resolvedBegin = resolveBegin(begin, this.size);
	      var resolvedEnd = resolveEnd(end, this.size);
	      if (resolvedEnd !== this.size) {
	        // super.slice(begin, end);
	        return IndexedCollection.prototype.slice.call(this, begin, end);
	      }
	      var newSize = this.size - resolvedBegin;
	      var head = this._head;
	      while (resolvedBegin--) {
	        head = head.next;
	      }
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };

	    // @pragma Mutability

	    Stack.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this.__altered = false;
	        return this;
	      }
	      return makeStack(this.size, this._head, ownerID, this.__hash);
	    };

	    // @pragma Iteration

	    Stack.prototype.__iterate = function(fn, reverse) {
	      if (reverse) {
	        return this.reverse().__iterate(fn);
	      }
	      var iterations = 0;
	      var node = this._head;
	      while (node) {
	        if (fn(node.value, iterations++, this) === false) {
	          break;
	        }
	        node = node.next;
	      }
	      return iterations;
	    };

	    Stack.prototype.__iterator = function(type, reverse) {
	      if (reverse) {
	        return this.reverse().__iterator(type);
	      }
	      var iterations = 0;
	      var node = this._head;
	      return new Iterator(function()  {
	        if (node) {
	          var value = node.value;
	          node = node.next;
	          return iteratorValue(type, iterations++, value);
	        }
	        return iteratorDone();
	      });
	    };


	  function isStack(maybeStack) {
	    return !!(maybeStack && maybeStack[IS_STACK_SENTINEL]);
	  }

	  Stack.isStack = isStack;

	  var IS_STACK_SENTINEL = '@@__IMMUTABLE_STACK__@@';

	  var StackPrototype = Stack.prototype;
	  StackPrototype[IS_STACK_SENTINEL] = true;
	  StackPrototype.withMutations = MapPrototype.withMutations;
	  StackPrototype.asMutable = MapPrototype.asMutable;
	  StackPrototype.asImmutable = MapPrototype.asImmutable;
	  StackPrototype.wasAltered = MapPrototype.wasAltered;


	  function makeStack(size, head, ownerID, hash) {
	    var map = Object.create(StackPrototype);
	    map.size = size;
	    map._head = head;
	    map.__ownerID = ownerID;
	    map.__hash = hash;
	    map.__altered = false;
	    return map;
	  }

	  var EMPTY_STACK;
	  function emptyStack() {
	    return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
	  }

	  /**
	   * Contributes additional methods to a constructor
	   */
	  function mixin(ctor, methods) {
	    var keyCopier = function(key ) { ctor.prototype[key] = methods[key]; };
	    Object.keys(methods).forEach(keyCopier);
	    Object.getOwnPropertySymbols &&
	      Object.getOwnPropertySymbols(methods).forEach(keyCopier);
	    return ctor;
	  }

	  Iterable.Iterator = Iterator;

	  mixin(Iterable, {

	    // ### Conversion to other types

	    toArray: function() {
	      assertNotInfinite(this.size);
	      var array = new Array(this.size || 0);
	      this.valueSeq().__iterate(function(v, i)  { array[i] = v; });
	      return array;
	    },

	    toIndexedSeq: function() {
	      return new ToIndexedSequence(this);
	    },

	    toJS: function() {
	      return this.toSeq().map(
	        function(value ) {return value && typeof value.toJS === 'function' ? value.toJS() : value}
	      ).__toJS();
	    },

	    toJSON: function() {
	      return this.toSeq().map(
	        function(value ) {return value && typeof value.toJSON === 'function' ? value.toJSON() : value}
	      ).__toJS();
	    },

	    toKeyedSeq: function() {
	      return new ToKeyedSequence(this, true);
	    },

	    toMap: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Map(this.toKeyedSeq());
	    },

	    toObject: function() {
	      assertNotInfinite(this.size);
	      var object = {};
	      this.__iterate(function(v, k)  { object[k] = v; });
	      return object;
	    },

	    toOrderedMap: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return OrderedMap(this.toKeyedSeq());
	    },

	    toOrderedSet: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
	    },

	    toSet: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Set(isKeyed(this) ? this.valueSeq() : this);
	    },

	    toSetSeq: function() {
	      return new ToSetSequence(this);
	    },

	    toSeq: function() {
	      return isIndexed(this) ? this.toIndexedSeq() :
	        isKeyed(this) ? this.toKeyedSeq() :
	        this.toSetSeq();
	    },

	    toStack: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Stack(isKeyed(this) ? this.valueSeq() : this);
	    },

	    toList: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return List(isKeyed(this) ? this.valueSeq() : this);
	    },


	    // ### Common JavaScript methods and properties

	    toString: function() {
	      return '[Iterable]';
	    },

	    __toString: function(head, tail) {
	      if (this.size === 0) {
	        return head + tail;
	      }
	      return head + ' ' + this.toSeq().map(this.__toStringMapper).join(', ') + ' ' + tail;
	    },


	    // ### ES6 Collection methods (ES6 Array and Map)

	    concat: function() {var values = SLICE$0.call(arguments, 0);
	      return reify(this, concatFactory(this, values));
	    },

	    includes: function(searchValue) {
	      return this.some(function(value ) {return is(value, searchValue)});
	    },

	    entries: function() {
	      return this.__iterator(ITERATE_ENTRIES);
	    },

	    every: function(predicate, context) {
	      assertNotInfinite(this.size);
	      var returnValue = true;
	      this.__iterate(function(v, k, c)  {
	        if (!predicate.call(context, v, k, c)) {
	          returnValue = false;
	          return false;
	        }
	      });
	      return returnValue;
	    },

	    filter: function(predicate, context) {
	      return reify(this, filterFactory(this, predicate, context, true));
	    },

	    find: function(predicate, context, notSetValue) {
	      var entry = this.findEntry(predicate, context);
	      return entry ? entry[1] : notSetValue;
	    },

	    forEach: function(sideEffect, context) {
	      assertNotInfinite(this.size);
	      return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
	    },

	    join: function(separator) {
	      assertNotInfinite(this.size);
	      separator = separator !== undefined ? '' + separator : ',';
	      var joined = '';
	      var isFirst = true;
	      this.__iterate(function(v ) {
	        isFirst ? (isFirst = false) : (joined += separator);
	        joined += v !== null && v !== undefined ? v.toString() : '';
	      });
	      return joined;
	    },

	    keys: function() {
	      return this.__iterator(ITERATE_KEYS);
	    },

	    map: function(mapper, context) {
	      return reify(this, mapFactory(this, mapper, context));
	    },

	    reduce: function(reducer, initialReduction, context) {
	      assertNotInfinite(this.size);
	      var reduction;
	      var useFirst;
	      if (arguments.length < 2) {
	        useFirst = true;
	      } else {
	        reduction = initialReduction;
	      }
	      this.__iterate(function(v, k, c)  {
	        if (useFirst) {
	          useFirst = false;
	          reduction = v;
	        } else {
	          reduction = reducer.call(context, reduction, v, k, c);
	        }
	      });
	      return reduction;
	    },

	    reduceRight: function(reducer, initialReduction, context) {
	      var reversed = this.toKeyedSeq().reverse();
	      return reversed.reduce.apply(reversed, arguments);
	    },

	    reverse: function() {
	      return reify(this, reverseFactory(this, true));
	    },

	    slice: function(begin, end) {
	      return reify(this, sliceFactory(this, begin, end, true));
	    },

	    some: function(predicate, context) {
	      return !this.every(not(predicate), context);
	    },

	    sort: function(comparator) {
	      return reify(this, sortFactory(this, comparator));
	    },

	    values: function() {
	      return this.__iterator(ITERATE_VALUES);
	    },


	    // ### More sequential methods

	    butLast: function() {
	      return this.slice(0, -1);
	    },

	    isEmpty: function() {
	      return this.size !== undefined ? this.size === 0 : !this.some(function()  {return true});
	    },

	    count: function(predicate, context) {
	      return ensureSize(
	        predicate ? this.toSeq().filter(predicate, context) : this
	      );
	    },

	    countBy: function(grouper, context) {
	      return countByFactory(this, grouper, context);
	    },

	    equals: function(other) {
	      return deepEqual(this, other);
	    },

	    entrySeq: function() {
	      var iterable = this;
	      if (iterable._cache) {
	        // We cache as an entries array, so we can just return the cache!
	        return new ArraySeq(iterable._cache);
	      }
	      var entriesSequence = iterable.toSeq().map(entryMapper).toIndexedSeq();
	      entriesSequence.fromEntrySeq = function()  {return iterable.toSeq()};
	      return entriesSequence;
	    },

	    filterNot: function(predicate, context) {
	      return this.filter(not(predicate), context);
	    },

	    findEntry: function(predicate, context, notSetValue) {
	      var found = notSetValue;
	      this.__iterate(function(v, k, c)  {
	        if (predicate.call(context, v, k, c)) {
	          found = [k, v];
	          return false;
	        }
	      });
	      return found;
	    },

	    findKey: function(predicate, context) {
	      var entry = this.findEntry(predicate, context);
	      return entry && entry[0];
	    },

	    findLast: function(predicate, context, notSetValue) {
	      return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
	    },

	    findLastEntry: function(predicate, context, notSetValue) {
	      return this.toKeyedSeq().reverse().findEntry(predicate, context, notSetValue);
	    },

	    findLastKey: function(predicate, context) {
	      return this.toKeyedSeq().reverse().findKey(predicate, context);
	    },

	    first: function() {
	      return this.find(returnTrue);
	    },

	    flatMap: function(mapper, context) {
	      return reify(this, flatMapFactory(this, mapper, context));
	    },

	    flatten: function(depth) {
	      return reify(this, flattenFactory(this, depth, true));
	    },

	    fromEntrySeq: function() {
	      return new FromEntriesSequence(this);
	    },

	    get: function(searchKey, notSetValue) {
	      return this.find(function(_, key)  {return is(key, searchKey)}, undefined, notSetValue);
	    },

	    getIn: function(searchKeyPath, notSetValue) {
	      var nested = this;
	      // Note: in an ES6 environment, we would prefer:
	      // for (var key of searchKeyPath) {
	      var iter = forceIterator(searchKeyPath);
	      var step;
	      while (!(step = iter.next()).done) {
	        var key = step.value;
	        nested = nested && nested.get ? nested.get(key, NOT_SET) : NOT_SET;
	        if (nested === NOT_SET) {
	          return notSetValue;
	        }
	      }
	      return nested;
	    },

	    groupBy: function(grouper, context) {
	      return groupByFactory(this, grouper, context);
	    },

	    has: function(searchKey) {
	      return this.get(searchKey, NOT_SET) !== NOT_SET;
	    },

	    hasIn: function(searchKeyPath) {
	      return this.getIn(searchKeyPath, NOT_SET) !== NOT_SET;
	    },

	    isSubset: function(iter) {
	      iter = typeof iter.includes === 'function' ? iter : Iterable(iter);
	      return this.every(function(value ) {return iter.includes(value)});
	    },

	    isSuperset: function(iter) {
	      iter = typeof iter.isSubset === 'function' ? iter : Iterable(iter);
	      return iter.isSubset(this);
	    },

	    keyOf: function(searchValue) {
	      return this.findKey(function(value ) {return is(value, searchValue)});
	    },

	    keySeq: function() {
	      return this.toSeq().map(keyMapper).toIndexedSeq();
	    },

	    last: function() {
	      return this.toSeq().reverse().first();
	    },

	    lastKeyOf: function(searchValue) {
	      return this.toKeyedSeq().reverse().keyOf(searchValue);
	    },

	    max: function(comparator) {
	      return maxFactory(this, comparator);
	    },

	    maxBy: function(mapper, comparator) {
	      return maxFactory(this, comparator, mapper);
	    },

	    min: function(comparator) {
	      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator);
	    },

	    minBy: function(mapper, comparator) {
	      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator, mapper);
	    },

	    rest: function() {
	      return this.slice(1);
	    },

	    skip: function(amount) {
	      return this.slice(Math.max(0, amount));
	    },

	    skipLast: function(amount) {
	      return reify(this, this.toSeq().reverse().skip(amount).reverse());
	    },

	    skipWhile: function(predicate, context) {
	      return reify(this, skipWhileFactory(this, predicate, context, true));
	    },

	    skipUntil: function(predicate, context) {
	      return this.skipWhile(not(predicate), context);
	    },

	    sortBy: function(mapper, comparator) {
	      return reify(this, sortFactory(this, comparator, mapper));
	    },

	    take: function(amount) {
	      return this.slice(0, Math.max(0, amount));
	    },

	    takeLast: function(amount) {
	      return reify(this, this.toSeq().reverse().take(amount).reverse());
	    },

	    takeWhile: function(predicate, context) {
	      return reify(this, takeWhileFactory(this, predicate, context));
	    },

	    takeUntil: function(predicate, context) {
	      return this.takeWhile(not(predicate), context);
	    },

	    valueSeq: function() {
	      return this.toIndexedSeq();
	    },


	    // ### Hashable Object

	    hashCode: function() {
	      return this.__hash || (this.__hash = hashIterable(this));
	    }


	    // ### Internal

	    // abstract __iterate(fn, reverse)

	    // abstract __iterator(type, reverse)
	  });

	  // var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
	  // var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
	  // var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
	  // var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

	  var IterablePrototype = Iterable.prototype;
	  IterablePrototype[IS_ITERABLE_SENTINEL] = true;
	  IterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.values;
	  IterablePrototype.__toJS = IterablePrototype.toArray;
	  IterablePrototype.__toStringMapper = quoteString;
	  IterablePrototype.inspect =
	  IterablePrototype.toSource = function() { return this.toString(); };
	  IterablePrototype.chain = IterablePrototype.flatMap;
	  IterablePrototype.contains = IterablePrototype.includes;

	  mixin(KeyedIterable, {

	    // ### More sequential methods

	    flip: function() {
	      return reify(this, flipFactory(this));
	    },

	    mapEntries: function(mapper, context) {var this$0 = this;
	      var iterations = 0;
	      return reify(this,
	        this.toSeq().map(
	          function(v, k)  {return mapper.call(context, [k, v], iterations++, this$0)}
	        ).fromEntrySeq()
	      );
	    },

	    mapKeys: function(mapper, context) {var this$0 = this;
	      return reify(this,
	        this.toSeq().flip().map(
	          function(k, v)  {return mapper.call(context, k, v, this$0)}
	        ).flip()
	      );
	    }

	  });

	  var KeyedIterablePrototype = KeyedIterable.prototype;
	  KeyedIterablePrototype[IS_KEYED_SENTINEL] = true;
	  KeyedIterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.entries;
	  KeyedIterablePrototype.__toJS = IterablePrototype.toObject;
	  KeyedIterablePrototype.__toStringMapper = function(v, k)  {return JSON.stringify(k) + ': ' + quoteString(v)};



	  mixin(IndexedIterable, {

	    // ### Conversion to other types

	    toKeyedSeq: function() {
	      return new ToKeyedSequence(this, false);
	    },


	    // ### ES6 Collection methods (ES6 Array and Map)

	    filter: function(predicate, context) {
	      return reify(this, filterFactory(this, predicate, context, false));
	    },

	    findIndex: function(predicate, context) {
	      var entry = this.findEntry(predicate, context);
	      return entry ? entry[0] : -1;
	    },

	    indexOf: function(searchValue) {
	      var key = this.keyOf(searchValue);
	      return key === undefined ? -1 : key;
	    },

	    lastIndexOf: function(searchValue) {
	      var key = this.lastKeyOf(searchValue);
	      return key === undefined ? -1 : key;
	    },

	    reverse: function() {
	      return reify(this, reverseFactory(this, false));
	    },

	    slice: function(begin, end) {
	      return reify(this, sliceFactory(this, begin, end, false));
	    },

	    splice: function(index, removeNum /*, ...values*/) {
	      var numArgs = arguments.length;
	      removeNum = Math.max(removeNum | 0, 0);
	      if (numArgs === 0 || (numArgs === 2 && !removeNum)) {
	        return this;
	      }
	      // If index is negative, it should resolve relative to the size of the
	      // collection. However size may be expensive to compute if not cached, so
	      // only call count() if the number is in fact negative.
	      index = resolveBegin(index, index < 0 ? this.count() : this.size);
	      var spliced = this.slice(0, index);
	      return reify(
	        this,
	        numArgs === 1 ?
	          spliced :
	          spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum))
	      );
	    },


	    // ### More collection methods

	    findLastIndex: function(predicate, context) {
	      var entry = this.findLastEntry(predicate, context);
	      return entry ? entry[0] : -1;
	    },

	    first: function() {
	      return this.get(0);
	    },

	    flatten: function(depth) {
	      return reify(this, flattenFactory(this, depth, false));
	    },

	    get: function(index, notSetValue) {
	      index = wrapIndex(this, index);
	      return (index < 0 || (this.size === Infinity ||
	          (this.size !== undefined && index > this.size))) ?
	        notSetValue :
	        this.find(function(_, key)  {return key === index}, undefined, notSetValue);
	    },

	    has: function(index) {
	      index = wrapIndex(this, index);
	      return index >= 0 && (this.size !== undefined ?
	        this.size === Infinity || index < this.size :
	        this.indexOf(index) !== -1
	      );
	    },

	    interpose: function(separator) {
	      return reify(this, interposeFactory(this, separator));
	    },

	    interleave: function(/*...iterables*/) {
	      var iterables = [this].concat(arrCopy(arguments));
	      var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, iterables);
	      var interleaved = zipped.flatten(true);
	      if (zipped.size) {
	        interleaved.size = zipped.size * iterables.length;
	      }
	      return reify(this, interleaved);
	    },

	    keySeq: function() {
	      return Range(0, this.size);
	    },

	    last: function() {
	      return this.get(-1);
	    },

	    skipWhile: function(predicate, context) {
	      return reify(this, skipWhileFactory(this, predicate, context, false));
	    },

	    zip: function(/*, ...iterables */) {
	      var iterables = [this].concat(arrCopy(arguments));
	      return reify(this, zipWithFactory(this, defaultZipper, iterables));
	    },

	    zipWith: function(zipper/*, ...iterables */) {
	      var iterables = arrCopy(arguments);
	      iterables[0] = this;
	      return reify(this, zipWithFactory(this, zipper, iterables));
	    }

	  });

	  IndexedIterable.prototype[IS_INDEXED_SENTINEL] = true;
	  IndexedIterable.prototype[IS_ORDERED_SENTINEL] = true;



	  mixin(SetIterable, {

	    // ### ES6 Collection methods (ES6 Array and Map)

	    get: function(value, notSetValue) {
	      return this.has(value) ? value : notSetValue;
	    },

	    includes: function(value) {
	      return this.has(value);
	    },


	    // ### More sequential methods

	    keySeq: function() {
	      return this.valueSeq();
	    }

	  });

	  SetIterable.prototype.has = IterablePrototype.includes;
	  SetIterable.prototype.contains = SetIterable.prototype.includes;


	  // Mixin subclasses

	  mixin(KeyedSeq, KeyedIterable.prototype);
	  mixin(IndexedSeq, IndexedIterable.prototype);
	  mixin(SetSeq, SetIterable.prototype);

	  mixin(KeyedCollection, KeyedIterable.prototype);
	  mixin(IndexedCollection, IndexedIterable.prototype);
	  mixin(SetCollection, SetIterable.prototype);


	  // #pragma Helper functions

	  function keyMapper(v, k) {
	    return k;
	  }

	  function entryMapper(v, k) {
	    return [k, v];
	  }

	  function not(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    }
	  }

	  function neg(predicate) {
	    return function() {
	      return -predicate.apply(this, arguments);
	    }
	  }

	  function quoteString(value) {
	    return typeof value === 'string' ? JSON.stringify(value) : String(value);
	  }

	  function defaultZipper() {
	    return arrCopy(arguments);
	  }

	  function defaultNegComparator(a, b) {
	    return a < b ? 1 : a > b ? -1 : 0;
	  }

	  function hashIterable(iterable) {
	    if (iterable.size === Infinity) {
	      return 0;
	    }
	    var ordered = isOrdered(iterable);
	    var keyed = isKeyed(iterable);
	    var h = ordered ? 1 : 0;
	    var size = iterable.__iterate(
	      keyed ?
	        ordered ?
	          function(v, k)  { h = 31 * h + hashMerge(hash(v), hash(k)) | 0; } :
	          function(v, k)  { h = h + hashMerge(hash(v), hash(k)) | 0; } :
	        ordered ?
	          function(v ) { h = 31 * h + hash(v) | 0; } :
	          function(v ) { h = h + hash(v) | 0; }
	    );
	    return murmurHashOfSize(size, h);
	  }

	  function murmurHashOfSize(size, h) {
	    h = imul(h, 0xCC9E2D51);
	    h = imul(h << 15 | h >>> -15, 0x1B873593);
	    h = imul(h << 13 | h >>> -13, 5);
	    h = (h + 0xE6546B64 | 0) ^ size;
	    h = imul(h ^ h >>> 16, 0x85EBCA6B);
	    h = imul(h ^ h >>> 13, 0xC2B2AE35);
	    h = smi(h ^ h >>> 16);
	    return h;
	  }

	  function hashMerge(a, b) {
	    return a ^ b + 0x9E3779B9 + (a << 6) + (a >> 2) | 0; // int
	  }

	  var Immutable = {

	    Iterable: Iterable,

	    Seq: Seq,
	    Collection: Collection,
	    Map: Map,
	    OrderedMap: OrderedMap,
	    List: List,
	    Stack: Stack,
	    Set: Set,
	    OrderedSet: OrderedSet,

	    Record: Record,
	    Range: Range,
	    Repeat: Repeat,

	    is: is,
	    fromJS: fromJS

	  };

	  return Immutable;

	}));

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(71);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(72);

	var _redux = __webpack_require__(79);

	var _actionCreators = __webpack_require__(170);

	var _selectors = __webpack_require__(163);

	var selectors = _interopRequireWildcard(_selectors);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var styles = {
	  wrapper: {
	    margin: 5,
	    fontFamily: 'monospace',
	    display: 'flex',
	    flexDirection: 'row',
	    alignItems: 'stretch'
	  },
	  input: {
	    backgroundColor: '#eee',
	    border: 0,
	    flexBasis: '100%'
	  },
	  inputChevron: {
	    paddingRight: 10
	  }
	};

	var REPLInput = function (_React$Component) {
	  _inherits(REPLInput, _React$Component);

	  function REPLInput() {
	    _classCallCheck(this, REPLInput);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(REPLInput).apply(this, arguments));
	  }

	  _createClass(REPLInput, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      if (this.props.isLoadingRuntime) {
	        return null;
	      }
	      return _react2.default.createElement(
	        'div',
	        { style: styles.wrapper },
	        _react2.default.createElement(
	          'span',
	          { style: styles.inputChevron },
	          '> '
	        ),
	        _react2.default.createElement('input', { style: styles.input,
	          value: this.props.code,
	          onChange: function onChange(event) {
	            return _this2.props.changeREPLCode(event.target.value);
	          },
	          onKeyPress: function onKeyPress(event) {
	            return event.key === "Enter" && _this2.props.onRun(_this2.props.code);
	          } })
	      );
	    }
	  }]);

	  return REPLInput;
	}(_react2.default.Component);

	exports.default = REPLInput;


	REPLInput.propTypes = {
	  REPLInput: _react2.default.PropTypes.string,
	  code: _react2.default.PropTypes.string,
	  isLoadingRuntime: _react2.default.PropTypes.bool,
	  changeREPLCode: _react2.default.PropTypes.func,
	  onRun: _react2.default.PropTypes.func
	};

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    code: selectors.getCode(state),
	    isLoadingRuntime: selectors.isLoadingRuntime(state)
	  };
	}, function (dispatch) {
	  return (0, _redux.bindActionCreators)({
	    changeREPLCode: _actionCreators.changeREPLCode,
	    onRun: _actionCreators.run
	  }, dispatch);
	})(REPLInput);

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createStore;

	var _redux = __webpack_require__(79);

	var redux = _interopRequireWildcard(_redux);

	var _reduxThunk = __webpack_require__(206);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _reduxLogger = __webpack_require__(207);

	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

	var _reducer = __webpack_require__(208);

	var _reducer2 = _interopRequireDefault(_reducer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function createStore(_ref) {
	  var debug = _ref.debug;

	  var middleware = [_reduxThunk2.default];
	  if (("production") !== 'production' || debug) {
	    middleware.push((0, _reduxLogger2.default)());
	  }

	  return redux.createStore(_reducer2.default, redux.applyMiddleware.apply(redux, middleware));
	}

/***/ },
/* 206 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	function createThunkMiddleware(extraArgument) {
	  return function (_ref) {
	    var dispatch = _ref.dispatch;
	    var getState = _ref.getState;
	    return function (next) {
	      return function (action) {
	        if (typeof action === 'function') {
	          return action(dispatch, getState, extraArgument);
	        }

	        return next(action);
	      };
	    };
	  };
	}

	var thunk = createThunkMiddleware();
	thunk.withExtraArgument = createThunkMiddleware;

	exports['default'] = thunk;

/***/ },
/* 207 */
/***/ function(module, exports) {

	"use strict";

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

	var repeat = function repeat(str, times) {
	  return new Array(times + 1).join(str);
	};
	var pad = function pad(num, maxLength) {
	  return repeat("0", maxLength - num.toString().length) + num;
	};
	var formatTime = function formatTime(time) {
	  return "@ " + pad(time.getHours(), 2) + ":" + pad(time.getMinutes(), 2) + ":" + pad(time.getSeconds(), 2) + "." + pad(time.getMilliseconds(), 3);
	};

	// Use the new performance api to get better precision if available
	var timer = typeof performance !== "undefined" && typeof performance.now === "function" ? performance : Date;

	/**
	 * parse the level option of createLogger
	 *
	 * @property {string | function | object} level - console[level]
	 * @property {object} action
	 * @property {array} payload
	 * @property {string} type
	 */

	function getLogLevel(level, action, payload, type) {
	  switch (typeof level === "undefined" ? "undefined" : _typeof(level)) {
	    case "object":
	      return typeof level[type] === "function" ? level[type].apply(level, _toConsumableArray(payload)) : level[type];
	    case "function":
	      return level(action);
	    default:
	      return level;
	  }
	}

	/**
	 * Creates logger with followed options
	 *
	 * @namespace
	 * @property {object} options - options for logger
	 * @property {string | function | object} options.level - console[level]
	 * @property {boolean} options.duration - print duration of each action?
	 * @property {boolean} options.timestamp - print timestamp with each action?
	 * @property {object} options.colors - custom colors
	 * @property {object} options.logger - implementation of the `console` API
	 * @property {boolean} options.logErrors - should errors in action execution be caught, logged, and re-thrown?
	 * @property {boolean} options.collapsed - is group collapsed?
	 * @property {boolean} options.predicate - condition which resolves logger behavior
	 * @property {function} options.stateTransformer - transform state before print
	 * @property {function} options.actionTransformer - transform action before print
	 * @property {function} options.errorTransformer - transform error before print
	 */

	function createLogger() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var _options$level = options.level;
	  var level = _options$level === undefined ? "log" : _options$level;
	  var _options$logger = options.logger;
	  var logger = _options$logger === undefined ? console : _options$logger;
	  var _options$logErrors = options.logErrors;
	  var logErrors = _options$logErrors === undefined ? true : _options$logErrors;
	  var collapsed = options.collapsed;
	  var predicate = options.predicate;
	  var _options$duration = options.duration;
	  var duration = _options$duration === undefined ? false : _options$duration;
	  var _options$timestamp = options.timestamp;
	  var timestamp = _options$timestamp === undefined ? true : _options$timestamp;
	  var transformer = options.transformer;
	  var _options$stateTransfo = options.stateTransformer;
	  var // deprecated
	  stateTransformer = _options$stateTransfo === undefined ? function (state) {
	    return state;
	  } : _options$stateTransfo;
	  var _options$actionTransf = options.actionTransformer;
	  var actionTransformer = _options$actionTransf === undefined ? function (actn) {
	    return actn;
	  } : _options$actionTransf;
	  var _options$errorTransfo = options.errorTransformer;
	  var errorTransformer = _options$errorTransfo === undefined ? function (error) {
	    return error;
	  } : _options$errorTransfo;
	  var _options$colors = options.colors;
	  var colors = _options$colors === undefined ? {
	    title: function title() {
	      return "#000000";
	    },
	    prevState: function prevState() {
	      return "#9E9E9E";
	    },
	    action: function action() {
	      return "#03A9F4";
	    },
	    nextState: function nextState() {
	      return "#4CAF50";
	    },
	    error: function error() {
	      return "#F20404";
	    }
	  } : _options$colors;

	  // exit if console undefined

	  if (typeof logger === "undefined") {
	    return function () {
	      return function (next) {
	        return function (action) {
	          return next(action);
	        };
	      };
	    };
	  }

	  if (transformer) {
	    console.error("Option 'transformer' is deprecated, use stateTransformer instead");
	  }

	  var logBuffer = [];
	  function printBuffer() {
	    logBuffer.forEach(function (logEntry, key) {
	      var started = logEntry.started;
	      var startedTime = logEntry.startedTime;
	      var action = logEntry.action;
	      var prevState = logEntry.prevState;
	      var error = logEntry.error;
	      var took = logEntry.took;
	      var nextState = logEntry.nextState;

	      var nextEntry = logBuffer[key + 1];
	      if (nextEntry) {
	        nextState = nextEntry.prevState;
	        took = nextEntry.started - started;
	      }
	      // message
	      var formattedAction = actionTransformer(action);
	      var isCollapsed = typeof collapsed === "function" ? collapsed(function () {
	        return nextState;
	      }, action) : collapsed;

	      var formattedTime = formatTime(startedTime);
	      var titleCSS = colors.title ? "color: " + colors.title(formattedAction) + ";" : null;
	      var title = "action " + (timestamp ? formattedTime : "") + " " + formattedAction.type + " " + (duration ? "(in " + took.toFixed(2) + " ms)" : "");

	      // render
	      try {
	        if (isCollapsed) {
	          if (colors.title) logger.groupCollapsed("%c " + title, titleCSS);else logger.groupCollapsed(title);
	        } else {
	          if (colors.title) logger.group("%c " + title, titleCSS);else logger.group(title);
	        }
	      } catch (e) {
	        logger.log(title);
	      }

	      var prevStateLevel = getLogLevel(level, formattedAction, [prevState], "prevState");
	      var actionLevel = getLogLevel(level, formattedAction, [formattedAction], "action");
	      var errorLevel = getLogLevel(level, formattedAction, [error, prevState], "error");
	      var nextStateLevel = getLogLevel(level, formattedAction, [nextState], "nextState");

	      if (prevStateLevel) {
	        if (colors.prevState) logger[prevStateLevel]("%c prev state", "color: " + colors.prevState(prevState) + "; font-weight: bold", prevState);else logger[prevStateLevel]("prev state", prevState);
	      }

	      if (actionLevel) {
	        if (colors.action) logger[actionLevel]("%c action", "color: " + colors.action(formattedAction) + "; font-weight: bold", formattedAction);else logger[actionLevel]("action", formattedAction);
	      }

	      if (error && errorLevel) {
	        if (colors.error) logger[errorLevel]("%c error", "color: " + colors.error(error, prevState) + "; font-weight: bold", error);else logger[errorLevel]("error", error);
	      }

	      if (nextStateLevel) {
	        if (colors.nextState) logger[nextStateLevel]("%c next state", "color: " + colors.nextState(nextState) + "; font-weight: bold", nextState);else logger[nextStateLevel]("next state", nextState);
	      }

	      try {
	        logger.groupEnd();
	      } catch (e) {
	        logger.log("—— log end ——");
	      }
	    });
	    logBuffer.length = 0;
	  }

	  return function (_ref) {
	    var getState = _ref.getState;
	    return function (next) {
	      return function (action) {
	        // exit early if predicate function returns false
	        if (typeof predicate === "function" && !predicate(getState, action)) {
	          return next(action);
	        }

	        var logEntry = {};
	        logBuffer.push(logEntry);

	        logEntry.started = timer.now();
	        logEntry.startedTime = new Date();
	        logEntry.prevState = stateTransformer(getState());
	        logEntry.action = action;

	        var returnedValue = undefined;
	        if (logErrors) {
	          try {
	            returnedValue = next(action);
	          } catch (e) {
	            logEntry.error = errorTransformer(e);
	          }
	        } else {
	          returnedValue = next(action);
	        }

	        logEntry.took = timer.now() - logEntry.started;
	        logEntry.nextState = stateTransformer(getState());

	        printBuffer();

	        if (logEntry.error) throw logEntry.error;
	        return returnedValue;
	      };
	    };
	  };
	}

	module.exports = createLogger;

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _actionTypes = __webpack_require__(171);

	var actType = _interopRequireWildcard(_actionTypes);

	var _constants = __webpack_require__(164);

	var constants = _interopRequireWildcard(_constants);

	var _reduxImmutable = __webpack_require__(209);

	var _immutable = __webpack_require__(203);

	var _immutable2 = _interopRequireDefault(_immutable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var initialState = _immutable2.default.Map({
	  loadApi: _immutable2.default.Map({
	    stage: null,
	    runtime: null,
	    error: null
	  }),
	  runCode: _immutable2.default.Map({
	    source: null,
	    stage: null,
	    ast: null,
	    bytecode: null,
	    result: null,
	    error: null,
	    pausing: null
	  }),
	  editor: _immutable2.default.Map({
	    source: '',
	    result: null
	  }),
	  googleDrive: _immutable2.default.Map({
	    stage: null,
	    drive: null,
	    save: null,
	    share: null,
	    error: null
	  }),
	  REPL: _immutable2.default.Map({
	    code: '',
	    history: _immutable2.default.List()
	  }),
	  moreMenu: _immutable2.default.Map({
	    expanded: false,
	    fontSize: 12
	  })
	});

	function REPL() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState.get('REPL') : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case actType.CHANGE_REPL_CODE:
	      return state.set('code', action.payload);
	    case actType.RECEIVE_REPL_RESULT:
	      return state.set('history', state.get('history').push({
	        code: state.get('code'),
	        result: action.payload
	      }));
	    case actType.CLEAR_STATE:
	      return initialState.get('REPL');
	    case actType.FINISH_EXECUTE:
	      return state.set('code', '');
	    default:
	      return state;
	  }
	}

	function editor() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState.get('editor') : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case actType.CHANGE_SOURCE:
	      return state.set('source', action.payload);
	    case actType.STORE_EDITOR_RESULT:
	      return state.set('result', action.payload);
	    case actType.CONFIGURE_CODEMIRROR:
	      return state.set('codemirrorOptions', action.payload);
	    default:
	      return state;
	  }
	}

	function loadApi() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState.get('loadApi') : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case actType.START_LOAD_RUNTIME:
	      return state.merge({ stage: constants.loadApiStages.STARTED, error: null });
	    case actType.FINISH_LOAD_RUNTIME:
	      return state.merge({ stage: constants.loadApiStages.FINISHED,
	        runtime: action.payload });
	    case actType.FAIL_LOAD_RUNTIME:
	      return state.merge({ stage: constants.loadApiStages.FAILED,
	        error: action.payload });
	    default:
	      return state;
	  }
	}

	function runCode() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState.get('runCode') : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case actType.STORE_SOURCE:
	      return state.set('source', action.payload);
	    case actType.START_PARSE:
	      return state.merge({ stage: constants.runtimeStages.PARSING, error: null });
	    case actType.FINISH_PARSE:
	      return state.merge({ stage: null, ast: action.payload });
	    case actType.FAIL_PARSE:
	      return state.merge({ stage: null, error: action.payload });
	    case actType.START_COMPILE:
	      return state.set('stage', constants.runtimeStages.COMPILING);
	    case actType.FINISH_COMPILE:
	      return state.merge({ stage: null, bytecode: action.payload });
	    case actType.FAIL_COMPILE:
	      return state.merge({ stage: null, error: action.payload });
	    case actType.START_EXECUTE:
	      return state.set('stage', constants.runtimeStages.EXECUTING);
	    case actType.FINISH_EXECUTE:
	      return state.merge({ stage: null, result: action.payload });
	    case actType.FAIL_EXECUTE:
	      return state.merge({ stage: null, error: action.payload });
	    case actType.STOP_RUN:
	      return state.set('stage', null);
	    case actType.PAUSE_RUN:
	      return state.set('pausing', true);
	    case actType.CLEAR_STATE:
	      return state.set({}, state.runCode); //should this be intialState?
	    default:
	      return state;
	  }
	}

	function googleDrive() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState.get('googleDrive') : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case actType.START_CONNECT_DRIVE:
	      return state.merge({
	        stage: constants.driveStages.connect.STARTED,
	        error: null
	      });
	    case actType.FINISH_CONNECT_DRIVE:
	      return state.merge({
	        stage: constants.driveStages.connect.FINISHED,
	        drive: action.payload
	      });
	    case actType.FAIL_CONNECT_DRIVE:
	      return state.merge({
	        stage: constants.driveStages.connect.FAILED,
	        error: action.payload
	      });
	    case actType.START_SAVE_DRIVE:
	      return state.merge({
	        stage: constants.driveStages.save.STARTED
	      });
	    case actType.FINISH_SAVE_DRIVE:
	      return state.merge({
	        stage: constants.driveStages.save.FINISHED,
	        save: action.payload
	      });
	    case actType.FAIL_SAVE_DRIVE:
	      return state.merge({
	        stage: constants.driveStages.save.FAILED,
	        error: action.payload
	      });
	    case actType.START_SHARE_DRIVE:
	      return state.merge({
	        stage: constants.driveStages.share.STARTED
	      });
	    case actType.FINISH_SHARE_DRIVE:
	      return state.merge({
	        stage: constants.driveStages.share.FINISHED,
	        share: action.payload
	      });
	    case actType.FAIL_SHARE_DRIVE:
	      return state.merge({
	        stage: constants.driveStages.share.FAILED,
	        error: action.payload
	      });
	    default:
	      return state;
	  }
	}

	function moreMenu() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState.get('moreMenu') : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case actType.EXPAND_MORE_MENU:
	      return state.set('expanded', true);
	    case actType.COLLAPSE_MORE_MENU:
	      return state.set('expanded', false);
	    case actType.INCREMENT_FONT_SIZE:
	      return state.set('fontSize', Math.min(constants.fontBoundary.max, state.get('fontSize') + 4));
	    case actType.DECREMENT_FONT_SIZE:
	      return state.set('fontSize', Math.max(constants.fontBoundary.min, state.get('fontSize') - 4));
	    default:
	      return state;
	  }
	}

	var pyretReducer = (0, _reduxImmutable.combineReducers)({
	  loadApi: loadApi,
	  runCode: runCode,
	  editor: editor,
	  REPL: REPL,
	  googleDrive: googleDrive,
	  moreMenu: moreMenu
	});

	exports.default = pyretReducer;

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.combineReducers = undefined;

	var _combineReducers = __webpack_require__(210);

	var _combineReducers2 = _interopRequireDefault(_combineReducers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.combineReducers = _combineReducers2.default;
	//# sourceMappingURL=index.js.map


/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _utilities = __webpack_require__(211);

	var _immutable = __webpack_require__(203);

	var _immutable2 = _interopRequireDefault(_immutable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* eslint-disable lodash3/prefer-lodash-method */

	exports.default = function (reducers) {
	    var reducerKeys = undefined;

	    reducerKeys = Object.keys(reducers);

	    return function (inputState, action) {
	        if (inputState === undefined) {
	            inputState = _immutable2.default.Map();
	        }

	        /* eslint-disable no-process-env */
	        if (false) {
	            /* eslint-enable no-process-env */
	            var warningMessage = undefined;

	            warningMessage = (0, _utilities.getUnexpectedInvocationParameterMessage)(inputState, reducers, action);

	            if (warningMessage) {
	                /* eslint-disable no-console */
	                console.error(warningMessage);
	                /* eslint-enable no-console */
	            }
	        }

	        return inputState.withMutations(function (temporaryState) {
	            reducerKeys.forEach(function (reducerName) {
	                var currentDomainState = undefined,
	                    nextDomainState = undefined,
	                    reducer = undefined;

	                reducer = reducers[reducerName];

	                currentDomainState = temporaryState.get(reducerName);

	                nextDomainState = reducer(currentDomainState, action);

	                (0, _utilities.validateNextState)(nextDomainState, reducerName, action);

	                temporaryState.set(reducerName, nextDomainState);
	            });
	        });
	    };
	};

	module.exports = exports['default'];
	//# sourceMappingURL=combineReducers.js.map


/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	'create index';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.validateNextState = exports.getUnexpectedInvocationParameterMessage = exports.getStateName = undefined;

	var _getStateName2 = __webpack_require__(212);

	var _getStateName3 = _interopRequireDefault(_getStateName2);

	var _getUnexpectedInvocationParameterMessage2 = __webpack_require__(213);

	var _getUnexpectedInvocationParameterMessage3 = _interopRequireDefault(_getUnexpectedInvocationParameterMessage2);

	var _validateNextState2 = __webpack_require__(214);

	var _validateNextState3 = _interopRequireDefault(_validateNextState2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.getStateName = _getStateName3.default;
	exports.getUnexpectedInvocationParameterMessage = _getUnexpectedInvocationParameterMessage3.default;
	exports.validateNextState = _validateNextState3.default;
	//# sourceMappingURL=index.js.map


/***/ },
/* 212 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (action) {
	    return action && action.type === '@@redux/INIT' ? 'initialState argument passed to createStore' : 'previous state received by the reducer';
	};

	module.exports = exports['default'];
	//# sourceMappingURL=getStateName.js.map


/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _immutable = __webpack_require__(203);

	var _immutable2 = _interopRequireDefault(_immutable);

	var _getStateName = __webpack_require__(212);

	var _getStateName2 = _interopRequireDefault(_getStateName);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* eslint-disable lodash3/prefer-lodash-method */

	exports.default = function (state, reducers, action) {
	    var reducerNames = Object.keys(reducers);

	    if (!reducerNames.length) {
	        return 'Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.';
	    }

	    var stateName = (0, _getStateName2.default)(action);

	    if (!_immutable2.default.Iterable.isIterable(state)) {
	        return 'The ' + stateName + ' is of unexpected type. Expected argument to be an instance of Immutable.Iterable with the following properties: "' + reducerNames.join('", "') + '".';
	    }

	    var unexpectedStatePropertyNames = state.keySeq().toArray().filter(function (name) {
	        return !reducers.hasOwnProperty(name);
	    });

	    if (unexpectedStatePropertyNames.length > 0) {
	        return 'Unexpected ' + (unexpectedStatePropertyNames.length === 1 ? 'property' : 'properties') + ' "' + unexpectedStatePropertyNames.join('", "') + '" found in ' + stateName + '. Expected to find one of the known reducer property names instead: "' + reducerNames.join('", "') + '". Unexpected properties will be ignored.';
	    }

	    return null;
	};

	module.exports = exports['default'];
	//# sourceMappingURL=getUnexpectedInvocationParameterMessage.js.map


/***/ },
/* 214 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (nextState, reducerName, action) {
	    if (typeof nextState === 'undefined') {
	        throw new Error('Reducer "' + reducerName + '" returned undefined when handling "' + action.type + '" action. To ignore an action, you must explicitly return the previous state.');
	    }

	    return null;
	};

	module.exports = exports['default'];
	//# sourceMappingURL=validateNextState.js.map


/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(216);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(193)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./../../less-loader/index.js!./bootstrap.less", function() {
				var newContent = require("!!./../../css-loader/index.js!./../../less-loader/index.js!./bootstrap.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(192)();
	// imports


	// module
	exports.push([module.id, "/*!\n * Bootstrap v3.3.6 (http://getbootstrap.com)\n * Copyright 2011-2015 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\nhtml {\n  font-family: sans-serif;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\nbody {\n  margin: 0;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  vertical-align: baseline;\n}\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n[hidden],\ntemplate {\n  display: none;\n}\na {\n  background-color: transparent;\n}\na:active,\na:hover {\n  outline: 0;\n}\nabbr[title] {\n  border-bottom: 1px dotted;\n}\nb,\nstrong {\n  font-weight: bold;\n}\ndfn {\n  font-style: italic;\n}\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\nmark {\n  background: #ff0;\n  color: #000;\n}\nsmall {\n  font-size: 80%;\n}\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsup {\n  top: -0.5em;\n}\nsub {\n  bottom: -0.25em;\n}\nimg {\n  border: 0;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\nfigure {\n  margin: 1em 40px;\n}\nhr {\n  box-sizing: content-box;\n  height: 0;\n}\npre {\n  overflow: auto;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  font: inherit;\n  margin: 0;\n}\nbutton {\n  overflow: visible;\n}\nbutton,\nselect {\n  text-transform: none;\n}\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer;\n}\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\ninput {\n  line-height: normal;\n}\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  padding: 0;\n}\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  box-sizing: content-box;\n}\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\nlegend {\n  border: 0;\n  padding: 0;\n}\ntextarea {\n  overflow: auto;\n}\noptgroup {\n  font-weight: bold;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ntd,\nth {\n  padding: 0;\n}\n/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */\n@media print {\n  *,\n  *:before,\n  *:after {\n    background: transparent !important;\n    color: #000 !important;\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n  a[href]:after {\n    content: \" (\" attr(href) \")\";\n  }\n  abbr[title]:after {\n    content: \" (\" attr(title) \")\";\n  }\n  a[href^=\"#\"]:after,\n  a[href^=\"javascript:\"]:after {\n    content: \"\";\n  }\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n  thead {\n    display: table-header-group;\n  }\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n  img {\n    max-width: 100% !important;\n  }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n  .navbar {\n    display: none;\n  }\n  .btn > .caret,\n  .dropup > .btn > .caret {\n    border-top-color: #000 !important;\n  }\n  .label {\n    border: 1px solid #000;\n  }\n  .table {\n    border-collapse: collapse !important;\n  }\n  .table td,\n  .table th {\n    background-color: #fff !important;\n  }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #ddd !important;\n  }\n}\n@font-face {\n  font-family: 'Glyphicons Halflings';\n  src: url(" + __webpack_require__(217) + ");\n  src: url(" + __webpack_require__(217) + "?#iefix) format('embedded-opentype'), url(" + __webpack_require__(218) + ") format('woff2'), url(" + __webpack_require__(219) + ") format('woff'), url(" + __webpack_require__(220) + ") format('truetype'), url(" + __webpack_require__(221) + "#glyphicons_halflingsregular) format('svg');\n}\n.glyphicon {\n  position: relative;\n  top: 1px;\n  display: inline-block;\n  font-family: 'Glyphicons Halflings';\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.glyphicon-asterisk:before {\n  content: \"*\";\n}\n.glyphicon-plus:before {\n  content: \"+\";\n}\n.glyphicon-euro:before,\n.glyphicon-eur:before {\n  content: \"\\20AC\";\n}\n.glyphicon-minus:before {\n  content: \"\\2212\";\n}\n.glyphicon-cloud:before {\n  content: \"\\2601\";\n}\n.glyphicon-envelope:before {\n  content: \"\\2709\";\n}\n.glyphicon-pencil:before {\n  content: \"\\270F\";\n}\n.glyphicon-glass:before {\n  content: \"\\E001\";\n}\n.glyphicon-music:before {\n  content: \"\\E002\";\n}\n.glyphicon-search:before {\n  content: \"\\E003\";\n}\n.glyphicon-heart:before {\n  content: \"\\E005\";\n}\n.glyphicon-star:before {\n  content: \"\\E006\";\n}\n.glyphicon-star-empty:before {\n  content: \"\\E007\";\n}\n.glyphicon-user:before {\n  content: \"\\E008\";\n}\n.glyphicon-film:before {\n  content: \"\\E009\";\n}\n.glyphicon-th-large:before {\n  content: \"\\E010\";\n}\n.glyphicon-th:before {\n  content: \"\\E011\";\n}\n.glyphicon-th-list:before {\n  content: \"\\E012\";\n}\n.glyphicon-ok:before {\n  content: \"\\E013\";\n}\n.glyphicon-remove:before {\n  content: \"\\E014\";\n}\n.glyphicon-zoom-in:before {\n  content: \"\\E015\";\n}\n.glyphicon-zoom-out:before {\n  content: \"\\E016\";\n}\n.glyphicon-off:before {\n  content: \"\\E017\";\n}\n.glyphicon-signal:before {\n  content: \"\\E018\";\n}\n.glyphicon-cog:before {\n  content: \"\\E019\";\n}\n.glyphicon-trash:before {\n  content: \"\\E020\";\n}\n.glyphicon-home:before {\n  content: \"\\E021\";\n}\n.glyphicon-file:before {\n  content: \"\\E022\";\n}\n.glyphicon-time:before {\n  content: \"\\E023\";\n}\n.glyphicon-road:before {\n  content: \"\\E024\";\n}\n.glyphicon-download-alt:before {\n  content: \"\\E025\";\n}\n.glyphicon-download:before {\n  content: \"\\E026\";\n}\n.glyphicon-upload:before {\n  content: \"\\E027\";\n}\n.glyphicon-inbox:before {\n  content: \"\\E028\";\n}\n.glyphicon-play-circle:before {\n  content: \"\\E029\";\n}\n.glyphicon-repeat:before {\n  content: \"\\E030\";\n}\n.glyphicon-refresh:before {\n  content: \"\\E031\";\n}\n.glyphicon-list-alt:before {\n  content: \"\\E032\";\n}\n.glyphicon-lock:before {\n  content: \"\\E033\";\n}\n.glyphicon-flag:before {\n  content: \"\\E034\";\n}\n.glyphicon-headphones:before {\n  content: \"\\E035\";\n}\n.glyphicon-volume-off:before {\n  content: \"\\E036\";\n}\n.glyphicon-volume-down:before {\n  content: \"\\E037\";\n}\n.glyphicon-volume-up:before {\n  content: \"\\E038\";\n}\n.glyphicon-qrcode:before {\n  content: \"\\E039\";\n}\n.glyphicon-barcode:before {\n  content: \"\\E040\";\n}\n.glyphicon-tag:before {\n  content: \"\\E041\";\n}\n.glyphicon-tags:before {\n  content: \"\\E042\";\n}\n.glyphicon-book:before {\n  content: \"\\E043\";\n}\n.glyphicon-bookmark:before {\n  content: \"\\E044\";\n}\n.glyphicon-print:before {\n  content: \"\\E045\";\n}\n.glyphicon-camera:before {\n  content: \"\\E046\";\n}\n.glyphicon-font:before {\n  content: \"\\E047\";\n}\n.glyphicon-bold:before {\n  content: \"\\E048\";\n}\n.glyphicon-italic:before {\n  content: \"\\E049\";\n}\n.glyphicon-text-height:before {\n  content: \"\\E050\";\n}\n.glyphicon-text-width:before {\n  content: \"\\E051\";\n}\n.glyphicon-align-left:before {\n  content: \"\\E052\";\n}\n.glyphicon-align-center:before {\n  content: \"\\E053\";\n}\n.glyphicon-align-right:before {\n  content: \"\\E054\";\n}\n.glyphicon-align-justify:before {\n  content: \"\\E055\";\n}\n.glyphicon-list:before {\n  content: \"\\E056\";\n}\n.glyphicon-indent-left:before {\n  content: \"\\E057\";\n}\n.glyphicon-indent-right:before {\n  content: \"\\E058\";\n}\n.glyphicon-facetime-video:before {\n  content: \"\\E059\";\n}\n.glyphicon-picture:before {\n  content: \"\\E060\";\n}\n.glyphicon-map-marker:before {\n  content: \"\\E062\";\n}\n.glyphicon-adjust:before {\n  content: \"\\E063\";\n}\n.glyphicon-tint:before {\n  content: \"\\E064\";\n}\n.glyphicon-edit:before {\n  content: \"\\E065\";\n}\n.glyphicon-share:before {\n  content: \"\\E066\";\n}\n.glyphicon-check:before {\n  content: \"\\E067\";\n}\n.glyphicon-move:before {\n  content: \"\\E068\";\n}\n.glyphicon-step-backward:before {\n  content: \"\\E069\";\n}\n.glyphicon-fast-backward:before {\n  content: \"\\E070\";\n}\n.glyphicon-backward:before {\n  content: \"\\E071\";\n}\n.glyphicon-play:before {\n  content: \"\\E072\";\n}\n.glyphicon-pause:before {\n  content: \"\\E073\";\n}\n.glyphicon-stop:before {\n  content: \"\\E074\";\n}\n.glyphicon-forward:before {\n  content: \"\\E075\";\n}\n.glyphicon-fast-forward:before {\n  content: \"\\E076\";\n}\n.glyphicon-step-forward:before {\n  content: \"\\E077\";\n}\n.glyphicon-eject:before {\n  content: \"\\E078\";\n}\n.glyphicon-chevron-left:before {\n  content: \"\\E079\";\n}\n.glyphicon-chevron-right:before {\n  content: \"\\E080\";\n}\n.glyphicon-plus-sign:before {\n  content: \"\\E081\";\n}\n.glyphicon-minus-sign:before {\n  content: \"\\E082\";\n}\n.glyphicon-remove-sign:before {\n  content: \"\\E083\";\n}\n.glyphicon-ok-sign:before {\n  content: \"\\E084\";\n}\n.glyphicon-question-sign:before {\n  content: \"\\E085\";\n}\n.glyphicon-info-sign:before {\n  content: \"\\E086\";\n}\n.glyphicon-screenshot:before {\n  content: \"\\E087\";\n}\n.glyphicon-remove-circle:before {\n  content: \"\\E088\";\n}\n.glyphicon-ok-circle:before {\n  content: \"\\E089\";\n}\n.glyphicon-ban-circle:before {\n  content: \"\\E090\";\n}\n.glyphicon-arrow-left:before {\n  content: \"\\E091\";\n}\n.glyphicon-arrow-right:before {\n  content: \"\\E092\";\n}\n.glyphicon-arrow-up:before {\n  content: \"\\E093\";\n}\n.glyphicon-arrow-down:before {\n  content: \"\\E094\";\n}\n.glyphicon-share-alt:before {\n  content: \"\\E095\";\n}\n.glyphicon-resize-full:before {\n  content: \"\\E096\";\n}\n.glyphicon-resize-small:before {\n  content: \"\\E097\";\n}\n.glyphicon-exclamation-sign:before {\n  content: \"\\E101\";\n}\n.glyphicon-gift:before {\n  content: \"\\E102\";\n}\n.glyphicon-leaf:before {\n  content: \"\\E103\";\n}\n.glyphicon-fire:before {\n  content: \"\\E104\";\n}\n.glyphicon-eye-open:before {\n  content: \"\\E105\";\n}\n.glyphicon-eye-close:before {\n  content: \"\\E106\";\n}\n.glyphicon-warning-sign:before {\n  content: \"\\E107\";\n}\n.glyphicon-plane:before {\n  content: \"\\E108\";\n}\n.glyphicon-calendar:before {\n  content: \"\\E109\";\n}\n.glyphicon-random:before {\n  content: \"\\E110\";\n}\n.glyphicon-comment:before {\n  content: \"\\E111\";\n}\n.glyphicon-magnet:before {\n  content: \"\\E112\";\n}\n.glyphicon-chevron-up:before {\n  content: \"\\E113\";\n}\n.glyphicon-chevron-down:before {\n  content: \"\\E114\";\n}\n.glyphicon-retweet:before {\n  content: \"\\E115\";\n}\n.glyphicon-shopping-cart:before {\n  content: \"\\E116\";\n}\n.glyphicon-folder-close:before {\n  content: \"\\E117\";\n}\n.glyphicon-folder-open:before {\n  content: \"\\E118\";\n}\n.glyphicon-resize-vertical:before {\n  content: \"\\E119\";\n}\n.glyphicon-resize-horizontal:before {\n  content: \"\\E120\";\n}\n.glyphicon-hdd:before {\n  content: \"\\E121\";\n}\n.glyphicon-bullhorn:before {\n  content: \"\\E122\";\n}\n.glyphicon-bell:before {\n  content: \"\\E123\";\n}\n.glyphicon-certificate:before {\n  content: \"\\E124\";\n}\n.glyphicon-thumbs-up:before {\n  content: \"\\E125\";\n}\n.glyphicon-thumbs-down:before {\n  content: \"\\E126\";\n}\n.glyphicon-hand-right:before {\n  content: \"\\E127\";\n}\n.glyphicon-hand-left:before {\n  content: \"\\E128\";\n}\n.glyphicon-hand-up:before {\n  content: \"\\E129\";\n}\n.glyphicon-hand-down:before {\n  content: \"\\E130\";\n}\n.glyphicon-circle-arrow-right:before {\n  content: \"\\E131\";\n}\n.glyphicon-circle-arrow-left:before {\n  content: \"\\E132\";\n}\n.glyphicon-circle-arrow-up:before {\n  content: \"\\E133\";\n}\n.glyphicon-circle-arrow-down:before {\n  content: \"\\E134\";\n}\n.glyphicon-globe:before {\n  content: \"\\E135\";\n}\n.glyphicon-wrench:before {\n  content: \"\\E136\";\n}\n.glyphicon-tasks:before {\n  content: \"\\E137\";\n}\n.glyphicon-filter:before {\n  content: \"\\E138\";\n}\n.glyphicon-briefcase:before {\n  content: \"\\E139\";\n}\n.glyphicon-fullscreen:before {\n  content: \"\\E140\";\n}\n.glyphicon-dashboard:before {\n  content: \"\\E141\";\n}\n.glyphicon-paperclip:before {\n  content: \"\\E142\";\n}\n.glyphicon-heart-empty:before {\n  content: \"\\E143\";\n}\n.glyphicon-link:before {\n  content: \"\\E144\";\n}\n.glyphicon-phone:before {\n  content: \"\\E145\";\n}\n.glyphicon-pushpin:before {\n  content: \"\\E146\";\n}\n.glyphicon-usd:before {\n  content: \"\\E148\";\n}\n.glyphicon-gbp:before {\n  content: \"\\E149\";\n}\n.glyphicon-sort:before {\n  content: \"\\E150\";\n}\n.glyphicon-sort-by-alphabet:before {\n  content: \"\\E151\";\n}\n.glyphicon-sort-by-alphabet-alt:before {\n  content: \"\\E152\";\n}\n.glyphicon-sort-by-order:before {\n  content: \"\\E153\";\n}\n.glyphicon-sort-by-order-alt:before {\n  content: \"\\E154\";\n}\n.glyphicon-sort-by-attributes:before {\n  content: \"\\E155\";\n}\n.glyphicon-sort-by-attributes-alt:before {\n  content: \"\\E156\";\n}\n.glyphicon-unchecked:before {\n  content: \"\\E157\";\n}\n.glyphicon-expand:before {\n  content: \"\\E158\";\n}\n.glyphicon-collapse-down:before {\n  content: \"\\E159\";\n}\n.glyphicon-collapse-up:before {\n  content: \"\\E160\";\n}\n.glyphicon-log-in:before {\n  content: \"\\E161\";\n}\n.glyphicon-flash:before {\n  content: \"\\E162\";\n}\n.glyphicon-log-out:before {\n  content: \"\\E163\";\n}\n.glyphicon-new-window:before {\n  content: \"\\E164\";\n}\n.glyphicon-record:before {\n  content: \"\\E165\";\n}\n.glyphicon-save:before {\n  content: \"\\E166\";\n}\n.glyphicon-open:before {\n  content: \"\\E167\";\n}\n.glyphicon-saved:before {\n  content: \"\\E168\";\n}\n.glyphicon-import:before {\n  content: \"\\E169\";\n}\n.glyphicon-export:before {\n  content: \"\\E170\";\n}\n.glyphicon-send:before {\n  content: \"\\E171\";\n}\n.glyphicon-floppy-disk:before {\n  content: \"\\E172\";\n}\n.glyphicon-floppy-saved:before {\n  content: \"\\E173\";\n}\n.glyphicon-floppy-remove:before {\n  content: \"\\E174\";\n}\n.glyphicon-floppy-save:before {\n  content: \"\\E175\";\n}\n.glyphicon-floppy-open:before {\n  content: \"\\E176\";\n}\n.glyphicon-credit-card:before {\n  content: \"\\E177\";\n}\n.glyphicon-transfer:before {\n  content: \"\\E178\";\n}\n.glyphicon-cutlery:before {\n  content: \"\\E179\";\n}\n.glyphicon-header:before {\n  content: \"\\E180\";\n}\n.glyphicon-compressed:before {\n  content: \"\\E181\";\n}\n.glyphicon-earphone:before {\n  content: \"\\E182\";\n}\n.glyphicon-phone-alt:before {\n  content: \"\\E183\";\n}\n.glyphicon-tower:before {\n  content: \"\\E184\";\n}\n.glyphicon-stats:before {\n  content: \"\\E185\";\n}\n.glyphicon-sd-video:before {\n  content: \"\\E186\";\n}\n.glyphicon-hd-video:before {\n  content: \"\\E187\";\n}\n.glyphicon-subtitles:before {\n  content: \"\\E188\";\n}\n.glyphicon-sound-stereo:before {\n  content: \"\\E189\";\n}\n.glyphicon-sound-dolby:before {\n  content: \"\\E190\";\n}\n.glyphicon-sound-5-1:before {\n  content: \"\\E191\";\n}\n.glyphicon-sound-6-1:before {\n  content: \"\\E192\";\n}\n.glyphicon-sound-7-1:before {\n  content: \"\\E193\";\n}\n.glyphicon-copyright-mark:before {\n  content: \"\\E194\";\n}\n.glyphicon-registration-mark:before {\n  content: \"\\E195\";\n}\n.glyphicon-cloud-download:before {\n  content: \"\\E197\";\n}\n.glyphicon-cloud-upload:before {\n  content: \"\\E198\";\n}\n.glyphicon-tree-conifer:before {\n  content: \"\\E199\";\n}\n.glyphicon-tree-deciduous:before {\n  content: \"\\E200\";\n}\n.glyphicon-cd:before {\n  content: \"\\E201\";\n}\n.glyphicon-save-file:before {\n  content: \"\\E202\";\n}\n.glyphicon-open-file:before {\n  content: \"\\E203\";\n}\n.glyphicon-level-up:before {\n  content: \"\\E204\";\n}\n.glyphicon-copy:before {\n  content: \"\\E205\";\n}\n.glyphicon-paste:before {\n  content: \"\\E206\";\n}\n.glyphicon-alert:before {\n  content: \"\\E209\";\n}\n.glyphicon-equalizer:before {\n  content: \"\\E210\";\n}\n.glyphicon-king:before {\n  content: \"\\E211\";\n}\n.glyphicon-queen:before {\n  content: \"\\E212\";\n}\n.glyphicon-pawn:before {\n  content: \"\\E213\";\n}\n.glyphicon-bishop:before {\n  content: \"\\E214\";\n}\n.glyphicon-knight:before {\n  content: \"\\E215\";\n}\n.glyphicon-baby-formula:before {\n  content: \"\\E216\";\n}\n.glyphicon-tent:before {\n  content: \"\\26FA\";\n}\n.glyphicon-blackboard:before {\n  content: \"\\E218\";\n}\n.glyphicon-bed:before {\n  content: \"\\E219\";\n}\n.glyphicon-apple:before {\n  content: \"\\F8FF\";\n}\n.glyphicon-erase:before {\n  content: \"\\E221\";\n}\n.glyphicon-hourglass:before {\n  content: \"\\231B\";\n}\n.glyphicon-lamp:before {\n  content: \"\\E223\";\n}\n.glyphicon-duplicate:before {\n  content: \"\\E224\";\n}\n.glyphicon-piggy-bank:before {\n  content: \"\\E225\";\n}\n.glyphicon-scissors:before {\n  content: \"\\E226\";\n}\n.glyphicon-bitcoin:before {\n  content: \"\\E227\";\n}\n.glyphicon-btc:before {\n  content: \"\\E227\";\n}\n.glyphicon-xbt:before {\n  content: \"\\E227\";\n}\n.glyphicon-yen:before {\n  content: \"\\A5\";\n}\n.glyphicon-jpy:before {\n  content: \"\\A5\";\n}\n.glyphicon-ruble:before {\n  content: \"\\20BD\";\n}\n.glyphicon-rub:before {\n  content: \"\\20BD\";\n}\n.glyphicon-scale:before {\n  content: \"\\E230\";\n}\n.glyphicon-ice-lolly:before {\n  content: \"\\E231\";\n}\n.glyphicon-ice-lolly-tasted:before {\n  content: \"\\E232\";\n}\n.glyphicon-education:before {\n  content: \"\\E233\";\n}\n.glyphicon-option-horizontal:before {\n  content: \"\\E234\";\n}\n.glyphicon-option-vertical:before {\n  content: \"\\E235\";\n}\n.glyphicon-menu-hamburger:before {\n  content: \"\\E236\";\n}\n.glyphicon-modal-window:before {\n  content: \"\\E237\";\n}\n.glyphicon-oil:before {\n  content: \"\\E238\";\n}\n.glyphicon-grain:before {\n  content: \"\\E239\";\n}\n.glyphicon-sunglasses:before {\n  content: \"\\E240\";\n}\n.glyphicon-text-size:before {\n  content: \"\\E241\";\n}\n.glyphicon-text-color:before {\n  content: \"\\E242\";\n}\n.glyphicon-text-background:before {\n  content: \"\\E243\";\n}\n.glyphicon-object-align-top:before {\n  content: \"\\E244\";\n}\n.glyphicon-object-align-bottom:before {\n  content: \"\\E245\";\n}\n.glyphicon-object-align-horizontal:before {\n  content: \"\\E246\";\n}\n.glyphicon-object-align-left:before {\n  content: \"\\E247\";\n}\n.glyphicon-object-align-vertical:before {\n  content: \"\\E248\";\n}\n.glyphicon-object-align-right:before {\n  content: \"\\E249\";\n}\n.glyphicon-triangle-right:before {\n  content: \"\\E250\";\n}\n.glyphicon-triangle-left:before {\n  content: \"\\E251\";\n}\n.glyphicon-triangle-bottom:before {\n  content: \"\\E252\";\n}\n.glyphicon-triangle-top:before {\n  content: \"\\E253\";\n}\n.glyphicon-console:before {\n  content: \"\\E254\";\n}\n.glyphicon-superscript:before {\n  content: \"\\E255\";\n}\n.glyphicon-subscript:before {\n  content: \"\\E256\";\n}\n.glyphicon-menu-left:before {\n  content: \"\\E257\";\n}\n.glyphicon-menu-right:before {\n  content: \"\\E258\";\n}\n.glyphicon-menu-down:before {\n  content: \"\\E259\";\n}\n.glyphicon-menu-up:before {\n  content: \"\\E260\";\n}\n* {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n*:before,\n*:after {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\nhtml {\n  font-size: 10px;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\nbody {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #333333;\n  background-color: #fff;\n}\ninput,\nbutton,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\na {\n  color: #337ab7;\n  text-decoration: none;\n}\na:hover,\na:focus {\n  color: #23527c;\n  text-decoration: underline;\n}\na:focus {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\nfigure {\n  margin: 0;\n}\nimg {\n  vertical-align: middle;\n}\n.img-responsive,\n.thumbnail > img,\n.thumbnail a > img,\n.carousel-inner > .item > img,\n.carousel-inner > .item > a > img {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n.img-rounded {\n  border-radius: 6px;\n}\n.img-thumbnail {\n  padding: 4px;\n  line-height: 1.42857143;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  -webkit-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  display: inline-block;\n  max-width: 100%;\n  height: auto;\n}\n.img-circle {\n  border-radius: 50%;\n}\nhr {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border: 0;\n  border-top: 1px solid #eeeeee;\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.sr-only-focusable:active,\n.sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}\n[role=\"button\"] {\n  cursor: pointer;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\n.h1,\n.h2,\n.h3,\n.h4,\n.h5,\n.h6 {\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit;\n}\nh1 small,\nh2 small,\nh3 small,\nh4 small,\nh5 small,\nh6 small,\n.h1 small,\n.h2 small,\n.h3 small,\n.h4 small,\n.h5 small,\n.h6 small,\nh1 .small,\nh2 .small,\nh3 .small,\nh4 .small,\nh5 .small,\nh6 .small,\n.h1 .small,\n.h2 .small,\n.h3 .small,\n.h4 .small,\n.h5 .small,\n.h6 .small {\n  font-weight: normal;\n  line-height: 1;\n  color: #777777;\n}\nh1,\n.h1,\nh2,\n.h2,\nh3,\n.h3 {\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\nh1 small,\n.h1 small,\nh2 small,\n.h2 small,\nh3 small,\n.h3 small,\nh1 .small,\n.h1 .small,\nh2 .small,\n.h2 .small,\nh3 .small,\n.h3 .small {\n  font-size: 65%;\n}\nh4,\n.h4,\nh5,\n.h5,\nh6,\n.h6 {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\nh4 small,\n.h4 small,\nh5 small,\n.h5 small,\nh6 small,\n.h6 small,\nh4 .small,\n.h4 .small,\nh5 .small,\n.h5 .small,\nh6 .small,\n.h6 .small {\n  font-size: 75%;\n}\nh1,\n.h1 {\n  font-size: 36px;\n}\nh2,\n.h2 {\n  font-size: 30px;\n}\nh3,\n.h3 {\n  font-size: 24px;\n}\nh4,\n.h4 {\n  font-size: 18px;\n}\nh5,\n.h5 {\n  font-size: 14px;\n}\nh6,\n.h6 {\n  font-size: 12px;\n}\np {\n  margin: 0 0 10px;\n}\n.lead {\n  margin-bottom: 20px;\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 1.4;\n}\n@media (min-width: 768px) {\n  .lead {\n    font-size: 21px;\n  }\n}\nsmall,\n.small {\n  font-size: 85%;\n}\nmark,\n.mark {\n  background-color: #fcf8e3;\n  padding: .2em;\n}\n.text-left {\n  text-align: left;\n}\n.text-right {\n  text-align: right;\n}\n.text-center {\n  text-align: center;\n}\n.text-justify {\n  text-align: justify;\n}\n.text-nowrap {\n  white-space: nowrap;\n}\n.text-lowercase {\n  text-transform: lowercase;\n}\n.text-uppercase {\n  text-transform: uppercase;\n}\n.text-capitalize {\n  text-transform: capitalize;\n}\n.text-muted {\n  color: #777777;\n}\n.text-primary {\n  color: #337ab7;\n}\na.text-primary:hover,\na.text-primary:focus {\n  color: #286090;\n}\n.text-success {\n  color: #3c763d;\n}\na.text-success:hover,\na.text-success:focus {\n  color: #2b542c;\n}\n.text-info {\n  color: #31708f;\n}\na.text-info:hover,\na.text-info:focus {\n  color: #245269;\n}\n.text-warning {\n  color: #8a6d3b;\n}\na.text-warning:hover,\na.text-warning:focus {\n  color: #66512c;\n}\n.text-danger {\n  color: #a94442;\n}\na.text-danger:hover,\na.text-danger:focus {\n  color: #843534;\n}\n.bg-primary {\n  color: #fff;\n  background-color: #337ab7;\n}\na.bg-primary:hover,\na.bg-primary:focus {\n  background-color: #286090;\n}\n.bg-success {\n  background-color: #dff0d8;\n}\na.bg-success:hover,\na.bg-success:focus {\n  background-color: #c1e2b3;\n}\n.bg-info {\n  background-color: #d9edf7;\n}\na.bg-info:hover,\na.bg-info:focus {\n  background-color: #afd9ee;\n}\n.bg-warning {\n  background-color: #fcf8e3;\n}\na.bg-warning:hover,\na.bg-warning:focus {\n  background-color: #f7ecb5;\n}\n.bg-danger {\n  background-color: #f2dede;\n}\na.bg-danger:hover,\na.bg-danger:focus {\n  background-color: #e4b9b9;\n}\n.page-header {\n  padding-bottom: 9px;\n  margin: 40px 0 20px;\n  border-bottom: 1px solid #eeeeee;\n}\nul,\nol {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\nul ul,\nol ul,\nul ol,\nol ol {\n  margin-bottom: 0;\n}\n.list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n.list-inline {\n  padding-left: 0;\n  list-style: none;\n  margin-left: -5px;\n}\n.list-inline > li {\n  display: inline-block;\n  padding-left: 5px;\n  padding-right: 5px;\n}\ndl {\n  margin-top: 0;\n  margin-bottom: 20px;\n}\ndt,\ndd {\n  line-height: 1.42857143;\n}\ndt {\n  font-weight: bold;\n}\ndd {\n  margin-left: 0;\n}\n@media (min-width: 768px) {\n  .dl-horizontal dt {\n    float: left;\n    width: 160px;\n    clear: left;\n    text-align: right;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .dl-horizontal dd {\n    margin-left: 180px;\n  }\n}\nabbr[title],\nabbr[data-original-title] {\n  cursor: help;\n  border-bottom: 1px dotted #777777;\n}\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase;\n}\nblockquote {\n  padding: 10px 20px;\n  margin: 0 0 20px;\n  font-size: 17.5px;\n  border-left: 5px solid #eeeeee;\n}\nblockquote p:last-child,\nblockquote ul:last-child,\nblockquote ol:last-child {\n  margin-bottom: 0;\n}\nblockquote footer,\nblockquote small,\nblockquote .small {\n  display: block;\n  font-size: 80%;\n  line-height: 1.42857143;\n  color: #777777;\n}\nblockquote footer:before,\nblockquote small:before,\nblockquote .small:before {\n  content: '\\2014   \\A0';\n}\n.blockquote-reverse,\nblockquote.pull-right {\n  padding-right: 15px;\n  padding-left: 0;\n  border-right: 5px solid #eeeeee;\n  border-left: 0;\n  text-align: right;\n}\n.blockquote-reverse footer:before,\nblockquote.pull-right footer:before,\n.blockquote-reverse small:before,\nblockquote.pull-right small:before,\n.blockquote-reverse .small:before,\nblockquote.pull-right .small:before {\n  content: '';\n}\n.blockquote-reverse footer:after,\nblockquote.pull-right footer:after,\n.blockquote-reverse small:after,\nblockquote.pull-right small:after,\n.blockquote-reverse .small:after,\nblockquote.pull-right .small:after {\n  content: '\\A0   \\2014';\n}\naddress {\n  margin-bottom: 20px;\n  font-style: normal;\n  line-height: 1.42857143;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace;\n}\ncode {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #c7254e;\n  background-color: #f9f2f4;\n  border-radius: 4px;\n}\nkbd {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #fff;\n  background-color: #333;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25);\n}\nkbd kbd {\n  padding: 0;\n  font-size: 100%;\n  font-weight: bold;\n  box-shadow: none;\n}\npre {\n  display: block;\n  padding: 9.5px;\n  margin: 0 0 10px;\n  font-size: 13px;\n  line-height: 1.42857143;\n  word-break: break-all;\n  word-wrap: break-word;\n  color: #333333;\n  background-color: #f5f5f5;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\npre code {\n  padding: 0;\n  font-size: inherit;\n  color: inherit;\n  white-space: pre-wrap;\n  background-color: transparent;\n  border-radius: 0;\n}\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll;\n}\n.container {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n@media (min-width: 768px) {\n  .container {\n    width: 750px;\n  }\n}\n@media (min-width: 992px) {\n  .container {\n    width: 970px;\n  }\n}\n@media (min-width: 1200px) {\n  .container {\n    width: 1170px;\n  }\n}\n.container-fluid {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.row {\n  margin-left: -15px;\n  margin-right: -15px;\n}\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left;\n}\n.col-xs-12 {\n  width: 100%;\n}\n.col-xs-11 {\n  width: 91.66666667%;\n}\n.col-xs-10 {\n  width: 83.33333333%;\n}\n.col-xs-9 {\n  width: 75%;\n}\n.col-xs-8 {\n  width: 66.66666667%;\n}\n.col-xs-7 {\n  width: 58.33333333%;\n}\n.col-xs-6 {\n  width: 50%;\n}\n.col-xs-5 {\n  width: 41.66666667%;\n}\n.col-xs-4 {\n  width: 33.33333333%;\n}\n.col-xs-3 {\n  width: 25%;\n}\n.col-xs-2 {\n  width: 16.66666667%;\n}\n.col-xs-1 {\n  width: 8.33333333%;\n}\n.col-xs-pull-12 {\n  right: 100%;\n}\n.col-xs-pull-11 {\n  right: 91.66666667%;\n}\n.col-xs-pull-10 {\n  right: 83.33333333%;\n}\n.col-xs-pull-9 {\n  right: 75%;\n}\n.col-xs-pull-8 {\n  right: 66.66666667%;\n}\n.col-xs-pull-7 {\n  right: 58.33333333%;\n}\n.col-xs-pull-6 {\n  right: 50%;\n}\n.col-xs-pull-5 {\n  right: 41.66666667%;\n}\n.col-xs-pull-4 {\n  right: 33.33333333%;\n}\n.col-xs-pull-3 {\n  right: 25%;\n}\n.col-xs-pull-2 {\n  right: 16.66666667%;\n}\n.col-xs-pull-1 {\n  right: 8.33333333%;\n}\n.col-xs-pull-0 {\n  right: auto;\n}\n.col-xs-push-12 {\n  left: 100%;\n}\n.col-xs-push-11 {\n  left: 91.66666667%;\n}\n.col-xs-push-10 {\n  left: 83.33333333%;\n}\n.col-xs-push-9 {\n  left: 75%;\n}\n.col-xs-push-8 {\n  left: 66.66666667%;\n}\n.col-xs-push-7 {\n  left: 58.33333333%;\n}\n.col-xs-push-6 {\n  left: 50%;\n}\n.col-xs-push-5 {\n  left: 41.66666667%;\n}\n.col-xs-push-4 {\n  left: 33.33333333%;\n}\n.col-xs-push-3 {\n  left: 25%;\n}\n.col-xs-push-2 {\n  left: 16.66666667%;\n}\n.col-xs-push-1 {\n  left: 8.33333333%;\n}\n.col-xs-push-0 {\n  left: auto;\n}\n.col-xs-offset-12 {\n  margin-left: 100%;\n}\n.col-xs-offset-11 {\n  margin-left: 91.66666667%;\n}\n.col-xs-offset-10 {\n  margin-left: 83.33333333%;\n}\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n.col-xs-offset-8 {\n  margin-left: 66.66666667%;\n}\n.col-xs-offset-7 {\n  margin-left: 58.33333333%;\n}\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n.col-xs-offset-5 {\n  margin-left: 41.66666667%;\n}\n.col-xs-offset-4 {\n  margin-left: 33.33333333%;\n}\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n.col-xs-offset-2 {\n  margin-left: 16.66666667%;\n}\n.col-xs-offset-1 {\n  margin-left: 8.33333333%;\n}\n.col-xs-offset-0 {\n  margin-left: 0%;\n}\n@media (min-width: 768px) {\n  .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {\n    float: left;\n  }\n  .col-sm-12 {\n    width: 100%;\n  }\n  .col-sm-11 {\n    width: 91.66666667%;\n  }\n  .col-sm-10 {\n    width: 83.33333333%;\n  }\n  .col-sm-9 {\n    width: 75%;\n  }\n  .col-sm-8 {\n    width: 66.66666667%;\n  }\n  .col-sm-7 {\n    width: 58.33333333%;\n  }\n  .col-sm-6 {\n    width: 50%;\n  }\n  .col-sm-5 {\n    width: 41.66666667%;\n  }\n  .col-sm-4 {\n    width: 33.33333333%;\n  }\n  .col-sm-3 {\n    width: 25%;\n  }\n  .col-sm-2 {\n    width: 16.66666667%;\n  }\n  .col-sm-1 {\n    width: 8.33333333%;\n  }\n  .col-sm-pull-12 {\n    right: 100%;\n  }\n  .col-sm-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-sm-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-sm-pull-9 {\n    right: 75%;\n  }\n  .col-sm-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-sm-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-sm-pull-6 {\n    right: 50%;\n  }\n  .col-sm-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-sm-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-sm-pull-3 {\n    right: 25%;\n  }\n  .col-sm-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-sm-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-sm-pull-0 {\n    right: auto;\n  }\n  .col-sm-push-12 {\n    left: 100%;\n  }\n  .col-sm-push-11 {\n    left: 91.66666667%;\n  }\n  .col-sm-push-10 {\n    left: 83.33333333%;\n  }\n  .col-sm-push-9 {\n    left: 75%;\n  }\n  .col-sm-push-8 {\n    left: 66.66666667%;\n  }\n  .col-sm-push-7 {\n    left: 58.33333333%;\n  }\n  .col-sm-push-6 {\n    left: 50%;\n  }\n  .col-sm-push-5 {\n    left: 41.66666667%;\n  }\n  .col-sm-push-4 {\n    left: 33.33333333%;\n  }\n  .col-sm-push-3 {\n    left: 25%;\n  }\n  .col-sm-push-2 {\n    left: 16.66666667%;\n  }\n  .col-sm-push-1 {\n    left: 8.33333333%;\n  }\n  .col-sm-push-0 {\n    left: auto;\n  }\n  .col-sm-offset-12 {\n    margin-left: 100%;\n  }\n  .col-sm-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-sm-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-sm-offset-9 {\n    margin-left: 75%;\n  }\n  .col-sm-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-sm-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-sm-offset-6 {\n    margin-left: 50%;\n  }\n  .col-sm-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-sm-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-sm-offset-3 {\n    margin-left: 25%;\n  }\n  .col-sm-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-sm-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-sm-offset-0 {\n    margin-left: 0%;\n  }\n}\n@media (min-width: 992px) {\n  .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {\n    float: left;\n  }\n  .col-md-12 {\n    width: 100%;\n  }\n  .col-md-11 {\n    width: 91.66666667%;\n  }\n  .col-md-10 {\n    width: 83.33333333%;\n  }\n  .col-md-9 {\n    width: 75%;\n  }\n  .col-md-8 {\n    width: 66.66666667%;\n  }\n  .col-md-7 {\n    width: 58.33333333%;\n  }\n  .col-md-6 {\n    width: 50%;\n  }\n  .col-md-5 {\n    width: 41.66666667%;\n  }\n  .col-md-4 {\n    width: 33.33333333%;\n  }\n  .col-md-3 {\n    width: 25%;\n  }\n  .col-md-2 {\n    width: 16.66666667%;\n  }\n  .col-md-1 {\n    width: 8.33333333%;\n  }\n  .col-md-pull-12 {\n    right: 100%;\n  }\n  .col-md-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-md-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-md-pull-9 {\n    right: 75%;\n  }\n  .col-md-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-md-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-md-pull-6 {\n    right: 50%;\n  }\n  .col-md-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-md-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-md-pull-3 {\n    right: 25%;\n  }\n  .col-md-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-md-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-md-pull-0 {\n    right: auto;\n  }\n  .col-md-push-12 {\n    left: 100%;\n  }\n  .col-md-push-11 {\n    left: 91.66666667%;\n  }\n  .col-md-push-10 {\n    left: 83.33333333%;\n  }\n  .col-md-push-9 {\n    left: 75%;\n  }\n  .col-md-push-8 {\n    left: 66.66666667%;\n  }\n  .col-md-push-7 {\n    left: 58.33333333%;\n  }\n  .col-md-push-6 {\n    left: 50%;\n  }\n  .col-md-push-5 {\n    left: 41.66666667%;\n  }\n  .col-md-push-4 {\n    left: 33.33333333%;\n  }\n  .col-md-push-3 {\n    left: 25%;\n  }\n  .col-md-push-2 {\n    left: 16.66666667%;\n  }\n  .col-md-push-1 {\n    left: 8.33333333%;\n  }\n  .col-md-push-0 {\n    left: auto;\n  }\n  .col-md-offset-12 {\n    margin-left: 100%;\n  }\n  .col-md-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-md-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-md-offset-9 {\n    margin-left: 75%;\n  }\n  .col-md-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-md-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-md-offset-6 {\n    margin-left: 50%;\n  }\n  .col-md-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-md-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-md-offset-3 {\n    margin-left: 25%;\n  }\n  .col-md-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-md-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-md-offset-0 {\n    margin-left: 0%;\n  }\n}\n@media (min-width: 1200px) {\n  .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {\n    float: left;\n  }\n  .col-lg-12 {\n    width: 100%;\n  }\n  .col-lg-11 {\n    width: 91.66666667%;\n  }\n  .col-lg-10 {\n    width: 83.33333333%;\n  }\n  .col-lg-9 {\n    width: 75%;\n  }\n  .col-lg-8 {\n    width: 66.66666667%;\n  }\n  .col-lg-7 {\n    width: 58.33333333%;\n  }\n  .col-lg-6 {\n    width: 50%;\n  }\n  .col-lg-5 {\n    width: 41.66666667%;\n  }\n  .col-lg-4 {\n    width: 33.33333333%;\n  }\n  .col-lg-3 {\n    width: 25%;\n  }\n  .col-lg-2 {\n    width: 16.66666667%;\n  }\n  .col-lg-1 {\n    width: 8.33333333%;\n  }\n  .col-lg-pull-12 {\n    right: 100%;\n  }\n  .col-lg-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-lg-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-lg-pull-9 {\n    right: 75%;\n  }\n  .col-lg-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-lg-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-lg-pull-6 {\n    right: 50%;\n  }\n  .col-lg-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-lg-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-lg-pull-3 {\n    right: 25%;\n  }\n  .col-lg-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-lg-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-lg-pull-0 {\n    right: auto;\n  }\n  .col-lg-push-12 {\n    left: 100%;\n  }\n  .col-lg-push-11 {\n    left: 91.66666667%;\n  }\n  .col-lg-push-10 {\n    left: 83.33333333%;\n  }\n  .col-lg-push-9 {\n    left: 75%;\n  }\n  .col-lg-push-8 {\n    left: 66.66666667%;\n  }\n  .col-lg-push-7 {\n    left: 58.33333333%;\n  }\n  .col-lg-push-6 {\n    left: 50%;\n  }\n  .col-lg-push-5 {\n    left: 41.66666667%;\n  }\n  .col-lg-push-4 {\n    left: 33.33333333%;\n  }\n  .col-lg-push-3 {\n    left: 25%;\n  }\n  .col-lg-push-2 {\n    left: 16.66666667%;\n  }\n  .col-lg-push-1 {\n    left: 8.33333333%;\n  }\n  .col-lg-push-0 {\n    left: auto;\n  }\n  .col-lg-offset-12 {\n    margin-left: 100%;\n  }\n  .col-lg-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-lg-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-lg-offset-9 {\n    margin-left: 75%;\n  }\n  .col-lg-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-lg-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-lg-offset-6 {\n    margin-left: 50%;\n  }\n  .col-lg-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-lg-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-lg-offset-3 {\n    margin-left: 25%;\n  }\n  .col-lg-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-lg-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-lg-offset-0 {\n    margin-left: 0%;\n  }\n}\ntable {\n  background-color: transparent;\n}\ncaption {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  color: #777777;\n  text-align: left;\n}\nth {\n  text-align: left;\n}\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 20px;\n}\n.table > thead > tr > th,\n.table > tbody > tr > th,\n.table > tfoot > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > td,\n.table > tfoot > tr > td {\n  padding: 8px;\n  line-height: 1.42857143;\n  vertical-align: top;\n  border-top: 1px solid #ddd;\n}\n.table > thead > tr > th {\n  vertical-align: bottom;\n  border-bottom: 2px solid #ddd;\n}\n.table > caption + thead > tr:first-child > th,\n.table > colgroup + thead > tr:first-child > th,\n.table > thead:first-child > tr:first-child > th,\n.table > caption + thead > tr:first-child > td,\n.table > colgroup + thead > tr:first-child > td,\n.table > thead:first-child > tr:first-child > td {\n  border-top: 0;\n}\n.table > tbody + tbody {\n  border-top: 2px solid #ddd;\n}\n.table .table {\n  background-color: #fff;\n}\n.table-condensed > thead > tr > th,\n.table-condensed > tbody > tr > th,\n.table-condensed > tfoot > tr > th,\n.table-condensed > thead > tr > td,\n.table-condensed > tbody > tr > td,\n.table-condensed > tfoot > tr > td {\n  padding: 5px;\n}\n.table-bordered {\n  border: 1px solid #ddd;\n}\n.table-bordered > thead > tr > th,\n.table-bordered > tbody > tr > th,\n.table-bordered > tfoot > tr > th,\n.table-bordered > thead > tr > td,\n.table-bordered > tbody > tr > td,\n.table-bordered > tfoot > tr > td {\n  border: 1px solid #ddd;\n}\n.table-bordered > thead > tr > th,\n.table-bordered > thead > tr > td {\n  border-bottom-width: 2px;\n}\n.table-striped > tbody > tr:nth-of-type(odd) {\n  background-color: #f9f9f9;\n}\n.table-hover > tbody > tr:hover {\n  background-color: #f5f5f5;\n}\ntable col[class*=\"col-\"] {\n  position: static;\n  float: none;\n  display: table-column;\n}\ntable td[class*=\"col-\"],\ntable th[class*=\"col-\"] {\n  position: static;\n  float: none;\n  display: table-cell;\n}\n.table > thead > tr > td.active,\n.table > tbody > tr > td.active,\n.table > tfoot > tr > td.active,\n.table > thead > tr > th.active,\n.table > tbody > tr > th.active,\n.table > tfoot > tr > th.active,\n.table > thead > tr.active > td,\n.table > tbody > tr.active > td,\n.table > tfoot > tr.active > td,\n.table > thead > tr.active > th,\n.table > tbody > tr.active > th,\n.table > tfoot > tr.active > th {\n  background-color: #f5f5f5;\n}\n.table-hover > tbody > tr > td.active:hover,\n.table-hover > tbody > tr > th.active:hover,\n.table-hover > tbody > tr.active:hover > td,\n.table-hover > tbody > tr:hover > .active,\n.table-hover > tbody > tr.active:hover > th {\n  background-color: #e8e8e8;\n}\n.table > thead > tr > td.success,\n.table > tbody > tr > td.success,\n.table > tfoot > tr > td.success,\n.table > thead > tr > th.success,\n.table > tbody > tr > th.success,\n.table > tfoot > tr > th.success,\n.table > thead > tr.success > td,\n.table > tbody > tr.success > td,\n.table > tfoot > tr.success > td,\n.table > thead > tr.success > th,\n.table > tbody > tr.success > th,\n.table > tfoot > tr.success > th {\n  background-color: #dff0d8;\n}\n.table-hover > tbody > tr > td.success:hover,\n.table-hover > tbody > tr > th.success:hover,\n.table-hover > tbody > tr.success:hover > td,\n.table-hover > tbody > tr:hover > .success,\n.table-hover > tbody > tr.success:hover > th {\n  background-color: #d0e9c6;\n}\n.table > thead > tr > td.info,\n.table > tbody > tr > td.info,\n.table > tfoot > tr > td.info,\n.table > thead > tr > th.info,\n.table > tbody > tr > th.info,\n.table > tfoot > tr > th.info,\n.table > thead > tr.info > td,\n.table > tbody > tr.info > td,\n.table > tfoot > tr.info > td,\n.table > thead > tr.info > th,\n.table > tbody > tr.info > th,\n.table > tfoot > tr.info > th {\n  background-color: #d9edf7;\n}\n.table-hover > tbody > tr > td.info:hover,\n.table-hover > tbody > tr > th.info:hover,\n.table-hover > tbody > tr.info:hover > td,\n.table-hover > tbody > tr:hover > .info,\n.table-hover > tbody > tr.info:hover > th {\n  background-color: #c4e3f3;\n}\n.table > thead > tr > td.warning,\n.table > tbody > tr > td.warning,\n.table > tfoot > tr > td.warning,\n.table > thead > tr > th.warning,\n.table > tbody > tr > th.warning,\n.table > tfoot > tr > th.warning,\n.table > thead > tr.warning > td,\n.table > tbody > tr.warning > td,\n.table > tfoot > tr.warning > td,\n.table > thead > tr.warning > th,\n.table > tbody > tr.warning > th,\n.table > tfoot > tr.warning > th {\n  background-color: #fcf8e3;\n}\n.table-hover > tbody > tr > td.warning:hover,\n.table-hover > tbody > tr > th.warning:hover,\n.table-hover > tbody > tr.warning:hover > td,\n.table-hover > tbody > tr:hover > .warning,\n.table-hover > tbody > tr.warning:hover > th {\n  background-color: #faf2cc;\n}\n.table > thead > tr > td.danger,\n.table > tbody > tr > td.danger,\n.table > tfoot > tr > td.danger,\n.table > thead > tr > th.danger,\n.table > tbody > tr > th.danger,\n.table > tfoot > tr > th.danger,\n.table > thead > tr.danger > td,\n.table > tbody > tr.danger > td,\n.table > tfoot > tr.danger > td,\n.table > thead > tr.danger > th,\n.table > tbody > tr.danger > th,\n.table > tfoot > tr.danger > th {\n  background-color: #f2dede;\n}\n.table-hover > tbody > tr > td.danger:hover,\n.table-hover > tbody > tr > th.danger:hover,\n.table-hover > tbody > tr.danger:hover > td,\n.table-hover > tbody > tr:hover > .danger,\n.table-hover > tbody > tr.danger:hover > th {\n  background-color: #ebcccc;\n}\n.table-responsive {\n  overflow-x: auto;\n  min-height: 0.01%;\n}\n@media screen and (max-width: 767px) {\n  .table-responsive {\n    width: 100%;\n    margin-bottom: 15px;\n    overflow-y: hidden;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    border: 1px solid #ddd;\n  }\n  .table-responsive > .table {\n    margin-bottom: 0;\n  }\n  .table-responsive > .table > thead > tr > th,\n  .table-responsive > .table > tbody > tr > th,\n  .table-responsive > .table > tfoot > tr > th,\n  .table-responsive > .table > thead > tr > td,\n  .table-responsive > .table > tbody > tr > td,\n  .table-responsive > .table > tfoot > tr > td {\n    white-space: nowrap;\n  }\n  .table-responsive > .table-bordered {\n    border: 0;\n  }\n  .table-responsive > .table-bordered > thead > tr > th:first-child,\n  .table-responsive > .table-bordered > tbody > tr > th:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n  .table-responsive > .table-bordered > thead > tr > td:first-child,\n  .table-responsive > .table-bordered > tbody > tr > td:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n    border-left: 0;\n  }\n  .table-responsive > .table-bordered > thead > tr > th:last-child,\n  .table-responsive > .table-bordered > tbody > tr > th:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n  .table-responsive > .table-bordered > thead > tr > td:last-child,\n  .table-responsive > .table-bordered > tbody > tr > td:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n    border-right: 0;\n  }\n  .table-responsive > .table-bordered > tbody > tr:last-child > th,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > th,\n  .table-responsive > .table-bordered > tbody > tr:last-child > td,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > td {\n    border-bottom: 0;\n  }\n}\nfieldset {\n  padding: 0;\n  margin: 0;\n  border: 0;\n  min-width: 0;\n}\nlegend {\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 20px;\n  font-size: 21px;\n  line-height: inherit;\n  color: #333333;\n  border: 0;\n  border-bottom: 1px solid #e5e5e5;\n}\nlabel {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\ninput[type=\"search\"] {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  margin: 4px 0 0;\n  margin-top: 1px \\9;\n  line-height: normal;\n}\ninput[type=\"file\"] {\n  display: block;\n}\ninput[type=\"range\"] {\n  display: block;\n  width: 100%;\n}\nselect[multiple],\nselect[size] {\n  height: auto;\n}\ninput[type=\"file\"]:focus,\ninput[type=\"radio\"]:focus,\ninput[type=\"checkbox\"]:focus {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\noutput {\n  display: block;\n  padding-top: 7px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555555;\n}\n.form-control {\n  display: block;\n  width: 100%;\n  height: 34px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555555;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n  -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n}\n.form-control:focus {\n  border-color: #66afe9;\n  outline: 0;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);\n}\n.form-control::-moz-placeholder {\n  color: #999;\n  opacity: 1;\n}\n.form-control:-ms-input-placeholder {\n  color: #999;\n}\n.form-control::-webkit-input-placeholder {\n  color: #999;\n}\n.form-control::-ms-expand {\n  border: 0;\n  background-color: transparent;\n}\n.form-control[disabled],\n.form-control[readonly],\nfieldset[disabled] .form-control {\n  background-color: #eeeeee;\n  opacity: 1;\n}\n.form-control[disabled],\nfieldset[disabled] .form-control {\n  cursor: not-allowed;\n}\ntextarea.form-control {\n  height: auto;\n}\ninput[type=\"search\"] {\n  -webkit-appearance: none;\n}\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input[type=\"date\"].form-control,\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].form-control {\n    line-height: 34px;\n  }\n  input[type=\"date\"].input-sm,\n  input[type=\"time\"].input-sm,\n  input[type=\"datetime-local\"].input-sm,\n  input[type=\"month\"].input-sm,\n  .input-group-sm input[type=\"date\"],\n  .input-group-sm input[type=\"time\"],\n  .input-group-sm input[type=\"datetime-local\"],\n  .input-group-sm input[type=\"month\"] {\n    line-height: 30px;\n  }\n  input[type=\"date\"].input-lg,\n  input[type=\"time\"].input-lg,\n  input[type=\"datetime-local\"].input-lg,\n  input[type=\"month\"].input-lg,\n  .input-group-lg input[type=\"date\"],\n  .input-group-lg input[type=\"time\"],\n  .input-group-lg input[type=\"datetime-local\"],\n  .input-group-lg input[type=\"month\"] {\n    line-height: 46px;\n  }\n}\n.form-group {\n  margin-bottom: 15px;\n}\n.radio,\n.checkbox {\n  position: relative;\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.radio label,\n.checkbox label {\n  min-height: 20px;\n  padding-left: 20px;\n  margin-bottom: 0;\n  font-weight: normal;\n  cursor: pointer;\n}\n.radio input[type=\"radio\"],\n.radio-inline input[type=\"radio\"],\n.checkbox input[type=\"checkbox\"],\n.checkbox-inline input[type=\"checkbox\"] {\n  position: absolute;\n  margin-left: -20px;\n  margin-top: 4px \\9;\n}\n.radio + .radio,\n.checkbox + .checkbox {\n  margin-top: -5px;\n}\n.radio-inline,\n.checkbox-inline {\n  position: relative;\n  display: inline-block;\n  padding-left: 20px;\n  margin-bottom: 0;\n  vertical-align: middle;\n  font-weight: normal;\n  cursor: pointer;\n}\n.radio-inline + .radio-inline,\n.checkbox-inline + .checkbox-inline {\n  margin-top: 0;\n  margin-left: 10px;\n}\ninput[type=\"radio\"][disabled],\ninput[type=\"checkbox\"][disabled],\ninput[type=\"radio\"].disabled,\ninput[type=\"checkbox\"].disabled,\nfieldset[disabled] input[type=\"radio\"],\nfieldset[disabled] input[type=\"checkbox\"] {\n  cursor: not-allowed;\n}\n.radio-inline.disabled,\n.checkbox-inline.disabled,\nfieldset[disabled] .radio-inline,\nfieldset[disabled] .checkbox-inline {\n  cursor: not-allowed;\n}\n.radio.disabled label,\n.checkbox.disabled label,\nfieldset[disabled] .radio label,\nfieldset[disabled] .checkbox label {\n  cursor: not-allowed;\n}\n.form-control-static {\n  padding-top: 7px;\n  padding-bottom: 7px;\n  margin-bottom: 0;\n  min-height: 34px;\n}\n.form-control-static.input-lg,\n.form-control-static.input-sm {\n  padding-left: 0;\n  padding-right: 0;\n}\n.input-sm {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\nselect.input-sm {\n  height: 30px;\n  line-height: 30px;\n}\ntextarea.input-sm,\nselect[multiple].input-sm {\n  height: auto;\n}\n.form-group-sm .form-control {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n.form-group-sm select.form-control {\n  height: 30px;\n  line-height: 30px;\n}\n.form-group-sm textarea.form-control,\n.form-group-sm select[multiple].form-control {\n  height: auto;\n}\n.form-group-sm .form-control-static {\n  height: 30px;\n  min-height: 32px;\n  padding: 6px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.input-lg {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\nselect.input-lg {\n  height: 46px;\n  line-height: 46px;\n}\ntextarea.input-lg,\nselect[multiple].input-lg {\n  height: auto;\n}\n.form-group-lg .form-control {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\n.form-group-lg select.form-control {\n  height: 46px;\n  line-height: 46px;\n}\n.form-group-lg textarea.form-control,\n.form-group-lg select[multiple].form-control {\n  height: auto;\n}\n.form-group-lg .form-control-static {\n  height: 46px;\n  min-height: 38px;\n  padding: 11px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n}\n.has-feedback {\n  position: relative;\n}\n.has-feedback .form-control {\n  padding-right: 42.5px;\n}\n.form-control-feedback {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  display: block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  pointer-events: none;\n}\n.input-lg + .form-control-feedback,\n.input-group-lg + .form-control-feedback,\n.form-group-lg .form-control + .form-control-feedback {\n  width: 46px;\n  height: 46px;\n  line-height: 46px;\n}\n.input-sm + .form-control-feedback,\n.input-group-sm + .form-control-feedback,\n.form-group-sm .form-control + .form-control-feedback {\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n}\n.has-success .help-block,\n.has-success .control-label,\n.has-success .radio,\n.has-success .checkbox,\n.has-success .radio-inline,\n.has-success .checkbox-inline,\n.has-success.radio label,\n.has-success.checkbox label,\n.has-success.radio-inline label,\n.has-success.checkbox-inline label {\n  color: #3c763d;\n}\n.has-success .form-control {\n  border-color: #3c763d;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n.has-success .form-control:focus {\n  border-color: #2b542c;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168;\n}\n.has-success .input-group-addon {\n  color: #3c763d;\n  border-color: #3c763d;\n  background-color: #dff0d8;\n}\n.has-success .form-control-feedback {\n  color: #3c763d;\n}\n.has-warning .help-block,\n.has-warning .control-label,\n.has-warning .radio,\n.has-warning .checkbox,\n.has-warning .radio-inline,\n.has-warning .checkbox-inline,\n.has-warning.radio label,\n.has-warning.checkbox label,\n.has-warning.radio-inline label,\n.has-warning.checkbox-inline label {\n  color: #8a6d3b;\n}\n.has-warning .form-control {\n  border-color: #8a6d3b;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n.has-warning .form-control:focus {\n  border-color: #66512c;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b;\n}\n.has-warning .input-group-addon {\n  color: #8a6d3b;\n  border-color: #8a6d3b;\n  background-color: #fcf8e3;\n}\n.has-warning .form-control-feedback {\n  color: #8a6d3b;\n}\n.has-error .help-block,\n.has-error .control-label,\n.has-error .radio,\n.has-error .checkbox,\n.has-error .radio-inline,\n.has-error .checkbox-inline,\n.has-error.radio label,\n.has-error.checkbox label,\n.has-error.radio-inline label,\n.has-error.checkbox-inline label {\n  color: #a94442;\n}\n.has-error .form-control {\n  border-color: #a94442;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n.has-error .form-control:focus {\n  border-color: #843534;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483;\n}\n.has-error .input-group-addon {\n  color: #a94442;\n  border-color: #a94442;\n  background-color: #f2dede;\n}\n.has-error .form-control-feedback {\n  color: #a94442;\n}\n.has-feedback label ~ .form-control-feedback {\n  top: 25px;\n}\n.has-feedback label.sr-only ~ .form-control-feedback {\n  top: 0;\n}\n.help-block {\n  display: block;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  color: #737373;\n}\n@media (min-width: 768px) {\n  .form-inline .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .form-inline .form-control-static {\n    display: inline-block;\n  }\n  .form-inline .input-group {\n    display: inline-table;\n    vertical-align: middle;\n  }\n  .form-inline .input-group .input-group-addon,\n  .form-inline .input-group .input-group-btn,\n  .form-inline .input-group .form-control {\n    width: auto;\n  }\n  .form-inline .input-group > .form-control {\n    width: 100%;\n  }\n  .form-inline .control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .radio,\n  .form-inline .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .radio label,\n  .form-inline .checkbox label {\n    padding-left: 0;\n  }\n  .form-inline .radio input[type=\"radio\"],\n  .form-inline .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0;\n  }\n  .form-inline .has-feedback .form-control-feedback {\n    top: 0;\n  }\n}\n.form-horizontal .radio,\n.form-horizontal .checkbox,\n.form-horizontal .radio-inline,\n.form-horizontal .checkbox-inline {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-top: 7px;\n}\n.form-horizontal .radio,\n.form-horizontal .checkbox {\n  min-height: 27px;\n}\n.form-horizontal .form-group {\n  margin-left: -15px;\n  margin-right: -15px;\n}\n@media (min-width: 768px) {\n  .form-horizontal .control-label {\n    text-align: right;\n    margin-bottom: 0;\n    padding-top: 7px;\n  }\n}\n.form-horizontal .has-feedback .form-control-feedback {\n  right: 15px;\n}\n@media (min-width: 768px) {\n  .form-horizontal .form-group-lg .control-label {\n    padding-top: 11px;\n    font-size: 18px;\n  }\n}\n@media (min-width: 768px) {\n  .form-horizontal .form-group-sm .control-label {\n    padding-top: 6px;\n    font-size: 12px;\n  }\n}\n.btn {\n  display: inline-block;\n  margin-bottom: 0;\n  font-weight: normal;\n  text-align: center;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  background-image: none;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  border-radius: 4px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.btn:focus,\n.btn:active:focus,\n.btn.active:focus,\n.btn.focus,\n.btn:active.focus,\n.btn.active.focus {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n.btn:hover,\n.btn:focus,\n.btn.focus {\n  color: #333;\n  text-decoration: none;\n}\n.btn:active,\n.btn.active {\n  outline: 0;\n  background-image: none;\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n.btn.disabled,\n.btn[disabled],\nfieldset[disabled] .btn {\n  cursor: not-allowed;\n  opacity: 0.65;\n  filter: alpha(opacity=65);\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\na.btn.disabled,\nfieldset[disabled] a.btn {\n  pointer-events: none;\n}\n.btn-default {\n  color: #333;\n  background-color: #fff;\n  border-color: #ccc;\n}\n.btn-default:focus,\n.btn-default.focus {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #8c8c8c;\n}\n.btn-default:hover {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n.btn-default:active,\n.btn-default.active,\n.open > .dropdown-toggle.btn-default {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n.btn-default:active:hover,\n.btn-default.active:hover,\n.open > .dropdown-toggle.btn-default:hover,\n.btn-default:active:focus,\n.btn-default.active:focus,\n.open > .dropdown-toggle.btn-default:focus,\n.btn-default:active.focus,\n.btn-default.active.focus,\n.open > .dropdown-toggle.btn-default.focus {\n  color: #333;\n  background-color: #d4d4d4;\n  border-color: #8c8c8c;\n}\n.btn-default:active,\n.btn-default.active,\n.open > .dropdown-toggle.btn-default {\n  background-image: none;\n}\n.btn-default.disabled:hover,\n.btn-default[disabled]:hover,\nfieldset[disabled] .btn-default:hover,\n.btn-default.disabled:focus,\n.btn-default[disabled]:focus,\nfieldset[disabled] .btn-default:focus,\n.btn-default.disabled.focus,\n.btn-default[disabled].focus,\nfieldset[disabled] .btn-default.focus {\n  background-color: #fff;\n  border-color: #ccc;\n}\n.btn-default .badge {\n  color: #fff;\n  background-color: #333;\n}\n.btn-primary {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #2e6da4;\n}\n.btn-primary:focus,\n.btn-primary.focus {\n  color: #fff;\n  background-color: #286090;\n  border-color: #122b40;\n}\n.btn-primary:hover {\n  color: #fff;\n  background-color: #286090;\n  border-color: #204d74;\n}\n.btn-primary:active,\n.btn-primary.active,\n.open > .dropdown-toggle.btn-primary {\n  color: #fff;\n  background-color: #286090;\n  border-color: #204d74;\n}\n.btn-primary:active:hover,\n.btn-primary.active:hover,\n.open > .dropdown-toggle.btn-primary:hover,\n.btn-primary:active:focus,\n.btn-primary.active:focus,\n.open > .dropdown-toggle.btn-primary:focus,\n.btn-primary:active.focus,\n.btn-primary.active.focus,\n.open > .dropdown-toggle.btn-primary.focus {\n  color: #fff;\n  background-color: #204d74;\n  border-color: #122b40;\n}\n.btn-primary:active,\n.btn-primary.active,\n.open > .dropdown-toggle.btn-primary {\n  background-image: none;\n}\n.btn-primary.disabled:hover,\n.btn-primary[disabled]:hover,\nfieldset[disabled] .btn-primary:hover,\n.btn-primary.disabled:focus,\n.btn-primary[disabled]:focus,\nfieldset[disabled] .btn-primary:focus,\n.btn-primary.disabled.focus,\n.btn-primary[disabled].focus,\nfieldset[disabled] .btn-primary.focus {\n  background-color: #337ab7;\n  border-color: #2e6da4;\n}\n.btn-primary .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n.btn-success {\n  color: #fff;\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n}\n.btn-success:focus,\n.btn-success.focus {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #255625;\n}\n.btn-success:hover {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #398439;\n}\n.btn-success:active,\n.btn-success.active,\n.open > .dropdown-toggle.btn-success {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #398439;\n}\n.btn-success:active:hover,\n.btn-success.active:hover,\n.open > .dropdown-toggle.btn-success:hover,\n.btn-success:active:focus,\n.btn-success.active:focus,\n.open > .dropdown-toggle.btn-success:focus,\n.btn-success:active.focus,\n.btn-success.active.focus,\n.open > .dropdown-toggle.btn-success.focus {\n  color: #fff;\n  background-color: #398439;\n  border-color: #255625;\n}\n.btn-success:active,\n.btn-success.active,\n.open > .dropdown-toggle.btn-success {\n  background-image: none;\n}\n.btn-success.disabled:hover,\n.btn-success[disabled]:hover,\nfieldset[disabled] .btn-success:hover,\n.btn-success.disabled:focus,\n.btn-success[disabled]:focus,\nfieldset[disabled] .btn-success:focus,\n.btn-success.disabled.focus,\n.btn-success[disabled].focus,\nfieldset[disabled] .btn-success.focus {\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n}\n.btn-success .badge {\n  color: #5cb85c;\n  background-color: #fff;\n}\n.btn-info {\n  color: #fff;\n  background-color: #5bc0de;\n  border-color: #46b8da;\n}\n.btn-info:focus,\n.btn-info.focus {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #1b6d85;\n}\n.btn-info:hover {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #269abc;\n}\n.btn-info:active,\n.btn-info.active,\n.open > .dropdown-toggle.btn-info {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #269abc;\n}\n.btn-info:active:hover,\n.btn-info.active:hover,\n.open > .dropdown-toggle.btn-info:hover,\n.btn-info:active:focus,\n.btn-info.active:focus,\n.open > .dropdown-toggle.btn-info:focus,\n.btn-info:active.focus,\n.btn-info.active.focus,\n.open > .dropdown-toggle.btn-info.focus {\n  color: #fff;\n  background-color: #269abc;\n  border-color: #1b6d85;\n}\n.btn-info:active,\n.btn-info.active,\n.open > .dropdown-toggle.btn-info {\n  background-image: none;\n}\n.btn-info.disabled:hover,\n.btn-info[disabled]:hover,\nfieldset[disabled] .btn-info:hover,\n.btn-info.disabled:focus,\n.btn-info[disabled]:focus,\nfieldset[disabled] .btn-info:focus,\n.btn-info.disabled.focus,\n.btn-info[disabled].focus,\nfieldset[disabled] .btn-info.focus {\n  background-color: #5bc0de;\n  border-color: #46b8da;\n}\n.btn-info .badge {\n  color: #5bc0de;\n  background-color: #fff;\n}\n.btn-warning {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-color: #eea236;\n}\n.btn-warning:focus,\n.btn-warning.focus {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #985f0d;\n}\n.btn-warning:hover {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #d58512;\n}\n.btn-warning:active,\n.btn-warning.active,\n.open > .dropdown-toggle.btn-warning {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #d58512;\n}\n.btn-warning:active:hover,\n.btn-warning.active:hover,\n.open > .dropdown-toggle.btn-warning:hover,\n.btn-warning:active:focus,\n.btn-warning.active:focus,\n.open > .dropdown-toggle.btn-warning:focus,\n.btn-warning:active.focus,\n.btn-warning.active.focus,\n.open > .dropdown-toggle.btn-warning.focus {\n  color: #fff;\n  background-color: #d58512;\n  border-color: #985f0d;\n}\n.btn-warning:active,\n.btn-warning.active,\n.open > .dropdown-toggle.btn-warning {\n  background-image: none;\n}\n.btn-warning.disabled:hover,\n.btn-warning[disabled]:hover,\nfieldset[disabled] .btn-warning:hover,\n.btn-warning.disabled:focus,\n.btn-warning[disabled]:focus,\nfieldset[disabled] .btn-warning:focus,\n.btn-warning.disabled.focus,\n.btn-warning[disabled].focus,\nfieldset[disabled] .btn-warning.focus {\n  background-color: #f0ad4e;\n  border-color: #eea236;\n}\n.btn-warning .badge {\n  color: #f0ad4e;\n  background-color: #fff;\n}\n.btn-danger {\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d43f3a;\n}\n.btn-danger:focus,\n.btn-danger.focus {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #761c19;\n}\n.btn-danger:hover {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #ac2925;\n}\n.btn-danger:active,\n.btn-danger.active,\n.open > .dropdown-toggle.btn-danger {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #ac2925;\n}\n.btn-danger:active:hover,\n.btn-danger.active:hover,\n.open > .dropdown-toggle.btn-danger:hover,\n.btn-danger:active:focus,\n.btn-danger.active:focus,\n.open > .dropdown-toggle.btn-danger:focus,\n.btn-danger:active.focus,\n.btn-danger.active.focus,\n.open > .dropdown-toggle.btn-danger.focus {\n  color: #fff;\n  background-color: #ac2925;\n  border-color: #761c19;\n}\n.btn-danger:active,\n.btn-danger.active,\n.open > .dropdown-toggle.btn-danger {\n  background-image: none;\n}\n.btn-danger.disabled:hover,\n.btn-danger[disabled]:hover,\nfieldset[disabled] .btn-danger:hover,\n.btn-danger.disabled:focus,\n.btn-danger[disabled]:focus,\nfieldset[disabled] .btn-danger:focus,\n.btn-danger.disabled.focus,\n.btn-danger[disabled].focus,\nfieldset[disabled] .btn-danger.focus {\n  background-color: #d9534f;\n  border-color: #d43f3a;\n}\n.btn-danger .badge {\n  color: #d9534f;\n  background-color: #fff;\n}\n.btn-link {\n  color: #337ab7;\n  font-weight: normal;\n  border-radius: 0;\n}\n.btn-link,\n.btn-link:active,\n.btn-link.active,\n.btn-link[disabled],\nfieldset[disabled] .btn-link {\n  background-color: transparent;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n.btn-link,\n.btn-link:hover,\n.btn-link:focus,\n.btn-link:active {\n  border-color: transparent;\n}\n.btn-link:hover,\n.btn-link:focus {\n  color: #23527c;\n  text-decoration: underline;\n  background-color: transparent;\n}\n.btn-link[disabled]:hover,\nfieldset[disabled] .btn-link:hover,\n.btn-link[disabled]:focus,\nfieldset[disabled] .btn-link:focus {\n  color: #777777;\n  text-decoration: none;\n}\n.btn-lg,\n.btn-group-lg > .btn {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\n.btn-sm,\n.btn-group-sm > .btn {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n.btn-xs,\n.btn-group-xs > .btn {\n  padding: 1px 5px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n.btn-block {\n  display: block;\n  width: 100%;\n}\n.btn-block + .btn-block {\n  margin-top: 5px;\n}\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%;\n}\n.fade {\n  opacity: 0;\n  -webkit-transition: opacity 0.15s linear;\n  -o-transition: opacity 0.15s linear;\n  transition: opacity 0.15s linear;\n}\n.fade.in {\n  opacity: 1;\n}\n.collapse {\n  display: none;\n}\n.collapse.in {\n  display: block;\n}\ntr.collapse.in {\n  display: table-row;\n}\ntbody.collapse.in {\n  display: table-row-group;\n}\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  -webkit-transition-property: height, visibility;\n  transition-property: height, visibility;\n  -webkit-transition-duration: 0.35s;\n  transition-duration: 0.35s;\n  -webkit-transition-timing-function: ease;\n  transition-timing-function: ease;\n}\n.caret {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top: 4px dashed;\n  border-top: 4px solid \\9;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent;\n}\n.dropup,\n.dropdown {\n  position: relative;\n}\n.dropdown-toggle:focus {\n  outline: 0;\n}\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  list-style: none;\n  font-size: 14px;\n  text-align: left;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  background-clip: padding-box;\n}\n.dropdown-menu.pull-right {\n  right: 0;\n  left: auto;\n}\n.dropdown-menu .divider {\n  height: 1px;\n  margin: 9px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n.dropdown-menu > li > a {\n  display: block;\n  padding: 3px 20px;\n  clear: both;\n  font-weight: normal;\n  line-height: 1.42857143;\n  color: #333333;\n  white-space: nowrap;\n}\n.dropdown-menu > li > a:hover,\n.dropdown-menu > li > a:focus {\n  text-decoration: none;\n  color: #262626;\n  background-color: #f5f5f5;\n}\n.dropdown-menu > .active > a,\n.dropdown-menu > .active > a:hover,\n.dropdown-menu > .active > a:focus {\n  color: #fff;\n  text-decoration: none;\n  outline: 0;\n  background-color: #337ab7;\n}\n.dropdown-menu > .disabled > a,\n.dropdown-menu > .disabled > a:hover,\n.dropdown-menu > .disabled > a:focus {\n  color: #777777;\n}\n.dropdown-menu > .disabled > a:hover,\n.dropdown-menu > .disabled > a:focus {\n  text-decoration: none;\n  background-color: transparent;\n  background-image: none;\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\n  cursor: not-allowed;\n}\n.open > .dropdown-menu {\n  display: block;\n}\n.open > a {\n  outline: 0;\n}\n.dropdown-menu-right {\n  left: auto;\n  right: 0;\n}\n.dropdown-menu-left {\n  left: 0;\n  right: auto;\n}\n.dropdown-header {\n  display: block;\n  padding: 3px 20px;\n  font-size: 12px;\n  line-height: 1.42857143;\n  color: #777777;\n  white-space: nowrap;\n}\n.dropdown-backdrop {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  z-index: 990;\n}\n.pull-right > .dropdown-menu {\n  right: 0;\n  left: auto;\n}\n.dropup .caret,\n.navbar-fixed-bottom .dropdown .caret {\n  border-top: 0;\n  border-bottom: 4px dashed;\n  border-bottom: 4px solid \\9;\n  content: \"\";\n}\n.dropup .dropdown-menu,\n.navbar-fixed-bottom .dropdown .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-bottom: 2px;\n}\n@media (min-width: 768px) {\n  .navbar-right .dropdown-menu {\n    left: auto;\n    right: 0;\n  }\n  .navbar-right .dropdown-menu-left {\n    left: 0;\n    right: auto;\n  }\n}\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n}\n.btn-group > .btn,\n.btn-group-vertical > .btn {\n  position: relative;\n  float: left;\n}\n.btn-group > .btn:hover,\n.btn-group-vertical > .btn:hover,\n.btn-group > .btn:focus,\n.btn-group-vertical > .btn:focus,\n.btn-group > .btn:active,\n.btn-group-vertical > .btn:active,\n.btn-group > .btn.active,\n.btn-group-vertical > .btn.active {\n  z-index: 2;\n}\n.btn-group .btn + .btn,\n.btn-group .btn + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + .btn-group {\n  margin-left: -1px;\n}\n.btn-toolbar {\n  margin-left: -5px;\n}\n.btn-toolbar .btn,\n.btn-toolbar .btn-group,\n.btn-toolbar .input-group {\n  float: left;\n}\n.btn-toolbar > .btn,\n.btn-toolbar > .btn-group,\n.btn-toolbar > .input-group {\n  margin-left: 5px;\n}\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0;\n}\n.btn-group > .btn:first-child {\n  margin-left: 0;\n}\n.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.btn-group > .btn:last-child:not(:first-child),\n.btn-group > .dropdown-toggle:not(:first-child) {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.btn-group > .btn-group {\n  float: left;\n}\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.btn-group .dropdown-toggle:active,\n.btn-group.open .dropdown-toggle {\n  outline: 0;\n}\n.btn-group > .btn + .dropdown-toggle {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.btn-group > .btn-lg + .dropdown-toggle {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n.btn-group.open .dropdown-toggle {\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n.btn-group.open .dropdown-toggle.btn-link {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n.btn .caret {\n  margin-left: 0;\n}\n.btn-lg .caret {\n  border-width: 5px 5px 0;\n  border-bottom-width: 0;\n}\n.dropup .btn-lg .caret {\n  border-width: 0 5px 5px;\n}\n.btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group,\n.btn-group-vertical > .btn-group > .btn {\n  display: block;\n  float: none;\n  width: 100%;\n  max-width: 100%;\n}\n.btn-group-vertical > .btn-group > .btn {\n  float: none;\n}\n.btn-group-vertical > .btn + .btn,\n.btn-group-vertical > .btn + .btn-group,\n.btn-group-vertical > .btn-group + .btn,\n.btn-group-vertical > .btn-group + .btn-group {\n  margin-top: -1px;\n  margin-left: 0;\n}\n.btn-group-vertical > .btn:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n.btn-group-vertical > .btn:first-child:not(:last-child) {\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group-vertical > .btn:last-child:not(:first-child) {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n.btn-group-justified {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  border-collapse: separate;\n}\n.btn-group-justified > .btn,\n.btn-group-justified > .btn-group {\n  float: none;\n  display: table-cell;\n  width: 1%;\n}\n.btn-group-justified > .btn-group .btn {\n  width: 100%;\n}\n.btn-group-justified > .btn-group .dropdown-menu {\n  left: auto;\n}\n[data-toggle=\"buttons\"] > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n.input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate;\n}\n.input-group[class*=\"col-\"] {\n  float: none;\n  padding-left: 0;\n  padding-right: 0;\n}\n.input-group .form-control {\n  position: relative;\n  z-index: 2;\n  float: left;\n  width: 100%;\n  margin-bottom: 0;\n}\n.input-group .form-control:focus {\n  z-index: 3;\n}\n.input-group-lg > .form-control,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .btn {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\nselect.input-group-lg > .form-control,\nselect.input-group-lg > .input-group-addon,\nselect.input-group-lg > .input-group-btn > .btn {\n  height: 46px;\n  line-height: 46px;\n}\ntextarea.input-group-lg > .form-control,\ntextarea.input-group-lg > .input-group-addon,\ntextarea.input-group-lg > .input-group-btn > .btn,\nselect[multiple].input-group-lg > .form-control,\nselect[multiple].input-group-lg > .input-group-addon,\nselect[multiple].input-group-lg > .input-group-btn > .btn {\n  height: auto;\n}\n.input-group-sm > .form-control,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .btn {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\nselect.input-group-sm > .form-control,\nselect.input-group-sm > .input-group-addon,\nselect.input-group-sm > .input-group-btn > .btn {\n  height: 30px;\n  line-height: 30px;\n}\ntextarea.input-group-sm > .form-control,\ntextarea.input-group-sm > .input-group-addon,\ntextarea.input-group-sm > .input-group-btn > .btn,\nselect[multiple].input-group-sm > .form-control,\nselect[multiple].input-group-sm > .input-group-addon,\nselect[multiple].input-group-sm > .input-group-btn > .btn {\n  height: auto;\n}\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control {\n  display: table-cell;\n}\n.input-group-addon:not(:first-child):not(:last-child),\n.input-group-btn:not(:first-child):not(:last-child),\n.input-group .form-control:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n.input-group-addon,\n.input-group-btn {\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle;\n}\n.input-group-addon {\n  padding: 6px 12px;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1;\n  color: #555555;\n  text-align: center;\n  background-color: #eeeeee;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n.input-group-addon.input-sm {\n  padding: 5px 10px;\n  font-size: 12px;\n  border-radius: 3px;\n}\n.input-group-addon.input-lg {\n  padding: 10px 16px;\n  font-size: 18px;\n  border-radius: 6px;\n}\n.input-group-addon input[type=\"radio\"],\n.input-group-addon input[type=\"checkbox\"] {\n  margin-top: 0;\n}\n.input-group .form-control:first-child,\n.input-group-addon:first-child,\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group > .btn,\n.input-group-btn:first-child > .dropdown-toggle,\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.input-group-addon:first-child {\n  border-right: 0;\n}\n.input-group .form-control:last-child,\n.input-group-addon:last-child,\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group > .btn,\n.input-group-btn:last-child > .dropdown-toggle,\n.input-group-btn:first-child > .btn:not(:first-child),\n.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.input-group-addon:last-child {\n  border-left: 0;\n}\n.input-group-btn {\n  position: relative;\n  font-size: 0;\n  white-space: nowrap;\n}\n.input-group-btn > .btn {\n  position: relative;\n}\n.input-group-btn > .btn + .btn {\n  margin-left: -1px;\n}\n.input-group-btn > .btn:hover,\n.input-group-btn > .btn:focus,\n.input-group-btn > .btn:active {\n  z-index: 2;\n}\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group {\n  margin-right: -1px;\n}\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group {\n  z-index: 2;\n  margin-left: -1px;\n}\n.nav {\n  margin-bottom: 0;\n  padding-left: 0;\n  list-style: none;\n}\n.nav > li {\n  position: relative;\n  display: block;\n}\n.nav > li > a {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n}\n.nav > li > a:hover,\n.nav > li > a:focus {\n  text-decoration: none;\n  background-color: #eeeeee;\n}\n.nav > li.disabled > a {\n  color: #777777;\n}\n.nav > li.disabled > a:hover,\n.nav > li.disabled > a:focus {\n  color: #777777;\n  text-decoration: none;\n  background-color: transparent;\n  cursor: not-allowed;\n}\n.nav .open > a,\n.nav .open > a:hover,\n.nav .open > a:focus {\n  background-color: #eeeeee;\n  border-color: #337ab7;\n}\n.nav .nav-divider {\n  height: 1px;\n  margin: 9px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n.nav > li > a > img {\n  max-width: none;\n}\n.nav-tabs {\n  border-bottom: 1px solid #ddd;\n}\n.nav-tabs > li {\n  float: left;\n  margin-bottom: -1px;\n}\n.nav-tabs > li > a {\n  margin-right: 2px;\n  line-height: 1.42857143;\n  border: 1px solid transparent;\n  border-radius: 4px 4px 0 0;\n}\n.nav-tabs > li > a:hover {\n  border-color: #eeeeee #eeeeee #ddd;\n}\n.nav-tabs > li.active > a,\n.nav-tabs > li.active > a:hover,\n.nav-tabs > li.active > a:focus {\n  color: #555555;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-bottom-color: transparent;\n  cursor: default;\n}\n.nav-tabs.nav-justified {\n  width: 100%;\n  border-bottom: 0;\n}\n.nav-tabs.nav-justified > li {\n  float: none;\n}\n.nav-tabs.nav-justified > li > a {\n  text-align: center;\n  margin-bottom: 5px;\n}\n.nav-tabs.nav-justified > .dropdown .dropdown-menu {\n  top: auto;\n  left: auto;\n}\n@media (min-width: 768px) {\n  .nav-tabs.nav-justified > li {\n    display: table-cell;\n    width: 1%;\n  }\n  .nav-tabs.nav-justified > li > a {\n    margin-bottom: 0;\n  }\n}\n.nav-tabs.nav-justified > li > a {\n  margin-right: 0;\n  border-radius: 4px;\n}\n.nav-tabs.nav-justified > .active > a,\n.nav-tabs.nav-justified > .active > a:hover,\n.nav-tabs.nav-justified > .active > a:focus {\n  border: 1px solid #ddd;\n}\n@media (min-width: 768px) {\n  .nav-tabs.nav-justified > li > a {\n    border-bottom: 1px solid #ddd;\n    border-radius: 4px 4px 0 0;\n  }\n  .nav-tabs.nav-justified > .active > a,\n  .nav-tabs.nav-justified > .active > a:hover,\n  .nav-tabs.nav-justified > .active > a:focus {\n    border-bottom-color: #fff;\n  }\n}\n.nav-pills > li {\n  float: left;\n}\n.nav-pills > li > a {\n  border-radius: 4px;\n}\n.nav-pills > li + li {\n  margin-left: 2px;\n}\n.nav-pills > li.active > a,\n.nav-pills > li.active > a:hover,\n.nav-pills > li.active > a:focus {\n  color: #fff;\n  background-color: #337ab7;\n}\n.nav-stacked > li {\n  float: none;\n}\n.nav-stacked > li + li {\n  margin-top: 2px;\n  margin-left: 0;\n}\n.nav-justified {\n  width: 100%;\n}\n.nav-justified > li {\n  float: none;\n}\n.nav-justified > li > a {\n  text-align: center;\n  margin-bottom: 5px;\n}\n.nav-justified > .dropdown .dropdown-menu {\n  top: auto;\n  left: auto;\n}\n@media (min-width: 768px) {\n  .nav-justified > li {\n    display: table-cell;\n    width: 1%;\n  }\n  .nav-justified > li > a {\n    margin-bottom: 0;\n  }\n}\n.nav-tabs-justified {\n  border-bottom: 0;\n}\n.nav-tabs-justified > li > a {\n  margin-right: 0;\n  border-radius: 4px;\n}\n.nav-tabs-justified > .active > a,\n.nav-tabs-justified > .active > a:hover,\n.nav-tabs-justified > .active > a:focus {\n  border: 1px solid #ddd;\n}\n@media (min-width: 768px) {\n  .nav-tabs-justified > li > a {\n    border-bottom: 1px solid #ddd;\n    border-radius: 4px 4px 0 0;\n  }\n  .nav-tabs-justified > .active > a,\n  .nav-tabs-justified > .active > a:hover,\n  .nav-tabs-justified > .active > a:focus {\n    border-bottom-color: #fff;\n  }\n}\n.tab-content > .tab-pane {\n  display: none;\n}\n.tab-content > .active {\n  display: block;\n}\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n.navbar {\n  position: relative;\n  min-height: 50px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n}\n@media (min-width: 768px) {\n  .navbar {\n    border-radius: 4px;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-header {\n    float: left;\n  }\n}\n.navbar-collapse {\n  overflow-x: visible;\n  padding-right: 15px;\n  padding-left: 15px;\n  border-top: 1px solid transparent;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);\n  -webkit-overflow-scrolling: touch;\n}\n.navbar-collapse.in {\n  overflow-y: auto;\n}\n@media (min-width: 768px) {\n  .navbar-collapse {\n    width: auto;\n    border-top: 0;\n    box-shadow: none;\n  }\n  .navbar-collapse.collapse {\n    display: block !important;\n    height: auto !important;\n    padding-bottom: 0;\n    overflow: visible !important;\n  }\n  .navbar-collapse.in {\n    overflow-y: visible;\n  }\n  .navbar-fixed-top .navbar-collapse,\n  .navbar-static-top .navbar-collapse,\n  .navbar-fixed-bottom .navbar-collapse {\n    padding-left: 0;\n    padding-right: 0;\n  }\n}\n.navbar-fixed-top .navbar-collapse,\n.navbar-fixed-bottom .navbar-collapse {\n  max-height: 340px;\n}\n@media (max-device-width: 480px) and (orientation: landscape) {\n  .navbar-fixed-top .navbar-collapse,\n  .navbar-fixed-bottom .navbar-collapse {\n    max-height: 200px;\n  }\n}\n.container > .navbar-header,\n.container-fluid > .navbar-header,\n.container > .navbar-collapse,\n.container-fluid > .navbar-collapse {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n@media (min-width: 768px) {\n  .container > .navbar-header,\n  .container-fluid > .navbar-header,\n  .container > .navbar-collapse,\n  .container-fluid > .navbar-collapse {\n    margin-right: 0;\n    margin-left: 0;\n  }\n}\n.navbar-static-top {\n  z-index: 1000;\n  border-width: 0 0 1px;\n}\n@media (min-width: 768px) {\n  .navbar-static-top {\n    border-radius: 0;\n  }\n}\n.navbar-fixed-top,\n.navbar-fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n@media (min-width: 768px) {\n  .navbar-fixed-top,\n  .navbar-fixed-bottom {\n    border-radius: 0;\n  }\n}\n.navbar-fixed-top {\n  top: 0;\n  border-width: 0 0 1px;\n}\n.navbar-fixed-bottom {\n  bottom: 0;\n  margin-bottom: 0;\n  border-width: 1px 0 0;\n}\n.navbar-brand {\n  float: left;\n  padding: 15px 15px;\n  font-size: 18px;\n  line-height: 20px;\n  height: 50px;\n}\n.navbar-brand:hover,\n.navbar-brand:focus {\n  text-decoration: none;\n}\n.navbar-brand > img {\n  display: block;\n}\n@media (min-width: 768px) {\n  .navbar > .container .navbar-brand,\n  .navbar > .container-fluid .navbar-brand {\n    margin-left: -15px;\n  }\n}\n.navbar-toggle {\n  position: relative;\n  float: right;\n  margin-right: 15px;\n  padding: 9px 10px;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  background-color: transparent;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.navbar-toggle:focus {\n  outline: 0;\n}\n.navbar-toggle .icon-bar {\n  display: block;\n  width: 22px;\n  height: 2px;\n  border-radius: 1px;\n}\n.navbar-toggle .icon-bar + .icon-bar {\n  margin-top: 4px;\n}\n@media (min-width: 768px) {\n  .navbar-toggle {\n    display: none;\n  }\n}\n.navbar-nav {\n  margin: 7.5px -15px;\n}\n.navbar-nav > li > a {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  line-height: 20px;\n}\n@media (max-width: 767px) {\n  .navbar-nav .open .dropdown-menu {\n    position: static;\n    float: none;\n    width: auto;\n    margin-top: 0;\n    background-color: transparent;\n    border: 0;\n    box-shadow: none;\n  }\n  .navbar-nav .open .dropdown-menu > li > a,\n  .navbar-nav .open .dropdown-menu .dropdown-header {\n    padding: 5px 15px 5px 25px;\n  }\n  .navbar-nav .open .dropdown-menu > li > a {\n    line-height: 20px;\n  }\n  .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-nav .open .dropdown-menu > li > a:focus {\n    background-image: none;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-nav {\n    float: left;\n    margin: 0;\n  }\n  .navbar-nav > li {\n    float: left;\n  }\n  .navbar-nav > li > a {\n    padding-top: 15px;\n    padding-bottom: 15px;\n  }\n}\n.navbar-form {\n  margin-left: -15px;\n  margin-right: -15px;\n  padding: 10px 15px;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n@media (min-width: 768px) {\n  .navbar-form .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .navbar-form .form-control-static {\n    display: inline-block;\n  }\n  .navbar-form .input-group {\n    display: inline-table;\n    vertical-align: middle;\n  }\n  .navbar-form .input-group .input-group-addon,\n  .navbar-form .input-group .input-group-btn,\n  .navbar-form .input-group .form-control {\n    width: auto;\n  }\n  .navbar-form .input-group > .form-control {\n    width: 100%;\n  }\n  .navbar-form .control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form .radio,\n  .navbar-form .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form .radio label,\n  .navbar-form .checkbox label {\n    padding-left: 0;\n  }\n  .navbar-form .radio input[type=\"radio\"],\n  .navbar-form .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0;\n  }\n  .navbar-form .has-feedback .form-control-feedback {\n    top: 0;\n  }\n}\n@media (max-width: 767px) {\n  .navbar-form .form-group {\n    margin-bottom: 5px;\n  }\n  .navbar-form .form-group:last-child {\n    margin-bottom: 0;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-form {\n    width: auto;\n    border: 0;\n    margin-left: 0;\n    margin-right: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n  }\n}\n.navbar-nav > li > .dropdown-menu {\n  margin-top: 0;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {\n  margin-bottom: 0;\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.navbar-btn {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n.navbar-btn.btn-sm {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.navbar-btn.btn-xs {\n  margin-top: 14px;\n  margin-bottom: 14px;\n}\n.navbar-text {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n@media (min-width: 768px) {\n  .navbar-text {\n    float: left;\n    margin-left: 15px;\n    margin-right: 15px;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-left {\n    float: left !important;\n  }\n  .navbar-right {\n    float: right !important;\n    margin-right: -15px;\n  }\n  .navbar-right ~ .navbar-right {\n    margin-right: 0;\n  }\n}\n.navbar-default {\n  background-color: #f8f8f8;\n  border-color: #e7e7e7;\n}\n.navbar-default .navbar-brand {\n  color: #777;\n}\n.navbar-default .navbar-brand:hover,\n.navbar-default .navbar-brand:focus {\n  color: #5e5e5e;\n  background-color: transparent;\n}\n.navbar-default .navbar-text {\n  color: #777;\n}\n.navbar-default .navbar-nav > li > a {\n  color: #777;\n}\n.navbar-default .navbar-nav > li > a:hover,\n.navbar-default .navbar-nav > li > a:focus {\n  color: #333;\n  background-color: transparent;\n}\n.navbar-default .navbar-nav > .active > a,\n.navbar-default .navbar-nav > .active > a:hover,\n.navbar-default .navbar-nav > .active > a:focus {\n  color: #555;\n  background-color: #e7e7e7;\n}\n.navbar-default .navbar-nav > .disabled > a,\n.navbar-default .navbar-nav > .disabled > a:hover,\n.navbar-default .navbar-nav > .disabled > a:focus {\n  color: #ccc;\n  background-color: transparent;\n}\n.navbar-default .navbar-toggle {\n  border-color: #ddd;\n}\n.navbar-default .navbar-toggle:hover,\n.navbar-default .navbar-toggle:focus {\n  background-color: #ddd;\n}\n.navbar-default .navbar-toggle .icon-bar {\n  background-color: #888;\n}\n.navbar-default .navbar-collapse,\n.navbar-default .navbar-form {\n  border-color: #e7e7e7;\n}\n.navbar-default .navbar-nav > .open > a,\n.navbar-default .navbar-nav > .open > a:hover,\n.navbar-default .navbar-nav > .open > a:focus {\n  background-color: #e7e7e7;\n  color: #555;\n}\n@media (max-width: 767px) {\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a {\n    color: #777;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #333;\n    background-color: transparent;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #555;\n    background-color: #e7e7e7;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a,\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: #ccc;\n    background-color: transparent;\n  }\n}\n.navbar-default .navbar-link {\n  color: #777;\n}\n.navbar-default .navbar-link:hover {\n  color: #333;\n}\n.navbar-default .btn-link {\n  color: #777;\n}\n.navbar-default .btn-link:hover,\n.navbar-default .btn-link:focus {\n  color: #333;\n}\n.navbar-default .btn-link[disabled]:hover,\nfieldset[disabled] .navbar-default .btn-link:hover,\n.navbar-default .btn-link[disabled]:focus,\nfieldset[disabled] .navbar-default .btn-link:focus {\n  color: #ccc;\n}\n.navbar-inverse {\n  background-color: #222;\n  border-color: #080808;\n}\n.navbar-inverse .navbar-brand {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-brand:hover,\n.navbar-inverse .navbar-brand:focus {\n  color: #fff;\n  background-color: transparent;\n}\n.navbar-inverse .navbar-text {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-nav > li > a {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-nav > li > a:hover,\n.navbar-inverse .navbar-nav > li > a:focus {\n  color: #fff;\n  background-color: transparent;\n}\n.navbar-inverse .navbar-nav > .active > a,\n.navbar-inverse .navbar-nav > .active > a:hover,\n.navbar-inverse .navbar-nav > .active > a:focus {\n  color: #fff;\n  background-color: #080808;\n}\n.navbar-inverse .navbar-nav > .disabled > a,\n.navbar-inverse .navbar-nav > .disabled > a:hover,\n.navbar-inverse .navbar-nav > .disabled > a:focus {\n  color: #444;\n  background-color: transparent;\n}\n.navbar-inverse .navbar-toggle {\n  border-color: #333;\n}\n.navbar-inverse .navbar-toggle:hover,\n.navbar-inverse .navbar-toggle:focus {\n  background-color: #333;\n}\n.navbar-inverse .navbar-toggle .icon-bar {\n  background-color: #fff;\n}\n.navbar-inverse .navbar-collapse,\n.navbar-inverse .navbar-form {\n  border-color: #101010;\n}\n.navbar-inverse .navbar-nav > .open > a,\n.navbar-inverse .navbar-nav > .open > a:hover,\n.navbar-inverse .navbar-nav > .open > a:focus {\n  background-color: #080808;\n  color: #fff;\n}\n@media (max-width: 767px) {\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {\n    border-color: #080808;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu .divider {\n    background-color: #080808;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {\n    color: #9d9d9d;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #fff;\n    background-color: transparent;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #fff;\n    background-color: #080808;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: #444;\n    background-color: transparent;\n  }\n}\n.navbar-inverse .navbar-link {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-link:hover {\n  color: #fff;\n}\n.navbar-inverse .btn-link {\n  color: #9d9d9d;\n}\n.navbar-inverse .btn-link:hover,\n.navbar-inverse .btn-link:focus {\n  color: #fff;\n}\n.navbar-inverse .btn-link[disabled]:hover,\nfieldset[disabled] .navbar-inverse .btn-link:hover,\n.navbar-inverse .btn-link[disabled]:focus,\nfieldset[disabled] .navbar-inverse .btn-link:focus {\n  color: #444;\n}\n.breadcrumb {\n  padding: 8px 15px;\n  margin-bottom: 20px;\n  list-style: none;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n}\n.breadcrumb > li {\n  display: inline-block;\n}\n.breadcrumb > li + li:before {\n  content: \"/\\A0\";\n  padding: 0 5px;\n  color: #ccc;\n}\n.breadcrumb > .active {\n  color: #777777;\n}\n.pagination {\n  display: inline-block;\n  padding-left: 0;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.pagination > li {\n  display: inline;\n}\n.pagination > li > a,\n.pagination > li > span {\n  position: relative;\n  float: left;\n  padding: 6px 12px;\n  line-height: 1.42857143;\n  text-decoration: none;\n  color: #337ab7;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  margin-left: -1px;\n}\n.pagination > li:first-child > a,\n.pagination > li:first-child > span {\n  margin-left: 0;\n  border-bottom-left-radius: 4px;\n  border-top-left-radius: 4px;\n}\n.pagination > li:last-child > a,\n.pagination > li:last-child > span {\n  border-bottom-right-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.pagination > li > a:hover,\n.pagination > li > span:hover,\n.pagination > li > a:focus,\n.pagination > li > span:focus {\n  z-index: 2;\n  color: #23527c;\n  background-color: #eeeeee;\n  border-color: #ddd;\n}\n.pagination > .active > a,\n.pagination > .active > span,\n.pagination > .active > a:hover,\n.pagination > .active > span:hover,\n.pagination > .active > a:focus,\n.pagination > .active > span:focus {\n  z-index: 3;\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #337ab7;\n  cursor: default;\n}\n.pagination > .disabled > span,\n.pagination > .disabled > span:hover,\n.pagination > .disabled > span:focus,\n.pagination > .disabled > a,\n.pagination > .disabled > a:hover,\n.pagination > .disabled > a:focus {\n  color: #777777;\n  background-color: #fff;\n  border-color: #ddd;\n  cursor: not-allowed;\n}\n.pagination-lg > li > a,\n.pagination-lg > li > span {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n}\n.pagination-lg > li:first-child > a,\n.pagination-lg > li:first-child > span {\n  border-bottom-left-radius: 6px;\n  border-top-left-radius: 6px;\n}\n.pagination-lg > li:last-child > a,\n.pagination-lg > li:last-child > span {\n  border-bottom-right-radius: 6px;\n  border-top-right-radius: 6px;\n}\n.pagination-sm > li > a,\n.pagination-sm > li > span {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.pagination-sm > li:first-child > a,\n.pagination-sm > li:first-child > span {\n  border-bottom-left-radius: 3px;\n  border-top-left-radius: 3px;\n}\n.pagination-sm > li:last-child > a,\n.pagination-sm > li:last-child > span {\n  border-bottom-right-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.pager {\n  padding-left: 0;\n  margin: 20px 0;\n  list-style: none;\n  text-align: center;\n}\n.pager li {\n  display: inline;\n}\n.pager li > a,\n.pager li > span {\n  display: inline-block;\n  padding: 5px 14px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 15px;\n}\n.pager li > a:hover,\n.pager li > a:focus {\n  text-decoration: none;\n  background-color: #eeeeee;\n}\n.pager .next > a,\n.pager .next > span {\n  float: right;\n}\n.pager .previous > a,\n.pager .previous > span {\n  float: left;\n}\n.pager .disabled > a,\n.pager .disabled > a:hover,\n.pager .disabled > a:focus,\n.pager .disabled > span {\n  color: #777777;\n  background-color: #fff;\n  cursor: not-allowed;\n}\n.label {\n  display: inline;\n  padding: .2em .6em .3em;\n  font-size: 75%;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em;\n}\na.label:hover,\na.label:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n.label:empty {\n  display: none;\n}\n.btn .label {\n  position: relative;\n  top: -1px;\n}\n.label-default {\n  background-color: #777777;\n}\n.label-default[href]:hover,\n.label-default[href]:focus {\n  background-color: #5e5e5e;\n}\n.label-primary {\n  background-color: #337ab7;\n}\n.label-primary[href]:hover,\n.label-primary[href]:focus {\n  background-color: #286090;\n}\n.label-success {\n  background-color: #5cb85c;\n}\n.label-success[href]:hover,\n.label-success[href]:focus {\n  background-color: #449d44;\n}\n.label-info {\n  background-color: #5bc0de;\n}\n.label-info[href]:hover,\n.label-info[href]:focus {\n  background-color: #31b0d5;\n}\n.label-warning {\n  background-color: #f0ad4e;\n}\n.label-warning[href]:hover,\n.label-warning[href]:focus {\n  background-color: #ec971f;\n}\n.label-danger {\n  background-color: #d9534f;\n}\n.label-danger[href]:hover,\n.label-danger[href]:focus {\n  background-color: #c9302c;\n}\n.badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: bold;\n  color: #fff;\n  line-height: 1;\n  vertical-align: middle;\n  white-space: nowrap;\n  text-align: center;\n  background-color: #777777;\n  border-radius: 10px;\n}\n.badge:empty {\n  display: none;\n}\n.btn .badge {\n  position: relative;\n  top: -1px;\n}\n.btn-xs .badge,\n.btn-group-xs > .btn .badge {\n  top: 0;\n  padding: 1px 5px;\n}\na.badge:hover,\na.badge:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n.list-group-item.active > .badge,\n.nav-pills > .active > a > .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n.list-group-item > .badge {\n  float: right;\n}\n.list-group-item > .badge + .badge {\n  margin-right: 5px;\n}\n.nav-pills > li > a > .badge {\n  margin-left: 3px;\n}\n.jumbotron {\n  padding-top: 30px;\n  padding-bottom: 30px;\n  margin-bottom: 30px;\n  color: inherit;\n  background-color: #eeeeee;\n}\n.jumbotron h1,\n.jumbotron .h1 {\n  color: inherit;\n}\n.jumbotron p {\n  margin-bottom: 15px;\n  font-size: 21px;\n  font-weight: 200;\n}\n.jumbotron > hr {\n  border-top-color: #d5d5d5;\n}\n.container .jumbotron,\n.container-fluid .jumbotron {\n  border-radius: 6px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.jumbotron .container {\n  max-width: 100%;\n}\n@media screen and (min-width: 768px) {\n  .jumbotron {\n    padding-top: 48px;\n    padding-bottom: 48px;\n  }\n  .container .jumbotron,\n  .container-fluid .jumbotron {\n    padding-left: 60px;\n    padding-right: 60px;\n  }\n  .jumbotron h1,\n  .jumbotron .h1 {\n    font-size: 63px;\n  }\n}\n.thumbnail {\n  display: block;\n  padding: 4px;\n  margin-bottom: 20px;\n  line-height: 1.42857143;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  -webkit-transition: border 0.2s ease-in-out;\n  -o-transition: border 0.2s ease-in-out;\n  transition: border 0.2s ease-in-out;\n}\n.thumbnail > img,\n.thumbnail a > img {\n  margin-left: auto;\n  margin-right: auto;\n}\na.thumbnail:hover,\na.thumbnail:focus,\na.thumbnail.active {\n  border-color: #337ab7;\n}\n.thumbnail .caption {\n  padding: 9px;\n  color: #333333;\n}\n.alert {\n  padding: 15px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.alert h4 {\n  margin-top: 0;\n  color: inherit;\n}\n.alert .alert-link {\n  font-weight: bold;\n}\n.alert > p,\n.alert > ul {\n  margin-bottom: 0;\n}\n.alert > p + p {\n  margin-top: 5px;\n}\n.alert-dismissable,\n.alert-dismissible {\n  padding-right: 35px;\n}\n.alert-dismissable .close,\n.alert-dismissible .close {\n  position: relative;\n  top: -2px;\n  right: -21px;\n  color: inherit;\n}\n.alert-success {\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n  color: #3c763d;\n}\n.alert-success hr {\n  border-top-color: #c9e2b3;\n}\n.alert-success .alert-link {\n  color: #2b542c;\n}\n.alert-info {\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n  color: #31708f;\n}\n.alert-info hr {\n  border-top-color: #a6e1ec;\n}\n.alert-info .alert-link {\n  color: #245269;\n}\n.alert-warning {\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n  color: #8a6d3b;\n}\n.alert-warning hr {\n  border-top-color: #f7e1b5;\n}\n.alert-warning .alert-link {\n  color: #66512c;\n}\n.alert-danger {\n  background-color: #f2dede;\n  border-color: #ebccd1;\n  color: #a94442;\n}\n.alert-danger hr {\n  border-top-color: #e4b9c0;\n}\n.alert-danger .alert-link {\n  color: #843534;\n}\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n.progress {\n  overflow: hidden;\n  height: 20px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n.progress-bar {\n  float: left;\n  width: 0%;\n  height: 100%;\n  font-size: 12px;\n  line-height: 20px;\n  color: #fff;\n  text-align: center;\n  background-color: #337ab7;\n  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  -webkit-transition: width 0.6s ease;\n  -o-transition: width 0.6s ease;\n  transition: width 0.6s ease;\n}\n.progress-striped .progress-bar,\n.progress-bar-striped {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 40px 40px;\n}\n.progress.active .progress-bar,\n.progress-bar.active {\n  -webkit-animation: progress-bar-stripes 2s linear infinite;\n  -o-animation: progress-bar-stripes 2s linear infinite;\n  animation: progress-bar-stripes 2s linear infinite;\n}\n.progress-bar-success {\n  background-color: #5cb85c;\n}\n.progress-striped .progress-bar-success {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n.progress-bar-info {\n  background-color: #5bc0de;\n}\n.progress-striped .progress-bar-info {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n.progress-bar-warning {\n  background-color: #f0ad4e;\n}\n.progress-striped .progress-bar-warning {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n.progress-bar-danger {\n  background-color: #d9534f;\n}\n.progress-striped .progress-bar-danger {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n}\n.media {\n  margin-top: 15px;\n}\n.media:first-child {\n  margin-top: 0;\n}\n.media,\n.media-body {\n  zoom: 1;\n  overflow: hidden;\n}\n.media-body {\n  width: 10000px;\n}\n.media-object {\n  display: block;\n}\n.media-object.img-thumbnail {\n  max-width: none;\n}\n.media-right,\n.media > .pull-right {\n  padding-left: 10px;\n}\n.media-left,\n.media > .pull-left {\n  padding-right: 10px;\n}\n.media-left,\n.media-right,\n.media-body {\n  display: table-cell;\n  vertical-align: top;\n}\n.media-middle {\n  vertical-align: middle;\n}\n.media-bottom {\n  vertical-align: bottom;\n}\n.media-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.media-list {\n  padding-left: 0;\n  list-style: none;\n}\n.list-group {\n  margin-bottom: 20px;\n  padding-left: 0;\n}\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\n.list-group-item:first-child {\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n}\n.list-group-item:last-child {\n  margin-bottom: 0;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\na.list-group-item,\nbutton.list-group-item {\n  color: #555;\n}\na.list-group-item .list-group-item-heading,\nbutton.list-group-item .list-group-item-heading {\n  color: #333;\n}\na.list-group-item:hover,\nbutton.list-group-item:hover,\na.list-group-item:focus,\nbutton.list-group-item:focus {\n  text-decoration: none;\n  color: #555;\n  background-color: #f5f5f5;\n}\nbutton.list-group-item {\n  width: 100%;\n  text-align: left;\n}\n.list-group-item.disabled,\n.list-group-item.disabled:hover,\n.list-group-item.disabled:focus {\n  background-color: #eeeeee;\n  color: #777777;\n  cursor: not-allowed;\n}\n.list-group-item.disabled .list-group-item-heading,\n.list-group-item.disabled:hover .list-group-item-heading,\n.list-group-item.disabled:focus .list-group-item-heading {\n  color: inherit;\n}\n.list-group-item.disabled .list-group-item-text,\n.list-group-item.disabled:hover .list-group-item-text,\n.list-group-item.disabled:focus .list-group-item-text {\n  color: #777777;\n}\n.list-group-item.active,\n.list-group-item.active:hover,\n.list-group-item.active:focus {\n  z-index: 2;\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n.list-group-item.active .list-group-item-heading,\n.list-group-item.active:hover .list-group-item-heading,\n.list-group-item.active:focus .list-group-item-heading,\n.list-group-item.active .list-group-item-heading > small,\n.list-group-item.active:hover .list-group-item-heading > small,\n.list-group-item.active:focus .list-group-item-heading > small,\n.list-group-item.active .list-group-item-heading > .small,\n.list-group-item.active:hover .list-group-item-heading > .small,\n.list-group-item.active:focus .list-group-item-heading > .small {\n  color: inherit;\n}\n.list-group-item.active .list-group-item-text,\n.list-group-item.active:hover .list-group-item-text,\n.list-group-item.active:focus .list-group-item-text {\n  color: #c7ddef;\n}\n.list-group-item-success {\n  color: #3c763d;\n  background-color: #dff0d8;\n}\na.list-group-item-success,\nbutton.list-group-item-success {\n  color: #3c763d;\n}\na.list-group-item-success .list-group-item-heading,\nbutton.list-group-item-success .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-success:hover,\nbutton.list-group-item-success:hover,\na.list-group-item-success:focus,\nbutton.list-group-item-success:focus {\n  color: #3c763d;\n  background-color: #d0e9c6;\n}\na.list-group-item-success.active,\nbutton.list-group-item-success.active,\na.list-group-item-success.active:hover,\nbutton.list-group-item-success.active:hover,\na.list-group-item-success.active:focus,\nbutton.list-group-item-success.active:focus {\n  color: #fff;\n  background-color: #3c763d;\n  border-color: #3c763d;\n}\n.list-group-item-info {\n  color: #31708f;\n  background-color: #d9edf7;\n}\na.list-group-item-info,\nbutton.list-group-item-info {\n  color: #31708f;\n}\na.list-group-item-info .list-group-item-heading,\nbutton.list-group-item-info .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-info:hover,\nbutton.list-group-item-info:hover,\na.list-group-item-info:focus,\nbutton.list-group-item-info:focus {\n  color: #31708f;\n  background-color: #c4e3f3;\n}\na.list-group-item-info.active,\nbutton.list-group-item-info.active,\na.list-group-item-info.active:hover,\nbutton.list-group-item-info.active:hover,\na.list-group-item-info.active:focus,\nbutton.list-group-item-info.active:focus {\n  color: #fff;\n  background-color: #31708f;\n  border-color: #31708f;\n}\n.list-group-item-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n}\na.list-group-item-warning,\nbutton.list-group-item-warning {\n  color: #8a6d3b;\n}\na.list-group-item-warning .list-group-item-heading,\nbutton.list-group-item-warning .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-warning:hover,\nbutton.list-group-item-warning:hover,\na.list-group-item-warning:focus,\nbutton.list-group-item-warning:focus {\n  color: #8a6d3b;\n  background-color: #faf2cc;\n}\na.list-group-item-warning.active,\nbutton.list-group-item-warning.active,\na.list-group-item-warning.active:hover,\nbutton.list-group-item-warning.active:hover,\na.list-group-item-warning.active:focus,\nbutton.list-group-item-warning.active:focus {\n  color: #fff;\n  background-color: #8a6d3b;\n  border-color: #8a6d3b;\n}\n.list-group-item-danger {\n  color: #a94442;\n  background-color: #f2dede;\n}\na.list-group-item-danger,\nbutton.list-group-item-danger {\n  color: #a94442;\n}\na.list-group-item-danger .list-group-item-heading,\nbutton.list-group-item-danger .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-danger:hover,\nbutton.list-group-item-danger:hover,\na.list-group-item-danger:focus,\nbutton.list-group-item-danger:focus {\n  color: #a94442;\n  background-color: #ebcccc;\n}\na.list-group-item-danger.active,\nbutton.list-group-item-danger.active,\na.list-group-item-danger.active:hover,\nbutton.list-group-item-danger.active:hover,\na.list-group-item-danger.active:focus,\nbutton.list-group-item-danger.active:focus {\n  color: #fff;\n  background-color: #a94442;\n  border-color: #a94442;\n}\n.list-group-item-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.list-group-item-text {\n  margin-bottom: 0;\n  line-height: 1.3;\n}\n.panel {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n}\n.panel-body {\n  padding: 15px;\n}\n.panel-heading {\n  padding: 10px 15px;\n  border-bottom: 1px solid transparent;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n}\n.panel-heading > .dropdown .dropdown-toggle {\n  color: inherit;\n}\n.panel-title {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 16px;\n  color: inherit;\n}\n.panel-title > a,\n.panel-title > small,\n.panel-title > .small,\n.panel-title > small > a,\n.panel-title > .small > a {\n  color: inherit;\n}\n.panel-footer {\n  padding: 10px 15px;\n  background-color: #f5f5f5;\n  border-top: 1px solid #ddd;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.panel > .list-group,\n.panel > .panel-collapse > .list-group {\n  margin-bottom: 0;\n}\n.panel > .list-group .list-group-item,\n.panel > .panel-collapse > .list-group .list-group-item {\n  border-width: 1px 0;\n  border-radius: 0;\n}\n.panel > .list-group:first-child .list-group-item:first-child,\n.panel > .panel-collapse > .list-group:first-child .list-group-item:first-child {\n  border-top: 0;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n}\n.panel > .list-group:last-child .list-group-item:last-child,\n.panel > .panel-collapse > .list-group:last-child .list-group-item:last-child {\n  border-bottom: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.panel > .panel-heading + .panel-collapse > .list-group .list-group-item:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n.panel-heading + .list-group .list-group-item:first-child {\n  border-top-width: 0;\n}\n.list-group + .panel-footer {\n  border-top-width: 0;\n}\n.panel > .table,\n.panel > .table-responsive > .table,\n.panel > .panel-collapse > .table {\n  margin-bottom: 0;\n}\n.panel > .table caption,\n.panel > .table-responsive > .table caption,\n.panel > .panel-collapse > .table caption {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.panel > .table:first-child,\n.panel > .table-responsive:first-child > .table:first-child {\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child {\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child td:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n.panel > .table:first-child > thead:first-child > tr:first-child th:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child th:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child {\n  border-top-left-radius: 3px;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child td:last-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n.panel > .table:first-child > thead:first-child > tr:first-child th:last-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child th:last-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child {\n  border-top-right-radius: 3px;\n}\n.panel > .table:last-child,\n.panel > .table-responsive:last-child > .table:last-child {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child {\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n.panel > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child {\n  border-bottom-left-radius: 3px;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n.panel > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child {\n  border-bottom-right-radius: 3px;\n}\n.panel > .panel-body + .table,\n.panel > .panel-body + .table-responsive,\n.panel > .table + .panel-body,\n.panel > .table-responsive + .panel-body {\n  border-top: 1px solid #ddd;\n}\n.panel > .table > tbody:first-child > tr:first-child th,\n.panel > .table > tbody:first-child > tr:first-child td {\n  border-top: 0;\n}\n.panel > .table-bordered,\n.panel > .table-responsive > .table-bordered {\n  border: 0;\n}\n.panel > .table-bordered > thead > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > thead > tr > th:first-child,\n.panel > .table-bordered > tbody > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > th:first-child,\n.panel > .table-bordered > tfoot > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n.panel > .table-bordered > thead > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > thead > tr > td:first-child,\n.panel > .table-bordered > tbody > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > td:first-child,\n.panel > .table-bordered > tfoot > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n  border-left: 0;\n}\n.panel > .table-bordered > thead > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > thead > tr > th:last-child,\n.panel > .table-bordered > tbody > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > th:last-child,\n.panel > .table-bordered > tfoot > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n.panel > .table-bordered > thead > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > thead > tr > td:last-child,\n.panel > .table-bordered > tbody > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > td:last-child,\n.panel > .table-bordered > tfoot > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n  border-right: 0;\n}\n.panel > .table-bordered > thead > tr:first-child > td,\n.panel > .table-responsive > .table-bordered > thead > tr:first-child > td,\n.panel > .table-bordered > tbody > tr:first-child > td,\n.panel > .table-responsive > .table-bordered > tbody > tr:first-child > td,\n.panel > .table-bordered > thead > tr:first-child > th,\n.panel > .table-responsive > .table-bordered > thead > tr:first-child > th,\n.panel > .table-bordered > tbody > tr:first-child > th,\n.panel > .table-responsive > .table-bordered > tbody > tr:first-child > th {\n  border-bottom: 0;\n}\n.panel > .table-bordered > tbody > tr:last-child > td,\n.panel > .table-responsive > .table-bordered > tbody > tr:last-child > td,\n.panel > .table-bordered > tfoot > tr:last-child > td,\n.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td,\n.panel > .table-bordered > tbody > tr:last-child > th,\n.panel > .table-responsive > .table-bordered > tbody > tr:last-child > th,\n.panel > .table-bordered > tfoot > tr:last-child > th,\n.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th {\n  border-bottom: 0;\n}\n.panel > .table-responsive {\n  border: 0;\n  margin-bottom: 0;\n}\n.panel-group {\n  margin-bottom: 20px;\n}\n.panel-group .panel {\n  margin-bottom: 0;\n  border-radius: 4px;\n}\n.panel-group .panel + .panel {\n  margin-top: 5px;\n}\n.panel-group .panel-heading {\n  border-bottom: 0;\n}\n.panel-group .panel-heading + .panel-collapse > .panel-body,\n.panel-group .panel-heading + .panel-collapse > .list-group {\n  border-top: 1px solid #ddd;\n}\n.panel-group .panel-footer {\n  border-top: 0;\n}\n.panel-group .panel-footer + .panel-collapse .panel-body {\n  border-bottom: 1px solid #ddd;\n}\n.panel-default {\n  border-color: #ddd;\n}\n.panel-default > .panel-heading {\n  color: #333333;\n  background-color: #f5f5f5;\n  border-color: #ddd;\n}\n.panel-default > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #ddd;\n}\n.panel-default > .panel-heading .badge {\n  color: #f5f5f5;\n  background-color: #333333;\n}\n.panel-default > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #ddd;\n}\n.panel-primary {\n  border-color: #337ab7;\n}\n.panel-primary > .panel-heading {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n.panel-primary > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #337ab7;\n}\n.panel-primary > .panel-heading .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n.panel-primary > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #337ab7;\n}\n.panel-success {\n  border-color: #d6e9c6;\n}\n.panel-success > .panel-heading {\n  color: #3c763d;\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n}\n.panel-success > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #d6e9c6;\n}\n.panel-success > .panel-heading .badge {\n  color: #dff0d8;\n  background-color: #3c763d;\n}\n.panel-success > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #d6e9c6;\n}\n.panel-info {\n  border-color: #bce8f1;\n}\n.panel-info > .panel-heading {\n  color: #31708f;\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n}\n.panel-info > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #bce8f1;\n}\n.panel-info > .panel-heading .badge {\n  color: #d9edf7;\n  background-color: #31708f;\n}\n.panel-info > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #bce8f1;\n}\n.panel-warning {\n  border-color: #faebcc;\n}\n.panel-warning > .panel-heading {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n}\n.panel-warning > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #faebcc;\n}\n.panel-warning > .panel-heading .badge {\n  color: #fcf8e3;\n  background-color: #8a6d3b;\n}\n.panel-warning > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #faebcc;\n}\n.panel-danger {\n  border-color: #ebccd1;\n}\n.panel-danger > .panel-heading {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #ebccd1;\n}\n.panel-danger > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #ebccd1;\n}\n.panel-danger > .panel-heading .badge {\n  color: #f2dede;\n  background-color: #a94442;\n}\n.panel-danger > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #ebccd1;\n}\n.embed-responsive {\n  position: relative;\n  display: block;\n  height: 0;\n  padding: 0;\n  overflow: hidden;\n}\n.embed-responsive .embed-responsive-item,\n.embed-responsive iframe,\n.embed-responsive embed,\n.embed-responsive object,\n.embed-responsive video {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  height: 100%;\n  width: 100%;\n  border: 0;\n}\n.embed-responsive-16by9 {\n  padding-bottom: 56.25%;\n}\n.embed-responsive-4by3 {\n  padding-bottom: 75%;\n}\n.well {\n  min-height: 20px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border: 1px solid #e3e3e3;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n}\n.well blockquote {\n  border-color: #ddd;\n  border-color: rgba(0, 0, 0, 0.15);\n}\n.well-lg {\n  padding: 24px;\n  border-radius: 6px;\n}\n.well-sm {\n  padding: 9px;\n  border-radius: 3px;\n}\n.close {\n  float: right;\n  font-size: 21px;\n  font-weight: bold;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: 0.2;\n  filter: alpha(opacity=20);\n}\n.close:hover,\n.close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n}\nbutton.close {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  -webkit-appearance: none;\n}\n.modal-open {\n  overflow: hidden;\n}\n.modal {\n  display: none;\n  overflow: hidden;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n}\n.modal.fade .modal-dialog {\n  -webkit-transform: translate(0, -25%);\n  -ms-transform: translate(0, -25%);\n  -o-transform: translate(0, -25%);\n  transform: translate(0, -25%);\n  -webkit-transition: -webkit-transform 0.3s ease-out;\n  -moz-transition: -moz-transform 0.3s ease-out;\n  -o-transition: -o-transform 0.3s ease-out;\n  transition: transform 0.3s ease-out;\n}\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  -ms-transform: translate(0, 0);\n  -o-transform: translate(0, 0);\n  transform: translate(0, 0);\n}\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px;\n}\n.modal-content {\n  position: relative;\n  background-color: #fff;\n  border: 1px solid #999;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  background-clip: padding-box;\n  outline: 0;\n}\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000;\n}\n.modal-backdrop.fade {\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n.modal-backdrop.in {\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n}\n.modal-header {\n  padding: 15px;\n  border-bottom: 1px solid #e5e5e5;\n}\n.modal-header .close {\n  margin-top: -2px;\n}\n.modal-title {\n  margin: 0;\n  line-height: 1.42857143;\n}\n.modal-body {\n  position: relative;\n  padding: 15px;\n}\n.modal-footer {\n  padding: 15px;\n  text-align: right;\n  border-top: 1px solid #e5e5e5;\n}\n.modal-footer .btn + .btn {\n  margin-left: 5px;\n  margin-bottom: 0;\n}\n.modal-footer .btn-group .btn + .btn {\n  margin-left: -1px;\n}\n.modal-footer .btn-block + .btn-block {\n  margin-left: 0;\n}\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n@media (min-width: 768px) {\n  .modal-dialog {\n    width: 600px;\n    margin: 30px auto;\n  }\n  .modal-content {\n    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);\n  }\n  .modal-sm {\n    width: 300px;\n  }\n}\n@media (min-width: 992px) {\n  .modal-lg {\n    width: 900px;\n  }\n}\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.42857143;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 12px;\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n.tooltip.in {\n  opacity: 0.9;\n  filter: alpha(opacity=90);\n}\n.tooltip.top {\n  margin-top: -3px;\n  padding: 5px 0;\n}\n.tooltip.right {\n  margin-left: 3px;\n  padding: 0 5px;\n}\n.tooltip.bottom {\n  margin-top: 3px;\n  padding: 5px 0;\n}\n.tooltip.left {\n  margin-left: -3px;\n  padding: 0 5px;\n}\n.tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 4px;\n}\n.tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.tooltip.top .tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n.tooltip.top-left .tooltip-arrow {\n  bottom: 0;\n  right: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n.tooltip.top-right .tooltip-arrow {\n  bottom: 0;\n  left: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n.tooltip.right .tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000;\n}\n.tooltip.left .tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000;\n}\n.tooltip.bottom .tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n.tooltip.bottom-left .tooltip-arrow {\n  top: 0;\n  right: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n.tooltip.bottom-right .tooltip-arrow {\n  top: 0;\n  left: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: none;\n  max-width: 276px;\n  padding: 1px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.42857143;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 14px;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n}\n.popover.top {\n  margin-top: -10px;\n}\n.popover.right {\n  margin-left: 10px;\n}\n.popover.bottom {\n  margin-top: 10px;\n}\n.popover.left {\n  margin-left: -10px;\n}\n.popover-title {\n  margin: 0;\n  padding: 8px 14px;\n  font-size: 14px;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-radius: 5px 5px 0 0;\n}\n.popover-content {\n  padding: 9px 14px;\n}\n.popover > .arrow,\n.popover > .arrow:after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.popover > .arrow {\n  border-width: 11px;\n}\n.popover > .arrow:after {\n  border-width: 10px;\n  content: \"\";\n}\n.popover.top > .arrow {\n  left: 50%;\n  margin-left: -11px;\n  border-bottom-width: 0;\n  border-top-color: #999999;\n  border-top-color: rgba(0, 0, 0, 0.25);\n  bottom: -11px;\n}\n.popover.top > .arrow:after {\n  content: \" \";\n  bottom: 1px;\n  margin-left: -10px;\n  border-bottom-width: 0;\n  border-top-color: #fff;\n}\n.popover.right > .arrow {\n  top: 50%;\n  left: -11px;\n  margin-top: -11px;\n  border-left-width: 0;\n  border-right-color: #999999;\n  border-right-color: rgba(0, 0, 0, 0.25);\n}\n.popover.right > .arrow:after {\n  content: \" \";\n  left: 1px;\n  bottom: -10px;\n  border-left-width: 0;\n  border-right-color: #fff;\n}\n.popover.bottom > .arrow {\n  left: 50%;\n  margin-left: -11px;\n  border-top-width: 0;\n  border-bottom-color: #999999;\n  border-bottom-color: rgba(0, 0, 0, 0.25);\n  top: -11px;\n}\n.popover.bottom > .arrow:after {\n  content: \" \";\n  top: 1px;\n  margin-left: -10px;\n  border-top-width: 0;\n  border-bottom-color: #fff;\n}\n.popover.left > .arrow {\n  top: 50%;\n  right: -11px;\n  margin-top: -11px;\n  border-right-width: 0;\n  border-left-color: #999999;\n  border-left-color: rgba(0, 0, 0, 0.25);\n}\n.popover.left > .arrow:after {\n  content: \" \";\n  right: 1px;\n  border-right-width: 0;\n  border-left-color: #fff;\n  bottom: -10px;\n}\n.carousel {\n  position: relative;\n}\n.carousel-inner {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n}\n.carousel-inner > .item {\n  display: none;\n  position: relative;\n  -webkit-transition: 0.6s ease-in-out left;\n  -o-transition: 0.6s ease-in-out left;\n  transition: 0.6s ease-in-out left;\n}\n.carousel-inner > .item > img,\n.carousel-inner > .item > a > img {\n  line-height: 1;\n}\n@media all and (transform-3d), (-webkit-transform-3d) {\n  .carousel-inner > .item {\n    -webkit-transition: -webkit-transform 0.6s ease-in-out;\n    -moz-transition: -moz-transform 0.6s ease-in-out;\n    -o-transition: -o-transform 0.6s ease-in-out;\n    transition: transform 0.6s ease-in-out;\n    -webkit-backface-visibility: hidden;\n    -moz-backface-visibility: hidden;\n    backface-visibility: hidden;\n    -webkit-perspective: 1000px;\n    -moz-perspective: 1000px;\n    perspective: 1000px;\n  }\n  .carousel-inner > .item.next,\n  .carousel-inner > .item.active.right {\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n    left: 0;\n  }\n  .carousel-inner > .item.prev,\n  .carousel-inner > .item.active.left {\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n    left: 0;\n  }\n  .carousel-inner > .item.next.left,\n  .carousel-inner > .item.prev.right,\n  .carousel-inner > .item.active {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n    left: 0;\n  }\n}\n.carousel-inner > .active,\n.carousel-inner > .next,\n.carousel-inner > .prev {\n  display: block;\n}\n.carousel-inner > .active {\n  left: 0;\n}\n.carousel-inner > .next,\n.carousel-inner > .prev {\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.carousel-inner > .next {\n  left: 100%;\n}\n.carousel-inner > .prev {\n  left: -100%;\n}\n.carousel-inner > .next.left,\n.carousel-inner > .prev.right {\n  left: 0;\n}\n.carousel-inner > .active.left {\n  left: -100%;\n}\n.carousel-inner > .active.right {\n  left: 100%;\n}\n.carousel-control {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 15%;\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n  font-size: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\n  background-color: rgba(0, 0, 0, 0);\n}\n.carousel-control.left {\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n  background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);\n}\n.carousel-control.right {\n  left: auto;\n  right: 0;\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n  background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);\n}\n.carousel-control:hover,\n.carousel-control:focus {\n  outline: 0;\n  color: #fff;\n  text-decoration: none;\n  opacity: 0.9;\n  filter: alpha(opacity=90);\n}\n.carousel-control .icon-prev,\n.carousel-control .icon-next,\n.carousel-control .glyphicon-chevron-left,\n.carousel-control .glyphicon-chevron-right {\n  position: absolute;\n  top: 50%;\n  margin-top: -10px;\n  z-index: 5;\n  display: inline-block;\n}\n.carousel-control .icon-prev,\n.carousel-control .glyphicon-chevron-left {\n  left: 50%;\n  margin-left: -10px;\n}\n.carousel-control .icon-next,\n.carousel-control .glyphicon-chevron-right {\n  right: 50%;\n  margin-right: -10px;\n}\n.carousel-control .icon-prev,\n.carousel-control .icon-next {\n  width: 20px;\n  height: 20px;\n  line-height: 1;\n  font-family: serif;\n}\n.carousel-control .icon-prev:before {\n  content: '\\2039';\n}\n.carousel-control .icon-next:before {\n  content: '\\203A';\n}\n.carousel-indicators {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  z-index: 15;\n  width: 60%;\n  margin-left: -30%;\n  padding-left: 0;\n  list-style: none;\n  text-align: center;\n}\n.carousel-indicators li {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin: 1px;\n  text-indent: -999px;\n  border: 1px solid #fff;\n  border-radius: 10px;\n  cursor: pointer;\n  background-color: #000 \\9;\n  background-color: rgba(0, 0, 0, 0);\n}\n.carousel-indicators .active {\n  margin: 0;\n  width: 12px;\n  height: 12px;\n  background-color: #fff;\n}\n.carousel-caption {\n  position: absolute;\n  left: 15%;\n  right: 15%;\n  bottom: 20px;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\n}\n.carousel-caption .btn {\n  text-shadow: none;\n}\n@media screen and (min-width: 768px) {\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next {\n    width: 30px;\n    height: 30px;\n    margin-top: -10px;\n    font-size: 30px;\n  }\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .icon-prev {\n    margin-left: -10px;\n  }\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-next {\n    margin-right: -10px;\n  }\n  .carousel-caption {\n    left: 20%;\n    right: 20%;\n    padding-bottom: 30px;\n  }\n  .carousel-indicators {\n    bottom: 20px;\n  }\n}\n.clearfix:before,\n.clearfix:after,\n.dl-horizontal dd:before,\n.dl-horizontal dd:after,\n.container:before,\n.container:after,\n.container-fluid:before,\n.container-fluid:after,\n.row:before,\n.row:after,\n.form-horizontal .form-group:before,\n.form-horizontal .form-group:after,\n.btn-toolbar:before,\n.btn-toolbar:after,\n.btn-group-vertical > .btn-group:before,\n.btn-group-vertical > .btn-group:after,\n.nav:before,\n.nav:after,\n.navbar:before,\n.navbar:after,\n.navbar-header:before,\n.navbar-header:after,\n.navbar-collapse:before,\n.navbar-collapse:after,\n.pager:before,\n.pager:after,\n.panel-body:before,\n.panel-body:after,\n.modal-header:before,\n.modal-header:after,\n.modal-footer:before,\n.modal-footer:after {\n  content: \" \";\n  display: table;\n}\n.clearfix:after,\n.dl-horizontal dd:after,\n.container:after,\n.container-fluid:after,\n.row:after,\n.form-horizontal .form-group:after,\n.btn-toolbar:after,\n.btn-group-vertical > .btn-group:after,\n.nav:after,\n.navbar:after,\n.navbar-header:after,\n.navbar-collapse:after,\n.pager:after,\n.panel-body:after,\n.modal-header:after,\n.modal-footer:after {\n  clear: both;\n}\n.center-block {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n.pull-right {\n  float: right !important;\n}\n.pull-left {\n  float: left !important;\n}\n.hide {\n  display: none !important;\n}\n.show {\n  display: block !important;\n}\n.invisible {\n  visibility: hidden;\n}\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.hidden {\n  display: none !important;\n}\n.affix {\n  position: fixed;\n}\n@-ms-viewport {\n  width: device-width;\n}\n.visible-xs,\n.visible-sm,\n.visible-md,\n.visible-lg {\n  display: none !important;\n}\n.visible-xs-block,\n.visible-xs-inline,\n.visible-xs-inline-block,\n.visible-sm-block,\n.visible-sm-inline,\n.visible-sm-inline-block,\n.visible-md-block,\n.visible-md-inline,\n.visible-md-inline-block,\n.visible-lg-block,\n.visible-lg-inline,\n.visible-lg-inline-block {\n  display: none !important;\n}\n@media (max-width: 767px) {\n  .visible-xs {\n    display: block !important;\n  }\n  table.visible-xs {\n    display: table !important;\n  }\n  tr.visible-xs {\n    display: table-row !important;\n  }\n  th.visible-xs,\n  td.visible-xs {\n    display: table-cell !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-block {\n    display: block !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-inline {\n    display: inline !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm {\n    display: block !important;\n  }\n  table.visible-sm {\n    display: table !important;\n  }\n  tr.visible-sm {\n    display: table-row !important;\n  }\n  th.visible-sm,\n  td.visible-sm {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-block {\n    display: block !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md {\n    display: block !important;\n  }\n  table.visible-md {\n    display: table !important;\n  }\n  tr.visible-md {\n    display: table-row !important;\n  }\n  th.visible-md,\n  td.visible-md {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-block {\n    display: block !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg {\n    display: block !important;\n  }\n  table.visible-lg {\n    display: table !important;\n  }\n  tr.visible-lg {\n    display: table-row !important;\n  }\n  th.visible-lg,\n  td.visible-lg {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-block {\n    display: block !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (max-width: 767px) {\n  .hidden-xs {\n    display: none !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .hidden-sm {\n    display: none !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .hidden-md {\n    display: none !important;\n  }\n}\n@media (min-width: 1200px) {\n  .hidden-lg {\n    display: none !important;\n  }\n}\n.visible-print {\n  display: none !important;\n}\n@media print {\n  .visible-print {\n    display: block !important;\n  }\n  table.visible-print {\n    display: table !important;\n  }\n  tr.visible-print {\n    display: table-row !important;\n  }\n  th.visible-print,\n  td.visible-print {\n    display: table-cell !important;\n  }\n}\n.visible-print-block {\n  display: none !important;\n}\n@media print {\n  .visible-print-block {\n    display: block !important;\n  }\n}\n.visible-print-inline {\n  display: none !important;\n}\n@media print {\n  .visible-print-inline {\n    display: inline !important;\n  }\n}\n.visible-print-inline-block {\n  display: none !important;\n}\n@media print {\n  .visible-print-inline-block {\n    display: inline-block !important;\n  }\n}\n@media print {\n  .hidden-print {\n    display: none !important;\n  }\n}\n", ""]);

	// exports


/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "f4769f9bdb7466be65088239c12046d1.eot";

/***/ },
/* 218 */
/***/ function(module, exports) {

	module.exports = "data:application/octet-stream;base64,bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArICI0NDhjMzRhNTZkNjk5YzI5MTE3YWRjNjRjNDNhZmZlYi53b2ZmMiI7"

/***/ },
/* 219 */
/***/ function(module, exports) {

	module.exports = "data:application/font-woff;base64,bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArICJmYTI3NzIzMjdmNTVkODE5ODMwMWZkYjhiY2ZjODE1OC53b2ZmIjs="

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e18bbf611f2a2e43afc071aa2f4e1512.ttf";

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "89889688147bd7575d6327160d64e760.svg";

/***/ }
/******/ ]);