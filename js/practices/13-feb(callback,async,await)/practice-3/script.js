function validate(callback){

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("femail").value;
    let phone = document.getElementById("fphone").value;


    if(fname !="" && lname !="" && email !="" && phone !=""){
        callback(fname,lname,email,phone);
    }
    else{
        alert("enter all field")
    }
}

function display(fname,lname,email,phone){
    console.log(fname,lname,email,phone);
}