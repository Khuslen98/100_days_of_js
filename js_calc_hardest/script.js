class Calculator {
    constructor(input, output) {
        this.inputDisplay = input;
        this.outputDisplay = output;
        this.inputHistory = []
    }

    clearAllHistory() {
        this.inputHistory= []
        this.updateInputDisplay()
        this.updateOutputDisplay("0")
    }

    backspace(){}

    changePercentToDecimal(){}

    insertNumber(value){}

    insertOperation(value){}

    negateNumber(){}

    insertDecimalPoints(){}

    generateResult(){}

    getAllInputValues(){
        
    }

    updateInputDisplay(){
        this.inputDisplay.value = this.getAllInputValues().join(" ")
    }

}

const inputDisplay = document.querySelector("#history")
const outputDisplay = document.querySelector("#result")

const allClearButton = document.querySelector("[data-all-clear]")
const backspaceButton = document.querySelector("[data-backspace]")
const percentButton = document.querySelector("[data-percent]")
const operationButton = document.querySelector("[data-operator]")
const numberButton = document.querySelector("[data-number]")
const negationButton = document.querySelector("[data-negation]")
const decimalButton = document.querySelector("[data-decimal]")
const qualsButton = document.querySelector("[data-equals]")

const calculator = new Calculator(inputDisplay, outputDisplay)

allClearButton.addEventListener("click", ()=> {
    calculator.clearAllHistory()
})

backspaceButton.addEventListener("click", () => {
    calculator.backspace()
})

percentButton.addEventListener("click", () => {
    calculator.changePercentToDecimal()
})

operationButton.forEach(button => {
    button.addEventListener("click", (event) => {
        let {target} = event;
        calculator.insertOperation(target.dataset.operator)
    })
})

numberButton.forEach(button => {
    button.addEventListener("click", (event) => {
        let {target} = event;
        calculator.insertOperation(target.dataset.number)
    })
})

negationButton.addEventListener("click", ()=> {
    calculator.negateNumber()
})

decimalButton.addEventListener("click", () => {
    calculator.insertDecimalPoints()
})

equalsButton.addEventListener("click", () => {
    calculator.generateResult()
})