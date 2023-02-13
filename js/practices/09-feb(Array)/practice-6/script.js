function find(num,target){
    for(let i=0;i<num.length;i++){
        if(num[i] == target){
            return i;
        }
        else if(num[i]>target){
            return i;
        }
    }
    return num.length;
}

let str1=[1,3,5,6];
let target1 = 5;
console.log(find(str1,target1));
let str2=[1,3,5,6];
let target2 = 2;
console.log(find(str2,target2));
let str3=[1,3,5,6];
let target3 = 7;
console.log(find(str3,target3));
