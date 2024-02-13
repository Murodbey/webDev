// a = 7
// b = 3
//return = 10
const qoshish = (a, b) => {
    return a + b
}

console.log(qoshish(3, 7))

const jamlik = [1, 3, 5, 7]

function simpleArraySum(ar) {
    // Write your code here
    let total = 0
    ar.forEach((nomer) => {
        total = total + nomer
    })
    return total
}

console.log(simpleArraySum(jamlik))