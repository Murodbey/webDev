//////Create a function 'tothePowerOf' that accepts x and y
// x is number
// y is going to be the power
// it should return the result    

function tothePowerOf(x, y) {
    return x ** y
}

console.log(tothePowerOf(9, 3))


///////create a function that accepts a name. it should output hi and name////////
//////////template literal ///////////

function acceptname(name) {
    return `hi ${name}`
}

console.log(acceptname('Murod'))

////////////Create an arrow function that outputs 'I have a car of make and model and year'////////
//////create an object for that, multiple objects in side array/////////
////////you need to iterate through array and call the function for each object///

const cars = [
    {
        make: 'Toyota',
        model: 'Corolla',
        color: 'Black',
        year: 2017
    },
    {
        make: 'Chevrolet',
        model: 'Lacetti',
        color: 'Mokriyasfalt',
        year: 2020
    },
    {
        make: 'BMW',
        model: 'M4',
        color: 'Blue',
        year: 2023
    }
]

const carsfunc = (car) => {
    console.log(`I have a car of ${car.make} ${car.model} ${car.year}`)
}

cars.forEach(carsfunc)

cars.forEach((car) => {
    carsfunc(car)
}) 
