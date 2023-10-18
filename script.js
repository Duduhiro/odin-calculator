let firstValue = null
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
    firstValue = parseInt(value)
}

function clearScreen() {
    displayValue = ''
    updateDisplay('')
}

function resetCalculator() {
    clearScreen()
    firstValue = null
    secondValue = null
    operation = null
}

function executeSum() {
    const sumButton = document.querySelector('#sum')
    operation = 1

    if (firstValue === null) {
        updateFirstValue(displayValue)
    }
    clearScreen()
    if (sum_executed == false) {
        sumButton.addEventListener('click', () => {
            executeResult()
            
        })
    } else {
        executeResult()
    }
    
}

function executeResult() {
    if (operation == 1) {
        secondValue = parseInt(displayValue)
        firstValue += secondValue
        clearScreen()
        updateDisplay(firstValue)
    }
}