function maxProductSubarray(arr){
    let maxprod = arr[0];
    let minprod = arr[0];
    let result = arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]<0){
            let temp = maxprod;
            minprod = maxprod;
            minprod = temp;
        }
        maxprod = Math.max(arr[i],maxprod*arr[i]);
        minprod = Math.min(arr[i],minprod*arr[i]);
        result = Math.max(result,maxprod);
    }
    console.log("Maximum product subarray is: "+result);
}
var arr = [2,3,-2,4];
maxProductSubarray(arr)
