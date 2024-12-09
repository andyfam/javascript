document.getElementById("myTitle").textContent = "Random";

// generate number between min to max
let max = 100;
let min = 50;

let randomNum = Math.floor(Math.random() * (max - min) + min);

console.log(randomNum);