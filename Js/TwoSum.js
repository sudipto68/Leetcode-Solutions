function twoSum(nums, target) {
  var l = nums.length;
  for (i = 0; i < l - 1; i++) {
    for (j = i + 1; j <= l; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

console.log(twoSum([3, 7, 2, 2], 9));
