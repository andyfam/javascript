document.getElementById("myTitle").textContent = "Strict Equality";

const PI = 3.14;

if(PI === "3.14"){
    console.log("That is Pi if we use strict equality");
}
else{
    console.log("That is NOT Pi if we use strict equality");
}

if(PI == "3.14"){
    console.log("That is Pi if we use common equality");
}
else{
    console.log("That is NOT Pi if we use common equality");
}