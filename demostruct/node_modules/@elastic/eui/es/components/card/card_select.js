function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import { EuiButtonEmpty } from '../button/button_empty';
import { EuiI18n } from '../i18n';
export var EuiCardSelect = function EuiCardSelect(_ref) {
  var className = _ref.className,
      _ref$isSelected = _ref.isSelected,
      isSelected = _ref$isSelected === void 0 ? false : _ref$isSelected,
      isDisabled = _ref.isDisabled,
      color = _ref.color,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["className", "isSelected", "isDisabled", "color", "children"]);

  var child = euiCardSelectableText(isSelected, isDisabled, children);
  var selectClasses = classNames('euiCardSelect', "euiCardSelect--".concat(euiCardSelectableColor(color, isSelected)), className);
  return React.createElement(EuiButtonEmpty, _extends({
    className: selectClasses,
    color: color || 'text',
    size: "xs",
    isDisabled: isDisabled,
    iconType: isSelected ? 'check' : undefined,
    role: "switch",
    "aria-checked": isSelected
  }, rest), child);
};
EuiCardSelect.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,

  /**
     * Is in the selected state
     */
  isSelected: PropTypes.bool,
  isDisabled: PropTypes.bool
};

function euiCardSelectableText(isSelected, isDisabled, children) {
  if (children) {
    return children;
  }

  var text;

  if (isSelected) {
    text = React.createElement(EuiI18n, {
      token: "euiCardSelect.selected",
      default: "Selected"
    });
  } else if (isDisabled) {
    text = React.createElement(EuiI18n, {
      token: "euiCardSelect.unavailable",
      default: "Unavailable"
    });
  } else {
    text = React.createElement(EuiI18n, {
      token: "euiCardSelect.select",
      default: "Select"
    });
  }

  return text;
}

export function euiCardSelectableColor(color, isSelected) {
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