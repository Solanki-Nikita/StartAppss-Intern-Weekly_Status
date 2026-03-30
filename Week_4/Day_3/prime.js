// let primeOrNot = (num) => {
//    if (num <=1)
//     return false;

//     for (let i = 2; i <= Math.sqrt(num); i++){
//         if(num % i === 0 ){
//             return false;
//         }
// }       
// return true;
// };
// console.log(primeOrNot(7));




// function to check whether a number is prime or not

let primeOrNot = (no) => {
    // variable to count the number of factors
    let count = 1;
    
    for(let i=2; i<no; i++){
        // condition to check if the number is divisible by any number other than 1 and itself
        if(no%i === 0){
            count =0;
        }     
    }
    // condition to check if the count is 1 or not
    if(count ===1){
        console.log("prime");        
    }
    else{
        console.log("not prime");
        
    }   
    
}
// give number to check whether it is prime or not
let number = 1;
if(number === 1){
    console.log("not prime");    
}
else{
    primeOrNot(number);    
}