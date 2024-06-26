// Write a code to get difference between dates in days.
// ○ Example : date1 = 2022-01-20, date2 = 2022-01-22 → 2

let date1 = new Date('2022-01-20');
let date2 = new Date('2022-01-22');
const Akhir = date1 - date2
console.log(Akhir / 1000 / 60 / 60 / 24)