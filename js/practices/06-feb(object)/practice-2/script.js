const product1 = {
    name: "i phone 13",
    price: 65999.0,
    quantity: 2
  };
  function calculateTotalCost(product1, quantity) {
    return product1.price * quantity;
  }
  
  const totalCost1 = calculateTotalCost(product1, product1.quantity);
  console.log("i phone 13 Total cost:")
  console.log(totalCost1);   

  
  const product2 = {
    name: "i phone 14",
    price: 72499.0,
    quantity: 5
  };
  function calculateTotalCost(product2, quantity) {
    return product2.price * quantity;
  }
  
  const totalCost2 = calculateTotalCost(product2, product2.quantity);
  console.log("i phone 14 Total cost:")
  console.log(totalCost2);   
