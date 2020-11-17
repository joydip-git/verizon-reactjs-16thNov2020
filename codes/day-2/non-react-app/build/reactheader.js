define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;

  //reactheader --> component
  var reactheader = function reactheader() {
    //data
    var headerContent = 'Introduction to React JS'; //HTML element

    var reactHeaderDesign = document.createElement('h2'); //styles

    reactHeaderDesign.style.fontFamily = 'Segoe UI';
    reactHeaderDesign.style.backgroundColor = 'burlywood';
    reactHeaderDesign.style.border = '2px solid blue'; //content of the element

    reactHeaderDesign.innerHTML = headerContent; //returning design/element of this component

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