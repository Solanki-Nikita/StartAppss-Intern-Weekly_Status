let sumOfAllElements = (array) => {
    let sumOfElements = 0
    for(let i = 0; i<= array.length-1; i++){
        sumOfElements += array[i];
    }
    console.log("sum of all array elements = ", sumOfElements);
    
}
let arr = [1,2,4,5,4,6,7,87,9];
sumOfAllElements(arr);