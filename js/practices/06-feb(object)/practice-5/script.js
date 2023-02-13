function mergeObjects(obj1, obj2) {
    return Object.assign( obj1, obj2);
  }
  let obj1 = { name: 'John', age: 30 };
  let obj2 = { address: '123 Main St' };
  
  let mergedObj = mergeObjects(obj1, obj2);
  
  console.log(mergedObj);
 
    