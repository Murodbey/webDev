// Create a form with First name, Last name, Email and Password
// It should have a button called 'Register'
// if one of the fields is empty it should display error
// if all good, it should display in green that 'You have successfully registered'
const nameForm = document.getElementById('nameForm')

console.log(nameForm)
console.log(nameForm.elements)

const fistNameEl = nameForm.elements['first_name']
const lastNameEl = nameForm.elements['last_name']
const pochtaEl = nameForm.elements['pochta']
const parolEl = nameForm.elements['parol']

console.log(fistNameEl)

// const tugmaEl = document.getElementById('tugma')
const xatoEl = document.getElementById('error')
const successEl = document.getElementById('success')
console.log(xatoEl)


xatoEl.style.color = 'red'
xatoEl.textContent = 'Each field needs to be filled'
xatoEl.style.display = 'none'
successEl.style.color = 'green'
successEl.textContent = 'You have successfully registered'
successEl.style.display = 'none'

const registerFunc = () => {
    successEl.style.display = 'none'
    if (fistNameEl.value === '') {
        xatoEl.style.display = 'block'
        fistNameEl.style.border = 'red solid 1px'
        xatoEl.textContent = 'First Name field should not be empty'
    } else if (lastNameEl.value === '') {
        xatoEl.style.display = 'block'
        lastNameEl.style.border = 'red solid 1px'
        xatoEl.textContent = 'Last Name field should not empty'
    } else if (parolEl.value === '') {
        xatoEl.style.display = 'block'
        parolEl.style.border = 'red solid 1px'
        xatoEl.textContent = 'Password field should not empty'
    } else if (pochtaEl.value === '') {
        xatoEl.style.display = 'block'
        pochtaEl.style.border = 'red solid 1px'
        xatoEl.textContent = 'Email field should not empty'
    } else if (pochtaEl.value.indexOf('@') === -1) {
        xatoEl.style.display = 'block'
        xatoEl.textContent = 'Your Email is invalid'
        pochtaEl.style.border = 'red solid 1px'
    }
    else {
        fistNameEl.style.border = 'black solid 1px'
        lastNameEl.style.border = 'black solid 1px'
        parolEl.style.border = 'black solid 1px'
        pochtaEl.style.border = 'black solid 1px'
        xatoEl.style.display = 'none'
        console.log(`Hello and welcome Mr ${fistNameEl.value} ${lastNameEl.value} with email ${pochtaEl.value} and password ${parolEl.value}`)
        fistNameEl.value = ''
        lastNameEl.value = ''
        parolEl.value = ''
        pochtaEl.value = ''
        successEl.style.display = 'block'
    }
}