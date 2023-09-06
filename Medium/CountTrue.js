//  Create a function which returns the number of true values there are in an array.


CountTure=(arr)=>
{
    let count=0;

    for (let index = 0; index < arr.length; index++) {
       if(arr[index]==true)
       {
        count++;
       }        
    }
    return count
}