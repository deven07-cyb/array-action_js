function restoreIp(s) 
{
    let result = [];
    let n = s.length;

    for (let i = 1; i < 4 && i < n - 2; i++) 
    {
      for (let j = i + 1; j < i + 4 && j < n - 1; j++) 
      {
        for (let k = j + 1; k < j + 4 && k < n; k++) 
        {
          let s1 = s.substring(0, i);
         
          let s2 = s.substring(i, j);
          
          let s3 = s.substring(j, k);
            
          let s4 = s.substring(k, n);
          
          if (isValid(s1) && isValid(s2) && isValid(s3) && isValid(s4)) 
          {
            result.push(s1 + "." + s2 + "." + s3 + "." + s4);
          }
        }
      }
    }
    return result;
  }
  
  function isValid(s) 
  {
    if (s.length > 3 || s.length === 0 || parseInt(s) > 255 || (s[0] === "0" && s.length > 1)) 
    {
      return false;
    }
    return true;
  }
  
  let str="25525511135";
  console.log(restoreIp(str))
