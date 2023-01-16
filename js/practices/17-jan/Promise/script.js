 // promise example

let promise = true;
let value = new Promise((resolve,reject) =>
{
    if(promise)
    {
        resolve("we are resolved");
    }
    else
    {
        reject("we are not resolved");
    }
});

console.log(value);


 //chaining promise

let promise1 = new Promise((resolve,reject)=>
{
    resolve("promise resolved");
});

promise1.then((result)=>
{
    console.log(result);
});

promise1.finally(()=>
{
    console.log("call multiple function this way");
})

promise1.finally(()=>
{
    setTimeout(()=>
    {
       console.log("its take 5 sec");
    },5000);
});


//Promise API
str1 = ["deven","javascript"];
let p1 = new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve(str1);
    },1000);
});
str2 = ["anand","java"];
let p2 = new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve(str2);
    },2000);
});
str3 = ["jay","php"];
let p3 = new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve(str3);
    },3000);
});

let a1 = Promise.all([p1,p2,p3])
a1.then((value)=>
{
    console.log(value);
});
let a2 = Promise.allSettled([p1,p2,p3])
a2.then((value)=>
{
    console.log(value);
});
let a3 = Promise.race([p1,p2,p3])
a3.then((value)=>
{
    console.log(value);
});
let a4 = Promise.any([p1,p2,p3])
a4.then((value)=>
{
    console.log(value);
});
let a5 = Promise.resolve([p1,p2,p3])
a5.then((value)=>
{
    console.log(value);
});
let a6 = Promise.reject([p1,p2,p3])
a6.then((value)=>
{
    console.log(value);
});
