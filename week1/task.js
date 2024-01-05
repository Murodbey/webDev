//Iterate through an array of numbers and output 'it is greater' or 'it is less' for each number compared to 14
// the array contains the following [3,9,14,28,2,32,89,24]

let arr = [3, 9, 14, 28, 2, 32, 89, 24]
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 14) {
        console.log(arr[i], 'is greater than 14')
    } else if (arr[i] === 14) {
        console.log(arr[i], 'is equal to 14')
    } else {
        console.log(arr[i], 'is less than 14')
    }
}


//////let arr = [3,9,14,28,2,32,89,24] --------- u cant define arr two times
console.log(5 / 2)
console.log(5 % 2) //Modulus (Remainder)

console.log(7 % 2)

console.log('///////////////////task2/////////////////')
/////find out if numbers within arr are odd or even//////////////
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2) /* === 0) */ {
        console.log(arr[i], 'is odd number')
    } else {
        console.log(arr[i], 'is even number')
    }
}