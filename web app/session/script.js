const UserDetails = JSON.parse(localStorage.getItem("userData")) 
let user = document.querySelector('.user_name')
user.innerHTML = UserDetails.Name;


var selectedRow = null
put_table_data()
function put_table_data()
{
    
    const Get_Local_data = JSON.parse( localStorage.getItem('products') );
    var table = document.getElementById("tab");
    table.getElementsByTagName("tbody")[0].innerHTML = table.rows[0].innerHTML;

    for ( const key in Get_Local_data ) {
            
            var table = document.getElementById("tab").getElementsByTagName('tbody')[0];
            var newRow = table.insertRow(table.length);
            cell1 = newRow.insertCell(0);
            cell1.innerHTML = Get_Local_data[key].User_name;
            cell2 = newRow.insertCell(1);
            if(Get_Local_data[key].loginTime !== undefined){
                cell2.innerHTML = Get_Local_data[key].loginTime;
            }else{
                cell2.innerHTML = "Not Login"
            }
            cell3 = newRow.insertCell(2);
            if(Get_Local_data[key].logoutTime !== undefined){
                cell3.innerHTML = Get_Local_data[key].logoutTime;
            }else{
                cell3.innerHTML = "Not Login"
            }
                  
    }
}