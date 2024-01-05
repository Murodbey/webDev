let name1 = 'Murod' // assignment

console.log('My name is ', name1)
console.log('My name is ' + name1)
console.log(`My name is ${name1}`) // literals
console.log('My name is '.concat(name1))

//////////////// COMPARISON OPERATORS /////////////////////  ==  ===   != !==

///////////////////
/* asdasdasdasdasdasd
asdasdasdasdasdasd
asdasdasasdasd
*/

// == vs === 
// == is about comparison of value (it is not recommended) type coercion (conversion)
// === is about comparison of value and data type ( it is recommended)
// != means NOT equal (not recommended)
// !== means NOT equal (recommended)

if (4 === '4') {
    console.log('they are equal')
} else {
    console.log('they are NOT equal')
}

if (4 !== 4) {
    console.log(true)
} else {
    console.log(false)
}

// > greater than  >= greater than or equal  < less than <= less than or equal to
if (4 <= 4) {
    console.log(true)
} else {
    console.log(false)
}

//Iterate through an array of numbers and output 'it is greater' or 'it is less' for each number compared to 14
// the array contains the following [3,9,14,28,2,32,89,24]

//////////LOGICAL OPERATORS//////////////////////
//    && AND
//    ||  OR
//     ! NOT
console.log('//////LOGICAL OPERATORS////////')
if (4 > 1 && 0 > 1) { // BOTH NEED TO SATISFY
    console.log(true)
} else {
    console.log(false)
}

if (4 > 1 || 0 > 1) { //AT LEAST ONE NEEDS TO SATISFY
    console.log(true)
} else {
    console.log(false)
}

if (!4 > 1) {  // NOT TRUE
    console.log(true)
} else {
    console.log(false)
}

console.log('/////////////////////// ARITHMETIC OPERATOR /////////////////////////')
/////////////////////// ARITHMETIC OPERATOR /////////////////////////
console.log(4 + 5)
// + , - , *, /, %  
console.log(2 ** 3)

console.log(5 / 2)
console.log(5 % 2) //Modulus (Remainder)

console.log(7 % 2)