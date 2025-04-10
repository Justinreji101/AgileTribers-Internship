function calculateCircleArea(radius) {
    const pi = Math.PI;
    const area = pi * Math.pow(radius, 2);
    return area;
}
const radius = 5; 
const area = calculateCircleArea(radius);
console.log(`The area of a circle with radius ${radius} is: ${area.toFixed(2)}`);