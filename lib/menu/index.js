"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _rcMenu = _interopRequireWildcard(require("rc-menu"));

var _classnames = _interopRequireDefault(require("classnames"));

var _omit = _interopRequireDefault(require("omit.js"));

var _SubMenu = _interopRequireDefault(require("./SubMenu"));

var _MenuItem = _interopRequireDefault(require("./MenuItem"));

var _configProvider = require("../config-provider");

var _devWarning = _interopRequireDefault(require("../_util/devWarning"));

var _Sider = require("../layout/Sider");

var _raf = _interopRequireDefault(require("../_util/raf"));

var _motion = _interopRequireDefault(require("../_util/motion"));

var _MenuContext = _interopRequireDefault(require("./MenuContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var InternalMenu =
/** @class */
function () {
  var InternalMenu = /*#__PURE__*/function (_React$Component) {
    _inherits(InternalMenu, _React$Component);

    var _super = _createSuper(InternalMenu);

    function InternalMenu(props) {
      var _this;

      _classCallCheck(this, InternalMenu);

      _this = _super.call(this, props); // Restore vertical mode when menu is collapsed responsively when mounted
      // https://github.com/ant-design/ant-design/issues/13104
      // TODO: not a perfect solution, looking a new way to avoid setting switchingModeFromInline in this situation

      _this.handleMouseEnter = function (e) {
        _this.restoreModeVerticalFromInline();

        var onMouseEnter = _this.props.onMouseEnter;

        if (onMouseEnter) {
          onMouseEnter(e);
        }
      };

      _this.handleTransitionEnd = function (e) {
        // when inlineCollapsed menu width animation finished
        // https://github.com/ant-design/ant-design/issues/12864
        var widthCollapsed = e.propertyName === 'width' && e.target === e.currentTarget; // Fix SVGElement e.target.className.indexOf is not a function
        // https://github.com/ant-design/ant-design/issues/15699

        var className = e.target.className; // SVGAnimatedString.animVal should be identical to SVGAnimatedString.baseVal, unless during an animation.

        var classNameValue = Object.prototype.toString.call(className) === '[object SVGAnimatedString]' ? className.animVal : className; // Fix for <Menu style={{ width: '100%' }} />, the width transition won't trigger when menu is collapsed
        // https://github.com/ant-design/ant-design-pro/issues/2783

        var iconScaled = e.propertyName === 'font-size' && classNameValue.indexOf('anticon') >= 0;

        if (widthCollapsed || iconScaled) {
          _this.restoreModeVerticalFromInline();
        }
      };

      _this.handleClick = function (e) {
        _this.handleOpenChange([]);

        var onClick = _this.props.onClick;

        if (onClick) {
          onClick(e);
        }
      };

      _this.handleOpenChange = function (openKeys) {
        _this.setOpenKeys(openKeys);

        var onOpenChange = _this.props.onOpenChange;

        if (onOpenChange) {
          onOpenChange(openKeys);
        }
      };

      _this.renderMenu = function (_ref) {
        var getPopupContainer = _ref.getPopupContainer,
            getPrefixCls = _ref.getPrefixCls,
            direction = _ref.direction;
        var _this$props = _this.props,
            customizePrefixCls = _this$props.prefixCls,
            className = _this$props.className,
            theme = _this$props.theme,
            collapsedWidth = _this$props.collapsedWidth;
        var openKeys = _this.state.openKeys;
        var passProps = (0, _omit["default"])(_this.props, ['collapsedWidth', 'siderCollapsed']);

        var menuMode = _this.getRealMenuMode();

        var menuOpenMotion = _this.getOpenMotionProps(menuMode);

        var prefixCls = getPrefixCls('menu', customizePrefixCls);
        var menuClassName = (0, _classnames["default"])(className, "".concat(prefixCls, "-").concat(theme), _defineProperty({}, "".concat(prefixCls, "-inline-collapsed"), _this.getInlineCollapsed()));

        var menuProps = _extends({
          openKeys: openKeys,
          onOpenChange: _this.handleOpenChange,
          className: menuClassName,
          mode: menuMode
        }, menuOpenMotion);

        if (menuMode !== 'inline') {
          // closing vertical popup submenu after click it
          menuProps.onClick = _this.handleClick;
        } // https://github.com/ant-design/ant-design/issues/8587


        var hideMenu = _this.getInlineCollapsed() && (collapsedWidth === 0 || collapsedWidth === '0' || collapsedWidth === '0px');

        if (hideMenu) {
          menuProps.openKeys = [];
        }

        return /*#__PURE__*/React.createElement(_MenuContext["default"].Provider, {
          value: {
            inlineCollapsed: _this.getInlineCollapsed() || false,
            antdMenuTheme: theme,
            direction: direction
          }
        }, /*#__PURE__*/React.createElement(_rcMenu["default"], _extends({
          getPopupContainer: getPopupContainer
        }, passProps, menuProps, {
          prefixCls: prefixCls,
          onTransitionEnd: _this.handleTransitionEnd,
          onMouseEnter: _this.handleMouseEnter,
          direction: direction
        })));
      };

      (0, _devWarning["default"])(!('inlineCollapsed' in props && props.mode !== 'inline'), 'Menu', '`inlineCollapsed` should only be used when `mode` is inline.');
      (0, _devWarning["default"])(!(props.siderCollapsed !== undefined && 'inlineCollapsed' in props), 'Menu', '`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.');
      var openKeys;

      if ('openKeys' in props) {
        openKeys = props.openKeys;
      } else if ('defaultOpenKeys' in props) {
        openKeys = props.defaultOpenKeys;
      }

      _this.state = {
        openKeys: openKeys || [],
        switchingModeFromInline: false,
        inlineOpenKeys: [],
        prevProps: props
      };
      return _this;
    }

    _createClass(InternalMenu, [{
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        _raf["default"].cancel(this.mountRafId);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var _this$props2 = this.props,
            siderCollapsed = _this$props2.siderCollapsed,
            inlineCollapsed = _this$props2.inlineCollapsed,
            onOpenChange = _this$props2.onOpenChange;

        if (!prevProps.inlineCollapsed && inlineCollapsed || !prevProps.siderCollapsed && siderCollapsed) {
          onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange([]);
        }
      }
    }, {
      key: "setOpenKeys",
      value: function setOpenKeys(openKeys) {
        if (!('openKeys' in this.props)) {
          this.setState({
            openKeys: openKeys
          });
        }
      }
    }, {
      key: "getRealMenuMode",
      value: function getRealMenuMode() {
        var mode = this.props.mode;
        var switchingModeFromInline = this.state.switchingModeFromInline;
        var inlineCollapsed = this.getInlineCollapsed();

        if (switchingModeFromInline && inlineCollapsed) {
          return 'inline';
        }

        return inlineCollapsed ? 'vertical' : mode;
      }
    }, {
      key: "getInlineCollapsed",
      value: function getInlineCollapsed() {
        var _this$props3 = this.props,
            inlineCollapsed = _this$props3.inlineCollapsed,
            siderCollapsed = _this$props3.siderCollapsed;

        if (siderCollapsed !== undefined) {
          return siderCollapsed;
        }

        return inlineCollapsed;
      }
    }, {
      key: "getOpenMotionProps",
      value: function getOpenMotionProps(menuMode) {
        var _this$props4 = this.props,
            openTransitionName = _this$props4.openTransitionName,
            openAnimation = _this$props4.openAnimation,
            motion = _this$props4.motion;
        var switchingModeFromInline = this.state.switchingModeFromInline; // Provides by user

        if (motion) {
          return {
            motion: motion
          };
        }

        if (openAnimation) {
          (0, _devWarning["default"])(typeof openAnimation === 'string', 'Menu', '`openAnimation` do not support object. Please use `motion` instead.');
          return {
            openAnimation: openAnimation
          };
        }

        if (openTransitionName) {
          return {
            openTransitionName: openTransitionName
          };
        } // Default logic


        if (menuMode === 'horizontal') {
          return {
            motion: {
              motionName: 'slide-up'
            }
          };
        }

        if (menuMode === 'inline') {
          return {
            motion: _motion["default"]
          };
        } // When mode switch from inline
        // submenu should hide without animation


        return {
          motion: {
            motionName: switchingModeFromInline ? '' : 'zoom-big'
          }
        };
      }
    }, {
      key: "restoreModeVerticalFromInline",
      value: function restoreModeVerticalFromInline() {
        var switchingModeFromInline = this.state.switchingModeFromInline;

        if (switchingModeFromInline) {
          this.setState({
            switchingModeFromInline: false
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, this.renderMenu);
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(nextProps, prevState) {
        var prevProps = prevState.prevProps;
        var newState = {
          prevProps: nextProps
        };

        if (prevProps.mode === 'inline' && nextProps.mode !== 'inline') {
          newState.switchingModeFromInline = true;
        }

        if ('openKeys' in nextProps) {
          newState.openKeys = nextProps.openKeys;
        } else {
          // [Legacy] Old code will return after `openKeys` changed.
          // Not sure the reason, we should keep this logic still.
          if (nextProps.inlineCollapsed && !prevProps.inlineCollapsed || nextProps.siderCollapsed && !prevProps.siderCollapsed) {
            newState.switchingModeFromInline = true;
            newState.inlineOpenKeys = prevState.openKeys;
            newState.openKeys = [];
          }

          if (!nextProps.inlineCollapsed && prevProps.inlineCollapsed || !nextProps.siderCollapsed && prevProps.siderCollapsed) {
            newState.openKeys = prevState.inlineOpenKeys;
            newState.inlineOpenKeys = [];
          }
        }

        return newState;
      }
    }]);

    return InternalMenu;
  }(React.Component);

  InternalMenu.defaultProps = {
    className: '',
    theme: 'light',
    focusable: false
  };
  return InternalMenu;
}(); // We should keep this as ref-able


var Menu =
/** @class */
function () {
  var Menu = /*#__PURE__*/function (_React$Component2) {
    _inherits(Menu, _React$Component2);

    var _super2 = _createSuper(Menu);

    function Menu() {
      _classCallCheck(this, Menu);

      return _super2.apply(this, arguments);
    }

    _createClass(Menu, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        return /*#__PURE__*/React.createElement(_Sider.SiderContext.Consumer, null, function (context) {
          return /*#__PURE__*/React.createElement(InternalMenu, _extends({}, _this2.props, context));
        });
      }
    }]);

    return Menu;
  }(React.Component);

  Menu.Divider = _rcMenu.Divider;
  Menu.Item = _MenuItem["default"];
  Menu.SubMenu = _SubMenu["default"];
  Menu.ItemGroup = _rcMenu.ItemGroup;
  return Menu;
}();

var _default = Menu;
exports["default"] = _default;