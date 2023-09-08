//Create a function that takes the number of wins, 
//draws and losses and calculates the number of points a football team has obtained so far.

//wins get 3 points
//draws get 1 point
//losses get 0 points
//input should be more than or equal to 0



const footballPoints=(win,draw,loose)=>
{
    if (win>=0 && draw>=0 && loose>=0) {
        
        let point= (win*3)+(draw*1)+(loose*0);
    }
    else return "Wrong input"

}