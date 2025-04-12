function checkFirstAndLastSame(arr) {
    if (arr.length > 0) {
        return arr[0] === arr[arr.length - 1];
    }
    return false;
}
const list = [10, 20, 30, 40, 10];
const result = checkFirstAndLastSame(list);
console.log(`Given List: ${list}`);
console.log(`Result: ${result}`);