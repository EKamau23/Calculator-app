const display = document.getElementById("whatYouSee");

//function to display the number
function appendNumber(number) {
    display.value += number;
}

//function to display operator
function appendOperator(operator) {
    display.value += operator;
}

//function to clear display
function rubEverything() {
    display.value = '';
}

//function to calculate
function calculate() {
    const expression = display.value;
    const answer = eval(expression);
    display.value = answer;
}