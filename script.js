let screenValue = ''

function showOnScreen (value) {
    if (screenValue.length < 14) {
        const screen = document.getElementById('screen')
        screen.innerHTML += value
        screenValue += value
    }
}

function clearScreen () {
    const screen = document.getElementById('screen')
    screen.innerHTML = ''
    screenValue = ''
}

function sum(a, b) {
    return (a + b)
}

function subtract(a, b) {
    return (a - b)
}

function multiply(a, b) {
    return (a * b)
}

function divide(a, b) {
    return (a / b)
}