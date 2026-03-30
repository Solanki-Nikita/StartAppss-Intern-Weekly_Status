//largest number in an array
//take arrow function to find largest number in an array
let largestNumber = (arr) => {
    let largestNumber = 0;
    // loop to find largest number in an array
    for(let i = 0; i <=arr.length-1; i++){
        // condition to check if the current element is greater than the largest number
        if(arr[i] > largestNumber){
            largestNumber = arr[i];
        }
    }
    console.log("Largest number = ", largestNumber);
}

// give an array to find largest number
let arr = [1,2,3,42,5,6,7,8,9];
largestNumber(arr);