//In this kata you are required to, given a string, replace every letter with its position in the alphabet.
//If anything in the text isn't a letter, ignore it and don't return it.
//"a" = 1, "b" = 2, etc.





const alphabetPosition=(sentance)=>
{
    let str = sentance;
    str = str.toLowerCase().replaceAll(" ", "");
    let text = "";

    for (let i = 0 ; i < str.length ; i++) 
    {
        if (str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122)
        {
            let char = str.charCodeAt(i) - 96;
            text += " " + char;
        }
    }
    return text.trim();
}
