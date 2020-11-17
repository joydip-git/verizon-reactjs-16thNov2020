/*
function person(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
}
//__proto__: Oject.prototype
//constructor: person
//print: function(){}
person.prototype.print = function () {
    return `Name:${this.name}, Age:${this.age}, Location:${this.location}`
}


//__proto__: Oject.prototype --> person.prototype
//constructor: trainer
function trainer(name, age, location, subjectToTeach) {
    //person ctor func as base ctor func (super)
    person.call(this, name, age, location);
    this.subjectToTeach = subjectToTeach;
    this.print = function () {
        //person prototype is treated as base object for any current object
        return `${this.__proto__.print.apply(this)}, Subject:${this.subjectToTeach}`
    }
}
Object.setPrototypeOf(trainer.prototype, person.prototype);

//__proto__:trainer.prototype --> person.prototype
const joydipTrainer = new trainer('Joydip', 30, 'Bangalore', 'React JS');
//joydipTrainer.__proto__ = person.prototype;
joydipTrainer.print();
*/
//class --> function constructor
//super --> base ctor func/ base prototype object
class person {
    constructor(name, age, location) {
        this.name = name;
        this.age = age;
        this.location = location;
    }

    //this function will be placed inside the prototype object of person ctor function
    print() {
        return `Name:${this.name}, Age:${this.age}, Location:${this.location}`
    }
}
class trainer extends person {
    constructor(name, age, location, subjectToTeach) {
        super(name, age, location);
        this.subjectToTeach = subjectToTeach;
    }
    print = () => {
        return `${super.print()}, Subject:${this.subjectToTeach}`
    }
}
//Object.setPrototypeOf(trainer.prototype,person.prototype);
const joydipTrainer = new trainer('Joydip', 30, 'Bangalore', 'React JS');
//const info = joydipTrainer.print();
const printInfo = (infoFnRef) => {
    return infoFnRef()
}
const info = printInfo(joydipTrainer.print);
console.log(info)