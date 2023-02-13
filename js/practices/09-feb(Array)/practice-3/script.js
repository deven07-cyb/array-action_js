function sol(number)
{
  number.sort();
  let small = 1;
  for(let i=0;i<number.length;i++)
  {
    if(number[i] == small)   
    small++;
  }
  return small;
}

let arr = [1,2,0]
console.log(sol(arr));

let arr2 = [-4,-1,1,3]
console.log(sol(arr2));

let arr3 = [7,8,9,14]
console.log(sol(arr3));




