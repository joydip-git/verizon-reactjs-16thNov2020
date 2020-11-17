define(["./app"], function (_app) {
  "use strict";

  //bootstrapper file
  var appElememt = (0, _app.app)();
  var placeholder = document.getElementById('root');
  placeholder.appendChild(appElememt);
});