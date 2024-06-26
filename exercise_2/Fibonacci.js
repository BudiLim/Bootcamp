// Write a code to print the first N fibonacci numbers
// ○ Example: 15 → 610

let X = 15;
let fibonacci = [0, 1];

for (let i = 2; i <= X; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
let result = fibonacci.slice(1, X + 1);

console.log(result); 
console.log(`Fibonacci number at position ${X} is ${result [X - 1]}`); 
