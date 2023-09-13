//p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)
//the function nb_year should return n number of entire years needed to get a population greater or equal to p.

// Example : nb_year(1500, 5, 100, 5000) -> 15


const nbYear=(p0,percent,aug,p)=>
{
    let count=0;
    let population=p0;
    let temp =p0;
    while( population < p )
    {
        population = temp + (temp*(percent/100)) + aug;
        temp = population;
        count++
    }
    return count
}