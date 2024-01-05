// function clickedFunction1() {
//     alert("You Clicked Primary Button!!!!")
// }
// function clickedFunction2() {
//     alert("You Clicked Secondary Button!!!!")
// }
// function clickedFunction3() {
//     alert("You Clicked Tertiary Button!!!!")
// }
const clickedFunction1P = document.getElementById('clickedFunction')
console.log(clickedFunction1P)

const clickedFunction1 = () => {
    const text1 = "You Clicked Primary Button!!!!"
    clickedFunction1P.textContent = ""
    clickedFunction1P.textContent = text1
}

const clickedFunction2 = () => {
    const text2 = document.createTextNode('"You Clicked Secondary Button!!!!"')
    clickedFunction1P.textContent = ""
    clickedFunction1P.appendChild(text2)
}

const clickedFunction3 = () => {
    const text3 = document.createTextNode('"You Clicked Tertiary Button!!!!"')
    clickedFunction1P.textContent = ""
    clickedFunction1P.appendChild(text3)
}