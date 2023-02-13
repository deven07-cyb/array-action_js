function close(nums,target)
{
    nums.sort((a,b) =>a-b);
    // console.log(nums)
    let closest = Infinity;

    for(let i= 0; i<nums.length-2 ; i++)
    {
        let start = i+1; end = nums.length-1;
        while(start<end)
        {
            let sum = nums[i] + nums[start] + nums[end];
            // console.log(sum)
            if(Math.abs(sum-target) < Math.abs(closest-target)) 
            closest=sum;
            if(sum>target)
            end--
            else
            start++;
        }
    }
    return closest;
};
let arr1 = [-1,2,1,-4];
let target1 = 1;
console.log(close(arr1,target1))

let arr2=[3,2,-4,-1];
let target2 = -4;
console.log(close(arr2,target2))
