function reverse(x) {
  var temp = x;
  var newX =
    temp < 0
      ? Math.abs(temp).toString().split("").reverse().join("")
      : temp.toString().split("").reverse().join("");

  if (newX > 2 ** 31 - 1) return 0;
  else if (temp < 0) return newX * -1;
  else return newX;
}

console.log(reverse(123));

//solution without converting into string

function rev(x) {
  var temp = x < 0 ? Math.abs(x) : x;
  var sum = 0;

  while (temp !== 0) {
    r = temp % 10;
    sum = sum * 10 + r;
    temp = parseInt(temp / 10);
  }

  if (sum > 2 ** 31 - 1) return 0;
  else if (x < 0) return sum * -1;
  else return sum;
}

console.log(rev(123456789118));
