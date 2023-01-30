function check1() {
  let Email = document.getElementById("lemail").value;
  let Password = document.getElementById("lpass").value;

  let storedata = JSON.parse(localStorage.getItem("Admin"));

  if (storedata.some((ele) => ele.Email === Email && ele.Password === Password)) 
  {
    const UserData = storedata.filter((data) => data.Email === Email && data.Password === Password);

    localStorage.setItem("userData", JSON.stringify(UserData[0]));

    window.location.href = "http://127.0.0.1:5500/dashboard/dashboard.html";
    
  } 
  let currentDate = new Date().toJSON().slice(0, 10);

  let userLoginDataTime = new Date().toJSON();
  let data = JSON.parse(localStorage.getItem("products"));
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
  localStorage.setItem("products", JSON.stringify(AddLoginTime));

  if (data.some((ele) => ele.User_email === Email && ele.User_password === Password)) 
  {
    if (data.some((ele) =>ele.User_email === Email &&ele.User_password === Password &&ele.User_birthdate == currentDate)) 
    {
      const UserData = data.filter((data) =>data.User_email === Email &&data.User_password === Password &&data.User_birthdate == currentDate);
      window.location.href = "http://127.0.0.1:5500/sub/sub.html";
    } 
    else 
    {
      window.location.href = "http://127.0.0.1:5500/welcome/wel.html";
    }
  } 
}


function register() {
  location.href = `/registration/Registeration.html`;
}
