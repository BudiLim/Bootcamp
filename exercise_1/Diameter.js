// Write a code to find diameter, circumference and area of a circle.
// ○ Example : radius = 5
// ○ Output : diameter = 10, circumference = 31.4159, area = 78.539

let radius = 5;
let diameter = 10;
const circumference = 2 * Math.PI * radius
const area = Math.PI * radius * radius

console.log(`Circumference ${circumference}, Area${area}`)