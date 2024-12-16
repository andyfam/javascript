document.getElementById("myTitle").textContent = "Spread Operator";

// ------------ unpack array ------------
let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(maximum);
console.log(minimum);

// ------------ unpack string ------------
let username = "Yufeng Fan";
let letters = [...username]; 

console.log(letters);

// ------------ join arrays and strings ------------
let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];
let foods = [...fruits, ...vegetables, "eggs", "milk"];

console.log(foods);