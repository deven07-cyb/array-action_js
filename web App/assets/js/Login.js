function checkAdmin() {
  if (localStorage.getItem("adminRegisteredStatus") == "true") {
    document.getElementById("registerMessage").innerHTML = "Admin already registered!";
    document.getElementById("registerButton").style.display = "none";
  }
}

function check() {
  let Email = document.getElementById("lemail").value;
  let Password = document.getElementById("lpass").value;
  let storedata = JSON.parse(localStorage.getItem("AdminData"));

  if (storedata.some((ele) => ele.Email === Email && ele.Password === Password)) 
  {
    const AdminData = storedata.filter((data) => data.Email === Email && data.Password === Password);
    localStorage.setItem("adminRegisteredData", JSON.stringify(AdminData[0]));
    localStorage.setItem("admincheck", "true");
    window.location.href = "http://127.0.0.1:5501/Dashboard.html"; 
  } 
  else {
  var d = new Date();
  var hours = d.getHours();
  var minutes = d.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; 
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  let userLoginDataTime = ((d.getMonth()+1) + "/" + d.getDate() + "/" + d.getFullYear() + "  " + strTime)


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
    const user = data.find((ele) => ele.User_email === Email && ele.User_password === Password);
    if (user) {
      const birthdate = user.User_birthdate;
      const today = new Date();
      const birthday = new Date(birthdate);
      if (today.getDate() === birthday.getDate() && today.getMonth() === birthday.getMonth()) {
        window.location.href = "http://127.0.0.1:5501/Subuser1.html";
      } else {
        window.location.href = "http://127.0.0.1:5501/Subuser2.html";
      }
    }
  } 
}
}
