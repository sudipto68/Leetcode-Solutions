function intersection(num1, num2) {
  set1 = new Set(num1);
  set2 = new Set(num2);
  ans = [];

  for (let item of set1) {
    if (set2.has(item)) {
      ans.push(item);
    }
  }
  return ans;
}

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
