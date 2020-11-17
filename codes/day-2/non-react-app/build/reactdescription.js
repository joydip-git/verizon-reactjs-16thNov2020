define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.reactdescription = void 0;

  //reactdescription --> component
  var reactdescription = function reactdescription() {
    //data
    var desciptionContent = "\n    React JS is a library.\n    It helps you build components.\n    It uses Virtual DOM\n    ";
    var reactDescriptionDesign = document.createElement('div');
    reactDescriptionDesign.style.fontFamily = 'Segoe UI';
    reactDescriptionDesign.style.backgroundColor = 'azure';
    reactDescriptionDesign.style.border = '2px solid blue';
    reactDescriptionDesign.style.fontSize = 'medium';
    reactDescriptionDesign.style.margin = '10px';
    reactDescriptionDesign.style.borderRadius = '3px';
    reactDescriptionDesign.innerHTML = desciptionContent; //design/element of this component

    return reactDescriptionDesign;
  };

  _exports.reactdescription = reactdescription;
});