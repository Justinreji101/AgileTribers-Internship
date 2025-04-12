function productOrSum(a, b) {
    const product = a * b; 
    if (product > 500) {
        return a + b;
    } else {
        return product;
    }
}

const num1 = 20;
const num2 = 30;
const result = productOrSum(num1, num2);
console.log(`Result: ${result}`);