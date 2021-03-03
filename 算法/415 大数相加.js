// js 大数相加


// var addString = function( num1, num2){
  
//     let maxLen = Math.max(num1.length, num2.length)

//     num1 = num1.padStart(maxLen, 0);
//     num2 = num2.padStart(maxLen, 0);

//     let t = 0;
//     let f = 0;
//     let sum = '';
    
//     for(let i = maxLen-1; i >= 0; i--){
//         t =  +num1[i] + +num2[i] + f;
//         f = Math.floor(t/10);
//         sum = t%10 + sum
//     }

//     return sum
// }


var addString = (num1, num2)=>{

    let maxLen = Math.max(num1.length, num2.length)

    num1 = num1.padStart(maxLen,0);
    num2 = num2.padStart(maxLen,0);

    var t = 0,
        f = 0,
        sum = '';
    for( let i = maxLen-1; i>=0; i--){
        t = +num1[i] + +num2[i] +f;
        f = Math.floor(t/10);
        sum = t%10 + sum
    }

    if(f){
        sum = '1' +sum
    }

    return sum
}















let a = "9007199254740991";
let b = "1234567899999999999";
// addString('11234556','6272283930411111111')
console.log(addString(a, b));