let number = ''
let expression = ''
let signalAdded = false
let currentSignal = ''

function addNumberToDisplay(num) {
    if (number.length < 13) {
        number += num
        updateNumber()
    }
}

function addSignalToDisplay(signal) {
    if (signalAdded == false) {
        expression = number + ' ' + signal + ' '
        signalAdded = true
        number = ''
        updateDisplay()
        updateNumber()
    } else {
        expression += number
        currentSignal = ' ' + signal + ' '
        getResult(1)
    }
}

function updateDisplay() {
    const displayExpression = document.getElementById('expression')
    displayExpression.innerHTML = expression
}

function updateNumber() {
    const displayNumber = document.getElementById('number')
    displayNumber.innerHTML = number
}

function resetCalculator() {
    number = ''
    expression = ''
    signalAdded = false
    updateNumber()
    updateDisplay()
    console.log('reseted')
}

function getResult(button) {
    
    if (button == 1) {
        const arr = expression.split(" ")
        const firstValue = parseInt(arr[0])
        const operator = arr[1]
        const secondValue = parseInt(arr[2])
        if (operator === '+') {
            expression = firstValue + secondValue + currentSignal
            number = ''
            updateNumber()
            updateDisplay()
        }
        if (operator === '-') {
            expression = firstValue - secondValue + currentSignal
            number = ''
            updateNumber()
            updateDisplay()
        }
        if (operator === '*') {
            expression = firstValue * secondValue + currentSignal
            number = ''
            updateNumber()
            updateDisplay()
        }
        if (operator === '/') {
            expression = firstValue / secondValue + currentSignal
            number = ''
            updateNumber()
            updateDisplay()
        }
    } else {
        expression += number
        const arr = expression.split(" ")
        const firstValue = parseInt(arr[0])
        const operator = arr[1]
        const secondValue = parseInt(arr[2])
        if (operator === '+') {
            number = firstValue + secondValue
            expression = ''
            updateNumber()
            updateDisplay()
            signalAdded = false
        }
        if (operator === '-') {
            number = firstValue - secondValue
            expression = ''
            updateNumber()
            updateDisplay()
            signalAdded = false
        }
        if (operator === '*') {
            number = firstValue * secondValue
            expression = ''
            updateNumber()
            updateDisplay()
            signalAdded = false
        }
        if (operator === '/') {
            number = firstValue / secondValue
            expression = ''
            updateNumber()
            updateDisplay()
            signalAdded = false
        }
    }
}