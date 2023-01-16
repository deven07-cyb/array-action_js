
var selectedRow = null
put_table_data()
function onFormSubmit() {
    readFormData();
}

function readFormData() {

    var title = document.getElementById("fpro").value;

    const single_product_data = {
        Product_title: document.getElementById("fpro").value,
        Product_price: document.getElementById("fprice").value,
        Product_description: document.getElementById("fdes").value,
        Product_category: document.getElementById("fcat").value,
    };

    const Local_data = JSON.parse( localStorage.getItem('products') );
    if ( Local_data !== null ){
        Local_data[title] = single_product_data;
        localStorage.setItem( "products", JSON.stringify( Local_data ) );    
    }else{
        const Local_data = {}
        Local_data[title] = single_product_data;
        localStorage.setItem( "products", JSON.stringify( Local_data ) );    
    }

    put_table_data();

}

function put_table_data(){
    const Get_Local_data = JSON.parse( localStorage.getItem('products') );

    var table = document.getElementById("tab");
  
    table.getElementsByTagName("tbody")[0].innerHTML = table.rows[0].innerHTML;


    
    for ( const key in Get_Local_data ) {

            var table = document.getElementById("tab").getElementsByTagName('tbody')[0];
            var newRow = table.insertRow(table.length);
            cell1 = newRow.insertCell(0);
            cell1.innerHTML = Get_Local_data[key].Product_title;
            cell2 = newRow.insertCell(1);
            cell2.innerHTML = Get_Local_data[key].Product_price;
            cell3 = newRow.insertCell(2);
            cell3.innerHTML = Get_Local_data[key].Product_description;
            cell4 = newRow.insertCell(3);
            cell4.innerHTML = Get_Local_data[key].Product_category;
            cell5 = newRow.insertCell(4);
            cell5.innerHTML = `<button onClick="onEdit(this)">Edit</button>
                               <button onClick="onDelete(this)">Delete</button>`;
    }
}

function insertNewRecord(data) {
    var table = document.getElementById("tab").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fpro;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.fprice;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.fdes;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.fcat;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<button onClick="onEdit(this)">Edit</button>
                       <button onClick="onDelete(this)">Delete</button>`;
}

function resetForm() {
    document.getElementById("fpro").value = "";
    document.getElementById("fprice").value = "";
    document.getElementById("fdes").value = "";
    document.getElementById("fcat").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fpro").value = selectedRow.cells[0].innerHTML;
    document.getElementById("fprice").value = selectedRow.cells[1].innerHTML;
    document.getElementById("fdes").value = selectedRow.cells[2].innerHTML;
    document.getElementById("fcat").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {

    const product_data = {
        Product_title: formData['fpro'],
        Product_price: formData['fprice'],
        Product_description: formData['fdes'],
        Product_category: formData['fcat'],
      };

    localStorage.setItem("products_1", JSON.stringify(product_data));
    console.log('object')
    selectedRow.cells[0].innerHTML = formData.fpro;
    selectedRow.cells[1].innerHTML = formData.fprice;
    selectedRow.cells[2].innerHTML = formData.fdes;
    selectedRow.cells[3].innerHTML = formData.fcat;
    
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("tab").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fpro").value == "") {
        isValid = false;
        document.getElementById("producttitlevalidationerror").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("producttitlevalidationerror").classList.contains("hide"))
            document.getElementById("producttitlevalidationerror").classList.add("hide");
    }
    return isValid;
}

