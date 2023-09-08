// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array.
//Otherwise, return "there is no 7 in the array".

const sevenBoom=(arr)=>
{
    let temp;
    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i]==7) 
        {
            temp=arr[i]
        }
    }
    if (temp==7) return("Boom!")

    else  return("there is no 7 in the array")

}