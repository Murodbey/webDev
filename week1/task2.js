///// Create an array of 10 numbers (0 - 100)
//Iterate through them and output the ones that are greater than 35 and less then 75
let arr = [13, 98, 67, 41, 32, 78, 56, 99, 41, 50]
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 35 && arr[i] < 75)
        console.log(arr[i], 'is greater than 35 and less than 75')
}