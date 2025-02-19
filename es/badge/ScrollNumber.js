function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
import { ConfigContext } from '../config-provider';
import { cloneElement } from '../_util/reactNode';

function getNumberArray(num) {
  return num ? num.toString().split('').reverse().map(function (i) {
    var current = Number(i);
    return isNaN(current) ? i : current;
  }) : [];
}

function renderNumberList(position, className) {
  var childrenToReturn = [];

  for (var i = 0; i < 30; i++) {
    childrenToReturn.push( /*#__PURE__*/React.createElement("p", {
      key: i.toString(),
      className: classNames(className, {
        current: position === i
      })
    }, i % 10));
  }

  return childrenToReturn;
}

var ScrollNumber = function ScrollNumber(_a) {
  var customizePrefixCls = _a.prefixCls,
      customizeCount = _a.count,
      className = _a.className,
      style = _a.style,
      title = _a.title,
      _a$component = _a.component,
      component = _a$component === void 0 ? 'sup' : _a$component,
      displayComponent = _a.displayComponent,
      _a$onAnimated = _a.onAnimated,
      onAnimated = _a$onAnimated === void 0 ? function () {} : _a$onAnimated,
      restProps = __rest(_a, ["prefixCls", "count", "className", "style", "title", "component", "displayComponent", "onAnimated"]);

  var _React$useState = React.useState(true),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      animateStarted = _React$useState2[0],
      setAnimateStarted = _React$useState2[1];

  var _React$useState3 = React.useState(customizeCount),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      count = _React$useState4[0],
      setCount = _React$useState4[1];

  var _React$useState5 = React.useState(customizeCount),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      prevCount = _React$useState6[0],
      setPrevCount = _React$useState6[1];

  var _React$useState7 = React.useState(customizeCount),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      lastCount = _React$useState8[0],
      setLastCount = _React$useState8[1];

  var _React$useContext = React.useContext(ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;

  var prefixCls = getPrefixCls('scroll-number', customizePrefixCls);

  if (prevCount !== customizeCount) {
    setAnimateStarted(true);
    setPrevCount(customizeCount);
  }

  React.useEffect(function () {
    setLastCount(count);
    var timeout;

    if (animateStarted) {
      // Let browser has time to reset the scroller before actually
      // performing the transition.
      timeout = setTimeout(function () {
        setAnimateStarted(false);
        setCount(customizeCount);
        onAnimated();
      });
    }

    return function () {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [animateStarted, customizeCount, onAnimated]);

  var getPositionByNum = function getPositionByNum(num, i) {
    var currentCount = Math.abs(Number(count));
    var lstCount = Math.abs(Number(lastCount));
    var currentDigit = Math.abs(getNumberArray(count)[i]);
    var lastDigit = Math.abs(getNumberArray(lstCount)[i]);

    if (animateStarted) {
      return 10 + num;
    } // 同方向则在同一侧切换数字


    if (currentCount > lstCount) {
      if (currentDigit >= lastDigit) {
        return 10 + num;
      }

      return 20 + num;
    }

    if (currentDigit <= lastDigit) {
      return 10 + num;
    }

    return num;
  };

  var renderCurrentNumber = function renderCurrentNumber(num, i) {
    if (typeof num === 'number') {
      var position = getPositionByNum(num, i);
      var removeTransition = animateStarted || getNumberArray(lastCount)[i] === undefined;
      return /*#__PURE__*/React.createElement('span', {
        className: "".concat(prefixCls, "-only"),
        style: {
          transition: removeTransition ? 'none' : undefined,
          msTransform: "translateY(".concat(-position * 100, "%)"),
          WebkitTransform: "translateY(".concat(-position * 100, "%)"),
          transform: "translateY(".concat(-position * 100, "%)")
        },
        key: i
      }, renderNumberList(position, "".concat(prefixCls, "-only-unit")));
    }

    return /*#__PURE__*/React.createElement("span", {
      key: "symbol",
      className: "".concat(prefixCls, "-symbol")
    }, num);
  };

  var renderNumberElement = function renderNumberElement() {
    if (count && Number(count) % 1 === 0) {
      return getNumberArray(count).map(function (num, i) {
        return renderCurrentNumber(num, i);
      }).reverse();
    }

    return count;
  };

  var newProps = _extends(_extends({}, restProps), {
    style: style,
    className: classNames(prefixCls, className),
    title: title
  }); // allow specify the border
  // mock border-color by box-shadow for compatible with old usage:
  // <Badge count={4} style={{ backgroundColor: '#fff', color: '#999', borderColor: '#d9d9d9' }} />


  if (style && style.borderColor) {
    newProps.style = _extends(_extends({}, style), {
      boxShadow: "0 0 0 1px ".concat(style.borderColor, " inset")
    });
  }

  if (displayComponent) {
    return cloneElement(displayComponent, {
      className: classNames("".concat(prefixCls, "-custom-component"), displayComponent.props && displayComponent.props.className)
    });
  }

  return /*#__PURE__*/React.createElement(component, newProps, renderNumberElement());
};

export default ScrollNumber;