console.log("Welcome to Node CLI Calculator App")
console.log("")
console.log("Please read the acceptance criteria to get started!.")

const prompt = require('prompt-sync')()
let name = prompt("What is your name?  ")
console.log('Hello  ' + name + ' !!!!')
let Action = prompt('Addition, Subtraction, Multiplication, Division  ')
let firstNumber = prompt('What is your first number?  ')
let secondNumber = prompt('What is your second number?  ')

for(let count = 1; count > 0;){

    function AddNumbers(x, y) {
    return x + y
    }   
    
    if (Action === 'Addition') {
        let result = AddNumbers(Number(firstNumber), Number(secondNumber));
        console.log(result);
    }
    
    function SubtractionNumbers (x, y) {
        return x - y
    }
    
    if (Action === 'Subtraction') {
        let result = SubtractionNumbers(Number(firstNumber), Number(secondNumber));
        console.log(result);
    }
    
    function MultiplicationNumbers (x, y) {
        return x * y
    }
    
    if (Action === 'Multiplication') {
        let result = MultiplicationNumbers(Number(firstNumber), Number(secondNumber));
        console.log(result);
    }
    
    function DivisionNumbers (x, y) {
        return x / y
    }
    
    if (Action === 'Division') {
        let result = DivisionNumbers(Number(firstNumber), Number(secondNumber));
        console.log(result);
    }

    let runAgain = prompt("Would you like to run the calculator again? (Y/N) ");
    if (runAgain == "Yes") {
      console.clear();
    } else {
      flag = false;
      console.clear();
      console.log("Enjoy the rest of your day!");
      process.exit();
    }
}





















