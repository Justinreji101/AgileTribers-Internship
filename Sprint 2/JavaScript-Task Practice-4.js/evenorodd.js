function checkEvenOrOdd(num) {
    if (num % 2 === 0) {
        return "The number is even.";
    } else {
        return "The number is odd.";
    }
}
console.log(checkEvenOrOdd(4)); 
console.log(checkEvenOrOdd(7));
console.log(checkEvenOrOdd(0));
console.log(checkEvenOrOdd(-2));
console.log(checkEvenOrOdd(-3));