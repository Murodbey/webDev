const firstButton = document.querySelector('.first-btn')
console.log(firstButton)

const changeColorOnClick = () => { // changeColorOnClick is function expression. The variable changeColorOnClick is assigned to arrow function
    const someBox = document.querySelector('#somebox')
    // someBox.style.backgroundColor = 'red'
    const red = Math.random() * 100 * 2.55
    const green = Math.random() * 100 * 2.55
    const blue = Math.random() * 100 * 2.55
    console.log(`rgb(${Math.round(red)},${Math.round(green)},${Math.round(blue)})`)
    someBox.style.backgroundColor = `rgb(${Math.round(red)},${Math.round(green)},${Math.round(blue)})`
}

// setInterval(changeColorOnClick, 500) calls that function every half second

const arr = [123, 14234, 234, 234, 23, 42, 34, 23, 42, 3]
const ABC = ['Murod', 'Hojiakbar', 'Rasul', 'Sharvar']
// arr.sort((a, b) => a - b)
arr.sort((a, b) => b - a) // positive = change places, negative = dont change places, 0
ABC.sort()
console.log(arr)
console.log(ABC)
console.log(ABC.reverse())
firstButton.addEventListener('click', changeColorOnClick) // accepts callback function



// const secOnClick = () => {
//     const disabledValue = firstButton.getAttribute('disabled')
//     if(disabledValue === 'true') {
//         firstButton.setAttribute('disabled', false)
//         firstButton.classList.remove('first-btn-disabled')
//         firstButton.classList.add('first-btn')
//     } else {
//         firstButton.setAttribute('disabled', true)
//         firstButton.classList.add('first-btn-disabled')
//         firstButton.classList.remove('first-btn')
//     }
// }