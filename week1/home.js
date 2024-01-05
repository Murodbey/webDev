function clickedFunction() {
    alert("can i get hoooyeah???")
}

let phones = ['iphone', 'samsung', 'nokia', 'motorola']

const phonelist = document.createElement('ul')
for (let i = 0; i < phones.length; i++) {
    let listEl = document.createElement('li')
    listEl.textContent = phones[i]
    phonelist.appendChild(listEl)
}

document.getElementById('phones').appendChild(phonelist)