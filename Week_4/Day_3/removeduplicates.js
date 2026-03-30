let removeDuplicates = (dupli) => {
    
    // variable to store new array without duplicates
    
    let newArr = [];
    let count = 0;  // variable to count the number of duplicates
    let k = 0;// k is used to store the index of new array without duplicates
    for( let i=0; i<=dupli.length-1;i++){
        
        for (let j=i+1; j<dupli.length-1; j++){
            if(dupli[i] === dupli[j]){
                count++
            }
        }
        if(count === 0){
            newArr[k++] = dupli[i];
        }else {
            count = 0;  
        }

    }
    console.log(newArr);
}
let duplicates = [1,2,3,4,4,4,5,5,6,3,7,1];
removeDuplicates(duplicates);