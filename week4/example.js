//////// CLASSES /////////////
class Person {
    //definition
    constructor() {
        // builds the begging stage of the class
        (this.name = "Murod"), //property declaration and initialization
            (this.year = 1995); // property
    }

    printInfo() {
        // method
        console.log(
            `This person's name is ${this.name} and was born in ${this.year}`
        );
    }
}

const person1 = new Person(); // instance of Person Class // new is keyword for creating new instance of Class Person.
person1.printInfo();

class Person2 {
    constructor(name, year, occupation) {
        this.firstName = name,
            this.wasBorn = year,
            this.worksAs = occupation
    }

    printInfo() {
        console.log(`
            This person's name is ${this.firstName} and was born in ${this.wasBorn}. Currently he or she is working as ${this.worksAs}`
        );
    }
}

const person2 = new Person2('Rasul', 1989, 'truck driver')
person2.printInfo()
const person3 = new Person2('Falonchi', 1991, 'Pismadonchi')
person3.printInfo()

class Car {
    constructor(make, model, year, color, currentOwner) {
        this.make = make,
            this.model = model,
            this.year = year,
            this.color = color
        this.currentOwner = currentOwner
        this.rented = false
    }

    printCar() {
        console.log(`${this.year} ${this.make} ${this.model} ${this.color} owned by ${this.currentOwner}`)
    }

    changeOwner(newOwner) {
        const lastOwner = this.currentOwner
        this.currentOwner = newOwner

        console.log(`The ownership of this car has changed from ${lastOwner} to ${this.currentOwner} `)
    }

    changeIfRentedOrNot(flag) {
        if (flag) {
            this.rented = flag
            console.log("This car is already on rent or has just been given for rent")
        } else {
            this.rented = flag
            console.log("This is now available for rent in garage")
        }
    }
}

const car1 = new Car("Toyota", "Camry", 2014, "Black", "Adam Smith")
car1.printCar()
car1.changeOwner('Marshall Mathers')
car1.printCar()
car1.changeIfRentedOrNot(true)
car1.changeIfRentedOrNot()


/*Creat a class for ATM Machine. In this class you should have account with the value of some money. You can see current balance,
you can withdraw money and deposit money */