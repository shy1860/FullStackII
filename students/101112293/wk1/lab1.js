// Exercise 1
const greeter = (myArray, counter) =>{
    var greetText = 'Hello';
    for (const element of myArray) {
        console.log(greetText + " " + element);
    }
}
greeter(['Aldrin', 'Jacildo'], 3);

// Exercise 2
const capitalize = ([first, ...rest]) =>{
    return first.toUpperCase() + rest.join('').toLowerCase();
}
console.log(capitalize('aldKJHK'));

// Exercise 3
const colors = ['red', 'blue', 'green'];
const capitalizeColors = colors.map(x => capitalize(x));
console.log(capitalizeColors)

// Exercise 4
var values = [1, 60, 34, 30, 20, 5];
const filterLessThan20 = values.filter(x => x<20);
console.log(filterLessThan20);

// Exercise 5
var array = [1, 2, 3, 4];
const calculateSum = array.reduce((acc, cur) => acc + cur);
const calculateProduct = array.reduce((acc, cur) => acc * cur);
console.log(calculateSum);
console.log(calculateProduct);

// Exercise 6
class Car{
    constructor(model, year){
        this.model = model;
        this.year = year;
    }
    details(){
        return('Model: ' + this.model + ' Engine ' + this.year);
    }
}

class Sedan extends Car{
    constructor(model, year, balance){
        super(model, year);
        this.balance = balance;
    }
    details(){
        return(this.model + ' has a balance of ' + this.balance)
    }
}

const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details())

const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.details());