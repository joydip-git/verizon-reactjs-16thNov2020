class employee {
    constructor(name, id, basic, da, hra) {
        this.name = name;
        this.id = id;
        this.basicPayment = basic;
        this.daPayment = da;
        this.hraPayment = hra;
    }
    calculateSalary() {
        return this.basicPayment + this.daPayment + this.hraPayment;
    }
}
// console.log(employee.prototype)
class developer extends employee {
    constructor(name, id, basic, da, hra, incentive) {
        super(name, id, basic, da, hra);
        this.incentivePayment = incentive;
    }
    calculateSalary = () => {
        return super.calculateSalary() + this.incentivePayment;
    }
}

class hr extends employee {
    constructor(name, id, basic, da, hra, gratuity) {
        super(name, id, basic, da, hra)
        this.gratuityPayment = gratuity;
    }

    calculateSalary = () => {
        return super.calculateSalary() + this.gratuityPayment;
    }
}

var anilRef = new developer('anil', 1, 1000, 2000, 3000, 4000);
var sunilRef = new hr('sunil', 2, 2000, 3000, 4000, 5000);

var printSalary = (employeeSalaryFnRef) => {
    console.log(employeeSalaryFnRef())
}

printSalary(anilRef.calculateSalary)
printSalary(sunilRef.calculateSalary)

//Mix-in (mixin)
var common = {
    sayHi: function () {
        console.log('Hi...')
    }
}

Object.assign(employee.prototype, common);

anilRef.sayHi()
sunilRef.sayHi()
