var johnmass = 70;
var markmass = 85;
var johnheight = 1.79832;
var markheight = 1.58496;

let mass1 = johnmass/Math.pow(johnheight,2);
console.log(mass1);
let mass2 = markmass/Math.pow(markheight,2);
console.log(mass2);

if(mass2>mass1){
    console.log("Is mark BMI higher than john's?");
}
else{
    console.log("john's BMI higher than mark");
}

xyz = mass2>mass1;
console.log(xyz);


//example-2
var a=89;
var b=120; 
var c=103;
var johnaverage=(a+b+c)/3;
var A=116;
var B=94;
var C=123;
var mikeaverage=(A+B+C)/3;
var aa=97;
var bb=134;
var cc=105;
var maryaverage=(aa+bb+cc)/3;

console.log("John Team Score:" + johnaverage + '\n' +
"Mike Team Score:" + mikeaverage + '\n' +
"Mary Team Score:" + maryaverage
);


if(johnaverage>mikeaverage && johnaverage>maryaverage){
    console.log("johns team are winning");
}
else if(mikeaverage>johnaverage && mikeaverage>maryaverage){
    console.log("mike team are winning");
}
else if(maryaverage>johnaverage && maryaverage>mikeaverage){
    console.log("mary team are winning");
}
else if (teamJohnAvg === teamMikeAvg  && teamJohnAvg > teamMaryAvg){
    console.log("John team and Mike team  are tied"); 
}
else if (teamJohnAvg === teamMaryAvg && teamJohnAvg > teamMikeAvg ){
   console.log("John team and Mary team  are tied "); 
}
else if (teamMikeAvg === teamMaryAvg && teamMaryAvg > teamJohnAvg ){
   console.log("Mike team and Mary team  are tied"); 
}
else {
   console.log("They are all tied \n\n"); 
}
