function employee(name, id, basic, da, hra) {
    this.name = name;
    this.id = id;
    this.basicPayment = basic;
    this.daPayment = da;
    this.hraPayment = hra;
}

employee.prototype.calculateSalary = function () {
    console.log(this)
    return this.basicPayment + this.daPayment + this.hraPayment;
}

function developer(name, id, basic, da, hra, incentive) {
    console.log(this)
    employee.call(this, name, id, basic, da, hra);
    this.incentivePayment = incentive;
    this.calculateSalary = function () {
        return this.__proto__.calculateSalary.apply(this) + this.incentivePayment;
    }
}
Object.setPrototypeOf(developer.prototype, employee.prototype);

function hr(name, id, basic, da, hra, gratuity) {
    console.log(this)
    employee.call(this, name, id, basic, da, hra)
    this.gratuityPayment = gratuity;
    this.calculateSalary = function () {
        return this.__proto__.calculateSalary.apply(this) + this.gratuityPayment;
    }
}
Object.setPrototypeOf(hr.prototype, employee.prototype);


var anilRef = new developer('anil', 1, 1000, 2000, 3000, 4000);
//anilRef = {__proto__:null}
//anilRef = {__proto__: developer.prototype}

//anilRef.__proto__ = employee.prototype;
// {__proto__: employee.prototype}


var sunilRef = new hr('sunil', 2, 2000, 3000, 4000, 5000);

// console.log(anilRef.__proto__)
// console.log(sunilRef.__proto__)
//sunilRef = {__proto__:null}
//sunilRef = {__proto__: hr.prototype} --> 

//sunilRef.__proto__ = employee.prototype;
//{__proto__: employee.prototype}

var anilSalary = anilRef.calculateSalary();
var sunilSalary = sunilRef.calculateSalary();

console.log(anilSalary)
console.log(sunilSalary)