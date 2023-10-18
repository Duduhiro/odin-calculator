let starterValue = null
let secondValue = null
let displayValue = ''
let operation = null
let sum_executed = false

function updateDisplay(value) {
    if (displayValue.length < 14) {
        const display = document.querySelector('#screen')
        displayValue += value
        display.innerHTML = displayValue
    }   
}

function updateFirstValue(value) {
    starterValue = parseInt(value)
}

function clearScreen() {
    displayValue = ''
    updateDisplay('')
}

function resetCalculator() {
    clearScreen()
    starterValue = null
    secondValue = null
    operation = null
}

function executeSum() {
    const sumButton = document.querySelector('#sum')
    operation = 1

    if (starterValue == null) {
        updateFirstValue(displayValue)
    }
    clearScreen()
    if (secondValue != null) {
        executeResult()
    }
}

function executeResult() {
    if (operation == 1) {
        secondValue = parseInt(displayValue)
        starterValue += secondValue
        secondValue = null
        clearScreen()
        updateDisplay(starterValue)
    }
}