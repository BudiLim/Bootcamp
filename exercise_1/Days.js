// Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days). 
// ○ Example : 400 days → 1 year, 1 month, 5 days
// ○ Example: 366 days → 1 year, 0 month, 1 day

let days = 400;
let years = Math.floor(days / 365);
days %= 365;
let months = Math.floor(days / 30);
days %= 30;
let day = days;
console.log(`${years} years, ${months} months, ${day} days`)
