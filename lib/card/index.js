"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _omit = _interopRequireDefault(require("omit.js"));

var _Grid = _interopRequireDefault(require("./Grid"));

var _Meta = _interopRequireDefault(require("./Meta"));

var _tabs = _interopRequireDefault(require("../tabs"));

var _row = _interopRequireDefault(require("../row"));

var _col = _interopRequireDefault(require("../col"));

var _configProvider = require("../config-provider");

var _SizeContext = _interopRequireDefault(require("../config-provider/SizeContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

function getAction(actions) {
  var actionList = actions.map(function (action, index) {
    return (
      /*#__PURE__*/
      // eslint-disable-next-line react/no-array-index-key
      React.createElement("li", {
        style: {
          width: "".concat(100 / actions.length, "%")
        },
        key: "action-".concat(index)
      }, /*#__PURE__*/React.createElement("span", null, action))
    );
  });
  return actionList;
}

var Card = function Card(props) {
  var _extends2, _classNames;

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var size = React.useContext(_SizeContext["default"]);

  var onTabChange = function onTabChange(key) {
    if (props.onTabChange) {
      props.onTabChange(key);
    }
  };

  var isContainGrid = function isContainGrid() {
    var containGrid;
    React.Children.forEach(props.children, function (element) {
      if (element && element.type && element.type === _Grid["default"]) {
        containGrid = true;
      }
    });
    return containGrid;
  };

  var customizePrefixCls = props.prefixCls,
      className = props.className,
      extra = props.extra,
      _props$headStyle = props.headStyle,
      headStyle = _props$headStyle === void 0 ? {} : _props$headStyle,
      _props$bodyStyle = props.bodyStyle,
      bodyStyle = _props$bodyStyle === void 0 ? {} : _props$bodyStyle,
      title = props.title,
      loading = props.loading,
      _props$bordered = props.bordered,
      bordered = _props$bordered === void 0 ? true : _props$bordered,
      customizeSize = props.size,
      type = props.type,
      cover = props.cover,
      actions = props.actions,
      tabList = props.tabList,
      children = props.children,
      activeTabKey = props.activeTabKey,
      defaultActiveTabKey = props.defaultActiveTabKey,
      tabBarExtraContent = props.tabBarExtraContent,
      hoverable = props.hoverable,
      _props$tabProps = props.tabProps,
      tabProps = _props$tabProps === void 0 ? {} : _props$tabProps,
      others = __rest(props, ["prefixCls", "className", "extra", "headStyle", "bodyStyle", "title", "loading", "bordered", "size", "type", "cover", "actions", "tabList", "children", "activeTabKey", "defaultActiveTabKey", "tabBarExtraContent", "hoverable", "tabProps"]);

  var prefixCls = getPrefixCls('card', customizePrefixCls);
  var loadingBlockStyle = bodyStyle.padding === 0 || bodyStyle.padding === '0px' ? {
    padding: 24
  } : undefined;
  var loadingBlock = /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-loading-content"),
    style: loadingBlockStyle
  }, /*#__PURE__*/React.createElement(_row["default"], {
    gutter: 8
  }, /*#__PURE__*/React.createElement(_col["default"], {
    span: 22
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-loading-block")
  }))), /*#__PURE__*/React.createElement(_row["default"], {
    gutter: 8
  }, /*#__PURE__*/React.createElement(_col["default"], {
    span: 8
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-loading-block")
  })), /*#__PURE__*/React.createElement(_col["default"], {
    span: 15
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-loading-block")
  }))), /*#__PURE__*/React.createElement(_row["default"], {
    gutter: 8
  }, /*#__PURE__*/React.createElement(_col["default"], {
    span: 6
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-loading-block")
  })), /*#__PURE__*/React.createElement(_col["default"], {
    span: 18
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-loading-block")
  }))), /*#__PURE__*/React.createElement(_row["default"], {
    gutter: 8
  }, /*#__PURE__*/React.createElement(_col["default"], {
    span: 13
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-loading-block")
  })), /*#__PURE__*/React.createElement(_col["default"], {
    span: 9
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-loading-block")
  }))), /*#__PURE__*/React.createElement(_row["default"], {
    gutter: 8
  }, /*#__PURE__*/React.createElement(_col["default"], {
    span: 4
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-loading-block")
  })), /*#__PURE__*/React.createElement(_col["default"], {
    span: 3
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-loading-block")
  })), /*#__PURE__*/React.createElement(_col["default"], {
    span: 16
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-loading-block")
  }))));
  var hasActiveTabKey = activeTabKey !== undefined;

  var extraProps = _extends(_extends({}, tabProps), (_extends2 = {}, _defineProperty(_extends2, hasActiveTabKey ? 'activeKey' : 'defaultActiveKey', hasActiveTabKey ? activeTabKey : defaultActiveTabKey), _defineProperty(_extends2, "tabBarExtraContent", tabBarExtraContent), _extends2));

  var head;
  var tabs = tabList && tabList.length ? /*#__PURE__*/React.createElement(_tabs["default"], _extends({
    size: "large"
  }, extraProps, {
    className: "".concat(prefixCls, "-head-tabs"),
    onChange: onTabChange
  }), tabList.map(function (item) {
    return /*#__PURE__*/React.createElement(_tabs["default"].TabPane, {
      tab: item.tab,
      disabled: item.disabled,
      key: item.key
    });
  })) : null;

  if (title || extra || tabs) {
    head = /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-head"),
      style: headStyle
    }, /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-head-wrapper")
    }, title && /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-head-title")
    }, title), extra && /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-extra")
    }, extra)), tabs);
  }

  var coverDom = cover ? /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-cover")
  }, cover) : null;
  var body = /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-body"),
    style: bodyStyle
  }, loading ? loadingBlock : children);
  var actionDom = actions && actions.length ? /*#__PURE__*/React.createElement("ul", {
    className: "".concat(prefixCls, "-actions")
  }, getAction(actions)) : null;
  var divProps = (0, _omit["default"])(others, ['onTabChange']);
  var mergedSize = customizeSize || size;
  var classString = (0, _classnames["default"])(prefixCls, className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-loading"), loading), _defineProperty(_classNames, "".concat(prefixCls, "-bordered"), bordered), _defineProperty(_classNames, "".concat(prefixCls, "-hoverable"), hoverable), _defineProperty(_classNames, "".concat(prefixCls, "-contain-grid"), isContainGrid()), _defineProperty(_classNames, "".concat(prefixCls, "-contain-tabs"), tabList && tabList.length), _defineProperty(_classNames, "".concat(prefixCls, "-").concat(mergedSize), mergedSize), _defineProperty(_classNames, "".concat(prefixCls, "-type-").concat(type), !!type), _defineProperty(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames));
  return /*#__PURE__*/React.createElement("div", _extends({}, divProps, {
    className: classString
  }), head, coverDom, body, actionDom);
};

Card.Grid = _Grid["default"];
Card.Meta = _Meta["default"];
var _default = Card;
exports["default"] = _default;