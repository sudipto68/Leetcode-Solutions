var missingNumber = function (nums) {
  let n = nums.length;
  let sum = (n * (n + 1)) / 2;
  for (let i = 0; i < n; i++) {
    sum = sum - nums[i];
  }
  return sum;
};

console.log(missingNumber([3, 0, 1]));
