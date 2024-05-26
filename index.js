let saveEl = document.getElementById("save-el")
let repeatCountEl = document.getElementById("repeat-count-el")
let rowCountEl = document.getElementById("row-count-el")
let repeatCount = 0
let rowCount = 0

function incrementRepeat() {
    repeatCount += 1
    repeatCountEl.textContent = repeatCount
}

function incrementRow() {
    rowCount += 1
    rowCountEl.textContent = rowCount
}

function save() {
    let countStr = "Rows: " + rowCount + " - "
    saveEl.textContent += countStr
    rowCountEl.textContent = 0
    rowCount = 0
}
