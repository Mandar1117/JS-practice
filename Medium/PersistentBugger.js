//  Write a function, persistence, that takes in a positive parameter num and
//  returns its multiplicative persistence, which is the number of times 
//  you must multiply the digits in num until you reach a single digit.

Persistance =(num)=>
{
    if (num=>10)
    {
        let temp=num;
        while(temp=>9)
        {
           temp=divide(temp);
           
           if(temp<=9) break
        }
    }
    else
    {
        return 0;
    }
}
function divide(num)
{
    let temp=num%10;
    let temp1=Math.floor(num/10);
    let result =temp*temp1;
    return result;
}