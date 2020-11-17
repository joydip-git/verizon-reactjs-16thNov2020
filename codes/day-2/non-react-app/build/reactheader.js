define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;

  //reactheader --> component
  var reactheader = function reactheader() {
    //data
    var headerContent = 'Introduction to React JS';
    var reactHeaderDesign = document.createElement('h2');
    reactHeaderDesign.style.fontFamily = 'Segoe UI';
    reactHeaderDesign.style.backgroundColor = 'burlywood';
    reactHeaderDesign.style.border = '2px solid blue';
    reactHeaderDesign.innerHTML = headerContent; //design/element of this component

    return reactHeaderDesign;
  };

  var _default = reactheader;
  /**
   * module.exports={
   *   ['default']:reactheader
   * }
   */

  _exports["default"] = _default;
});