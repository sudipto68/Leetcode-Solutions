function palindrome(x) {
  var temp = x;
  var sum = 0;

  while (temp != 0) {
    remainder = temp % 10;
    sum = sum * 10 + remainder;
    temp = parseInt(temp / 10);
  }

  if (x < 0) return false;
  else if (sum === x) return true;
  else return false;
}

console.log(palindrome(10));
