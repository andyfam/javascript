document.getElementById("myTitle").textContent = "Foreach";

// ------------- example for numbers -------------
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(cube);
numbers.forEach(display);

function cube(element, index, array){
    array[index] = Math.pow(element, 3);
}

function display(element){
    console.log(element);
}

// ------------- EXAMPLE for strings -------------

let fruits = ["apple", "orange", "banana", "coconut"];

fruits.forEach(capitalize);
fruits.forEach(display);

function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}
