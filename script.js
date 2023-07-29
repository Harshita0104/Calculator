let currentInput="";

function display(val)
{
    currentInput+=val;
    document.getElementById("result").value=currentInput;
}

function solve()
{
    try{
        let result=evaluateExpression(currentInput);
        document.getElementById("result").value=result;
        currentInput=result.toString();
    }
    catch(error)
    {
        document.getElementById("result").value="Error";
        currentInput="";
    }
}

function evaluateExpression(expression)
{
    let numbers=expression.split(/[-+*/]/);
    let operators=expression.match(/[^\d.]/g);

    numbers=numbers.map(parseFloat);

    while (operators.length > 0) {
        let operator = operators[0];
        let index = operators.indexOf(operator);

        let num1 = numbers[index];
        let num2 = numbers[index + 1];

        if (operator === '*') {
            numbers.splice(index, 2, num1 * num2);
        } else if (operator === '/') {
            numbers.splice(index, 2, num1 / num2);
        } else if (operator === '+') {
            numbers.splice(index, 2, num1 + num2);
        } else if (operator === '-') {
            numbers.splice(index, 2, num1 - num2);
        }

        operators.splice(index, 1);
    }

    return numbers[0];
}



function clearScreen()
{
    currentInput="";
    document.getElementById("result").value=currentInput;
}
