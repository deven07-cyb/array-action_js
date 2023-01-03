var billsBeforeTip = [124,48,268];
var tipAmounts = [];
var finalAmounts = [];

function tipCalculator(billAmt)
{
    var percentage;
    if(billAmt<=50)
    {
        percentage=0.2;
    }
    else if(50<billAmt<=200)
    {
        percentage=0.15;
    }
    else
    {
        percentage=0.1;
    }
    return percentage*billAmt
}
for(i=0;i<bills.length;i++)
{
    tipAmounts[i]=tipCalculator(bills[i]);
    finalAmounts[i]=bills[i]+tipAmounts[i];
    console.log([i]+". total tip: "+tipAmounts[i]);
}
console.log("bills befor tip: "+bills.toString());
console.log("final Amounts: "+finalAmounts.toString());
console.log("tip Amounts: "+tipAmounts.toString());