let Array=[
    {
        id:1,
        name:"deven",
        age:10
    },
    {
        id:2,
        name:"anand",
        age:40
    },
    {
        id:3,
        name:"jay",
        age:29
    }
];

function find(Array)
{
    return Array.filter(s => s.age>25).length;  
}
    console.log(find(Array))
