//push operation
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi", "Lemon", "Pineapple");
document.getElementById("push").innerHTML = fruits;

//concat operation
const arr1=["deven","sureja"];
const arr2=["shaileshbhai"];
const arr3=arr1.concat(arr2);
document.getElementById("concat").innerHTML =arr3;

//entries
const fruit = ["Banana", "Orange", "Apple", "Mango"];
const f = fruit.entries();
for (let x of f) 
{
  document.getElementById("entries").innerHTML += x + "<br>";
}

//every elements check
const ages = [32, 33, 16, 40];
document.getElementById("every").innerHTML = ages.every(checkAge);

function checkAge(age) {
  return age > 18;
}

//fill every item
const fr = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("fill").innerHTML = fr.fill("Kiwi");

//filter in item
const age = [32, 33, 16, 40];

document.getElementById("filter").innerHTML = age.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}

//slice in array
const fru = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fru.slice(1, 3);

document.getElementById("slice").innerHTML = citrus;

//pop in array

const name=["deven","jay","ankit","anand"];
name.pop();
document.getElementById("pop").innerHTML = name;

//find in array
const ag = [3, 10, 18, 20];

document.getElementById("find").innerHTML = ag.find(checkAge);

function checkAge(age) {
  return age > 18;
}