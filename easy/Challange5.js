//Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.

//example. largestSwap(27) ➞ false   largestSwap(43) ➞ true

function largestSwap(num)
{
    let initial=num;
    let temp=num;
    initial=initial%10;
    temp=Math.floor(temp/10);
    initial=(initial*10)+temp;
    if(num<initial)
    {
        document.write(false);
    }
    else
    {
        document.write(true);
    }
}