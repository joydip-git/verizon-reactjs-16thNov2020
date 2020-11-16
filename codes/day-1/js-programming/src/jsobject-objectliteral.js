//1. Objevt literal syntax
var joydipObject = {
    //value properties
    name: 'Joydip',
    profession: 'IT Consultant',
    location: 'Banaglore',
    //functional property
    print: function () {
        return this.name + ', ' + this.profession + ", " + this.location;
    }
}

// console.log(joydipObject.name)
// var info = joydipObject.print()
// console.log(info)

for (var propertyName in joydipObject) {
    var propertyValue = joydipObject[propertyName];
    console.log(propertyName + ": " + propertyValue)
}

