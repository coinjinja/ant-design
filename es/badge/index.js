function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
import Animate from 'rc-animate';
import classNames from 'classnames';
import ScrollNumber from './ScrollNumber';
import { PresetColorTypes } from '../_util/colors';
import { ConfigContext } from '../config-provider';
import { cloneElement } from '../_util/reactNode';

function isPresetColor(color) {
  return PresetColorTypes.indexOf(color) !== -1;
}

var Badge = function Badge(_a) {
  var _classNames2, _classNames3;

  var customizePrefixCls = _a.prefixCls,
      customizeScrollNumberPrefixCls = _a.scrollNumberPrefixCls,
      children = _a.children,
      status = _a.status,
      text = _a.text,
      color = _a.color,
      _a$count = _a.count,
      count = _a$count === void 0 ? null : _a$count,
      _a$overflowCount = _a.overflowCount,
      overflowCount = _a$overflowCount === void 0 ? 99 : _a$overflowCount,
      _a$dot = _a.dot,
      dot = _a$dot === void 0 ? false : _a$dot,
      title = _a.title,
      offset = _a.offset,
      style = _a.style,
      className = _a.className,
      _a$showZero = _a.showZero,
      showZero = _a$showZero === void 0 ? false : _a$showZero,
      restProps = __rest(_a, ["prefixCls", "scrollNumberPrefixCls", "children", "status", "text", "color", "count", "overflowCount", "dot", "title", "offset", "style", "className", "showZero"]);

  var _React$useContext = React.useContext(ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var prefixCls = getPrefixCls('badge', customizePrefixCls);

  var getNumberedDisplayCount = function getNumberedDisplayCount() {
    var displayCount = count > overflowCount ? "".concat(overflowCount, "+") : count;
    return displayCount;
  };

  var hasStatus = function hasStatus() {
    return !!status || !!color;
  };

  var isZero = function isZero() {
    var numberedDisplayCount = getNumberedDisplayCount();
    return numberedDisplayCount === '0' || numberedDisplayCount === 0;
  };

  var isDot = function isDot() {
    return dot && !isZero() || hasStatus();
  };

  var getDisplayCount = function getDisplayCount() {
    // dot mode don't need count
    if (isDot()) {
      return '';
    }

    return getNumberedDisplayCount();
  };

  var getScrollNumberTitle = function getScrollNumberTitle() {
    if (title) {
      return title;
    }

    return typeof count === 'string' || typeof count === 'number' ? count : undefined;
  };

  var getStyleWithOffset = function getStyleWithOffset() {
    return offset ? _extends({
      right: -parseInt(offset[0], 10),
      marginTop: offset[1]
    }, style) : style;
  };

  var isHidden = function isHidden() {
    var displayCount = getDisplayCount();
    var isEmpty = displayCount === null || displayCount === undefined || displayCount === '';
    return (isEmpty || isZero() && !showZero) && !isDot();
  };

  var renderStatusText = function renderStatusText() {
    var hidden = isHidden();
    return hidden || !text ? null : /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-status-text")
    }, text);
  };

  var renderDisplayComponent = function renderDisplayComponent() {
    var customNode = count;

    if (!customNode || _typeof(customNode) !== 'object') {
      return undefined;
    }

    return cloneElement(customNode, {
      style: _extends(_extends({}, getStyleWithOffset()), customNode.props && customNode.props.style)
    });
  };

  var renderBadgeNumber = function renderBadgeNumber() {
    var _classNames;

    var scrollNumberPrefixCls = getPrefixCls('scroll-number', customizeScrollNumberPrefixCls);
    var displayCount = getDisplayCount();
    var bDot = isDot();
    var hidden = isHidden();
    var scrollNumberCls = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-dot"), bDot), _defineProperty(_classNames, "".concat(prefixCls, "-count"), !bDot), _defineProperty(_classNames, "".concat(prefixCls, "-multiple-words"), !bDot && count && count.toString && count.toString().length > 1), _defineProperty(_classNames, "".concat(prefixCls, "-status-").concat(status), !!status), _defineProperty(_classNames, "".concat(prefixCls, "-status-").concat(color), isPresetColor(color)), _classNames));
    var statusStyle = getStyleWithOffset();

    if (color && !isPresetColor(color)) {
      statusStyle = statusStyle || {};
      statusStyle.background = color;
    }

    return hidden ? null : /*#__PURE__*/React.createElement(ScrollNumber, {
      prefixCls: scrollNumberPrefixCls,
      "data-show": !hidden,
      className: scrollNumberCls,
      count: displayCount,
      displayComponent: renderDisplayComponent() // <Badge status="success" count={<Icon type="xxx" />}></Badge>
      ,
      title: getScrollNumberTitle(),
      style: statusStyle,
      key: "scrollNumber"
    });
  };

  var statusCls = classNames((_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls, "-status-dot"), hasStatus()), _defineProperty(_classNames2, "".concat(prefixCls, "-status-").concat(status), !!status), _defineProperty(_classNames2, "".concat(prefixCls, "-status-").concat(color), isPresetColor(color)), _classNames2));
  var statusStyle = {};

  if (color && !isPresetColor(color)) {
    statusStyle.background = color;
  }

  var badgeClassName = classNames(className, prefixCls, (_classNames3 = {}, _defineProperty(_classNames3, "".concat(prefixCls, "-status"), hasStatus()), _defineProperty(_classNames3, "".concat(prefixCls, "-not-a-wrapper"), !children), _defineProperty(_classNames3, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames3)); // <Badge status="success" />

  if (!children && hasStatus()) {
    var styleWithOffset = getStyleWithOffset();
    var statusTextColor = styleWithOffset && styleWithOffset.color;
    return /*#__PURE__*/React.createElement("span", _extends({}, restProps, {
      className: badgeClassName,
      style: styleWithOffset
    }), /*#__PURE__*/React.createElement("span", {
      className: statusCls,
      style: statusStyle
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: statusTextColor
      },
      className: "".concat(prefixCls, "-status-text")
    }, text));
  }

  return /*#__PURE__*/React.createElement("span", _extends({}, restProps, {
    className: badgeClassName
  }), children, /*#__PURE__*/React.createElement(Animate, {
    component: "",
    showProp: "data-show",
    transitionName: children ? "".concat(prefixCls, "-zoom") : '',
    transitionAppear: true
  }, renderBadgeNumber()), renderStatusText());
};

export default Badge;