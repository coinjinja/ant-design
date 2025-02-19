function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
import RcUpload from 'rc-upload';
import classNames from 'classnames';
import UploadList from './UploadList';
import { T, fileToObject, getFileItem, removeFileItem } from './utils';
import LocaleReceiver from '../locale-provider/LocaleReceiver';
import defaultLocale from '../locale/default';
import { ConfigConsumer } from '../config-provider';
import devWarning from '../_util/devWarning';

var Upload =
/** @class */
function () {
  var Upload = /*#__PURE__*/function (_React$Component) {
    _inherits(Upload, _React$Component);

    var _super = _createSuper(Upload);

    function Upload(props) {
      var _this;

      _classCallCheck(this, Upload);

      _this = _super.call(this, props);

      _this.saveUpload = function (node) {
        _this.upload = node;
      };

      _this.onStart = function (file) {
        var fileList = _this.state.fileList;
        var targetItem = fileToObject(file);
        targetItem.status = 'uploading';
        var nextFileList = fileList.concat();
        var fileIndex = nextFileList.findIndex(function (_ref) {
          var uid = _ref.uid;
          return uid === targetItem.uid;
        });

        if (fileIndex === -1) {
          nextFileList.push(targetItem);
        } else {
          nextFileList[fileIndex] = targetItem;
        }

        _this.onChange({
          file: targetItem,
          fileList: nextFileList
        });
      };

      _this.onSuccess = function (response, file, xhr) {
        _this.clearProgressTimer();

        try {
          if (typeof response === 'string') {
            response = JSON.parse(response);
          }
        } catch (e) {
          /* do nothing */
        }

        var fileList = _this.state.fileList;
        var targetItem = getFileItem(file, fileList); // removed

        if (!targetItem) {
          return;
        }

        targetItem.status = 'done';
        targetItem.response = response;
        targetItem.xhr = xhr;

        _this.onChange({
          file: _extends({}, targetItem),
          fileList: fileList
        });
      };

      _this.onProgress = function (e, file) {
        var fileList = _this.state.fileList;
        var targetItem = getFileItem(file, fileList); // removed

        if (!targetItem) {
          return;
        }

        targetItem.percent = e.percent;

        _this.onChange({
          event: e,
          file: _extends({}, targetItem),
          fileList: fileList
        });
      };

      _this.onError = function (error, response, file) {
        _this.clearProgressTimer();

        var fileList = _this.state.fileList;
        var targetItem = getFileItem(file, fileList); // removed

        if (!targetItem) {
          return;
        }

        targetItem.error = error;
        targetItem.response = response;
        targetItem.status = 'error';

        _this.onChange({
          file: _extends({}, targetItem),
          fileList: fileList
        });
      };

      _this.handleRemove = function (file) {
        var onRemove = _this.props.onRemove;
        var fileList = _this.state.fileList;
        Promise.resolve(typeof onRemove === 'function' ? onRemove(file) : onRemove).then(function (ret) {
          // Prevent removing file
          if (ret === false) {
            return;
          }

          var removedFileList = removeFileItem(file, fileList);

          if (removedFileList) {
            file.status = 'removed';

            if (_this.upload) {
              _this.upload.abort(file);
            }

            _this.onChange({
              file: file,
              fileList: removedFileList
            });
          }
        });
      };

      _this.onChange = function (info) {
        if (!('fileList' in _this.props)) {
          _this.setState({
            fileList: info.fileList
          });
        }

        var onChange = _this.props.onChange;

        if (onChange) {
          onChange(_extends(_extends({}, info), {
            fileList: _toConsumableArray(info.fileList)
          }));
        }
      };

      _this.onFileDrop = function (e) {
        _this.setState({
          dragState: e.type
        });
      };

      _this.beforeUpload = function (file, fileList) {
        var beforeUpload = _this.props.beforeUpload;
        var stateFileList = _this.state.fileList;

        if (!beforeUpload) {
          return true;
        }

        var result = beforeUpload(file, fileList);

        if (result === false) {
          // Get unique file list
          var uniqueList = [];
          stateFileList.concat(fileList.map(fileToObject)).forEach(function (f) {
            if (uniqueList.every(function (uf) {
              return uf.uid !== f.uid;
            })) {
              uniqueList.push(f);
            }
          });

          _this.onChange({
            file: file,
            fileList: uniqueList
          });

          return false;
        }

        if (result && result.then) {
          return result;
        }

        return true;
      };

      _this.renderUploadList = function (locale) {
        var _this$props = _this.props,
            showUploadList = _this$props.showUploadList,
            listType = _this$props.listType,
            onPreview = _this$props.onPreview,
            onDownload = _this$props.onDownload,
            previewFile = _this$props.previewFile,
            disabled = _this$props.disabled,
            propLocale = _this$props.locale,
            iconRender = _this$props.iconRender,
            isImageUrl = _this$props.isImageUrl,
            progress = _this$props.progress;
        var showRemoveIcon = showUploadList.showRemoveIcon,
            showPreviewIcon = showUploadList.showPreviewIcon,
            showDownloadIcon = showUploadList.showDownloadIcon,
            removeIcon = showUploadList.removeIcon,
            downloadIcon = showUploadList.downloadIcon;
        var fileList = _this.state.fileList;
        return /*#__PURE__*/React.createElement(UploadList, {
          listType: listType,
          items: fileList,
          previewFile: previewFile,
          onPreview: onPreview,
          onDownload: onDownload,
          onRemove: _this.handleRemove,
          showRemoveIcon: !disabled && showRemoveIcon,
          showPreviewIcon: showPreviewIcon,
          showDownloadIcon: showDownloadIcon,
          removeIcon: removeIcon,
          downloadIcon: downloadIcon,
          iconRender: iconRender,
          locale: _extends(_extends({}, locale), propLocale),
          isImageUrl: isImageUrl,
          progress: progress
        });
      };

      _this.renderUpload = function (_ref2) {
        var _classNames2;

        var getPrefixCls = _ref2.getPrefixCls,
            direction = _ref2.direction;
        var _this$props2 = _this.props,
            customizePrefixCls = _this$props2.prefixCls,
            className = _this$props2.className,
            showUploadList = _this$props2.showUploadList,
            listType = _this$props2.listType,
            type = _this$props2.type,
            disabled = _this$props2.disabled,
            children = _this$props2.children,
            style = _this$props2.style;
        var _this$state = _this.state,
            fileList = _this$state.fileList,
            dragState = _this$state.dragState;
        var prefixCls = getPrefixCls('upload', customizePrefixCls);

        var rcUploadProps = _extends(_extends({
          onStart: _this.onStart,
          onError: _this.onError,
          onProgress: _this.onProgress,
          onSuccess: _this.onSuccess
        }, _this.props), {
          prefixCls: prefixCls,
          beforeUpload: _this.beforeUpload
        });

        delete rcUploadProps.className;
        delete rcUploadProps.style; // Remove id to avoid open by label when trigger is hidden
        // !children: https://github.com/ant-design/ant-design/issues/14298
        // disabled: https://github.com/ant-design/ant-design/issues/16478
        //           https://github.com/ant-design/ant-design/issues/24197

        if (!children || disabled) {
          delete rcUploadProps.id;
        }

        var uploadList = showUploadList ? /*#__PURE__*/React.createElement(LocaleReceiver, {
          componentName: "Upload",
          defaultLocale: defaultLocale.Upload
        }, _this.renderUploadList) : null;

        if (type === 'drag') {
          var _classNames;

          var dragCls = classNames(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-drag"), true), _defineProperty(_classNames, "".concat(prefixCls, "-drag-uploading"), fileList.some(function (file) {
            return file.status === 'uploading';
          })), _defineProperty(_classNames, "".concat(prefixCls, "-drag-hover"), dragState === 'dragover'), _defineProperty(_classNames, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
          return /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("div", {
            className: dragCls,
            onDrop: _this.onFileDrop,
            onDragOver: _this.onFileDrop,
            onDragLeave: _this.onFileDrop,
            style: style
          }, /*#__PURE__*/React.createElement(RcUpload, _extends({}, rcUploadProps, {
            ref: _this.saveUpload,
            className: "".concat(prefixCls, "-btn")
          }), /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-drag-container")
          }, children))), uploadList);
        }

        var uploadButtonCls = classNames(prefixCls, (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls, "-select"), true), _defineProperty(_classNames2, "".concat(prefixCls, "-select-").concat(listType), true), _defineProperty(_classNames2, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_classNames2, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames2));
        var uploadButton = /*#__PURE__*/React.createElement("div", {
          className: uploadButtonCls,
          style: children ? undefined : {
            display: 'none'
          }
        }, /*#__PURE__*/React.createElement(RcUpload, _extends({}, rcUploadProps, {
          ref: _this.saveUpload
        })));

        if (listType === 'picture-card') {
          return /*#__PURE__*/React.createElement("span", {
            className: classNames(className, "".concat(prefixCls, "-picture-card-wrapper"))
          }, uploadList, uploadButton);
        }

        return /*#__PURE__*/React.createElement("span", {
          className: className
        }, uploadButton, uploadList);
      };

      _this.state = {
        fileList: props.fileList || props.defaultFileList || [],
        dragState: 'drop'
      };
      devWarning('fileList' in props || !('value' in props), 'Upload', '`value` is not a valid prop, do you mean `fileList`?');
      return _this;
    }

    _createClass(Upload, [{
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.clearProgressTimer();
      }
    }, {
      key: "clearProgressTimer",
      value: function clearProgressTimer() {
        clearInterval(this.progressTimer);
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement(ConfigConsumer, null, this.renderUpload);
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(nextProps) {
        if ('fileList' in nextProps) {
          return {
            fileList: nextProps.fileList || []
          };
        }

        return null;
      }
    }]);

    return Upload;
  }(React.Component);

  Upload.defaultProps = {
    type: 'select',
    multiple: false,
    action: '',
    data: {},
    accept: '',
    beforeUpload: T,
    showUploadList: true,
    listType: 'text',
    className: '',
    disabled: false,
    supportServerRender: true
  };
  return Upload;
}();

export default Upload;