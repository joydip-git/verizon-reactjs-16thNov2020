//3. constructor function

/**
 *function Object(){
     this....
 } 
 *
 */
//console.log(Object.prototype);

function person(name, location, profession) {
    this.personName = name;
    this.personLocation = location;
    this.personProfession = profession;
    this.print = function () {
        return this.personName + ', ' + this.personProfession + ", " + this.personLocation;
    }
}

var joydipCtorFunc = new person('Joydip', 'bangalore', 'IT Consultant');
//joydipCtorFunc = {__proto__ : null}
//joydipCtorFunc = {__proto__ : person.prototype}  ---> {__proto__ : Object.prototype, ctor: person}
//joydipCtorFunc = {
//    __proto__ : person.prototype, 
//    personName:'joydip'
//    personLocation:'bangalore',
//    personProfession:'IT Consultant',
//    print: function () {
//        return this.personName + ', ' + this.personProfession + ", " + this.personLocation;
//    }
//}



//a. 
// joydipCtorFunc.show = function () {
//     console.log('show method from joydipCtorFunc')
// }

//b.
// person.prototype.show = function () {
//     console.log('show method from person prototype')
// }

//c.
Object.prototype.show = function () {
    console.log('show method from Object prototype')
}
console.log(Object.prototype)
console.log(person.prototype)

for (var propertyName in joydipCtorFunc) {
    var propertyValue = joydipCtorFunc[propertyName];
    console.log(propertyName + ", is part of joydipCtorFunc?" + joydipCtorFunc.hasOwnProperty(propertyName) + ", value: " + propertyValue)
}

console.log(joydipCtorFunc.print())
joydipCtorFunc.show()

// console.log(person.prototype)
// console.log(joydipCtorFunc.__proto__)