function separatePositiveNegative(numbers) {
    const positiveNumbers = [];
    const negativeNumbers = [];

    for (let number of numbers) {
        if (number >= 0) {
            positiveNumbers.push(number);
        } else {
            negativeNumbers.push(number);
        }
    }

    return { positiveNumbers, negativeNumbers };
}

const x = [23, 4, -6, 23, -9, 21, 3, -45, -8];

const { positiveNumbers, negativeNumbers } = separatePositiveNegative(x);

console.log("Positive numbers:", positiveNumbers);
console.log("Negative numbers:", negativeNumbers);