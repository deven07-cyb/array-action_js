        const saveDetails = () => {
        const fName = document.getElementById("fname").value;
        const lName = document.getElementById("lname").value;
        const email = document.getElementById("femail").value;
        const phone = document.getElementById("fphone").value;
        
        return new Promise((resolve, reject) => 
        {
          if (fName === "") 
          {
            reject("Please enter your first name.");
          } 
          else if (lName === "") 
          {
            reject("Please enter your last name.");
          } 
          else if (email === "" ) 
          {
            reject("Please enter your email address.");
          } 
          else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) 
          {
            reject("Please enter a valid email address.");
          } 
          else if (phone === "") 
          {
            reject("Please enter your mobile number.");
          } 
          else if (!/^\d{10}$/.test(phone)) 
          {
            reject("Please enter a valid 10-digit mobile number.");
          } 
          else 
          {
            resolve("All validation checks passed.");
          }
        });
      };

    
      