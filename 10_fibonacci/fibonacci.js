const fibonacci = function(number) {
        //if negative series, return "OOPS"
        number = parseInt(number); 
        if(number < 0) return "OOPS";
        //start fibonacci sequence from 1
        let sum = 1;
        //create array for series starting from 0
        let array = [0];
        //if number = 1, i is not less than number - 1 = 0
        //so loop does not run and skips to return sum = 1
        for(let i = 0; i < number - 1; i++){
            //push sum = 2 to be the next number to be added
            console.log("before push: " + sum + ", array: " + array);
            array.push(sum);
            //add sum = 2 + array[i] = 1 =  2
            sum += array[i];
            console.log("after sum: " + sum + ", array: " + array);
        }

        return sum;
};

console.log(fibonacci("2"));
// Do not edit below this line
module.exports = fibonacci;
