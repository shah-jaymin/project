function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import { keysOf } from '../common';
import { getSecureRelForTarget } from '../../services';
import { EuiText } from '../text';
import { EuiTitle } from '../title';
import { EuiBetaBadge } from '../badge/beta_badge';
import { EuiCardSelect, euiCardSelectableColor } from './card_select';
import makeId from '../form/form_row/make_id';
var textAlignToClassNameMap = {
  left: 'euiCard--leftAligned',
  center: 'euiCard--centerAligned',
  right: 'euiCard--rightAligned'
};
export var ALIGNMENTS = keysOf(textAlignToClassNameMap);
var layoutToClassNameMap = {
  vertical: '',
  horizontal: 'euiCard--horizontal'
};
export var LAYOUT_ALIGNMENTS = keysOf(layoutToClassNameMap);
var displayToClassNameMap = {
  panel: '',
  plain: 'euiCard--plain'
};
export var DISPLAYS = keysOf(displayToClassNameMap);
export var EuiCard = function EuiCard(_ref) {
  var className = _ref.className,
      description = _ref.description,
      isDisabled = _ref.isDisabled,
      title = _ref.title,
      _ref$titleElement = _ref.titleElement,
      titleElement = _ref$titleElement === void 0 ? 'span' : _ref$titleElement,
      _ref$titleSize = _ref.titleSize,
      titleSize = _ref$titleSize === void 0 ? 's' : _ref$titleSize,
      icon = _ref.icon,
      image = _ref.image,
      children = _ref.children,
      footer = _ref.footer,
      onClick = _ref.onClick,
      href = _ref.href,
      rel = _ref.rel,
      target = _ref.target,
      _ref$textAlign = _ref.textAlign,
      textAlign = _ref$textAlign === void 0 ? 'center' : _ref$textAlign,
      betaBadgeLabel = _ref.betaBadgeLabel,
      betaBadgeTooltipContent = _ref.betaBadgeTooltipContent,
      betaBadgeTitle = _ref.betaBadgeTitle,
      _ref$layout = _ref.layout,
      layout = _ref$layout === void 0 ? 'vertical' : _ref$layout,
      selectable = _ref.selectable,
      _ref$display = _ref.display,
      display = _ref$display === void 0 ? 'panel' : _ref$display,
      rest = _objectWithoutProperties(_ref, ["className", "description", "isDisabled", "title", "titleElement", "titleSize", "icon", "image", "children", "footer", "onClick", "href", "rel", "target", "textAlign", "betaBadgeLabel", "betaBadgeTooltipContent", "betaBadgeTitle", "layout", "selectable", "display"]);

  /**
   * For a11y, we simulate the same click that's provided on the title when clicking the whole card
   * without having to make the whole card a button or anchor tag.
   * *Card Accessibility: The redundant click event https://inclusive-components.design/cards/*
   */
  var link = null;

  var outerOnClick = function outerOnClick(e) {
    if (link && link !== e.target) {
      link.click();
    }
  };

  if (layout === 'horizontal') {
    if (image || footer) {
      throw new Error("EuiCard: layout = horizontal' cannot be used in conjunction with 'image', 'footer', or 'textAlign'.");
    }
  }

  var selectableColorClass = selectable ? "euiCard--isSelectable--".concat(euiCardSelectableColor(selectable.color, selectable.isSelected)) : undefined;
  var classes = classNames('euiCard', displayToClassNameMap[display], textAlignToClassNameMap[textAlign], layoutToClassNameMap[layout], {
    'euiCard--isClickable': onClick || href || selectable && !selectable.isDisabled,
    'euiCard--hasBetaBadge': betaBadgeLabel,
    'euiCard--hasIcon': icon,
    'euiCard--hasChildren': children,
    'euiCard--isSelectable': selectable,
    'euiCard-isSelected': selectable && selectable.isSelected,
    'euiCard-isDisabled': isDisabled
  }, selectableColorClass, className);
  var ariaId = makeId();
  /**
   * Top area containing image, icon or both
   */

  var imageNode;

  if (image && layout === 'vertical') {
    imageNode = React.createElement("img", {
      className: "euiCard__image",
      src: image,
      alt: ""
    });
  }

  var iconNode;

  if (icon) {
    iconNode = React.cloneElement(icon, {
      className: classNames(icon.props.className, 'euiCard__icon')
    });
  }

  var optionalCardTop;

  if (imageNode || iconNode) {
    optionalCardTop = React.createElement("div", {
      className: "euiCard__top"
    }, imageNode, iconNode);
  }
  /**
   * Optional EuiBetaBadge
   */


  var optionalBetaBadge;
  var optionalBetaBadgeID = '';

  if (betaBadgeLabel) {
    optionalBetaBadgeID = "".concat(ariaId, "BetaBadge");
    optionalBetaBadge = React.createElement("span", {
      className: "euiCard__betaBadgeWrapper"
    }, React.createElement(EuiBetaBadge, {
      id: optionalBetaBadgeID,
      label: betaBadgeLabel,
      title: betaBadgeTitle,
      tooltipContent: betaBadgeTooltipContent,
      className: "euiCard__betaBadge"
    }));
  }
  /**
   * Optional selectable button
   */


  if (selectable && isDisabled && selectable.isDisabled === undefined) {
    selectable.isDisabled = isDisabled;
  }

  var optionalSelectButton;

  if (selectable) {
    optionalSelectButton = React.createElement(EuiCardSelect, _extends({
      "aria-describedby": "".concat(ariaId, "Title ").concat(ariaId, "Description")
    }, selectable, {
      buttonRef: function buttonRef(node) {
        link = node;
      }
    }));
  }
  /**
   * Wraps the title with the link (<a>) or button.
   * This makes the title element a11y friendly and gets described by its content if its interactable.
   */


  var theTitle;

  if (!isDisabled && href) {
    theTitle = React.createElement("a", {
      className: "euiCard__titleAnchor",
      onClick: onClick,
      href: href,
      target: target,
      "aria-describedby": "".concat(ariaId, "Description"),
      rel: getSecureRelForTarget({
        href: href,
        target: target,
        rel: rel
      }),
      ref: function ref(node) {
        link = node;
      }
    }, title);
  } else if (isDisabled || onClick) {
    theTitle = React.createElement("button", {
      className: "euiCard__titleButton",
      onClick: onClick,
      disabled: isDisabled,
      "aria-describedby": "".concat(optionalBetaBadgeID, " ").concat(ariaId, "Description"),
      ref: function ref(node) {
        link = node;
      }
    }, title);
  } else {
    theTitle = title;
  }
  /**
   * Convert titleElement to a capital TitleElement
   */


  var TitleElement = titleElement;
  return React.createElement("div", _extends({
    className: classes,
    onClick: outerOnClick
  }, rest), optionalCardTop, React.createElement("div", {
    className: "euiCard__content"
  }, React.createElement(EuiTitle, {
    id: "".concat(ariaId, "Title"),
    className: "euiCard__title",
    size: titleSize
  }, React.createElement(TitleElement, null, theTitle)), React.createElement(EuiText, {
    id: "".concat(ariaId, "Description"),
    size: "s",
    className: "euiCard__description"
  }, React.createElement("p", null, description)), children), optionalBetaBadge, layout === 'vertical' && footer && React.createElement("div", {
    className: "euiCard__footer"
  }, footer), optionalSelectButton);
};
EuiCard.propTypes = {
  /**
     * Card's are required to have at least a title and description
     */
  title: PropTypes.any.isRequired,

  /**
     * Determines the title's heading element
     */
  titleElement: PropTypes.oneOf(["h2", "h3", "h4", "h5", "h6", "span"]),

  /**
     * Determines the title's size, matching that of EuiTitle.
     * Though, card titles can't be too large or small relative to the description text.
     */
  titleSize: PropTypes.oneOf(["s", "xs"]),

  /**
     * Card's are required to have at least a title and description
     */
  description: PropTypes.any.isRequired,

  /**
     * Requires a <EuiIcon> node
     */
  icon: PropTypes.element,

  /**
     * Accepts a url in string form
     */
  image: PropTypes.string,

  /**
     * Content to be rendered between the description and the footer
     */
  children: PropTypes.node,

  /**
     * Accepts any combination of elements
     */
  footer: PropTypes.node,

  /**
     * Use only if you want to forego a button in the footer and make the whole card clickable
     */
  onClick: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.func.isRequired]),
  isDisabled: PropTypes.bool,
  href: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,

  /**
     * Changes alignment of the title and description
     */
  textAlign: PropTypes.oneOf(["left", "center", "right"]),

  /**
     * Change to "horizontal" if you need the icon to be left of the content
     */
  layout: PropTypes.oneOf(["vertical", "horizontal"]),

  /**
     * Add a badge to the card to label it as "Beta" or other non-GA state
     */
  betaBadgeLabel: PropTypes.string,

  /**
     * Add a description to the beta badge (will appear in a tooltip)
     */
  betaBadgeTooltipContent: PropTypes.node,

  /**
     * Optional title will be supplied as tooltip title or title attribute otherwise the label will be used
     */
  betaBadgeTitle: PropTypes.string,

  /**
     * Adds a button to the bottom of the card to allow for in-place selection
     */
  selectable: PropTypes.shape({
    href: PropTypes.string,
    onClick: PropTypes.func,

    /**
       * Is in the selected state
       */
    isSelected: PropTypes.bool,
    isDisabled: PropTypes.bool
  }),

  /**
     * Visual display of the card. Display as 'panel' or 'plain'.
     * Selectable cards will always display as 'panel'.
     */
  display: PropTypes.oneOf(["panel", "plain"])
};
EuiCard.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiCard",
  "props": {
    "titleElement": {
      "defaultValue": {
        "value": "'span'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"h2\"",
          "computed": false
        }, {
          "value": "\"h3\"",
          "computed": false
        }, {
          "value": "\"h4\"",
          "computed": false
        }, {
          "value": "\"h5\"",
          "computed": false
        }, {
          "value": "\"h6\"",
          "computed": false
        }, {
          "value": "\"span\"",
          "computed": false
        }]
      },
      "required": false,
      "description": "Determines the title's heading element"
    },
    "titleSize": {
      "defaultValue": {
        "value": "'s'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"s\"",
          "computed": false
        }, {
          "value": "\"xs\"",
          "computed": false
        }]
      },
      "required": false,
      "description": "Determines the title's size, matching that of EuiTitle.\nThough, card titles can't be too large or small relative to the description text."
    },
    "textAlign": {
      "defaultValue": {
        "value": "'center'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"left\"",
          "computed": false
        }, {
          "value": "\"center\"",
          "computed": false
        }, {
          "value": "\"right\"",
          "computed": false
        }]
      },
      "required": false,
      "description": "Changes alignment of the title and description"
    },
    "layout": {
      "defaultValue": {
        "value": "'vertical'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"vertical\"",
          "computed": false
        }, {
          "value": "\"horizontal\"",
          "computed": false
        }]
      },
      "required": false,
      "description": "Change to \"horizontal\" if you need the icon to be left of the content"
    },
    "display": {
      "defaultValue": {
        "value": "'panel'",
        "computed": false
      },
      "type": {
        "name": "enum",
        "value": [{
          "value": "\"panel\"",
          "computed": false
        }, {
          "value": "\"plain\"",
          "computed": false
        }]
      },
      "required": false,
      "description": "Visual display of the card. Display as 'panel' or 'plain'.\nSelectable cards will always display as 'panel'."
    },
    "title": {
      "type": {
        "name": "any"
      },
      "required": true,
      "description": "Card's are required to have at least a title and description"
    },
    "description": {
      "type": {
        "name": "any"
      },
      "required": true,
      "description": "Card's are required to have at least a title and description"
    },
    "icon": {
      "type": {
        "name": "element"
      },
      "required": false,
      "description": "Requires a <EuiIcon> node"
    },
    "image": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "Accepts a url in string form"
    },
    "children": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": "Content to be rendered between the description and the footer"
    },
    "footer": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": "Accepts any combination of elements"
    },
    "onClick": {
      "type": {
        "name": "union",
        "value": [{
          "name": "func"
        }, {
          "name": "func"
        }]
      },
      "required": false,
      "description": "Use only if you want to forego a button in the footer and make the whole card clickable"
    },
    "isDisabled": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "href": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "target": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "rel": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "betaBadgeLabel": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "Add a badge to the card to label it as \"Beta\" or other non-GA state"
    },
    "betaBadgeTooltipContent": {
      "type": {
        "name": "node"
      },
      "required": false,
      "description": "Add a description to the beta badge (will appear in a tooltip)"
    },
    "betaBadgeTitle": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "Optional title will be supplied as tooltip title or title attribute otherwise the label will be used"
    },
    "selectable": {
      "type": {
        "name": "shape",
        "value": {
          "href": {
            "name": "string",
            "required": false
          },
          "onClick": {
            "name": "func",
            "required": false
          },
          "isSelected": {
            "name": "bool",
            "description": "Is in the selected state",
            "required": false
          },
          "isDisabled": {
            "name": "bool",
            "required": false
          }
        }
      },
      "required": false,
      "description": "Adds a button to the bottom of the card to allow for in-place selection"
    }
  }
};