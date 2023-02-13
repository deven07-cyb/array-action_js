function longest_str_in_array(arr)
  {
    var max_str = arr[0].length;
    var ans = arr[0];
    for (var i = 1; i < arr.length; i++) 
    {
        var maxi = arr[i].length;
        if (maxi > max_str) 
        {
            ans = arr[i];
            max_str = maxi;
        }
    }
    return ans;
}
console.log("longest string in array is:")
console.log(longest_str_in_array(["ab", "a", "abcd"]));