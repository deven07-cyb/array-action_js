//bubble sort
function bblsort(arr)
{
    for (var i = 0 ; i < arr.length ; i++)
    {
        for(var j = 0 ; j < ( arr.length - i - 1 ) ; j++)
        {
            if(arr[j] > arr[j+1])
            {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j+1] = temp;
            }  
        }
    }
    console.log(arr);
}

var arr = [6,4,0,3,-2,1];
bblsort(arr);

//selection sort
// time complexcity 0(n^2)

function ssort(arr)
{
    for(var i = 0 ; i < arr.length - 1 ; i++)
    {
        var smallest = i;
        for(var j = i + 1 ; j < arr.length ; j++)
        {
            if(arr[smallest] > arr[j])
            {
                smallest = j;
            }
        }
        var temp = arr[smallest];
        arr[smallest] = arr[i];
        arr[i] = temp;
    }
    console.log(arr);
}

var arr = [-1,2,3,0,9,5];
ssort(arr);

//insertion sort

function isort(arr)
{
    for(var i = 1 ; i < arr.length ; i++)
    {
        var current = arr[i];
        var j = i-1;
        while(j >= 0 && current < arr [j])
        {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    console.log(arr);
}

var arr = [1,5,6,4,3,7];
isort(arr);                                                                                                                                                                                                                                                                                                                                                                                                                                              