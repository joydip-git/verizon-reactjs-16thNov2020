//3. constructor function
function person(name, location, profession) {
    this.personName = name;
    this.personLocation = location;
    this.personProfession = profession;
    this.print = function () {
        return this.personName + ', ' + this.personProfession + ", " + this.personLocation;
    }
}

var joydipCtorFunc = new person('Joydip', 'bangalore', 'IT Consultant');

for (var propertyName in joydipCtorFunc) {
    var propertyValue = joydipCtorFunc[propertyName];
    console.log(propertyName + ": " + propertyValue)
}

console.log(joydipCtorFunc.print())