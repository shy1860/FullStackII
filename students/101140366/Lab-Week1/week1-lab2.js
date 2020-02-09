// Lab 2
// Exercise 1
names = ['Randy Savage','Thong Nguyen'];
greetingWord = 'Hello';
const greeter = (names, greetingWord) => {
    names.forEach(name => console.log(`${greetingWord} ${name}`));
}
greeter(names,greetingWord);


// Exercise 2
// Using Destructuring assignment syntax and the spread operator 
const capFirstLetter = (letter) => {
    const [firstLetter, ...rest] = letter;
    return firstLetter.toUpperCase() + rest.join('').toLowerCase();
}
console.log(capFirstLetter('foobar'));



//Exercise 3
// Using map to capilize method in Exercise 2
const colors = ['red','blue','green']
const capitalizedColors = (colors) => {
    return colors.map(color => capFirstLetter(color))
}
console.log(capitalizedColors(colors))

// Exercise 4 
// Using filter
const lessThan20 = (nums) => nums.filter(num => num < 20)
const values = [1,60,34,30,20,5]
console.log(lessThan20(values))

// Exercise 5
const array = [1,2,3,4]
const calculateSum = (array) => array.reduce((a , b ) => a + b)
const calculateProduct = (array) => array.reduce((a,b) => a*b)
console.log(calculateSum(array));
console.log(calculateProduct(array));


// Exercise 6
class Car{
    constructor(carName,year){
        this.carName = carName;
        this.year = year;
    
    }
    details(){
        return `Model: ${this.carName} Engine ${this.year} `;
    }
}

class Sedan extends Car{
    constructor(carName,year,price){
        super(carName,year);
        this.price = price;
    }
    info() {
        return `${this.carName} has the price of ${this.price}`;
    }
}

const car2 = new Car('Pontiac Firebird', 1976)
console.log(car2.details())
const sedan = new Sedan('Volvo SD',2018,30000)
console.log(sedan.info());