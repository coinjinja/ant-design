"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var ReactDOM = _interopRequireWildcard(require("react-dom"));

var _classnames = _interopRequireDefault(require("classnames"));

var _addEventListener = _interopRequireDefault(require("rc-util/lib/Dom/addEventListener"));

var _affix = _interopRequireDefault(require("../affix"));

var _configProvider = require("../config-provider");

var _scrollTo = _interopRequireDefault(require("../_util/scrollTo"));

var _getScroll = _interopRequireDefault(require("../_util/getScroll"));

var _context = _interopRequireDefault(require("./context"));

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

function getDefaultContainer() {
  return window;
}

function getOffsetTop(element, container) {
  if (!element.getClientRects().length) {
    return 0;
  }

  var rect = element.getBoundingClientRect();

  if (rect.width || rect.height) {
    if (container === window) {
      container = element.ownerDocument.documentElement;
      return rect.top - container.clientTop;
    }

    return rect.top - container.getBoundingClientRect().top;
  }

  return rect.top;
}

var sharpMatcherRegx = /#(\S+)$/;

var Anchor =
/** @class */
function () {
  var Anchor = /*#__PURE__*/function (_React$Component) {
    _inherits(Anchor, _React$Component);

    var _super = _createSuper(Anchor);

    function Anchor() {
      var _this;

      _classCallCheck(this, Anchor);

      _this = _super.apply(this, arguments);
      _this.state = {
        activeLink: null
      };
      _this.links = []; // Context

      _this.registerLink = function (link) {
        if (!_this.links.includes(link)) {
          _this.links.push(link);
        }
      };

      _this.unregisterLink = function (link) {
        var index = _this.links.indexOf(link);

        if (index !== -1) {
          _this.links.splice(index, 1);
        }
      };

      _this.getContainer = function () {
        var getTargetContainer = _this.context.getTargetContainer;
        var getContainer = _this.props.getContainer;
        var getFunc = getContainer || getTargetContainer || getDefaultContainer;
        return getFunc();
      };

      _this.handleScrollTo = function (link) {
        var _this$props = _this.props,
            offsetTop = _this$props.offsetTop,
            targetOffset = _this$props.targetOffset;

        _this.setCurrentActiveLink(link);

        var container = _this.getContainer();

        var scrollTop = (0, _getScroll["default"])(container, true);
        var sharpLinkMatch = sharpMatcherRegx.exec(link);

        if (!sharpLinkMatch) {
          return;
        }

        var targetElement = document.getElementById(sharpLinkMatch[1]);

        if (!targetElement) {
          return;
        }

        var eleOffsetTop = getOffsetTop(targetElement, container);
        var y = scrollTop + eleOffsetTop;
        y -= targetOffset !== undefined ? targetOffset : offsetTop || 0;
        _this.animating = true;
        (0, _scrollTo["default"])(y, {
          callback: function callback() {
            _this.animating = false;
          },
          getContainer: _this.getContainer
        });
      };

      _this.saveInkNode = function (node) {
        _this.inkNode = node;
      };

      _this.setCurrentActiveLink = function (link) {
        var activeLink = _this.state.activeLink;
        var onChange = _this.props.onChange;

        if (activeLink !== link) {
          _this.setState({
            activeLink: link
          });

          if (onChange) {
            onChange(link);
          }
        }
      };

      _this.handleScroll = function () {
        if (_this.animating) {
          return;
        }

        var _this$props2 = _this.props,
            offsetTop = _this$props2.offsetTop,
            bounds = _this$props2.bounds,
            targetOffset = _this$props2.targetOffset;

        var currentActiveLink = _this.getCurrentAnchor(targetOffset !== undefined ? targetOffset : offsetTop || 0, bounds);

        _this.setCurrentActiveLink(currentActiveLink);
      };

      _this.updateInk = function () {
        var _assertThisInitialize = _assertThisInitialized(_this),
            prefixCls = _assertThisInitialize.prefixCls;

        var anchorNode = ReactDOM.findDOMNode(_assertThisInitialized(_this));
        var linkNode = anchorNode.getElementsByClassName("".concat(prefixCls, "-link-title-active"))[0];

        if (linkNode) {
          _this.inkNode.style.top = "".concat(linkNode.offsetTop + linkNode.clientHeight / 2 - 4.5, "px");
        }
      };

      _this.render = function () {
        var _this$context = _this.context,
            getPrefixCls = _this$context.getPrefixCls,
            direction = _this$context.direction;
        var _this$props3 = _this.props,
            customizePrefixCls = _this$props3.prefixCls,
            _this$props3$classNam = _this$props3.className,
            className = _this$props3$classNam === void 0 ? '' : _this$props3$classNam,
            style = _this$props3.style,
            offsetTop = _this$props3.offsetTop,
            affix = _this$props3.affix,
            showInkInFixed = _this$props3.showInkInFixed,
            children = _this$props3.children;
        var activeLink = _this.state.activeLink;
        var prefixCls = getPrefixCls('anchor', customizePrefixCls); // To support old version react.
        // Have to add prefixCls on the instance.
        // https://github.com/facebook/react/issues/12397

        _this.prefixCls = prefixCls;
        var inkClass = (0, _classnames["default"])("".concat(prefixCls, "-ink-ball"), {
          visible: activeLink
        });
        var wrapperClass = (0, _classnames["default"])(className, "".concat(prefixCls, "-wrapper"), _defineProperty({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'));
        var anchorClass = (0, _classnames["default"])(prefixCls, {
          fixed: !affix && !showInkInFixed
        });

        var wrapperStyle = _extends({
          maxHeight: offsetTop ? "calc(100vh - ".concat(offsetTop, "px)") : '100vh'
        }, style);

        var anchorContent = /*#__PURE__*/React.createElement("div", {
          className: wrapperClass,
          style: wrapperStyle
        }, /*#__PURE__*/React.createElement("div", {
          className: anchorClass
        }, /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-ink")
        }, /*#__PURE__*/React.createElement("span", {
          className: inkClass,
          ref: _this.saveInkNode
        })), children));
        return /*#__PURE__*/React.createElement(_context["default"].Provider, {
          value: {
            registerLink: _this.registerLink,
            unregisterLink: _this.unregisterLink,
            activeLink: _this.state.activeLink,
            scrollTo: _this.handleScrollTo,
            onClick: _this.props.onClick
          }
        }, !affix ? anchorContent : /*#__PURE__*/React.createElement(_affix["default"], {
          offsetTop: offsetTop,
          target: _this.getContainer
        }, anchorContent));
      };

      return _this;
    }

    _createClass(Anchor, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.scrollContainer = this.getContainer();
        this.scrollEvent = (0, _addEventListener["default"])(this.scrollContainer, 'scroll', this.handleScroll);
        this.handleScroll();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        if (this.scrollEvent) {
          var currentContainer = this.getContainer();

          if (this.scrollContainer !== currentContainer) {
            this.scrollContainer = currentContainer;
            this.scrollEvent.remove();
            this.scrollEvent = (0, _addEventListener["default"])(this.scrollContainer, 'scroll', this.handleScroll);
            this.handleScroll();
          }
        }

        this.updateInk();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this.scrollEvent) {
          this.scrollEvent.remove();
        }
      }
    }, {
      key: "getCurrentAnchor",
      value: function getCurrentAnchor() {
        var offsetTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var bounds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
        var getCurrentAnchor = this.props.getCurrentAnchor;

        if (typeof getCurrentAnchor === 'function') {
          return getCurrentAnchor();
        }

        var linkSections = [];
        var container = this.getContainer();
        this.links.forEach(function (link) {
          var sharpLinkMatch = sharpMatcherRegx.exec(link.toString());

          if (!sharpLinkMatch) {
            return;
          }

          var target = document.getElementById(sharpLinkMatch[1]);

          if (target) {
            var top = getOffsetTop(target, container);

            if (top < offsetTop + bounds) {
              linkSections.push({
                link: link,
                top: top
              });
            }
          }
        });

        if (linkSections.length) {
          var maxSection = linkSections.reduce(function (prev, curr) {
            return curr.top > prev.top ? curr : prev;
          });
          return maxSection.link;
        }

        return '';
      }
    }]);

    return Anchor;
  }(React.Component);

  Anchor.defaultProps = {
    affix: true,
    showInkInFixed: false
  };
  Anchor.contextType = _configProvider.ConfigContext;
  return Anchor;
}();

var _default = Anchor;
exports["default"] = _default;