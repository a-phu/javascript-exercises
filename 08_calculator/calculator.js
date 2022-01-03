const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = array => parseInt(array.reduce((accelerator, current) => accelerator + current, 0));

const multiply = function(array) {
  return parseInt(array.reduce((accelerator, current) => accelerator * current, 1));
};

const power = (base, exponent) => Math.pow(base, exponent);

const factorial = function(a) {
  if(a === 0) return 1;
  let total = 1;
  for(let i = a; i >= 1; i--){
    total *= i;
  }
  return total;
};
  

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
