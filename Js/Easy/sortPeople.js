//In javascript object, if keys are numbers then object auto sort them in ascending order.

var sortPeople = function (names, heights) {
  let map = {};
  let result = [];
  for (let i = 0; i < names.length; i++) {
    map[heights[i]] = names[i];
  }

  for (let values of Object.values(map)) {
    result.push(values);
  }
  return result.reverse();
};

console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]));
