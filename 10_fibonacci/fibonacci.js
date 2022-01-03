// const fibonacci = function(number) {
//         //if negative series, return "OOPS"
//         number = parseInt(number); 
//         if(number < 0) return "OOPS";
//         //start fibonacci sequence from 1
//         let sum = 1;
//         //create array for series starting from 0
//         let start = 0;
//         //if number = 1, i is not less than number - 1 = 0
//         //so loop does not run and skips to return sum = 1
//         for(let i = 0; i < number - 1; i++){
//             //push sum = 2 to be the next number to be added
//             console.log("before sum: " + sum + ", start: " + start);
//             //store sum amt in temp
//             let temp = sum;
//             //add start to sum
//             sum += start;
//             //store old start into the temp
//             start = temp;
//             console.log("after sum: " + sum + ", start: " + start);
//         }


//         return sum;
// };

//odin solution
const fibonacci = function(count){
        //if count negative
        if(count < 0) return "OOPS";

        //if count is 0
        if (count === 0) return 0;

        //let a be the start of the sequence
        let a = 0;
        //let b be the first number of the sequence
        let b = 1;

        for(let i = 1; i < count; i++){
                //store b's value (will be the previous number and the new sum) in a temp variable
                const temp = b;

                //add a and b together and store into b
                b = a + b;

                //assign the previous number into a
                a = temp;
        }

        return b;

}



console.log(fibonacci(5));
// Do not edit below this line
module.exports = fibonacci;
