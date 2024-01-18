const arr = [123, 14234, 234, 234, 23, 42, 34, 23, 42, 3]
const ABC = ['Murod', 'Hojiakbar', 'Rasul', 'Sharvar']
// arr.sort((a, b) => a - b)
arr.sort((a, b) => b - a) // positive = change places, negative = dont change places, 0
ABC.sort()
console.log(arr)
console.log(ABC)
firstButton.addEventListener('click', changeColorOnClick) // accepts callback function
secondButton.addEventListener('click', secOnClick)
// 0, 1, 2, 3,  4,  5,6, 7
const arr1 = [9, 12, 3, 1432, 23, 145, 2, 33] // forEach vs map vs filter vs reduce
arr1.forEach((son) => { // iterates through array and performs operations
    console.log(son)
})

const arr2 = arr1.map((son) => { // performs operation on each and returns new array
    return son + 5
})
console.log(arr1)
console.log(arr2)

const arr4 = arr1.filter((son) => { // performs operation on the satisfying elements and returns new array
    return son < 20
})

console.log(arr1)
console.log(arr4)

const val1 = arr1.reduce((toplam, son) => { // performs operation on each but accumulates
    return toplam + son      // toplam = 0 // toplam + son1 // toplam + son2
}, 1000) // initial value 1000 + 9 + 12 + . . . . .  + 33 = 

console.log(val1)

arr1.push(55) // inserts new element at the end

console.log(arr1)

arr1.pop() // removes one element at the end 

console.log(arr1)

console.log(arr1[4])

arr1.unshift(20) //inserts new element at the beginning

console.log(arr1)
arr1.shift() //removes one element at the beginning

console.log(arr1)