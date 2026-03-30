// Factorial of a number
let calculateFactorial = (no) => {

    // variable to store factorial value
    let fact = 1;
    // loop condition to calculate factorial
    for (let i = no; i > 0; i--){
        fact = fact * i;
    }
    console.log("Factorial of ", no, " is ", fact);
}
// give number to calculate factorial
let number = 3 ; 
// call the function to calculate factorial
calculateFactorial(number);