"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.euiCardSelectableColor = euiCardSelectableColor;
exports.EuiCardSelect = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _button_empty = require("../button/button_empty");

var _i18n = require("../i18n");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiCardSelect = function EuiCardSelect(_ref) {
  var className = _ref.className,
      _ref$isSelected = _ref.isSelected,
      isSelected = _ref$isSelected === void 0 ? false : _ref$isSelected,
      isDisabled = _ref.isDisabled,
      color = _ref.color,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["className", "isSelected", "isDisabled", "color", "children"]);

  var child = euiCardSelectableText(isSelected, isDisabled, children);
  var selectClasses = (0, _classnames.default)('euiCardSelect', "euiCardSelect--".concat(euiCardSelectableColor(color, isSelected)), className);
  return _react.default.createElement(_button_empty.EuiButtonEmpty, _extends({
    className: selectClasses,
    color: color || 'text',
    size: "xs",
    isDisabled: isDisabled,
    iconType: isSelected ? 'check' : undefined,
    role: "switch",
    "aria-checked": isSelected
  }, rest), child);
};

exports.EuiCardSelect = EuiCardSelect;
EuiCardSelect.propTypes = {
  href: _propTypes.default.string,
  onClick: _propTypes.default.func,

  /**
     * Is in the selected state
     */
  isSelected: _propTypes.default.bool,
  isDisabled: _propTypes.default.bool
};

function euiCardSelectableText(isSelected, isDisabled, children) {
  if (children) {
    return children;
  }

  var text;

  if (isSelected) {
    text = _react.default.createElement(_i18n.EuiI18n, {
      token: "euiCardSelect.selected",
      default: "Selected"
    });
  } else if (isDisabled) {
    text = _react.default.createElement(_i18n.EuiI18n, {
      token: "euiCardSelect.unavailable",
      default: "Unavailable"
    });
  } else {
    text = _react.default.createElement(_i18n.EuiI18n, {
      token: "euiCardSelect.select",
      default: "Select"
    });
  }

  return text;
}

function euiCardSelectableColor(color, isSelected) {
  var calculatedColor;

  if (color) {
    calculatedColor = color;
  } else if (isSelected) {
    calculatedColor = 'success';
  } else {
    calculatedColor = 'text';
  }

  return calculatedColor;
}

EuiCardSelect.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiCardSelect",
  "props": {
    "isSelected": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Is in the selected state"
    },
    "href": {
      "type": {
        "name": "custom",
        "raw": "_propTypes.default.string"
      },
      "required": false,
      "description": ""
    },
    "onClick": {
      "type": {
        "name": "custom",
        "raw": "_propTypes.default.func"
      },
      "required": false,
      "description": ""
    },
    "isDisabled": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    }
  }
};