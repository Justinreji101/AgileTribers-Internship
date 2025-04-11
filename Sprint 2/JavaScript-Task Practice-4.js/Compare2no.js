function compareNumbers(num1, num2) {
    if (num1 > num2) {
        return `${num1} is greater than ${num2}.`;
    } else if (num1 < num2) {
        return `${num2} is greater than ${num1}.`;
    } else {
        return `Both numbers are equal.`;
    }
}
const number1 = 10;
const number2 = 20;
const result = compareNumbers(number1, number2);
console.log(result);