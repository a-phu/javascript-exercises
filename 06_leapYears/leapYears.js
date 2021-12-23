const leapYears = function(year) {
    //if year not divisible by 4 with no remainders
    if(year % 4 !== 0){
        return false;
    } 

    //if year divisible by 100 but not divisible by 400
    if(year % 100 === 0 && year % 400 !== 0){
        return false;
    }

    return true;
};

console.log(leapYears(1985));
// Do not edit below this line
module.exports = leapYears;
