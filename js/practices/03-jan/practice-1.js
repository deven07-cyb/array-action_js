var johnmass = 70;
var markmass = 85;
var johnheight = 1.79832;
var markheight = 1.58496;

let johnBMI = johnmass/Math.pow(johnheight,2);
console.log(johnBMI);
let markBMI = markmass/Math.pow(markheight,2);
console.log(markBMI);

if(markmass>johnmass){
    console.log("Is mark BMI higher than john's?");
}
else{
    console.log("john's BMI higher than mark");
}

xyz = markBMI>johnBMI;
console.log(xyz);



