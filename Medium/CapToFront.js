//Create a function that moves all capital letters to the front of a word.

const capToFront=(a)=>
{
    let word=a;
    let uppercase=""
    let lowercase=""

    for (let i = 0; i < word.length; i++) {
        
        if (word.codePointAt([i])>=65 && word.codePointAt([i])<=91) {
            uppercase+=word[i];
        }

        if (word.codePointAt([i])>=97 && word.codePointAt([i])<=122) {
            lowercase+=word[i];
        }

    }
    return uppercase+lowercase;
}