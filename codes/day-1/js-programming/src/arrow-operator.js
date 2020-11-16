/*
function add(x, y) {
    return (x + y);
}
*/
// var add = (x, y) => {
//     return (x + y);
// }
// var add = (x, y) => (x + y);
// console.log(add(10, 20))

var subtract = function () {
    this.x = 10;
    console.log(this)
    //var ref = this;
    var inner = () => {
        this.x = 20;
        console.log(this)
        this.y = 5;
        //return (ref.x - this.y);
        return (this.x - this.y);
    }
    //inner = inner.bind(this);
    return inner;
}

var innerFn = new subtract();
var result = innerFn();
console.log(result)
