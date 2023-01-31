const isLoggedIn = localStorage.getItem("admincheck");
        
if (isLoggedIn !== "true") {
  window.location.href = "http://127.0.0.1:5500/Login.html";
} 

const UserDetails = JSON.parse(localStorage.getItem("adminRegisteredData")) 
let user = document.querySelector('.user_name')
user.innerHTML = UserDetails.Name;

function clearErrors() {
  errors = document.getElementsByClassName("formerror");
  for (let item of errors) {
    item.innerHTML = "";
  }
}

function seterror(id, error) {
  element = document.getElementById(id);
  element.getElementsByClassName("formerror")[0].innerHTML = error;
}

function validateForm() {
  var returnval = true;
  clearErrors();

  var name = document.forms["myForm"]["fpro"].value;
  if (name.length < 5) {
    seterror("producttitle", "*Length of name is too short");
    returnval = false;
  }

  var email = document.forms["myForm"]["fprice"].value;
  if (email.length > 25) {
    seterror("price", "*Email length is too long");
    returnval = false;
  }

  var password = document.forms["myForm"]["fdes"].value;
  if (password.length < 6) {
    seterror("des", "*Password should be atleast 6 characters long!");
    returnval = false;
  }

  return returnval;
}

var selectedRow = null;
put_table_data();
function onFormSubmit() {
  validateForm();
  readFormData();
}

function readFormData() {
  let userDataRecord =
    localStorage.getItem("userData") !== null
      ? JSON.parse(localStorage.getItem("userData"))
      : [];
  if (
    userDataRecord.some(
      (element) => element.User_id == document.getElementById("lid").value
    )
  ) {
    const newProductData = userDataRecord.map((element) => {
      if (element.User_id == document.getElementById("lid").value) {
        return {
          ...element,
          User_id: document.getElementById("lid").value,
          User_name: document.getElementById("fpro").value,
          User_email: document.getElementById("fprice").value,
          User_password: document.getElementById("fdes").value,
          User_age: document.getElementById("fage").value,
          User_birthdate: document.getElementById("fdate").value,
        };
      }
      return element;
    });
    localStorage.setItem("userData", JSON.stringify(newProductData));
    put_table_data();
    document.getElementById("myForm").reset();
  } else {
    if (validateForm() == true) {
      const single_product_data = {
        User_id: new Date().getTime().toString(),
        User_name: document.getElementById("fpro").value,
        User_email: document.getElementById("fprice").value,
        User_password: document.getElementById("fdes").value,
        User_age: document.getElementById("fage").value,
        User_birthdate: document.getElementById("fdate").value,
      };
      var data = JSON.parse(localStorage.getItem("userData")) || [];
      data.push(single_product_data);

      localStorage.setItem("userData", JSON.stringify(data));

      put_table_data();
      document.getElementById("myForm").reset();
    }
  }
}

function put_table_data() {
  const Get_Local_data = JSON.parse(localStorage.getItem("userData"));
  var table = document.getElementById("tab");
  table.getElementsByTagName("tbody")[0].innerHTML = table.rows[0].innerHTML;

  for (const key in Get_Local_data) {
    var table = document.getElementById("tab").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = Get_Local_data[key].User_name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = Get_Local_data[key].User_email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = Get_Local_data[key].User_password;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = Get_Local_data[key].User_age;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = Get_Local_data[key].User_birthdate;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<button onClick="onEdit(this,${Get_Local_data[key].User_id})">Edit</button>
    <button onClick="onDelete(this,${Get_Local_data[key].User_id})">Delete</button>`;
  }
}

function onEdit(td, id) {
  document.getElementById("lid").value = id;
  selectedRow = td.parentElement.parentElement;
  document.getElementById("fpro").value = selectedRow.cells[0].innerHTML;
  document.getElementById("fprice").value = selectedRow.cells[1].innerHTML;
  document.getElementById("fdes").value = selectedRow.cells[2].innerHTML;
  document.getElementById("fage").value = selectedRow.cells[3].innerHTML;
  document.getElementById("fdate").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
  const product_data = {
    User_name: formData["fpro"],
    User_email: formData["fprice"],
    User_password: formData["fdes"],
    User_age: formData["fage"],
    User_birthdate: formData["fdate"],
  };

  localStorage.setItem("products_1", JSON.stringify(product_data));
  console.log("object");
  selectedRow.cells[0].innerHTML = formData.fpro;
  selectedRow.cells[1].innerHTML = formData.fprice;
  selectedRow.cells[2].innerHTML = formData.fdes;
  selectedRow.cells[3].innerHTML = formData.fage;
  selectedRow.cells[4].innerHTML = formData.fdate;
}

function onDelete(td, id) {
  if (confirm("Are you sure to delete this record ?")) {
    row = td.parentElement.parentElement;
    document.getElementById("tab").deleteRow(row.rowIndex);
    let userDataRecord =
      localStorage.getItem("userData") !== null
        ? JSON.parse(localStorage.getItem("userData"))
        : [];
    var newProductData = userDataRecord.filter(
      (element) => element.User_id != id
    );
    localStorage.setItem("userData", JSON.stringify(newProductData));
    put_table_data();
  }
}

