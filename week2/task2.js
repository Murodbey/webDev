////// Create an Array of car ojbects - car make, model, color and year /////////
//// and push one more object /////////
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

console.log(cars)
console.log('after push')

cars.push({
    make: 'Ford',
    model: 'Focus',
    color: 'Green',
    year: 2013
})

console.log(cars)