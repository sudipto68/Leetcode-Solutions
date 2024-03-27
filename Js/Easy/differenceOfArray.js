var findDifference = function (nums1, nums2) {
  let set_nums1 = new Set(nums1);
  let set_nums2 = new Set(nums2);
  let answer = [];
  for (let num of set_nums1) {
    if (set_nums2.has(num)) {
      set_nums2.delete(num);
      set_nums1.delete(num);
    }
  }
  answer = [[...set_nums1], [...set_nums2]];
  return answer;
};

console.log(findDifference([1, 2, 3], [2, 4, 6]));
