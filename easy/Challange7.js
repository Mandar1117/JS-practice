//Create a function that returns true if the first array can be nested inside the second and false otherwise.

//arr1 can be nested inside arr2 if:
//arr1's min is greater than arr2's min.
//arr1's max is less than arr2's max.

let arr1=[ 2, 3, 4, 5 ];
let arr2=[ 1, 9 ];

function canNext(arr1,arr2)
{
    let min1=arr1[0];
    let max1=arr1[0];
    for (let i = 0; i < arr1.length; i++) 
    {
        if(min1>arr1[i]) 
        {
            min1=arr1[i];
        }
        if(max1<arr1[i])
        {
            max1=arr1[i];
        }   
    }

    let min2=arr2[0];
    let max2=arr2[0];
    for (let i = 0; i < arr2.length; i++) 
    {
        if(min2>arr2[i]) 
        {
            min2=arr2[i];
        }
        if(max2<arr2[i])
        {
            max2=arr2[i];
        }   
    }

    if(min1>min2 && max1<max2)
    {
        return true
    }
    else
    {
        return false
    }
}