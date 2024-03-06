// funtion definition - oddiy function bu
function chaqirish() {
    console.log('this function has been called')
}

// calling the function
chaqirish()

//  function expression - nomi variable korinishida yozilvoti
const qoshish = function (x, y) {
    return x + y
}
console.log(qoshish(3, 5))

// function expression with arrow function
const ayirish = (x, y) => {
    return x - y
}
console.log(ayirish(6, 4))

// function definition buyam
function kopaytirish(x, y) {
    return x * y
}
console.log(kopaytirish(3, 4))

// bu array of numbers
let arr = [3, 5, 7, 324, 65, 100, 23, 9, 42, 88]

// find length of this array
console.log(`this is the lenght of array = ${arr.length}`)

// output each number of array using for loop
// i buyoda index indicator //
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

console.log('for loops////////////////////////////////////////////')
// output numbers less than 100 using for loop
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 100)
        console.log(arr[i])
}

console.log('//////////////////////////////////////////////////////')
/// if else with for loop
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 10)
        console.log(`${arr[i]} is less than 10`)
    else if (arr[i] < 50)
        console.log(`${arr[i]} is less than 50`)
    else if (arr[i] < 100)
        console.log(`${arr[i]} is less than 100`)
    else if (arr[i] > 100)
        console.log(`${arr[i]} is greater than 100`)
}

console.log('//////////////////////////////////////////////////////')
/// output if greater than 30 and less than 70  using Logical AND &&
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 30 && arr[i] < 70)
        console.log(arr[i])
}

console.log('//////////////////////////////////////////////////////')
// output if less than 10 or greater than 90 using Logical OR ||
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 10 || arr[i] > 90)
        console.log(arr[i])
}

console.log('//////////////////////////////////////////////////////')
//// using for each add +20 to array numbers
arr.forEach((item) => { console.log(item + 20) })


