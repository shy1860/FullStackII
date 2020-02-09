//1
const greeter =  (arr) => {
    let greetText = 'Hello';

    for (let name of arr) {
        console.log(`${greetText} ${name}`);
    }
}
console.log('#1---');
greeter(['Lilian','Sir','Aldrin','Francis'])


//2
const capitalize = ([first, ...rest]) => {
    // //use function to map to lowercase all letters
    // const word = rest.map(x => x.toLowerCase());
    // word.unshift(first.toUpperCase())

    // console.log(word.join(''));

    return first.toUpperCase() + rest.join('').toLowerCase();
}
console.log('#2---');
console.log(capitalize('hELLO'));


//3
const capAll = (arr) => {
    const final = arr.map(x => capitalize(x));
    // console.log(final);
    return final;
}
console.log('#3---');
let colors = ['red', 'gREEN', 'bLuE'];
console.log(capAll(colors));


//4
const filterUnder20 = (arr) => {
    const func = (x) => {
        return x < 20;
    }

    return arr.filter(func);
    
    // shorter version:
    // return arr.filter(x => x<20);
}
console.log('#4---');
let values = [1,60,34,30,20,5];
console.log(filterUnder20(values));


//5
const calculateSum = (arr) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return arr.reduce(reducer)
}
const calculateProduct = (arr) => {
    const reducer = (accumulator, currentValue) => accumulator * currentValue;
    return arr.reduce(reducer)
}
console.log('#5---');
let numbers = [1,2,3,4];
console.log(calculateSum(numbers));
console.log(calculateProduct(numbers));


//6
class Car {
    constructor(model, year){
        this.model = model;
        this.year = year;
    }

    details(){
        return `Model: ${this.model} | Engine: ${this.year}`;
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model,year);
        this.balance = balance;
    }

    info(){
        return `${this.model} has a balance of $${this.balance}.00`;
    }
}
console.log('#6---');
const car2 = new Car('Pontiac Firebird',1976);
console.log(car2.details());
const sedan = new Sedan('Volvo SD',2018,30000);
console.log(sedan.details());
console.log(sedan.info());