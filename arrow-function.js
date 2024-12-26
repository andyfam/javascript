document.getElementById("myTitle").textContent = "Arrow Function";

const numbers = [1, 2, 3, 4, 5];

let total = numbers.reduce((acummulator, element) => acummulator + element);
console.log(total);

let oddNums = numbers.filter((element) => element % 2 !== 0);
console.log(oddNums);