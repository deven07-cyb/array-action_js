function sol(number)
{
    let n = number.length;
    let present = new Array(n+1);

    for(let i=0;i<n+1;i++)
    {
        present[i] = false;
    }
    for(let i = 0;i<n;i++)
    {
        if(number[i] > 0 && number[i] <= n)
        {
            present[number[i]] = true;
        }
    }
    for(let i = 1; i<=n; i++)
    {
        if(!present[i])
        {
            return i;
        }
    }
    return n+1;
}

let arr = [1,2,0]
console.log(sol(arr));

let arr2 = [3,4,-1,1]
console.log(sol(arr2));

let arr3 = [7,8,9,11,12]
console.log(sol(arr3));