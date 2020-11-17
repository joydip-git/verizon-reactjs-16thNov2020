define(["./utility"], function (_utility) {
  "use strict";

  //const { addFn, subFn } = require('./utility')
  //const utilityModuleExport = require('./utility')
  // const addFn = require('./utility').addFn;
  // const subFn = require('./utility').subFn;

  /**
   *  {
          addFn: add,
          subFn: subtact
      }
   */
  //const { addFn, subFn } = require("./utility");
  // const addResult = addFn(10, 20);
  // const subResult = subFn(10, 5);
  var addResult = (0, _utility.add)(10, 20);
  var subResult = (0, _utility.subtract)(10, 5);
  console.log(addResult);
  console.log(subResult);
});