document.getElementById("myTitle").textContent = "String";

let userName = "Yufeng Fan";
let phoneNumber = "123-456-7890";

console.log(userName.length);

console.log(userName.charAt(0));
console.log(userName.indexOf("n"));
console.log(userName.lastIndexOf("n"));

console.log(userName.trim());
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());
console.log(userName.repeat(3));

console.log(userName.startsWith(" "));
console.log(userName.endsWith(" "));
console.log(userName.includes(" "));

console.log(phoneNumber.replaceAll("-", ""));

// pad string with the specified character until the length of the string reachs 15
console.log(phoneNumber.padStart(15, "0"));
console.log(phoneNumber.padEnd(15, "0"));

console.log(userName.slice(0, userName.indexOf(" ")));
console.log(userName.slice(userName.indexOf(" ")+1));