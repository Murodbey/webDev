///Create a HTML page with some button. On which if clicked, shows some text below/////
// createElement
// appendChild
// getElementById
const clicked = () => {
    const carsDiv = document.getElementById('cars')
    console.log(carsDiv)

    const uList = document.createElement('ul')
    console.log(uList)



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

    cars.forEach((obj) => {
        const listLi = document.createElement('li')
        listLi.textContent = `A ${obj.color} ${obj.model} ${obj.make} make ${obj.year} on the street`
        uList.appendChild(listLi)
    })

    carsDiv.appendChild(uList)

}



// const namesDiv = document.getElementById('names')
// console.log(namesDiv)


// const names = [
//     {
//         name: 'Rasul',
//         year: 1989,
//         nationality: 'Uzbek'
//     },
//     {
//         name: 'John',
//         year: 1992,
//         nationality: 'Irish'
//     },
//     {
//         name: 'Volodya',
//         year: 1991,
//         nationality: 'Russian'
//     }
// ]