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

import {add, subtract} from './utility'

// const addResult = addFn(10, 20);
// const subResult = subFn(10, 5);
const addResult = add(10, 20);
const subResult = subtract(10, 5);
console.log(addResult)
console.log(subResult)