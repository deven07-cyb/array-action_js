let queue = [];
let currentsize = queue.length;
let max = 5;

function push(val)
{
    if(currentsize > max)
    {
        alert("Queue is already full")
    }
    else
    {
        queue[currentsize] = val;
        currentsize++;
    }
}

function pop()
{
    if(currentsize>0)
    {
    for(let i = 0 ; i < queue.length ; i++ )
    {
        queue[i] = queue[i+1];
        
    }
    currentsize--;
    queue.length = currentsize;
    }
    else
    {
        alert("queue is already empty")
    }
}

push(7);
push(6);
push(5);
push(3);
push(2);

pop();
pop();


console.log(queue);