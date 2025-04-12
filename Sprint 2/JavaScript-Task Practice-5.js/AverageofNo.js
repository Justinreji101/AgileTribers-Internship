function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    const average = sum / numbers.length;

    return average;
}

const numbersArray = [10, 20, 30, 40, 50];
const average = calculateAverage(numbersArray);
console.log(`The average of the numbers in the array is ${average}`);