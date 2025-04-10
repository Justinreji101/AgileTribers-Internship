function calculateTriangleArea(base, height) {
    const area = (base * height) / 2;
    return area;
}
const base = 8;
const height = 5;
const area = calculateTriangleArea(base, height);
console.log(`The area of a triangle with base ${base} and height ${height} is: ${area}`);