const listPeople = () => {
    const mainDiv = document.getElementById('people')
    console.log(mainDiv)

    const uList = document.createElement('ul')
    console.log(uList)

    const people = [
        {
            name: 'Rasul',
            year: 1989,
            nationality: 'Uzbek'
        },
        {
            name: 'John',
            year: 1992,
            nationality: 'Irish'
        },
        {
            name: 'Volodya',
            year: 1991,
            nationality: 'Russian'
        }
    ]

    people.forEach((obj) => {
        const listEl = document.createElement('li')
        listEl.textContent = `A guy named ${obj.name}, born in ${obj.year} and he/she is ${obj.nationality}`
        uList.appendChild(listEl)
    })

    mainDiv.appendChild(uList)
}

const heading = document.getElementById('heading1') // grabs the element through its ID  //h1

const headingParent = heading.parentElement // div

const newElement = document.createElement('a')

headingParent.appendChild(newElement)

newElement.textContent = 'Go to W3School Website'

newElement.href = 'https://www.w3schools.com/'

const showHideNumber = () => {
    const el = document.getElementById('phonenumber')
    const butt = document.getElementById('buttonShow')
    if (el.style.display === 'block') {
        el.style.display = 'none'
        butt.textContent = 'Show Phone Number'
    }
    else {
        el.style.display = 'block'
        el.textContent = '872 - 336 - 9189'
        butt.textContent = 'Hide Phone Number'
    }

}