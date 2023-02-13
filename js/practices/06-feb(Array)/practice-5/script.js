function Merge(arr1, arr2){

   
    let arr = arr1.concat(arr2);
    let uniqueArr = [];

   
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}

const array1 = [1, 2, 3, 3, 5];
const array2 = [2, 3, 5, 7];

Merge(array1, array2);