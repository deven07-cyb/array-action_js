const arr = [  { name: "deven", age: 21 },  { name: "anand", age: 22 },  { name: "jay", age: 25 }];

arr.sort((a, b) => (a.name > b.name ? 1 : -1));

console.log(arr);

