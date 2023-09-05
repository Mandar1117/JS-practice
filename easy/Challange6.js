//  Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

let a=[18,2,45,4,15,6,77,8];
function minMax(a)
{
    let min=a[0];
    let max=a[0];

    for (let i = 0; i < a.length; i++) 
    {
        if(min>a[i]) 
        {
            min=a[i];
        }
        if(max<a[i])
        {
            max=a[i];
        }   
    }
    
    let newarr=[min,max]
    return newarr

}
