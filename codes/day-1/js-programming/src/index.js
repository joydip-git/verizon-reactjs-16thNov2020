//this function is contextually bound to any object that you create based on the function call
function person(name, location, profession) {
    console.log(this)
    this.personName = name;
    this.personLocation = location;
    this.personProfession = profession;
    this.print = () => {
        return this.personName + ', ' + this.personProfession + ", " + this.personLocation;
    }
}
var joydipCtorFunc = new person('Joydip', 'bangalore', 'IT Consultant');
var sunilObj = new person('sunil', 'hyderabad', 'developer')
//console.log(joydipCtorFunc.print())

//this function is contextually bound to window object 
function printSalarySlip(salaryFnRef) {
    console.log(this)
    console.log(salaryFnRef());
}

//bind print function of joydipCtorFunc object to joydipCtorFunc object
//joydipCtorFunc.print = joydipCtorFunc.print.bind(joydipCtorFunc);
printSalarySlip(joydipCtorFunc.print);
printSalarySlip(sunilObj.print)

console.log(window) 
