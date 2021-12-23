const sumAll = function(...args) {
    let listToSum = args.sort((a, b) => a - b);
    if(listToSum.some(item => item < 0) || listToSum.some(item => typeof item !== "number")) return 'ERROR';

    let sum = 0;
    for(let i = listToSum[0]; i <= listToSum[listToSum.length-1]; i++){
        sum += i;
    }

    return sum;
};

console.log(sumAll('yo', 4).toString());
// Do not edit below this line
module.exports = sumAll;
