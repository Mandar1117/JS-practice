//Given a number, return an array containing the two halves of the number. 
//If the number is odd, make the rightmost number higher.

numberSplit=(num)=>
{
    if(num%2==0)
    {
        let half=num/2

        return [half,half]
    }
    else
    {
        let half = (num-1)/2
        let half1= half+1

        return [half,half1]
    }
}
