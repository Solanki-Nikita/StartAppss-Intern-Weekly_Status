// Check if a string is a palindrome

let isPalindrome = (str) => {
    // take the string and reverse it
    let newstr = '';
    for (let i = str.length-1; i>=0; i--){
        newstr += str[i];
    }
    return newstr;
}
// take the reversed string and compare it with the original string
let string = "madam";
let result = isPalindrome(string);
if(result === string) {
    console.log(string, "is a palindrome");
}else {
    console.log(string, "is not a palindrome");
}


