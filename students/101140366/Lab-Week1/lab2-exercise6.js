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