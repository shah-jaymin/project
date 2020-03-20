// async timeout function for awaiting state or DOM updates
export function sleep() {
  var ms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}