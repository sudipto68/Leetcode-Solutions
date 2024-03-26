//A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. A divisor of an integer x is an integer that can divide x evenly.
var checkPerfectNumber = function (num) {
  let sum = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      sum = sum + i;
    }
  }
  return sum === num;
};

console.log(checkPerfectNumber(28));
