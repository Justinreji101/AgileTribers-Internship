function performCalculation() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').innerText = "Error: Please enter valid numbers.";
        return;
    }
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                document.getElementById('result').innerText = "Error: Division by zero is not allowed.";
                return;
            }
            result = num1 / num2;
            break;
        default:
            document.getElementById('result').innerText = "Error: Please select a valid operation.";
            return;
    }

    document.getElementById('result').innerText = `Result: ${result}`;
}