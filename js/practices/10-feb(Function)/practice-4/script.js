function DOB(str)
{
    var year = Number(str.substring(0,4));
    var month = Number(str.substring(4,2) - 1);
    var day = Number(str.substring(6,2));
    var today = new Date();
    var age = today.getFullYear() - year;
    if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) 
    {
      age--;
    }
      return age;
}
let str1 = "20020214";
console.log(DOB(str1));
