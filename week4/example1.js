const url = 'https://jsonplaceholder.typicode.com/posts' // API endpoint
// status code
// 200 - OK server running, proper request, proper response
// 400 - 404  Client side error - Unauthenticated (401-402), Improper parameters (403), Not Found (404)
// 500 - Server Not Running or Server Error

// RESTful /// CRUD = Create/ Retrieve/ Update/ Delete  =>  //POST/GET/UPDATE/
// JSON ///
// Promise // Asynchronous vs Synchronous //resolve (Success) vs reject (Failure)

//npm - NODE PACKAGE MANAGER
// npm init - To start package => generates package.json file
// npm i or npm install => installs libraries inside package.json
// npm i axios => installs axios library
// axios(url).then(res => console.log(res)).then(data => console.log(data))

const xhttp = new XMLHttpRequest(); //API request class instance

// Define a callback function
xhttp.onload = function () { // what to do when successful 
    // Here you can use the Data
    console.log('Status of this API Call:', this.status)
    console.log(this.response)
    // this.responseType = 'json'
    let responseArr = JSON.parse(this.response) //JSON.parse turns the response into JSON format

    console.log(responseArr)
    const postEl = document.getElementById('posts')

    responseArr.forEach((post) => {
        const h1El = document.createElement('h1')
        h1El.textContent = post.title
        const paraEl = document.createElement('p')
        paraEl.textContent = post.body
        postEl.appendChild(h1El)
        postEl.appendChild(paraEl)
    })

}
xhttp.onerror = function () { // what to do when failure 
    console.log('Error: ', this.statusText)
}
xhttp.open("GET", url); // creating the request
xhttp.send(); // sending request