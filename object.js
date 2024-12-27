document.getElementById("myTitle").textContent = "Object";

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: () => console.log("Hi! I am Spongebob!"),
    eat: () => console.log("I am eating a Krabby Patty"),
}

console.log(person1.firstName);
person1.sayHello();
person1.eat();