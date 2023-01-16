async function getdata()
{
    let name = new Promise((resolve,reject)=>
        {
            setTimeout(()=>
            {
                resolve("deven");
            },3000);
        });

    let surname = new Promise((resolve,reject)=>
        {
            setTimeout(()=>
            {
                resolve("sureja");
            },6000);
        });

        console.log("your name is please wait...");
        let a1 = await name;
        console.log("your name is: " + a1);
        console.log("your surname is please wait...");
        let a2 = await surname;
        console.log("your surname is: " + a2);
        return [a1,a2]
}

let show = getdata()
show.then((value) =>
{
    console.log(value);
});