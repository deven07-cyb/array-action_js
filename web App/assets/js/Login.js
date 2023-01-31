function checkAdmin() {
  if (localStorage.getItem("adminRegisteredStatus") == "true") {
    document.getElementById("registerMessage").innerHTML = "Admin already registered!";
    document.getElementById("registerButton").style.display = "none";
  }
 
}

function check1() {
  let Email = document.getElementById("lemail").value;
  let Password = document.getElementById("lpass").value;

  let storedata = JSON.parse(localStorage.getItem("AdminData"));

  if (storedata.some((ele) => ele.Email === Email && ele.Password === Password)) 
  {
    const UserData = storedata.filter((data) => data.Email === Email && data.Password === Password);

    localStorage.setItem("adminRegisteredData", JSON.stringify(UserData[0]));
    localStorage.setItem("admincheck", "true");
    window.location.href = "http://127.0.0.1:5500/Dashboard.html";
    
  } 
  let currentDate = new Date().toJSON().slice(0, 10);

  let userLoginDataTime = new Date().toJSON();
  let data = JSON.parse(localStorage.getItem("userData"));
  var userLoginData = {};
  const AddLoginTime = data.map((element) => {
     if (element.User_email == Email) 
    {
      userLoginData = element;
      return {
        ...element,
        loginTime: userLoginDataTime,
      };
    }
    return element;
  });

  localStorage.setItem("user", JSON.stringify(userLoginData));
  localStorage.setItem("usercheck", "true");
  localStorage.setItem("userData", JSON.stringify(AddLoginTime));

  if (data.some((ele) => ele.User_email === Email && ele.User_password === Password)) 
  {
    if (data.some((ele) =>ele.User_email === Email &&ele.User_password === Password &&ele.User_birthdate == currentDate)) 
    {
      const UserData = data.filter((data) =>data.User_email === Email &&data.User_password === Password &&data.User_birthdate == currentDate);
      window.location.href = "http://127.0.0.1:5500/Subuser1.html";
    } 
    else 
    {
      window.location.href = "http://127.0.0.1:5500/Subuser2.html";
    }
  } 
}
