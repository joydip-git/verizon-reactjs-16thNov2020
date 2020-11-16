//2. Object.create method

var joydipCreate = Object.create({});
joydipCreate.name = 'joydip';
joydipCreate.profession = 'IT Consultant';
joydipCreate.location = 'Bangalore'
joydipCreate.print = function () {
    return this.name + ', ' + this.profession + ", " + this.location;
}

for (var propertyName in joydipCreate) {
    var propertyValue = joydipCreate[propertyName];
    console.log(propertyName + ": " + propertyValue)
}

console.log(joydipCreate.print())

// var copy = Object.create(joydipCreate);
// console.log(copy === joydipCreate)
// console.log(copy)
// console.log(joydipCreate)
console.log(joydipCreate)
