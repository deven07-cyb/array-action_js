function x(data){
    setTimeout(() =>{
        console.log("X function is start executing...")
        data();
    },10000)
}
function y(){
    setTimeout(() =>{
        console.log("y function is start executing...")
        z();
    },10000)

}
function z(){
    setTimeout(() =>{
        console.log("z function is start executing...")
    },8000)
}

x(y);