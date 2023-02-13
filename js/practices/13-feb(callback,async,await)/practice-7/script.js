
  async function first() {
      setTimeout(() => {
        resolve("output from first");
      }, 5000); 
    };
  
  
  async function second() {
      setTimeout(() => {
        resolve("output from second");
      }, 10000);
    };
  
  async function third() {
      setTimeout(() => {
        console.log("output from third");
      }, 15000);
    };
  
  
  async function displayOutput() {
    console.log(await first());
    console.log(await second());
    console.log(await third());
  }
  
  displayOutput();
  