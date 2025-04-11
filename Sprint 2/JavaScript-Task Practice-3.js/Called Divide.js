function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return a / b;
}
console.log(divide(10, 2));
console.log(divide(20, 4));
console.log(divide(5, 0));
console.log(divide(-10, 2));
console.log(divide(7, 3));