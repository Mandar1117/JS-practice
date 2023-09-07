//Given an integer array, transform that array into a mirror
//example mirror([1, 2, 3, 4, 5]) ➞ [1, 2, 3, 4, 5, 4, 3, 2, 1]

const mirror=(arr)=>
{

    let mirrorarr=[];
    for (let i = 0; i < arr.length; i++) {
        mirrorarr+=arr[i];
    }
    for (let i = arr.length-1; i >0; i--) {
        mirrorarr+=arr[i-1]
    }
    return mirrorarr
}