define(["exports", "./reactheader", "./reactdescription"], function (_exports, _reactheader, _reactdescription) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.app = void 0;
  _reactheader = _interopRequireDefault(_reactheader);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  //import { reactheader } from "./reactheader";
  var app = function app() {
    var headerElement = (0, _reactheader["default"])();
    var descriptionElement = (0, _reactdescription.reactdescription)();
    var appDesign = document.createElement('div');
    appDesign.appendChild(headerElement);
    appDesign.appendChild(descriptionElement);
    return appDesign;
  }; //export const add = (a, b) => (a + b);
  //export default function sub(a, b) { return (a - b) };
  //export default app;


  _exports.app = app;
});