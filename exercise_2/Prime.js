// Write a code to check whether the number is prime number or not
// ○ Example: 7 → 7 is a prime number
// ○ Example: 6 → 6 is not a prime number

let number_1 = 7;

let BilanganPrime = true;

if (number_1 <= 1) {
    BilanganPrime =false;
} else {
    for (let i =2; i <= Math.sqrt(number_1); i++){
        if (number_1 % i === 0) {
            BilanganPrime = false;
            break;
        } 
    }
}
if (BilanganPrime) {
    console.log("Prima")
} else {
    console.log("Non Prima")
}


let number_2 = 6;

let BilanganNonPrima = false;

if (number_2 <= 1){
    BilanganNonPrima = true;
} else {
    for (let i = 2; i <= Math.sqrt(number_2); i++){
        if (number_2 % i === 0) {
            BilanganNonPrima = true;
            break;
        }
    }
}

if (BilanganNonPrima) {
    console.log("Non Prima")
} else {
    console.log("Prima")
}
