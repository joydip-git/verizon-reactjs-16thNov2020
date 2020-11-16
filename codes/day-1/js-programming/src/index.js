//console.log(x)
let x = 10;
//var i;
for (let i = 0; i < 2; i++) {
    let x = 20;
    console.log(x)
}
console.log(x)

//varibale hoisting
/**
 * execution preparation phase:
 * var globalExecutionObject={
 *  i:undefined
 * }
 *
 * execution phase:

 * var globalExecutionObject={
 *  x:10, //after line:3
 *  i:0
 * }
 *
 * //after line:3
 * window.x = 10
 * window.i = 0/1/2
 */

const a = 10;
//a = 30
console.log(a)

const numbers = [1, 2, 3, 4]
numbers.push(10);
numbers[2] = 30
//numbers = [];
console.log(numbers)

//const copy = [];
// for (let index = 0; index < numbers.length; index++) {
//     copy.push(numbers[index]);
// }
const another = [100, 200]
const copy = [10, 20, ...numbers, 50, 60, ...another]
console.log(copy)

var anil = {
    name: 'anil',
    id: 1,
    age: 20
}

// let name = anil.name;
// let id = anil.id;
// let age = anil.age;
const { nameValue = name, id, age } = anil;
console.log(
    "Name: " + nameValue
    + ", Id: " + id
    + ", age: " + age
)
//templated string
console.log(`Name:${nameValue}, 
        Id:${id}, 
    Age:${age}`
)
// const copyOfAnil = Object.create(anil);
// const copyOfAnil = {};
// for (let propertyName in anil) {
//     let propertyValue = anil[propertyName];
//     copyOfAnil[propertyName] = propertyValue;
// }
const copyOfAnil = { ...anil }
console.log(copyOfAnil)

const utitlityFirst = {
    sayHi: function () { console.log('Hi') }
}
const utitlitySecond = {
    sayBye: function () { console.log('Bye') }
}

const combined = { ...utitlityFirst, ...utitlitySecond };
//console.log(combined)
combined.sayHi();
combined.sayBye();

const add = (a, b, c) => (a + b + c);
const multiply = (a, b) => (a * b);

//rest parameter (...args)
const calculate = (calculationOp, ...args) => calculationOp(args[0], args[1], args[2]);
console.log(calculate(add, 10, 20, 30)) //---> args=[10,20,30]
console.log(calculate(multiply, 10, 20)) //--->args=[10,20]

const addFn = (a, b = 0, c = 0) => {
    console.log(a, b, c)
    return (a + b + c);
};
const result = addFn(100)
console.log(result)


let design = ` 
    <table style='border: 2px solid red' cellspacing='2' cellpadding='2'>
        <tr>
            <td>
                Joydip
            </td>
            <td>
                IT Consultant
            </td>
        </tr>
        <tr>
            <td>
                Anil
            </td>
            <td>
                HR
            </td>
        </tr>
    </table>
`

document.getElementById('app').innerHTML = design;

