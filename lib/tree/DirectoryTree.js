"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _debounce = _interopRequireDefault(require("lodash/debounce"));

var _util = require("rc-tree/lib/util");

var _treeUtil = require("rc-tree/lib/utils/treeUtil");

var _FileOutlined = _interopRequireDefault(require("@ant-design/icons/FileOutlined"));

var _FolderOpenOutlined = _interopRequireDefault(require("@ant-design/icons/FolderOpenOutlined"));

var _FolderOutlined = _interopRequireDefault(require("@ant-design/icons/FolderOutlined"));

var _configProvider = require("../config-provider");

var _Tree = _interopRequireDefault(require("./Tree"));

var _dictUtil = require("./utils/dictUtil");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

function getIcon(props) {
  var isLeaf = props.isLeaf,
      expanded = props.expanded;

  if (isLeaf) {
    return /*#__PURE__*/React.createElement(_FileOutlined["default"], null);
  }

  return expanded ? /*#__PURE__*/React.createElement(_FolderOpenOutlined["default"], null) : /*#__PURE__*/React.createElement(_FolderOutlined["default"], null);
}

function getTreeData(_ref) {
  var treeData = _ref.treeData,
      children = _ref.children;
  return treeData || (0, _treeUtil.convertTreeToData)(children);
}

var DirectoryTree = function DirectoryTree(_a) {
  var defaultExpandAll = _a.defaultExpandAll,
      defaultExpandParent = _a.defaultExpandParent,
      defaultExpandedKeys = _a.defaultExpandedKeys,
      props = __rest(_a, ["defaultExpandAll", "defaultExpandParent", "defaultExpandedKeys"]); // Shift click usage


  var lastSelectedKey = React.useRef();
  var cachedSelectedKeys = React.useRef();
  var ref = /*#__PURE__*/React.createRef();

  var getInitExpandedKeys = function getInitExpandedKeys() {
    var _convertDataToEntitie = (0, _treeUtil.convertDataToEntities)(getTreeData(props)),
        keyEntities = _convertDataToEntitie.keyEntities;

    var initExpandedKeys; // Expanded keys

    if (defaultExpandAll) {
      initExpandedKeys = Object.keys(keyEntities);
    } else if (defaultExpandParent) {
      initExpandedKeys = (0, _util.conductExpandParent)(props.expandedKeys || defaultExpandedKeys, keyEntities);
    } else {
      initExpandedKeys = props.expandedKeys || defaultExpandedKeys;
    }

    return initExpandedKeys;
  };

  var _React$useState = React.useState(props.selectedKeys || props.defaultSelectedKeys || []),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      selectedKeys = _React$useState2[0],
      setSelectedKeys = _React$useState2[1];

  var _React$useState3 = React.useState(getInitExpandedKeys()),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      expandedKeys = _React$useState4[0],
      setExpandedKeys = _React$useState4[1];

  React.useEffect(function () {
    if ('selectedKeys' in props) {
      setSelectedKeys(props.selectedKeys);
    }
  }, [props.selectedKeys]);
  React.useEffect(function () {
    if ('expandedKeys' in props) {
      setExpandedKeys(props.expandedKeys);
    }
  }, [props.expandedKeys]);

  var expandFolderNode = function expandFolderNode(event, node) {
    var isLeaf = node.isLeaf;

    if (isLeaf || event.shiftKey || event.metaKey || event.ctrlKey) {
      return;
    } // Call internal rc-tree expand function
    // https://github.com/ant-design/ant-design/issues/12567


    ref.current.onNodeExpand(event, node);
  };

  var onDebounceExpand = (0, _debounce["default"])(expandFolderNode, 200, {
    leading: true
  });

  var onExpand = function onExpand(keys, info) {
    if (!('expandedKeys' in props)) {
      setExpandedKeys(keys);
    } // Call origin function


    if (props.onExpand) {
      return props.onExpand(keys, info);
    }

    return undefined;
  };

  var onClick = function onClick(event, node) {
    var expandAction = props.expandAction; // Expand the tree

    if (expandAction === 'click') {
      onDebounceExpand(event, node);
    }

    if (props.onClick) {
      props.onClick(event, node);
    }
  };

  var onDoubleClick = function onDoubleClick(event, node) {
    var expandAction = props.expandAction; // Expand the tree

    if (expandAction === 'doubleClick') {
      onDebounceExpand(event, node);
    }

    if (props.onDoubleClick) {
      props.onDoubleClick(event, node);
    }
  };

  var onSelect = function onSelect(keys, event) {
    var multiple = props.multiple;
    var node = event.node,
        nativeEvent = event.nativeEvent;
    var _node$key = node.key,
        key = _node$key === void 0 ? '' : _node$key;
    var treeData = getTreeData(props); // const newState: DirectoryTreeState = {};
    // We need wrap this event since some value is not same

    var newEvent = _extends(_extends({}, event), {
      selected: true
    }); // Windows / Mac single pick


    var ctrlPick = nativeEvent.ctrlKey || nativeEvent.metaKey;
    var shiftPick = nativeEvent.shiftKey; // Generate new selected keys

    var newSelectedKeys;

    if (multiple && ctrlPick) {
      // Control click
      newSelectedKeys = keys;
      lastSelectedKey.current = key;
      cachedSelectedKeys.current = newSelectedKeys;
      newEvent.selectedNodes = (0, _dictUtil.convertDirectoryKeysToNodes)(treeData, newSelectedKeys);
    } else if (multiple && shiftPick) {
      // Shift click
      newSelectedKeys = Array.from(new Set([].concat(_toConsumableArray(cachedSelectedKeys.current || []), _toConsumableArray((0, _dictUtil.calcRangeKeys)(treeData, expandedKeys, key, lastSelectedKey.current)))));
      newEvent.selectedNodes = (0, _dictUtil.convertDirectoryKeysToNodes)(treeData, newSelectedKeys);
    } else {
      // Single click
      newSelectedKeys = [key];
      lastSelectedKey.current = key;
      cachedSelectedKeys.current = newSelectedKeys;
      newEvent.selectedNodes = (0, _dictUtil.convertDirectoryKeysToNodes)(treeData, newSelectedKeys);
    }

    if (props.onSelect) {
      props.onSelect(newSelectedKeys, newEvent);
    }

    if (!('selectedKeys' in props)) {
      setSelectedKeys(newSelectedKeys);
    }
  };

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var customizePrefixCls = props.prefixCls,
      className = props.className,
      otherProps = __rest(props, ["prefixCls", "className"]);

  var prefixCls = getPrefixCls('tree', customizePrefixCls);
  var connectClassName = (0, _classnames["default"])("".concat(prefixCls, "-directory"), className, _defineProperty({}, "".concat(prefixCls, "-directory-rtl"), direction === 'rtl'));
  return /*#__PURE__*/React.createElement(_Tree["default"], _extends({
    icon: getIcon,
    ref: ref,
    blockNode: true
  }, otherProps, {
    prefixCls: prefixCls,
    className: connectClassName,
    expandedKeys: expandedKeys,
    selectedKeys: selectedKeys,
    onSelect: onSelect,
    onClick: onClick,
    onDoubleClick: onDoubleClick,
    onExpand: onExpand
  }));
};

DirectoryTree.defaultProps = {
  showIcon: true,
  expandAction: 'click'
};
var _default = DirectoryTree;
exports["default"] = _default;