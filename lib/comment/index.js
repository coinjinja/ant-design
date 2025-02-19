"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _configProvider = require("../config-provider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var Comment = function Comment(_a) {
  var actions = _a.actions,
      author = _a.author,
      avatar = _a.avatar,
      children = _a.children,
      className = _a.className,
      content = _a.content,
      customizePrefixCls = _a.prefixCls,
      datetime = _a.datetime,
      otherProps = __rest(_a, ["actions", "author", "avatar", "children", "className", "content", "prefixCls", "datetime"]);

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var renderNested = function renderNested(prefixCls, nestedChildren) {
    return /*#__PURE__*/React.createElement("div", {
      className: (0, _classnames["default"])("".concat(prefixCls, "-nested"))
    }, nestedChildren);
  };

  var prefixCls = getPrefixCls('comment', customizePrefixCls);
  var avatarDom = avatar ? /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-avatar")
  }, typeof avatar === 'string' ? /*#__PURE__*/React.createElement("img", {
    src: avatar,
    alt: "comment-avatar"
  }) : avatar) : null;
  var actionDom = actions && actions.length ? /*#__PURE__*/React.createElement("ul", {
    className: "".concat(prefixCls, "-actions")
  }, actions.map(function (action, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: "action-".concat(index)
    }, action) // eslint-disable-line react/no-array-index-key
    ;
  })) : null;
  var authorContent = (author || datetime) && /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-content-author")
  }, author && /*#__PURE__*/React.createElement("span", {
    className: "".concat(prefixCls, "-content-author-name")
  }, author), datetime && /*#__PURE__*/React.createElement("span", {
    className: "".concat(prefixCls, "-content-author-time")
  }, datetime));
  var contentDom = /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-content")
  }, authorContent, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-content-detail")
  }, content), actionDom);
  var cls = (0, _classnames["default"])(prefixCls, className, _defineProperty({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'));
  return /*#__PURE__*/React.createElement("div", _extends({}, otherProps, {
    className: cls
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-inner")
  }, avatarDom, contentDom), children ? renderNested(prefixCls, children) : null);
};

var _default = Comment;
exports["default"] = _default;