var input = prompt("enter integer value");
console.log("your enter value is : " + input);

while(input>0)
{
    if(input>=1000)
    {
        console.log("M");
        input = input - 1000;
    }
    else if(input>=900)
    {
        console.log("CM");
        input = input - 900;
    }
    else if(input>=500)
    {
        console.log("D");
        input = input - 500;
    }
    else if(input>=400)
    {
        console.log("CD");
        input = input - 400;
    }
    else if(input>=100)
    {
        console.log("C");
        input = input - 100;
    }
    else if(input>=90)
    {
        console.log("XC");
        input = input - 90;
    }
    else if(input>=50)
    {
        console.log("L");
        input = input - 50;
    }
    else if(input>=40)
    {
        console.log("XL");
        input = input - 40;
    }
    else if(input>=10)
    {
        console.log("X");
        input = input - 10;
    }
    else if(input>=9)
    {
        console.log("IX");
        input = input - 9;
    }
    else if(input>=5)
    {
        console.log("V");
        input = input - 5;
    }
    else if(input>=4)
    {
        console.log("IV");
        input = input - 4;
    }
    else if(input>=1)
    {
        console.log("I");
        input = input - 1;
    }
    
}
