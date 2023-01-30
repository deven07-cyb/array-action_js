const UserDetails = JSON.parse(localStorage.getItem("user")) 
let user = document.querySelector('.user_name')
user.innerHTML = UserDetails.User_name;


function logout() {
  console.log("object");
  let userLogOutDataTime = new Date().toJSON();
  let storedata = JSON.parse(localStorage.getItem("products"));
  let userLoginData = JSON.parse(localStorage.getItem("user"));
  const AddLogOutTime = storedata.map((element) => {
    if (element.User_email == userLoginData.User_email) {
      return {
        ...element,
        logoutTime: userLogOutDataTime,
      };
    }
    return element;
  });
  localStorage.setItem("products", JSON.stringify(AddLogOutTime));
  localStorage.removeItem("user");
  window.location.href = "http://127.0.0.1:5500/login/login.html";
}
