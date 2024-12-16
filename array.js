document.getElementById("myTitle").textContent = "Array";

let fruits = ["apple", "orange", "banana"];

//add an element
fruits.push("coconut");  
console.log(fruits);

//removes last element
fruits.pop();            
console.log(fruits);

//add element to beginning
fruits.unshift("mango"); 
console.log(fruits);

//removes element from beginning
fruits.shift();          
console.log(fruits);

let numOfFruits = fruits.length;
console.log(numOfFruits);

// find element
let index = fruits.indexOf("orange");
console.log(index);

// order & reverse order
fruits.sort();
console.log(fruits);

fruits.sort().reverse();
console.log(fruits);

// iterate
for(i=0; i<fruits.length;i++){
    console.log(fruits[i]);
}

for(let fruit of fruits){
    console.log(fruit);
}

// 2D arrays
const matrix = [ 
                [1, 2, 3], 
                [4, 5, 6], 
                [7, 8, 9]
            ];

for(let row of matrix){
    const rowString = row.join(' ');
    console.log(rowString);
}
