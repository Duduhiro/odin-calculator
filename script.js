let screenValue = ''
let currentValue = 0
let lastOp = 0 // 1- add | 2- sub | 3- mult | 4- div

function showOnScreen (value) {
    if (screenValue.length < 14) {
        const screen = document.getElementById('screen')
        screen.innerHTML += value
        screenValue += value
    }
}

function showResult (value) {
    const screen = document.getElementById('screen')
    screen.innerHTML = value
}

function clearScreenAndValue() {
    const screen = document.getElementById('screen')
    screen.innerHTML = ''
    screenValue = ''
    currentValue = 0
}

function clearScreen() {
    const screen = document.getElementById('screen')
    screen.innerHTML = ''
    screenValue = ''
}

function deleteNumber () {
    const screen = document.getElementById('screen')
    screenValue = screenValue.slice(0, -1)
    screen.innerHTML = screenValue
}

function executeSum() {
    if (currentValue === 0) {
        currentValue += parseInt(screenValue)
        clearScreen()
        lastOp = 1
    } else {
        showResult(currentValue + parseInt(screenValue))
    }
}

function executeResult () {
    if (lastOp === 1) {
        showResult(currentValue + parseInt(screenValue))
    } else if (lastOp === 2) {
        showResult(currentValue - parseInt(screenValue))
    } else if (lastOp === 3) {
        showResult(currentValue * parseInt(screenValue))
    } else if (lastOp === 4) {
        showResult(currentValue / parseInt(screenValue))
    }
}