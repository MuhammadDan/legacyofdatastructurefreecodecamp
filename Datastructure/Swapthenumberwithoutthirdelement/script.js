// function swapthenumber(a,b){
//     a = a + b;
//     b = a - b;
//     a = a - b;
//     return [a,b]
// }
// let a = 5;
// let b= 10;
// console.log(swapthenumber(a,b));













function swapthenumber(a,b){
    a = a + b;
    b = a - b;
    a = a - b;
    return [a,b];
}

let a = 2;
let b = 3;
console.log(swapthenumber(a,b));