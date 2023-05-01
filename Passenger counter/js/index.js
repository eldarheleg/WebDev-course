// document.getElementById("count").innerText = 5

// let first = 5

// let count = first

// console.log(count)

//1
//console.log(myAge) cannot access

// let myAge = 23

// myAge++

// console.log(myAge)

let countEl = document.getElementById("count-id")

//console.log(countEl)

let count = 0

function increment() {
    count = count + 1 
    countEl.innerText = count
}

let countS = 0
let string = document.getElementById("string")

//console.log(string)

function save() {
    countS = countEl.textContent
    string.textContent = string.textContent + " " + countS + " - "
    countEl.innerText = 0
    count = 0
}

