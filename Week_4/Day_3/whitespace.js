// This code removes all whitespace characters from the given string, including spaces, newlines, carriage returns, and tabs.

let string = "This is a sample  string  to remove    all whitespace characters"
let newString = ''
for(let i = 0; i<= string.length-1; i++){
    // Check if the current character is not a whitespace character
    if(string[i] !==' ' && string[i] !== '\n' && string[i] !== '\r' && string[i] !=='\t'){
        newString += string[i];
    }
}
console.log(newString);