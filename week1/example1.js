console.log('Hello world')

for (let i = 0; i < 5; i++) {
    console.log('HEY')
}

console.log('Hello World!')

///////////////////////////////////////VARIABLES//////////////////////////////////////////
// value stored in memory address
// let vs const ES6      (var)->ES5 EcmaScript2015
let a = 1   // Number
let name1 = 'Akbar'; 'Murod'; '4' // String
let isCoder = true  // Boolean (true, false)
let isRich = undefined
let empty = null

console.log('My name is ', name1)

name1 = 'Sarvar'

console.log('Now name is ', name1)

const name2 = 'Rasul'

console.log('name2 is ', name2)

// name2 = 'Zafar'

// console.log('name2 is now ', name2)

//Falsy values: 0, "", null, undefined, false

if (a < -10) { // condition 
    console.log('Yess he is coder!')
} else {
    console.log('No, he is not')
}

if (NaN) {
    console.log('it is true')
} else {
    console.log('it is false')
}

console.log(NaN)

const age = 14

if (age >= 18 && age < 40) {
    console.log('you can enter')
} else if (age > 40) {
    console.log('you are too old for club')
} else {
    console.log('you need to grow up')
}

/////ARRAY/////
let arr = [1, 3, 5, 8, 12, 89, 143, 67] // array of numbers
let names = ['Akbar', 'Murod', 'Rasul', 'Zafar'] // array of strings

// FOR LOOP
for (let i = 0; i <= 5; i++) { //initializer; condition; incremental
    console.log('Salom')
    console.log(i)
}

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]) //subscript  arr[0] arr[6]
}

for (let x = 0; x < names.length; x++) {
    console.log('His name is ', names[x])
}