let averageOfSum = (array) => {
    let sum = 0;
    for(let i = 0; i <=array.length-1; i++){
        sum += array[i];
    }
    let average = sum / array.length;
    console.log("average of all array elements = ", average);
}
let arr = [1,2,4,5,4,6,7,8,9];
averageOfSum(arr);