function large(nums,target){
    let stack=[];

    for(let i=0;i<=nums.length;i++){
        if(nums[i]>target){
            stack.push(nums[i]);
        }
    }
    return stack; 
}
let str=[5,1,2,3,6];
let targetl=3;
console.log(large(str,targetl));