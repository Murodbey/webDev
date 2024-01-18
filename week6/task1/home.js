// Name | Language | Type | Release Date
// Create a table with the columns above and fill that table with the response data from the API above.
// 1) create separate arrays for each column (Name, language, type and release date)
// 2) after populating separate arrays with data from api, we need to create the table rows iterating through all arrays
//https://api.tvmaze.com/search/shows?q=police

//Create three buttons with above names
// and each should design table differently when clicked on

const api = 'https://api.tvmaze.com/search/shows?q=police'
const yhttp = new XMLHttpRequest()

yhttp.open('GET', api); yhttp.send()

yhttp.onload = function () {
    console.log(this.status)
    console.log(this.response)

    let rawResponseArr = JSON.parse(this.response)
    console.log(rawResponseArr)

    const showEl = document.getElementById('shows')

    const showsTable = document.createElement('table')

    const showsTrHed = document.createElement('tr')


    const showsThName = document.createElement('th')
    const showsThLang = document.createElement('th')
    const showsThType = document.createElement('th')
    const showsThRel = document.createElement('th')


    showsThName.textContent = 'Name'
    showsThLang.textContent = 'Language'
    showsThType.textContent = 'Type'
    showsThRel.textContent = 'Release Date'

    showsTable.appendChild(showsTrHed)

    showsTrHed.appendChild(showsThName)
    showsTrHed.appendChild(showsThLang)
    showsTrHed.appendChild(showsThType)
    showsTrHed.appendChild(showsThRel)

    function clearTable() {
        const allRows = document.getElementsByTagName('tr')
        console.log(allRows)
        const arrRows = [...allRows]
        arrRows.forEach((item) => {
            item.remove()
        })
    }




    function fillTable(responseArray) {
        responseArray.forEach((item) => {
            console.log(item)
            const showsTdName = document.createElement('td')
            showsTdName.textContent = `${item.show.name}`
            const showsTdLang = document.createElement('td')
            showsTdLang.textContent = `${item.show.language}`
            const showsTdType = document.createElement('td')
            showsTdType.textContent = `${item.show.type}`
            const showsTdRel = document.createElement('td')
            showsTdRel.textContent = `${item.show.premiered}`


            const showsTrData = document.createElement('tr')
            showsTable.appendChild(showsTrData)
            showsTrData.appendChild(showsTdName)
            showsTrData.appendChild(showsTdLang)
            showsTrData.appendChild(showsTdType)
            showsTrData.appendChild(showsTdRel)
        })
    }

    fillTable(rawResponseArr)

    const primaryButt = document.querySelector('#primary')
    const secondButt = document.querySelector('#secondary')
    const thirdButt = document.querySelector('#tertiary')
    const clearButt = document.querySelector('#noThemes')
    const sortButt = document.querySelector('#sortByName')
    console.log(primaryButt)
    console.log(secondButt)
    console.log(thirdButt)
    console.log(clearButt)
    console.log(sortButt)

    const primOnClick = () => {
        showsTable.classList.remove("tertiaryTable", "secondaryTable")
        showsTable.classList.add("primaryTable")
        clearButt.style.display = 'block';
    }

    const secondOnClick = () => {
        showsTable.classList.remove("primaryTable", "tertiaryTable")
        showsTable.classList.add("secondaryTable")
        clearButt.style.display = 'block';
    }

    const tertiaryOnClick = () => {
        showsTable.classList.remove("primaryTable", "secondaryTable")
        showsTable.classList.add("tertiaryTable")
        clearButt.style.display = 'block';
    }

    const noThemeOnClick = () => {
        showsTable.classList.remove("primaryTable", "secondaryTable", "tertiaryTable")
        clearButt.style.display = 'none';
    }

    const sortByNameOnClick = () => {
        const sortedArr = rawResponseArr.sort((show1, show2) => (show1.show.name.localeCompare(show2.show.name)))

        fillTable(sortedArr)
    }


    primaryButt.addEventListener('click', () => console.log('test'))
    primaryButt.addEventListener('click', primOnClick)
    secondButt.addEventListener('click', secondOnClick)
    thirdButt.addEventListener('click', tertiaryOnClick)
    clearButt.addEventListener('click', noThemeOnClick)
    sortButt.addEventListener('click', sortByNameOnClick)

    clearTable()


    showEl.appendChild(showsTable)

}

