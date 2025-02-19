"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "TreeNode", {
  enumerable: true,
  get: function get() {
    return _rcTreeSelect.TreeNode;
  }
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _rcTreeSelect = _interopRequireWildcard(require("rc-tree-select"));

var _classnames = _interopRequireDefault(require("classnames"));

var _omit = _interopRequireDefault(require("omit.js"));

var _configProvider = require("../config-provider");

var _devWarning = _interopRequireDefault(require("../_util/devWarning"));

var _iconUtil = _interopRequireDefault(require("../select/utils/iconUtil"));

var _iconUtil2 = _interopRequireDefault(require("../tree/utils/iconUtil"));

var _SizeContext = _interopRequireDefault(require("../config-provider/SizeContext"));

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

var TreeSelect =
/** @class */
function () {
  var TreeSelect = /*#__PURE__*/function (_React$Component) {
    _inherits(TreeSelect, _React$Component);

    var _super = _createSuper(TreeSelect);

    function TreeSelect(props) {
      var _this;

      _classCallCheck(this, TreeSelect);

      _this = _super.call(this, props);
      _this.selectRef = /*#__PURE__*/React.createRef();

      _this.renderTreeSelect = function (_ref) {
        var getContextPopupContainer = _ref.getPopupContainer,
            getPrefixCls = _ref.getPrefixCls,
            renderEmpty = _ref.renderEmpty,
            direction = _ref.direction,
            virtual = _ref.virtual,
            dropdownMatchSelectWidth = _ref.dropdownMatchSelectWidth;
        var _this$props = _this.props,
            customizePrefixCls = _this$props.prefixCls,
            customizeSize = _this$props.size,
            className = _this$props.className,
            treeCheckable = _this$props.treeCheckable,
            multiple = _this$props.multiple,
            _this$props$listHeigh = _this$props.listHeight,
            listHeight = _this$props$listHeigh === void 0 ? 256 : _this$props$listHeigh,
            _this$props$listItemH = _this$props.listItemHeight,
            listItemHeight = _this$props$listItemH === void 0 ? 26 : _this$props$listItemH,
            notFoundContent = _this$props.notFoundContent,
            _switcherIcon = _this$props.switcherIcon,
            treeLine = _this$props.treeLine,
            getPopupContainer = _this$props.getPopupContainer,
            dropdownClassName = _this$props.dropdownClassName,
            bordered = _this$props.bordered,
            _this$props$treeIcon = _this$props.treeIcon,
            treeIcon = _this$props$treeIcon === void 0 ? false : _this$props$treeIcon;
        var prefixCls = getPrefixCls('select', customizePrefixCls);
        var treePrefixCls = getPrefixCls('select-tree', customizePrefixCls);
        var treeSelectPrefixCls = getPrefixCls('tree-select', customizePrefixCls);
        var mergedDropdownClassName = (0, _classnames["default"])(dropdownClassName, "".concat(treeSelectPrefixCls, "-dropdown"), _defineProperty({}, "".concat(treeSelectPrefixCls, "-dropdown-rtl"), direction === 'rtl'));
        var isMultiple = !!(treeCheckable || multiple); // ===================== Icons =====================

        var _getIcons = (0, _iconUtil["default"])(_extends(_extends({}, _this.props), {
          multiple: isMultiple
        })),
            suffixIcon = _getIcons.suffixIcon,
            itemIcon = _getIcons.itemIcon,
            removeIcon = _getIcons.removeIcon,
            clearIcon = _getIcons.clearIcon; // ===================== Empty =====================


        var mergedNotFound;

        if (notFoundContent !== undefined) {
          mergedNotFound = notFoundContent;
        } else {
          mergedNotFound = renderEmpty('Select');
        } // ==================== Render =====================


        var selectProps = (0, _omit["default"])(_this.props, ['prefixCls', 'suffixIcon', 'itemIcon', 'removeIcon', 'clearIcon', 'switcherIcon', 'size', 'bordered']);
        return /*#__PURE__*/React.createElement(_SizeContext["default"].Consumer, null, function (size) {
          var _classNames2;

          var mergedSize = customizeSize || size;
          var mergedClassName = (0, _classnames["default"])(!customizePrefixCls && treeSelectPrefixCls, (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls, "-lg"), mergedSize === 'large'), _defineProperty(_classNames2, "".concat(prefixCls, "-sm"), mergedSize === 'small'), _defineProperty(_classNames2, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _defineProperty(_classNames2, "".concat(prefixCls, "-borderless"), !bordered), _classNames2), className);
          return /*#__PURE__*/React.createElement(_rcTreeSelect["default"], _extends({
            virtual: virtual,
            dropdownMatchSelectWidth: dropdownMatchSelectWidth
          }, selectProps, {
            ref: _this.selectRef,
            prefixCls: prefixCls,
            className: mergedClassName,
            listHeight: listHeight,
            listItemHeight: listItemHeight,
            treeCheckable: treeCheckable ? /*#__PURE__*/React.createElement("span", {
              className: "".concat(prefixCls, "-tree-checkbox-inner")
            }) : treeCheckable,
            inputIcon: suffixIcon,
            menuItemSelectedIcon: itemIcon,
            removeIcon: removeIcon,
            clearIcon: clearIcon,
            switcherIcon: function switcherIcon(nodeProps) {
              return (0, _iconUtil2["default"])(treePrefixCls, _switcherIcon, treeLine, nodeProps);
            },
            showTreeIcon: treeIcon,
            notFoundContent: mergedNotFound,
            getPopupContainer: getPopupContainer || getContextPopupContainer,
            treeMotion: null,
            dropdownClassName: mergedDropdownClassName
          }));
        });
      };

      (0, _devWarning["default"])(props.multiple !== false || !props.treeCheckable, 'TreeSelect', '`multiple` will alway be `true` when `treeCheckable` is true');
      return _this;
    }

    _createClass(TreeSelect, [{
      key: "focus",
      value: function focus() {
        if (this.selectRef.current) {
          this.selectRef.current.focus();
        }
      }
    }, {
      key: "blur",
      value: function blur() {
        if (this.selectRef.current) {
          this.selectRef.current.blur();
        }
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, this.renderTreeSelect);
      }
    }]);

    return TreeSelect;
  }(React.Component);

  TreeSelect.TreeNode = _rcTreeSelect.TreeNode;
  TreeSelect.SHOW_ALL = _rcTreeSelect.SHOW_ALL;
  TreeSelect.SHOW_PARENT = _rcTreeSelect.SHOW_PARENT;
  TreeSelect.SHOW_CHILD = _rcTreeSelect.SHOW_CHILD;
  TreeSelect.defaultProps = {
    transitionName: 'slide-up',
    choiceTransitionName: 'zoom',
    bordered: true
  };
  return TreeSelect;
}();

var _default = TreeSelect;
exports["default"] = _default;