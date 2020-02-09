// NATHALIA SILVA - LAB EXERCISES 1 - ES6

// EXERCISE 1 - SOLUTIONS

console.log('\nExercise 1 :');

const gretter = (myArray, counter = 2) => {
    let greetText = 'Hello ';
    for (var name of myArray) {

        console.log(`${greetText} ${name} `);

      }

}

gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);


// EXERCISE 2 - SOLUTIONS


console.log('\nExercise 2 :');

const capitalize = ([first, ...rest]) =>
  first.toUpperCase() +  rest.join('').toLowerCase();

console.log(capitalize('fooBar')); 
console.log(capitalize('nodeJs')); 


// EXERCISE 3 - SOLUTIONS


console.log('\nExercise 3 :');

const colors = ['red', 'green', 'blue']

const capitalizedColors = colors.map(capitalize)


console.log(capitalizedColors)



// EXERCISE 4 - SOLUTIONS


console.log('\nExercise 4 :');

var values = [1, 60, 34, 30, 20, 5]

function lessThan20(val) { return val < 20 }

var filterLessThan20 = values.filter(lessThan20)

console.log(filterLessThan20)



// EXERCISE 5 - SOLUTIONS

var array = [1, 2, 3, 4]

var calculateSum = array.reduce((acc, value) => acc + value, 0)
var calculateProduct = array.reduce((acc, value) => acc * value, 1)

console.log('\nExercise 5 :');
console.log(calculateSum);
console.log(calculateProduct);


// EXERCISE 6 - SOLUTIONS

console.log('\nExercise 6 :');

class Car {

    constructor(model, year) {
      this.year = year;
      this.model = model;
    }
  
    details() {
      return `Model: ${this.model}, Engine ${this.year}`;
    }
  }
  
//then

  class Sedan extends Car {
    constructor(model, year, balance) {
        //inheritance 
      super(model, year);
        //assigning values
      this.balance = balance;
    }
  
    info() { return `${this.model} has a balance of $${this.balance}.00`;}
  }


  // Class 
  const car2 = new Car('Pontiac Firebird', 1976);
  console.log(car2.details());
  // Subclass - extends Car super class
  const sedan = new Sedan('Volvo SD', 2018, 30000);
  console.log(sedan.info());
