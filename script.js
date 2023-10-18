let starterValue = null
let secondValue = null
let displayValue = ''
let operation = null
let executed = false

function updateDisplay(value) {
    if (displayValue.length < 14) {
        const display = document.getElementById('screen')
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

    const sumButton = document.getElementById('sum')
    const subButton = document.getElementById('subtract')
    const mulButton = document.getElementById('multiply')
    const divButton = document.getElementById('divide')

    sumButton.style.backgroundColor = '#a0a0a0'
    subButton.style.backgroundColor = '#a0a0a0'
    mulButton.style.backgroundColor = '#a0a0a0'
    divButton.style.backgroundColor = '#a0a0a0'
}

function executeSum() {
    const sumButton = document.getElementById('sum')
    operation = 1
    sumButton.style.backgroundColor = 'red'

    if (starterValue == null) {
        updateFirstValue(displayValue)
        clearScreen()
    } else {
        if (displayValue != '') {
            if (executed == false) {
                executeResult()
            } else {
                executed = false
            }
            clearScreen()
        }
    }
    
}

function executeSub() {
    const subButton = document.getElementById('subtract')
    operation = 2
    subButton.style.backgroundColor = 'red'

    if (starterValue == null) {
        updateFirstValue(displayValue)
        clearScreen()
    } else {
        if (displayValue != '') {
            if (executed == false) {
                executeResult()
            } else {
                executed = false
            }
            clearScreen()
        }
    }
    
}

function executeMult() {
    const multButton = document.getElementById('multiply')
    operation = 3
    multButton.style.backgroundColor = 'red'

    if (starterValue == null) {
        updateFirstValue(displayValue)
        clearScreen()
    } else {
        if (displayValue != '') {
            if (executed == false) {
                executeResult()
            } else {
                executed = false
            }
            clearScreen()
        }
    }
    
}

function executeDiv() {
    const divButton = document.getElementById('divide')
    operation = 4
    divButton.style.backgroundColor = 'red'

    if (starterValue == null) {
        updateFirstValue(displayValue)
        clearScreen()
    } else {
        if (displayValue != '') {
            if (executed == false) {
                executeResult()
            } else {
                executed = false
            }
            clearScreen()
        }
    }
    
}

function executeResult() {
    const sumButton = document.getElementById('sum')
    const subButton = document.getElementById('subtract')
    const mulButton = document.getElementById('multiply')
    const divButton = document.getElementById('divide')
    
    if (operation == 1) {
        sumButton.style.backgroundColor = '#a0a0a0'
        secondValue = parseInt(displayValue)
        starterValue += secondValue
        secondValue = null
        clearScreen()
        updateDisplay(starterValue)
        executed = true
    }
    if (operation == 2) {
        subButton.style.backgroundColor = '#a0a0a0'
        secondValue = parseInt(displayValue)
        starterValue -= secondValue
        secondValue = null
        clearScreen()
        updateDisplay(starterValue)
        executed = true
    }
    if (operation == 3) {
        mulButton.style.backgroundColor = '#a0a0a0'
        secondValue = parseInt(displayValue)
        starterValue *= secondValue
        secondValue = null
        clearScreen()
        updateDisplay(starterValue)
        executed = true
    }
    if (operation == 4) {
        divButton.style.backgroundColor = '#a0a0a0'
        secondValue = parseInt(displayValue)
        starterValue /= secondValue
        secondValue = null
        clearScreen()
        updateDisplay(starterValue)
        executed = true
    }
}