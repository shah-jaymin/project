"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sleep = sleep;

// async timeout function for awaiting state or DOM updates
function sleep() {
  var ms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}