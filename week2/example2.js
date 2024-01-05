function func1() { // defined and implemented
    console.log('function has been called')
}

func1() //called (used)

function qoshish(x, y) {  //x and y are parameters or arguments
    return x + y   // return statement
}

console.log(qoshish(9, 81))

function ayirish(x, y) {
    return x - y
}

console.log(ayirish(100, 55))

function sliwkommukammal(x, y) {
    if (x > 0) {
        if (y < 100) {
            return ((x * 189 + y * 231) * 3) / 5
        }
        return -100
    }
    return -1
}

console.log(sliwkommukammal(1, 100))

function maqsadsiz(x) {
    if (x > 10) { return }

    return x * 9 ** 3
}

console.log(maqsadsiz(11))

function aqlliozicha(x, y) {
    console.log(x * y)
}

console.log(aqlliozicha(189, 23))

// arrow function

console.log('//////////////ARROW FUNCTION////////////')

const aqlliozicha2 = (x, y) => {
    return x ** y
}

console.log(aqlliozicha2(7, 13))

const func2 = (x, y) => x + y  // when there is no {}, no need for return keyword if single line code

console.log(func2(123, 31231))

const func3 = (x, y) => {
    console.log(`arguments are ${x} and ${y}`)
}
func3('Akbar', 'Murod')
console.log('///////////////////////////')

function display(result) {
    console.log(`After adding two numbers, we got ${result}`)
}

function toqmiYokiJuftmi(x) {
    if (x % 2 === 1) {
        console.log(`${x} toqakan`)
    } else {
        console.log(`${x} juftakan`)
    }
}

const addition = (x, y, func) => { // func is callback function
    const result = x + y
    func(result)
}

addition(9, 18, display)

const arr1 = [1, 5, 6, 12, 14]

arr1.forEach(display)

arr1.forEach(toqmiYokiJuftmi)
arr1.forEach((item) => console.log(item - 1))

// when function is used multiple times, it is made reusable and created once and used often
// when function is used rarely, it is created as callback function inline