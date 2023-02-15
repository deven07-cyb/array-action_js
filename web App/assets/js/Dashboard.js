const isLoggedIn = localStorage.getItem("admincheck");
        
if (isLoggedIn !== "true") {
  window.location.href = "http://127.0.0.1:5501/Login.html";
} 

const UserDetails = JSON.parse(localStorage.getItem("adminRegisteredData")) 
let user = document.querySelector('.user_name')
user.innerHTML = UserDetails.Name;


let storedUsers = JSON.parse(localStorage.getItem("userData"))

let userage18 = document.querySelector('.user_age18')
let userage18_50 = document.querySelector('.user_age18_50')
let userage50 = document.querySelector('.user_age_50')

let under18 = 0;
let between18and50 = 0;
let over50 = 0;
for (let i = 0; i < storedUsers.length; i++) {
    let age = storedUsers[i].User_age;
 
    if (age < 18) 
    {
        under18++;
    } 
    else if (age >= 18 && age <= 50) 
    {
        between18and50++;
    } 
    else 
    {
        over50++;
    }
}

userage18.innerHTML = under18;
userage18_50.innerHTML = between18and50
userage50.innerHTML = over50

function birthDateFind() {
    let users = JSON.parse(localStorage.getItem("userData"));
    let user = users.filter((user) => {
        let dob = new Date(user.User_birthdate);
        let today = new Date();
        return dob.getMonth() + 1 == today.getMonth() + 1 && dob.getDate() == today.getDate();

    })
    if (user.length > 0 && user) {
        for (let i = 0; i < user.length; i++) {
            document.getElementById("birth-tag").innerHTML += "Today's is " + user[i].User_name + " Birthday." + "<br>";
        }
    }
    else {
        document.getElementById("birth-tag").innerHTML = "No Birthdays Today";
    }
  }
  birthDateFind();