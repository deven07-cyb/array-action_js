let A = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve("output from one")
        },5000);
    });
};

let B = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve("output from two")
        },10000);
    });
};

let C = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve("output from third")
        },15000);
    });
};

A().then((a)=>{
    console.log(a);
}).catch((a) =>{
    console.log(a);
});
B().then((b)=>{
    console.log(b);
}).catch((b) =>{
    console.log(b);
});
C().then((c)=>{
    console.log(c);
}).catch((c) =>{
    console.log(c);
});
