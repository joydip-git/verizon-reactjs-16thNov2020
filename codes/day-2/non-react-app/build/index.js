define(["./app"], function (_app) {
  "use strict";

  var appElememt = (0, _app.app)();
  var placeholder = document.getElementById('root');
  placeholder.appendChild(appElememt);
});