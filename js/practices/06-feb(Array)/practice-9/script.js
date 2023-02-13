function maxArea(height) {
    let max = 0;
    let i = 0;
    let j = height.length - 1;
  
    while (j > i) {
      const a = height[i];
      const b = height[j];
  
      const area = Math.min(a, b) * (j - i);
      // console.log(area)
      if (area > max)
      max = area;
  
      if (b > a) i++;
      else j--;
    }
  
    return max;
  }

 let height = [1,8,6,2,5,4,8,3,7];
 console.log(maxArea(height));