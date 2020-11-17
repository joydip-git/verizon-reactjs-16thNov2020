define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.subtract = _exports.add = void 0;

  var add = function add(a, b) {
    return a + b;
  };

  _exports.add = add;

  var subtract = function subtract(a, b) {
    return a - b;
  }; //common js format of export
  // module.exports = {
  //     add: add,
  //     subtract: subtract
  // }


  _exports.subtract = subtract;
});