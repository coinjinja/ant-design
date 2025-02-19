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

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import * as React from 'react';
import classNames from 'classnames';
import { ConfigConsumer } from '../config-provider';
import devWarning from '../_util/devWarning';

var Avatar =
/** @class */
function () {
  var Avatar = /*#__PURE__*/function (_React$Component) {
    _inherits(Avatar, _React$Component);

    var _super = _createSuper(Avatar);

    function Avatar() {
      var _this;

      _classCallCheck(this, Avatar);

      _this = _super.apply(this, arguments);
      _this.state = {
        scale: 1,
        mounted: false,
        isImgExist: true
      };

      _this.setScale = function () {
        if (!_this.avatarChildren || !_this.avatarNode) {
          return;
        }

        var childrenWidth = _this.avatarChildren.offsetWidth; // offsetWidth avoid affecting be transform scale

        var nodeWidth = _this.avatarNode.offsetWidth;
        var _this$props$gap = _this.props.gap,
            gap = _this$props$gap === void 0 ? 4 : _this$props$gap; // denominator is 0 is no meaning

        if (childrenWidth !== 0 && nodeWidth !== 0 && (_this.lastChildrenWidth !== childrenWidth || _this.lastNodeWidth !== nodeWidth)) {
          _this.lastChildrenWidth = childrenWidth;
          _this.lastNodeWidth = nodeWidth;
        }

        if (gap * 2 < nodeWidth) {
          _this.setState({
            scale: nodeWidth - gap * 2 < childrenWidth ? (nodeWidth - gap * 2) / childrenWidth : 1
          });
        }
      };

      _this.handleImgLoadError = function () {
        var onError = _this.props.onError;
        var errorFlag = onError ? onError() : undefined;

        if (errorFlag !== false) {
          _this.setState({
            isImgExist: false
          });
        }
      };

      _this.renderAvatar = function (_ref) {
        var _classNames, _classNames2;

        var getPrefixCls = _ref.getPrefixCls;

        var _a = _this.props,
            customizePrefixCls = _a.prefixCls,
            shape = _a.shape,
            size = _a.size,
            src = _a.src,
            srcSet = _a.srcSet,
            icon = _a.icon,
            className = _a.className,
            alt = _a.alt,
            draggable = _a.draggable,
            others = __rest(_a, ["prefixCls", "shape", "size", "src", "srcSet", "icon", "className", "alt", "draggable"]);

        devWarning(!(typeof icon === 'string' && icon.length > 2), 'Avatar', "`icon` is using ReactNode instead of string naming in v4. Please check `".concat(icon, "` at https://ant.design/components/icon"));
        var _this$state = _this.state,
            isImgExist = _this$state.isImgExist,
            scale = _this$state.scale,
            mounted = _this$state.mounted;
        var prefixCls = getPrefixCls('avatar', customizePrefixCls);
        var sizeCls = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-lg"), size === 'large'), _defineProperty(_classNames, "".concat(prefixCls, "-sm"), size === 'small'), _classNames));
        var classString = classNames(prefixCls, className, sizeCls, (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls, "-").concat(shape), shape), _defineProperty(_classNames2, "".concat(prefixCls, "-image"), src && isImgExist), _defineProperty(_classNames2, "".concat(prefixCls, "-icon"), icon), _classNames2));
        var sizeStyle = typeof size === 'number' ? {
          width: size,
          height: size,
          lineHeight: "".concat(size, "px"),
          fontSize: icon ? size / 2 : 18
        } : {};
        var children = _this.props.children;

        if (src && isImgExist) {
          children = /*#__PURE__*/React.createElement("img", {
            src: src,
            draggable: draggable,
            srcSet: srcSet,
            onError: _this.handleImgLoadError,
            alt: alt
          });
        } else if (icon) {
          children = icon;
        } else {
          var childrenNode = _this.avatarChildren;

          if (childrenNode || scale !== 1) {
            var transformString = "scale(".concat(scale, ") translateX(-50%)");
            var childrenStyle = {
              msTransform: transformString,
              WebkitTransform: transformString,
              transform: transformString
            };
            var sizeChildrenStyle = typeof size === 'number' ? {
              lineHeight: "".concat(size, "px")
            } : {};
            children = /*#__PURE__*/React.createElement("span", {
              className: "".concat(prefixCls, "-string"),
              ref: function ref(node) {
                return _this.avatarChildren = node;
              },
              style: _extends(_extends({}, sizeChildrenStyle), childrenStyle)
            }, children);
          } else {
            var _childrenStyle = {};

            if (!mounted) {
              _childrenStyle.opacity = 0;
            }

            children = /*#__PURE__*/React.createElement("span", {
              className: "".concat(prefixCls, "-string"),
              style: {
                opacity: 0
              },
              ref: function ref(node) {
                return _this.avatarChildren = node;
              }
            }, children);
          }
        } // The event is triggered twice from bubbling up the DOM tree.
        // see https://codesandbox.io/s/kind-snow-9lidz


        delete others.onError;
        delete others.gap;
        return /*#__PURE__*/React.createElement("span", _extends({}, others, {
          style: _extends(_extends({}, sizeStyle), others.style),
          className: classString,
          ref: function ref(node) {
            return _this.avatarNode = node;
          }
        }), children);
      };

      return _this;
    }

    _createClass(Avatar, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.setScale();
        this.setState({
          mounted: true
        });
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if (prevProps.src !== this.props.src) {
          this.setState({
            isImgExist: true,
            scale: 1
          });
        }

        if (prevProps.children !== this.props.children || prevProps.gap !== this.props.gap) {
          this.setScale();
        }
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement(ConfigConsumer, null, this.renderAvatar);
      }
    }]);

    return Avatar;
  }(React.Component);

  Avatar.defaultProps = {
    shape: 'circle',
    size: 'default'
  };
  return Avatar;
}();

export default Avatar;