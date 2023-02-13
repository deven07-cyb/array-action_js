function boil_water(sp){
    setTimeout(() =>{
        console.log("boiling water")
        sp();
    })
}
function boili_tea_leaves(){
    setTimeout(() =>{
        console.log("boiling tea leaves")
        add_milk();
    },5000)

}
function add_milk(){
    setTimeout(() =>{
        console.log("adding milk")
        ready();
    },2000)
}
function ready(){
    setTimeout(() =>{
        console.log("tea is ready enjoy")
    },3000)
}

boil_water(boili_tea_leaves);

