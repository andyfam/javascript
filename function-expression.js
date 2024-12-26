document.getElementById("myTitle").textContent = "Function Expression";

const hello = function(){
    console.log("Hello");
 }
 
 hello();
 
 setTimeout(function() {
     console.log("Goodbye");
 }, 3000);