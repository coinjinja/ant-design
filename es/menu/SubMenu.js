function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

import * as React from 'react';
import { SubMenu as RcSubMenu } from 'rc-menu';
import classNames from 'classnames';
import omit from 'omit.js';
import MenuContext from './MenuContext';
import { isValidElement } from '../_util/reactNode';

var SubMenu =
/** @class */
function () {
  var SubMenu = /*#__PURE__*/function (_React$Component) {
    _inherits(SubMenu, _React$Component);

    var _super = _createSuper(SubMenu);

    function SubMenu() {
      var _this;

      _classCallCheck(this, SubMenu);

      _this = _super.apply(this, arguments);

      _this.onKeyDown = function (e) {
        _this.subMenu.onKeyDown(e);
      };

      _this.saveSubMenu = function (subMenu) {
        _this.subMenu = subMenu;
      };

      return _this;
    }

    _createClass(SubMenu, [{
      key: "renderTitle",
      value: function renderTitle(inlineCollapsed) {
        var _this$props = this.props,
            icon = _this$props.icon,
            title = _this$props.title,
            level = _this$props.level,
            rootPrefixCls = _this$props.rootPrefixCls;

        if (!icon) {
          return inlineCollapsed && level === 1 && title && typeof title === 'string' ? /*#__PURE__*/React.createElement("div", {
            className: "".concat(rootPrefixCls, "-inline-collapsed-noicon")
          }, title.charAt(0)) : title;
        } // inline-collapsed.md demo 依赖 span 来隐藏文字,有 icon 属性，则内部包裹一个 span
        // ref: https://github.com/ant-design/ant-design/pull/23456


        var titleIsSpan = isValidElement(title) && title.type === 'span';
        return /*#__PURE__*/React.createElement(React.Fragment, null, icon, titleIsSpan ? title : /*#__PURE__*/React.createElement("span", null, title));
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props2 = this.props,
            rootPrefixCls = _this$props2.rootPrefixCls,
            popupClassName = _this$props2.popupClassName;
        return /*#__PURE__*/React.createElement(MenuContext.Consumer, null, function (_ref) {
          var inlineCollapsed = _ref.inlineCollapsed,
              antdMenuTheme = _ref.antdMenuTheme;
          return /*#__PURE__*/React.createElement(RcSubMenu, _extends({}, omit(_this2.props, ['icon']), {
            title: _this2.renderTitle(inlineCollapsed),
            ref: _this2.saveSubMenu,
            popupClassName: classNames(rootPrefixCls, "".concat(rootPrefixCls, "-").concat(antdMenuTheme), popupClassName)
          }));
        });
      }
    }]);

    return SubMenu;
  }(React.Component);

  SubMenu.contextType = MenuContext; // fix issue:https://github.com/ant-design/ant-design/issues/8666

  SubMenu.isSubMenu = 1;
  return SubMenu;
}();

export default SubMenu;