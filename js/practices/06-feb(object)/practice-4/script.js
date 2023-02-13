function extractProperties(obj)
{
    return { name: obj.name,
             age: obj.age,
           };
}
  let originalObject = { name: 'Deven', age: 21, address: 'Moti Paneli' };
  let extractedObject = extractProperties(originalObject);
  console.log(extractedObject); 

    