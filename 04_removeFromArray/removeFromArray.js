const removeFromArray = function(array) {
   let args = Array.prototype.slice.call(arguments, 1);
   let match = '';
   let newArray = [];
   
   for(let i = 0; i < array.length; i++){
       //check to see if array element matches anything in arguments passed
       for(let j = 0; j < args.length; j++){
           //if match found, assign that to variable match
           if(array[i] === args[j]) match = array[i];
       }

       //if match != '', then not matched to parameters passed and not removed
       if(match === ''){
           newArray.push(array[i]);
       }

       //reset checker
       match = '';
   }

   return newArray;
   
};

// let array = [1, 2, 3, 4];
// console.log(removeFromArray(array, 3, 7, 'tacos', 1));
// Do not edit below this line
module.exports = removeFromArray;
