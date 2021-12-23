//annabel's solution - using array sort(), array some() and for loop
// const sumAll = function(...args) {
//     //sort the parameters from smallest using array sort function
//     //with a compare function  - finds diff of two numbers
//     //and sorts based on result - neg, zero, pos
//     let listToSum = args.sort((a, b) => a - b);

//     //if array has any negative numbers or non-number elements, will return 'ERROR'
//     if(listToSum.some(item => item < 0) || listToSum.some(item => typeof item !== "number")) return 'ERROR';

//     //declare sum variable
//     let sum = 0;

//     //from first value to last value, add each number between them (inclusively)
//     //to sum
//     for(let i = listToSum[0]; i <= listToSum[listToSum.length-1]; i++){
//         sum += i;
//     }

//     //return sum
//     return sum;
// };


//solution odin
const sumAll = function(min, max){
    //numbers are not integers, return 'ERROR'
    if(!Number.isInteger(min) || !Number.isInteger(max)) return 'ERROR';

    //or if numbers are negative
    if(min < 0 || max < 0) return 'ERROR';

    //then sort numbers if min > max
    if (min > max){
        const temp = min;
        min = max;
        max = temp;
    }
    
    //declare sum variable
    let sum = 0;

    //add each number between min and max (inclusive) to sum
    for(let i = min; i < max + 1; i++){
        sum += i;
    }

    //return sum
    return sum;
}

console.log(sumAll('yo', 4).toString());
// Do not edit below this line
module.exports = sumAll;
