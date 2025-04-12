function printDivisibleByFive(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 5 === 0) { 
            console.log(numbers[i]);
        }
    }
}
const array = [10, 23, 45, 60, 77, 85, 90, 100, 33]; 
printDivisibleByFive(array);