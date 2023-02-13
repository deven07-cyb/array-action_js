function decode(s) 
{
    if(s[0] == '0' || s.length == 0){
        return 0;
    }
    let count = [];
    count[0] = 1;
    count[1] = 1;
    for(let i = 2; i <= s.length; i++)
    {
        count[i] = 0;
        if(s[i - 1] > '0')
        {
            count[i] = count[i - 1];
        }
        if(s[i - 2] == '1' || (s[i - 2]) == '2' && s[i - 1] < '7')
        {
            count[i] = count[i] + count[i - 2];
        }
    }
return count[s.length];
};

let str="1212";
console.log(decode(str));

