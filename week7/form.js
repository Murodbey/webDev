const myForm = document.getElementById('first-form')

console.log(myForm)
// console.log(document.querySelectorAll('#first-form'))
console.log(myForm.elements)
const nameInput = myForm.elements['Name']

const emailInput = myForm.elements['Pochta']
const passwordInput = myForm.elements['Password']

console.log(nameInput)
console.log(emailInput)

const btn = document.getElementById('btn')

const errorP = document.getElementById('error')
errorP.style.color = 'red'
errorP.textContent = 'Your email is invalid broo!'
errorP.style.display = 'none'
btn.addEventListener('click', () => {
    console.log(nameInput.value)
    if (emailInput.value.indexOf('@') > -1) {
        errorP.style.display = 'none'
        console.log(emailInput.value)
    } else {
        errorP.style.display = 'block'
        emailInput.style.border = 'red solid 2px'
        console.log(`Your email is invalid broo! Don't make your email look like yourself`)
    }
})

const welcomeMe = () => {

    console.log(`Welcome to our awesome website, Mr.${nameInput.value} with the email of ${emailInput.value} with the password of ${passwordInput.value}
    You thought we don't know your password hahahahaha`)
}

const searchInput = document.getElementById('searchInput')

// searchInput.addEventListener('change', (e) => {
//     console.log(e.target.value)
// })

const outputSearch = () => {
    console.log(searchInput.value)
}