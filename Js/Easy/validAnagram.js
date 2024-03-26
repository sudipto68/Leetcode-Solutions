var validAnagram = function (s, t) {
  let sorted_s = s.split("").sort().join("");
  let sorted_t = t.split("").sort().join("");
  if (sorted_s === sorted_t) {
    return true;
  } else {
    return false;
  }
};

console.log(validAnagram("anagram", "nagaram"));
