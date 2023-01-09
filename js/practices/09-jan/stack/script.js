let stack = [];
let currentsize = stack.length;
let max = 5;

function push(val)
{
    if(currentsize>=max)
    {
        alert("stack is full you can not add " + val)
    }
    stack[currentsize] = val;
    currentsize++;
}

function pop()
{
    if(currentsize>0)
    {
        currentsize--;
        stack.length = currentsize;
    }
    else
    {
        alert("stack is already empty")
    }
}
push(7);
push(14);
push(21);
push(4);
push(6);

pop();
pop();
console.log(stack);