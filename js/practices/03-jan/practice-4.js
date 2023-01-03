var mark={
    name: "mark doe",
    mass: '70',
    height: '1.5849',
    calculateBMI: function()
    {
        this.bmi=this.mass/Math.pow(this.height,2);
    }
}

mark.calculateBMI();
console.log(mark);

var john={
    name: "john green",
    mass: '85',
    height: '1.7983',
    calculateBMI:function()
    {
        this.bmi=this.mass/Math.pow(this.height,2);
    }
}

john.calculateBMI();
console.log(john);

if(mark.bmi>john.bmi)
{
    console.log(mark.name + " has a higher BMI ");
}
else if(mark.bmi<john.bmi)
{
    console.log(john.name + " has a higher BMI ");
}
else
{
    console.log(mark.name + "and" + john.name + " has same BMI ");
}