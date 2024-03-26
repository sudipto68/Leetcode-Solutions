function palindrome(x) {
  // var temp = x;
  // var sum = 0;

  // while (temp != 0) {
  //   remainder = temp % 10;
  //   sum = sum * 10 + remainder;
  //   temp = parseInt(temp / 10);
  // }

  // if (x < 0) return false;
  // else if (sum === x) return true;
  // else return false;

  if (x < 0) return false;
  x = x.toString();
  let l = 0;
  let r = x.length - 1;
  while (l < r) {
    if (x[l] !== x[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
}

console.log(palindrome(-121));
