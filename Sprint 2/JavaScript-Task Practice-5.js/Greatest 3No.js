function printGreatestOfThree(a, b, c) {
    if (a >= b && a >= c) {
        console.log(`The greatest number is: ${a}`);
    } else if (b >= a && b >= c) {
        console.log(`The greatest number is: ${b}`);
    } else {
        console.log(`The greatest number is: ${c}`);
    }
}
const num1 = 10;
const num2 = 20;
const num3 = 15;
printGreatestOfThree(num1, num2, num3);