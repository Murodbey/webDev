////////// Array /////////
let moshinalar = ['matiz', 'jiguli', 'kottabollanimoshinasi', 'nexia', 'mers', 'bmw']


for (let w = 0; w <= 5; w++) {
    console.log(moshinalar[w])
}

for (let w = 0; w < moshinalar.length; w++) {
    console.log(moshinalar[w])
}

const carmake = 'gentra'

if (carmake === 'gentra') {
    console.log('kotta bollani moshinasi')
} else if (carmake === 'matiz') {
    console.log('kichkina bollani moshinasi')
} else {
    console.log('peshkom')
}