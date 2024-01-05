// Create a page, where API call is made. and Build cards for each twshow and style them
// https://api.tvmaze.com/search/shows?q=golden%20girls
// 1) Create HTML, CSS and Javascript file
// 2) make api call and console.log the response
// 3)from API response get data like image, premiered, language, name, type, summary
// 4) create a card that will be used multiple times
// 5) use data to fill that card
// 6) style that card

const url = 'https://api.tvmaze.com/search/shows?q=harry%20potter'
const xhttp = new XMLHttpRequest();

xhttp.open("GET", url);
xhttp.send();

xhttp.onload = function () {
    console.log('Status of this Api Call', this.status)
    console.log(this.response)

    let responseArr = JSON.parse(this.response)
    console.log(responseArr)

    const showEl = document.getElementById('shows')

    responseArr.forEach((show) => {
        const showscard = document.createElement('div')
        const column1 = document.createElement('div')
        const column2 = document.createElement('div')

        const h1El = document.createElement('h1')
        h1El.textContent = `${show.show.name}`
        const releaseEl = document.createElement('h2')
        releaseEl.textContent = `Date of Release: ${show.show.premiered}`
        const languageEl = document.createElement('h2')
        languageEl.textContent = `Language: ${show.show.language}`
        const typeEl = document.createElement('h2')
        typeEl.textContent = `Movie Type: ${show.show.type}`
        const imgEl = document.createElement("IMG")
        imgEl.setAttribute("src", show.show.image.medium)
        const divEl = document.createElement('div')
        divEl.innerHTML = show.show.summary

        divEl.classList.add('paraEl')
        showscard.classList.add('showscard')
        column2.classList.add('column2')


        column1.appendChild(imgEl)
        column2.appendChild(h1El)
        column2.appendChild(releaseEl)
        column2.appendChild(languageEl)
        column2.appendChild(typeEl)
        column2.appendChild(divEl)

        showscard.appendChild(column1)
        showscard.appendChild(column2)

        showEl.appendChild(showscard)

        // showEl.appendChild(h1El)
        // showEl.appendChild(h2El)
        // showEl.appendChild(imgEl)
        // showEl.appendChild(divEl)
    })
}

