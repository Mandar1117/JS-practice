//Take 2 strings s1 and s2 including only letters from a to z. 
//Return a new string, the longest possible, containing distinct letters - 
//each taken only once - coming from s1 or s2



const order=(s1,s2)=>
{
    let s3=s1+s2;
    let updatetstring="";
    for (let i = 0; i < s3.length; i++) {
        
        if(s3.charCodeAt(i)!=s3.charCodeAt(i+1))
        {
            updatetstring+=s3[i]
        }
    }
    return updatetstring
}