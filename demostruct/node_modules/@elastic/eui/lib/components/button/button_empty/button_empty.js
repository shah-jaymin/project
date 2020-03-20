"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiButtonEmpty = exports.FLUSH_TYPES = exports.ICON_SIDES = exports.SIZES = exports.COLORS = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _common = require("../../common");

var _loading = require("../../loading");

var _services = require("../../../services");

var _icon = require("../../icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var colorToClassNameMap = {
  primary: 'euiButtonEmpty--primary',
  danger: 'euiButtonEmpty--danger',
  disabled: 'euiButtonEmpty--disabled',
  text: 'euiButtonEmpty--text',
  ghost: 'euiButtonEmpty--ghost'
};
var COLORS = (0, _common.keysOf)(colorToClassNameMap);
exports.COLORS = COLORS;
var sizeToClassNameMap = {
  xs: 'euiButtonEmpty--xSmall',
  s: 'euiButtonEmpty--small',
  l: 'euiButtonEmpty--large'
};
var SIZES = (0, _common.keysOf)(sizeToClassNameMap);
exports.SIZES = SIZES;
var iconSideToClassNameMap = {
  left: '',
  right: 'euiButtonEmpty--iconRight'
};
var ICON_SIDES = (0, _common.keysOf)(iconSideToClassNameMap);
exports.ICON_SIDES = ICON_SIDES;
var flushTypeToClassNameMap = {
  left: 'euiButtonEmpty--flushLeft',
  right: 'euiButtonEmpty--flushRight'
};
var FLUSH_TYPES = (0, _common.keysOf)(flushTypeToClassNameMap);
exports.FLUSH_TYPES = FLUSH_TYPES;

var EuiButtonEmpty = function EuiButtonEmpty(_ref) {
  var children = _ref.children,
      className = _ref.className,
      iconType = _ref.iconType,
      _ref$iconSide = _ref.iconSide,
      iconSide = _ref$iconSide === void 0 ? 'left' : _ref$iconSide,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'primary' : _ref$color,
      size = _ref.size,
      flush = _ref.flush,
      isDisabled = _ref.isDisabled,
      isLoading = _ref.isLoading,
      href = _ref.href,
      target = _ref.target,
      rel = _ref.rel,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'button' : _ref$type,
      buttonRef = _ref.buttonRef,
      contentProps = _ref.contentProps,
      textProps = _ref.textProps,
      rest = _objectWithoutProperties(_ref, ["children", "className", "iconType", "iconSide", "color", "size", "flush", "isDisabled", "isLoading", "href", "target", "rel", "type", "buttonRef", "contentProps", "textProps"]);

  // If in the loading state, force disabled to true
  isDisabled = isLoading ? true : isDisabled;
  var classes = (0, _classnames.default)('euiButtonEmpty', colorToClassNameMap[color], size ? sizeToClassNameMap[size] : null, iconSideToClassNameMap[iconSide], flush ? flushTypeToClassNameMap[flush] : null, className);
  var contentClassNames = (0, _classnames.default)('euiButtonEmpty__content', contentProps && contentProps.className);
  var textClassNames = (0, _classnames.default)('euiButtonEmpty__text', textProps && textProps.className); // Add an icon to the button if one exists.

  var buttonIcon;

  if (isLoading) {
    buttonIcon = _react.default.createElement(_loading.EuiLoadingSpinner, {
      className: "euiButton__spinner",
      size: "m"
    });
  } else if (iconType) {
    buttonIcon = _react.default.createElement(_icon.EuiIcon, {
      className: "euiButtonEmpty__icon",
      type: iconType,
      size: "m",
      "aria-hidden": "true"
    });
  }

  var innerNode = _react.default.createElement("span", _extends({}, contentProps, {
    className: contentClassNames
  }), buttonIcon, _react.default.createElement("span", _extends({}, textProps, {
    className: textClassNames
  }), children)); // <a> elements don't respect the `disabled` attribute. So if we're disabled, we'll just pretend
  // this is a button and piggyback off its disabled styles.


  if (href && !isDisabled) {
    var secureRel = (0, _services.getSecureRelForTarget)({
      href: href,
      target: target,
      rel: rel
    });
    return _react.default.createElement("a", _extends({
      className: classes,
      href: href,
      target: target,
      rel: secureRel,
      ref: buttonRef
    }, rest), innerNode);
  }

  return _react.default.createElement("button", _extends({
    disabled: isDisabled,
    className: classes,
    type: type,
    ref: buttonRef
  }, rest), innerNode);
};

exports.EuiButtonEmpty = EuiButtonEmpty;
EuiButtonEmpty.propTypes = {
  href: _propTypes.default.string,
  onClick: _propTypes.default.func
};
EuiButtonEmpty.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiButtonEmpty",
  "props": {
    "iconSide": {
      "defaultValue": {
        "value": "'left'",
        "computed": false
      },
      "required": false
    },
    "color": {
      "defaultValue": {
        "value": "'primary'",
        "computed": false
      },
      "required": false
    },
    "type": {
      "defaultValue": {
        "value": "'button'",
        "computed": false
      },
      "required": false
    },
    "href": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "onClick": {
      "type": {
        "name": "func"
      },
      "required": false,
      "description": ""
    }
  }
};