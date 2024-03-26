function findPalindrome(string) {
  //sanitize string - remove alphanumeric characters.
  let s = string.toLowerCase().replace(/[^a-zA-Z\d\s:]/g, "");
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    } else {
      return true;
    }
    left++;
    right--;
  }
}

const string = "ono";
console.log(findPalindrome(string));
