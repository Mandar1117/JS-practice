//Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.



const primeNum=(num)=>
{
    let den;
    for(den = 2; den < num; den++)
    {
        if (num % den==0 )
        {
            break
        }
    }
    if (num==den) return true

    return false
}