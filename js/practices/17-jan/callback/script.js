// call back function
//  A callback is a function that is passed into another function, and then called in that function.

const students = 
[
    {name: 'deven', subject: 'javascript'},
    {name: 'anand', subject: 'java'}
];

function addstudent(student)
{
    setTimeout(function()
    {
        students.push(student);
        console.log("student has been added");
    }, 1000);
}

function getstudent()
{
    setTimeout(function () 
    {
        console.log(students);
        console.log("student have been fetched");
    }, 3000)
}
let newstudent = {name: 'jay', subject: 'php'}
addstudent(newstudent);
getstudent();