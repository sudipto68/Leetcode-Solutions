var reverse = function (x) {
  let temp = x < 0 ? Math.abs(x) : x;
  let string_temp = temp.toString();
  let result = string_temp.split("").reverse().join("");

  if (parseInt(result) > 2 ** 31 - 1) {
    return 0;
  } else if (x < 0) {
    return parseInt(result) * -1;
  } else {
    return parseInt(result);
  }
};
console.log(reverse(120));
