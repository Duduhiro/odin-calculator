let screenValue = ''

let currentValue = 0

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
        currentValue = parseInt(screenValue)
    } else {
        currentValue += parseInt(screenValue)
        showResult(currentValue)
    }
}

function executeResult () {
    showResult(currentValue)
}