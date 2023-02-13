function plus(digits){
    let digits2 = BigInt(digits.join(''))
    ++digits2
    digits2 = digits2.toString().split('') 
    return digits2
}
let str = [1,2,3];
console.log(plus(str))