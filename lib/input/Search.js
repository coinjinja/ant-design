"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _SearchOutlined = _interopRequireDefault(require("@ant-design/icons/SearchOutlined"));

var _LoadingOutlined = _interopRequireDefault(require("@ant-design/icons/LoadingOutlined"));

var _Input = _interopRequireDefault(require("./Input"));

var _button = _interopRequireDefault(require("../button"));

var _SizeContext = _interopRequireDefault(require("../config-provider/SizeContext"));

var _configProvider = require("../config-provider");

var _reactNode = require("../_util/reactNode");

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

var Search =
/** @class */
function () {
  var Search = /*#__PURE__*/function (_React$Component) {
    _inherits(Search, _React$Component);

    var _super = _createSuper(Search);

    function Search() {
      var _this;

      _classCallCheck(this, Search);

      _this = _super.apply(this, arguments);

      _this.saveInput = function (node) {
        _this.input = node;
      };

      _this.onChange = function (e) {
        var _this$props = _this.props,
            onChange = _this$props.onChange,
            onSearch = _this$props.onSearch;

        if (e && e.target && e.type === 'click' && onSearch) {
          onSearch(e.target.value, e);
        }

        if (onChange) {
          onChange(e);
        }
      };

      _this.onMouseDown = function (e) {
        if (document.activeElement === _this.input.input) {
          e.preventDefault();
        }
      };

      _this.onSearch = function (e) {
        var _this$props2 = _this.props,
            onSearch = _this$props2.onSearch,
            loading = _this$props2.loading,
            disabled = _this$props2.disabled;

        if (loading || disabled) {
          return;
        }

        if (onSearch) {
          onSearch(_this.input.input.value, e);
        }
      };

      _this.renderLoading = function (prefixCls) {
        var _this$props3 = _this.props,
            enterButton = _this$props3.enterButton,
            customizeSize = _this$props3.size;

        if (enterButton) {
          return /*#__PURE__*/React.createElement(_SizeContext["default"].Consumer, {
            key: "enterButton"
          }, function (size) {
            return /*#__PURE__*/React.createElement(_button["default"], {
              className: "".concat(prefixCls, "-button"),
              type: "primary",
              size: customizeSize || size
            }, /*#__PURE__*/React.createElement(_LoadingOutlined["default"], null));
          });
        }

        return /*#__PURE__*/React.createElement(_LoadingOutlined["default"], {
          className: "".concat(prefixCls, "-icon"),
          key: "loadingIcon"
        });
      };

      _this.renderSuffix = function (prefixCls) {
        var _this$props4 = _this.props,
            suffix = _this$props4.suffix,
            enterButton = _this$props4.enterButton,
            loading = _this$props4.loading;

        if (loading && !enterButton) {
          return [suffix, _this.renderLoading(prefixCls)];
        }

        if (enterButton) return suffix;
        var icon = /*#__PURE__*/React.createElement(_SearchOutlined["default"], {
          className: "".concat(prefixCls, "-icon"),
          key: "searchIcon",
          onClick: _this.onSearch
        });

        if (suffix) {
          return [(0, _reactNode.replaceElement)(suffix, null, {
            key: 'suffix'
          }), icon];
        }

        return icon;
      };

      _this.renderAddonAfter = function (prefixCls, size) {
        var _this$props5 = _this.props,
            enterButton = _this$props5.enterButton,
            disabled = _this$props5.disabled,
            addonAfter = _this$props5.addonAfter,
            loading = _this$props5.loading;
        var btnClassName = "".concat(prefixCls, "-button");

        if (loading && enterButton) {
          return [_this.renderLoading(prefixCls), addonAfter];
        }

        if (!enterButton) return addonAfter;
        var button;
        var enterButtonAsElement = enterButton;
        var isAntdButton = enterButtonAsElement.type && enterButtonAsElement.type.__ANT_BUTTON === true;

        if (isAntdButton || enterButtonAsElement.type === 'button') {
          button = (0, _reactNode.cloneElement)(enterButtonAsElement, _extends({
            onMouseDown: _this.onMouseDown,
            onClick: _this.onSearch,
            key: 'enterButton'
          }, isAntdButton ? {
            className: btnClassName,
            size: size
          } : {}));
        } else {
          button = /*#__PURE__*/React.createElement(_button["default"], {
            className: btnClassName,
            type: "primary",
            size: size,
            disabled: disabled,
            key: "enterButton",
            onMouseDown: _this.onMouseDown,
            onClick: _this.onSearch
          }, enterButton === true ? /*#__PURE__*/React.createElement(_SearchOutlined["default"], null) : enterButton);
        }

        if (addonAfter) {
          return [button, (0, _reactNode.replaceElement)(addonAfter, null, {
            key: 'addonAfter'
          })];
        }

        return button;
      };

      _this.renderSearch = function (_ref) {
        var getPrefixCls = _ref.getPrefixCls,
            direction = _ref.direction;

        var _a = _this.props,
            customizePrefixCls = _a.prefixCls,
            customizeInputPrefixCls = _a.inputPrefixCls,
            enterButton = _a.enterButton,
            className = _a.className,
            customizeSize = _a.size,
            restProps = __rest(_a, ["prefixCls", "inputPrefixCls", "enterButton", "className", "size"]);

        delete restProps.onSearch;
        delete restProps.loading;
        var prefixCls = getPrefixCls('input-search', customizePrefixCls);
        var inputPrefixCls = getPrefixCls('input', customizeInputPrefixCls);

        var getClassName = function getClassName(size) {
          var inputClassName;

          if (enterButton) {
            var _classNames;

            inputClassName = (0, _classnames["default"])(prefixCls, className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _defineProperty(_classNames, "".concat(prefixCls, "-enter-button"), !!enterButton), _defineProperty(_classNames, "".concat(prefixCls, "-").concat(size), !!size), _classNames));
          } else {
            inputClassName = (0, _classnames["default"])(prefixCls, className, _defineProperty({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'));
          }

          return inputClassName;
        };

        return /*#__PURE__*/React.createElement(_SizeContext["default"].Consumer, null, function (size) {
          return /*#__PURE__*/React.createElement(_Input["default"], _extends({
            onPressEnter: _this.onSearch
          }, restProps, {
            size: customizeSize || size,
            prefixCls: inputPrefixCls,
            addonAfter: _this.renderAddonAfter(prefixCls, customizeSize || size),
            suffix: _this.renderSuffix(prefixCls),
            onChange: _this.onChange,
            ref: _this.saveInput,
            className: getClassName(customizeSize || size)
          }));
        });
      };

      return _this;
    }

    _createClass(Search, [{
      key: "focus",
      value: function focus() {
        this.input.focus();
      }
    }, {
      key: "blur",
      value: function blur() {
        this.input.blur();
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, this.renderSearch);
      }
    }]);

    return Search;
  }(React.Component);

  Search.defaultProps = {
    enterButton: false
  };
  return Search;
}();

var _default = Search;
exports["default"] = _default;