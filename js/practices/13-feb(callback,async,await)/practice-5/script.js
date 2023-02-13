let water = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve("water boiled")
        },5000);
    });
};

let teaLeaves = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve("tea leaves boiled")
        },2000);
    });
};

let milk = () =>{
        console.log("adding milk")
};

water().then((res) =>{
    console.log(res);
    teaLeaves().then((restea) =>{
        console.log(restea);
        milk();
    });
});