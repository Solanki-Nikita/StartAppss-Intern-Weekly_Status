// Write a JavaScript function that takes a string as input and returns the string reversed.

function reverse (str) {
    let r = ""; // initialize an empty string to store the reversed string
    // use a for loop to iterate through the string in reverse order and concatenate each character to the new string
    for (let i = str.length-1; i >=0; i--){
    r += str [i];
}
return r;
}
console.log( reverse ("function"));