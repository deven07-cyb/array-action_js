var john_firstgame=89;
var john_secondgame=120; 
var john_thirdgame=103;

var johnaverage=(john_firstgame+john_secondgame+john_thirdgame)/3;

var mike_firstgame=116;
var mike_secondgame=94;
var mike_thirdgame=123;

var mikeaverage=(mike_firstgame+mike_secondgame+mike_thirdgame)/3;

var mary_firstgame=97;
var mary_secondgame=134;
var mary_thirdgame=105;

var maryaverage=(mary_firstgame+mary_secondgame+mary_thirdgame)/3;

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
