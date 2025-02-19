"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _rcDrawer = _interopRequireDefault(require("rc-drawer"));

var _getScrollBarSize = _interopRequireDefault(require("rc-util/lib/getScrollBarSize"));

var _CloseOutlined = _interopRequireDefault(require("@ant-design/icons/CloseOutlined"));

var _classnames = _interopRequireDefault(require("classnames"));

var _omit = _interopRequireDefault(require("omit.js"));

var _context = require("../config-provider/context");

var _type = require("../_util/type");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var DrawerContext = React.createContext(null);
var PlacementTypes = (0, _type.tuple)('top', 'right', 'bottom', 'left');

var Drawer =
/** @class */
function () {
  var Drawer = /*#__PURE__*/function (_React$Component) {
    _inherits(Drawer, _React$Component);

    var _super = _createSuper(Drawer);

    function Drawer() {
      var _this;

      _classCallCheck(this, Drawer);

      _this = _super.apply(this, arguments);
      _this.state = {
        push: false
      };

      _this.push = function () {
        _this.setState({
          push: true
        });
      };

      _this.pull = function () {
        _this.setState({
          push: false
        });
      };

      _this.onDestroyTransitionEnd = function () {
        var isDestroyOnClose = _this.getDestroyOnClose();

        if (!isDestroyOnClose) {
          return;
        }

        if (!_this.props.visible) {
          _this.destroyClose = true;

          _this.forceUpdate();
        }
      };

      _this.getDestroyOnClose = function () {
        return _this.props.destroyOnClose && !_this.props.visible;
      }; // get drawer push width or height


      _this.getPushTransform = function (placement) {
        if (placement === 'left' || placement === 'right') {
          return "translateX(".concat(placement === 'left' ? 180 : -180, "px)");
        }

        if (placement === 'top' || placement === 'bottom') {
          return "translateY(".concat(placement === 'top' ? 180 : -180, "px)");
        }
      };

      _this.getRcDrawerStyle = function () {
        var _this$props = _this.props,
            zIndex = _this$props.zIndex,
            placement = _this$props.placement,
            mask = _this$props.mask,
            style = _this$props.style;
        var push = _this.state.push; // 当无 mask 时，将 width 应用到外层容器上
        // 解决 https://github.com/ant-design/ant-design/issues/12401 的问题

        var offsetStyle = mask ? {} : _this.getOffsetStyle();
        return _extends(_extends({
          zIndex: zIndex,
          transform: push ? _this.getPushTransform(placement) : undefined
        }, offsetStyle), style);
      }; // render drawer body dom


      _this.renderBody = function () {
        var _this$props2 = _this.props,
            bodyStyle = _this$props2.bodyStyle,
            drawerStyle = _this$props2.drawerStyle,
            prefixCls = _this$props2.prefixCls,
            visible = _this$props2.visible;

        if (_this.destroyClose && !visible) {
          return null;
        }

        _this.destroyClose = false;
        var containerStyle = {};

        var isDestroyOnClose = _this.getDestroyOnClose();

        if (isDestroyOnClose) {
          // Increase the opacity transition, delete children after closing.
          containerStyle.opacity = 0;
          containerStyle.transition = 'opacity .3s';
        }

        return /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-wrapper-body"),
          style: _extends(_extends({}, containerStyle), drawerStyle),
          onTransitionEnd: _this.onDestroyTransitionEnd
        }, _this.renderHeader(), /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-body"),
          style: bodyStyle
        }, _this.props.children), _this.renderFooter());
      }; // render Provider for Multi-level drawer


      _this.renderProvider = function (value) {
        var _a = _this.props,
            prefixCls = _a.prefixCls,
            placement = _a.placement,
            className = _a.className,
            mask = _a.mask,
            direction = _a.direction,
            visible = _a.visible,
            rest = __rest(_a, ["prefixCls", "placement", "className", "mask", "direction", "visible"]);

        _this.parentDrawer = value;
        var drawerClassName = (0, _classnames["default"])(className, _defineProperty({
          'no-mask': !mask
        }, "".concat(prefixCls, "-rtl"), direction === 'rtl'));
        var offsetStyle = mask ? _this.getOffsetStyle() : {};
        return /*#__PURE__*/React.createElement(DrawerContext.Provider, {
          value: _assertThisInitialized(_this)
        }, /*#__PURE__*/React.createElement(_rcDrawer["default"], _extends({
          handler: false
        }, (0, _omit["default"])(rest, ['zIndex', 'style', 'closable', 'destroyOnClose', 'drawerStyle', 'headerStyle', 'bodyStyle', 'footerStyle', 'footer', 'locale', 'title', 'push', 'visible', 'getPopupContainer', 'rootPrefixCls', 'getPrefixCls', 'renderEmpty', 'csp', 'pageHeader', 'autoInsertSpaceInButton', 'width', 'height']), offsetStyle, {
          prefixCls: prefixCls,
          open: visible,
          showMask: mask,
          placement: placement,
          style: _this.getRcDrawerStyle(),
          className: drawerClassName
        }), _this.renderBody()));
      };

      return _this;
    }

    _createClass(Drawer, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        // fix: delete drawer in child and re-render, no push started.
        // <Drawer>{show && <Drawer />}</Drawer>
        var visible = this.props.visible;

        if (visible && this.parentDrawer) {
          this.parentDrawer.push();
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(preProps) {
        var visible = this.props.visible;

        if (preProps.visible !== visible && this.parentDrawer) {
          if (visible) {
            this.parentDrawer.push();
          } else {
            this.parentDrawer.pull();
          }
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        // unmount drawer in child, clear push.
        if (this.parentDrawer) {
          this.parentDrawer.pull();
          this.parentDrawer = null;
        }
      }
    }, {
      key: "getOffsetStyle",
      value: function getOffsetStyle() {
        var _this$props3 = this.props,
            placement = _this$props3.placement,
            width = _this$props3.width,
            height = _this$props3.height,
            visible = _this$props3.visible,
            mask = _this$props3.mask; // https://github.com/ant-design/ant-design/issues/24287

        if (!visible && !mask) {
          return {};
        }

        var offsetStyle = {};

        if (placement === 'left' || placement === 'right') {
          offsetStyle.width = width;
        } else {
          offsetStyle.height = height;
        }

        return offsetStyle;
      }
    }, {
      key: "renderHeader",
      value: function renderHeader() {
        var _this$props4 = this.props,
            title = _this$props4.title,
            prefixCls = _this$props4.prefixCls,
            closable = _this$props4.closable,
            headerStyle = _this$props4.headerStyle;

        if (!title && !closable) {
          return null;
        }

        var headerClassName = title ? "".concat(prefixCls, "-header") : "".concat(prefixCls, "-header-no-title");
        return /*#__PURE__*/React.createElement("div", {
          className: headerClassName,
          style: headerStyle
        }, title && /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-title")
        }, title), closable && this.renderCloseIcon());
      }
    }, {
      key: "renderFooter",
      value: function renderFooter() {
        var _this$props5 = this.props,
            footer = _this$props5.footer,
            footerStyle = _this$props5.footerStyle,
            prefixCls = _this$props5.prefixCls;

        if (!footer) {
          return null;
        }

        var footerClassName = "".concat(prefixCls, "-footer");
        return /*#__PURE__*/React.createElement("div", {
          className: footerClassName,
          style: footerStyle
        }, footer);
      }
    }, {
      key: "renderCloseIcon",
      value: function renderCloseIcon() {
        var _this$props6 = this.props,
            closable = _this$props6.closable,
            prefixCls = _this$props6.prefixCls,
            onClose = _this$props6.onClose;
        return closable &&
        /*#__PURE__*/
        // eslint-disable-next-line react/button-has-type
        React.createElement("button", {
          onClick: onClose,
          "aria-label": "Close",
          className: "".concat(prefixCls, "-close"),
          style: {
            '--scroll-bar': "".concat((0, _getScrollBarSize["default"])(), "px")
          }
        }, /*#__PURE__*/React.createElement(_CloseOutlined["default"], null));
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement(DrawerContext.Consumer, null, this.renderProvider);
      }
    }]);

    return Drawer;
  }(React.Component);

  Drawer.defaultProps = {
    width: 256,
    height: 256,
    closable: true,
    placement: 'right',
    maskClosable: true,
    mask: true,
    level: null,
    keyboard: true
  };
  return Drawer;
}();

var _default = (0, _context.withConfigConsumer)({
  prefixCls: 'drawer'
})(Drawer);

exports["default"] = _default;