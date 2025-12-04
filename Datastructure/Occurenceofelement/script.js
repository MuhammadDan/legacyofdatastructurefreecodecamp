function occurenceofelement(arr, element){
    var count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==element){
            count++;
        }
    }
    if(count===0){
        console.log("Element not found in the array");
    }
    else{
        console.log("Element "+element+" occurs "+count+" times in the array");
    }
}
var arr = [1, 2, 3, 4, 2, 5, 2, 6];
var elementToCount = 2;
console.log(occurenceofelement(arr, elementToCount));