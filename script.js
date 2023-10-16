let screenValue = ''
let currentValue = null
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

function executeSum() {
    lastOp = 1
    if (currentValue == null) {
        currentValue = parseInt(screenValue)
    }
    clearScreen()
}

function executeSub() {
    lastOp = 2
    if (currentValue == null) {
        currentValue = parseInt(screenValue)
    }
    clearScreen()
}

function executeMult() {
    lastOp = 3
    if (currentValue == null) {
        currentValue = parseInt(screenValue)
    }
    clearScreen()
}

function executeDiv() {
    lastOp = 4
    if (currentValue == null) {
        currentValue = parseInt(screenValue)
    }
    clearScreen()
}

function executeResult () {
    if (lastOp === 1) {
        currentValue += parseInt(screenValue)
        showResult(currentValue)
    } else if (lastOp === 2) {
        currentValue -= parseInt(screenValue)
        showResult(currentValue)
    } else if (lastOp === 3) {
        currentValue *= parseInt(screenValue)
        showResult()
    } else if (lastOp === 4) {
        currentValue /= parseInt(screenValue)
        showResult(currentValue)
    }
}