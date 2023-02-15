function clearErrors()
{
    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }
}

function seterror(id, error)
{
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}

function validateForm()
{
    var returnval = true;
    clearErrors();

    var name1 = document.forms['myForm']["fname"].value;
    if (name1.length<3)
    {
        seterror("name", "*Length of name is too short");
        returnval = false;
    }

    if (name1.length == 0)
    {
        seterror("name", "*Length of name cannot be zero!");
        returnval = false;
    }

    var email1 = document.forms['myForm']["femail"].value;
    if (email1.length>25)
    {
        seterror("email", "*Email length is too long");
        returnval = false;
    }


    var password1 = document.forms['myForm']["fpass"].value;
    if (password1.length < 6)
    {
        seterror("pass", "*Password should be atleast 6 characters long!");
        returnval = false;
    }

    var cpassword1 = document.forms['myForm']["fcpass"].value;
    if (cpassword1 != password1)
    {
        seterror("cpass", "*Password and Confirm password should match!");
        returnval = false;
    }

    return returnval;
}

var selectedRow = null

function onFormSubmit() {
    readFormData();
    validateForm();
}

function readFormData() {
    if(validateForm() == true){
    
    const single_product_data = {
        Name: document.getElementById("fname").value,
        Email: document.getElementById("femail").value,
        Password: document.getElementById("fpass").value,
    };
    var newData = JSON.parse( localStorage.getItem("AdminData") ) || [];
    newData.push(single_product_data)

   localStorage.setItem( "AdminData", JSON.stringify( newData ));  
   localStorage.setItem("adminRegisteredStatus", "true");   
   window.location.href = "http://127.0.0.1:5501/Login.html";
    }
}


