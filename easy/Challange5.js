//Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.

//example. largestSwap(27) ➞ false   largestSwap(43) ➞ true

function largestSwap(num)
{
    let initial=num;
    let temp=num;
    num=num%10;
    temp=Math.floor(temp/10);
    num=(num*10)+temp;
    if(initial<num)
    {
        document.write(false);
    }
    else
    {
        document.write(true);
    }
}