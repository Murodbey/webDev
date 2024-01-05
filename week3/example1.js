const age = 90

if (age < 18) {
    console.log('You are NOT allowed')
} else if (age > 60) {
    console.log('You are too old')
} else {
    console.log('You are accepted')
}

switch (age) {  //switch, case, break, default, break
    case age < 18:
        console.log('You are NOT allowed')
        break;
    case 90:
    case 60:
    case age > 60:
        console.log('You are too old')
    // break;
    default:
        console.log('You are accepted')
        break;
}

//// PASS BY VALUE vs PASS BY REFERENCE //////////////

///// PASS BY VALUE /////////////  Value
let a = 1

const changeA = (x) => {
    x = 4
    a = 2
}

console.log('before function call')
console.log(a)

changeA(a)
console.log('after function call')
console.log(a)


///// PASS BY REFERENCE ////////// (Objects, Array) //reference to memory address || Pointer ->  MemoryAddress: Value
const obj1 = {
    name: 'Murod',
    year: 1995
}

const changeObj = (obj) => {
    obj.name = 'Akbar'
}
console.log('before function call')
console.log(obj1)

changeObj(obj1)
console.log('after function call')
console.log(obj1)
