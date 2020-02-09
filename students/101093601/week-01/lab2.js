//Ex 1

const greeter = (myArray) => {
    for (name of myArray) {
        console.log('Hello ' + name);
    }
}

greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'])
console.log('');

//Ex 2
const capitalize = (input) => {
    let [first, ...rest] = input;
    return first.toUpperCase() + rest.join('').toLowerCase();
}

console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));
console.log('');

//Ex 3
const colors = ['red', 'green', 'blue'];
const capitalizeColors = colors.map(capitalize);

console.log(capitalizeColors);
console.log('');

//Ex 4
var values = [1, 60, 34, 30, 20, 5];
const filterLessThan20 = values.filter(num => num < 20);

console.log(filterLessThan20);
console.log('');

//Ex 5
var array = [1, 2, 3, 4]
const calculateSum = array.reduce((a, b) => a + b);
const calculateProduct = array.reduce((a, b) => a * b);

console.log(calculateSum);
console.log(calculateProduct);
console.log('');

//Ex 6
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    details() {
        return 'Model: ' + this.model + ' ' + this.year
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }

    info() {
        return this.model + ' has a balance of $' + this.balance;
    }
}

const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());

const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());
