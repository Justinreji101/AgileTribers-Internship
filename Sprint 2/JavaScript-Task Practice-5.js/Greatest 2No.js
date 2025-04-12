function printGreatestNumber(a, b) {
    if (a > b) {
        console.log(`The greatest number is: ${a}`);
    } else if (b > a) {
        console.log(`The greatest number is: ${b}`);
    } else {
        console.log(`Both numbers are equal: ${a}`);
    }
}
const num1 = 10;
const num2 = 20;
printGreatestNumber(num1, num2);