function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function calculateFactorials(arr) {
    const factorials = [];
    for (let number of arr) {
        factorials.push(factorial(number));
    }
    return factorials;
}

const numbers = [3, 4, 5];
const factorials = calculateFactorials(numbers);
for (let i = 0; i < numbers.length; i++) {
    console.log(`Factorial of ${numbers[i]} is ${factorials[i]}`);
}