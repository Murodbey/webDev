// Name | Language | Type | Release Date
// Create a table with the columns above and fill that table with the response data from the API above.
// 1) create separate arrays for each column (Name, language, type and release date)
// 2) after populating separate arrays with data from api, we need to create the table rows iterating through all arrays
//https://api.tvmaze.com/search/shows?q=police

const api = 'https://api.tvmaze.com/search/shows?q=police'
const yhttp = new XMLHttpRequest()

yhttp.open('GET', api); yhttp.send()

yhttp.onload = function () {
    console.log(this.status)
    console.log(this.response)

    let responseArray = JSON.parse(this.response)
    console.log(responseArray)

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









    showEl.appendChild(showsTable)

}

