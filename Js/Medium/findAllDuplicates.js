var findDuplicates = function (nums) {
  let set = new Set();
  let result = [];
  for (let num of nums) {
    if (set.has(num)) {
      result.push(num);
    }
    set.add(num);
  }
  return result;
};
console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
