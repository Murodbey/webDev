// for loop/ it is good when you know the number of iterations. 
// while loop
// do while loop


///// WHILE LOOP /////
let i = 0;

while (i < 10) {  // execute this code while it satisfies the condition 
    console.log('hi, i am index number = ', i)
    i++;
}

let j = 0 // declaration and initialization

while (j < 10) {
    if (j % 2 === 1) {
        console.log(j)
    }
    j++;
}

//// DO WHILE LOOP /////

let x = 0;

do {
    console.log('index is ', x)
    x++;
} while (x < 0)

///////// array ///////////////////

let arr = [1, 19, 31, 81]

console.log(arr)
/// .push //////
arr.push(15)

console.log(arr)

let arr1 = []

let i = 0;

while (i < 20) {
    arr1.push(i ** 3)
    i++
}

console.log(arr1)

/////// .pop ///////////////

let x = 0

while (x < 20) {
    arr1.pop()
    x++
}

console.log(arr1)

arr.pop()

console.log(arr)

let result = arr.every((item) => item % 2 === 1)

console.log(result)

console.log(arr.includes(32))

console.log(arr[1])

let someWord = 'Whassupp'

console.log(someWord)
console.log(someWord[3])

const arr2 = [13, 98, 67, 41, 32, 78, 56, 99, 41, 50]

//Call back function () => { //some code}

arr2.forEach((item) => { console.log(item) }) // just iterates through array
console.log('<---------------->')
const someCallBackFunc = (el) => { console.log(el) } // Function expression

arr2.forEach(someCallBackFunc)

let newArray = arr2.map((item) => {
    return item * 2
})

console.log(newArray)

const newArr2 = arr2.filter((item) => {
    if (item > 35 && item < 75) {
        return item
    }
})

console.log(newArr2)

/////////////////////// OBJECTS ///////////////////////

const obj1 = {
    name: 'Murod', //property: value or key : value
    nationality: 'Uzbek',
    occupation: 'DevOps Engineer'
}

console.log(obj1)
console.log(obj1.nationality)
console.log(Hi my name is ${ obj1.name }, and I am ${ obj1.nationality }.I work as a ${ obj1.occupation })

console.log(obj1['name'])