"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _configProvider = require("../config-provider");

var _context = _interopRequireDefault(require("./context"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var AnchorLink =
/** @class */
function () {
  var AnchorLink = /*#__PURE__*/function (_React$Component) {
    _inherits(AnchorLink, _React$Component);

    var _super = _createSuper(AnchorLink);

    function AnchorLink() {
      var _this;

      _classCallCheck(this, AnchorLink);

      _this = _super.apply(this, arguments);

      _this.handleClick = function (e) {
        var _this$context = _this.context,
            scrollTo = _this$context.scrollTo,
            onClick = _this$context.onClick;
        var _this$props = _this.props,
            href = _this$props.href,
            title = _this$props.title;

        if (onClick) {
          onClick(e, {
            title: title,
            href: href
          });
        }

        scrollTo(href);
      };

      _this.renderAnchorLink = function (_ref) {
        var getPrefixCls = _ref.getPrefixCls;
        var _this$props2 = _this.props,
            customizePrefixCls = _this$props2.prefixCls,
            href = _this$props2.href,
            title = _this$props2.title,
            children = _this$props2.children,
            className = _this$props2.className,
            target = _this$props2.target;
        var prefixCls = getPrefixCls('anchor', customizePrefixCls);
        var active = _this.context.activeLink === href;
        var wrapperClassName = (0, _classnames["default"])(className, "".concat(prefixCls, "-link"), _defineProperty({}, "".concat(prefixCls, "-link-active"), active));
        var titleClassName = (0, _classnames["default"])("".concat(prefixCls, "-link-title"), _defineProperty({}, "".concat(prefixCls, "-link-title-active"), active));
        return /*#__PURE__*/React.createElement("div", {
          className: wrapperClassName
        }, /*#__PURE__*/React.createElement("a", {
          className: titleClassName,
          href: href,
          title: typeof title === 'string' ? title : '',
          target: target,
          onClick: _this.handleClick
        }, title), children);
      };

      return _this;
    }

    _createClass(AnchorLink, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.context.registerLink(this.props.href);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(_ref2) {
        var prevHref = _ref2.href;
        var href = this.props.href;

        if (prevHref !== href) {
          this.context.unregisterLink(prevHref);
          this.context.registerLink(href);
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.context.unregisterLink(this.props.href);
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, this.renderAnchorLink);
      }
    }]);

    return AnchorLink;
  }(React.Component);

  AnchorLink.defaultProps = {
    href: '#'
  };
  AnchorLink.contextType = _context["default"];
  return AnchorLink;
}();

var _default = AnchorLink;
exports["default"] = _default;