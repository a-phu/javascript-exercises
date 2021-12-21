const removeFromArray = function(array, element, element2) {
    let remainingArray = [];
    for(let i = 0; i < array.length; i++){
       if(array[i] !== element && array[i] !== element2){
           remainingArray.push(array[i]);
       }
    }
   
    return remainingArray;
};

// let array = [1, 2, 3, 4];
// console.log(removeFromArray(array, 3, 7));
// Do not edit below this line
module.exports = removeFromArray;
