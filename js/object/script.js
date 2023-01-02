//object
const person={
    firstname:"deven",
    lastname:"sureja",
    age:21,
    color:"black"
};
document.getElementById("object").innerHTML =person.firstname + " is " + person.age + " years old.";

//keys ex:-1
const fruits = ["Banana", "Orange", "Apple"];
const keys = Object.keys(fruits);
document.getElementById("key").innerHTML = keys;

//keys ex:-2
const persons = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  const key = Object.keys(person);
  
  document.getElementById("keys").innerHTML = key;

//value 

const fruit = ["Banana", "Orange", "Apple", "Mango",];
const myArray = fruit.valueOf();

document.getElementById("value").innerHTML = myArray;
