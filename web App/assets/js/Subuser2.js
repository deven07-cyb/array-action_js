const isLoggedIn = localStorage.getItem("usercheck");
if (isLoggedIn !== "true") {
  window.location.href = "http://127.0.0.1:5501/Login.html";
} 

const UserDetails = JSON.parse(localStorage.getItem("user")) 
let user = document.querySelector('.user_name')
user.innerHTML = UserDetails.User_name;

function logout() {
    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    let userLogOutDataTime = ((d.getMonth()+1) + "/" + d.getDate() + "/" + d.getFullYear() + "  " + strTime)


    let storedata = JSON.parse(localStorage.getItem("userData"));//all user
    let userLoginData = JSON.parse(localStorage.getItem("user"));//login user
    const AddLogOutTime = storedata.map((element) => {
      if (element.User_email == userLoginData.User_email) {
        return {
          ...element,
          logoutTime: userLogOutDataTime,
        };
      }
      return element;
    });
    localStorage.setItem("userData", JSON.stringify(AddLogOutTime));
    localStorage.removeItem("user");
    localStorage.removeItem("usercheck");
    window.location.href = "http://127.0.0.1:5501/Login.html";
  }
  