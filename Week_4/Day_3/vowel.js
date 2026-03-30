// Function to count the number of vowels in a string

let numberOFvowels = (str) => {
    let nov = 0;
    // loop through the string and check if each character is a vowel or not
    for( let i = 0; i<str.length; i++){
        if(str[i] === "a"  || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u")
            nov++;
    }
    // print the number of vowels in the string
    console.log("Number of vowels in the string is: ", nov);
}
let string = "I am a programmer";
numberOFvowels(string);