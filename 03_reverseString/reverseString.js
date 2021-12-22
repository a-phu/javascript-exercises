const reverseString = function(str) {
    const split = str.split('');
    let i = split.length - 1;
    let counter = 0;
    let reversed = '';

    while(counter < split.length){
        reversed += split[i];
        i--;
        counter++;
    }
    
    return reversed;
};


// Do not edit below this line
module.exports = reverseString;
