//longest word in a string
const longestWord = (str) => {
    //use split the string into an array of words
    const words = str.split(" ");
    let largestWord = '';
 // use for of loop to iterate through the array of words
    for(const word of words){
        // 
        if (word.length > largestWord.length){
            largestWord = word;
        }
    }
    return largestWord
}
// test the function
const str = "I am a programmer";

const result = longestWord(str);
console.log(result);