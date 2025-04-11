function factorial(n) {
    if (n < 0) {
        return "Error: Factorial is not defined for negative numbers.";
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(3));
console.log(factorial(-2));