function rotatearray(arr,k){
    let n = arr.length;
    k = k % n;
    return arr.slice(n - k).concat(arr.slice(0, n - k));
}
var arr = [1,2,3,4,5,6,7];
console.log(rotatearray(arr,3));

// Output: [5,6,7,1,2,3,4]