
const UserDetails = JSON.parse(localStorage.getItem("userData")) 
let user = document.querySelector('.user_name')
user.innerHTML = UserDetails.Name;


let storedUsers = JSON.parse(localStorage.getItem("products"))

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