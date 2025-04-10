const pi = 3.14;

console.log(pi);
try {
    pi = 3.14159;
} catch (error) {
    console.error("Error:", error.message);
}