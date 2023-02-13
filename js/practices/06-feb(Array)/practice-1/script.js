    const Array = [1, 4, 0, 9, -3];
  
    console.log("maximum of the array:")
    console.log(Math.max(...Array));

    console.log("average of the array:")
    const average = Array.reduce((a, b) => a + b) / Array.length;
    console.log(average);

    console.log("sum of the array:")
    const sum= Array.reduce((a, b) => a + b);
    console.log(sum)
    
  