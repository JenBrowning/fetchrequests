
//Using fetch to console.log my chosen category name and clues count.
fetch('http://jservice.io/api/category?id=2537')
.then(response => response.json())
.then(json => console.log(json))

//using fetch to console.log one clue from my chosen category


fetch('http://jservice.io/api/category?id=1')
.then(response => response.json())
.then(json => console.log(json))

//using fetch and async/await to display one clue from this category

const request = async () => {
const response = await fetch('http://jservice.io/api/category?id=10')
const json = await response.json()
console.log(json)
}
request()
