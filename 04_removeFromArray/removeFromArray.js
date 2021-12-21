const removeFromArray = function(array, element, element2) {
    let index = 0;
    let index2 = 0;
    for(let i = 0; i < array.length; i++){
        if(element === array[i]){
            index = i;
        } 
        if(element2 !== undefined){
            if(element2 === array[i]){
                index2 = i;
            }
        }
   }
   //splice returns the value removed and removes it
    array.splice(index, 1);
    if(element2 !== undefined){
        array.splice(index2, 1);
    }
    return array;
};

let array = [1, 2, 3, 4];
console.log(removeFromArray(array, 3, 2));
// Do not edit below this line
// module.exports = removeFromArray;
