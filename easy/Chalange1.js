//Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.

const add=(num)=>
{
let temp = num;
// while(num>0)
// {
//  temp=temp+(num-1);
//  num--
// }
// document.write(temp)

for (let num = temp; num > 0; num--) {
    temp=temp+(num-1)
}
return temp;
}

