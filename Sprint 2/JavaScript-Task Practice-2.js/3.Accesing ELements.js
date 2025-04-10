// Declare an array of fruits
let fruits = ["apple", "banana", "cherry", "date"];
//Accessing Elements
console.log(fruits[0]);
console.log(fruits[2]);
//basic array Using push()
fruits.push("elderberry");
console.log(fruits);
//Using unshift()
fruits.unshift("fig");
console.log(fruits);
//Using pop()
let lastFruit = fruits.pop();
console.log(lastFruit);
console.log(fruits);
//Using shift()
let firstFruit = fruits.shift();
console.log(firstFruit);
console.log(fruits);
//Length of the Array
console.log(fruits.length);
//Iterating Over the Array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
//Using forEach()
fruits.forEach(function(fruit) {
    console.log(fruit);
});