function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
import isEqual from 'lodash/isEqual';
import classNames from 'classnames';
import { Field } from 'rc-field-form';
import omit from 'omit.js';
import Row from '../grid/row';
import { ConfigContext } from '../config-provider';
import { tuple } from '../_util/type';
import devWarning from '../_util/devWarning';
import FormItemLabel from './FormItemLabel';
import FormItemInput from './FormItemInput';
import { FormContext, FormItemContext } from './context';
import { toArray, getFieldId, useFrameState } from './util';
import { cloneElement, isValidElement } from '../_util/reactNode';
var ValidateStatuses = tuple('success', 'warning', 'error', 'validating', '');
var MemoInput = /*#__PURE__*/React.memo(function (_ref) {
  var children = _ref.children;
  return children;
}, function (prev, next) {
  return prev.value === next.value && prev.update === next.update;
});

function hasValidName(name) {
  if (name === null) {
    devWarning(false, 'Form.Item', '`null` is passed as `name` property');
  }

  return !(name === undefined || name === null);
}

function FormItem(props) {
  var name = props.name,
      fieldKey = props.fieldKey,
      noStyle = props.noStyle,
      dependencies = props.dependencies,
      customizePrefixCls = props.prefixCls,
      style = props.style,
      className = props.className,
      shouldUpdate = props.shouldUpdate,
      hasFeedback = props.hasFeedback,
      help = props.help,
      rules = props.rules,
      validateStatus = props.validateStatus,
      children = props.children,
      required = props.required,
      label = props.label,
      _props$trigger = props.trigger,
      trigger = _props$trigger === void 0 ? 'onChange' : _props$trigger,
      _props$validateTrigge = props.validateTrigger,
      validateTrigger = _props$validateTrigge === void 0 ? 'onChange' : _props$validateTrigge,
      restProps = __rest(props, ["name", "fieldKey", "noStyle", "dependencies", "prefixCls", "style", "className", "shouldUpdate", "hasFeedback", "help", "rules", "validateStatus", "children", "required", "label", "trigger", "validateTrigger"]);

  var destroyRef = React.useRef(false);

  var _React$useContext = React.useContext(ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;

  var formContext = React.useContext(FormContext);

  var _React$useContext2 = React.useContext(FormItemContext),
      updateItemErrors = _React$useContext2.updateItemErrors;

  var _React$useState = React.useState(!!help),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      domErrorVisible = _React$useState2[0],
      innerSetDomErrorVisible = _React$useState2[1];

  var prevValidateStatusRef = React.useRef(validateStatus);

  var _useFrameState = useFrameState({}),
      _useFrameState2 = _slicedToArray(_useFrameState, 2),
      inlineErrors = _useFrameState2[0],
      setInlineErrors = _useFrameState2[1];

  function setDomErrorVisible(visible) {
    if (!destroyRef.current) {
      innerSetDomErrorVisible(visible);
    }
  }

  var formName = formContext.name;
  var hasName = hasValidName(name); // Cache Field NamePath

  var nameRef = React.useRef([]); // Should clean up if Field removed

  React.useEffect(function () {
    return function () {
      destroyRef.current = true;
      updateItemErrors(nameRef.current.join('__SPLIT__'), []);
    };
  }, []);
  var prefixCls = getPrefixCls('form', customizePrefixCls); // ======================== Errors ========================
  // Collect noStyle Field error to the top FormItem

  var updateChildItemErrors = noStyle ? updateItemErrors : function (subName, subErrors) {
    if (!isEqual(inlineErrors[subName], subErrors)) {
      setInlineErrors(function (prevInlineErrors) {
        return _extends(_extends({}, prevInlineErrors), _defineProperty({}, subName, subErrors));
      });
    }
  };

  function renderLayout(baseChildren, fieldId, meta, isRequired) {
    var _itemClassName;

    if (noStyle) {
      return baseChildren;
    } // ======================== Errors ========================


    var mergedErrors;

    if (help !== undefined && help !== null) {
      mergedErrors = toArray(help);
    } else {
      mergedErrors = meta ? meta.errors : [];
      Object.keys(inlineErrors).forEach(function (subName) {
        var subErrors = inlineErrors[subName] || [];

        if (subErrors.length) {
          mergedErrors = [].concat(_toConsumableArray(mergedErrors), _toConsumableArray(subErrors));
        }
      });
    } // ======================== Status ========================


    var mergedValidateStatus = '';

    if (validateStatus !== undefined) {
      mergedValidateStatus = validateStatus;
    } else if (meta && meta.validating) {
      mergedValidateStatus = 'validating';
    } else if (!help && mergedErrors.length) {
      mergedValidateStatus = 'error';
    } else if (meta && meta.touched) {
      mergedValidateStatus = 'success';
    }

    if (domErrorVisible && help) {
      prevValidateStatusRef.current = mergedValidateStatus;
    }

    var itemClassName = (_itemClassName = {}, _defineProperty(_itemClassName, "".concat(prefixCls, "-item"), true), _defineProperty(_itemClassName, "".concat(prefixCls, "-item-with-help"), domErrorVisible || help), _defineProperty(_itemClassName, "".concat(className), !!className), _defineProperty(_itemClassName, "".concat(prefixCls, "-item-has-feedback"), mergedValidateStatus && hasFeedback), _defineProperty(_itemClassName, "".concat(prefixCls, "-item-has-success"), mergedValidateStatus === 'success'), _defineProperty(_itemClassName, "".concat(prefixCls, "-item-has-warning"), mergedValidateStatus === 'warning'), _defineProperty(_itemClassName, "".concat(prefixCls, "-item-has-error"), mergedValidateStatus === 'error'), _defineProperty(_itemClassName, "".concat(prefixCls, "-item-has-error-leave"), !help && domErrorVisible && prevValidateStatusRef.current === 'error'), _defineProperty(_itemClassName, "".concat(prefixCls, "-item-is-validating"), mergedValidateStatus === 'validating'), _itemClassName); // ======================= Children =======================

    return /*#__PURE__*/React.createElement(Row, _extends({
      className: classNames(itemClassName),
      style: style,
      key: "row"
    }, omit(restProps, ['colon', 'extra', 'getValueFromEvent', 'getValueProps', 'hasFeedback', 'help', 'htmlFor', 'id', 'initialValue', 'isListField', 'label', 'labelAlign', 'labelCol', 'normalize', 'required', 'validateFirst', 'validateStatus', 'valuePropName', 'wrapperCol'])), /*#__PURE__*/React.createElement(FormItemLabel, _extends({
      htmlFor: fieldId,
      required: isRequired
    }, props, {
      prefixCls: prefixCls
    })), /*#__PURE__*/React.createElement(FormItemInput, _extends({}, props, meta, {
      errors: mergedErrors,
      prefixCls: prefixCls,
      onDomErrorVisibleChange: setDomErrorVisible,
      validateStatus: mergedValidateStatus
    }), /*#__PURE__*/React.createElement(FormItemContext.Provider, {
      value: {
        updateItemErrors: updateChildItemErrors
      }
    }, baseChildren)));
  }

  var isRenderProps = typeof children === 'function'; // Record for real component render

  var updateRef = React.useRef(0);
  updateRef.current += 1;

  if (!hasName && !isRenderProps && !dependencies) {
    return renderLayout(children);
  }

  var variables = {};

  if (typeof label === 'string') {
    variables.label = label;
  }

  return /*#__PURE__*/React.createElement(Field, _extends({}, props, {
    messageVariables: variables,
    trigger: trigger,
    validateTrigger: validateTrigger,
    onReset: function onReset() {
      setDomErrorVisible(false);
    }
  }), function (control, meta, context) {
    var errors = meta.errors;
    var mergedName = toArray(name).length && meta ? meta.name : [];
    var fieldId = getFieldId(mergedName, formName);

    if (noStyle) {
      nameRef.current = _toConsumableArray(mergedName);

      if (fieldKey) {
        var fieldKeys = Array.isArray(fieldKey) ? fieldKey : [fieldKey];
        nameRef.current = [].concat(_toConsumableArray(mergedName.slice(-1)), _toConsumableArray(fieldKeys));
      }

      updateItemErrors(nameRef.current.join('__SPLIT__'), errors);
    }

    var isRequired = required !== undefined ? required : !!(rules && rules.some(function (rule) {
      if (rule && _typeof(rule) === 'object' && rule.required) {
        return true;
      }

      if (typeof rule === 'function') {
        var ruleEntity = rule(context);
        return ruleEntity && ruleEntity.required;
      }

      return false;
    })); // ======================= Children =======================

    var mergedControl = _extends(_extends({}, control), {
      id: fieldId
    });

    var childNode = null;

    if (Array.isArray(children) && hasName) {
      devWarning(false, 'Form.Item', '`children` is array of render props cannot have `name`.');
      childNode = children;
    } else if (isRenderProps && (!shouldUpdate || hasName)) {
      devWarning(!!shouldUpdate, 'Form.Item', '`children` of render props only work with `shouldUpdate`.');
      devWarning(!hasName, 'Form.Item', "Do not use `name` with `children` of render props since it's not a field.");
    } else if (dependencies && !isRenderProps && !hasName) {
      devWarning(false, 'Form.Item', 'Must set `name` or use render props when `dependencies` is set.');
    } else if (isValidElement(children)) {
      devWarning(children.props.defaultValue === undefined, 'Form.Item', '`defaultValue` will not work on controlled Field. You should use `initialValues` of Form instead.');

      var childProps = _extends(_extends({}, children.props), mergedControl); // We should keep user origin event handler


      var triggers = new Set([].concat(_toConsumableArray(toArray(trigger)), _toConsumableArray(toArray(validateTrigger))));
      triggers.forEach(function (eventName) {
        childProps[eventName] = function () {
          var _a2, _c2;

          var _a, _b, _c;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          (_a = mergedControl[eventName]) === null || _a === void 0 ? void 0 : (_a2 = _a).call.apply(_a2, [mergedControl].concat(args));
          (_c = (_b = children.props)[eventName]) === null || _c === void 0 ? void 0 : (_c2 = _c).call.apply(_c2, [_b].concat(args));
        };
      });
      childNode = /*#__PURE__*/React.createElement(MemoInput, {
        value: mergedControl[props.valuePropName || 'value'],
        update: updateRef.current
      }, cloneElement(children, childProps));
    } else if (isRenderProps && shouldUpdate && !hasName) {
      childNode = children(context);
    } else {
      devWarning(!mergedName.length, 'Form.Item', '`name` is only used for validate React element. If you are using Form.Item as layout display, please remove `name` instead.');
      childNode = children;
    }

    return renderLayout(childNode, fieldId, meta, isRequired);
  });
}

export default FormItem;